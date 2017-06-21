import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../api'
const RECEIVEMOVIESCOMMING = 'receiveMoviesComming';
const RECEIVEMOVIESHOT = 'receiveMoviesHot';
const COMMING = 'comming';
const HOT = 'hot';
// import * as actions from './actions'
// import * as getters from './getters'
// import cart from './modules/cart'
// import products from './modules/products'
// import createLogger from '../../../src/plugins/logger'
// <
// <a></a>

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state:{
  	movies:[],
  	commingMovies:[],
  	hotMovies:[]
  },
  getters:{

  },

  actions:{
		  getAllMovies ({ commit }) {
		    Api.getCommingMovies(movies => {
		      console.log(movies.length,1)
		      movies.map(one =>{one.type = COMMING})
		      commit(RECEIVEMOVIESCOMMING, { movies })
		    })
		    Api.getNowHot(movies => {
		    	  console.log(movies.length,2)
		      movies.map(one =>{one.type = HOT})
		      commit(RECEIVEMOVIESHOT, { movies })
		    })
		  }
  },
  mutations:{
  	[RECEIVEMOVIESCOMMING] (state, {movies}){
  		// console.log(movies[0].id)
  		// console.log(state.movies.length)
  		state.commingMovies = movies
  	},
  	[RECEIVEMOVIESHOT] (state, {movies}){
  		// console.log(movies[0].id)
  		// console.log(state.movies.length)
  		state.hotMovies = movies
  	}
  },

  strict: debug,
  plugins: debug ? [] : []
})
