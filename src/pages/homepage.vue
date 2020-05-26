<template>
  <div class="homepage-view">
    <topHeader />
    <packageChooser @newSelection="updateDetails" />
    <highlights />
    <packageOverview :selectedOption="chosenOption"/>
  </div>
</template>

<script>
import topHeader from '../components/home/top-header.vue'
import packageChooser from '../components/home/package-chooser.vue'
import highlights from '../components/home/highlights.vue'
import packageOverview from '../components/home/package-overview.vue'

export default {
  name: "homepage-view",
  components: { topHeader, packageChooser, highlights, packageOverview },
  data() {
    return {
      chosenOption: 1,
    }
  },
  title() {
    return "Lillydoo"
  },
  methods: {
    updateDetails(event) {
      this.chosenOption = event
    }
  }
}
</script>

<style lang="stylus">
.homepage-view
  padding-bottom 0
  overflow-x hidden

</style>
