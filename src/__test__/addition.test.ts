import { additionPetitsNombres} from '../modules/addition';
import { expect, describe, it } from 'vitest';

describe('additionPetitsNombres', () => {
    it('should return 2 when 1 + 1', () => {
        expect(additionPetitsNombres(1, 1)).toBe(2);
    });

    it('should throw an error when a is negative', () => {
        expect(() => additionPetitsNombres(-1, 1)).toThrow('Les nombres doivent être positifs');
    });

    it('should throw an error when b is negative', () => {
        expect(() => additionPetitsNombres(1, -1)).toThrow('Les nombres doivent être positifs');
    });

    it('should throw an error when a is greater than 9', () => {
        expect(() => additionPetitsNombres(10, 1)).toThrow('Les nombres doivent être inférieurs à 10');
    });

    it('should throw an error when b is greater than 9', () => {
        expect(() => additionPetitsNombres(1, 10)).toThrow('Les nombres doivent être inférieurs à 10');
    });
});

// describe('addition', () => {
//     it('should return 3 when 1+2 = 3', () => {
//         expect(() => additions(1,2)).toBe(3);
//     })
// })
