
let Keeps = require('../models/keep')
let Vaults = require('../models/vault')
let Users = require('../models/user')


export default {

    vaultKeeps: {
        path:'/vault/:id/keeps',
        reqType: 'get',
        method(req, res, next) {
            console.log("You've made it in")
          //  console.log(req.params.id)
            let action = 'Find Vault Keeps'
            Vaults.findById(req.params.id).populate("keeps")
                .then(vault => {
                    console.log(vault)
                    res.send(handleResponse(action, vault))
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
