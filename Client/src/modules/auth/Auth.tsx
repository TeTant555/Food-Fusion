import React, { useState } from "react";
import { Login } from "./chunks/Login";
import { SignUp } from "./chunks/SignUp"; // or Register if that's the filename

interface AuthProps {
  onAuthSuccess?: (type?: "login" | "signup") => void;
  initialView?: 'login' | 'signup';
}

const Auth = ({ onAuthSuccess, initialView = 'login' }: AuthProps) => {
  const [view, setView] = useState<"login" | "signup">(initialView);

  return (
    <div>
      {view === "login" ? (
        <Login onSwitchToSignUp={() => setView("signup")} onAuthSuccess={onAuthSuccess} />
      ) : (
        <SignUp onSwitchToLogin={() => setView("login")} onAuthSuccess={onAuthSuccess} />
      )}
    </div>
  );
};

export default Auth;
