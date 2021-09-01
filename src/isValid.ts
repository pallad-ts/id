import {ID} from './type';

const REGEXP = /^[0123456789ABCDEFGHJKMNPQRSTVWXYZ]{26}$/;

export function isValid(input: any): input is ID {
    return typeof input === 'string' && REGEXP.test(input);
}
