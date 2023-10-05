const { getFixture } = require('../../../test.settings')
const fixture = getFixture();

test('get all posts does not send any error', async () => {
  try {
    await fixture.getAll();
  } catch (error) {
    expect(error).toBeNull();
  }
});

test('save all posts does not send any error', async () => {
  try {
    await fixture.saveAll([{
      userId: 1,
      id: 1,
      title: "title",
      body: "body"
    }]);
  } catch (error) {
    expect(error).toBeNull();
  }
});