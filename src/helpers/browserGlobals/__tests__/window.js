import { spy } from 'sinon';

import { mockWindow } from '../window';

describe('window', () => {
  it("should have fields from browser's window object", () => {
    const expectedFields = ['addEventListener', 'setTimeout'];
    expectedFields.forEach((field) => {
      expect(mockWindow[field]).toBeTruthy();
    });
  });

  it('should not invoke the callback passed to the setTimeout mock', () => {
    const callback = spy();
    mockWindow.setTimeout(callback, 0);
    expect(callback.callCount).toBe(0);
  });
});
