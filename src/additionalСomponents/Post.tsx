import "../scss/post.scss";
import emodji from "../assets/emodji.svg";
import LikesSvg from "../assets/likes.svg";
import comments from "../assets/comments.svg";
import share from "../assets/share.svg";
import save from "../assets/save.svg";
import options from "../assets/options.svg";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { FC, useState } from "react";
import { IPost } from "../types/IPost";
import { useAppDispatch } from "../hooks/hooks";
import { setStep } from "../store/reducers/post/postSlice";
import { deletePost } from "../store/reducers/post/postAction";

export const Post: FC<{ post: IPost }> = ({ post }) => {
  const dispatch = useAppDispatch();

  const [more, setMore] = useState(60);
  const [option, setOption] = useState<boolean>(false);

  const deletePosts = (id: string) => {
    dispatch(deletePost(id));
  };

  const changeOptions = (id: string) => {
    setOption(!option);
  };

  const time = (time: number) => {
    dayjs.extend(relativeTime);
    return dayjs(time).fromNow();
  };

  return (
    <div className="posts" key={post._id}>
      <div className="post-profile">
        <img className="post-profile-logo" src={post.user.avatar} alt="fdfd" />
        <p>{post.user.username}</p>
        <img
          onClick={() => changeOptions(post._id)}
          className="post-profile-options"
          src={options}
          alt=""
        />
      </div>
      <div className="post-picture">
        <img src={post.image} alt="" />
      </div>
      <div className="post-footer">
        <div>
          <img className="post-footer-first-img" src={LikesSvg} alt="" />
          <img className="post-footer-second-img" src={comments} alt="" />
          <img className="post-footer-therd-img" src={share} alt="" />
          <img className="post-footer-fourth-img" src={save} alt="" />
        </div>
        <div className="post-footer-block">
          <p className="post-footer-block-like">{post.likes.length} likes</p>
          <div className="post-footer-block-text">
            {post.description.length < more ? (
              <p>{post.description}</p>
            ) : (
              <span>
                <p>{post.description.slice(0, more)}</p>
                <span onClick={() => setMore(2000)}>...more</span>
              </span>
            )}
          </div>
          <p className="post-footer-block-comment">{post.comments} 0 commets</p>
          <p className="post-footer-block-time">{time(+post.created_at)}</p>
        </div>

        <div className="line"></div>

        <div className="post-footer-add-comments">
          <img src={emodji} alt="" />
          <input placeholder="Add a comment..." type="text" />
          <button>Post</button>
        </div>
      </div>
      <div>
        {option && (
          <div className="block-edit-delete">
            <div className="edit" onClick={() => dispatch(setStep(2))}>
              Edit
            </div>
            <div className="delete" onClick={() => deletePost(post._id)}>
              Delete
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
