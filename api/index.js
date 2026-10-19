/**
 * VERCEL SERVERLESS FUNCTION ENTRY POINT
 * Redirige todas las solicitudes de /api/* hacia la app de Express con Supabase
 */

const app = require('../server.js');

module.exports = (req, res) => {
  return app(req, res);
};
