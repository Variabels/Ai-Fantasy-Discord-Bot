const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");

module.exports = {
    name: "rps",
    category: "Fun",
    aliases: [],
    cooldown: 2,
    usage: "rps",
    description: "Play rock, paper, scissors.",
    run: async (client, interaction, args, user, text, prefix) => {
    try{
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('rock')
                .setLabel('Rock')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('paper')
                .setLabel('Paper')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('scissors')
                .setLabel('Scissors')
                .setStyle('PRIMARY')
        );
        const embed = new MessageEmbed()
            .setColor(ee.color)
            .setFooter({ text : ee.footertext, iconURL: ee.footericon})
            .setTitle("Rock, paper, scissors!")
            .setDescription("Can you beat Ai?")
        ;
      
        await interaction.reply({ ephemeral: false, embeds: [embed], components: [row] });
        //await message.editReply({ content: 'A button was clicked!', components: [row] });

    } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.channel.send({ embeds: [new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter({ text : ee.footertext, iconURL: ee.footericon})
            .setTitle(`❌ ERROR | An error occurred`)
            .setDescription(`\`\`\`${e.stack}\`\`\``)
        ]});
    }
  }
}