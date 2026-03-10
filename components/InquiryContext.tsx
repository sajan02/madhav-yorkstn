"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface InquiryContextType {
    isOpen: boolean;
    openInquiry: () => void;
    closeInquiry: () => void;
}

const InquiryContext = createContext<InquiryContextType>({
    isOpen: false,
    openInquiry: () => { },
    closeInquiry: () => { },
});

export function InquiryProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const openInquiry = () => {
        setIsOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeInquiry = () => {
        setIsOpen(false);
        document.body.style.overflow = "";
    };

    return (
        <InquiryContext.Provider value={{ isOpen, openInquiry, closeInquiry }}>
            {children}
        </InquiryContext.Provider>
    );
}

export function useInquiry() {
    return useContext(InquiryContext);
}
