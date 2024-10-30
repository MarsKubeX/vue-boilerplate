import { readonly, ref } from 'vue'

export function useHttpRequest(
  endpoint: string,
  method: string = 'GET',
  body = null,
) {
  const response = ref({})
  const sendRequest = async () => {
    try {
      const res = await fetch(endpoint, {
        method,
        body,
        headers: { 'Content-Type': 'application/json' },
      })
      const data = await res.json()
      response.value = data
    } catch (error) {
      throw new Error('Request failed' + error)
    }
  }
  sendRequest()
  return { response: readonly(response) }
}
