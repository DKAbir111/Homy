import { useState } from 'react';
import { MdFileUpload } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    //hook-form
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    //submit form
    const onSubmit = (data) => console.log(data)


    const handleGoogleSignIn = () => {
        // Add your Google sign-in logic here
    };

    return (
        <div className="bg-base-100 min-h-screen flex justify-center items-center font-lato container mx-auto relative">
            <div className="card bg-white shadow-lg rounded-sm p-8 w-full max-w-md">
                <h2 className="text-2xl text-center mb-6 font-lustria font-bold">
                    Register
                </h2>

                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    {/* Name Input */}
                    <div className="form-control">
                        <label className="label text-sm font-semibold ">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            {...register("name", { required: true })}
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
                            {...register("email", { required: true })}
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
                            {...register("photo", { required: true })}
                            placeholder="Provide a profile picture URL"
                            className="input input-bordered rounded-sm w-full py-3 px-4 border-[#fbddd1] focus:outline-none focus:border-[#]"
                        // required
                        />
                        <input type="file" className="hidden" name="file" />
                        <span className="btn btn-sm absolute bg-white shadow-none border-none right-3 top-12">
                            <MdFileUpload className="" />
                        </span>
                    </div>

                    {/* Password Input */}
                    <div className="form-control">
                        <label className="label text-sm font-semibold ">Password</label>
                        {errors.password && <span className="tooltip tooltip-open tooltip-error" data-tip={errors.password.message}></span>}
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                {...register("password", {
                                    required: "Password is required",
                                    pattern: {
                                        value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                                        message: "Password must contain at least one uppercase, one lowercase, one number, one special character, and be at least 6 characters long"
                                    }
                                })}
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
