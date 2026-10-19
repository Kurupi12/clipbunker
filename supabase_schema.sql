-- ============================================================================
-- CLIPBUNKER // ESQUEMA DE BASE DE DATOS SUPABASE (POSTGRESQL)
-- Portal Comunitario de Jugadas de Hell Let Loose (Producción Vercel + Supabase)
-- ============================================================================

-- 1. EXTENSIONES
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. TABLA DE CONFIGURACIÓN SEMANAL (CICLO Y HORARIOS)
CREATE TABLE IF NOT EXISTS public.weekly_config (
    id INT PRIMARY KEY DEFAULT 1,
    week_number INT NOT NULL DEFAULT 42,
    operation_name TEXT NOT NULL DEFAULT 'OPERACIÓN OVERLORD // SEMANA #42',
    close_day INT NOT NULL DEFAULT 0, -- 0 = Domingo
    close_hour INT NOT NULL DEFAULT 20, -- 20:00 hs
    discord_webhook_url TEXT DEFAULT '',
    default_top_count INT DEFAULT 1,
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT single_row_check CHECK (id = 1)
);

-- Insertar configuración inicial por defecto si no existe
INSERT INTO public.weekly_config (id, week_number, operation_name, close_day, close_hour, default_top_count)
VALUES (1, 42, 'OPERACIÓN OVERLORD // SEMANA #42', 0, 20, 1)
ON CONFLICT (id) DO NOTHING;

