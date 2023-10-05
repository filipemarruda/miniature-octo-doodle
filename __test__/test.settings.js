const getFixture = () => {
  const path = require("path")
  const targetFilename = module.parent.filename.split(path.sep).filter(folder => folder !== '__test__').join(path.sep)
  return require(`${targetFilename.replace('.test.js', '.js')}`)
}

module.exports = {
  getFixture
}