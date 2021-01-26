import { By as _By, UtamBaseRootPageObject as _UtamBaseRootPageObject, ActionableUtamElement as _ActionableUtamElement } from '@utam/core';
import _textarea from 'utam-preview/pageObjects/textarea';

async function _utam_get_lightningTextarea(driver, root) {
    let _element = root;
    const _locator = _By.css(`lightning-textarea`);
    return _element.findElement(_locator);
}

export default class MyComponent extends _UtamBaseRootPageObject {
    constructor(driver, element, locator = _By.css('.my-class')) {
        super(driver, element, locator);
    }
    async __getRoot() {
        const driver = this.driver;
        const root = await this.getRootElement();
        return new _ActionableUtamElement(driver, root);
    }
    
    async getLightningTextarea() {
        const driver = this.driver;
        const root = await this.getRootElement();
        let element = await _utam_get_lightningTextarea(driver, root, );
        element = new _textarea(driver, element);
        return element;
    }
}