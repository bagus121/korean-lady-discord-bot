const common = require('../utils/common')
const math = require('../utils/math')
const random = require('../utils/random')

const run = (client, msg, args) => {
  // Get subject from args.
  const subject = common.stripMentions(args.join(' '), msg)

  // Get random percentage.
  const result = math.getRandomInt(0, 110)

  // Depending on percentage send a different message.
  if (result > 94) {
    msg.channel.send(`💘 What!? ${msg.author.username}'s love for **${subject}** is _**${result}%**_!`)
  } else if (result > 69) {
    msg.channel.send(`😍 ${random.exclamation()} ${msg.author.username}'s love for **${subject}** is **${result}%**!`)
  } else if (result > 49) {
    msg.channel.send(`🤔 ${msg.author.username}'s love for **${subject}** is ${result}%.`)
  } else if (result > 9) {
    msg.channel.send(`😩 ${random.exclamationNegative()} ${msg.author.username}'s love for **${subject}** is ${result}%.`)
  } else {
    msg.channel.send(`😐 ${random.exclamationNegative()} ${msg.author.username}'s love for **${subject}** is ${result}%.`)
  }
}

module.exports = {
  name: 'love',
  desc: 'Shows how much you love someone or something, with a random percentage.',
  usage: 'love <subject>',
  examples: ['love @Wumpus', 'love everyone in chat'],
  args: true,
  args_error: 'You must specify the subject of your love!',
  run
}
