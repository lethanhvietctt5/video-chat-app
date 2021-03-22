import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router";
import { logout } from "../../actions/auth";
function Home({ logout, isAuthenticated }) {
  function handleLogout() {
    logout();
  }

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="flex h-full bg-img-background bg-cover bg-no-repeat w-full justify-center items-center">
      <div className="flex w-1/2 h-full items-center justify-center">
        <div className="w-3/4">
          <div className="flex justify-center">
            <div className="flex justify-end min-w-3/4 mr-6">
              <button className="justify-center flex min-w-1/2 items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                <svg width="2em" height="2em" viewBox="0 0 24 24">
                  <path
                    d="M3.7 7.7a.996.996 0 0 1 1.41 0L12 14.59l4.29-4.3L14.7 8.7c-.62-.62-.18-1.7.71-1.7H20c.55 0 1 .45 1 1v4.59c0 .89-1.08 1.34-1.71.71l-1.59-1.59l-5 5a.996.996 0 0 1-1.41 0L3.7 9.11c-.38-.38-.38-1.02 0-1.41z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div>Join meeting</div>
              </button>
            </div>

            <div className="flex justify-start min-w-3/4 ml-6">
              <button className="justify-center min-w-1/2 flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                <svg width="2em" height="2em" viewBox="0 0 24 24">
                  <path
                    d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div>Create a meeting</div>
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <div className="text-white text-xl text hover:underline cursor-pointer">
              {isAuthenticated ? (
                <Link to="/login" onClick={handleLogout}>
                  Logout
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Home);
