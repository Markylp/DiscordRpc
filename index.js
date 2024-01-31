

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
    .setURL('https://www.youtube.com/@Twqz7') //set any youtube or twitch link
  
    .setName('Grand Theft Auto VI') // add your name
    .setDetails('Welcome to Vice City!') // set your status
    .setState('Playing Single Player')
  
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://media.discordapp.net/attachments/1194705818147373078/1201215920396316744/GAlNsleboAExVYE.jpg') // add image link (form: .png, .gif).
    .setAssetsLargeText('Grand Theft Auto VI') // set image name (type any name)
    //.addButton('Discord', 'https://discord.com/invite/vtQdzGwfvB')//  // add button name and paste the link like discord server, youtube channel, etc.
     client.user.setActivity(r);
     client.user.setPresence({ status: "online" }); // set your status (online,dnd, idle)
})

client.login(process.env.TOKEN)

