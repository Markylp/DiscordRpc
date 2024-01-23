///////////////////////////
// Vinay Kumar:- V𝕀ꋊΛꌦ#0587
// https://discord.gg/c2MyY4WMQv
// https://www.youtube.com/@Tutorial-City-sg2fp
///////////////////////////

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js')
keepAlive()

client.on('ready', async () => {


    console.clear();

    console.log(`${client.user.tag} - rich presence started!`
               )
const r = new Discord.RichPresence()
    .setApplicationId('1199263652847566858') // Keep this as it is
    .setType('PLAYING') // You can Set Any other like PLAYING, LISTENING, STREAMING
    .setURL('https://www.youtube.com/@Shaolinxff') //set any youtube or twitch link
    //.setState('') // set any Status
  
    .setName('VALORANT') // add your name
    //.setDetails('Bot Music & Moderation 24/7') // set your status
        
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://media.discordapp.net/attachments/1194705818147373078/1199262252923092992/20240123_045936.jpg') // add image link (form: .png, .gif).
    //.setAssetsLargeText('Maiya Bot') // set image name (type any name)
    //.setAssetsSmallImage('https://media.discordapp.net/attachments/1163218197596610641/1167242257859096636/905608189402284104.gif?size=1024') // add image link (form: .png, .gif).
    //.setAssetsSmallText('Maiya ✨') // set image name (type any name)
    //.addButton('Vinay Kumar', 'https://discord.gg/bxbe')//  // add button name and paste the link like discord server, youtube channel, etc.
    //.addButton('Server', 'https://discord.com/invite/eGNu75eHxX') // add button name and paste the link like discord server, youtube channel, etc.
     client.user.setActivity(r);
     client.user.setPresence({ status: "online" }); // set your status (online,dnd, idle)
})

client.login(process.env.TOKEN)


///////////////////////////
// Vinay Kumar:- V𝕀ꋊΛꌦ#0587
// https://discord.gg/c2MyY4WMQv
// https://www.youtube.com/@Tutorial-City-sg2fp
///////////////////////////
