import "../scss/home-post.scss";
import InstagramSvg from "../assets/instagram.svg";
import '../scss/colors.scss';
export const HomePost = () => {
  return (
    <div className="home-post">
      <div className="post-profile">
        <img src={InstagramSvg} alt="fdfd" />
        <p>johndoe</p>
        <div>...</div>
      </div>
      <div className="post-picture">
        <img src="" alt="" />
      </div>
      <div className="post-footer">

      </div>
    </div>
  );
};
