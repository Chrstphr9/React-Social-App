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

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        
      </div>
    </div>
  )
}
