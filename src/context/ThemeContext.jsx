// Imports
import { createContext } from "react";

// Theme context
export const ThemeContext = createContext()

// Theme provider
export default function ThemeProvider({ children, theme, setTheme }) {

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}