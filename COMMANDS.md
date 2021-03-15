# SaTzu Discord Bot

KoreanLady is a simple Discord bot with a few fun commands.

Please remember to not use it to spam the server, if you're going to use it a lot make sure to do so in the spam channel, thanks!

## Command List

Below you can see the full list of available commands.

Some commands require an argument (shown surrounded by chevrons `<` & `>`), like naming a user or object. Other commands accept optional arguments (shown surrounded by brackets `[` & `]`), while others don't require any arguments at all.

Please check the examples provided to see what each command can do!

### `!!8ball`

Uses an 8 ball to answer a question.

Usage: `!!8ball <question>`

Examples: `!!8ball Will I pass my exam?`

### `!!anime`

Returns info about an anime. The command will always try to find the best match, but providing a full title is still recommended for best results. Filtering by year is not supported.

Usage: `!!anime <anime title>`

Examples: `!!anime Hinamatsuri`

### `!!ban`

Bans a user or object for a random amount of time, from a few seconds to several years. If the ban is longer than a year the expiry date will also be shown.

Usage: `!!ban [subject]`

Examples: `!!ban` `!!ban Mosquitoes` `!!ban @Batman`

### `!!birthday`

Allows a user to set or unset their birthday date, or see a list of upcoming birthdays. if no argument is provided, the bot will show the user's current birthday date, if it is present in the database.

The bot will send a notification on chat at 8 AM CET whenever it's someone's birthday.

When adding your birthday date, please use the format DD/MM.

Usage: `!!birthday [set DD/MM|unset|upcoming]`

Examples: `!!birthday` `!!birthday set 31/12` `k!birthday unset` `k!birthday upcoming`

Aliases: `!!bday` `k!bd`

### `!!!oin`

Throws a coin and shows the result (heads or tails).

Usage: `!!!oin`

Aliases: `!!!eadsortails`

### `!!!ice`

Throws a dice. By default it will be a 6 sided dice, but a different number can be added after the command.

Usage: `!!dice [sides]`

Examples: `!!dice` `!!dice 12`

### `!!fight`

Start a fight with someone.

Characters start with 150HP and take turns to attack. Attacks are selected randomly, and their damage multiplier is also rolled randomly each turn. Each attack has a different accuracy and critical hit chance. The first fighter that runs out of HP loses.

Usage: `!!fight [subject]`

Examples: `!!fight` `!!fight Loch Ness Monster` `!!fight @Batman`

Aliases: `!!battle`

Notice: This command is!!onsidered spam and can only be used in the spam channel.

### `!!fine`

Fines someone with a random amount of money, in a random currency.

Usage: `!!fine [subject]`

Examples: `!!fine` `!!fine @Superman` `!!fine The whole planet`

### `!!fortune`

Get a fortune! For best results, get a snack first, break it in half, then use this command.

Usage: `!!fortune`

Examples: `!!fortune`

Aliases: `!!fortunecookie`

### `!!help`

Shows a link to command list in documentation. If a command is added as an argument, it will show help specific to that command.

Usage: `!!help [command]`

Examples: `!!help` `!!help ban`

Aliases: `!!h` `!!?` `!!info`

### `!!hug`

Hugs someone/something for a random amount of mississippis.

Usage: `!!hug [subject]`

Examples: `!!hug` `!!hug chat`

### `!!list`

Lists all available commands.
!
Usage: `!!list`

Aliases: `!!commands` `!!commandlist`

### `!!love`

Shows how much you love someone or something, with a random percentage.

Usage: `!!love [subject]`

Examples: `!!love` `!!love @Wumpus` `!!love everyone in chat`

### `!!movie`

Returns info about a movie. The command will always try to find the best match, but providing a full title is still recommended for best results. You can refine your search by typing the year between parethesis.

Usage: `!!movie <movie title>`

Examples: `!!movie Alien` `k!movie Total Recall (1990)`

### `!!movienight`

Shows a link with information, tips & troubleshooting regarding movie night.

Usage: `!!movienight`

Aliases: `!!movies` `!!mn`

### `!!owo`

Twanswates y-youw text t-to OwO speak! Pwease use wesponsibwy, hehe.

Usage: `!!owo <text>`

Examples: `!!owo A loyal warrior will rarely worry why we rule.`

Aliases: `!!owoify` `!!owify`

### `!!ping`

Simple ping command to test bot is online.

Usage: `!!ping`

### `!!show`

Returns info about a TV show. The command will always try to find the best match, but providing a full title is still recommended for best results. You can refine your search by typing the year between parethesis.

Usage: `!!show <show title>`

Examples: `!!show The Witcher` `!!show Doctor Who (1963)`

### `!!slap`

Lets you slap your nemeses, and shows how much damage you've inflicted.

Usage: `!!slap [subject]`

Examples: `!!slap` `!!slap @Cthulhu` `!!slap everyone in chat`

### `!!timezones`

Show the current time in several cities of different timezones.

Usage: `!!timezones`

Aliases: `!!timezone` `!!tz`

### `!!track`

Keeps track of how many episodes have been watched for a show. You can check usage and examples below for how to add new tracked shows, rename, change, check the amount of episodes watched, or delete them from the database.

When providing a show name, capitalization is ignored, so `HxH` and `hxh` will work just the same. Show names can't contain spaces and should be short an easy to remember, so acronyms and similar short names are recommended.

To see a list of shows currently tracked type the command without any arguments.

Shows can also be marked as complete, which makes them appear in a separate list.

Usage: `!!track [(show)|add (show)|rename (show) (newShowName)|set (show) (eps)|del (show)|complete (show)]`

Examples: `!!track` `!!track HxH` `!!track add HxH` `!!track rename Hunter HxH` `!!track set HxH 120` `!!track del HxH` `!!track complete HxH`

Aliases: `!!trackshow` `!!ts`

### `!!treat`

Give someone a treat. If no subject is provided, the treat will be for everyone!

Treats are randomly generated by a super secret special algorithm, only with the highest quality ingredients. By being gifted a treat you enter a non-negotiable contract and are legally obligated to stop what you are doing and eat. Treats may contain traces of pineapple.

Usage: `!!treat [subject]`

Examples: `!!treat` `!!treat @KoreanLady` `!!treat the queen of England`

Aliases: `!!dessert`
