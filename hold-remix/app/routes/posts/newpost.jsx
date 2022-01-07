import { Link, redirect } from 'remix'
import { Fragment } from 'react'

export const action = async({request}) => {
    const formInfo = await request.formData()
    const getName = formInfo.get('subject')
    const getDescription = formInfo.get('description')

    const submitInfo = { getName, getDescription }
    console.log(submitInfo)
    //send them to database

   return redirect('/posts')
}

function newpost() {
    return (
        <Fragment>
        <div>
                This is the NewPost
                <form method="POST">
                    <div className="form-control">
                        <label htmlFor="subject"></label>
                        <input type="text" id="subject" name="subject" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="description"></label>
                        <textarea type="text" id="description" name="description" />
                    </div>
                    <button type="submit" className="btn btn-primary">Add new Post</button>
                </form>
            </div>
            <Link to='/posts' className='btn btn-dark'>Back Home</Link>
            </Fragment>
    )
}

export default newpost
