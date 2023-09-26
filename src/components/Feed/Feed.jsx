import Post from '../Post/Post'
import Share from '../Share/Share'
import './Feed.css'

export default function Feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />
        <Post />
      </div>
    </div>
  )
}
