import { hc } from "hono/client"
import type { AppType } from "@/app/api/[...route]/route"


const client = hc<AppType>('http://localhost:3000')

export default async function GithubComponent() {
  const res = await client.api.github.status.$get()
  const data = await res.json()

  return (
    <div>
      <p>{data.username}</p>
      <p>{data.message}</p>
      <p>{data.followusers}</p>
      <p>{data.publicRepos}</p>
    </div>
  )
}

