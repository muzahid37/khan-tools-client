import React from "react";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = data => console.log(data);
  if (user) {
    // navigate'/'
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl ">
        <div className="card-body">
          <h2 className="text-center text-primary text-4xl font-bold uppercase">
            login
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName", { required: true })} />
            {errors.firstName?.type === "required" && "First name is required"}

            <input {...register("lastName", { required: true })} />
            {errors.lastName && "Last name is required"}

            <input type="submit" />
          </form>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-primary"
          >
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
