import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAGe4M_N4918ZVNaS5UKHpp1kAC6m-Dipk',
  authDomain: 'shop-prize.firebaseapp.com',
  databaseURL: 'https://shop-prize.firebaseio.com',
  projectId: 'shop-prize',
  storageBucket: 'shop-prize.appspot.com',
  messagingSenderId: '1030741218335'
}
firebase.initializeApp(config)

const state = {
  all: []
}

const actions = {
  getAllProducts ({
    commit
  }) {
    function generateUrl (product) {
      let urlName = product.name.replace(' ', '-')
      return `https://shopee.co.th/${urlName}-i.${product.shopid}.${product.itemid}`
    }

    let categoryRef = firebase.database().ref('20180106/guarantee-items/55')
    categoryRef.orderByChild('price') // .startAt(7000000).endAt(500000000)
      .limitToLast(50)
      .once('value').then(function (snapshot) {
        let childDatas = []
        snapshot.forEach(function (childSnapshot) {
          let data = childSnapshot.val()
          data.url = generateUrl(data)
          childDatas.unshift(data)
        })
        commit('recieve_products', childDatas)
      })
  }
}

const mutations = {
  recieve_products (state, products) {
    state.all = products
  }
}

const getters = {
  allProducts (state) {
    return state.all
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
