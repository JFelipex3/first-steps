import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react';

import { MyAwesomeApp } from "./MyAwesomeApp";

describe('MyAwesomeApp', () => {

    test('should render firstname and lastname (container)', () => {

        // Usando container para evaluar estados iniciales - render inicial
        const { container } = render(<MyAwesomeApp />);

        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');

        expect(h1?.innerHTML).toContain('Jhonnatan');
        expect(h3?.innerHTML).toContain('Machuca');

    });

    test('should render firstname and lastname (screen)', () => {

        render(<MyAwesomeApp />); r

        // const h1 = screen.getByRole('heading', {
        //     level: 1
        // });

        // console.log(h1.innerHTML);

        const h1 = screen.getByTestId('first-name-title');
        expect(h1.innerHTML).toContain('Jhonnatan');

    });

    test('should match snapshot (container)', () => {

        // Se usa para evaluar la estructura, si cambiara se daria un error, pero puede ser actualizado el snapshot
        const { container } = render(<MyAwesomeApp />);
        expect(container).toMatchSnapshot();

    });

    test('should match snapshot (screen)', () => {

        render(<MyAwesomeApp />);
        expect(screen.getByTestId('div-app')).toMatchSnapshot();

    });
});