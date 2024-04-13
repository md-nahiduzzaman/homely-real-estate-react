import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useAuth();

  // navigation
  const navigate = useNavigate();
  const location = useLocation();

  const handleSocial = (socialProvider) => {
    socialProvider().then((result) => {
      console.log(result.user);
      if (result.user) {
        navigate(location?.state || "/");
      }
    });
  };

  return (
    <div>
      <div className="divider">Continue With</div>
      <div className="btn btn-primary btn-outline">
        <button onClick={() => handleSocial(googleLogin)}>Google</button>
      </div>
      <div className="btn btn-primary btn-outline">
        <button onClick={() => handleSocial(githubLogin)}>GitHub</button>
      </div>
    </div>
  );
};

export default SocialLogin;
