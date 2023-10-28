import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';


const SignUp = () => {
    const { createUser } = useContext(AuthContext)

    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className="hero py-24">
                <div className="hero-content w-full flex-col lg:flex-row">
                    <div className="text-center lg:text-left w-1/2">
                        <img src={login} alt="" />
                    </div>
                    <div className="card w-1/2 shadow-sm border border-gray-200 bg-base-100">
                        <h2 className='text-center text-4xl font-bold mt-10'>Sign Up</h2>
                        <form onSubmit={handleSignIn} className="card-body px-20 pb-20">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-orange-600 hover:bg-orange-500 text-white">Sign Up</button>
                            </div>
                        </form>
                        <div className='text-center pb-10'>
                            <p>Already have an account? Please <Link to='/login'><strong className='text-orange-500'>Login</strong></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;