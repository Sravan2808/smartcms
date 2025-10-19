import { Anvil } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getAuthSession } from "@/lib/auth";
import Image from "next/image";
import Signout from "./signout";

export default async function NavBar() {
  const session = await getAuthSession();
  const tempUser = {
    name: "Sam",
    username: "sam",
  };

 
  return (
    <div className="w-full flex justify-between px-8 h-12 ">
      <Link href="/" className="flex gap-2">
        <Anvil />
        <span className="font-extrabold">SmartCMS</span>
      </Link>
      {session ? (
        <div>
          <UserModelComponent user={session?.user} />
        </div>
      ) : (
        <Link href="/sign-in">Sign in</Link>
      )}
    </div>
  );
}
 type User = {
  name: string;
  username: string;
};


const UserModelComponent = ({ user }: {user:User}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger><Image className="rounded-full border-2 border-[greenyellow]" src={user.image} width={40} height={40}></Image></DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Hi, {user.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={`/profile/${user.username}`}>Go to Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Signout />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
