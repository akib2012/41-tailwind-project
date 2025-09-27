import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';
const navItems = [
    { id: 1, name: "Home", route: "/" },
    { id: 2, name: "About", route: "/about" },
    { id: 3, name: "Services", route: "/services" },
    { id: 4, name: "Blog", route: "/blog" },
    { id: 5, name: "Contact", route: "/contact" },
];

const Nabvar = () => {
    const navbaar = navItems.map((nav, id) => <Link id={id} nav={nav}></Link>)

    const [open, setOpen] = useState(false);

    return (
        <div className='px-16 py-6 flex justify-between'>
            <span className='flex gap-4' onClick={() => setOpen(!open)}>
                {
                    open ? <X  className='md:hidden'/> : <Menu className='md:hidden' />
                }
                {
                    <ul className={`md:hidden absolute duration-700 ${open ? 'left-16 top-17' : '-left-34'}`}>
                        {navbaar}
                    </ul>
                }
                
                <h3>my nabvar</h3>
            </span>

            <ul className='hidden md:flex gap-7 '>
                {
                    navbaar
                }
            </ul>

            <button type="button">sing in</button>

        </div>
    );
};

export default Nabvar;