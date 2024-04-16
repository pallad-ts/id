import {ulid} from 'ulid';
import {z} from 'zod';

export function create() {
    return ulid();
}

export const createId = create;

export const IDSchema = z.string().ulid();

export type ID = string;
