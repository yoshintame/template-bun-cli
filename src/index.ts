import { serve } from 'bun'

const server = serve({
  port: process.env.PORT,
  fetch(): Response {
    return new Response('Hello World!')
  },
})

console.log({ message: `Server running at http://localhost:${server.port}` })
