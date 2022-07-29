import React from 'react';
import { useForm } from "react-hook-form";

const RegisterModal = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div>
            <input type="checkbox" id="register-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="register-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='text-center text-2xl font-bold'>Register</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div
                            className="form-control">
                            <label className="label">
                                <span className="label-text text-base">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="name"
                                className="input input-bordered"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                })}
                            />
                            {errors.name?.type === 'required' && <p className="text-error text-left">
                                {errors.name.message}
                            </p>}
                        </div>

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
                            <button type="submit" className="btn btn-primary">CREATE ACCOUNT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterModal;