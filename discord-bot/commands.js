const { REST, Routes } = require('discord.js');

const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
  ];

const rest = new REST({ version: '10' }).setToken("MTE3Nzg2NDg1MDM4MzMxOTA5MA.GtihN-.bP95BA6AFyQePN3BXcSjeT3Q60WIQrONBkHhVU");
(async ()=>{
try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands("1177864850383319090"), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();