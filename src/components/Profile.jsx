import { CircleUserRound } from "lucide-react";
import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function Profile() {
  return (
    <>
      <SignedOut>
        <SignInButton mode='modal' children={<CircleUserRound className='cursor-pointer' />} />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}
