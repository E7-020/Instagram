import "../scss/posts.scss";
import emodji from '../assets/emodji.svg';
import LikesSvg from "../assets/likes.svg";
import comments from "../assets/comments.svg";
import share from "../assets/share.svg";
import save from "../assets/save.svg";
import { useAppSelector } from "../hooks/hooks";
import dayjs from "dayjs";
import  relativeTime  from "dayjs/plugin/relativeTime";
import { useState } from "react";


export const Post = () => {
    const post = useAppSelector((state) => state.post.post);
    const[more,setMore] = useState(5);

    const time = (time: number) => {
        dayjs.extend(relativeTime);
        return dayjs(time).fromNow();
    }
    
    return(
        <div>
        {post.map((item) => (
          <div className="posts" key={item._id}>
            <div className="post-profile">
              <img src={item.user.avatar} alt="fdfd" />
              <p>{item.user.username}</p>
              <div>...</div>
            </div>
            <div className="post-picture">
              <img src={item.image} alt="" />
            </div>
            <div className="post-footer">
              <div>
                <img className="post-footer-first-img" src={LikesSvg} alt="" />
                <img className="post-footer-second-img" src={comments} alt="" />
                <img className="post-footer-therd-img" src={share} alt="" />
                <img className="post-footer-fourth-img" src={save} alt="" />
              </div>
              <div className="post-footer-block">
                <p className="post-footer-block-like">{item.likes}0 likes</p>
                  <div className="post-footer-block-text">
                   {item.description.length < more? <p>{item.description}</p> : <span><p>{item.description.slice(0,more)}</p><span onClick={() => setMore(2000)}>...more</span></span>} 
                  </div>
                <p className="post-footer-block-comment">{item.comments} 0 commets</p>
                <p className="post-footer-block-time">{time(+item.created_at)}</p>
              </div>
  
              <div className="line"></div>
  
              <div className="post-footer-add-comments">
                <img src={emodji} alt="" />
                <input placeholder="Add a comment..." type="text" />
                <button>Post</button>
              </div>
            </div>
            <div>
             
            </div>
          </div>
        ))}
      </div>
    )
}