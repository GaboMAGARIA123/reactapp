import { useState } from "react";

import Login from "./viwes/login.jsx";
import Registration from "./viwes/registration.jsx";
import ForgotPass from "./viwes/Passwordforgot.jsx";

function App() {
  const [currentForm, setCurrentForm] = useState("Login");

  const handleGoToLogin = () => setCurrentForm("Login");
  const handleGoToRegistration = () => setCurrentForm("Registration");
  const handleForgotPass = () => setCurrentForm("Passwordforgot");

  return (
    <div className="container">
      {currentForm === "Registration" && (
        <Registration onGoToLogin={handleGoToLogin} />
      )}
      {currentForm === "Login" && (
        <Login
          onCreateAcc={handleGoToRegistration}
          onForgotPass={handleForgotPass}
        />
      )}
      {currentForm === "Passwordforgot" && (
        <ForgotPass onGoToLogin={handleGoToLogin} />
      )}
    </div>
  );
}

export default App;
