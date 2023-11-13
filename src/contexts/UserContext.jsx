import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [formData, setFormData] = useState(sampleUserData);

  return (
    <UserContext.Provider value={{ formData, setFormData }}>
      {children}
    </UserContext.Provider>
  );
};
const sampleUserData = {
  name: "Ajinkya Bodke",
  email: "",
  month: 0,
  day: 1,
  year: 2001,
  password: "",
  username: "",
  id: "",
  bio: "Full Stack Developer👨‍💻",
  website: "https://ajinkyabodke.com/",
  location: "India",
};
