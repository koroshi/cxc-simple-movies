import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../api'
const RECEIVEMOVIES = 'receiveMovies';
// import * as actions from './actions'
// import * as getters from './getters'
// import cart from './modules/cart'
// import products from './modules/products'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state:{
  	movies:[]
  },
  getters:{

  },

  actions:{
		  getAllMovies ({ commit }) {
		    Api.getMovies(movies => {
		      commit(RECEIVEMOVIES, { movies })
		    })
		  }
  },
  mutations:{
  	[RECEIVEMOVIES] (state, {movies}){
  		state.movies = movies
  	}
  },

  strict: debug,
  plugins: debug ? [] : []
})
