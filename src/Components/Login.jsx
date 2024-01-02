import React, { useState } from 'react';
import { auth1 } from '../Config/Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
    const [user, setuser] = useState({
        email: "",
        password: ""
    })
    const handlechg = (e) => {
        setuser({
            ...user,
            [e.target.name]: e.target.value
        });
    }
    const LoginAdmin = async () => {
        try {
            // const login = await signInWithEmailAndPassword(auth1, user.email, user.password)
            // console.log(login.user)
            if (user.email === "admin@admin.com" && user.password === "admin123")
                localStorage.setItem("userstatus", true)
            window.location.reload()
        }
        catch (e) {
            console.log(e)
            alert(e)
        }

    }
    return (
        <>


            <section className="bg-gray-50 dark:bg-gray-900">

                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto ">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <div class="flex justify-center items-center">
                                <img className='w-60' src="https://www.saylaniwelfareusa.com/static/media/logo_saylaniwelfareusa.22bf709605809177256c.png" alt="" />
                            </div>
                            <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <div className="space-y-4 md:space-y-6">
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" onChange={(e) => handlechg(e)} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name='password' onChange={(e) => handlechg(e)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue" required="" />
                                </div>
                                <button onClick={() => LoginAdmin()} className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
