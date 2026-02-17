// Generated from: features\@gui\mv-stamp-duty-calculator.feature
import { test } from "../../../steps/gui/fixture-gui.ts";

test.describe('Motor Vehicle Stamp Duty Calculator', () => {

  test.describe('Calculate duty for motor Vehicle (isPassenger=<isPassengerVehicle>,purchase=<purchasePriceInput>|duty=<DutyAmount>)', () => {

    test('Calculate duty for motor Vehicle (isPassenger=Yes,purchase=45000|duty=<DutyAmount>)', { tag: ['@gui'] }, async ({ Given, When, Then, And, onPage }) => { 
      await Given('I open the motor vehicle stamp duty page', null, { onPage }); 
      await When('I click Check online', null, { onPage }); 
      await Then('I should see Motor vehicle reqistration duty calculator', null, { onPage }); 
      await When('I select for passenger vehicle "Yes"', null, { onPage }); 
      await And('I enter purchase price or value "45000"', null, { onPage }); 
      await And('I click Calculate button', null, { onPage }); 
      await Then('I should see in the calculation popup "Is this registration for a passenger vehicle?" "Yes"', null, { onPage }); 
      await Then('I should see in the calculation popup "Purchase price or value" "$45,000.00"', null, { onPage }); 
      await Then('I should see in the calculation popup "Duty payable" "$1,350.00"', null, { onPage }); 
    });

    test('Calculate duty for motor Vehicle (isPassenger=No,purchase=25000|duty=<DutyAmount>)', { tag: ['@gui'] }, async ({ Given, When, Then, And, onPage }) => { 
      await Given('I open the motor vehicle stamp duty page', null, { onPage }); 
      await When('I click Check online', null, { onPage }); 
      await Then('I should see Motor vehicle reqistration duty calculator', null, { onPage }); 
      await When('I select for passenger vehicle "No"', null, { onPage }); 
      await And('I enter purchase price or value "25000"', null, { onPage }); 
      await And('I click Calculate button', null, { onPage }); 
      await Then('I should see in the calculation popup "Is this registration for a passenger vehicle?" "No"', null, { onPage }); 
      await Then('I should see in the calculation popup "Purchase price or value" "$25,000.00"', null, { onPage }); 
      await Then('I should see in the calculation popup "Duty payable" "$750.00"', null, { onPage }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\@gui\\mv-stamp-duty-calculator.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":22,"tags":["@gui"],"steps":[{"pwStepLine":9,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I open the motor vehicle stamp duty page","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I click Check online","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see Motor vehicle reqistration duty calculator","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I select for passenger vehicle \"Yes\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Yes\"","children":[{"start":32,"value":"Yes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And I enter purchase price or value \"45000\"","stepMatchArguments":[{"group":{"start":32,"value":"\"45000\"","children":[{"start":33,"value":"45000","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And I click Calculate button","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should see in the calculation popup \"Is this registration for a passenger vehicle?\" \"Yes\"","stepMatchArguments":[{"group":{"start":38,"value":"\"Is this registration for a passenger vehicle?\"","children":[{"start":39,"value":"Is this registration for a passenger vehicle?","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":86,"value":"\"Yes\"","children":[{"start":87,"value":"Yes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then I should see in the calculation popup \"Purchase price or value\" \"$45,000.00\"","stepMatchArguments":[{"group":{"start":38,"value":"\"Purchase price or value\"","children":[{"start":39,"value":"Purchase price or value","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":64,"value":"\"$45,000.00\"","children":[{"start":65,"value":"$45,000.00","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then I should see in the calculation popup \"Duty payable\" \"$1,350.00\"","stepMatchArguments":[{"group":{"start":38,"value":"\"Duty payable\"","children":[{"start":39,"value":"Duty payable","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":53,"value":"\"$1,350.00\"","children":[{"start":54,"value":"$1,350.00","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":23,"tags":["@gui"],"steps":[{"pwStepLine":21,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I open the motor vehicle stamp duty page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I click Check online","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see Motor vehicle reqistration duty calculator","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I select for passenger vehicle \"No\"","stepMatchArguments":[{"group":{"start":31,"value":"\"No\"","children":[{"start":32,"value":"No","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And I enter purchase price or value \"25000\"","stepMatchArguments":[{"group":{"start":32,"value":"\"25000\"","children":[{"start":33,"value":"25000","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And I click Calculate button","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should see in the calculation popup \"Is this registration for a passenger vehicle?\" \"No\"","stepMatchArguments":[{"group":{"start":38,"value":"\"Is this registration for a passenger vehicle?\"","children":[{"start":39,"value":"Is this registration for a passenger vehicle?","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":86,"value":"\"No\"","children":[{"start":87,"value":"No","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then I should see in the calculation popup \"Purchase price or value\" \"$25,000.00\"","stepMatchArguments":[{"group":{"start":38,"value":"\"Purchase price or value\"","children":[{"start":39,"value":"Purchase price or value","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":64,"value":"\"$25,000.00\"","children":[{"start":65,"value":"$25,000.00","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then I should see in the calculation popup \"Duty payable\" \"$750.00\"","stepMatchArguments":[{"group":{"start":38,"value":"\"Duty payable\"","children":[{"start":39,"value":"Duty payable","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":53,"value":"\"$750.00\"","children":[{"start":54,"value":"$750.00","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end