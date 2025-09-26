const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0Y1MGFVMzNESjlsNDM4eG9SQzJCK0w5UmozNldIU0RRTDlyOUZxRjlFVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEZxTk9jaXZNS1R1K0lOVVFuTXJOSG5obS90REdnRGFEMU9IWXZiT1hGUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnR2psUVE4MmY2Zy9ocnpGUXJNN1dFdHdlTVFVeW4yMzNtaUY4MzhCWFhVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwN0ZHTDZ3MXhzbkU5QXVuZVhPN1l2WDBrUHU4TGxpRHA0SFl0Uk1NVWc0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNDbTZaT0FaWTFjLy9Jc1NYSVE5aEpHMWpCdENUWEYrRExXbTNZSVVhRmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZmRml0cS8vSUJWT1VkS3Q4MHhVNDJKcmlvSHhTM1g0N21hQlJHQUpQME09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUQyY1gwcDN3VlFpUkMyS0pyNjZFMHVqMnQ0YlFEcExSWVN0OWdlQ3hYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZTdWdzRjRzg3MXhvbFRsZ3BoRE5LOHppbzNHbHQ4ZSsyRzY4YXVJRk93OD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlsOXEzTTdERHJTazJhc1JXSm03U1hySzI4azRGOXN1bUdQUjhaS010Y2hYcWpBTmcwb0x3K2x4NTQ0cWd5SHpYTFBMZHY1SXFkd0xLSTN0SFBwdEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzAsImFkdlNlY3JldEtleSI6IlF5R1YvbnNvZFJaWGFqbUp3TjBvQ3JxaWRicUxPN1VERmhrTkN4aHI0cnc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMzE5NzAxMDUyNTQzMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQ0QxQTQwRkRBODQzMjNENENGQkQ1NTAxMzEzRkFGRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU4ODg2MDQ3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIzMTk3MDEwNTI1NDMxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDRDIwQzMxMkM3NkFEMUFCQjVCM0U5NzhEOUUwQTBFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTg4ODYwNDd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjMxOTcwMTA1MjU0MzFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUMwNzQxOUE3OTEwQkYwNEFDQzZFQjU3NUMyNTBDMTcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1ODg4NjA1MX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiUVNNSjFaOTEiLCJtZSI6eyJpZCI6IjMxOTcwMTA1MjU0MzE6MkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI2OTA4ODg5NTA0NTc5NzoyQGxpZCIsIm5hbWUiOiLwnZCE8J2fkSDwnZCA8J2Qh/CdkIzwnZCI8J2QiCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnJWdk5RREVKcngyY1lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiU1RQSGZXd3QvRnJkTE5BeEN0YTM1WE93aXE3MGpTSDMzaisvMEIyck1tbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaWxydzhiQUZKS3RRZTZQU1pRRFNMV3Ewb0h2TkR2dEUrWVFILzVyYXR0SDI4TFlldkdEdWJtMTE5M1lmL3J2MWcwanBGTWkzZUNVSnVzaHVBSC9JQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IjcvcnN4K2MxbFVuTFFrZXEvY01panAvb1EwTzFqKytEdW1YaXl0bnFPcW9PNGtyTnExRHF1OVpwWDI0N0I2RlEybXJhdlJ5ZkFxSkV2azdITWMxV0N3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMzE5NzAxMDUyNTQzMToyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVrengzMXNMZnhhM1N6UU1Rcld0K1Z6c0lxdTlJMGg5OTQvdjlBZHF6SnEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1ODg4NjA0NSwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVYeSJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY E3 AHMII☠️⚜️🫀*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/lcpy9f.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "E3 AHMII",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "Arslan_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ArslanMD Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 Arslan_MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/lcpy9f.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*Arslan_MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
