import {logger} from "../main/config";

describe('testing logger', () => {
    test('logger can be import', () => {
        expect(logger).not.toBe(null);
    });
});
