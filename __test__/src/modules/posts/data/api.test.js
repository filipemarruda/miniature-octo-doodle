const { getFixture } = require('../../../../test.settings')
const fixture = getFixture();

test('fetch users does not throw errors', async () => {
  try {
    await fixture.fetchUsers();
  } catch (error) {
    expect(error).toBeNull();
  }
});

test('fetch posts does not throw errors', async () => {
  try {
    await fixture.fetchPosts();
  } catch (error) {
    expect(error).toBeNull();
  }
});