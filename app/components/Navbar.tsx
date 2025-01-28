import Link from "next/link";
import Image from "next/image";
const Menu = [
    { name: "Home", path: "http://localhost:3000" },
    { name: "About Us", path: "#" },
    { name: "Movie", path: "/movie" },
    { name: "Page1", path: "/p1" },
    { name: "Page2", path: "/p2" },
    { name: "Page3", path: "/p3" },
]
export default function Navbar() {
    return (
        <div className="w-full sticky top-0 flex justify-between bg-gray-400">
            <div>
                <Image src={"/nike.jpg"} width={100} height={100} alt={""}></Image>
            </div>

            <div >
            <ul className="flex gap-x-6">
                {Menu.map((menu,index) => (
                   <li key={index}><Link href={menu.path}>  {menu.name}</Link></li>
                ))}
            </ul>
            </div>

        </div>
    );
}