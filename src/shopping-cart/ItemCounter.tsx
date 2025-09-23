import { CSSProperties } from "react";

const StyleSection: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginTop: 10
}

const StyleSpan: CSSProperties = {
    width: 150
}

interface Props {
    name: string;
    quantity: number;
}

export const ItemCounter = ({ name, quantity }: Props) => {
    return (
        <section style={StyleSection}>
            <span style={StyleSpan}>{name}</span>
            <button>+1</button>
            <span>{quantity}</span>
            <button>-1</button>
        </section>
    )
};
