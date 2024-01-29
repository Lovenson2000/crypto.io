import Header from "@/app/components/Header";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full h-screen">
      <Header />
      <SignIn afterSignInUrl="/dashboard" />
    </div>
  );
}