const axios = require("axios");
const chalk = require("chalk");
const fs = require("fs");

async function user({ token: token }) {
    const { data } = await axios.get("https://discord.com/api/v9/users/@me", {
        headers: {
            authorization: token,
            "content-type": "application/json",
        },
    });
    console.log(`
        ${chalk.green("Safe Zone\n------------------------")}
        ${chalk.greenBright(`
        id: ${data.id}\n
        username: ${data.username}\n
        avatar: ${data.avatar}\n
        avatar_decoration: ${data.avatar_decoration}\n
        discriminator (#tag): ${data.discriminator}\n
        public_flags: ${data.public_flags}\n
        flags: ${data.flags}\n
        purchased_flags: ${data.purchased_flags}\n
        banner: ${data.banner}\n
        banner_color: ${data.banner_color}\n
        accent_color: ${data.accent_color}\n
        bio: ${data.bio}\n
        pronouns: ${data.pronouns}\n
        `)}
        ${chalk.red(`
        Danger Zone\n-----------------------------
        locale: ${data.locale}\n
        nsfw_allowed: ${data.nsfw_allowed}\n
        mfa_enabled: ${data.mfa_enabled}\n
        email: ${data.email}\n
        verified: ${data.verified}\n
        phone: ${data.phone}
        `)}
    `);
    return data;
}

async function userGuild({ token: token }) {
    const config = {
        method: 'get',
        url: "https://discord.com/api/v9/users/@me/guilds",
        headers: {
            Authorization: token,
        }
    };

    axios(config).then(data => {
        const req = data.data;

        let index = 1;

        req.forEach(guild => {
            console.log(`
            ${chalk.green(`
            id: ${guild.id}\n
            name: ${guild.name}\n
            icon: ${guild.icon}\n
            owner: ${guild.owner}\n
            permissions: ${guild.permissions}\n
            features: ${guild.features.map((feature) => { return `${index++} - ${feature}\n` })}\n
            `)}
            `);
        })

        // let GUILD = []
        // console.log(req.id)

        // GUILD.push({ id: req.guild.id, name: req.guild.name, icon: req.guild.icon, owner: req.guild.owner, permissions: req.guild.permissions, features: req.guild.features, })

    });
}

module.exports = { user, userGuild };
