import withFetch from "./WithFetch"

function Posts({data}:any) {
  return (
    <div className="text-left">
        <h1>Posts</h1>
        {data.map((post:any)=>(<li key={post.id}>
            {post.title}
        </li>))}
    </div>
  )
}
export default withFetch(Posts,"https://jsonplaceholder.typicode.com/posts")