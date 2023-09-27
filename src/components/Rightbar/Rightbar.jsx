import "./Rightbar.css"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="/src/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Paula Green</b> and <b>3 others friends</b> have birthday today</span>
        </div>
      </div>
    </div>
  )
}
