import { useState } from "react";
import { useNavigate } from "react-router";

import { apiAxios } from "../../../service/api-axios";
import { AppRoutes } from "../../core/lib/AppRoutes";
import { AuthContext } from "../contexts/AuthContext";

const LOGGED_USER_KEY = "loggedUser";

export function AuthProvider({ children }) {
  const [loggedUser, setLoggedUser] = useState(() => {
    const foundLoggedUser = sessionStorage.getItem(LOGGED_USER_KEY);

    if (foundLoggedUser) {
      return JSON.parse(foundLoggedUser);
    }

    return null;
  });

  const navigate = useNavigate();

  async function login(formData) {
    try {
      const loginResponse = await apiAxios.post("/auth/login", formData);

      const responseData = loginResponse.data;

      if (loginResponse.status === 200) {
        sessionStorage.setItem(LOGGED_USER_KEY, JSON.stringify(responseData));

        setLoggedUser(responseData);

        navigate(AppRoutes.homePage);

        return { ok: true, user: responseData };
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);

      return { ok: false, message: "Usuario o contraseña inválidos." };
    }
  }

  async function register(formData) {
    try {
      const registerResponse = await apiAxios.post("/auth/register", formData);

      if (registerResponse.status === 201) {
        const loginResult = await login({
          email: formData.email,
          password: formData.password
        });

        const loggedUser = loginResult.user;

        return { ok: true, user: loggedUser };
      }
    } catch (error) {
      console.error("Error al registrar usuario:", error);

      return { ok: false, message: "Error al registrar usuario." };
    }
  }

  const logout = () => {
    sessionStorage.removeItem(LOGGED_USER_KEY);

    setLoggedUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!loggedUser,
        loggedUser,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
