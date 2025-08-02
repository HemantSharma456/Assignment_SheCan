import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google Sign-In successful:", user);
      navigate("/dashboard");
    } catch (error) {
      console.error("Sign-In error:", error.message);
    }
  };

  const handleDummyLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: "url('/shecan.jpg')" }}
    >
      <div className="bg-white p-6 sm:p-8 rounded-lg w-full max-w-md shadow-md">
        <div className="flex justify-center mb-4">
          <img src="/logo.jpg" alt="logo" className="h-24 w-24 object-contain" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">Welcome again!</h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Please enter your details
        </p>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border-b-2 outline-none border-black placeholder-black text-lg pb-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border-b-2 outline-none border-black placeholder-black text-lg pb-2"
          />

          <button
            className="w-full bg-black text-white py-3 rounded-md font-semibold hover:opacity-90 transition"
            onClick={handleDummyLogin}
          >
            Login
          </button>

          <button
            className="w-full bg-black text-white py-3 rounded-md font-semibold hover:opacity-90 transition"
            onClick={handleGoogleSignIn}
          >
            Sign in with Google
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6 italic leading-relaxed">
          “She believed she could, so she did. <br />
          Strength doesn't come from what you can do, <br />
          it comes from overcoming the things you once thought you couldn't. <br />
          Keep pushing forward, your story is just beginning.”
        </p>
      </div>
    </div>
  );
}

export default SignIn;
