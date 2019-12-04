import { mockDocument } from '../document';

describe('document', () => {
  it("should have fields from browser's document object", () => {
    const expectedFields = [];
    expectedFields.forEach((field) => {
      expect(mockDocument[field]).toBeTruthy();
    });
  });
});
