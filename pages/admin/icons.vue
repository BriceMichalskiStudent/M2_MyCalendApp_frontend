<template>
  <div class="card col-md-8 offset-md-2">
    <div class="card-header">
      <h3>List icons</h3>
    </div>
    <div class="card-body">
      <div
        v-for="(icon, index) in dataIcons"
        :key="'icon_' + index"
        v-clipboard:copy="'<span class=\'' + icon.name + '\'/>'"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
        class="icon"
      >
        <span :class="icon.name" />
        <p>{{ icon.name }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import dataIcons from 'static/data/icons.json'

export default {
  layout: 'admin',
  data () {
    return {
      title: 'Page liste des icons',
      meta_desc: 'Je suis le magnifique content',
      dataIcons
    }
  },
  methods: {
    onCopy (e) {
      alert('You just copied: ' + e.text)
    },
    onError (e) {
      alert('Failed to copy texts')
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta_desc }
      ]
    }
  },
  transition: 'opacity'
}
</script>

<style lang="scss" scoped>
.container{
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: left;
  display: inline-block;
  .card{
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    border-radius: .375rem;
    background-color: #fff;
    background-clip: border-box;
    margin-bottom: 30px;
    border: 0;
    box-shadow: 0 0 2rem 0 rgba(136,152,170,.15);
    p{
      margin: 0;
    }
    &-header{
      margin-bottom: 0;
      padding: 1.25rem 1.5rem;
      border-bottom: 1px solid rgba(0,0,0,.05);
      background-color: #fff;
      border-radius: calc(.375rem - 1px) calc(.375rem - 1px) 0 0;
    }
    &-body{
      min-height: 1px;
      padding: 1.5rem;
      flex: 1 1 auto;
    }
  }
}

.icon{
  display: inline-block;
  box-sizing: border-box;
  width: calc(33.3333% - 20px);
  margin: 10px;
  padding: 15px 5px;
  color: black;
  position: relative;
  background-color: white;
  border-radius: 8px;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  font-size: .9375rem;
  white-space: nowrap;
  &:hover{
    background-color: #F0F0F5;
  }
  span{
    display: inline-block;
    padding: 0 10px;
  }
  p{
    display: inline-block;
    padding: 0 10px;
  }
}
</style>
