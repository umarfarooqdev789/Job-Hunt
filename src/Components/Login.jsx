import { useState } from "react";

 function Login() {
    const [showLogin, setShowLogin] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [check, setCheck] = useState(false);
    const [msg, setMsg] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [msg2, setMsg2] = useState("");


    const handleSignup = (e) => {
        e.preventDefault();

        if (!name) return setMsg("Please enter your name");
        if (!email) return setMsg("Please enter your email");
        if (!username) return setMsg("Please enter your username");
        if (!password) return setMsg("Please enter your password");
        if (!check) return setMsg("Please accept terms & conditions");

        setMsg("Account created (UI only – no storage).");
    };
    const handleLogin = (e) => {
        e.preventDefault();

        if (!loginEmail) return setMsg2("Please enter your email");
        if (!loginPassword) return setMsg2("Please enter your password");

        setMsg2("Login clicked (UI only – no storage).");
    };

    return (
        <div className="my-10 flex justify-center items-center bg-liniear-to-b from-orange-200 to-orange-300 p-4">
            <div className="bg-white w-full max-w-2xl rounded-2xl p-8 shadow-md">
                <div className="flex justify-center mb-6">
                    <button
                        className={`px-6 py-2 rounded-l-full ${!showLogin ? "bg-blue-600 text-white font-bold" : "text-black"
                            }`}
                        onClick={() => setShowLogin(false)}
                    >
                        Sign Up
                    </button>

                    <button
                        className={`px-6 py-2 rounded-r-full ${showLogin ? "bg-blue-600 text-white font-bold" : "text-black"
                            }`}
                        onClick={() => setShowLogin(true)}
                    >
                        Login
                    </button>
                </div>
                {!showLogin && (
                    <div className="flex gap-3 mb-4 flex-col justify-center items-center sm:flex-row">
                        <button className="w-1/2 bg-blue-500 text-white py-2 rounded-full text-sm font-medium">
                            Sign in with Google
                        </button>
                        <button className="w-1/2 bg-blue-200 text-black py-2 rounded-full text-sm font-medium">
                            Sign in with Facebook
                        </button>
                    </div>
                )}

                {!showLogin && (
                    <form onSubmit={handleSignup} className="space-y-3">
                        <h1 className="text-2xl font-bold text-center">Create Account</h1>

             
                        {msg && (
                            <p className={`text-center p-2 rounded text-sm ${msg.includes("created")
                                ? "bg-green-200 text-green-800"
                                : "bg-red-200 text-red-800"
                                }`}>
                                {msg}
                            </p>
                        )}

                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full p-2 bg-gray-100 rounded"
                            value={name}
                            onChange={(e) => {
                                setMsg("");
                                setName(e.target.value);
                            }}
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-2 bg-gray-100 rounded"
                            value={email}
                            onChange={(e) => {
                                setMsg("");
                                setEmail(e.target.value);
                            }}
                        />

                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full p-2 bg-gray-100 rounded"
                            value={username}
                            onChange={(e) => {
                                setMsg("");
                                setUsername(e.target.value);
                            }}
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-2 bg-gray-100 rounded"
                            value={password}
                            onChange={(e) => {
                                setMsg("");
                                setPassword(e.target.value);
                            }}
                        />

                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={check}
                                onChange={() => {
                                    setMsg("");
                                    setCheck(!check);
                                }}
                            />
                            <label>I agree to terms & conditions</label>
                        </div>

                        <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-semibold">
                            Sign Up
                        </button>
                    </form>
                )}
                {showLogin && (
                    <form onSubmit={handleLogin} className="space-y-3">
                        <h1 className="text-2xl font-bold text-center">Log In</h1>

                        {msg2 && (
                            <p className={`text-center p-2 rounded text-sm ${msg2.includes("clicked")
                                ? "bg-green-200 text-green-800"
                                : "bg-red-200 text-red-800"
                                }`}>
                                {msg2}
                            </p>
                        )}

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-2 bg-gray-100 rounded"
                            value={loginEmail}
                            onChange={(e) => {
                                setMsg2("");
                                setLoginEmail(e.target.value);
                            }}
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-2 bg-gray-100 rounded"
                            value={loginPassword}
                            onChange={(e) => {
                                setMsg2("");
                                setLoginPassword(e.target.value);
                            }}
                        />

                        <button className="w-full bg-blue-500 text-white py-2 rounded-lg text-lg font-semibold">
                            Login
                        </button>

                        <p className="text-center text-sm">
                            Don’t have an account?{" "}
                            <span
                                className="text-blue-500 cursor-pointer"
                                onClick={() => setShowLogin(false)}
                            >
                                Sign Up
                            </span>
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
}


export default Login