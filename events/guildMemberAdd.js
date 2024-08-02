const { Events, EmbedBuilder, AttachmentBuilder } = require('discord.js');

module.exports = {
    name: Events.GuildMemberAdd,
    async execute(member) {
        if (member.bot) return;
        const chat = member.guild.channels.cache.get("1259572118912372866");

        const embed = new EmbedBuilder()
            .setTitle(`Welcome to __${member.guild.name}__, ${member.displayName}!`)
            .setDescription(
            `➜ Read our rules in ⁠<#1259557131842097242>
        ➜ Apply for staff in ⁠<#1262854169530990692>
        ➜ To know what has been happening lately, read ⁠<#1259557078394081300>`,
            )
            .setColor("#B77BEB")
            .setThumbnail(member.user.displayAvatarURL())
            .setFooter({
                text: `You are member #${member.guild.memberCount}`,
                iconURL: member.guild.iconURL(),
            });
        chat.send({
            content: `<@&1259568394642919444> **__Welcome our newest member!__** <@${member.id}>  🙌`,
            embeds: [embed],
        });

    }
};