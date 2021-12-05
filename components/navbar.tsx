import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <Image src="/logo.png" width={50} height={50} />
        </Link>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/coders">
        <a>Coder&apos;s Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
