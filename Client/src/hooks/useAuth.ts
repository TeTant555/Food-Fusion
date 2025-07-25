import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = Cookies.get("template-app-token");
    setIsAuthenticated(!!token);
  }, []);

  const userLogin = (token: string) => {
    Cookies.set("template-app-token", token);
    setIsAuthenticated(true);
  };

  const userLogout = () => {
    Cookies.remove("template-app-token");
    setIsAuthenticated(false);
  };

  return { isAuthenticated, userLogin, userLogout };
}