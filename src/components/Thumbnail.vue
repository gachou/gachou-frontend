<template>
  <div class="card mb-5">
    <div class="card-img-top thumbnail-img">
      <!-- Image -->
      <img v-if="isImage" :src="src" :alt="image.name">
      <!-- Videos -->
      <video class="thumbnail-img" v-if="isVideo" ref="video"
             v-on:mouseover="startVideo" v-on:mouseout="stopVideo">
        <source :src="src" :type="image.mimeType">
        Your browser does not support the video tag.
      </video>
      <b-button class="video-toggle" v-if="isVideo" v-on:click="toggleVideo">{{playButtonLabel}}</b-button>
    </div>
    <!-- Title and Metadata -->
    <div class="card-body">
      <h5 class="card-title">
        <router-link :to="detailsLink">{{image.name}}</router-link>
      </h5>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Thumbnail',
  props: ['image'],
  data () {
    return {
      playing: false
    }
  },
  watch: {
    playing: function (val) {
      if (val) {
        this.$refs.video.play()
      } else {
        this.$refs.video.pause()
      }
    }
  },
  computed: {
    src: function () {
      return '/backend/scaled/300x300/' + this.image.file
    },
    isImage: function () {
      return this.image.mimeType.match(/^image\/.*/)
    },
    isVideo: function () {
      return this.image.mimeType.match(/^video\/.*/)
    },
    detailsLink: function () {
      return this.isDirectory
        ? `/browse/${encodeURIComponent(this.image.path)}`
        : 'TODO'
    },
    playButtonLabel: function () {
      if (this.playing) {
        return 'Pause Preview'
      } else {
        return 'Run Preview'
      }
    }
  },
  methods: {
    startVideo: function (event) {
      this.playing = true
    },
    stopVideo: function (event) {
      this.playing = false
    },
    toggleVideo: function (event) {
      this.playing = !this.playing
    }
  }
}
</script>

<style scoped>
  video {
    width: 100%;
  }

  .thumbnail-img {
    position: relative;
    margin: 0;
    padding: 0;
    border: 0;
  }

  .thumbnail-img video, .thumbnail-img img {
    width: 100%;
    height: 100%;
  }

  .video-toggle {
    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>
