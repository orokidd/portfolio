import { createContext, useState, type ReactNode } from "react";

type NavContextType = {
	activePage: string;
	setActivePage: React.Dispatch<React.SetStateAction<string>>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const NavContext = createContext<NavContextType>({
	activePage: "home",
	setActivePage: () => {}, // Provide a dummy function
});

export default function NavContextProvider({ children }: { children: ReactNode }) {
	const [activePage, setActivePage] = useState<string>("home");

	return <NavContext value={{ activePage, setActivePage }}>{children}</NavContext>;
}
