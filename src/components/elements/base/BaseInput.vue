<template>
  <input type="text" class="input" v-bind:value="value" v-on:input="$emit('input', $event.target.value)" placeholder="Введите название репозитория">
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .input {
    width: 100%;
    padding: 10px 10px;
    font-family: sans-serif;
    font-size: 16px;
    line-height: 1;
    border:  1px solid #aaa;
    border-radius: 3px;
  }

  .input:focus {
    outline: 1px solid #8181ff;
    box-shadow: 0 0 5px #8181ff;
  }
</style>
