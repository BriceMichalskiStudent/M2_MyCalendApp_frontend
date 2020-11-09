<template>
  <div class="col-md-8 offset-md-2">
    <div class="card">
      <div class="card-header">
        <h3>Heading</h3>
      </div>
      <div class="card-body">
        <h1>Titre 1</h1>
        <h2>Titre 2</h2>
        <h3>Titre 3</h3>
        <h4>Titre 4</h4>
        <h5>Titre 5</h5>
        <h6>Titre 6</h6>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h3>Text</h3>
      </div>
      <div class="card-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis in reprehenderit similique!
          Aliquam assumenda dolorem eligendi ipsum, iure magni maxime porro quae quas, quidem quo quod rem sapiente sunt?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data () {
    return {
      title: 'Page style guide',
      meta_desc: 'Je suis le magnifique content'
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
.container {
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: left;
  display: inline-block;
}
.card {
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
  &-header {
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
</style>
