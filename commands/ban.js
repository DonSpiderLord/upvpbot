module.exports = {
	name: 'ban',
	description: 'Bans Specified User!',
  	usage: "u.ban <@user>"
	.execute(message, args) {
		message.channel.send('Pong!');
	},
};
