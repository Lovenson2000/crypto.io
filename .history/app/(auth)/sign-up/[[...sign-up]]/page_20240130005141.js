import { SignUp } from '@clerk/nextjs'

export default function page() {
    return (
        <div className='h-full'>
            <SignUp />
        </div>
    );
}