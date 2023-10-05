const { getFixture } = require('../../../../test.settings')
const fixture = getFixture();

test('get all posts does not send any error', async () => {
  try {
    await fixture.getAll();
  } catch (error) {
    expect(error).toBeNull();
  }
});