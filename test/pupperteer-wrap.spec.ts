import {expect} from 'chai';

import puppeteerWrap from '../src/puppeteer-wrap';

describe('puppeteer-wrap', () => {
  it('not throws error.', () => {
    const url = 'http:/localhost:8080';
    expect(() => puppeteerWrap(url).then()).not.throw();
  });
});

