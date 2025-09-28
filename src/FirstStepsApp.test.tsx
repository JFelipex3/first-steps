// Importamos las funciones necesarias para renderizar componentes y buscar elementos en pantalla
import { render, screen } from "@testing-library/react";
// Importamos utilidades de Vitest para definir y limpiar pruebas
import { afterEach, describe, expect, test, vi } from "vitest";
// Importamos el componente principal que vamos a probar
import { FirstStepsApp } from "./FirstStepsApp";

// Creamos un mock (simulación) de ItemCounter para no depender de su implementación real
const mockItemCounter = vi.fn((_props: unknown) => {
    // Retorna un div simple con un testid para identificarlo en las pruebas
    return <div data-testid="ItemCounter" />;
})

// Indicamos a Vitest que cada vez que se importe ItemCounter, use nuestro mock
vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props),
}));

/*
Alternativa de mock (comentada):
Podrías usar este mock si quieres que el div tenga los props como atributos,
pero normalmente no es necesario para estas pruebas.
*/
// vi.mock('./shopping-cart/ItemCounter', () => ({
//     ItemCounter: (props: unknown) => <div data-testid="ItemCounter" name={props.name} quantity={props.quantity} />
// }));

// Agrupamos todas las pruebas relacionadas con FirstStepsApp
describe('FirstStepsApp', () => {

    // Limpia los mocks después de cada prueba para evitar interferencias entre ellas
    afterEach(() => {
        vi.clearAllMocks();
    });

    // Test 1: Verifica que el HTML generado coincide con el snapshot guardado
    test('should match snapshot', () => {
        // Renderiza el componente y obtiene el contenedor principal
        const { container } = render(<FirstStepsApp />);
        // Compara el HTML generado con el snapshot previo
        expect(container).toMatchSnapshot();
    });

    // Test 2: Verifica que se renderizan exactamente 3 componentes ItemCounter
    test('should render the correct number of ItemCounter components', () => {
        render(<FirstStepsApp />);
        // Busca todos los elementos con el testid "ItemCounter"
        const itemCounters = screen.getAllByTestId('ItemCounter');
        // Espera que haya 3 elementos (uno por cada producto en el carrito)
        expect(itemCounters.length).toBe(3);
    });

    // Test 3: Verifica que ItemCounter recibe los props correctos para cada producto
    test('should render ItemCounter with correct props', () => {
        render(<FirstStepsApp />);
        // Espera que el mock se haya llamado 3 veces (una por cada producto)
        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        // Verifica que se llamó con los datos correctos para cada producto
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Nintendo Switch 2', quantity: 1
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Pro Controller', quantity: 4
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Super Smash Bros', quantity: 2
        });
    });
});