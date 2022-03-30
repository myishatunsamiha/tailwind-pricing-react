import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';


const PricingOption = (props) => {
    const { id, name, price, benefits } = props.option;

    return (
        <div className='bg-white rounded-lg relative'>
            <div className='p-4 mb-10'>
                <h2 className='bg-indigo-300 py-2 font-bold rounded text-xl'>{name}</h2>
                <p>
                    <span className='text-5xl font-bold'>{price}</span>
                    <span className='text-xl font-bold text-gray-500'>/mo</span>
                </p>

                <div>
                    <h3 className='text-2xl text-left'>Benefits: </h3>
                    {
                        benefits.map(b => <Benefit benefit={b}></Benefit>)
                    }
                </div>
            </div>


            <button className='bg-green-500 py-2 flex justify-center w-11/12 rounded mt-6 ml-5 text-white font-bold hover:text-green-900 absolute bottom-2'>
                Buy Now <ArrowRightIcon className='w-6 h-6 ml-1' flex></ArrowRightIcon>
            </button>
        </div>
    );
};

export default PricingOption;