import { useMemo } from "react";
import { useNavigate, Outlet } from "react-router";
import { AuthContext } from "../hooks/useAuth";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthProvider = () => {
  const [user, setUser] = useLocalStorage("user", "");
  const navigate = useNavigate();

  const value = useMemo(() => {
    // call this function when you want to authenticate the user
    const login = async (data: string) => {
      setUser(data);
      navigate("/secret");
    };

    // call this function to sign out logged in user
    const logout = () => {
      setUser(null);
      navigate("/", { replace: true });
    };

    return { user, login, logout };
  }, [user, navigate, setUser]);
  return (
    <AuthContext.Provider value={value}>
      <Outlet/>
    </AuthContext.Provider>
  );
};