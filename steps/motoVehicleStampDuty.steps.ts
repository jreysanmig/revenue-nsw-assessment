import { expect } from '@playwright/test'
import { DataTable } from 'playwright-bdd'
import { Given, When, Then } from './fixtures'

Given('I open the motor vehicle stamp duty page', async({onPage}) => {
    await onPage.checkMVStampDutyPage.navigate()
})

When('I click Check online', async({onPage}) => {
    await onPage.checkMVStampDutyPage.checkOnlineBtn.click()
})

Then('I should see Motor vehicle reqistration duty calculator', async({onPage}) => {
    await expect(onPage.mvRegDutyCalculatorPage.header).toBeVisible()
})

When('I calculate with the following details', async({onPage}, data: DataTable) => {
    await onPage.mvRegDutyCalculatorPage.isPassengerVehicle(data.rowsHash()['Is this registration for a passenger vehicle?']).click({force: true})
    await onPage.mvRegDutyCalculatorPage.purchasePrice.fill(data.rowsHash()['Purchase price or value'])
    await onPage.mvRegDutyCalculatorPage.calculateBtn.click()
})

When('I select {string} for passenger vehicle', async({onPage}, value: string) => {
    await onPage.mvRegDutyCalculatorPage.isPassengerVehicle(value).click()
})

When('I enter {string} for purchase price or value', async({onPage}, value: string) => {
    await onPage.mvRegDutyCalculatorPage.purchasePrice.fill(value)
})

When('I click Calculate button', async({onPage}) => {
    await onPage.mvRegDutyCalculatorPage.calculateBtn.click()
})

Then('I should see the following details in the calculation popup', async({onPage}, data: DataTable) => {
    await expect(onPage.mvRegDutyCalculatorPage.calculationPopup).toBeVisible()
    for (const [field, value] of Object.entries(data.rowsHash())) {
        await expect(onPage.mvRegDutyCalculatorPage.calculationPopupField(field)).toContainText(value)
    }
})
