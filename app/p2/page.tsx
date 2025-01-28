import Link from "next/link";
import Image from "next/image";
export default function Page() {
    return (
        <div>
        <h1 className="text-3xl text-center">Page 2</h1>
        <Image src="/img2.jpg" width={300} height={300} alt="img1" className="mx-auto items-center"></Image>
<Link href="/p1" className="text-center">Goto Pages1</Link><br />
<Link href="/p3" className="text-center">Goto Pages3</Link><br />
<h2 className="text-center">This is my id 66162110163-8</h2>

    </div>
    );
}