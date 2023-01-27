module.exports = {
    aliases: ["pi"],
    run: async (client, message, args) =>{
     message.reply(`Meu ping atual é ${client.ws.ping}`)
    }
   }