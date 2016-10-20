var express = require('express');
var router = express.Router();
var models = require('../models')
var user = models.User

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/reg', function(req, res, next) {
  res.render('reg', {title:'Register yourself'})
})

router.post('/reg', function(req, res, next) {
  user.findOne({
    where:{name: req.body.name}
  }).then(function(data) {
    if (data == null) {
      user.create({
        name: req.body.name,
        birthday: req.body.birthday,
        about: req.body.about
      }).then(function(data){
      res.render('user', {name:req.body.name})
      })
    } else {
      res.send('Anda sudah terdaftar')
    }
  })
})

router.get('/list', function(req, res, next) {
  user.findAll({}).then(function (data) {
    res.render('index', {data})
  })
})

router.get('/update/:user_id', function(req, res, next) {
  user.findOne({
    where: {id: req.params.user_id}
  }).then(function (data) {
    res.render('update', {data, title:'Update data', userID: req.params.user_id})
  })
})

router.post('/:user_id', function(req, res, next) {
  console.log('body >>',req.body);
  user.findOne({
    where:{id:req.params.user_id},
    attribute: ['id', 'name', 'birthday', 'about']
  }).then(function(data) {
    console.log('data >>', data);
    data.update({
      name: req.body.name,
      birthday: req.body.birthday,
      about: req.body.about
    }).then(function(){
      res.redirect('/list')
    })
  })
})

router.get('/delete/:user_id', function(req, res, next) {
  user.destroy({
    where:{id: req.params.user_id}
  }).then(function(){
    res.redirect('/list')
  })
})

module.exports = router;
