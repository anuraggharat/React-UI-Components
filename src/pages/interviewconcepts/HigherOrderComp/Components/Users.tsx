import withFetch from './WithFetch'

function Users({data}:any) {
  return (
    <div className='text-left'>
        <h1>Users</h1>
        {data.map((user:any)=>(<li key={user.id}>
            {user.name}
        </li>))}
    </div>
  )
}
export default withFetch(Users,"https://jsonplaceholder.typicode.com/users")