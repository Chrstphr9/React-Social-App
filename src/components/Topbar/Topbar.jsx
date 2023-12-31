import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Somto Social</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon"/>
          <input
            type="text"
            placeholder="Search For Friend, Post or Video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src='/src/assets/person/1.jpeg' alt="" className="topbarImg" />
      </div>
    </div>
  );
}
