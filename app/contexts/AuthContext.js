import { createContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

} 

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;