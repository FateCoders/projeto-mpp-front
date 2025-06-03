import React, { createContext, useContext, useState } from "react";

interface CategoryContextType {
    selectedCategory: string | null;
    setSelectedCategory: (category: string | null) => void;
}

const CategoryContext = createContext<CategoryContextType>({
    selectedCategory: null,
    setSelectedCategory: () => { },
});

export const useCategory = () => useContext(CategoryContext);

export const CategoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    return (
        <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
            {children}
        </CategoryContext.Provider>
    );
};
