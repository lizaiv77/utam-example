import { By as _By, ShadowRoot as _ShadowRoot, UtamBasePageObject as _UtamBasePageObject, ClickableUtamElement as _ClickableUtamElement, Driver as _Driver, Element as _Element, Locator as _Locator } from '@utam/core';
export default class AppNavBarItemRoot extends _UtamBasePageObject {
    constructor(driver: _Driver, element?: _Element, locator?: _Locator);
    getItemText(): Promise<void>;
    getItemLink(): Promise<_ClickableUtamElement>;
}