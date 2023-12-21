/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { AuthContext } from '../../provider/AuthProvider';
const Login = () => {
    const { loginUser, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        loginUser(email, password)
            .then(res => {
                Swal.fire(
                    'Welcome!',
                    'Successfully logged in!',
                    'success'
                )
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,

                })
            })

    }

    const handlegoogleLogin = () => {
        googleLogin()
        .then(res => {
          Swal.fire(
            'Good job!',
            'Successfully logged in!',
            'success'
          )
          navigate(location?.state ? location.state : "/")
        })
        .catch(error => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            
          })
        })
    }      


    return (
        <div>
            <section class="bg-gray-50 dark:bg-gray-900">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img class="w-8 h-8 mr-2" src="https://cdn-icons-png.flaticon.com/512/295/295128.png" alt="logo" />
                        Login
                    </a>
                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form onSubmit={handleLogin} class="space-y-4" action="#">
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input name="remember" id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            </form>
                            <button onClick={handlegoogleLogin} class="relative mt-6 border rounded-md py-2 text-sm text-gray-500   hover:bg-gray-700 w-full">
                                <span class="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-2xl"></span>
                                <span>Login with Google</span>
                            </button>

                            <Link to={"/register"}>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                </p>
                            </Link>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;