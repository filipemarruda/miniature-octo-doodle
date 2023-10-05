const { getFixture } = require('../../../../test.settings')
const fixture = getFixture();

test('create tables does not send any error', async () => {
  try {
    await fixture.createTable();
  } catch (error) {
    expect(error).toBeNull();
  }
});


test('insert post do not send any error', async () => {
  try {
    await fixture.insert({
      userId: 1,
      id: 1,
      title: "title",
      body: "body"
    });
  } catch (error) {
    expect(error).toBeNull();
  }
});

test('select all posts do not send any error', async () => {
  try {
    await fixture.selectAll();
  } catch (error) {
    expect(error).toBeNull();
  }
});