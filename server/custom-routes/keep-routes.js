
let Keeps = require('../models/keep')
let Vaults = require('../models/vault')
let Users = require('../models/user')


export default {

    newKeepToVault: {
        path: '/new/keeps',
        reqType: 'post',
        method(req, res, next) {
            console.log('we are creating a keep vault id is ', req.body)
            let action = 'Create new Keep'
            Keeps.create(req.body)
                .then((newKeep) => {
                        console.log('promise', newKeep)
                    if (req.body.vaultId) {
                        Vaults.findById(req.body.vaultId)
                            .then(vault => {
                                vault.keeps.push(newKeep._id)
                                vault.save()
                                console.log(vault)
                                res.send(handleResponse(action, vault))
                            })

                            .catch(error => {
                                return next(handleResponse(action, null, error))
                            })
                    }

                })
        }

    },
    keepToVault:{
        path: '/vault/:id/keep',
        reqType: 'put',
         method(req, res, next) {
             let action ="post to vault"
           Vaults.findById(req.params.id)
                            .then(vault => {
                            let keep = req.body.keepId
                            debugger
                                vault.keeps.push(keep)
                                vault.save()
                                console.log(vault)
                                res.send(handleResponse(action, vault))
                            })

                            .catch(error => {
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
