import { Hono } from 'hono'


const app = new Hono().get('status', (c) => {
  return c.json({
    message: "GitHub連携テスト1_OK",
    username: "asahhiy",
    followusers: 120,
    publicRepos: 45
  })
})


export default app
