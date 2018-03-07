<template>
  <div id="example-1">
    <b-card-group columns>
      <Thumbnail :image="item" v-for="item in list" v-bind:key="item.name"/>
    </b-card-group>
  </div>
</template>

<script>
import Thumbnail from './Thumbnail'

export default {
  name: 'ImageList',
  data () {
    return {
      path: this.$route.params.directory,
      list: []
    }
  },
  components: {Thumbnail},
  watch: {
    path: function watchPath () {
      return this.$http.get('list/' + this.path).then((response) => {
        this.list = response.body
      })
    }
  },
  created: function () {
    return this.$http.get('list/' + this.path).then((response) => {
      this.list = response.body
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
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
  }
</style>
