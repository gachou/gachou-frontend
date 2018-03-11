<template>
  <b-navbar toggleable="md" type="dark" variant="info">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">Gachou</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item to="/browse">Browse</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-button size="sm" class="my-2 my-sm-0" v-on:click="update">Update</b-button>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>

</template>
<script>

export default {
  name: 'Navbar',
  methods: {
    update: async function updateQuery (event) {
      await this.$http.post('store/update/')
    }
  }
}
</script>
