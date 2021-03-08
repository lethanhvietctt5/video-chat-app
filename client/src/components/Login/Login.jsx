function Login() {
  return (
    <div className="h-full bg-img-background bg-cover bg-no-repeat">
      <div className="w-full h-full max-w-screen-sm flex ">
        <form className="bg-white bg-opacity-50 shadow-2xl flex items-center rounded px-8 pt-6 pb-8 mb-4 h-full">
          <div className="">
            <div className="text-7xl mb-12">Sign in</div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
