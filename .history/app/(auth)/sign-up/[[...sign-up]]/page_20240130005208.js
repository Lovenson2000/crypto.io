import { SignUp } from '@clerk/nextjs'

export default function page() {
    return (
        <div className='h-[80%] bg-blue-500'>
            <SignUp />
        </div>
    );
}