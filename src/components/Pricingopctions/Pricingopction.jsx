import React from 'react';
import { use } from 'react';
import Pricingcard from './Pricingcard';

const Pricingopction = ({PrcingPromise}) => {
    const pdata = use(PrcingPromise);
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-9'>
            {
                pdata.map(data => <Pricingcard key={data.id} data={data}></Pricingcard>)
            }
        </div>
    );
};

export default Pricingopction;