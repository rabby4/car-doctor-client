import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Checkout = () => {
    const service = useLoaderData()
    const { title, _id, price, img } = service
    const { user } = useContext(AuthContext)

    const handleBook = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const price = form.price.value;
        const bookingInfo = {
            name,
            date,
            email,
            img,
            service: title,
            service_id: _id,
            price
        }
        console.log(bookingInfo)
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div>
            <div className="card w-full shadow-sm border border-gray-200 bg-base-100 my-20">
                <h2 className='text-center text-4xl font-bold mt-10'>Login</h2>
                <form onSubmit={handleBook} className="card-body px-20 pb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' defaultValue={user?.displayName} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Book Date</span>
                            </label>
                            <input type="date" name='date' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" placeholder="Due amount" name='price' defaultValue={price} className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-orange-600 hover:bg-orange-500 text-white">Place Order</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;