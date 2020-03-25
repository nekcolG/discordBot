const Discord = require('discord.js');{}
const bot = new Discord.Client();

const token = 'NjkxOTEzNTkyMDgxMjE5NjQ2.XnnMvQ._JqcjQD8f2fmfW-mbIn45lmj-HU';
const prefix = '!';

bot.on('ready', ()=>
{
    console.log('Bot online.');
});

bot.on('message', message=>{
    let args = message.content.substring(prefix.length).split(/ +/);
switch(args[0]){
    case 'help':
        message.reply('Sorry, I cant do that!');
        break;
    case 'about':
        message.reply('yeah working on this one too.');
        break;
}
});

bot.on('guildMemberAdd', member=>{
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}`);
});

bot.login(token);