import React from 'react';
import Link from './Link';
const navItems = [
  { id: 1, name: "Home", route: "/" },
  { id: 2, name: "About", route: "/about" },
  { id: 3, name: "Services", route: "/services" },
  { id: 4, name: "Blog", route: "/blog" },
  { id: 5, name: "Contact", route: "/contact" },
];

const Nabvar = () => {
    return (
        <div className='flex gap-7'>
        

        {
            navItems.map((nav,id) => <Link id={id} nav={nav}></Link>)
        }





                {/* < className='flex gap-5'>
                    {
                        navItems.map(nav => <li className='pr-5-'><a href={nav.route}>{nav.name}</a></li>)
                    }





                    {/* <li><a href="/home">home</a></li>
                    <li><a href="/about">about</a></li>
                    <li><a href="/log in">log in</a></li>
                    <li><a href="/sing up">sing up</a></li> */}

                
            
        </div>
    );
};

export default Nabvar;