import type React from "react";

type CardProps = {
    title: string;
    children: React.ReactNode;
};

const Card = ({ title, children }: CardProps) => (
    <div>
        <h2>{title}</h2>
        {children}
    </div>
);