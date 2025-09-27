import React from 'react';

const Pricingcard = ({ data }) => {
    console.log(data);
    return (
        <div className='border-2 p-6'>
            <div>
                <h3 className='text-3xl font-semibold'>{data.name} </h3>
                <h3 className='text-2xl font-bold'>{data.price}</h3>
            </div>
            <div>
                <p className='py-4'>{data.description}</p>
            </div>
            <div className='flex flex-col flex-1'>
                {
                    data.features.map(feture => <p>{feture}</p>)
                }
            </div>
            <button className="btn btn-wide mt-4">Wide</button>
        </div>
    );
};

export default Pricingcard;