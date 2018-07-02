
// Objeto de configuración de la Base de Datos
module.exports = function (init = false) {
  return {
    database: process.env.DB_NAME || 'peerpeel_web', /* Nombre de la DB  */
    username: process.env.DB_USER || 'wolfy', /* Usuario          */
    password: process.env.DB_PASS || 'wolfy', /* Contraseña       */
    local: process.env.DB_HOST || 'localhost', /* Dirección IP     */
    dialect: 'mysql', /* Nombre del gestor de DBs a usar en el proyecto */
    logging: s => console.log(s),
    setup: init, /* Restauración de la Database */
    operatorsAliases: false
  }
}