import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const LoginModal = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    useEffect(() => {
        if (emailUser) {
            navigate('/');
        }
    }, [emailUser, navigate]);

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }
    return (
        <div>
            <input type="checkbox" id="login-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="login-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
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
                                type="password"
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
                        {
                            emailLoading && <Loading></Loading>
                        }
                        {
                            emailError && <p className='text-error font-semibold'>{emailError.message}</p>
                        }
                        {
                            emailUser && <p className='text-success font-semibold'>Successfully Logged in</p>
                        }
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
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