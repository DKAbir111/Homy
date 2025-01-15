import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';
import auth from '../../Firebase/firebase.init';
import photoUpload from '../../utils/photoUpload';

export default function Register() {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    //authinfo
    const { createUser, googleSignIn } = useAuth()
    //hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    //submit form
    const onSubmit = async (userInfo) => {
        const name = userInfo.name
        const email = userInfo.email
        const password = userInfo.password
        const photo = userInfo.photo[0]
        const imageUrl = await photoUpload(photo)
        // call create user

        createUser(email, password)
            .then(res => {
                if (res.user.email) {
                    updateProfile(auth.currentUser, {
                        displayName: name, photoURL: imageUrl
                    })
                    toast.success("User created successfully!")
                    navigate('/')
                }
            })
            .catch(err => {
                console.log(err)
                toast.error(err)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                if (res?.user?.email) {
                    toast.success('Successfully logged in')
                    navigate('/', { replace: true })
                }
            })
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
                        <label className="label text-sm font-semibold ">Upload Profile Picture</label>
                        <input type="file" name="file"    {...register("photo", { required: true })} />
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
