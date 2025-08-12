import React from "react"
import { useEffect } from "react";
import ReactDOM from "react-dom";

type ModalProps = {
    children: React.ReactNode;
    onClose: () => void;
};

const modalRoot = document.getElementById("modal-root");

export const Modal = ({ children, onClose }: ModalProps) => {
    // Close modal on ESC key press
    useEffect(() => {
        const onEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", onEsc);
        return () => window.removeEventListener("keydown", onEsc);
    }, [onClose])

    // Prevent scrolling when modal is open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = "auto"; }
    }, []);

    return ReactDOM.createPortal(
        <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div 
                className="bg-white/100 rounded-lg p-6 shadow-lg max-w-md w-full"
                onClick={e => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
                {children}
            </div>
        </div>,
        modalRoot! // ! -- modalRoot is not null/undefined, so don't warn me about it.
    );
};