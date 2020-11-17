import { By as _By, UtamBasePageObject as _UtamBasePageObject, EditableUtamElement as _EditableUtamElement, ClickableUtamElement as _ClickableUtamElement, Driver as _Driver, Element as _Element, Locator as _Locator } from '@utam/core';
export default class Login extends _UtamBasePageObject {
    constructor(driver: _Driver, element?: _Element, locator?: _Locator);
    login(userNameStr: string, passwordStr: string): Promise<void>;
    getUserName(): Promise<_EditableUtamElement>;
    getPassword(): Promise<_EditableUtamElement>;
    getSubmitBtn(): Promise<_ClickableUtamElement>;
}