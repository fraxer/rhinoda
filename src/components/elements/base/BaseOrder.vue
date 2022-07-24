<template>
  <select class="select" v-bind:value="value" v-on:input="$emit('input', $event.target.value)">
    <option value="asc">asc</option>
    <option value="desc">desc</option>
  </select>
</template>

<script>
export default {
  name: 'BaseOrder',
  props: {
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .select {
    padding: 10px 10px;
    font-family: sans-serif;
    font-size: 16px;
    line-height: 1;
    border:  1px solid #aaa;
    border-radius: 3px;
  }

  .select:focus {
    outline: 1px solid #8181ff;
    box-shadow: 0 0 5px #8181ff;
  }
</style>
