// Importamos las funciones necesarias para renderizar componentes y simular eventos en pruebas
import { fireEvent, render, screen } from "@testing-library/react";
// Importamos las funciones de Vitest para describir y ejecutar tests
import { describe, test, expect } from 'vitest';
// Importamos el componente que vamos a probar
import { ItemCounter } from "./ItemCounter";

// describe agrupa todos los tests relacionados con ItemCounter
describe('ItemCounter', () => {

    // Test 1: Verifica que el componente se renderiza con valores por defecto
    test('should render with default values', () => {
        // Definimos el nombre que queremos mostrar en el componente
        const name = 'Test item';

        // Renderizamos el componente solo con el nombre (sin cantidad)
        render(<ItemCounter name={name} />);

        // Verificamos que el nombre aparece en pantalla
        expect(screen.getByText(name)).toBeDefined();
        // Corrección: .not.toBeNull() debe ser una función
        expect(screen.getByText(name)).not.toBeNull();
    });

    // Test 2: Verifica que el componente muestra la cantidad personalizada
    test('should render with custom quantity', () => {
        const name = 'Test item';
        const quantity = 10;

        // Renderizamos el componente con nombre y cantidad personalizada
        render(<ItemCounter name={name} quantity={quantity} />);

        // Verificamos que la cantidad aparece en pantalla
        expect(screen.getByText(quantity)).toBeDefined();
    });

    // Test 3: Verifica que al presionar el botón +1 la cantidad aumenta
    test('should increase count when +1 button is pressed', () => {
        const name = 'Test item';
        const quantity = 1;
        render(<ItemCounter name={name} quantity={quantity} />);

        // Obtenemos el primer botón (se asume que es el de +1)
        const [buttonAdd] = screen.getAllByRole('button');

        // Simulamos el click en el botón de +1
        fireEvent.click(buttonAdd);

        // Verificamos que el span con la cantidad existe y muestra el valor actualizado
        expect(screen.getByTestId('spanQuantity').textContent).toBe(String(quantity + 1));
    });

    // Test 4: Verifica que al presionar el botón -1 la cantidad disminuye
    test('should decrease count when -1 button is pressed', () => {
        const name = 'Test item';
        const quantity = 5;
        render(<ItemCounter name={name} quantity={quantity} />);

        // Obtenemos el segundo botón (se asume que es el de -1)
        const [, buttonSubstract] = screen.getAllByRole('button');

        // Simulamos el click en el botón de -1
        fireEvent.click(buttonSubstract);

        // Verificamos que el span con la cantidad existe y muestra el valor actualizado
        expect(screen.getByTestId('spanQuantity').textContent).toBe(String(quantity - 1));
    });

    // Test 5: Verifica que la cantidad no baja de 1 al presionar -1
    test('should not decrease count when -1 button is pressed and quantity is 1', () => {
        const name = 'Test item';
        const quantity = 1;
        render(<ItemCounter name={name} quantity={quantity} />);

        // Obtenemos el segundo botón (se asume que es el de -1)
        const [, buttonSubstract] = screen.getAllByRole('button');

        // Simulamos el click en el botón de -1
        fireEvent.click(buttonSubstract);

        // Verificamos que la cantidad sigue siendo 1 (no baja de 1)
        expect(screen.getByTestId('spanQuantity').textContent).toBe(String(quantity));
    });

    // Test 6: Verifica que el texto del spam es rojo cuando el quantity se encuentra en 1
    test('should change to red when count is 1', () => {
        const name = 'Test item';
        const quantity = 1;
        render(<ItemCounter name={name} quantity={quantity} />);

        // Obtenemos el elemento HTML
        const itemText = screen.getByText(name);

        expect(itemText.style.color).toBe('red');
    });

    // Test 7: Verifica que el texto del spam es negro cuando el quantity es mayor a 1
    test('should change to black when count is greater than 1', () => {
        const name = 'Test item';
        const quantity = 3;
        render(<ItemCounter name={name} quantity={quantity} />);

        // Obtenemos el elemento HTML
        const itemText = screen.getByText(name);

        expect(itemText.style.color).toBe('black');
    });
});