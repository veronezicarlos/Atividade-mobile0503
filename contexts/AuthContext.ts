import { createContext } from "react";

export interface AuthContextData {
	user: { email: string; name: string } | null;
 	login: (email: string, name: string) => void;
	logout: () => void;
	isLoading: boolean;
}

export const AuthContext = createContext<AuthContextData | null>(null);
