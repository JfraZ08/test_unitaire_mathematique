import { describe, expect, test } from "vitest";
import { soustraction } from "../modules/soustraction";

describe('Soustraction', () => {
    test('result positive', () => {
        expect(soustraction(3,2)).toBe(1);
    })
    test('negative result', () => {
        expect(soustraction(2,3)).toBe(-1)
    })
    test('big numbers', () => {
        expect(soustraction(20,10)).toBe(10)
    })
})

describe('same sign', () => {
    test('positives', () => {
        expect(soustraction(3,2)).toBe(1)
    })
    test('negatives', () => {
        expect(soustraction(-3,-2)).toBe(-(3-2))
    })
})

describe('different sign', () => {
    test('first positive', () => {
        expect(soustraction(3, -2)).toBe(3+2)
    })
    test('first negative', () => {
        expect(soustraction(-3,2)).toBe(-(3 + 2))
    })
})

describe('zero', () => {
    test('start with zero', () => {
        expect(soustraction(0,3)).toBe(-3)
    })
    test('end with zero', () => {
        expect(soustraction(3,0)).toBe(3)
    })
    test('zero only', () => {
        expect(soustraction(0,0)).toBe(0)
    })
})

describe('retenues', () => {
    test('with one retenue', () => {
        expect(soustraction(10,1)).toBe(9)
    })
    test('with multiple retenue', () => {
        expect(soustraction(100,1)).toBe(99)
    })
})