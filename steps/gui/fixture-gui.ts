import { test as base, createBdd } from 'playwright-bdd'
import { CheckMVStampDutyPage } from '../../pages/CheckMVStampDutyPage'
import { MVRegDutyCalculatorPage } from '../../pages/MVRegDutyCalculatorPage'

type Fixture = {
    onPage: {
        checkMVStampDutyPage: CheckMVStampDutyPage
        mvRegDutyCalculatorPage: MVRegDutyCalculatorPage
    }
}



export const test = base.extend<Fixture>({
    onPage: async ({ page }, use) => {
        const onPage = {
            checkMVStampDutyPage: new CheckMVStampDutyPage(page),
            mvRegDutyCalculatorPage: new MVRegDutyCalculatorPage(page)
        }
        await use(onPage)
    }
})

export const { Given, When, Then } = createBdd(test)