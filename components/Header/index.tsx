import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-between p-4">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <nav className="flex justify-center">
        <ul className="flex gap-2 items-center justify-center list-none">
          <Link href={"/home"}>Home</Link>
          <Link href={"/about"}>About Us</Link>
        </ul>
      </nav>
    </div>
  );
};
