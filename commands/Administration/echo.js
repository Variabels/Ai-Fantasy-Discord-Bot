const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "echo",
    category: "Administration",
    aliases: ["say"],
    cooldown: 2,
    usage: "echo <TEXT>",
    description: "Resends your Text",
    run: async (client, message, args, user, text, prefix) => {
    try{
      if(!args[0])
        return message.channel.send({ embeds: [new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter({ text : ee.footertext, iconURL: ee.footericon})
            .setTitle(`No text was provided`)
            .setDescription(`Make sure to add some text for the bot to echo. \n \n Example: \n\`${prefix}echo Hello \nThe bot will reply "Hello". \``)
        ]});
      message.channel.send(text);
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
