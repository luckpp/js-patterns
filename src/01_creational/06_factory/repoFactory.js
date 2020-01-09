let RepoFactory = function() {
    let repos = this;
    let reposList = [
        { name: 'application', path: './repos/applicationRepo' },
        { name: 'device', path: './repos/deviceRepo' },
        { name: 'user', path: './repos/userRepo' },
    ];

    reposList.forEach(item => {
        repos[item.name] = require(item.path);
    });
}

module.exports = new RepoFactory();