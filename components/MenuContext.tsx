"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface MenuContextType {
    isOpen: boolean;
    openMenu: () => void;
    closeMenu: () => void;
}

const MenuContext = createContext<MenuContextType>({
    isOpen: false,
    openMenu: () => { },
    closeMenu: () => { },
});

export function MenuProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
        setIsOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeMenu = () => {
        setIsOpen(false);
        document.body.style.overflow = "";
    };

    return (
        <MenuContext.Provider value={{ isOpen, openMenu, closeMenu }}>
            {children}
        </MenuContext.Provider>
    );
}

export function useMenu() {
    return useContext(MenuContext);
}
