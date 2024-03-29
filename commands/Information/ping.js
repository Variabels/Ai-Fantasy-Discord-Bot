const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "ping",
    category: "Information",
    aliases: ["latency"],
    cooldown: 2,
    usage: "ping",
    description: "Gives you information on how fast the Bot can respond to you",
    run: async (client, message, args, user, text, prefix) => {
    try{
      message.channel.send({ embeds: [new MessageEmbed()
        .setColor(ee.color)
        .setFooter({ text : ee.footertext, iconURL: ee.footericon})
        .setTitle(`:sparkles:   Pinging....`)
      ]}).then(msg=>{
        msg.edit({ embeds: [new MessageEmbed()
          .setColor(ee.color)
          .setFooter({ text : ee.footertext, iconURL: ee.footericon})
          .setTitle(`:star2:   Ping is \`${Math.round(client.ws.ping)}ms\``)
      ]});
      })
    } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.channel.send({ embeds: [new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter({ text : ee.footertext, iconURL: ee.footericon})
            .setTitle(`:anger:  ERROR | An error occurred`)
            .setDescription(`\`\`\`${e.stack}\`\`\``)
        ]});
    }
  }
}

/** Template by Tomato#6966 | https://github.com/Tomato6966/Discord-Js-Handler-Template */
