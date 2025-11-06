import { useState, useEffect } from "react";

function Registration({ onGoToLogin }) {
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSignup = () => {
    const newErrors = {};

    if (name.trim() === "") newErrors.name = "Please enter your full name";
    if (email.trim() === "" || !email.includes("@"))
      newErrors.email = "Please enter a valid email address";
    if (pass.trim() === "") newErrors.pass = "Please enter a password";
    if (pass !== confirmPass)
      newErrors.confirmPass = "Passwords do not match";
    if (gender === "") newErrors.gender = "Please select a gender";
    if (!agree)
      newErrors.agree = "You must agree to the Terms and Privacy Policy";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Signed up successfully!");
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => setErrors({}), 1200);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <>
    <div className="container">
      <h1>Register</h1>
      <div className="input-con">
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

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

        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />
        {errors.confirmPass && (
          <p style={{ color: "red" }}>{errors.confirmPass}</p>
        )}
      </div>

      <h3>Gender</h3>
      <div className="Gen">
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="other"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />
          Other
        </label>
      </div>
      {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}

      <label>
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        I agree to the Terms and Privacy Policy
      </label>
      {errors.agree && <p style={{ color: "red" }}>{errors.agree}</p>}

      <button onClick={handleSignup}>Sign Up</button>

      <p>
        Already have an account?
        <span
          style={{ color: "#0077cc", cursor: "pointer", marginLeft: 6 }}
          onClick={() => onGoToLogin && onGoToLogin()}
        >
          Log in
        </span>
      </p>
      </div>
    </>
  );
}

export default Registration;
