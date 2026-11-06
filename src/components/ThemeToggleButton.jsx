import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggleButton() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}> Toggle Theme</button>

        </div>
    )
}