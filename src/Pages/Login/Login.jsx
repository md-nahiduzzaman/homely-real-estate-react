import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "./SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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
          toast.success("Successfully Login!");
        }
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Please check your email and password");
      });
  };

  return (
    <div>
      <div className="hero h-[82vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div> */}
          <div className="card shrink-0 w-full max-w-sm rounded border bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <div>
                  <h1 className="text-3xl font-bold text-center">
                    Welcome back
                  </h1>
                </div>
                <hr className="mt-6 mb-6" />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered rounded"
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
                  className="input input-bordered rounded"
                  {...register("password", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-900">This field is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary rounded">Login</button>
                <p className="mt-4">
                  Do not have an account?{" "}
                  <Link to="/register">
                    <span className="underline underline-offset-2 ">
                      Register
                    </span>{" "}
                  </Link>
                </p>
              </div>
              <hr className="mt-6" />
            </form>

            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
