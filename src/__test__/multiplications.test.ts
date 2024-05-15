import { describe, expect, test } from "vitest";
import { multiplication} from '../modules/multiplications'
describe("Multiplication", () => {
    describe("Classic", () => {
        test("small numbers", () => {
            expect(multiplication(2, 3)).toBe(6);
        });
 
        test("big numbers", () => {
            expect(multiplication(10, 10)).toBe(100);
        });
    });
 
    describe("same sign", () => {
        test("positives", () => {
            expect(multiplication(2, 5)).toBe(10);
        });
 
        test("negatives", () => {
            expect(multiplication(-2, -5)).toBe(10);
        });
    });
 
    describe("different sign", () => {
        test("first number positive", () => {
            expect(multiplication(2, -3)).toBe(-6);
        });
 
        test("first number positive", () => {
            expect(multiplication(3, -2)).toBe(-6);
        });
 
        test("first number negatives", () => {
            expect(multiplication(-2, 3)).toBe(-6);
        });
 
        test("first number negatives", () => {
            expect(multiplication(-3, 2)).toBe(-6);
        });
    });
 
    describe("cas particulier", () => {
        const nombre = 99999;
 
        describe("zero", () => {
            test("start with zero", () => {
                expect(multiplication(0, nombre)).toBe(0);
            });
 
            test("end with zero", () => {
                expect(multiplication(nombre, 0)).toBe(0);
            });
 
            test("zero only", () => {
                expect(multiplication(0, 0)).toBe(0);
            });
 
        });
 
        describe("one", () => {
            test("start with one", () => {
                expect(multiplication(1, nombre)).toBe(nombre);
            });
 
            test("end with one", () => {
                expect(multiplication(nombre, 1)).toBe(nombre);
            });
 
            test("one only", () => {
                expect(multiplication(1, 1)).toBe(1);
            });
        });
    });
 
});

