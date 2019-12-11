<template>
  <div class="home">
    <div>
    cookies
    <input type="text" v-model="input">
    <button @click="check">check</button>
    <button @click="remove">remove</button>
    {{ test }}
    </div><br>
    <div>
      localforage
    <input type="text" v-model="input1">
    <button @click="check1">check</button>
    <button @click="remove1">remove</button>
    {{ test1 }}
    </div>
    {{ hello }}
  </div>
</template>

<script>
// @ is an alias to /src
import Cookies from 'js-cookie'
import localforage from 'localforage'

export default {
  name: 'home',
  data(){
    return{
      test:Cookies.get('test'),
      input:'',
      test1:'',
      input1:'',
    }
  },
  methods:{
    check(){
      Cookies.set('test',this.input)
    },
    remove(){
      Cookies.remove('test')
    },
    check1(){
      localforage.setItem('test1',this.input1)
      .then((res)=>{
        this.test1=res
      })
    },
    remove1(){
      localforage.removeItem('test')
      .then((res)=>{
        this.test1=res
      })
    }
  },
  mounted(){
    localforage.getItem('test1')
    .then((res)=>{
      this.test1=res
    })
  }
}
</script>
