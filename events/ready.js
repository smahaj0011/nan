const { Events, ActivityType } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
        console.log(`Logged in as ${client.user.tag} in ${client.guilds.cache.size} servers!`);
        // client.guilds.fetch();
        client.user.setActivity('Welcome to NAN!', { type: ActivityType.Listening });
	},
};