<template>
<div>
	<Mtype></Mtype>
	<Mtype></Mtype>
</div>

</template>

<script>
import Mtype from "./Mtype"
export default {
  name: 'Mhome',
  data () {
    return {
      mTitle: '电影'
    }
  },
  components:{
  	Mtype
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
