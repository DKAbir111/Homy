import { useState } from 'react';
import { MdFileUpload } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        // Add your registration logic here
    };

    const handleGoogleSignIn = () => {
        // Add your Google sign-in logic here
    };

    return (
        <div className="bg-base-100 min-h-screen flex justify-center items-center font-lato container mx-auto relative">
            <div className="card bg-white shadow-lg rounded-sm p-8 w-full max-w-md">
                <h2 className="text-2xl text-center mb-6 font-lustria font-bold">
                    Register
                </h2>

                <form className="space-y-6" onSubmit={handleRegister}>
                    {/* Name Input */}
                    <div className="form-control">
                        <label className="label text-sm font-semibold ">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            className="input input-bordered rounded-sm w-full py-3 px-4 border-[#fbddd1] focus:outline-none focus:border-[#]"
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div className="form-control">
                        <label className="label text-sm font-semibold ">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input input-bordered rounded-sm w-full py-3 px-4 border-[#fbddd1] focus:outline-none focus:border-[#]"
                            required
                        />
                    </div>

                    {/* Photo URL Input */}
                    <div className="form-control relative">
                        <label className="label text-sm font-semibold ">Profile Picture URL</label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Provide a profile picture URL"
                            className="input input-bordered rounded-sm w-full py-3 px-4 border-[#fbddd1] focus:outline-none focus:border-[#]"
                            required
                        />
                        <input type="file" className="hidden" name="file" />
                        <span className="btn btn-sm absolute bg-white shadow-none border-none right-3 top-12">
                            <MdFileUpload className="" />
                        </span>
                    </div>

                    {/* Password Input */}
                    <div className="form-control">
                        <label className="label text-sm font-semibold ">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Create a password"
                                className="input input-bordered rounded-sm w-full py-3 px-4 border-[#fbddd1] focus:outline-none focus:border-[#]"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 "
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>

                    {/* Register Button */}
                    <div className="form-control mt-6">
                        <button
                            type="submit"
                            className="btn bg-[#fbddd1] border-none hover:bg-design-color w-full py-3 rounded-sm"
                        >
                            Register
                        </button>
                    </div>
                </form>

                {/* Google Sign-In Button */}
                <div className="mt-4 flex items-center justify-center">
                    <button
                        className="btn bg-white border border-[#fbddd1] flex items-center w-full py-3 rounded-sm"
                        onClick={handleGoogleSignIn}
                    >
                        <FcGoogle className="text-xl" />
                        Sign up with Google
                    </button>
                </div>

                {/* Login Link */}
                <div className="mt-4 text-center">
                    <small className="text-sm text-gray-600">
                        Already have an account?
                        <Link to="/auth/login" className="underline  ml-1">
                            Login
                        </Link>
                    </small>
                </div>
            </div>
        </div>
    );
}
