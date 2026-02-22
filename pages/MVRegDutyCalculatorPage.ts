import {Locator, Page} from '@playwright/test'

export class MVRegDutyCalculatorPage {   
    constructor(
        readonly page:Page,
        readonly header: Locator = page.getByRole('heading', {name: 'Motor vehicle registration duty calculator'}),
        readonly isPassengerVehicle = (option: string) => page.locator('#passenger label', {hasText: option}),
        readonly purchasePrice: Locator = page.getByLabel('Purchase price or value '),
        readonly calculateBtn: Locator = page.getByRole('button', {name: 'Calculate'}),
        readonly calculationPopup: Locator = page.locator('.modal-content', {hasText: 'Calculation'}),
        readonly calculationPopupField = (fieldName: string) => this.calculationPopup.locator('tbody tr', {hasText: fieldName}).locator('td').nth(1)
    ) {}    
}