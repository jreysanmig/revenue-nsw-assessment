import { expect } from "@playwright/test";
import { Given, Then } from "./fixture-api";

Given('I call the Open Library author API', async ({request, ctx}) => {
  ctx.resp = await request.get('https://openlibrary.org/authors/OL1A.json');
});

Then('the response status should be {int}', async ({ctx}, expStatusCode: number) => {
    expect(ctx.resp.status()).toBe(expStatusCode);
});

Then('the personal_name should be {string}', async ({ctx}, expPersonalName: string) => {
    const respBody = await ctx.resp.json();
    expect(respBody.personal_name).toBe(expPersonalName);
})

Then('the alternate_names should include {string}', async ({ctx}, expAlternateName: string) => {
    const respBody = await ctx.resp.json();
    expect(respBody.alternate_names).toContain(expAlternateName);
});