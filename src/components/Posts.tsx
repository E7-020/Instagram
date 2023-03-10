import { useAppSelector } from "../hooks/hooks";
import { Post } from "../additional–°omponents/Post";

export const Posts = () => {
  const post = useAppSelector((state) => state.post.post);

  return (
    <div>
      {post.map((item) => (
        <Post post={item}/>
      ))}
    </div>
  );
};
