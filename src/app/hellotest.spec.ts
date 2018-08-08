describe('hellotest', () => {
    let expected = '';
    let notexpected = '';
    beforeEach(() => {
        expected = 'hellotest';
        notexpected = 'hellotest1';
    });
    it('checks if hellotest is hellotest', () => expect('hellotest').toBe(expected));
    it('checks if hellotest is not hellotest', () => expect('hellotest').not.toBe(notexpected));
});