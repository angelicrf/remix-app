import { Link, useLoaderData } from 'remix'
import { Fragment } from 'react'

export const loader = () => {
  const data = {
    allPosts: [
      { userId: 1, description: "this one Description" },
      { userId: 2, description: "this two Description" },
      { userId: 3, description: "this three Description" },
      {userId: 4, description: "this four Description"},
   ]
  }
  return data
}

function NewItems() {
  const { allPosts } = useLoaderData()
  //console.log(allPosts)
  return (
    <Fragment>  
        <div className="page-header">
        <h1>Posts</h1>
        <Link to="/posts/newpost" className="btn btn-dark">New Post</Link>
        </div>
      <ul className='posts-list'>
        {allPosts.map(dta => (
          <Fragment>
            <li key={dta.userId}>
            <Link to={dta.userId}>
              {dta.description}
             </Link>
            </li>   
          </Fragment>
        ))
        }
        </ul>
    </Fragment>
      
    )
}


export default NewItems
