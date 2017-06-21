<template>
<div>
	<Mtype :movies="hotMovies" :mTypeTitle="'影院热映'" :mTypeId="'hot'"></Mtype>
	<Mtype :movies="commingMovies" :mTypeTitle="'即将上映'" :mTypeId="'comingSoon'"></Mtype>
</div>



</template>

<script>
import { mapState } from 'vuex'
import Mtype from "./Mtype"
export default {
  name: 'Mhome',
  data () {
    return {
      mTitle: '电影'
    }
  },
  computed:{
    ...mapState({
      movies: 'movies',
      commingMovies: 'commingMovies',
      hotMovies: 'hotMovies',
    }) 
  },
  components:{
  	Mtype
  },
    created () {
    // console.log(this.$store)
    this.$store.dispatch('getAllMovies')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
