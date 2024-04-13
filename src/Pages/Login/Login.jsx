import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "./SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  //context api
  const { signInUser } = useAuth();

  // navigation
  const navigate = useNavigate();
  const location = useLocation();

  //hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    //sign in user
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          navigate(location?.state || "/");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <h1>this is login</h1>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-900">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-900">This field is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <p>
                  Do not have an account? <Link to="/register">Register</Link>
                </p>
              </div>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;