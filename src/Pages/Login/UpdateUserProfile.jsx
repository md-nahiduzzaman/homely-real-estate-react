import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

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
        toast.success("Successfully updated your profile!");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Please fill up the form ");
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
      <div className="hero h-[82vh] bg-base-200">
        <div className="hero-content">
          <div className="card shrink-0 w-full max-w-sm shadow-xl bg-base-100">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body w-full"
            >
              <div className="text-center text-2xl font-bold">
                <h1>Update Profile</h1>
              </div>
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
                <button className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserProfile;
