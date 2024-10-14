import Link from "next/link"
export default function Header(){
    return(
        <div className="header text-grey-300 body-font">
            <div className="cotainer mx-auto flex flex-wrap p-0 flex-col md:flex-row ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXziJjGur1ol8HHGBQBiUU0Fgn5Vs6_dtnvg&s"alt="m-logo"
            className="w-10 h-10 rounded-full"
            />  
            <span className="ml-3 text-xm md:mr-80 ml:-4 md:py-1 md:border-1 flex flex-wrap items-center text-base justify-center">4th&5th Assignment</span>
        
            <ul className="header-button">
               
                <Link href={"/" }><li>Home</li></Link>
                <Link href={"/about"}><li>About</li></Link>
                <Link href={"/contact"}><li>Contact</li></Link>
                <Link href={"/portfolio"}><li>Portfolio</li></Link>
                <Link href={"/product"}><li> Product</li></Link>
                <Link href={"/brand"}><li> Brand</li></Link>
                <Link href={"/topsale"}><li> Topsale</li></Link>
                

              </ul>
            </div>
            </div>
)
}
