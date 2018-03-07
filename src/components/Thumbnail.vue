<template>
  <b-card class="mb-2">
    <img v-if="isImage" class="card-img-top" :src="src" :alt="image.name">
    <video ref="video" v-on:mouseover="startVideo" v-on:mouseout="stopVideo">
      <source :src="src" :type="image.mimeType">
      Your browser does not support the video tag.
    </video>
    <div class="card-body">
      <h5 class="card-title" v-text="image.name"></h5>
    </div>
  </b-card>
</template>
<script>
export default {
  name: 'Thumbnail',
  props: ['image'],
  data () {
    return {}
  },
  computed: {
    src: function () {
      return '/backend/scaled/300x300/' + this.image.path
    },
    isImage: function () {
      return this.image.type === 'file' && this.image.mimeType.match(/^image\/.*/)
    },
    isVideo: function () {
      return this.image.type === 'file' && this.image.mimeType.match(/^video\/.*/)
    },
    isDirectory: function () {
      return this.image.type === 'directory'
    }
  },
  methods: {
    startVideo: function () {
      this.$refs.video.play()
    },
    stopVideo: function () {
      this.$refs.video.pause()
    }
  }
}
</script>

<style scoped>
  video {
    width: 100%;
  }
</style>
