// Imports
import { createContext, useState } from "react";

// Filter context
export const FilterContext = createContext();

// Filter provider
export default function FilterProvider({ children }) {
    const [filter, setFilter] = useState("all");

    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            {children}
        </FilterContext.Provider>
    )
}