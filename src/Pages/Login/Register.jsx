import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "./SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  //context api
  const { user, createUser, updateUserProfile } = useAuth();

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
    const { email, password, fullName, image } = data;

    //create user
    createUser(email, password)
      .then(() => {
        // console.log(result.user);
        updateUserProfile(fullName, image).then(() => {
          navigate(location?.state || "/");
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="card shrink-0 w-full max-w-md shadow-1xl bg-base-100"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div>
                <h1 className="text-3xl font-bold text-center">
                  Create an Account
                </h1>
              </div>
              <hr className="mt-6 mb-6" />
              {/* name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="Text"
                  placeholder="Full Name"
                  className="input input-bordered"
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && (
                  <span className="text-red-900">This field is required</span>
                )}
              </div>
              {/* email */}
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
              {/* img url */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  placeholder="image url"
                  className="input input-bordered"
                  {...register("image")}
                />
              </div>

              {/* password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    pattern: /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/,
                    required: true,
                  })}
                />
                {errors.password && (
                  <span className="text-red-900">This field is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                <p className="mt-4">
                  Already have an account?{" "}
                  <Link to="/login">
                    <span className="underline underline-offset-2">Login</span>
                  </Link>
                </p>
              </div>
              <hr className="mt-4" />
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
