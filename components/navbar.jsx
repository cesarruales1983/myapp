import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-slate-400 mb-4 flex justify-between items-center px-20 p-3 font-bold text-black">
      <div className="mr-6">
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="/About">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
