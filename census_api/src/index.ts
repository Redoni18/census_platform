import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Census: Journalism for the people by the people!')
})

export default app
