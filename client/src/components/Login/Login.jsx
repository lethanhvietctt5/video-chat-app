import { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
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
    <div className="h-full bg-img-background bg-cover bg-no-repeat">
      <div className="w-full h-full max-w-screen-sm flex ">
        <form
          className="bg-white bg-opacity-50 shadow-2xl flex flex-col items-center rounded px-8 pt-6 pb-8 h-full"
          onSubmit={handleSubmit}
        >
          <div className="">
            <div className="text-7xl mb-12">Sign in</div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
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
                className="block text-gray-700 text-sm font-bold mb-2"
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
            <div className="flex text-xs">
              <div className="text-black text-opacity-60 mr-2">
                If you don't have account ?
              </div>
              <div>
                <Link to="/register" className="text-blue-500">
                  Sign up
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </div>
          <div className="w-full mt-3">
            {alerts.map((item) => (
              <div className="flex items-center bg-red-500 text-white rounded text-xs p-1 mb-1">
                <div className="mr-3 text-base">
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
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  alerts: PropTypes.array
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  alerts: state.alerts,
});

export default connect(mapStateToProps, { login })(Login);
