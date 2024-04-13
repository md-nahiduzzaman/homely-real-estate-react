import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const UpdateUserProfile = () => {
  //context api
  const { updateUserProfile } = useAuth();

  //hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { fullName, image } = data;

    //Update user
    updateUserProfile(fullName, image)
      .then(() => {
        // console.log("profile updated");
      })
      .catch((error) => {
        console.log(error.message);
      });

    // createUser(email, password)
    //   .then(() => {
    //     // console.log(result.user);
    //     updateUserProfile(fullName, image).then(() => {
    //       // console.log("profile updated");
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
  };

  return (
    <div>
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

              {/* img url */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  placeholder="image url"
                  className="input input-bordered"
                  {...register("image", { required: true })}
                />
                {errors.fullName && (
                  <span className="text-red-900">This field is required</span>
                )}
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserProfile;
