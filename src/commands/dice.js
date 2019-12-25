const math = require('../utils/math')

const run = (client, msg, args) => {
  // Check for arguments.
  let sides
  if (Array.isArray(args) && args.length) {
    // Try to parse number.
    sides = args[0]
    sides = sides.replace( /[^\d.]/g, '' )
    sides = parseInt(sides, 10)

    // If not a valid number, fallback to 6 sides.
    if (!Number.isInteger(sides)) {
      sides = 6
    }
  } else {
    // If no argument provided, default to 6 sides.
    sides = 6
  }

  // Throw the dice!
  const result = math.getRandomInt(0, sides)

  // Send message.
  msg.channel.send(`${msg.author.username} threw a ${sides} sided dice... The result was **${result}**!`)
}

module.exports = {
  name: 'dice',
  desc: 'Throws a dice. By default it will be a 6 sided dice, but a different number can be added after the command.',
  usage: ['dice [sides]'],
  examples: ['dice', 'dice 12'],
  run
}
