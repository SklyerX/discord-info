const axios = require('axios');
const chalk = require('chalk');

async function userData({ token: token, id: id }) {
    config = {
        method: 'get',
        url: "https://discord.com/api/v10/users/" + id,
        headers: {
            'Authorization': 'Bot ' + token,
        }
    }
    axios(config).then(data => {
        const req = data.data;

        console.log(req);
    });
}

async function userDataPretty({ token: token, id: id }) {
    config = {
        method: 'get',
        url: "https://discord.com/api/v10/users/" + id,
        headers: {
            'Authorization': 'Bot ' + token,
        }
    }
    axios(config).then(data => {
        const req = data.data;

        console.log(chalk.green(`
        id: ${req.id}\n
        username: ${req.username}\n
        discriminator: ${req.discriminator}\n
        avatar: ${req.avatar}\n
        avatar_decoration: ${req.avatar_decoration}\n
        public_flags: ${req.public_flags}\n
        banner: ${req.banner}\n
        banner_color: ${req.banner_color}\n
        accent_color: ${req.accent_color}\n
        `));
    });
}

module.exports = { userData, userDataPretty };