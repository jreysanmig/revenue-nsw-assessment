import { expect } from '@playwright/test'
import { createBdd, DataTable } from 'playwright-bdd'
const { Given, When, Then } = createBdd()

// PAGES
import { CheckMVStampDutyPage } from '../pages/CheckMVStampDutyPage'
import { MVRegDutyCalculatorPage } from '../pages/MVRegDutyCalculatorPage'

Given('I open the motor vehicle stamp duty page', async({page}) => {
    const checkMVStampDutyPage = new CheckMVStampDutyPage(page)
    await checkMVStampDutyPage.navigate()
})

When('I click Check online', async({page}) => {
    const checkMVStampDutyPage = new CheckMVStampDutyPage(page)
    await checkMVStampDutyPage.checkOnlineBtn.click()
})

Then('I should see Motor vehicle reqistration duty calculator', async({page}) => {
    const mvDutyCalculatorPage = new MVRegDutyCalculatorPage(page)
    await expect(mvDutyCalculatorPage.header).toBeVisible()
})

When('I calculate with the following details', async({page}, data: DataTable) => {
    const mvDutyCalculatorPage = new MVRegDutyCalculatorPage(page)
    await mvDutyCalculatorPage.isPassengerVehicle(data.rowsHash()['Is this registration for a passenger vehicle?']).click({force: true})
    await mvDutyCalculatorPage.purchasePrice.fill(data.rowsHash()['Purchase price or value'])
    await mvDutyCalculatorPage.calculateBtn.click()
})

When('I select Yes for passenger vehicle', async({page}) => {
    const mvDutyCalculatorPage = new MVRegDutyCalculatorPage(page)
    await mvDutyCalculatorPage.isPassengerVehicle('Yes').click()
})

When('I enter 45000 for purchase price or value', async({page}) => {
    const mvDutyCalculatorPage = new MVRegDutyCalculatorPage(page)
    await mvDutyCalculatorPage.purchasePrice.fill('45000')
})

When('I click Calculate button', async({page}) => {
    const mvDutyCalculatorPage = new MVRegDutyCalculatorPage(page)
    await mvDutyCalculatorPage.calculateBtn.click()
})

Then('I should see the following details in the calculation popup', async({page}, data: DataTable) => {
    const mvDutyCalculatorPage = new MVRegDutyCalculatorPage(page)
    await expect(mvDutyCalculatorPage.calculationPopup).toBeVisible()
    for (const [field, value] of Object.entries(data.rowsHash())) {
        await expect(mvDutyCalculatorPage.calculationPopupField(field)).toContainText(value)
    }
})
