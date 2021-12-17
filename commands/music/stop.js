const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'stop', // Optional
    category: 'Music',
    description: 'Clears the queue and leave the vc', 
    aliases: ['st'], // Optional
    run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`You need to be in a vc to execute this command!`)
            if (!voice_channel) return message.channel.send(embed);
            let isDone = client.player.stop(message);
            const stop = new MessageEmbed()
            .setColor('RANDOM')
            .setDescription('Music stopped & the queue was cleared!')
            if(isDone)
            message.channel.send(stop);
    }
}