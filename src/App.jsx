import { useState } from "react";
import Login from "./viwes/login.jsx";
import Registration from "./viwes/registration.jsx";
import ForgotPass from "./viwes/Passwordforgot.jsx";
import "./app.css";

export default function App() {
  const [currentForm, setCurrentForm] = useState("Login");

  const goToLogin = () => setCurrentForm("Login");
  const goToRegistration = () => setCurrentForm("Registration");
  const goToForgot = () => setCurrentForm("ForgotPass");

  return (
    <div className="page-wrapper">
      {currentForm === "Login" && (
        <Login
          onGoToRegistration={goToRegistration}
          onGoToForgot={goToForgot}
        />
      )}

      {currentForm === "Registration" && (
        <Registration onGoToLogin={goToLogin} />
      )}

      {currentForm === "ForgotPass" && (
        <ForgotPass onGoToLogin={goToLogin} />
      )}
    </div>
  );
}