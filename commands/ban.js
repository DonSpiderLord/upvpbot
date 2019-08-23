module.exports = {
	name: 'ban',
	description: 'Ping!',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};
