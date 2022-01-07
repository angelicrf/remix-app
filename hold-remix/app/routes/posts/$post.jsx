import {useParams} from 'remix'
function Post() {
    const thisPost = useParams()
    return (
        <div>
            <h2>Here is the post id {thisPost.post}</h2>
        </div>
    )
}

export default Post
