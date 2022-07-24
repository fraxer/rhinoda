export function checkResponse(response, dataType = 'json') {
  if (response.ok) return response[dataType]()

  throw new Error(response.status)
}

export function checkResponseJson(response) {
  return checkResponse(response, 'json')
}

export function checkResponseBlob(response) {
  return checkResponse(response, 'blob')
}

export async function get(uri, params) {
	const url = new URL(uri)

  for (let key in params) {
    if (params[key]) url.searchParams.append(key, params[key])
  }

  return await fetch(url.href, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
