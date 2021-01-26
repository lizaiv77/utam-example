import MyComponent from 'my-components/pageObjects/myComponent';

describe('use custom page object in a test', () => {

    let utamLoader;

    beforeAll(() => {
        utamLoader = utam;
    });

    it('smoke test', async () => {
        await utamLoader.load(MyComponent);
    });
});