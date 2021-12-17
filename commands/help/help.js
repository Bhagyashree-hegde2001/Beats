const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description:
    "Get list of all command and even get to know every command detials",
  usage: "help <cmd>",
  category: "info",
  run: async (client, message, args) => {
    
    if (args[0]) {
      const command = await client.commands.get(args[0]);

      if (!command) {
        return message.channel.send("Unknown Command: " + args[0]);
      }

      let embed = new MessageEmbed()
        .setAuthor(command.name, client.user.displayAvatarURL())
        .addField("❯ Description", command.description || "Not Provided :(")
        .addField("❯ Usage", "`" + command.usage + "`" || "Not Provied")
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("#868686")
        .setFooter(client.user.username, client.user.displayAvatarURL());

      return message.channel.send(embed);
    } else {
      
      const commands = await client.commands;

      let emx = new MessageEmbed()
        .setDescription('**Listen to Beats!**')
  
        .setColor("BLUE")
        .setFooter(client.user.username, client.user.displayAvatarURL())
        
        .setThumbnail(client.user.displayAvatarURL());
          
      let com = {};
      for (let comm of commands.array()) {
        let category = comm.category || "Unknown";
        if(category == 'Music' || category == 'info'){
        let name = comm.name;

        if (!com[category]) {
          
          com[category] = [];
        }
       
        com[category].push(name);
        }
      }

      for(const [key, value] of Object.entries(com)) {
        let category = key;

        let desc = "`" + value.join("`, `") + "`";

        emx.addField(`${category.toUpperCase()}[${value.length}]`, desc);
      }
     emx.addField('important links ','**:link:  [Support](https://discord.gg/2ggnaapaez)**  | **[website](in progress)**')
      return message.channel.send(emx)

    }
  }
};
