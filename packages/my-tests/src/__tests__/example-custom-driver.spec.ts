// to run:
// 1. start chromedriver and create instance of driver referenced from test 
// 2. yarn test --spec packages/my-tests/src/__tests__/example-custom-driver.spec.ts
import Login from 'utam-preview/pageObjects/login';
import { createUtamLoader } from 'wdio-utam-service';
import { PRIVATE_URL, PRIVATE_USERNAME, PRIVATE_PASSWORD} from '../index';

describe('login test example', () => {

    let utamLoader;

    beforeAll(() => {
        // driver Objects is a BrowserObject created inside wdio by the runner
        // we pass it to utam loader to instantiate Page Objects
        utamLoader = createUtamLoader(driver);
    });
    
    it('login', async () => {
        await driver.url(PRIVATE_URL);
        const loginPage = await utamLoader.load(Login);
        await loginPage.login(PRIVATE_USERNAME, PRIVATE_PASSWORD);
    });

});   