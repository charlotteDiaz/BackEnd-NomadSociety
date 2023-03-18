import { Card } from 'antd';
import TimeAgo from 'react-timeago'
import './Post.scss'

function Post(props){
  const { userName, profilePhoto, postTitle, postContent, imgContent, createdAt } = props;

  function dateFormatter(value,unit){
    if (unit === 'second' && value < 15) return "just now";
    if (unit === "second") return "few seconds ago";
    if (unit  === "minute") return `${value} ${value === 1 ? "minute" : "minutes"} ago`;
    if (unit  === "hour") return `${value} ${value === 1 ? "hour" : "hours"} ago`;
    if (unit  === "day") return `${value} ${value === 1 ? "day" : "days"} ago`;
    console.log(value,unit);
  }

  return(
    <Card size='large' style={{ width: 800, backgroundColor: '#f0f0f0'}}>
      <div className='containerPost'>
        <div className='userInfo'>
          <img src={ profilePhoto } className='imgProfile'/>
          <div className='userName'>{ userName }</div>
          <div><TimeAgo date={createdAt} live='false' formatter={(unit,value) => dateFormatter(unit,value)}/></div>
        </div>
        <div className='postInfo'>
          <div className='title'>
            {postTitle}
          </div>
          <div>
            { postContent }
          </div>
        </div>
      </div>
    </Card>
  )
}

export default Post;