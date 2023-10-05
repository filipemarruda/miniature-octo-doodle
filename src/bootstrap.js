var fs = require('fs');
const MODULES_ROOT_FOLDER = `${__dirname}/modules`;
const getModuleFoldersName = (moduleName) => `${MODULES_ROOT_FOLDER}/${moduleName}`;
const getModulesRoutesFilesName = (moduleName) => `${getModuleFoldersName(moduleName)}/routes`;

const getModuleCandidates = () => {
  return fs.readdirSync(MODULES_ROOT_FOLDER);
}

const isAModuleDirectory = (moduleName) => {
  const moduleFolder = getModuleFoldersName(moduleName);
  const dirStat = fs.lstatSync(`${moduleFolder}`);
  return dirStat.isDirectory();
}

const hasARoutesFile = (moduleName) => {
  const moduleRoutes = getModulesRoutesFilesName(moduleName);
  const moduleRoutesStat = fs.lstatSync(`${moduleRoutes}.js`);
  return moduleRoutesStat.isFile();
}

const requireModule = (moduleName) => {
  return require(getModulesRoutesFilesName(moduleName));
}

const getModuleRoutes = (moduleName) => {
  if (isAModuleDirectory(moduleName) && hasARoutesFile(moduleName)) {
    return requireModule(moduleName)
  }
  throw new Error(`skipping module ${moduleName}`);
}

const registerModules = (app) => {
  getModuleCandidates().forEach(function(moduleName) {
    try {
      console.log(`registering module ${moduleName} over the path: /api/${moduleName}`);
      app.use(`/api/${moduleName}`, getModuleRoutes(moduleName));
    } catch (err) {
      console.log(err);
    }
  });
}

module.exports = {
  registerModules
}