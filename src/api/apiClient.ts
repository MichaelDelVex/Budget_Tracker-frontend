// apiClient.ts
export interface ApiClientOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  body?: any
  headers?: Record<string, string>
}

export async function apiClient<T>(
  url: string,
  options: ApiClientOptions = {}
): Promise<T> {
  const { method = 'GET', body, headers = {} } = options

  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  })

  // Grab the request ID from the backend if available
  const requestId = res.headers.get('X-Request-Id')
  if (requestId) console.log(`[Request ID: ${requestId}] ${method} ${url}`)

  if (!res.ok) {
    const text = await res.text()
    throw new Error(
      `API request failed: ${res.status} ${res.statusText} - ${text}`
    )
  }

  return res.json()
}
