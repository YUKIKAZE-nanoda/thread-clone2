import Link from "next/link";

function Topbar(){
    return (
        <nav className="topbar">
            <Link href="/" className="flex items-center gap-4">
                <Image src="/logo.svg" alt="logo" width={28} height=/>
            </Link>
        </nav>
    );
}
export default Topbar;