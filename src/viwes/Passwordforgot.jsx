import useFormValidation from "../hooks/useFormValidation";

export default function ForgotPass({ onGoToLogin }) {
  const { fields, errors, handleChange, validate } = useFormValidation({ email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate({
      email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
    });
    if (isValid) alert("Password reset link has been sent to your email!");
  };

  return (
    <div className="app-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          value={fields.email}
          onChange={handleChange}
          className={errors.email ? "error" : ""}
          placeholder="you@example.com"
        />
        {errors.email && <div className="error-message">{errors.email}</div>}

        <button type="submit">Submit</button>
      </form>
      <p>
        Remember your password? <a href="#" onClick={(e) => { e.preventDefault(); onGoToLogin(); }}>Log in</a>
      </p>
    </div>
  );
}
