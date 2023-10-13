import Feed from '../Feed/Feed'
import Rightbar from '../Rightbar/Rightbar'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'
import './Profile.css'

export default function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
      <Sidebar />
      <div className='profileRight'>
        <div className="profileRightTop">
        <div className="profileCover">
            <img src="/src/assets/post/3.jpeg" alt="" className="profileCoverImg" />
            <img src="/src/assets/person/7.jpeg" alt="" className="profileUserImg" />
          </div>
          <div className="profileInfo">
            <h4 className='profileInfoName'>Chrstphr Wlkngs</h4>
            <span className="profileInfoDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, excepturi.</span>
          </div>
        </div>
        <div className="profileRightBottom">
          <Feed />
        <Rightbar profile/>
        </div>
      </div>     
    </div>
    </>
  )
}
