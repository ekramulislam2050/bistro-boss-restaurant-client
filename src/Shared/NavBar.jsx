

const NavBar = () => {
    const navOptions = <>
        <li><a>Item 1</a></li>
        <li><a>Parent</a></li>
        <li><a>Item 3</a></li>

    </>
    return (
        <div className="fixed z-10 max-w-screen-xl shadow-sm opacity-40 bg-base-200 navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="text-xl btn btn-ghost">Bistro Restaurant</a>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="px-1 menu menu-horizontal">
                   {navOptions}
                     
                </ul>
            </div>
            <div className="navbar-end">
                <a className=" btn">Button</a>
            </div>
        </div>
    );
};

export default NavBar;