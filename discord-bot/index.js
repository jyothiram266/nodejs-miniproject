const { Client, GatewayIntentBits } =  require('discord.js');

const client = new Client({ intents:[
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
]});

client.on('messageCreate',(message)=>{
    if(message.author.bot) return ;
    console.log(message.content);
    message.reply({
        content:"hello from jyothiram server bot",
     });
});

client.on('interactionCreate',(interaction)=>{
    console.log(interaction);
    interaction.reply("pong!!")
});



client.login("MTE3Nzg2NDg1MDM4MzMxOTA5MA.GtihN-.bP95BA6AFyQePN3BXcSjeT3Q60WIQrONBkHhVU");