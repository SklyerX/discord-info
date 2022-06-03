const axios = require("axios");
const chalk = require("chalk");

async function invite(code) {
    const req = await axios.get(`https://discord.com/api/v8/invites/${code}`)
    
    console.log(`
        ${chalk.green(`code: ${req.data.code}`)}\n
        ${chalk.green(`type: ${req.data.type}`)}\n
        ${chalk.green(`expires_at: ${req.data.expires_at}`)}\n
        ${chalk.green(`guild_id: ${req.data.guild.id}`)}\n
        ${chalk.blueBright(`guild_name: ${req.data.guild.name}`)}\n
        ${chalk.blueBright(`
        guild_icon: ${req.data.guild.icon}\n
        guild_splash: ${req.data.guild.splash}\n
        guild_description: ${req.data.guild.description}\n
        guild_verification_level: ${req.data.guild.verification_level}\n
        `)}
        ${chalk.magentaBright(`
        guild_vanity_url_code: ${req.data.guild.vanity_url_code}\n
        boosts: ${req.data.guild.premium_subscription_count}\n`
        )}
        ${chalk.red(`nsfw?: ${req.data.guild.nsfw}`)}\n
        ${chalk.red(`nsfwLevel: ${req.data.guild.nsfw_level}`)}
    `)

}

module.exports = invite;
