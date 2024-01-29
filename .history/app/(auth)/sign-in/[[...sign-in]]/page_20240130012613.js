import Header from "@/app/components/Header";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div>
      <Header />
      <SignIn afterSignInUrl="/dashboard" />
    </div>
  );
}