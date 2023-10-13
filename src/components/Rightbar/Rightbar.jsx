import "./Rightbar.css"
import { Users } from "../../dummyData" 
import Online from "../Online/Online"

export default function Rightbar({profile}) {

  const HomeRightbar = () => {
    return (
      <>
       <div className="birthdayContainer">
          <img src="/src/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            
            <b>Paula Green</b> and <b>3 others friends</b> have birthday today</span>
        </div>
        <img src="/src/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  };

  const ProfileRightbar = () => {
    return (
      <>
      <h4 className="rightbarTitle"> User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey"> City:</span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey"> From:</span>
          <span className="rightbarInfoValue">Niagra</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey"> Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>

      <h4 className="rightbarTitle"> User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="/src/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
        </div>
        <div className="rightbarFollowing">
          <img src="/src/assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
        </div>
        <div className="rightbarFollowing">
          <img src="/src/assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
        </div>
        <div className="rightbarFollowing">
          <img src="/src/assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
        </div>
        <div className="rightbarFollowing">
          <img src="/src/assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
        </div>
        <div className="rightbarFollowing">
          <img src="/src/assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
        </div>
      </div>
      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightbar />
      </div>
    </div>
  )
}
