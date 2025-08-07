import type React from "react";

type CardProps = {
    title: string;
    children: React.ReactNode;
};

export const Card = ({ title, children }: CardProps) => (
    <div className="rounded-lg p-3 shadow-lg" style={{ backgroundColor: "var(--card)"}}>
        <h2 className="text-2xl">{title}</h2>
        {children}
    </div>
);