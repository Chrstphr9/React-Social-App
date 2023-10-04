import Feed from '../Feed/Feed'
import Rightbar from '../Rightbar/Rightbar'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'
import './Profile.css'

export default function Profile() {
  return (
    <>
    <Topbar/>
    <div className="homeContainer">
      <Sidebar />
      <Feed />
      <Rightbar />
    </div>
    </>
  )
}
