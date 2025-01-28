import Image from "next/image";
import Link from "next/link";
export default function Page() {
    return (
        <div>
            <h1 className="text-3xl text-center text-red-500">Page 1</h1>
            <Image src="/img1.jpg" width={300} height={300} alt="img1" className="mx-auto items-center"></Image>
  <div>
            <ul className="flex gap-x-6 justify-center">
                <li>
    <Link href="/p2" className="text-center">Goto Pages2</Link><br />

                </li>
<li>

    <Link href="/p3" className="text-center">Goto Pages3</Link><br />
</li>
            </ul>
    </div>
   <br /><br /> <h2 className="text-center">This is my id 66162110163-8</h2>
        </div>
    );
}