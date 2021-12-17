const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  description: "INVITE Beats music BOT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`HERE INVITE LINK OF BOT`)
    .setDescription(`<:link:845315257430048788>  [CLICK HERE](https://discord.com/api/oauth2/authorize?client_id=921272883622342686&permissions=8&scope=bot) OR [support server ](https://discord.gg/2ggnaapaez)`)
    .setColor("RANDOM")
    .setFooter(`made with love ❤`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}