import { By as _By, UtamBaseRootPageObject as _UtamBaseRootPageObject, ActionableUtamElement as _ActionableUtamElement } from '@utam/core';



export default class Component extends _UtamBaseRootPageObject {
    constructor(driver, element, locator = _By.css('body')) {
        super(driver, element, locator);
    }
    async __getRoot() {
        const driver = this.driver;
        const root = await this.getRootElement();
        return new _ActionableUtamElement(driver, root);
    }
}