<template>
  <RepoContent
    v-bind:content="content"
  />
  <!-- <RepoContent
    v-if="content.id"
    v-bind:name="content.name"
    v-bind:owner="content.owner"
    v-bind:url="content.url"
    v-bind:starsCount="content.starsCount"
    v-bind:topics="content.topics"
    v-bind:createdAt="content.createdAt"
  /> -->
</template>

<script>
import { get as requestGet, checkResponseJson } from '@/scripts/requests'
import { repositoryAdapter, getDefaultStructRepository } from '@/adapters/repositories'

export default {
  name: 'PageProject',
  data () {
    return {
      content: getDefaultStructRepository()
    }
  },
  beforeRouteEnter (to, from, next) {
    requestGet('https://api.github.com/search/repositories', {
      q: to.params.user + '/' +  to.params.repo
    })
    .then(checkResponseJson)
    .then(data => {
      next(vm => {
        if (data.items && data.items.length) {
          vm.setRepository(repositoryAdapter(data.items[0]))
        }
      })
    })
    .catch(error => {
      alert(error)
    })
  },
  methods: {
    setRepository (data) {
      this.content = data
    }
  },
  components: {
    RepoContent: () => import('@/components/elements/project/RepoContent')
  }
}
</script>
