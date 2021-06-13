import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { authLogout } from "redux/slices/auth";

function Home() {
  let [id, setId] = useState();
  const user = useSelector((state) => state.auth.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    setId(uuidv4());
  }, []);

  if (!user) return <Redirect to="/login" />;

  return (
    <div className="flex h-full bg-img-background bg-cover bg-no-repeat w-full justify-center items-center">
      <div className="flex w-1/2 h-full items-center justify-center">
        <div className="w-3/4">
          <div className="flex justify-center">
            <Link to={`/join`} className="flex justify-end min-w-3/4 mr-6">
              <button className="justify-center flex min-w-1/2 items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none">
                <svg width="2em" height="2em" viewBox="0 0 24 24">
                  <path
                    d="M3.7 7.7a.996.996 0 0 1 1.41 0L12 14.59l4.29-4.3L14.7 8.7c-.62-.62-.18-1.7.71-1.7H20c.55 0 1 .45 1 1v4.59c0 .89-1.08 1.34-1.71.71l-1.59-1.59l-5 5a.996.996 0 0 1-1.41 0L3.7 9.11c-.38-.38-.38-1.02 0-1.41z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div>Join meeting</div>
              </button>
            </Link>

            <Link
              to={`/rooms/${id}`}
              className="flex justify-start min-w-3/4 ml-6"
            >
              <button className="justify-center focus:outline-none min-w-1/2 flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                <svg width="2em" height="2em" viewBox="0 0 24 24">
                  <path
                    d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div>
                  <div>Create a meeting</div>
                </div>
              </button>
            </Link>
          </div>

          <div className="flex justify-center mt-6">
            <div className="text-white text-xl text hover:underline cursor-pointer">
              <button
                className="focus:outline-none"
                onClick={() => dispatch(authLogout())}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
