import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState()
    console.log(user)

    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setBookings(data)
            })
    }, [])

    const handleDelete = id => {
        const proceed = confirm('Are you sure?');
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted successfull')
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining)
                    }
                })
        }
    }

    const handleConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    // updated data
                    const remaining = bookings.filter(booking => booking._id !== id)
                    const updated = bookings.find(booking => booking._id === id)
                    updated.status = 'confirm'
                    const newBooking = [updated, ...remaining]
                    setBookings(newBooking)
                }
            })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings?.map(book => <tr key={book._id}>
                                <th>
                                    <button onClick={() => handleDelete(book._id)} className="btn btn-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </th>
                                <td>
                                    <div className="avatar">
                                        <div className="rounded w-24 h-24">
                                            {book.img && <img src={book?.img} alt="Avatar Tailwind CSS Component" />}
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {book.service}
                                </td>
                                <td>{book.date}</td>
                                <td>${book.price}</td>
                                <th>
                                    {
                                        book.status ? <span className="text-blue-700 font-bold">Confirmed</span>
                                            :
                                            <button onClick={() => handleConfirm(book._id)} className="btn btn-ghost btn-xs">Confirm</button>
                                    }
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;