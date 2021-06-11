import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { userLogin } from "redux/slices/auth";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const authStatus = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  function handleOnChange(event) {
    if (event.target.id === "email") setEmail(event.target.value);
    else setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(userLogin({ email, password }));
  }

  if (authStatus) {
    return <Redirect to="/" />;
  }

  return (
    <div className="w-full h-full bg-img-background bg-cover bg-no-repeat">
      <div className="w-full h-full flex justify-center items-center md:block">
        <div className="h-full md:w-1/3 w-3/4 min-w-min px-3 bg-white bg-opacity-50 shadow-2xl flex items-center justify-center">
          <form
            className="flex flex-col items-center justify-center sm:justify-start rounded"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col justify-center text-xl">
              <div className="text-6xl md:text-4xl xl:text-5xl 2xl:text-7xl mb-12 flex justify-center">
                Sign in
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow text-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Email"
                  onChange={handleOnChange}
                  value={email}
                />
              </div>
              <div className="">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow text-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                  onChange={handleOnChange}
                  value={password}
                />
              </div>
              <div className="flex text-xs xl:text-sm 2xl:text-base">
                <div className="text-black text-opacity-60 mr-2">
                  If you don't have account ?
                </div>
                <div>
                  <Link to="/register" className="text-blue-500">
                    Sign up
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center mt-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
