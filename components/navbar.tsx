import { UserButton } from "@clerk/nextjs";
import { MainNavbar } from "@/components/main-nav";


const Navbar = () => {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <div>
                    switcher
                </div>
                <MainNavbar className="mx-6"/>
                <div className="ml-auto flex items-center space-x-4">
                    <UserButton afterSignOutUrl="/" />    
                </div>
            </div>
        </div>
    );
}

export default Navbar