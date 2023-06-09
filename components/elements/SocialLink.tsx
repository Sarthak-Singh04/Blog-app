
import { Facebook,Twitter,Instagram ,Youtube,Linkedin,Github} from "lucide-react";
import Link from "next/link";

const SocialLink = ({ platform, link }: { platform: string; link: string }) => {
    const getIcon=(platform :string)=>{
        switch(platform){
            case "facebook":
                return <Facebook/>;

            case "twitter":
                return <Twitter/>

            case "Instagram":
                return <Instagram/>

            case "Youtube":
                return <Youtube/>

            case "LinkedIn":
                return <Linkedin/>

            case "github":
                return <Github/>
                
        }
    }
    return (
       <Link href={link}>{getIcon(platform)}</Link>
    );
  };
  
  export default  SocialLink;