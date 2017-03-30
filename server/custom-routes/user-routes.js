let Vaults = require('../models/vault')
let Keeps = require('../models/keep')


export default {
    userVaults: {
    path: '/uservaults',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find User Vaults'
      Vaults.find({creatorId: req.session.uid})
        .then(vaults => {
          res.send(handleResponse(action, vaults))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  userKeeps:{
    path:'/userkeeps',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find User Keeps'
      Keeps.find({creatorId: req.session.uid})
      .then(keeps =>{
        res.send(handleResponse(action, keeps))
      }).catch(error => {
        return next(handleResponse(action, null, error))
      })
    }
  }
}


function handleResponse(action, data, error) {
    var response = {
      action: action,
      data: data
    }
    if (error) {
      response.error = error
    }
    return response
  }