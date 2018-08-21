<template>
  <div id="MovieRow">
      <input type="text" @input="searchTermUpdated()">
  </div>
</template>

<script>

export default {
  name: 'MovieSerach',
 

    methods: {
        searchTermUpdated() {
            let value = event.target.value
            this.$emit("searchTermUpdated", value)
        }
    }
}


</script>

<style>

</style>