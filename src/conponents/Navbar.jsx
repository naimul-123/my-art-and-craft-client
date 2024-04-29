import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const [theme, setTheme] = useState(() => {
        const localTheme = localStorage.getItem("Theme");
        return localTheme || "light"
    })

    useEffect(() => {
        localStorage.setItem("Theme", theme);
        document.querySelector("html").setAttribute('data-theme', theme)
    }, [theme])


    const { user, logOut } = useContext(AuthContext);

    const links = (
        <>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/allcraft'>All Art & craft</NavLink>
            </li>

            <li>
                <NavLink to='/addcraft'>Add Craft</NavLink>
            </li>

            {user && (
                <li>
                    <NavLink to='/mycrafts'>My Art & Craft</NavLink>
                </li>
            )}


        </>
    );



    const handelTheme = () => {

        setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light")

    }

    const handleSignOut = () => {
        logOut().then().catch();
    };
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Brush & Palette</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>

                </div>
                <div className='navbar-end space-x-2 '>
                    {user ? (
                        <div className=' flex items-center gap-2'>
                            <Link

                                className='group relative'>

                                <img
                                    className='w-10 h-10 group-hover:hidden rounded-full'
                                    alt={user?.displayName}
                                    src={user?.photoURL}
                                />


                                <p className='hidden text-xl font-bold text-gray-900 group-hover:inline'>
                                    {user?.displayName}
                                </p>
                            </Link>

                            <Link
                                className='btn hidden sm:inline-flex btn-sm btn-secondary'
                                onClick={handleSignOut}>
                                Log Out
                            </Link>
                        </div>
                    ) : (
                        <div className='flex items-center justify-center gap-3'>
                            <Link
                                to='/login'
                                className='btn btn-sm btn-secondary'>
                                Log in
                            </Link>
                            <Link to='/register' className='btn btn-sm btn-primary'>Register</Link>
                        </div>
                    )}
                    <label className="cursor-pointer grid place-items-center">
                        <input onChange={handelTheme} type="checkbox" defaultChecked={theme === "dark"} className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;