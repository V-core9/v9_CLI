const simpleGit = require('simple-git');
const git = simpleGit();

(async () => {
  console.log(await git.status({baseDir: process.cwd(),binary: 'git',maxConcurrentProcesses: 6}));
})();
