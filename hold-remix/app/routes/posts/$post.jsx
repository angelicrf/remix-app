import { useLoaderData, Link, redirect} from 'remix'
import { db } from '~/utils/db.server.ts'

export const loader = async ({params}) => {

    const findPost = await db.user.findUnique({
        where: {
            userId: params.post
        }
    })
    if (!findPost) throw Error('userId not found')
    const thisData = { findPost }
    return thisData
}
export const action = async ({ request, params }) => {
    const dltForm = await request.formData()
    if (dltForm.get('dltName') === 'delete') {
        const deletePost = await db.user.findUnique({
            where: {
                userId: params.post
            }
        })
        if (!deletePost) throw Error('userId from Delete not found')  
        await db.user.delete({
            where: {
                userId: params.post
            }
        })
        return redirect('/posts')
    } 
}
function Post() {
    const {findPost} = useLoaderData()
    return (
        <div>
            <div className="page-header">
                <h2>The post subject is : {findPost.subject} </h2>
                <Link to="/posts" className="btn btn-dark">Back Home</Link>
            </div>
            <div className="page-content">
                <h2>{findPost.description}</h2>
            </div>
            <div className="page-footer">
                <form method="POST">
                    <input name="dltName" value="delete" type="hidden" />
                    <button className="btn btn-delete">Delete</button>
                </form>
                
            </div>
            
        </div>
    )
}

export default Post
