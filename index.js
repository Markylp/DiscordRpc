

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
  
    .setName('awsxu') // add your name
    .setDetails('Active in Launcher') // set your status
    .setState('Version: 0.9')
  
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://media.discordapp.net/attachments/1194705818147373078/1203379587543859312/pngegg.png') // add image link (form: .png, .gif).
    .setAssetsLargeText('awsxu') // set image name (type any name)
    .addButton('Discord', 'https://discord.gg/t7EPCNYdMw')//  // add button name and paste the link like discord server, youtube channel, etc.
     client.user.setActivity(r);
     client.user.setPresence({ status: "online" }); // set your status (online,dnd, idle)
})

client.login(process.env.TOKEN)

