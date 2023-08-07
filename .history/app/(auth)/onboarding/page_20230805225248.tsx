import AccountProfile from "@/components/forms/AccountProfile"
import { currentUser } from "@clerk/nextjs"
async function Page() {
    const user = await currentUser();
    const userInfo={};
    const userData={
        id:user?.id,
        objectId:userInfo?._id,
        username:userInfo?.username||user?.username,
        name:userInfo?.name||user?.firstName,
        bio:userInfo?.bio||user?.bio,
        image:userInfo?.image||user?.image,
    }
    return (
        <main>
            <h1 className="mx-auto flex max-w 3xl flex-col justify-start px-10 py-20">Onboarding</h1>
            <p className="mt-3 text-base-regular text-light-2">
                Complete your profile to get started.
            </p>
            <section className="mt-9 bg-dark-2 p-10">
                <AccountProfile 
                user={userData} 
                
                />
            </section>
        </main>
    )
}
export default Page