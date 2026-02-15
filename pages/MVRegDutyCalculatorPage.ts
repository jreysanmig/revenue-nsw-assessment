import {Locator, Page} from '@playwright/test'

export class MVRegDutyCalculatorPage {
    page: Page
    get header() { return this.page.getByRole('heading', {name: 'Motor vehicle registration duty calculator'}) }
    isPassengerVehicle(option: string) {
        return this.page.locator('#passenger label', {hasText: option})
    }
    get purchasePrice() { return this.page.getByLabel('Purchase price or value ') }
    get calculateBtn() { return this.page.getByRole('button', {name: 'Calculate'}) }  
    get calculationPopup() { return this.page.locator('.modal-content', {hasText: 'Calculation'}) }
    calculationPopupField(fieldName: string) { 
        return this.calculationPopup.locator('tbody tr', {hasText: fieldName})
    }
    
    constructor(page: Page) {
        this.page = page
    }

    async navigate() {
        await this.page.goto('https://www.service.nsw.gov.au/transaction/check-motor-vehicle-stamp-duty')
    }

    
}