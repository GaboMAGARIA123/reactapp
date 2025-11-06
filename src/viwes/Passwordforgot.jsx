import { useState, useEffect } from "react";

function ForgotPass({ onGoToLogin }) {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const newErrors = {};
    if (email.trim() === "" || !email.includes("@"))
      newErrors.email = "Please enter a valid email address";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Password recovery link sent!");
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
      <h1>Forgot Password</h1>
      <label>Email Address</label>
      <input
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

      <button onClick={handleSubmit}>Submit</button>

      <p>
        Remember your password?
        <span
          style={{ color: "#0077cc", cursor: "pointer", marginLeft: 6 }}
          onClick={() => onGoToLogin && onGoToLogin()}
        >
          Log in
        </span>
      </p>
    </div>
  );
}

export default ForgotPass;
