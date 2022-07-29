import React from 'react';
import { useForm } from "react-hook-form";

const LoginModal = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div>
            <input type="checkbox" id="login-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="login-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='text-center text-2xl font-bold'>Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div
                            className="form-control">
                            <label className="label">
                                <span className="label-text text-base">Email</span>
                            </label>
                            <input
                                type="text"
                                placeholder="email"
                                className="input input-bordered"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'email is required'
                                    }
                                })}
                            />
                            {errors.email?.type === 'required' && <p className="text-error text-left">
                                {errors.email.message}
                            </p>}
                        </div>
                        <div
                            className="form-control">
                            <label className="label">
                                <span className="label-text text-base">Password</span>
                            </label>
                            <input
                                type="text"
                                placeholder="password"
                                className="input input-bordered"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    }
                                })}
                            />
                            {errors.password?.type === 'required' && <p className="text-error text-left">
                                {errors.password.message}
                            </p>}
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <label className="label">
                        <button className="link link-accent">New to Onito? Please Register</button>
                    </label>
                    <div className="divider">OR</div>
                    <div className="mt-6">
                        <button className="btn btn-block">GOOGLE LOGIN</button>
                    </div>
                    <div className="mt-6">
                        <button className="btn btn-block">FACEBOOK LOGIN</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;