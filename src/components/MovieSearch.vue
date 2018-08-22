<template>
  <div id="MovieRow">
      <input type="text" @input="searchTermUpdated()" placeholder="Serach...">
  </div>
</template>

<script>
export default {
  name: "MovieSerach",

  methods: {
    searchTermUpdated() {
      let value = event.target.value;
      this.$emit("searchTermUpdated", value);
    }
  }
};
</script>

<style>
#MovieRow {
  padding-top: 20px;
}
</style>