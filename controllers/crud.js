const conexion = require('../database/db')

exports.guardar = (req, res) => {
    const bol = req.body.bol
    const nom = req.body.nom
    const appat = req.body.appat
    const apmat = req.body.apmat
    const tel = req.body.tel

    sent = `insert into usuarios (bol,nom,appat,apmat,tel) values ("${bol}","${nom}","${appat}","${apmat}","${tel}")`;
    conexion.query(sent,(error,results)=>{
        if(error) return console.log(error);
        res.redirect('/')
    })
}

exports.update = (req, res) =>{
    const bol = req.body.bol
    const nom = req.body.nom
    const appat = req.body.appat
    const apmat = req.body.apmat
    const tel = req.body.tel
    conexion.query('update usuarios set ? where bol = ?', [{nom:nom, appat:appat, apmat:apmat, tel:tel},bol], (error,results)=>{
        if(error) return console.log(error);
        res.redirect('/')
    })
}