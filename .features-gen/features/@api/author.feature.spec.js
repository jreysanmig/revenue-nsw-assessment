// Generated from: features\@api\author.feature
import { test } from "../../../steps/api/fixture-api.ts";

test.describe('Open Library Author API', () => {

  test('Verify author personal name and alternate names', { tag: ['@api'] }, async ({ Given, Then, And, ctx, request }) => { 
    await Given('I call the Open Library author API', null, { ctx, request }); 
    await Then('the response status should be 200', null, { ctx }); 
    await And('the personal_name should be "Sachi Rautroy"', null, { ctx }); 
    await And('the alternate_names should include "Yugashrashta Sachi Routray"', null, { ctx }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\@api\\author.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":["@api"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I call the Open Library author API","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then the response status should be 200","stepMatchArguments":[{"group":{"start":30,"value":"200","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"And the personal_name should be \"Sachi Rautroy\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Sachi Rautroy\"","children":[{"start":29,"value":"Sachi Rautroy","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"And the alternate_names should include \"Yugashrashta Sachi Routray\"","stepMatchArguments":[{"group":{"start":35,"value":"\"Yugashrashta Sachi Routray\"","children":[{"start":36,"value":"Yugashrashta Sachi Routray","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end