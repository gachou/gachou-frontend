<template>
  <b-form-group :label="facet.name">
    <b-form-radio-group buttons v-model="selected" :name="facet.id" >
      <b-form-radio v-for="option in options" :key="option.id" :value="option.value" :button-variant="option.variant">{{option.text}}</b-form-radio>
    </b-form-radio-group>
  </b-form-group>
</template>

<script>
export default {
  name: 'Facet',
  props: ['facet', 'value'],
  data () {
    return {
      selected: this.value && this.value.id
    }
  },
  computed: {
    options: function () {
      return [{text: 'any', value: undefined, variant: 'primary'}].concat(this.facet.values.map((facet) => ({
        text: `${facet.value}`,
        value: facet.value,
        variant: facet.count === 0 ? 'secondary' : 'primary'
      })))
    }
  },
  watch: {
    selected: function () {
      this.$emit('input', this.selected)
    }
  }
}

</script>
