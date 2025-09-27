import React from 'react';

const Link = ({nav}) => {
    return (
        <div>
            <ul>
                <li className='hover:bg-amber-300'><a href={nav.route}>{nav.name}</a></li>
            </ul>
        </div>
    );
};

export default Link;