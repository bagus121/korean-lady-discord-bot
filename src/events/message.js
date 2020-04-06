const common = require('../utils/common')

module.exports = (client, msg) => {
  // Ignore bot messages.
  if (msg.author.bot) return

  // Ignore messages not starting with the prefix or mention of our bot.
  // Also do not require prefix in direct messages.
  const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(process.env.PREFIX)}|${escapeRegex(process.env.PREFIX.toUpperCase())})\\s*`)
  if (!prefixRegex.test(msg.content) && msg.channel.type !== 'dm') return

  // Remove prefix if found, then get command and args.
  let args
  if (msg.content.match(prefixRegex)) {
    const [, matchedPrefix] = msg.content.match(prefixRegex)
    args = msg.content.slice(matchedPrefix.length).trim().split(/ +/)
  } else {
    args = msg.content.trim().split(/ +/)
  }
  const command = args.shift().toLowerCase()

  // Grab the command data from the client.commands Enmap.
  const cmd = client.commands.get(command) ||
    client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command))

  // If that command doesn't exist, silently exit and do nothing.
  if (!cmd) return

  // Store command details in client object for later use.
  client.cmd = cmd

  // Check for required arguments for this command and send error message if needed.
  if (cmd.args && !args.length) {
    common.sendMissingParameterMsg(client, msg, cmd.args_error)
    return
  }

  // Make displayName available in DMs conversations.
  if (msg.channel.type === 'dm') {
    msg.member = []
    msg.member.displayName = msg.author.username
  }

  // Run the command.
  cmd.run(client, msg, args)
}
