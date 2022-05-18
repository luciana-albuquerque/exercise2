import { createContext } from "react";
import { UserT } from "../components/containers/Navbar/interfaces";

const UserContext = createContext<UserT[] | []>([]);

export default UserContext;