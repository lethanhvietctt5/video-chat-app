import { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/auth";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

function Login({ login, isAuthenticated, alerts }) {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  function handleOnChange(event) {
    if (event.target.id === "email") setEmail(event.target.value);
    else setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    login(email, password);
  }

  if (isAuthenticated) {
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
              <div className="text-6xl md:text-4xl xl:text-5xl 2xl:text-7xl mb-12 flex justify-center">Sign in</div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
            <div className="w-full mt-3">
              {alerts.map((item, index) =>
                item.type === "failed" ? (
                  <div
                    key={index}
                    className="flex items-center bg-red-200 border border-red-500 text-red-900 rounded text-xl p-2 mb-1"
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
                    <div className="text-base">{item.msg}</div>
                  </div>
                ) : (
                  <div
                    key={index}
                    className="flex items-center bg-green-200 border border-green-500 text-green-900 rounded text-xl p-2 mb-1"
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
                    <div className="text-base">{item.msg}</div>
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  alerts: PropTypes.array,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  alerts: state.alerts,
});

export default connect(mapStateToProps, { login })(Login);
