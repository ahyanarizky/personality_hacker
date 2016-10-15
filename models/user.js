'use strict'
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    birthday: DataTypes.DATE,
    about: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
                // associations can be defined here
      },
      add: function (name, birthday, about) {
        User.create({
          name: name,
          birthday: birthday,
          about: about
        }, {
          fields: ['name', 'birthday', 'about']
        }).then(function (user) {
          console.log(`New user added :`)
          console.log(`id : ${user.dataValues.id}\nname : ${user.dataValues.name}\nabout : ${user.dataValues.about}`)
        })
      },
      see: function () {
        User.findAll({
          order: [['id', 'ASC']]
        }).then(function (user) {
          for (var i = 0; i < user.length; i++) {
            console.log(`${user[i].dataValues.id} || ${user[i].dataValues.name} || ${user[i].dataValues.about}`)
          }
        })
      },
      editName: function (value, user_id) {
        User.findOne({
          where: {id: user_id}
        }).then(function (user) {
          user.update({
            name: value
          },
            {
              fields: ['name']
            }).then(function (user) {
              console.log(`name set to : ${user.dataValues.name}`)
            })
        })
      },
      destroy: function (user_id) {
        User.findOne({
          where: {id: user_id}
        }).then(function (user) {
          if (user == null) {
            console.log(`User ID not found !`)
          } else {
            user.destroy({
            }).then(function () {
              console.log(`ID ${user_id} deleted successfully`)
            })
          }
        })
      }
    }
  })
  return User
}
