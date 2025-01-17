import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { logout, user } = useAuth();

  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#07b682] font-bold" : "font-bold"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#07b682] font-bold" : "font-bold"
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#07b682] font-bold" : "font-bold"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#07b682] font-bold" : "font-bold"
          }
          to="/update"
        >
          Update Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#07b682] font-bold" : "font-bold"
          }
          to="/userProfile"
        >
          User Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#07b682] font-bold" : "font-bold"
          }
          to="/myCart"
        >
          My Cart
        </NavLink>
      </li>
      {/* <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Registration</NavLink>
      </li> */}
      {user ? (
        <>
          {/* <li>
            <NavLink to="/update">Update Profile</NavLink>
          </li> */}
          {/* <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#07b682] font-bold" : "font-bold"
              }
              to="/userProfile"
            >
              User Profile
            </NavLink>
          </li> */}
        </>
      ) : (
        ""
      )}

      {/* <li>
        <NavLink to="/update">Update Profile</NavLink>
      </li> */}
    </>
  );

  return (
    <div className="container mx-auto z-10">
      <div className="navbar bg-base-100 mt-6 mb-6">
        <div className="navbar-start">
          <div className="dropdown z-10">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="text-2xl font-black">
            HOMELY
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="flex gap-5 items-center">
                <div>
                  <div className="avatar tooltip" data-tip={user.displayName}>
                    <div className="w-12 rounded-full">
                      <img src={user.photoURL} alt="user photo" />
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={logout}
                    className="btn rounded bg-[#f7cd1b] hover:bg-[#07b682]"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex gap-5 ">
                <Link to="/login">
                  <button className="btn rounded border-[#f7cd1b] bg-[#f7cf1b17]  hover:bg-[#07b682]">
                    Sign In
                  </button>
                </Link>
                <Link to="/register">
                  <button className="btn rounded bg-[#f7cd1b] hover:bg-[#07b682]">
                    Sign up
                  </button>
                </Link>
              </div>
            </>
          )}

          {/* {user && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    {user.displayName}
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <Link to="/update">Update Profile</Link>
                </li>
              </ul>
            </div>
          )}
          {user ? (
            <button onClick={logout} className="btn">
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn">Logo In</button>
            </Link>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
