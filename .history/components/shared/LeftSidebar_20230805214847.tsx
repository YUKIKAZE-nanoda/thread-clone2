import { sidebarLinks } from "@/constants"
import Link from "next/link";
function LeftSidebar() {
    return (
        <section className="custom-scrollbar leftsidebar">
            <div className="flex w-full flex-1 flex-col gap-6 px-6">
                {sidebarLinks.map((link) => (
                    <div>
                        <Link
                        href={link.route}
                        key={link.label}
                        className="leftsidebar-link"
                        >
                            <Image
                            src={}
                            >

                            </Image>
                        </Link>
                    </div>
                ))}

            </div>
        </section>
    );
}
export default LeftSidebar;