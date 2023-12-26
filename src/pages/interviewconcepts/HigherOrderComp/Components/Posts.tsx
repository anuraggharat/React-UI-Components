import CenteredLayout from "../../../../components/CenteredLayout"
import withFetch from "./WithFetch"

function Posts({data}:any) {
  return (
    <CenteredLayout>
        <h1>Posts</h1>
        {data.map((post:any)=>(<li key={post.id}>
            {post.title}
        </li>))}
    </CenteredLayout>
  )
}
export default withFetch(Posts,"https://jsonplaceholder.typicode.com/posts")