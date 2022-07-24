<template>
  <div class="container">
    <router-link v-for="repo in results" v-bind:key="repo.id" v-bind:to="{ name: 'PageProject', params: { user: repo.owner, repo: repo.name } }" class="item">
      <div class="item__name"><b>{{ repo.name }}</b></div>
      <div class="item__info">ЯП: {{ repo.language }}, Звезд: {{ repo.starsCount }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ListRepositories',
  props: {
    results: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
  .container {
    width: 100%;
  }

  .item {
    padding: 10px 0;
    color: #000;
    text-decoration: none;
    border-bottom: 1px solid #eee;
  }

  .item:hover {
    color: blue;
  }

  .item:last-child {
    border-bottom: 0;
  }

  .item__name {
    margin: 0 0 5px;
  }

  .item__info {
    font-size: 14px;
    color: #404040;
  }
</style>
