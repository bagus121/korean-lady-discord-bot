const math = require('../utils/math')

const run = (client, msg, args) => {
  // Get random coin toss.
  const result = math.getRandomInt(0, 1)

  if (result === 1) {
    msg.channel.send(`${msg.author.username} threw a coin... The result was **Heads**!`)
  } else {
    msg.channel.send(`${msg.author.username} threw a coin... The result was **Tails**!`)
  }
}

module.exports = {
  name: 'coin',
  desc: 'Throws a coin and shows the result (heads or tails).',
  aliases: ['headsortails'],
  usage: 'coin',
  run
}
