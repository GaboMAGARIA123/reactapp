import useFormValidation from "../hooks/useFormValidation";

export default function Registration({ onGoToLogin }) {
  const { fields, errors, handleChange, validate } = useFormValidation({
    fullName: "",
    email: "",
    password: "",
    confirm: "",
    agree: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate({
      fullName: { required: true, message: "Full name required" },
      email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
      password: { required: true },
      confirm: { required: true, match: "password", message: "Passwords must match" },
      agree: { required: true, message: "You must agree to continue" },
    });
    if (isValid) alert("Registered successfully!");
  };

  return (
    <div className="app-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={fields.fullName}
          onChange={handleChange}
          className={errors.fullName ? "error" : ""}
          placeholder="Enter full name"
        />
        {errors.fullName && <div className="error-message">{errors.fullName}</div>}

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

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirm"
          value={fields.confirm}
          onChange={handleChange}
          className={errors.confirm ? "error" : ""}
          placeholder="Confirm password"
        />
        {errors.confirm && <div className="error-message">{errors.confirm}</div>}

        <label>
          <input type="checkbox" name="agree" checked={fields.agree} onChange={handleChange} />
          I agree to Terms & Privacy
        </label>
        {errors.agree && <div className="error-message">{errors.agree}</div>}

        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); onGoToLogin(); }}>Login</a>
      </p>
    </div>
  );
}
