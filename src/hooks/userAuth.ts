import { useState, useEffect } from "react";
import { getSessionInfo } from "../utils/getSessionInfo";

interface User {
  id: number;
  name: string;
  email: string;
  roles: string[];
  rols: number[];
  employee?: {
    id: number;
    firstname: string;
    lastname: string;
    position_id?: number;
  };
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(() => getSessionInfo());

  useEffect(() => {
    const handleStorageChange = () => {
      setUser(getSessionInfo());
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const hasRole = (role: string): boolean => {
    return user?.roles?.includes(role) || false;
  };

  const hasAnyRole = (roles: string[]): boolean => {
    return roles.some((role) => user?.roles?.includes(role)) || false;
  };

  const isAdmin = (): boolean => hasRole("admin");
  const isMedic = (): boolean => hasRole("medic");
  const isTherapist = (): boolean => hasRole("therapist");
  const isMedicalStaff = (): boolean => hasAnyRole(["medic", "therapist"]);

  const updateUser = (newUser: User | null) => {
    setUser(newUser);
  };

  return {
    user,
    hasRole,
    hasAnyRole,
    isAdmin,
    isMedic,
    isTherapist,
    isMedicalStaff,
    updateUser,
    isLoggedIn: !!user,
  };
};
