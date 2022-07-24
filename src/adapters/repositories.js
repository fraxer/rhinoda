const defaultStruct = {
	id: 0,
  name: '',
  owner: '',
  url: '',
  createdAt: '',
  language: '',
  topics: [],
  starsCount: 0
}

export function getDefaultStructRepository() {
  return { ...defaultStruct }
}

export function repositoriesAdapter(data) {
  return data.map(data => repositoryAdapter(data))
}

export function repositoryAdapter(data) {
  return {
    id: data.id,
    name: data.name,
    owner: data.owner.login,
    url: data.html_url,
    createdAt: data.created_at,
    language: data.language ? data.language : 'Не определен',
    topics: data.topics.slice(),
    starsCount: data.stargazers_count
  }
}