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
        <div className="profileRightTop">asadd</div>
        <div className="profileRightBottom">
          <Feed />
        <Rightbar />
        </div>
      </div>     
    </div>
    </>
  )
}
