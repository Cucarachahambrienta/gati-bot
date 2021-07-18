const help = (pushname, prefix, checATM, useLevel, useXp, requireXp) => {
    return `
┌─────────────┐
├─「 *INFO DEL USUARIO* 」
│➛Nombre : ${pushname}
│➛Exp : ${getLevelingXp(sender)}
│➛Numero :  wa.me/${sender.split("@")[0]}
│➛Rango : ${role}
│➛Nivel : ${getLevelingLevel(sender)}
└─────────────╮
┌─────────────╯
├─「 *INFO DEL BOT* 」
│➛Nombre : gati-bot
│➛Numero : wa.me/51988050859
│➛Prefijo : 「 ${prefix} 」
│➛Vercion : 1.1.7
└─────────────┘

╭──────────────
│[🐈‍⬛] *github:*
│ github.com/g4tito/gati-bot
╰──────────────

┌「 *MENÚ* 」
└────────╮
┏╾───────╯
│▪︎${prefix}daftar
│▪︎${prefix}menu
│▪︎${prefix}owner
│▪︎${prefix}request [texto]
└──┘

┌「 *STICKER* 」
└────────╮
┏╾───────╯
│▪︎${prefix}toimg
│▪︎${prefix}sticker
└──┘

┌「 *EXP LIMITE* 」
└────────╮
┏╾───────╯
│▪︎${prefix}dompet
│▪︎${prefix}buypremiumlimit
│▪︎${prefix}buylimit
│▪︎${prefix}lb
│▪︎${prefix}leaderboard
│▪︎$prefix}limit
│▪︎${prefix}transfer
│▪︎${prefix}giftlimit
│▪︎${prefix}kalkulator
│▪︎${prefix}level
│▪︎${prefix}profile
└──┘

┌「 *BUSCADOR* 」
└────────╮
┏╾───────╯
│▪︎${prefix}gimage
│▪︎${prefix}wallpapersearch
│▪︎${prefix}wallpapersearch2
│▪︎${prefix}konachan
│▪︎${prefix}gimage2
└──┘

┌「 *GRUPO* 」
└────────╮
┏╾───────╯
│▪︎${prefix}welcome [1/0] 
│▪︎${prefix}nsfw [1/0]
│▪︎${prefix}antilink [1/0]
│▪︎${prefix}leveling [1/0]
│▪︎${prefix}nobadword [1/0]
│▪︎${prefix}simih [1/0] 
│▪︎${prefix}promote [@tag]
│▪︎${prefix}demote [@tag]
│▪︎${prefix}tagall
│▪︎${prefix}listadmin
│▪︎${prefix}premiumlist
│▪︎${prefix}banlist
│▪︎${prefix}blocklist
│▪︎${prefix}linkgc
│▪︎${prefix}mining
│▪︎${prefix}hidetag
│▪︎${prefix}grouplist
│▪︎${prefix}add [62]
│▪︎${prefix}kick [@tag]
│▪︎${prefix}setname
│▪︎${prefix}setdesc
│▪︎${prefix}listadmin
│▪︎${prefix}linkgc
│▪︎${prefix}leave
│▪︎${prefix}mining
│▪︎${prefix}level
│▪︎${prefix}grup [buka/tutup]
│▪︎${prefix}wame
│▪︎${prefix}wa.me
└──┘

┌「 *ANTILINK* 」
└────────╮
┏╾───────╯
│▪︎${prefix}antilinkyoutube-v [1/0]
│▪︎${prefix}antilinktelegram [1/0]
│▪︎${prefix}antilinkyoutube-c [1/b]
└──┘

┌「 *CREADOR* 」
└────────╮
┏╾───────╯
│▪︎${prefix}bc
│▪︎${prefix}nobadword
│▪︎${prefix}addbadword
│▪︎${prefix}delbadword
│▪︎${prefix}bcgc
│▪︎${prefix}kickall [lngsung kebened]
│▪︎${prefix}setreply
│▪︎${prefix}setprefix
│▪︎${prefix}clearall
│▪︎${prefix}block
│▪︎${prefix}unblock
│▪︎${prefix}leave
│▪︎${prefix}event [1/0]
│▪︎${prefix}clone
│▪︎${prefix}del
│▪︎${prefix}ban [tag]
│▪︎${prefix}unban 
│▪︎${prefix}unbann [tag]
│▪︎${prefix}setreplyy
│▪︎${prefix}premium [tag]
│▪︎${prefix}unpremium [tag] 
│▪︎${prefix}admin
│▪︎${prefix}unadmin
│▪︎${prefix}setlimit
│▪︎${prefix}setmemlimit 
└──┘

┌「 *TEXT PRO ME* 」
└────────╮
┏╾───────╯
│▪︎${prefix}blackpink
│▪︎${prefix}neon
│▪︎${prefix}greenneon
│▪︎${prefix}advanceglow
│▪︎${prefix}futureneon
│▪︎${prefix}sandwriting
│▪︎${prefix}sandsummer
│▪︎${prefix}sandengraved
│▪︎${prefix}metaldark
│▪︎${prefix}neonlight
│▪︎${prefix}holographic
│▪︎${prefix}text1917
│▪︎${prefix}minion
│▪︎${prefix}deluxesilver
│▪︎${prefix}newyearcard
│▪︎${prefix}bloodfrosted
│▪︎${prefix}halloween
│▪︎${prefix}jokerlogo
│▪︎${prefix}fireworksparkle
│▪︎${prefix}natureleaves
│▪︎${prefix}bokeh
│▪︎${prefix}toxic
│▪︎${prefix}strawberry
│▪︎${prefix}box3d
│▪︎${prefix}roadwarning
│▪︎${prefix}breakwall
│▪︎${prefix}icecold
│▪︎${prefix}luxury
│▪︎${prefix}cloud
│▪︎${prefix}summersand
│▪︎${prefix}horrorblood
│▪︎${prefix}thunder
│▪︎${prefix}pornhub
│▪︎${prefix}glitch
│▪︎${prefix}avenger
│▪︎${prefix}space
│▪︎${prefix}ninjalogo
│▪︎${prefix}marvelstudio
│▪︎${prefix}lionlogo
│▪︎${prefix}wolflogo
│▪︎${prefix}steel3d
│▪︎${prefix}wallgravity
└──┘

┌「 *PHOTOT OXY* 」
└────────╮
┏╾───────╯
│▪︎${prefix}shadow
│▪︎${prefix}cup
│▪︎${prefix}cup1
│▪︎${prefix}romance
│▪︎${prefix}smoke
│▪︎${prefix}burnpaper
│▪︎${prefix}lovemessage
│▪︎${prefix}undergrass
│▪︎${prefix}love
│▪︎${prefix}coffe
│▪︎${prefix}woodheart
│▪︎${prefix}woodenboard
│▪︎${prefix}summer3d
│▪︎${prefix}wolfmetal
│▪︎${prefix}nature3d
│▪︎${prefix}underwater
│▪︎${prefix}golderrose
│▪︎${prefix}summernature
│▪︎${prefix}letterleaves
│▪︎${prefix}glowingneon
│▪︎${prefix}fallleaves
│▪︎${prefix}flamming
│▪︎${prefix}harrypotter
│▪︎${prefix}carvedwood
│▪︎${prefix}tiktok
│▪︎${prefix}arcade8bit
│▪︎${prefix}battlefield4
│▪︎${prefix}pubg
└──┘

┌「 *EPHOTO 360* 」
└────────╮
┏╾───────╯
│▪︎${prefix}wetglass
│▪︎${prefix}multicolor3d
│▪︎${prefix}watercolor
│▪︎${prefix}luxurygold
│▪︎${prefix}galaxywallpaper
│▪︎${prefix}lighttext
│▪︎${prefix}beautifulflower
│▪︎${prefix}puppycute
│▪︎${prefix}royaltext
│▪︎${prefix}heartshaped
│▪︎${prefix}birthdaycake
│▪︎${prefix}galaxystyle
│▪︎${prefix}hologram3d
│▪︎${prefix}greenneon
│▪︎${prefix}glossychrome
│▪︎${prefix}greenbush
│▪︎${prefix}metallogo
│▪︎${prefix}noeltext
│▪︎${prefix}glittergold
│▪︎${prefix}textcake
│▪︎${prefix}starsnight
│▪︎${prefix}wooden3d
│▪︎${prefix}textbyname
│▪︎${prefix}writegalacy
│▪︎${prefix}galaxybat
│▪︎${prefix}snow3d
│▪︎${prefix}birthdayday
│▪︎${prefix}goldplaybutton
│▪︎${prefix}silverplaybutton
│▪︎${prefix}freefire
└──┘

┌「 *RANDOM* 」
└────────╮
┏╾───────╯
│▪︎${prefix}waifu
│▪︎${prefix}husbu
│▪︎${prefix}loli
│▪︎${prefix}elf
└──┘

┌「 *FUN MENU* 」
└────────╮
┏╾───────╯
│▪︎${prefix}truth 
│▪︎${prefix}dare 
│▪︎${prefix}slot
│▪︎${prefix}mutual
└──┘

┌「 *OTROS* 」
└────────╮
┏╾───────╯
│▪︎${prefix}ocr
│▪︎${prefix}donate
│▪︎${prefix}donasi
│▪︎${prefix}ytsearch
└──┘

╭──────────────
│ *créditos:*
│ ▪︎_gatito_
╰──────────────
`
}
exports.help = help
