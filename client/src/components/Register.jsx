import { Link, Redirect } from "react-router-dom";
import { useState } from "react";
import api from "api";

function Register() {
  let [form, setForm] = useState({});
  const [regSucceed, setRegSuccess] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    api.post("/register", { ...form }).then((response) => {
      if (response.msg) {
      } else {
        setRegSuccess(true);
      }
    });
  }

  if (regSucceed) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="h-full bg-img-background bg-cover bg-no-repeat flex justify-center md:block">
      <div className="h-full w-3/4 md:w-1/3 items-center flex justify-center bg-white bg-opacity-50 shadow-2xl rounded px-4">
        <form className="max-w-lg text-xl" autoComplete="off" onSubmit={handleSubmit}>
          <div className="text-6xl md:text-4xl xl:text-5xl 2xl:text-7xl mb-12 flex justify-center">
            Sign up
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Full name
            </label>
            <input
              className="text-lg appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="name"
              type="text"
              placeholder="Name"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="text-lg appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="email"
              type="text"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3">
              <label
                className="block tracking-wide text-gray-700 font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="text-lg appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="password"
                type="password"
                placeholder="******************"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex text-xs xl:text-sm 2xl:text-base mb-1">
            <div className="text-black text-opacity-60 mr-2">
              If you have account ?
            </div>
            <div>
              <Link to="/login" className="text-blue-500">
                Login
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