-- 3. TABLA DE CLIPS DE LA COMUNIDAD (YOUTUBE EMBEDS - COSTO $0)
CREATE TABLE IF NOT EXISTS public.clips (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    video_url TEXT NOT NULL,
    youtube_id TEXT NOT NULL,
    map TEXT NOT NULL DEFAULT 'Carentan',
    coords TEXT DEFAULT 'GRID D4 // CARENTAN',
    role TEXT NOT NULL DEFAULT 'Fusilero',
    faction TEXT NOT NULL DEFAULT 'US Army',
    faction_class TEXT NOT NULL DEFAULT 'faction-allies',
    author_discord TEXT NOT NULL DEFAULT '@Soldado_Discord',
    author_discord_id TEXT DEFAULT 'discord_anon',
    author_clan TEXT DEFAULT '[Comunidad HLL]',
    votes INT NOT NULL DEFAULT 1,
    voter_ids JSONB NOT NULL DEFAULT '[]'::jsonb,
    hook_text TEXT,
    status TEXT NOT NULL DEFAULT 'candidate', -- 'candidate' | 'in_queue' | 'winner'
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_clips_votes ON public.clips (votes DESC);
CREATE INDEX IF NOT EXISTS idx_clips_created ON public.clips (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_clips_map ON public.clips (map);
CREATE INDEX IF NOT EXISTS idx_clips_role ON public.clips (role);
CREATE INDEX IF NOT EXISTS idx_clips_faction ON public.clips (faction);

-- 4. TABLA DE COMENTARIOS (RADIO DE TRINCHERA)
CREATE TABLE IF NOT EXISTS public.comments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    clip_id TEXT NOT NULL REFERENCES public.clips(id) ON DELETE CASCADE,
    author TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'Soldado',
    text TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_comments_clip ON public.comments (clip_id, created_at ASC);

-- 5. TABLA DEL SALÓN DE LOS HÉROES (GANADORES HISTÓRICOS CONDECORADOS)
CREATE TABLE IF NOT EXISTS public.hall_of_fame (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    week TEXT NOT NULL,
    title TEXT NOT NULL,
    youtube_id TEXT NOT NULL,
    video_url TEXT NOT NULL,
    author_discord TEXT NOT NULL,
    author_clan TEXT DEFAULT '[Comunidad HLL]',
    map TEXT NOT NULL,
    role TEXT NOT NULL,
    faction TEXT NOT NULL,
    votes INT NOT NULL,
    medal_title TEXT NOT NULL DEFAULT 'Medalla de Honor Semanal',
    community_honor TEXT NOT NULL DEFAULT 'Campeón Oficial del Portal',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_hall_created ON public.hall_of_fame (created_at DESC);

-- 6. TABLA DE COLA INTERNA DEL MODERADOR (ESTUDIO 9:16)
CREATE TABLE IF NOT EXISTS public.tiktok_queue (
    clip_id TEXT PRIMARY KEY REFERENCES public.clips(id) ON DELETE CASCADE,
    added_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 7. TABLA DE HISTORIAL DE EXTRACCIONES Y DESPACHO DE GANADORES
CREATE TABLE IF NOT EXISTS public.dispatch_history (
    id TEXT PRIMARY KEY,
    date TEXT NOT NULL,
    week TEXT NOT NULL,
    clips_count INT NOT NULL,
    top_clip_title TEXT NOT NULL,
    methods JSONB NOT NULL DEFAULT '[]'::jsonb,
    moderator TEXT NOT NULL DEFAULT 'Alto_Mando',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_dispatch_created ON public.dispatch_history (created_at DESC);

-- 8. POLÍTICAS DE ACCESO (ROW LEVEL SECURITY - RLS)
ALTER TABLE public.weekly_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.clips ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.hall_of_fame ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tiktok_queue ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.dispatch_history ENABLE ROW LEVEL SECURITY;

-- Políticas Públicas (Lectura libre para la comunidad)
CREATE POLICY "Lectura pública de weekly_config" ON public.weekly_config FOR SELECT USING (true);
CREATE POLICY "Lectura pública de clips" ON public.clips FOR SELECT USING (true);
CREATE POLICY "Lectura pública de comments" ON public.comments FOR SELECT USING (true);
CREATE POLICY "Lectura pública de hall_of_fame" ON public.hall_of_fame FOR SELECT USING (true);
CREATE POLICY "Lectura pública de dispatch_history" ON public.dispatch_history FOR SELECT USING (true);
CREATE POLICY "Lectura pública de tiktok_queue" ON public.tiktok_queue FOR SELECT USING (true);

-- Inserción / Votación pública controlada
CREATE POLICY "Cualquiera puede publicar clips" ON public.clips FOR INSERT WITH CHECK (true);
CREATE POLICY "Cualquiera puede votar clips" ON public.clips FOR UPDATE USING (true);
CREATE POLICY "Cualquiera puede comentar" ON public.comments FOR INSERT WITH CHECK (true);

-- Permisos de Service Role (API de Vercel y Moderación)
CREATE POLICY "Service role tiene acceso total clips" ON public.clips FOR ALL TO service_role USING (true);
CREATE POLICY "Service role tiene acceso total comments" ON public.comments FOR ALL TO service_role USING (true);
CREATE POLICY "Service role tiene acceso total weekly_config" ON public.weekly_config FOR ALL TO service_role USING (true);
CREATE POLICY "Service role tiene acceso total hall_of_fame" ON public.hall_of_fame FOR ALL TO service_role USING (true);
CREATE POLICY "Service role tiene acceso total tiktok_queue" ON public.tiktok_queue FOR ALL TO service_role USING (true);
CREATE POLICY "Service role tiene acceso total dispatch_history" ON public.dispatch_history FOR ALL TO service_role USING (true);

-- 9. DATOS DE SIEMBRA INICIALES (DEMO CLIPS Y SALÓN DE LOS HÉROES)
INSERT INTO public.clips (id, title, video_url, youtube_id, map, coords, role, faction, faction_class, author_discord, author_clan, votes, voter_ids, hook_text, status)
VALUES
(
    'clip-1',
    'Un solo Tiger I destruye 4 Shermans y defiende el último sector en Foy',
    'https://www.youtube.com/watch?v=M7lc1UVf-VE',
    'M7lc1UVf-VE',
    'Foy',
    'GRID E6 // FOY',
    'Comandante de Tanque',
    'Wehrmacht',
    'faction-axis',
    '@PzKpfw_Hans#4412',
    '[PanzerLehr LATAM]',
    148,
    '["discord_demo_1", "discord_demo_2"]'::jsonb,
    'CUANDO 1 SOLO TIGER DETIENE TODA LA OFENSIVA EN FOY',
    'in_queue'
),
(
    'clip-2',
    'Francotirador a 420m limpia la Garrison enemiga completa en Stalingrad',
    'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
    'aqz-KE-bpKQ',
    'Stalingrad',
    'GRID C4 // STALINGRAD',
    'Francotirador (Recon)',
    'Ejército Rojo',
    'faction-soviet',
    '@Vassili_Zaitsev#1942',
    '[Guardia Roja]',
    132,
    '["discord_demo_3"]'::jsonb,
    'FRANCOTIRADOR A 420 METROS EN STALINGRADO',
    'candidate'
),
(
    'clip-3',
    'Asalto heroico con humo y Bazooka en los acantilados de Omaha Beach',
    'https://www.youtube.com/watch?v=LXb3EKWsInQ',
    'LXb3EKWsInQ',
    'Omaha Beach',
    'GRID G2 // OMAHA',
    'Antitanque',
    'US Army',
    'faction-allies',
    '@Sgt_Horvath#1944',
    '[2nd Rangers]',
    97,
    '[]'::jsonb,
    'ASALTO IMPOSIBLE EN OMAHA BEACH CON BAZOOKA',
    'candidate'
),
(
    'clip-4',
    'Bombardeo de Comandante elimina 24 enemigos y 2 Garrisons en Carentan',
    'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    'jNQXAC9IVRw',
    'Carentan',
    'GRID F5 // CARENTAN',
    'Comandante',
    'US Army',
    'faction-allies',
    '@Major_Winters#506',
    '[Easy Company]',
    84,
    '[]'::jsonb,
    'EL BOMBARDEO MÁS BRUTAL DE LA SEMANA EN CARENTAN',
    'candidate'
)
ON CONFLICT (id) DO NOTHING;

-- Comentarios iniciales
INSERT INTO public.comments (clip_id, author, role, text)
VALUES
('clip-1', '@Capt_Speirs#101', 'Oficial de Asalto', 'El ángulo que tomó el conductor para rebotar el 76mm fue de manual. Voto merecidísimo.'),
('clip-1', '@Artillero_Sur#882', 'Comandante', 'La coordinación entre el artillero y el comandante de carro bajo fuego de artillería fue brutal.'),
('clip-2', '@Spotter_Norte#311', 'Recon', 'La caída de bala a más de 400 metros en HLL es complicadísima. Qué puntería.'),
('clip-3', '@Medico_Trinchera#506', 'Médico', 'Pura película de Rescatando al Soldado Ryan.')
ON CONFLICT DO NOTHING;

-- Salón de los Héroes inicial
INSERT INTO public.hall_of_fame (week, title, youtube_id, video_url, author_discord, author_clan, map, role, faction, votes, medal_title, community_honor)
VALUES
('SEMANA #41', 'Duelo de bayoneta y pala bajo fuego de artillería en Hürtgen Forest', 'M7lc1UVf-VE', 'https://www.youtube.com/watch?v=M7lc1UVf-VE', '@Cpl_Upham#1944', '[1st Infantry Div]', 'Hürtgen Forest', 'Oficial de Escuadra', 'US Army', 312, 'Medalla de Honor Semanal', '1° Puesto Oficial'),
('SEMANA #40', 'Disparo de Panzerschreck a 180 metros contra un Stuart a toda velocidad', 'aqz-KE-bpKQ', 'https://www.youtube.com/watch?v=aqz-KE-bpKQ', '@Feldwebel_Steiner#99', '[Kampfgruppe Peiper]', 'Sainte-Mère-Église', 'Antitanque', 'Wehrmacht', 279, 'Cruz de Hierro Semanal', '1° Puesto Oficial'),
('SEMANA #39', 'Defensa de último minuto con MG42 en el puente de Remagen', 'LXb3EKWsInQ', 'https://www.youtube.com/watch?v=LXb3EKWsInQ', '@MG42_Brutus#771', '[Wehrmacht Sur]', 'Kursk', 'Ametrallador', 'Wehrmacht', 245, 'Medalla al Mérito Táctico', '1° Puesto Oficial')
ON CONFLICT DO NOTHING;

-- Cola inicial
INSERT INTO public.tiktok_queue (clip_id) VALUES ('clip-1') ON CONFLICT DO NOTHING;
