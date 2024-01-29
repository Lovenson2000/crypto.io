import Header from "@/app/components/Header";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full h-screen items-center justify-center flex flex-col">
      <Header />
      <div className="flex items-center h-[100vh] justify-center">
        <SignUp afterSignInUrl="/dashboard" />
      </div>
    </div>
  );
}
