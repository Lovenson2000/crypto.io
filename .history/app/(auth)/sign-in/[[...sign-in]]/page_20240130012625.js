import Header from "@/app/components/Header";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full">
      <Header />
      <SignIn afterSignInUrl="/dashboard" />
    </div>
  );
}