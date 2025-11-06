import { useState, useEffect } from "react";

function Login({ onCreateAcc, onForgotPass }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errors, setErrors] = useState({});

  const handleLogin = () => {
    const newErrors = {};
    if (email.trim() === "" || !email.includes("@"))
      newErrors.email = "Please enter a valid email address";
    if (pass.trim() === "") newErrors.pass = "Please enter a password";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Logged in successfully!");
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => setErrors({}), 1200);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <div className="container">
      <h1>Login</h1>

      <label>Email Address</label>
      <input
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

      <label>Password</label>
      <input
        type="password"
        placeholder="Enter password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      {errors.pass && <p style={{ color: "red" }}>{errors.pass}</p>}

      <span
        style={{ color: "#0077cc", cursor: "pointer", marginLeft: 6 }}
        onClick={() => onForgotPass && onForgotPass()}
      >
        Forgot Password?
      </span>

      <button onClick={handleLogin}>Login</button>

      <p>
        Don't have an account?
        <span
          style={{ color: "#0077cc", cursor: "pointer", marginLeft: 6 }}
          onClick={() => onCreateAcc && onCreateAcc()}
        >
          Create account
        </span>
      </p>
    </div>
  );
}

export default Login;
