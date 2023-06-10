import { Post } from "@/types/collection";
import {ArrowRight} from "lucide-react"
interface PostContentProps {
  post: Post;
}

const Posttitle = ({ post }: PostContentProps) => {
  const currentDate = new Date();
  const createdDate = new Date(post.dateCreated);
  const timeDiff = Math.abs(currentDate.getTime() - createdDate.getTime());
  const minutesDiff = Math.ceil(timeDiff / (100000000 * 6));

  return (
    <div className="flex flex-col items-start gap-y-4">
      {/* Title */}
      <div className="font-bold text-sm">
        <div>{post.title}</div>
      </div>
      <div>
        <div className="flex justify-center items-center gap-x-2">
          <div className="w-3 h-3 rounded-full bg-green-300" />
          <div className="text-[10px] font-semibold">{post.author}</div>
          <div className="text-[10px] font-semibold">{post.dateCreated}</div>
          <div className="text-[10px] font-semibold ml-4">{minutesDiff} min read</div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="text-neutral-700 mt-10 leading-tight text-lg">
           {post.description}
        </div>
        <button className="flex items-center gap-2">Read more <span><ArrowRight size={24}/></span></button>
    
      </div>
    </div>
  );
};

export default Posttitle;
