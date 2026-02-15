import {Locator, Page} from '@playwright/test'

export class CheckMVStampDutyPage {
    constructor(
        readonly page: Page,
        readonly checkOnlineBtn: Locator = page.locator('a', {hasText: 'Check online'})
    ) {}

    async navigate() {
        await this.page.goto('https://www.service.nsw.gov.au/transaction/check-motor-vehicle-stamp-duty')
    }
    
}