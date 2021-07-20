exports.wait = () => {
	return`*⏰┋Espere en proceso*\n\nsi no llega es que hubo un error`
}

exports.succes = () => {
	return`*「 ÉXITO 」*`
}

exports.pedo = () => {
	return`*🔞┋Espere en proceso*\n\nsi no llega es que hubo un error`
}

exports.lvlon = () => {
	return`*「 ✅ 」NIVELACIÓN ACTIVADO*`
}

exports.lvloff = () => {
	return`*「 ☑ 」NIVELACIÓN DESACTIVADO*`
}

exports.lvlnul = () => {
	return`*「 ❌ 」TU NIVEL AÚN ESTÁ VACÍO*`
}

exports.lvlnoon = () => {
	return`*LOS NIVELES EN ESTE GRUPO NO SE HAN ACTIVADO *`
}

exports.noregis = () => {
	return`「 *❎SIN VERIFICACIÓN* 」
┏╾─────────────
│Verifiquese escribiendo
│el comando *${prefix}verify*
└──────────────`
}

exports.rediregis = () => {
	return`*❎┋usted ya esta verificado -_-*`
}

exports.stikga = () => {
	return`*Bueno, falló, inténtalo de nuevo en un rato*`
}

exports.linkga = () => {
	return`*Lo siento, el enlace no es válido.*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*🔞┃NSFW DESACTIVADO*\n\nsolo puede ser activado en grupos que permitan el contenido +18`
}

exports.ppterror = () => {
	return `*✳️Debe escribir así ejemplo:*\n\n▪︎${prefix}ppt papel\n▪︎${prefix}ppt piedra\n▪︎${prefix}ppt tijera`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner G4TITOツ, Laporan palsu atau main² tidak akan ditanggapi.*`
}

exports.wrongf = () => {
	return`*Formato incorrecto/texto vacío*`
}

exports.clears = () => {
	return`*Borrar todo el éxito*`
}

exports.registered = (pushname, sender, serialUser, time, _verify) => {
	return`┌「 *DATOS DEL REGISTRO* 」
└─────────────╮
┏╾────────────╯
│➜ *🐱Nombre:* ${pushname}
│➜ *#️⃣Numero:* wa.me/${sender.split("@")[0]}
│➜ *🧩Código:* ${serialUser}
│➜ *⏰Hora reg:* ${time}
├─────────────╾
│ *✅Total reg:* ${_verify.length} usuarios
└─────────────╾`
}

exports.cmdnf = (prefix, command) => {
	return`Comando *${prefix + command}* no encontrado\nintente escribir *${prefix}menu*`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`*「 ⬆️SUBISTE DE NIVEL🆙 」*

 ➼ 🐱Nombre: ${pushname}
 ➼ 🔢Numero: ${sender.split("@")[0]}
 ➼ ✨Exp: ${getLevelingXp(sender)}
 ➼ ⚠️Limites:  +3
 ➼ 🏆Rango :  ${role}
 ➼ 🆙Nivel: ${getLevel} —⊱ ${getLevelingLevel(sender)}

*Felicidadess 🎉🎉*`
}
 
exports.limitend = (pushname) => {
	return`*Hola ${pushname} su limite a terminado* 😕`
}

exports.limitcount = (limitCounts) => {
	return`*「 CUENTA DE LIMITE 」*
limites restantes: ${limitCounts}

*Nota:* puede obtener mas limites comprandolos o subiendo de nivel.`
}

exports.satukos = () => {
	return`*Agregar parámetro 1/habilitar o 0/deshabilitar*`
}

exports.cartera = (pushname, sender, uangkau) => {
	return`◪ *「 CARTERA 」*
├─ ❏ *🐱Nombre:* ${pushname}
├─ ❏ *#️⃣Numero:* wa.me/${sender.split("@")[0]}
└─ ❏ *💰Dinero:* ${uangkau}`
}
