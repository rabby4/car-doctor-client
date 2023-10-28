import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="text-center">
                <h4 className='text-orange-500 font-bold text-lg'>About Us</h4>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
                {
                    services.map(service => <div key={service._id}>
                        <div className="card bg-base-100 shadow-md">
                            <figure className="px-10 pt-10">
                                <img src={service.img} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-left flex-row justify-between">
                                <div>
                                    <h2 className="card-title text-2xl mb-2 font-bold">{service.title}</h2>
                                    <p className="text-orange-500 font-semibold text-lg">Price: ${service.price}</p>
                                </div>
                                <div className="card-actions items-end">
                                    <Link to={`/checkout/${service._id}`}>
                                        <button className="btn bg-transparent text-orange-600 text-xl border-none hover:bg-transparent"><AiOutlineArrowRight></AiOutlineArrowRight></button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;