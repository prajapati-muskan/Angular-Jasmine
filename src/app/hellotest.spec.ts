
describe('hellotest', () => {
    let expected = '';
    let notExpected = '';

    beforeEach(() => {
        expected = "hellotest";
        notExpected = "not hello test";
    });
    afterEach(() => {
        expected = '';
        notExpected = '';
    });
    it('should have hellotest as hellotest', () => expect('hellotest').toBe(expected));
    it('should have hellotest not as hellotest', () => expect('hellotest').not.toBe(notExpected));
})