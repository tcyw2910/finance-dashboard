import type React from "react";

type CardProps = {
    title: React.ReactNode;
    extra?: React.ReactNode;
    children: React.ReactNode;
};

export const Card = ({ title, extra, children }: CardProps) => (
    <div className="rounded-lg p-3 shadow-lg" style={{ backgroundColor: "var(--card)"}}>
        <div className="flex justify-between align-center">
            <h2 className="text-2xl">{title}</h2>
            {extra && <div>{extra}</div>}
        </div>
        {children}
    </div>
);