import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
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
                        <h2 className='text-center text-4xl font-bold mt-10'>Login</h2>
                        <form onSubmit={handleLogin} className="card-body px-20 pb-20">
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
                                <button className="btn bg-orange-600 hover:bg-orange-500 text-white">Sign In</button>
                            </div>
                        </form>
                        <div className='text-center pb-10'>
                            <p>Do not have an account? Please <Link to='/signup'> <strong className='text-orange-500'>Sign Up</strong> </Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;