module.exports = {
	name: 'ban',
	description: 'Ping!',
	execute(message) {
		message.channel.send('Pong.');
	},
};
