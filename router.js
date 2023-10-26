const express = require('express')
const router = express.Router()

const conexion = require('./database/db')

router.get('/',(req, res)=>{

    conexion.query('select * from usuarios', (error, results)=> {
        if(error){
            throw error
        } else {
            res.render('index', {results:results});
        }
    })
})

router.get('/crear',(req,res)=>{
    res.render('crear')
})

router.get('/editar/:bol',(req,res)=>{
    const bol = req.params.bol
    const sentedit = `select * from usuarios where bol="${bol}"`;
    conexion.query(sentedit, (error, results)=>{
        if(error){
            throw error
        } else {
            res.render('editar', {nom:results[0]});
            console.log(bol)
        }
    })
})

router.get('/eliminar/:bol', (req,res)=>{
    const bol = req.params.bol
    conexion.query('delete from usuarios where bol = ?', [bol], (error, results)=>{
        if(error){
            throw error
        } else {
            res.redirect('/')
        }
    })
})


const crud = require('./controllers/crud')
router.post('/guardar', crud.guardar)
router.post('/update', crud.update)

module.exports = router