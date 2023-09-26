import { MoreVert } from "@mui/icons-material"
import "./Post.css"

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/src/assets/person/3.jpeg" alt="" />
                    <span className="postUsername">Chrstphr</span>
                    <span className="postDate"> 5 Mins Ago</span>

                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Heyyy Yes It is</span>
                <img className="postImg" src="/src/assets/post/1.jpeg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="/src/assets/like.png" alt="" />
                    <img className="likeIcon" src="/src/assets/heart.png" alt="" />
                    <span className="postLikeCounter">32 People Like It </span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText"> 9 Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
