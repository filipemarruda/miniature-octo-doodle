const { getFixture } = require('../../../test.settings')
const fixture = getFixture();


test('router returns a router function', async () => {
  try {
    expect(fixture).toBeInstanceOf(Function)
    expect(fixture.name).toBe('router')
  } catch (error) {
    expect(error).toBeNull();
  }
});