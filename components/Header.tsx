import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

import { checkUser } from "@/lib/checkUser";

export default async function Header() {
  const user = await checkUser();
  

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2>Expense Tracker</h2>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
