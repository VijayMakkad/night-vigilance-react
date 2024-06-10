import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  SignOutButton,
} from "@clerk/clerk-react";

export default function Clerk() {
  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
        <SignOutButton />
      </SignedIn>
    </>
  );
}
