<template>
  <div class="container">
    <router-link v-bind:to="{ name: 'PageIndex' }" class="link">На главную</router-link>

    <div v-if="content.id" class="content">
      <h1 class="name">{{ content.name }}</h1>

      <p class="text">Создатель: {{ content.owner }}</p>
      <p class="text">URL: <a v-bind:href="content.url" target="_blank" class="link">{{ content.url }}</a></p>
      <p class="text">Звезд: {{ content.starsCount }}</p>
      <p class="text">Топики: {{ content.topics.join(', ') }}</p>
      <p class="text">Создан: {{ prettyDate(content.createdAt) }}</p>
    </div>
    <div v-else class="empty">Репозиторий не найден</div>
  </div>
</template>

<script>
import { getDefaultStructRepository } from '@/adapters/repositories'

export default {
  name: 'RepoContent',
  props: {
    content: {
      type: Object,
      default: getDefaultStructRepository
    }
  },
  // props: {
  //   name: {
  //     type: String,
  //     default: ''
  //   },
  //   owner: {
  //     type: String,
  //     default: ''
  //   },
  //   url: {
  //     type: String,
  //     default: ''
  //   },
  //   starsCount: {
  //     type: Number,
  //     default: 0
  //   },
  //   topics: {
  //     type: Array,
  //     default: () => []
  //   },
  //   createdAt: {
  //     type: String,
  //     default: ''
  //   }
  // },
  methods: {
    prettyDate (str) {
      return new Date(str).toDateString()
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    padding: 20px calc(50% - 250px);
  }

  .empty {
    margin: 20px 0;
    text-align: center;
  }

  .item {
    padding: 10px 0;
    border-bottom: 1px solid #eee;
  }

  .item:last-child {
    border-bottom: 0;
  }
</style>
