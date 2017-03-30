const actions = {
  create: 'Create',
  update: 'Update',
  remove: 'Remove',
  find: 'Find',
  findAll: 'Find All'
}

const models = {
  user: {
    name: 'User',
    endpoint: 'users',
    preventDefaultApi: true,
    useCustomRoutes: true
  },
  //  vaultKeeper: {
  //       name: 'VaultKeeper',
  //       endpoint: 'vaultkeepers',
  //       // preventDefaultApi: true
  //       // useCustomRoutes: true
  //   },
  vault: {
    name: 'Vault',
    endpoint: 'vaults',
    // preventDefaultApi: true
    useCustomRoutes: true
  },
  keep: {
    name: 'Keep',
    endpoint: 'keeps',
    //preventDefaultApi: true,
    useCustomRoutes: true
  }
}


export {
  actions,
  models
}