import "./Sidebar.css"
import FeedIcon from '@mui/icons-material/Feed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Bookmark, Event, People, SchoolOutlined, Work } from "@mui/icons-material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
              <FeedIcon className="sidebarIcon"/>
              <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
              <ChatIcon className="sidebarIcon"/>
              <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
              <PlayCircleIcon className="sidebarIcon"/>
              <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
              <People className="sidebarIcon"/>
              <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
              <Bookmark className="sidebarIcon"/>
              <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
              <HelpOutlineIcon className="sidebarIcon"/>
              <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
              <Work className="sidebarIcon"/>
              <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
              <Event className="sidebarIcon"/>
              <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
              <SchoolOutlined className="sidebarIcon"/>
              <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
