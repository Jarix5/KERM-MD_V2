//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "237650564445";
global.owner = process.env.OWNER_NUMBER || "237656520674";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/kbc224.mp4,https://files.catbox.moe/dhii42.mp4,https://files.catbox.moe/lgj91g.mp4,https://files.catbox.moe/hvjoe6.mp4,https://files.catbox.moe/4ogeum.mp4,https://files.catbox.moe/0cmaxl.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kgtech-v2-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUI3QVRmL3MrTUNWV3dnM1RXQ2hETzBCZWttd09qaEQ3MlB3NGplcVJsTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTBZS09zaWJURmtsLzlsZStRVHltSWN0bW1aRzRlRkllZTNGQW1MRkkxOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZS0tZeS9oemhNUC9TVjk1NDkwRDZmdHFTU2ZjZjNvUWZhbDc3ZWlhK0Y4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRdFFhM2hxRWFvaDFtdjdNWlJwdUVJTENFUTRlRGQrRDFqVXVTMldDdkdnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndQVk94N0pNaW5Tc0ZRNUgyS3R2cE5FRHVCRlMyQXV1UVpNdlB4bXFYV1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im8vbTR1VEpQSUhtOHpmQk00YW4zdytoUXlkaC9URDNLMDVlTmczNGh2VG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUo4ZVNrUkNKU3hGbEloc0RGa1B1dzBSU2V6V0Rlb1pJRm12TlZvZE5uRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid2lxTlQwUTRDUWZpdnpRNjVsejRCbmlEbU5ESENQaGoxL0M0clozY0kzOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdGd0Z5ZVJuaWZDQUM1RS8rYnhIVUR5eThwMlE0OXZEQnBidzJHNklaMlVNT013Y3Uzb3FySFRQVWtHUlBaa0NsM0R3ejY3bGM4MWpIMFZpeWg0UEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzEsImFkdlNlY3JldEtleSI6IlhEMXJrYlE5cjJXTjRRdUgyc2pQL2lHN2FTa3RsNlNhYlR2L0dtcS91TW89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImFmZ3hZYXI3UmsyYndnZlllcDlMcUEiLCJwaG9uZUlkIjoiNTExNjJmZTUtN2Q3NC00NmIzLTkyNzEtNGEwMDA3MjNiYmE1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikd0Z21JeFo2YmhRSHpkRGNrMzltd2dXK0kxaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRG1GcEFYa1I2WFd5VERKY3pqSzhxRk5iQ0U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRU0xWk1aTVYiLCJtZSI6eyJpZCI6IjM5MzcxNjkwNzg1Nzo2MEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTmZYL3NFQkVMemdocnNHR0NVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRkhFL2s3UnMrMnhlcEJWZWRMN3BDWERadThTNnMwdWFrSjFPTDZCMTBWYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMGkydWcrVHJpdW8zcmdMRFVzSi9UMk92Y3RkUmtER0pMYWJzSHhTR3ROTkc5Wk5hWCtsbUI3UmRJMTdWakdqWDRnZDlKZTJ6a2VoaThhMkRBY2lUQlE9PSIsImRldmljZVNpZ25hdHVyZSI6Imk5RVdVRXE5ZUMyZ1RFQ0VIcFpoSHFXVkhycEEycUhUL3p3em9tTndYZ0lOc1FURk90bjZGVFFhenR2b0NpMW5wTk5JMHZkQmV3K3NUdmwrTnNBMEFBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMzkzNzE2OTA3ODU3OjYwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJSeFA1TzBiUHRzWHFRVlhuUys2UWx3MmJ2RXVyTkxtcENkVGkrZ2RkRlgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzQ0NTUzNzAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQmxSIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "亗𝑴𝒖𝒛𝒂𝒏༒ 𝑺𝒖𝒌𝒖𝒏𝒂✰✭—͟͟͞͞𖣘",
  packname: process.env.PACK_NAME || "亗𝑴𝒖𝒛𝒂𝒏༒ 𝑺𝒖𝒌𝒖𝒏𝒂✰✭—͟͟͞͞𖣘",
  botname: process.env.BOT_NAME || "亗𝑴𝒖𝒛𝒂𝒏༒ 𝑺𝒖𝒌𝒖𝒏𝒂✰✭—͟͟͞͞𖣘",
  ownername: process.env.OWNER_NAME || "亗𝑴𝒖𝒛𝒂𝒏༒ 𝑺𝒖𝒌𝒖𝒏𝒂✰✭—͟͟͞͞𖣘",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
