import { sidebarLinks } from "@/constants";

function Bottombar(){
    return (
        <section className="bottombar">
            <div className="bottombar_container">
            {sidebarLinks.map((link) => {
                    const isActive =
                        (pathname.includes(link.route) && link.route.length > 1) ||
                        pathname === link.route;

                    if (link.route === "/profile") link.route = `${link.route}/${userId}`;

                    return (
                        <Link
                            href={link.route}
                            key={link.label}
                            className={`leftsidebar_link ${isActive && "bg-primary-500 "}`}
                        >
                            <Image
                                src={link.imgURL}
                                alt={link.label}
                                width={24}
                                height={24}
                            />

                            <p className='text-light-1 max-lg:hidden'>{link.label}</p>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
export default Bottombar;