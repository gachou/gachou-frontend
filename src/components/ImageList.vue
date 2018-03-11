<template>
  <div>
    <div v-for="facet in facets" v-bind:key="facet.id">
      <FacetGroup :facet="facet" v-model="query[facet.id]"/>
    </div>
    <div class="row">
      <div class="col-lg-3 col-md-4 col-sm-6" v-for="item in results" v-bind:key="item.file">
        <Thumbnail :image="item"/>
      </div>
    </div>
    <div class="row moreButtons" v-if="moreExist">
      <div v-for="amount in moreButtons" v-bind:key="amount" class="col-sm-3">
        <b-button variant="primary" v-on:click="showMore(amount)">Show {{amount}} more</b-button>
      </div>
      <div class="col-sm-3">
        <b-button variant="primary" v-on:click="scrollUp">Back to top</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import Thumbnail from './Thumbnail'
import FacetGroup from './FacetGroup'

export default {
  name: 'ImageList',
  data () {
    return {
      facets: [],
      results: [],
      query: {
        limit: 12
      },
      total: 0,
      moreButtons: [12, 24, 48]
    }
  },
  components: {Thumbnail, FacetGroup},
  created: function () {
    this.updateList().catch((err) => { console.error(err) })
  },
  computed: {
    moreExist: function () {
      return this.total > this.query.limit
    }
  },
  watch: {
    query: {
      handler: async function () {
        return this.updateList()
      },
      deep: true // watch sub-properties of "query"
    },
    'query.year': function () {
      this.query.limit = 12
    },
    'query.month': function () {
      this.query.limit = 12
    }
  },
  methods: {
    showMore: function (count) {
      this.query.limit += count
    },
    updateList: async function () {
      console.log('Query changed 1', this.query)
      const response = await this.$http.get('store/query/', {params: this.query})
      this.results = response.body.results
      this.facets = response.body.facets
      this.total = response.body.context.total
      console.log(this.total)
      console.log(response.body.context)
    },
    scrollUp: function () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .moreButtons button {
    width: 100%;
  }
</style>
