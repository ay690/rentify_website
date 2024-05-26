import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="max-w-lg p-3 mx-auto">
      <h1 className="my-5 text-3xl font-semibold text-center">SignUP</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          id="username"
          className="p-3 border rounded-lg"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="p-3 border rounded-lg"
        />
        <input
          type="text"
          placeholder="phone number"
          id="phonenumber"
          className="p-3 border rounded-lg"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="p-3 border rounded-lg"
        />
        <button className="p-3 text-white uppercase rounded-md bg-slate-700 hover:opacity-95 disabled:opacity-80">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-2">
        <p>Have an account</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign-in</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
