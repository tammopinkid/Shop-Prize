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
  all: [],
  limit: 100,
  loading: false,
  sliderData: {
    label: 'Price Range',
    value: [0, 0],
    min: 0,
    max: 0,
    formatter: '{value} THB'
  }
}

const generateUrl = function (product) {
  let urlName = product.name.replace(' ', '-')
  return `https://shopee.co.th/${urlName}-i.${product.shopid}.${product.itemid}`
}

const getProducts = function (commit, rootState, isAll) {
  if (rootState.activeCategory) {
    state.loading = true

    const priceScale = 100000

    let categoryRef = firebase.database().ref(`20180108/guarantee-items/${rootState.activeCategory}`)
    let promise = categoryRef.orderByChild('price')

    if (!isAll) {
      promise = promise.startAt(state.sliderData.value[0] * priceScale)
        .endAt(state.sliderData.value[1] * priceScale)
    }
    promise.limitToLast(state.limit)
      .on('value', function (snapshot) {
        let min = 1000000
        let max = 0

        let childDatas = []

        snapshot.forEach(function (childSnapshot) {
          let data = childSnapshot.val()
          data.url = generateUrl(data)
          childDatas.unshift(data)

          if (isAll) {
            if (data.price / priceScale > max) {
              max = data.price / priceScale
            }
            if (data.price / priceScale < min) {
              min = data.price / priceScale
            }
          }
        })

        if (isAll) {
          state.sliderData.min = min
          state.sliderData.max = max
          state.sliderData.value = [min, max]
        }

        commit('recieve_products', childDatas)
      })
  }
}

const actions = {
  getAllProducts ({ commit, rootState }) {
    getProducts(commit, rootState, true)
  },
  getProductsByRange ({ commit, rootState }) {
    getProducts(commit, rootState, false)
  },
  addPriceRange ({ commit }, priceRange) {
    commit('addPriceRange', priceRange)
  }
}

const mutations = {
  recieve_products (state, products) {
    state.all = products
    state.loading = false
  },
  addPriceRange (state, priceRange) {
    state.begin = priceRange[0]
    state.end = priceRange[1]
  }
}

const getters = {
  allProducts (state) {
    return state.all
  },
  productLoading (state) {
    return state.loading
  },
  sliderData (stat) {
    return state.sliderData
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
