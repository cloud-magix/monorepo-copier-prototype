import { multiply } from 'cloud-magix-lib-a';
describe('it should multiply numbers', () => {
  test('it should multiply a * b', () => {
    const actual = multiply(2, 10);
    expect(actual).toEqual(20);
  });
});
