import { describe, expect, test } from 'vitest';
import { add } from './math.helper';

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

