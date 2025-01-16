import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Lottie from "lottie-react";
import LoginLottie from '../../assets/lottie/login.json'
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';
export default function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const { login, googleSignIn, storeUser } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        login(email, password)
            .then(res => {
                if (res?.user?.email) {
                    toast.success('Successfully logged in')
                    navigate(location.state || '/', { replace: true })
                }
            })
            .catch(err => {
                toast.error('Invalid email or password')
                console.log(err)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                if (res?.user?.email) {
                    storeUser(res.user.displayName, res.user.email, res.user.photoURL)
                    toast.success('Successfully logged in')
                    navigate(location.state || '/', { replace: true })
                }
            })
    }

    // console.log(location)
    return (
        <div className="bg-base-100 min-h-screen flex justify-between items-center font-lato container mx-auto relative flex-col lg:flex-row">
            <div className='w-1/2 lg:absolute -top-64 right-0'>
                <Lottie animationData={LoginLottie} loop={true} className='' />
            </div>
            <div className="card bg-white shadow-lg rounded-sm p-8 w-full max-w-md">
                <h2 className="text-2xl text-center mb-6 font-lustria font-bold">
                    Login
                </h2>

                <form className="space-y-6" onSubmit={handleLogin}>
                    {/* Email Input */}
                    <div className="form-control">
                        <label className="label text-sm font-semibold ">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input input-bordered rounded-sm w-full py-3 px-4 border-[#fbddd1]  focus:outline-none focus:border-[#b28b51]"
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="form-control">
                        <label className="label text-sm font-semibold">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                // value={password}
                                // onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="input input-bordered rounded-sm w-full py-3 px-4 border-[#fbddd1]  focus:outline-none focus:border-[#b28b51]"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => {
                                    setShowPassword(!showPassword)
                                }}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 "
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                        <label className="label mt-2">
                            <a href="#" className="label-text-alt link link-hover ">
                                Forgot password?
                            </a>
                        </label>
                    </div>

                    {/* Login Button */}
                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-[#fbddd1] border-none hover:bg-design-color w-full py-3 rounded-sm">
                            Login
                        </button>
                    </div>
                </form>

                {/* Google Sign-In Button */}
                <div className="mt-4 flex items-center justify-center">
                    <button
                        className="btn bg-white border border-[#fbddd1]   flex items-center w-full py-3 rounded-sm"
                        onClick={handleGoogleSignIn}
                    >
                        <FcGoogle className='text-xl' />
                        Sign in with Google
                    </button>
                </div>

                {/* Register Link */}
                <div className="mt-4 text-center">
                    <small className="text-sm text-gray-600">
                        Don&apos;t have an account?
                        <Link to="/auth/register" className="underline  ml-1">Register</Link>
                    </small>
                </div>
            </div>
        </div>
    )
}
