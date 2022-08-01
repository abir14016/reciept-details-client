import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RegisterModal = () => {
    const [
        createUserWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate();
    useEffect(() => {
        if (emailUser) {
            navigate('/');
        }
    }, [emailUser, navigate]);

    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
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
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'provide a valid email'
                                    }
                                })}
                            />
                            {errors.email?.type === 'required' && <p className="text-error text-left">
                                {errors.email.message}
                            </p>}
                            {errors.email?.type === 'pattern' && <p className="text-error text-left">
                                {errors.email.message}
                            </p>}
                        </div>

                        <div
                            className="form-control">
                            <label className="label">
                                <span className="label-text text-base">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                        message: 'password must contain at least one number and letter'
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'password must be 8 character or longer'
                                    }
                                })}
                            />
                            {errors.password?.type === 'required' && <p className="text-error text-left">
                                {errors.password.message}
                            </p>}
                            {errors.password?.type === 'pattern' && <p className="text-error text-left">
                                {errors.password.message}
                            </p>}
                            {errors.password?.type === 'minLength' && <p className="text-error text-left">
                                {errors.password.message}
                            </p>}
                        </div>
                        {
                            emailLoading && <Loading></Loading>
                        }
                        {
                            emailError && <p className='text-error font-semibold'>{emailError.message}</p>
                        }
                        {
                            emailUser && <p className='text-success font-semibold'>Registered Successfully</p>
                        }
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