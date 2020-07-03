const common = require('../utils/common')
const math = require('../utils/math')

const run = (client, msg) => {
  // Ramdom emotes and hug duration.
  const emotes = [
    'Apoggies',
    'liduHyper',
    'pikaD',
    'POG',
    'tohrusmug'
  ]
  const emote = common.getCustomEmote(client, math.getRandomStringFromArray(emotes))

  let sentence = 'pum strim when?'

  // Random rare sentence (chance one out of five).
  if (math.getRandomInt(1, 5) === 5) {
    const randomSentenceArray = [
      'pum strim when?',
      'pum jshkd wgeke?',
      'pumski strimski when?',
      'pum når er strim?'
    ]
    sentence = math.getRandomStringFromArray(randomSentenceArray)
  }

  const description = `**${sentence}** ${emote}`

  // Reply with an embed message.
  msg.channel.send({
    embed: {
      color: 0x2f3136,
      description
    }
  }).catch(err => common.sendErrorMsg(msg, err))
}

module.exports = {
  name: 'pum',
  desc: 'Reply with a "pum strim when?" when someone mentions Pum',
  run
}
