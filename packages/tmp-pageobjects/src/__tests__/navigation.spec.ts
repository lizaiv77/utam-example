import Login from '@utam/tmp-pageobjects/pageObjects/login';
import Appnav from '@utam/tmp-pageobjects/pageObjects/appnav';
import AppNavBarItemRoot from '@utam/tmp-pageobjects/pageObjects/appNavBarItemRoot';

describe('login, find app nav bar item by text and click', () => {
    beforeAll(() => {
        // temporary, should be set via service config
        browser.setTimeout({ implicit: 30000 });
    });

    it('app navigation', async () => {
        await browser.url('/');
        const loginPage = await utam.load(Login);
        // login
        await loginPage.login('test@kk.org', 'password123456');

        // navigation
        const appNav = await utam.load(Appnav);

        // check app nav root methods
        const appNavRoot = await appNav.getRoot();
        expect(await appNavRoot.isPresent()).toBe(true);
        expect(await appNavRoot.isDisplayed()).toBe(true);

        const appNavBar = await appNav.getAppNavBar();
        await appNavBar.load();

        // check app nav bar root methods
        const appNavBarRoot = await appNavBar.getRoot();
        // javascript error: Cannot read property 'defaultView' of undefined
        // expect(await appNavBarRoot.isPresent()).toBe(true);
        expect(await appNavBarRoot.isDisplayed()).toBe(true);

        // find Accounts item
        const appNavBarItems = (await appNavBar.getNavItems()) as AppNavBarItemRoot[];
        const itemsCount = appNavBarItems.length;
        console.log('app nav bar items count: ' + itemsCount);
        for (const item of appNavBarItems) {
            const itemLink = await item.getItemLink();
            const itemText = await itemLink.getTitle();
            console.log('item title: ' + itemText);
            if (itemText == 'Accounts') {
                console.log('click Accounts');
                await itemLink.focus();
                // click fails with webdriver protocol, works with devtools
                // javascript error: Cannot read property 'defaultView' of undefined
                // await itemLink.click();
                break;
            }
        }
        console.log('THE END');
    });
});
