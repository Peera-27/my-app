import Link from "next/link";

export default function Home() {
  return (
   <div>
    <h1>Home</h1>
    <Link href="/p1" className="text-center">Goto Pages1</Link><br />
    <Link href="/p2" className="text-center">Goto Pages2</Link><br />
    <Link href="/p3" className="text-center">Goto Pages3</Link><br />
   </div>
  );
}
