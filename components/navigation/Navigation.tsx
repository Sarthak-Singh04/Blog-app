import Link from "next/link";
import Padding from "./CenterContainer/padding";

const Navigation = () => {
  return (

    <Padding>

<div className="flex items-center justify-between px-4 py-6 border-b-2">
        <Link href="/">Logo</Link>
        <nav>

        <ul>
          <li>
          <Link href="/about">About</Link>

          </li>
          <li>

            
          <Link href="/company">Company</Link>

          </li>

        </ul>

        </nav>

      

      
  
  </div>

    </Padding>

    
   
 
  )
}

export default Navigation;