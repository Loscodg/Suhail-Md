const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263776926048";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_36_05_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE3LFxuICAgICAgICA1NixcbiAgICAgICAgMTg2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDc5LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODMsXG4gICAgICAgIDk5LFxuICAgICAgICAyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjEwLFxuICAgICAgICA2NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1NixcbiAgICAgICAgMjMyLFxuICAgICAgICA2NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU3LFxuICAgICAgICA0NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNixcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDc4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3LFxuICAgICAgICAxODAsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNixcbiAgICAgICAgNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTksXG4gICAgICAgIDExNSxcbiAgICAgICAgODAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDQzLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAzLFxuICAgICAgICA0OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDM2LFxuICAgICAgICA2LFxuICAgICAgICA5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQxLFxuICAgICAgICA1NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDg4LFxuICAgICAgICA1MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTY5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDMwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzksXG4gICAgICAgIDU5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDQsXG4gICAgICAgIDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRWFFjSnhpUXdkYlUyWnJGcFIvR3M0NkFEcFJjSTVOMlVFQjFpQXp2RkJBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2Mzc3NjkyNjA0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOUFBRDExRjA3NkIzQzAyNENDRUJGMDRGRTM5QTZCMEZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2Mzc0MTgwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzc2OTI2MDQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDODI4NzU2RDExREU1OUQxRjAxRkFFQTAyQjI5MDRBMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTYzNzQxODBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia09xOWVqWDZRR0t2VW9TNmZVZ0J3QVwiLFxuICBcInBob25lSWRcIjogXCIzY2FmNDNhMy0xMDkxLTRiNzctOTk1ZS03MTkwMzEwMGQ4ZmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTQsXG4gICAgICAxOTYsXG4gICAgICAyNTIsXG4gICAgICAyMTcsXG4gICAgICAxNDgsXG4gICAgICAyNDgsXG4gICAgICAyOSxcbiAgICAgIDgzLFxuICAgICAgMjAwLFxuICAgICAgNjEsXG4gICAgICA4NSxcbiAgICAgIDE1NCxcbiAgICAgIDE3OCxcbiAgICAgIDQyLFxuICAgICAgMjUxLFxuICAgICAgMjIwLFxuICAgICAgMTUxLFxuICAgICAgOCxcbiAgICAgIDk4LFxuICAgICAgMjE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOCxcbiAgICAgIDUsXG4gICAgICA3MyxcbiAgICAgIDk4LFxuICAgICAgMTkxLFxuICAgICAgMjMxLFxuICAgICAgMTg4LFxuICAgICAgMTY1LFxuICAgICAgMTI0LFxuICAgICAgMTY4LFxuICAgICAgMjUwLFxuICAgICAgMjAsXG4gICAgICA2LFxuICAgICAgMTk4LFxuICAgICAgMTU3LFxuICAgICAgMjU0LFxuICAgICAgMjQ0LFxuICAgICAgMTg3LFxuICAgICAgMjMzLFxuICAgICAgMTA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlk3SDdIUkpUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3NzY5MjYwNDg6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM3MTk4Njc4OTcwNTcyOjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwifkzDqMOyw7Fow6ByZPCfpoF+XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjdJcnRVR0VKeVZ0N0lHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZeG9XdzJ6cENySjRINHZYS2I2TDliVU43S0liQ2VxUU5vRlczVnRWQ2djPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImhqZDU4d2NEREtSVGRiVDNzVCtNMmtrTndRTm1OWFUrOUtvcHRwK21nTXRpZ2UrSTM2bFJ4TlJDQmpZOWJqK2Q3WDFwS3dxZ3JFQnYzK0I1ckZaTUN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInpOWG92bGF5SHNDR2pCaWp1aEt1bzhtNm5RZS9RZ0kxTTQyK3ZLaTVYSGt1WDFKL0tvT2pYbU8zOU5NWWt1SGt3bXRhTXpxTVgvNEpBNkEvaWpYamhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc3NjkyNjA0ODozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjM3NDE3NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFKTVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQUpNLmpzb24iOiAie1wia2V5RGF0YVwiOlwidCtFL1ZpODB0R0c3MjBQRTV0RjNFQ2ozdm1TdGdualB0SlA1YWZSQ2lzTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzg5NjMzNjMwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTYxOTI5MTIwNDZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
