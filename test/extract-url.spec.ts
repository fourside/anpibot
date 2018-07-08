import {assert} from 'chai';

import extractUrl from '../src/extract-url';

describe('extract-url', () => {
  it('extracts the first url', () => {
    const body = `
subject
@user
here to access:
http://localhost/?key=abc
keep watching.
contact us: http://localhost/?key=mailto
`;
    const result = extractUrl(body);
    assert.equal('http://localhost/?key=abc', result);
  });


  it('extracts not', () => {
    const body = `
subject
@user
here to access:
keep watching.`;
    const result = extractUrl(body);
    assert.equal('', result);
  });
});

