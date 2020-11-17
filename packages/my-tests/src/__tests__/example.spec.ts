// to run:
// yarn test --spec packages/my-tests/src/__tests__/example.spec.ts
import Login from 'utam-preview/pageObjects/login';
import { PRIVATE_URL, PRIVATE_USERNAME, PRIVATE_PASSWORD} from '../index';
import SalesApplicationHome from 'utam-preview/pageObjects/desktopLayoutContainer';
import { UtamLoader } from 'utam';

async function login(utam: UtamLoader): Promise<void> {
    // navigate to login page
    await browser.url(PRIVATE_URL);
    // load login page
    const loginPage = await utam.load(Login);
    // enter credentials and wait for reload
    await loginPage.login(PRIVATE_USERNAME, PRIVATE_PASSWORD);
}

async function navigateToObjectHome(utam: UtamLoader, itemText: string): Promise<void> {
    // load navigation bar
    const homePage = await utam.load(SalesApplicationHome);
    const appnav = await homePage.getNavigation();
    const appNavBar = await appnav.getAppNavBar();
    // find navigation item by label
    const item = await appNavBar.getNavItem(itemText);
    // click on found item and wait for page to reload
    await item.clickAndWaitForReload();
}

describe('smoke test', () => {

    let utamLoader;

    beforeAll(() => {
        utamLoader = utam;
    });

    it('smoke test', async () => {
        await login(utamLoader);
        await navigateToObjectHome(utamLoader, 'Accounts')
    });
});