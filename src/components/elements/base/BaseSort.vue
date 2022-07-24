<template>
  <select class="select" v-bind:value="value" v-on:input="$emit('input', $event.target.value)">
    <option v-for="item in sorts" v-bind:key="item" v-bind:value="item">{{ names[item] }}</option>
  </select>
</template>

<script>
export default {
  name: 'BaseSort',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      sorts: [
        'stars',
        'forks',
        'help-wanted-issues',
        'updated'
      ],
      names: {
        'stars': 'Звёзды',
        'forks': 'Форки',
        'help-wanted-issues': 'Помощь в решении проблем',
        'updated': 'Обновленные'
      }
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
