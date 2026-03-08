import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import githubApp from './github'


const app = new Hono().basePath('/api')

const routes = app
  .route('/github', githubApp)

export const GET = handle(app)
export const POST = handle(app)
export const PUT = handle(app)
export const DELETE = handle(app)
export const PATCH = handle(app)


export type AppType = typeof routes

