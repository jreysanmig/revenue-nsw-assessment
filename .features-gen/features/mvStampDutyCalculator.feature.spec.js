// Generated from: features\mvStampDutyCalculator.feature
import { test } from "playwright-bdd";

test.describe('Motor Vehicle Stamp Duty Calculator', () => {

  test.describe('Calculate duty for motor Vehicle (isPassenger=<isPassengerVehicle>,purchase=<purchasePriceInput>|duty=<DutyAmount>)', () => {

    test('Calculate duty for motor Vehicle (isPassenger=Yes,purchase=45000|duty=$1,350.00)', async ({ Given, When, Then, page }) => { 
      await Given('I open the motor vehicle stamp duty page', null, { page }); 
      await When('I click Check online', null, { page }); 
      await Then('I should see Motor vehicle reqistration duty calculator', null, { page }); 
      await When('I calculate with the following details', {"dataTable":{"rows":[{"cells":[{"value":"Is this registration for a passenger vehicle?"},{"value":"Yes"}]},{"cells":[{"value":"Purchase price or value"},{"value":"45000"}]}]}}, { page }); 
      await Then('I should see the following details in the calculation popup', {"dataTable":{"rows":[{"cells":[{"value":"Is this registration for a passenger vehicle?"},{"value":"Yes"}]},{"cells":[{"value":"Purchase price or value"},{"value":"$45,000.00"}]},{"cells":[{"value":"Duty payable"},{"value":"$1,350.00"}]}]}}, { page }); 
    });

    test('Calculate duty for motor Vehicle (isPassenger=No,purchase=25000|duty=$750.00)', async ({ Given, When, Then, page }) => { 
      await Given('I open the motor vehicle stamp duty page', null, { page }); 
      await When('I click Check online', null, { page }); 
      await Then('I should see Motor vehicle reqistration duty calculator', null, { page }); 
      await When('I calculate with the following details', {"dataTable":{"rows":[{"cells":[{"value":"Is this registration for a passenger vehicle?"},{"value":"No"}]},{"cells":[{"value":"Purchase price or value"},{"value":"25000"}]}]}}, { page }); 
      await Then('I should see the following details in the calculation popup', {"dataTable":{"rows":[{"cells":[{"value":"Is this registration for a passenger vehicle?"},{"value":"No"}]},{"cells":[{"value":"Purchase price or value"},{"value":"$25,000.00"}]},{"cells":[{"value":"Duty payable"},{"value":"$750.00"}]}]}}, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\mvStampDutyCalculator.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I open the motor vehicle stamp duty page","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I click Check online","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see Motor vehicle reqistration duty calculator","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I calculate with the following details","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should see the following details in the calculation popup","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":17,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I open the motor vehicle stamp duty page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I click Check online","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see Motor vehicle reqistration duty calculator","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I calculate with the following details","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should see the following details in the calculation popup","stepMatchArguments":[]}]},
]; // bdd-data-end