import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        { id: 1, name: 'Free', price: 0, benefits: ["life-time free", "unlimited deals", "localized deals"] },
        { id: 2, name: 'Regular', price: 9.99, benefits: ["every thing on free", "unlimited deals", "localized deals", "fantastic deals"] },
        { id: 3, name: 'Premium', price: 18.99, benefits: ["every thing on regular", "unlimited deals", "localized deals", "fantastic deals", "crazy deals"] },
    ];
    return (
        <div className='bg-indigo-300 mt-8 p-4'>
            <h1 className='text-6xl font-mono text-white'>Best Deals Available</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ex, atque eum beatae at tenetur deserunt. Magnam modi saepe maxime!</p>

            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOptions.map(option => <PricingOption key={option.id} option={option}></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;