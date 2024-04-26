import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const links = (
        <>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/allart'>All Art & craft</NavLink>
            </li>

            <li>
                <NavLink to='/add'>Add Craft</NavLink>
            </li>

            {user && (
                <li>
                    <NavLink to='/myart'>My Art & Craft</NavLink>
                </li>
            )}


        </>
    );

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
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className='navbar-end'>
                    {user ? (
                        <div className=' flex items-center gap-2'>
                            <Link
                                to='/userprofile'
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
                </div>
            </div>
        </div>
    );
};

export default Navbar;