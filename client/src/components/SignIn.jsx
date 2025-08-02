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
        navigate("/dashboard")
        } catch (error) {
        console.error("Sign-In error:", error.message);
        }
  };

  const handleDummyLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
    };


  return (
    <div className="h-screen bg-cover bg-center flex items-start justify-start" style={{ backgroundImage: "url('/shecan.jpg')" }}>
        <div  className="bg-white h-[700px] p-8 w-[480px] ml-[250px] mt-[100px] flex flex-col">
            <img src="/logo.jpg" className="h-28 w-28 ml-[150px] mt-[30]"/>
            <h1 className="font-libertinus text-4xl font-bold text-center mt-4">hey again!</h1>
            <p className="text-sm text-gray-500 text-center mt-2">Please Enter your details</p>

            <div className="mt-6 space-y-4">
            <div>
                <input
                type="email"
                placeholder="Email"
                className="w-full border-b-2 outline-none border-black placeholder-black text-xl font-semibold pb-3"
                />
            </div>
            <div>
                <input
                type="password"
                placeholder="Password"                                                                                                          
                className="w-full border-b-2 outline-none border-black placeholder-black text-xl font-semibold pb-3 "
                />
            </div>

            <button className="w-full bg-black text-white py-3 rounded-md font-semibold hover:opacity-90 transition" onClick={handleDummyLogin}>
                Login
            </button>

            <button className="w-full bg-black text-white py-3 rounded-md font-semibold hover:opacity-90 transition"
                onClick={handleGoogleSignIn}
            >
                Sign in with Google
            </button>

            <p className="text-center text-sm text-gray-500 mt-6 italic leading-relaxed">
                “She believed she could, so she did. <br />
                Strength doesn't come from what you can do, <br />
                it comes from overcoming the things you once thought you couldn't. <br />
                Keep pushing forward, your story is just beginning.”  
            </p>

            </div>
        </div>
    </div>

  );
}

export default SignIn;
