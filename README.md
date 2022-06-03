<h1 align="center">
  <img src="https://camo.githubusercontent.com/c4c5558841078fe1aa727e087e4430e9b742ec74c92a9857228e319c3710b896/68747470733a2f2f646973636f72642e636f6d2f6173736574732f66663431623632386134376566333134313136346266656462303466623232302e706e67" width="224px" alt="discord"/>
<br/>
Discord Info
</h1>
<h3 align="center">An <a href="https://nodejs.org/">NODE</a> Module For Getting Data From Discord API
  Called <a href="https://www.npmjs.com/package/discord-information">Discord Info</a></h3>

# 
## Functions :
</br>
<h4 align="center">
    Invite  - User - Guild - Account - AccountGuilds
</h4>

## Downloading Module:

```sh
npm i @sklyerx/discord-info
```
```

## Function Object Info :
</br>

```
code : The Server Invite Code (Just The Code)

```
```
id : The Server ID or User ID
```

```
token : Token Of Bot
```

```
token : Account Token
```

## Example:

```js
const dscinfo = require("@sklyerX/discord-information");

const dsc = dscinfo.Bot.userData({ token: "bot token", id: "account you want to fetch" });

console.log(dsc)

// The list below will be filled with the data of the userid you specified
// {
//   id: 'id',
//   username: 'username',
//   avatar: 'avatar',
//   avatar_decoration: value,
//   discriminator: 'discriminator',
//   public_flags: flagCount,
//   banner: 'banner',
//   banner_color: value,
//   accent_color: value
// }

```
Or Visit The [Test](https://github.com/SklyerX/discord-info/blob/main/index.test.js) File 

</br>

# Every usage:
```js
const dscinfo = require("@sklyerX/discord-information");

const dsc = dscinfo.Bot.userData({ token: "bot token", id: "account you want to fetch" });

console.log(dsc)

// The list below will be filled with the data of the userid you specified
// {
//   id: 'id',
//   username: 'username',
//   avatar: 'avatar',
//   avatar_decoration: value,
//   discriminator: 'discriminator',
//   public_flags: flagCount,
//   banner: 'banner',
//   banner_color: value,
//   accent_color: value
// }
```

```js
const dscinfo = require("@sklyerX/discord-information");

const dsc = dscinfo.Bot.userDataPretty(
    {
        token: "bot token",
        id: "account id"
    }
)

console.log(dsc)
// The list below will be filled with the data of the userid you specified

// id: userid

// username: username

// discriminator: discriminator

// avatar: avatar

// avatar_decoration: value

// public_flags: number

// banner: value

// banner_color: color

// accent_color: number
```

```js
const dscinfo = require("@sklyerX/discord-information");

const dsc = dscinfo.Invite("inviteCode");

console.log(dsc)
// code: invitecode

// type: type

// expires_at: date

// guild_id: guildid

// guild_name: server name

// guild_icon: server icon

// guild_splash: server splash

// guild_description: server description

// guild_verification_level: level

// guild_vanity_url_code: vanity url (custom invite)

// boosts: boost count

// nsfw?: true/false

// nsfwLevel: level
```
```js
const dscinfo = require("@sklyerX/discord-information");

const dsc = dscinfo.UserId.userData({ token: "account token", id: "account you want to fetch" });

console.log(dsc)

// The list below will be filled with the data of the userid you specified
// {
//   id: 'id',
//   username: 'username',
//   avatar: 'avatar',
//   avatar_decoration: value,
//   discriminator: 'discriminator',
//   public_flags: flagCount,
//   banner: 'banner',
//   banner_color: value,
//   accent_color: value
// }
```

```js
const dscinfo = require("@sklyerX/discord-information");

const dsc = dscinfo.UserId.userDataPretty(
    {
        token: "account token",
        id: "account id"
    }
)

console.log(dsc)
// The list below will be filled with the data of the userid you specified

// id: userid

// username: username

// discriminator: discriminator

// avatar: avatar

// avatar_decoration: value

// public_flags: number

// banner: value

// banner_color: color

// accent_color: number
```

```js
const dscinfo = require("@sklyerX/discord-information");

const dsc = dscinfo.UserToken.user({ token: "accaount token" });

console.log(dsc)
// The list below will be filled with the data of the userid you specified
//         Safe Zone
// ------------------------

//id: userid

//username: username

//avatar: avatar

//avatar_decoration: avatar_decoration

//discriminator (#tag): tag

//public_flags: number

//flags: number

//purchased_flags: number

//banner: value

//banner_color: color

//accent_color: number

//bio: text

//pronouns: text



//Danger Zone
// -----------------------------
//locale: text

//nsfw_allowed: true/false

//mfa_enabled: true/false

//email: email

//verified: true/false

//phone: number
```
```js
const dscinfo = require("@sklyerX/discord-information");

const dsc = dscinfo.UserToken.userGuild({ token: "accaount token" });

console.log(dsc)
//             id: 925326431532245042

//             name: Kitty Crypto Gang

//             icon: a74e7f82359503ed798a0619e744f862

//             owner: false

//             permissions: 2251377216

//             features: 277 - COMMUNITY
// ,278 - INVITE_SPLASH
// ,279 - SEVEN_DAY_THREAD_ARCHIVE
// ,280 - ANIMATED_ICON
// ,281 - NEWS
// ,282 - VANITY_URL
// ,283 - ANIMATED_BANNER
// ,284 - THREE_DAY_THREAD_ARCHIVE
// ,285 - ROLE_ICONS
// ,286 - MEMBER_PROFILES
// ,287 - BANNER
// ,288 - PRIVATE_THREADS

//             id: 923670412943044631

//             name: Squiggles

//             icon: 469b823b45c832422534c36f97a1d963

//             owner: false

//             permissions: 968619314753

//             features: 265 - COMMUNITY
// ,266 - INVITE_SPLASH
// ,267 - SEVEN_DAY_THREAD_ARCHIVE
// ,268 - ANIMATED_ICON
// ,269 - NEWS
// ,270 - VANITY_URL
// ,271 - ANIMATED_BANNER
// ,272 - THREE_DAY_THREAD_ARCHIVE
// ,273 - ROLE_ICONS
// ,274 - MEMBER_PROFILES
// ,275 - BANNER
// ,276 - PRIVATE_THREADS
```

<p align="center">
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/SkylerX/discord-info">
    &nbsp;
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/SklyerX/discord-info">
    &nbsp;
    <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
    &nbsp;
</p>

<br/>
<br/>
<br/>

## 📊 Repo Stats

<p align="left">
    <img src="https://img.shields.io/github/forks/SklyerX/discord-info.svg" alt="forks">
    <img src="https://img.shields.io/github/stars/SklyerX/discord-info.svg" alt="stars">
    <img src="https://img.shields.io/github/watchers/SklyerX/discord-info.svg" alt="watchers">
</p>

<br/>

## 🤝 Contributing
1. [Fork the repository](https://github.com/SklyerX/discord-info/fork)
2. Clone your fork: `git clone https://github.com/your-username/discord-info.git`
3. Create your feature branch: `git checkout -b my-new-feature`
4. Commit your changes: `git commit -am 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request

<br/>

# 🌟 Spread the word!!

If you want to say thank you and/or support active development of the repo:
- Add a GitHub Star to the project!
- Follow my profile [SklyerX](https://github.com/SklyerX)

Thanks so much for your interest in growing the reach of the repo!

<br/>

# ⚠️ License

This repo is free and open-source software licensed under the MIT General Public License v3.0. All designs were created by [SklyerX](https://github.com/SkylerX).

<br />
