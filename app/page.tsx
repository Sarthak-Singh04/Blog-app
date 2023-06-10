import Centerdiv from "@/components/Layout/Centerdiv";
import Postcard from "@/components/Post/Postcard";
import blogPosts from "../Dummydata";
import PostList from "@/components/Post/PostList";
import CenterImage from "@/components/elements/CenterImage";

export default function Home() {
  return (
    <Centerdiv>
      <main className="h-auto space-y-10">
        <Postcard layout="horizontal" post={blogPosts[0]} />
        <PostList layout="vertical" posts={blogPosts.filter((_post, index) => index > 0 && index < 3)} />

        

        <CenterImage/>
  
          <Postcard layout="horizontal" post={blogPosts[3]} reverse={true}  />
          <PostList layout="vertical" posts={blogPosts.filter((_post, index) => index > 4 && index < 8)} />
      
      </main>
    </Centerdiv>
  );
}
