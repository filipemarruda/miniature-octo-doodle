const { getFixture } = require('../../../test.settings')
const fixture = getFixture();

test('find all posts does not send any error', async () => {
  try {
    const req = {}, res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await fixture.getAllPosts(req, res);
    expect(res.status.mock.calls.length).toBe(1);
    expect(res.status.mock.calls[0][0]).toBe(200);
  } catch (error) {
    expect(error).toBeNull();
  }
});