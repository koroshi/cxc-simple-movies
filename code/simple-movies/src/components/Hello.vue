<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <div>
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">选项一</mt-tab-item>
        <mt-tab-item id="2">选项二</mt-tab-item>
        <mt-tab-item id="3">选项三</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
        <mt-cell v-for="n in lists" :title="'内容 ' + n" :key="n" />
        <!-- <div> -->
             <mt-spinner type="fading-circle" color="#26a2ff"></mt-spinner>
        <!-- </div> -->
     
        <!-- <mt-cell title='<mt-spinner type="fading-circle"></mt-spinner>'> -->
               
        <!-- </mt-cell> -->

   
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'测试 ' + n" :key="n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'选项 ' + n" :key="n" />
      </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
  


</template>

<script>
import { Indicator } from 'mint-ui';
// import Vue from 'vue'
 // import { Navbar, TabItem } from 'mint-ui';
  // Vue.component(Navbar.name, Navbar);  
  // Vue.component(TabItem.name, TabItem);  
export default {

  // import { Navbar, TabItem } from 'mint-ui';
  // Vue.component("MyNavbar", Navbar);
  name: 'hello',
  components:{
    // "mt-navbar":Navbar,
    // "mt-tab-item":TabItem
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected:'1',
      loading:false,
      lists:[1,2,3,4,5,6,7,8,9,10,11]
    }
  },
  methods:{
    loadMore() {
      this.loading = true;
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      setTimeout(() => {
        let last = this.lists[this.lists.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.lists.push(last + i);
        }
        Indicator.close();
        this.loading = false;
      }, 2500);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}*/
</style>
/**/