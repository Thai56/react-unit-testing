import { partlist } from '../../src/practice/toy_problems';
import { expect } from '../test_helper';

describe('partlist', () => {
  const TEST_DATA = ["I", "wish", "I", "hadn't", "come"];
  const TEST_RESULTS = [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]];
  it(`should equal [${TEST_RESULTS}]`, () => {
    expect(partlist(TEST_DATA)).to.eql(TEST_RESULTS);
  });
});
