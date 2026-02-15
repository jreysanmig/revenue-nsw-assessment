import {Locator, Page} from '@playwright/test'

export class CheckMVStampDutyPage {
    page: Page
    get checkOnlineBtn() { return this.page.locator('a', {hasText: 'Check online'})}
    
    constructor(page: Page) {
        this.page = page
    }

    async navigate() {
        await this.page.goto('https://www.service.nsw.gov.au/transaction/check-motor-vehicle-stamp-duty')
    }

    
}