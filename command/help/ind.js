exports.limitcount = (prem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Maaf ${pushname} limit hari ini telah habis\nlimit di reset setiap jam 24:00`
}
exports.noregis = (pushname) =>{
	return` 🙅‍♀️ Halo ${pushname} lu belum daftar. Ketik .daftar dulu`
	}
exports.regis = () =>{
	return` Lu udah daftar 😑`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *PENDAFTARAN BERHASIL*

• Nama : ${pushname}
• Nomor : ${sender.split("@")[0]}
• Waktu : ${time}
• Serial : ${serialUser}
• Total User : ${totalUser.length}

Thanks yak udah daftar, TETAP PATUHI RULES GRUB😈.
`
	}
exports.owner = (botname) =>{
	return` 🙅‍♀️ Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`🙅‍♀️ Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`⚠️ Bot bukan admin grup`
	}
exports.err = () =>{
	return`⚠️ Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`🙅‍♀️ Command khusus di dalam group`
	}

exports.wait = () =>{
	return`⏳ Sedang di proses ~`
	}
exports.ok = () =>{
	return` ✓ Oke done ~`
	}
exports.welcome = () =>{
	return`Jangan Lupa Baca deskripsi~
⌯ָ   ֙֙𝘽𝘼𝙍𝙊𝙉 𝙎𝙏𝙊𝙍𝙀᭄
╰─ ᝬ _Patuhi Rules Group Ya_  😈`
      }
exports.leave = () =>{
	return`
│
╰─ ᝬ _Balik Lagi Wajib Donasi Ya_ >_<`
}
exports.menu = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *Im BOT EKSEKUTOR*
│PATUHI RULES GRUB
├ *Group*
│ 友 ${prefix}antilink 1 / 0
│ 友 ${prefix}hidetag
│ 友 ${prefix}linkgrup
│ 友 ${prefix}tagall
│ 友 ${prefix}kick
│ 友 ${prefix}setdesc
│ 友 ${prefix}setname
╰─⬣
`
	}
