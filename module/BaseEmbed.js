const { MessageEmbed } = require("discord.js");

function BaseEmbed(message) {
  if (!message) {
    throw Error("'message' must be passed down as param! (BaseEmbed)");
  }

  const avatar = message.author.displayAvatarURL({ dynamic: true });
  return new MessageEmbed()
    .setFooter(message.author.username, avatar)
    .setColor("#a3a3a3")
    .setTimestamp();
}

module.exports = BaseEmbed;