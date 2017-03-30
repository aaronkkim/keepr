import axios from 'axios'

let api = axios.create({
	baseURL: 'http://localhost:3000/api/',
	timeout: 20000,
	withCredentials: true
})

// REGISTER ALL DATA HERE
let state = {
	user: {},
	myVaults: {},
	myKeeps: {},
	//Dummy Data
	keeps: [],
	// {
	// 	title: 'Learn to Draw',
	// 	imgUrl: 'https://s-media-cache-ak0.pinimg.com/564x/b0/7f/71/b07f713b8fa296e871dd8c169ff86fd5.jpg',
	// 	body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis',
	// 	keepCount: 100,
	// 	shareCount: 300,
	// 	viewCount: 900,
	// 	author: 'JimyJonJones'
	// }, {
	// 	title: 'Build Beautiful sites',
	// 	imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/1b/81/b4/1b81b4d253053096b4097c53929f04c3.jpg',
	// 	body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis, doloribus eveniet sapiente perferendis nobis aliquid, quasi ipsa a repudiandae quaerat quos ex quod nemo',
	// 	keepCount: 100,
	// 	shareCount: 300,
	// 	viewCount: 900,
	// 	author: 'JimyJonJones'
	// }, {
	// 	title: 'Learn to Draw',
	// 	imgUrl: 'https://s-media-cache-ak0.pinimg.com/564x/c7/80/e3/c780e34c14258f4087df410f03d76e83.jpg',
	// 	body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatisconsectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis',
	// 	keepCount: 100,
	// 	shareCount: 300,
	// 	viewCount: 900,
	// 	author: 'JimyJonJones'
	// }, {
	// 	title: 'Build Beautiful sites',
	// 	imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/1b/81/b4/1b81b4d253053096b4097c53929f04c3.jpg',
	// 	body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis, doloribus eveniet sapiente perferendis nobis aliquid, quasi ipsa a repudiandae quaerat quos ex quod nemo',
	// 	keepCount: 100,
	// 	shareCount: 300,
	// 	viewCount: 900,
	// 	author: 'JimyJonJones'
	// }, {
	// 	title: 'Learn to Draw',
	// 	imgUrl: 'https://s-media-cache-ak0.pinimg.com/564x/b0/7f/71/b07f713b8fa296e871dd8c169ff86fd5.jpg',
	// 	body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis',
	// 	keepCount: 100,
	// 	shareCount: 300,
	// 	viewCount: 900,
	// 	author: 'JimyJonJones'
	// }, {
	// 	title: 'Build Beautiful sites',
	// 	imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/1b/81/b4/1b81b4d253053096b4097c53929f04c3.jpg',
	// 	body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis, doloribus eveniet sapiente perferendis nobis aliquid, quasi ipsa a repudiandae quaerat quos ex quod nemo',
	// 	keepCount: 100,
	// 	shareCount: 300,
	// 	viewCount: 900,
	// 	author: 'JimyJonJones'
	// }],
	error: {},
	activeUser: {},
	vaults: [],
	userVaults: [],
	activeVault: {},
	keep: {}
}

let handleError = (err) => {
	state.error = err
}

export default {
	// ALL DATA LIVES IN THE STATE
	state,
	// ACTIONS ARE RESPONSIBLE FOR MANAGING ALL ASYNC REQUESTS
	actions: {
		login(e, p) {

			api.post('http://localhost:3000/login', {
				email: e,
				password: p
			})
				.then(res => {
					state.activeUser = res.data.data
					console.log(state.activeUser)

				}).catch(handleError)
		},
		register(n, e, p) {
			api.post('http://localhost:3000/register', {
				name: n,
				email: e,
				password: p
			})
				.then(res => {
					this.login(e, p)
				}).catch(handleError)
		},
		authenticate() {
			api.get('http://localhost:3000/authenticate')
				.then(res => {
					if (res.data.data) {
						state.activeUser = res.data.data

					}
				})

		},
		logout() {
			api.delete('http://localhost:3000/logout').then(res => {
				state.activeUser = {}
			})
		},
		addVault(vault) {
			api.post('vaults/', vault)
				.then(res => {
					this.getVaults()
				})
				.catch(handleError)

		},
		removeVault(vault) {
			api.delete('vaults/' + vault._id)
				.then(res => {
					this.getVaults()
				})
				.catch(handleError)
		},
		getVaults() {
			api('vaults').then(res => {
				state.vaults = res.data.data
			}).catch(handleError)
		},

		getVault(id) {
			console.log('getting vault')
			api.get('vaults/' + id)
				.then(res => {
					state.activeVault = res.data.data
					this.getVaultKeeps(id)

				})
				.catch(handleError)
		},

		getVaultKeeps(id) {
			api(`vault/${id}/keeps`)
				.then(res => {
					console.log('keeps on the vault ', res.data.data.keeps)
					state.keeps = res.data.data

					// console.log(state.lists)
				})
				.catch(handleError)
		},

		getUserVaults() {
			api('userVaults').then(res => {
				state.userVaults = res.data.data
			}).catch(handleError)
		},
		getKeep(keep) {
			api('keeps/' + keep._id)
				.then(res => {
					state.keep = res.data.data
				})

		},
		sendKeep(newKeep) {
			newKeep.creatorId = state.activeUser._id
			return api.post('new/keeps', newKeep)

			console.log(newKeep)
		},
		editKeep(keep) {
			return api.put('keeps/' + keep._id)
		},
		removeKeep(list, index) {
			api.delete('keeps/' + keep._id)
				.then(res => {
					store.state.keeps.splice(index, 1)
					this.getVaultKeepss(vault._id)
				})
				.catch(handleError)
		}

	}

}

