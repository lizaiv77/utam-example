import { By as _By, ShadowRoot as _ShadowRoot, UtamBasePageObject as _UtamBasePageObject, Driver as _Driver, Element as _Element, Locator as _Locator } from '@utam/core';
import _appNavBar from '@utam/tmp-pageobjects/pageObjects/appNavBar';
export default class Appnav extends _UtamBasePageObject {
    constructor(driver: _Driver, element?: _Element, locator?: _Locator);
    getAppNavBar(): Promise<_appNavBar>;
}