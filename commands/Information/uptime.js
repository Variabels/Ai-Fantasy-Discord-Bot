const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const { duration } = require("../../handlers/functions")
module.exports = {
    name: "uptime",
    category: "Information",
    aliases: [""],
    cooldown: 10,
    usage: "uptime",
    description: "Returns the duration on how long the Bot is online",
    run: async (client, message, args, user, text, prefix) => {
    try{
      message.channel.send({ embeds: [new MessageEmbed()
        .setColor(ee.color)
        .setFooter({ text : ee.footertext, iconURL: ee.footericon})
        .setTitle(`:sparkling_heart: **${client.user.username}** has been up for:\n ${duration(client.uptime)} `)
      ]});
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

/** Template by Tomato#6966 | https://github.com/Tomato6966/Discord-Js-Handler-Template */
