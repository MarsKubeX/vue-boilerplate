/* eslint-disable @typescript-eslint/no-explicit-any */
import { readonly, ref } from 'vue'

export async function useHttpRequest(
  endpoint: string,
  method: string = 'GET',
  body = null,
) {
  const response: any = ref({})
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
  await sendRequest()

  return { response: readonly(response.value) }
}
