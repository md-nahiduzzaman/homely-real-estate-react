import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { BsGoogle } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import toast from "react-hot-toast";

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
        toast.success("Successfully Login!");
      }
    });
  };

  return (
    <div>
      <div className="divider">OR</div>
      <div className="flex gap-6 items-center justify-center pb-8">
        <div className="btn btn-primary btn-outline rounded-full">
          <button onClick={() => handleSocial(googleLogin)}>
            <BsGoogle />
          </button>
        </div>
        <div className="btn btn-primary btn-outline rounded-full">
          <button onClick={() => handleSocial(githubLogin)}>
            <BsGithub />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
