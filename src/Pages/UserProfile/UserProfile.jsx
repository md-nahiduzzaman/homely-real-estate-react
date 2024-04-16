import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";

const UserProfile = () => {
  const { logout, user } = useAuth();
  console.log(user);

  useEffect(() => {
    document.title = "Homely | User Profile";
  }, []);

  return (
    <div>
      <div className="hero h-[81vh] bg-base-200">
        <div
          data-aos="zoom-out-right"
          data-aos-duration="1000"
          className="hero-content flex-col items-center justify-center text-center"
        >
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={user.photoURL} />
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold">{user.displayName}</h1>
            <p className="py-6">{user.email}</p>
            <div className="flex gap-6 items-center justify-center">
              <Link to="/update">
                <button className="btn rounded bg-[#f7cd1b] hover:bg-[#07b682]">
                  Update Info
                </button>
              </Link>
              <button
                onClick={logout}
                className="btn rounded border-[#f7cd1b] bg-[#f7cf1b17]  hover:bg-[#07b682]"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
