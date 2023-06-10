import { Post } from "@/types/collection"
import Image from "next/image";
import Link from "next/link";
import Posttitle from "./Posttitle";
import { reverse } from "dns";
interface PostProps {
  post: Post;
  layout?: "vertical" | "horizontal";
  reverse?:boolean;
}

const Postcard = ({ post, layout = "horizontal",reverse=false }: PostProps) => {
  return (
    <Link href={`/posts/${post.slug}`} className={`${layout === "horizontal" ? "grid md:grid-cols-2 gap-10" : "space-y-10"}`}>
      {/* post image */}
      <Image
        src={post.image}
        alt={post.description}
        height={300}
        width={600}
        className={`rounded-md w-full object-cover object-center max-h-[300px] ${reverse ? "md:order-last" : ""}`}
      />
      <Posttitle post={post} />
    </Link>
  );
};

export default Postcard;
