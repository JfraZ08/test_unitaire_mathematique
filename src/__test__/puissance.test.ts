import { describe, expect, test } from "vitest";
import { puissance } from "../modules/puissance";


describe('puissance', () => {
    const anyNumber = 99999;
 
    describe('expoent', () => {
        test('errors on parameters', () => {
            expect(() => puissance(1, -1)).toThrow(Error);
        });
 
        test('zero', () => {
            expect(puissance(anyNumber, 0)).toBe(1);
        });
 
        test('one', () => {
            expect(puissance(anyNumber, 1)).toBe(anyNumber);
        });
    });
    
    test('value === 1', () => {
        expect(puissance(1, anyNumber)).toBe(1);
    });
 
    describe('Classic', () => {
        test('small numbers', () => {
            expect(puissance(2, 3)).toBe(8);
        });
 
        test('square', () => {
            expect(puissance(5, 2)).toBe(25);
        })
 
        test('big numbers', () => {
            expect(puissance(10, 10)).toBe(10000000000);
        });
 
    });
})
