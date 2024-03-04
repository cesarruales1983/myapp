import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-slate-400 px-20 py-5 font-bold text-black flex">
      <div>
        <img src="/images/logo-sin-fondo.png" className="w-40 h-auto flex"></img>
      </div>
      <div className="mx-auto flex justify-center items-center">
        <nav className="mr-10">
          <Link href="/">Home</Link>
        </nav>

        <nav>
          <Link href="/About">About</Link>
        </nav>
      </div>
      <div>
        <p className="text-right flex mt-4">@Julio Cesar Ruales Perez</p>
      </div>
    </footer>
  );
}

export default Footer;
