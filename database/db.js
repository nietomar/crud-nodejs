const mysql = require('mysql2')

const conexion = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database : 'alumnos',
    password : 'n0m3l0',
    port : 3308
})

conexion.connect((error) => {
    if(error){
        console.error('El error de conexion es: '+error)
        return
    }
    console.log('Conectado a la base de datos')
})

module.exports = conexion