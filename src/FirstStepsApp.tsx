import { ItemCounter } from './shopping-cart/ItemCounter';

interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    { productName: 'Nintendo Switch 2', quantity: 1 },
    { productName: 'Pro Controller', quantity: 4 },
    { productName: 'Super Smash Bros', quantity: 2 }
]

export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de Compras</h1>

            {
                itemsInCart.map(({ productName, quantity }) => (
                    // El key debe ser único
                    <ItemCounter key={productName} name={productName} quantity={quantity} />
                ))
            }
        </>
    )
}