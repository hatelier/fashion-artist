import React, {ReactNode} from "react";

interface CardProps {
    children: ReactNode;
}
const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div className="card">
            <div className="card-content">{children}</div>
        </div>
    );
};

export default Card;