import Link from "next/link"
import Centerdiv from "./Layout/Centerdiv"


const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 right-0 border-b-2 bg-white opacity-90 backdrop-blur-md z-50">

<Centerdiv>
            <div className=" flex items-center justify-between px-4 py-6">
      <Link href="/"> <h1 className=" text-lg md:text-[30px] font-bold  leading-tight">Dharmic Ecology</h1></Link> 
        <ul className="flex justify-center items-center gap-x-2 md:gap-x-12 md:mr-16">
            <Link href="/about">            <li className="px-2 leading-tight">About </li> </Link>
            <Link href="/company">
            <li className="px-2 leading-tight">Company</li></Link>



        </ul>
    </div>

    </Centerdiv>

    </div>
    


  )
}

export default Navbar