import { SignUp } from '@clerk/nextjs'

export default function page() {
    return (
        <div className='h-[80%]'>
            <SignUp />
        </div>
    );
}