import { describe, expect, test } from 'vitest';
import { add, divide, multiply, subtract } from './math.helper';

describe('add', () => {
    test('Should add two positives numbers', () => {
        // 1. Arrange
        const a = 1;
        const b = 2;

        // 2. Act
        const result = add(a, b);

        // 3. Assert
        expect(result).toBe(a + b);
    });

    test('Should add two negative numbers', () => {
        // 1. Arrange
        const a = -2;
        const b = -6;

        // 2. Act
        const result = add(a, b);

        // 3. Assert
        expect(result).toBe(a + b);
    });
});

describe('subtract', () => {
    test('Should subtract two positives numbers', () => {
        const a = 5;
        const b = 2;

        const result = subtract(a, b);

        expect(result).toBe(a - b);
    });

    test('Should subtract two negatives numbers', () => {
        const a = -5;
        const b = -2;

        const result = subtract(a, b);

        expect(result).toBe(a - b);
    });
});

describe('multiply', () => {
    test('Should multiply two positives numbers', () => {
        const a = 2;
        const b = 3;

        const result = multiply(a, b);

        expect(result).toBe(a * b);
    });

    test('Should multiply two negatives numbers', () => {
        const a = -5;
        const b = -2;

        const result = multiply(a, b);

        expect(result).toBe(a * b);
    });

    test('Should multiply number by zero', () => {
        const a = 3;
        const b = 0;

        const result = multiply(a, b);

        expect(result).toBe(a * b);
    });
});

describe('divide', () => {
    test('Should divide two positives numbers', () => {
        const a = 2;
        const b = 3;

        const result = divide(a, b);

        expect(result).toBe(a / b);
    });
});