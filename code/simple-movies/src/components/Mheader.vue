<template>
    <el-row>
      <el-col :span="24">
        <div class="mTitle">{{mTitle}}</div>
      </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'Mheader',
  data () {
    return {
      mTitle: '电影'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mTitle{
  font-size: 20px;
}
</style>
