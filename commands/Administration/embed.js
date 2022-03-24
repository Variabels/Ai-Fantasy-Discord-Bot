const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "embed",
    category: "Administration",
    aliases: ["say-embed"],
    cooldown: 2,
    usage: "embed <TITLE> ++ <DESCRIPTION>",
    description: "Resends a message from you as an Embed",
    run: async (client, message, args, user, text, prefix) => {
    try{
      if(!args[0])
        return message.channel.send({ embeds: [new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter({ text : ee.footertext, iconURL: ee.footericon})
            .setTitle(`No title or description provided.`)
            .setDescription(`Make sure to add a title and/or a description for the bot to create an embed. \n \n Example: \n\`${prefix}embed Hello ++ World \nThe bot will reply with an embed using "Hello" as the title and "World" as a description.\``)
        ]});
      let userargs = args.join(" ").split("++");
      let title = userargs[0];
      let desc = userargs.slice(1).join(" ")
      message.channel.send({ embeds: [new MessageEmbed()
        .setColor(ee.color)
        .setFooter({ text : ee.footertext, iconURL: ee.footericon})
        .setTitle(title ? title : "")
        .setDescription(desc ? desc : "")
      ]})
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
