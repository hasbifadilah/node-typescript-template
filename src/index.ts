import App from './app';
import DB from './infras/database';
import UserFinderAction from './core/actions/user/UserFinderAction';
import UserRepository from './infras/repositories/user/UserRepository';

/**
 * Function to wrap all script that running on startup
 */
async function runScriptOnStartUp(): Promise<void> {
  console.log('Run script on startup.');

  const repo = new UserRepository();
  const userFinder = new UserFinderAction(repo);

  const user = await userFinder.getById(1);

  console.log('Check this -----------------------------------------------------------------------');
  console.log('Check this ~ file: index.ts ~ line 16 ~ runScriptOnStartUp ~ user', user);
  console.log('Check this ~ file: index.ts ~ line 16 ~ runScriptOnStartUp ~ user', user.name);
  console.log('Check this -----------------------------------------------------------------------');
}

(async () => {
  const app = new App();
  app.initialize();

  await DB.initialize();
  await runScriptOnStartUp();
})();
