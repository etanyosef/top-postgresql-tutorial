const db = require('../db/queries');

exports.getUsernames = async (req, res) => {
    const usernames = await db.getAllUsernames();
    console.log('Usernames: ', usernames);
    res.render('index', {
        title: 'Users',
        usernames: usernames
    });
}

exports.createUsernameGet = (req, res) => {
    res.render('new', {
        title: 'Add new Username',
    });
}

exports.createUsernamePost = async (req, res) => {
    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect('/');
}

exports.deleteUsernamePost = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    await db.deleteUsername(id);
    res.redirect('/');
}

exports.searchUsernamesGet = async (req, res) => {
    const { username } = req.query;
    const result = await db.searchUsernames(username);
    console.log(result)
    res.render('search', {
        title: 'Search results',
        result: result,
    });
}