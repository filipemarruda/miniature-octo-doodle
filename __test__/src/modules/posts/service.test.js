const { getFixture } = require('../../../test.settings')
const fixture = getFixture();

test('find all posts does not send any error', async () => {
  try {
    await fixture.findAll();
  } catch (error) {
    expect(error).toBeNull();
  }
});