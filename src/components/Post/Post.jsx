import { MoreVert } from "@mui/icons-material"
import "./Post.css"
import { Users } from '../../dummyData'

export default function Post({post}) {
     
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/src/assets/person/3.jpeg" alt="" />
                    <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>

                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="/src/assets/like.png" alt="" />
                    <img className="likeIcon" src="/src/assets/heart.png" alt="" />
                    <span className="postLikeCounter">{post.like} People Like It </span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText"> {post.comment} Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
