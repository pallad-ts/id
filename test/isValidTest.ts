import {create} from '@src/create';
import {isValid} from '@src/isValid';

describe('isValid', () => {
    it.each([
        create(),
        '01ARZ3NDEKTSV4RRFFQ69G5FAV'
    ])('valid: %s', id => {
        expect(isValid(id)).toBe(true);
    });

    it.each([
        '123e4567-e89b-12d3-a456-426614174000',
        1,
        1000,
        '  01ARZ3NDEKTSV4RRFFQ69G5FAV'
    ])('invalid: "%s"', id => {
        expect(isValid(id)).toBe(false);
    });
});
