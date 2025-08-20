import { Anvil } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  const auth = true;
  return (
    <div className="w-full flex justify-between px-8 h-12 ">
      <Link href="/" className="flex gap-2">
        <Anvil />
        <span className="font-extrabold">SmartCMS</span>
      </Link>
      {auth ? <div>User</div> : <Link href="/sign-in">Sign in</Link>}
    </div>
  );
}
