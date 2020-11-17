import { By as _By, ShadowRoot as _ShadowRoot, UtamBasePageObject as _UtamBasePageObject, Driver as _Driver, Element as _Element, Locator as _Locator } from '@utam/core';
import _appNavBarItemRoot from '@utam/tmp-pageobjects/pageObjects/appNavBarItemRoot';
export default class AppNavBar extends _UtamBasePageObject {
    constructor(driver: _Driver, element?: _Element, locator?: _Locator);
    getNavItems(): Promise<_appNavBarItemRoot[]>;
}