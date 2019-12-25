const math = require('../utils/math')

const run = (client, msg, args) => {
  // Get random coin toss.
  const result = math.getRandomInt(0, 1)

  if (1 === result) {
    msg.channel.send(`${msg.author.username} threw a coin... The result was **Heads**!`)
  } else {
    msg.channel.send(`${msg.author.username} threw a coin... The result was **Tails**!`)
  }
}

module.exports = {
  name: 'coin',
  desc: 'Throws a coin and show the result (heads or tails).',
  aliases: ['headsortails', 'throwcoin', 'cointoss', 'throwacoin'],
  usage: ['coin'],
  examples: ['coin'],
  run
}
