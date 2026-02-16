import { APIResponse } from '@playwright/test';
import { test as base, createBdd } from 'playwright-bdd';

type Ctx = {
  resp: APIResponse
};

export const test = base.extend<{ ctx: Ctx }>({
  ctx: async ({}, use) => {
    const ctx = {} as Ctx;
    await use(ctx);
  },
});

export const { Given, When, Then } = createBdd(test);