import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const UserProfile = () => {
  const { logout, user } = useAuth();
  console.log(user);

  return (
    <div>
      <div className="hero h-[81vh] bg-base-200">
        <div className="hero-content flex-col items-center justify-center text-center">
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
                <button className="btn btn-primary">Update Info</button>
              </Link>
              <button onClick={logout} className="btn btn-primary">
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
