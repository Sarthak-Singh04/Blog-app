
import siteconfig from "@/config/site"
import Centerdiv from "./Layout/Centerdiv"
import Link from "next/link"
import SocialLink from "./elements/SocialLink"


const Footer = () => {
  return (
    <div className="py-10 mt-10 border-t-2">
        <Centerdiv>
            <div>
                <h2 className="text-xl font-bold leading-tight">{siteconfig.sitename}</h2>
                <p className="max-w-md mt-2 text-sm text-neutral-700 leading-snug">{siteconfig.description}</p>
         
            </div>
            <div className="mt-6 flex flex-wrap justify-between gap-4">
                <div>
                    <div className="font-medium text-lg">#exploretheworld</div>
                    <div className="flex items-center justify-center gap-4 mt-4 text-neutral-600">
                    <div ><SocialLink link={siteconfig.socialLinks.twitter} platform="twitter"/></div>
                    <div ><SocialLink link={siteconfig.socialLinks.instagram} platform="Instagram"/></div>
                    <div ><SocialLink link={siteconfig.socialLinks.linkedin} platform="github"/></div>
                    <div ><SocialLink link={siteconfig.socialLinks.github} platform="LinkedIn"/></div>

                    </div>

                </div>
                <div>
                    <div className="text-sm text-neutral-600">Currently At</div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-md shadow-md mt-1">
                        <div className="w-2 h-2 rounded-full bg-emerald-400"/>
                        {siteconfig.currentlyAt}
                    </div>
                </div>
            </div>
            <div className="flex  flex-wrap items-center justify-between mt-16 gap-x-4 py-3 border-t">
                <div className="text-sm text-neutral-600 ">
                    All rights are reserved | Copyright {new Date().getFullYear()}

                </div>
                <div className="text-sm ">Follow me on twitter {" "}<Link href="https://twitter.com" className="underline underline-offset-4">@Sarthakparmar</Link></div>

            </div>
        </Centerdiv>
    </div>
  )
}

export default Footer