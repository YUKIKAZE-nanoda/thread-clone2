import { currentUser } from "@clerk/nextjs";
import {rediret} from 'next/navigation';
async function Page() {
    return <h1 className="head-text">
        Create Thread
    </h1>
}

export default Page;