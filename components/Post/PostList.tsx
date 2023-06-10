import { Post } from "@/types/collection";
import Postcard from "./Postcard";

interface PostListProps {
  posts: Post[];
  layout: "vertical" | "horizontal";
}

const PostList = ({ posts, layout = "vertical" }: PostListProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      {posts.map((post) => {
        return <Postcard post={post} key={post.id} layout={layout} />;
      })}
    </div>
  );
};

export default PostList;
