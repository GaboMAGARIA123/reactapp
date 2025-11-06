import useFormValidation from "../hooks/useFormValidation";

export default function Login({ onGoToRegistration, onGoToForgot }) {
  const { fields, errors, handleChange, validate } = useFormValidation({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate({
      email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
      password: { required: true },
    });
    if (isValid) alert("Login successful!");
  };

  return (
    <div className="app-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={fields.email}
          onChange={handleChange}
          className={errors.email ? "error" : ""}
          placeholder="you@example.com"
        />
        {errors.email && <div className="error-message">{errors.email}</div>}

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={fields.password}
          onChange={handleChange}
          className={errors.password ? "error" : ""}
          placeholder="Enter password"
        />
        {errors.password && <div className="error-message">{errors.password}</div>}

        <a href="#" onClick={(e) => { e.preventDefault(); onGoToForgot(); }}>Forgot Password?</a>
        <button type="submit">Login</button>
      </form>
      <p>
        Don’t have an account? <a href="#" onClick={(e) => { e.preventDefault(); onGoToRegistration(); }}>Create account</a>
      </p>
    </div>
  );
}
