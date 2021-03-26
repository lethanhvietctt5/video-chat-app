import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useState } from "react";
import { register } from "../../actions/auth";

function Register({ register, alerts }) {
  let [form, setForm] = useState({});

  function handleChange(e) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
    register(form);
  }
  return (
    <div className="h-full bg-img-background bg-cover bg-no-repeat">
      <div className="w-full h-full max-w-screen-sm">
        <div className="h-full w-1/2 items-center flex justify-center bg-white bg-opacity-50 shadow-2xl rounded">
          <form className="max-w-lg" onSubmit={handleSubmit}>
            <div className="text-6xl mb-12">Sign up</div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Full name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="name"
                type="text"
                placeholder="Name"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="text"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-wrap -mx-3">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="password"
                  type="password"
                  placeholder="******************"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex text-xs mb-1">
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

            <div className="w-full mt-3">
              {alerts.map((item, index) =>
                item.type === "failed" ? (
                  <div
                    key={index}
                    className="flex items-center bg-red-500 text-white rounded text-xl p-1 mb-1"
                  >
                    <div className="mr-3 text-xl">
                      <svg width="1em" height="1em" viewBox="0 0 12 12">
                        <g fill="none">
                          <path
                            d="M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10zm-.75-2.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0zm.258-4.84a.5.5 0 0 1 .984 0l.008.09V6l-.008.09a.5.5 0 0 1-.984 0L5.5 6V3.5l.008-.09z"
                            fill="currentColor"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div>{item.msg}</div>
                  </div>
                ) : (
                  <div
                    key={index}
                    className="flex items-center bg-green-500 text-gray-700 rounded text-xl p-1 mb-1"
                  >
                    <div className="mr-3 text-xl">
                      <svg width="1em" height="1em" viewBox="0 0 12 12">
                        <g fill="none">
                          <path
                            d="M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10zm-.75-2.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0zm.258-4.84a.5.5 0 0 1 .984 0l.008.09V6l-.008.09a.5.5 0 0 1-.984 0L5.5 6V3.5l.008-.09z"
                            fill="currentColor"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div>{item.msg}</div>
                  </div>
                )
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

Register.prototype = {
  alerts: PropTypes.array,
  register: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alerts,
});

export default connect(mapStateToProps, { register })(Register);
