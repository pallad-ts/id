import {ulid} from 'ulid';

export function create() {
    return ulid();
}

export const createId = create;
