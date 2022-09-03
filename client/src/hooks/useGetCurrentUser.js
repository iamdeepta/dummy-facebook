import { useState } from "react";
import api from "../api/baseurl";

export const useGetCurrentUser = () => {
  const [user, setUser] = useState([]);

  //retrieve current user data
  const getUser = async () => {
    const response = await api.get("user");
    return response.data;
  };

  const getCurrentUser = async () => {
    const currentUser = await getUser();

    if (currentUser) {
      setUser(currentUser);
    }
  };

  return { user, getCurrentUser };
};
