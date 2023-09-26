import { MoreVert } from "@mui/icons-material"
import "./Post.css"

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    {/* <img className="postProfileImg" src="/src/assets/person/3.jpeg" alt="" /> */}
                    <span className="postUsername">Chrstphr</span>
                    <span className="postDate"> 5 Mins Ago</span>

                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter"></div>
            <div className="postBottom"></div>
        </div>
    </div>
  )
}
