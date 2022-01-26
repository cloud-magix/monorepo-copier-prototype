import { double } from 'cloud-magix-lib-b';

describe('should double number', () => {
  test('it should double 10', () => {
    const actual = double(10);
    expect(actual).toEqual(20);
  });
});
