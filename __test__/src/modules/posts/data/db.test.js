const { getFixture } = require('../../../../test.settings')
const fixture = getFixture();

test('create tables does not send any error', async () => {
  try {
    await fixture.createTable();
  } catch (error) {
    expect(error).toBeNull();
  }
});