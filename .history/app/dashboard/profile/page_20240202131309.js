import { UserProfile } from "@clerk/nextjs";

export default function UserProfilePage() {
    return (
        <UserProfile path="dashboard/profile" routing="path" />
    );
}

