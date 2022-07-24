<template>
  <div class="container">
    <div class="panel">
      <BaseInput v-model="searchInput"/>
      <BaseSort v-model="sortBy" class="sortby"/>
      <BaseOrder v-model="orderBy" class="orderby"/>
    </div>

    <BaseLoader v-if="processing"/>

    <ListRepositories
      v-else
      v-bind:results="results"
    />
  </div>
</template>

<script>
import { get as requestGet, checkResponseJson } from '@/scripts/requests'
import { repositoriesAdapter } from '@/adapters/repositories'

export default {
  name: 'PageIndex',
  data () {
    return {
      searchInput: '',
      timeoutInput: null,
      processing: false,
      sortBy: 'stars',
      orderBy: 'desc',
      results: []
    }
  },
  watch: {
    searchInput () {
      this.runHandler(700)
    },
    sortBy () {
      this.runHandler(0)
    },
    orderBy () {
      this.runHandler(0)
    }
  },
  methods: {
    runHandler (timeout = 700) {
      clearTimeout(this.timeoutInput)

      this.timeoutInput = setTimeout(this.getRepositories, timeout)
    },
    getRepositories () {
      this.results = []
      this.processing = true

      if (!this.searchInput) {
        this.processing = false
        return
      }

      requestGet('https://api.github.com/search/repositories', {
        q: this.searchInput,
        sort: this.sortBy,
        order: this.orderBy
      })
      .then(checkResponseJson)
      .then(data => {
        this.results = repositoriesAdapter(data.items)
        this.processing = false
      })
      .catch(error => {
        this.processing = false
        alert(error)
      })
    }
  },
  components: {
    BaseInput: () => import('@/components/elements/base/BaseInput'),
    BaseLoader: () => import('@/components/elements/base/BaseLoader'),
    BaseSort: () => import('@/components/elements/base/BaseSort'),
    BaseOrder: () => import('@/components/elements/base/BaseOrder'),
    ListRepositories: () => import('@/components/elements/index/ListRepositories')
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    padding: 20px calc(50% - 250px);
  }

  .panel {
    display: flex;
    gap:  10px;
    position: sticky;
    top: 0;
    padding: 10px 0;
    background: #fff;
    z-index: 1;
  }

  .loader {
    width: 30px;
    height: 30px;
    margin: 20px auto;
  }

  .sortby {
    max-width: 120px;
  }
</style>
