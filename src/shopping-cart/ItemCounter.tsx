import { CSSProperties, useState } from "react";

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
    quantity?: number;
}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {

    const [count, setCount] = useState(quantity);

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleSubstract = () => {

        if (count === 1) return;

        setCount(count - 1);
    }

    return (
        <section style={StyleSection}>
            <span style={StyleSpan}>{name}</span>
            <button onClick={handleAdd}>+1</button>
            <span>{count}</span>
            <button onClick={handleSubstract}>-1</button>
        </section>
    )
};
