// Importamos las funciones necesarias para renderizar componentes y hacer pruebas
import { render, screen } from "@testing-library/react";
// Importamos las funciones de Vitest para describir y ejecutar tests
import { describe, test, expect } from 'vitest';
// Importamos el componente que vamos a probar
import { ItemCounter } from "./ItemCounter";

// Agrupamos los tests relacionados con el componente ItemCounter
describe('ItemCounter', () => {

    // Primer test: verifica que el componente se renderiza con valores por defecto
    test('should render with default values', () => {

        // Definimos el nombre que queremos mostrar en el componente
        const name = 'Test item';

        // Renderizamos el componente con el nombre
        render(<ItemCounter name={name} />);

        // Verificamos que el nombre aparece en pantalla
        expect(screen.getByText(name)).toBeDefined();
        // También verificamos que no es nulo (opcional, pero muestra otra forma de comprobar)
        expect(screen.getByText(name)).not.toBeNull;
    });

    // Segundo test: verifica que el componente muestra la cantidad personalizada
    test('should render with custom quantity', () => {

        // Definimos el nombre y la cantidad que queremos mostrar
        const name = 'Test item';
        const quantity = 10;

        // Renderizamos el componente con nombre y cantidad
        render(<ItemCounter name={name} quantity={quantity} />);

        // Verificamos que la cantidad aparece en pantalla
        expect(screen.getByText(quantity)).toBeDefined();
    });
});