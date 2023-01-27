const fs = require("fs")

module.exports = async (client) => {

fs.readdir(`./ComandosPrefix/`, (erro, pasta) => {
  pasta.forEach(subpasta => {
fs.readdir(`./ComandosPrefix/${subpasta}/`, (erro, arquivos) => {
  arquivos.forEach(arquivo => {  
  if(!arquivo?.endsWith('.js')) return;
  comando = require(`../ComandosPrefix/${subpasta}/${arquivo}`);
client.prefixCommands.set(arquivo.replace(/.js/g, ""), comando); 
    if(comando?.aliases?.length){
      comando.aliases.forEach(cmd => client.prefixCommands.set(cmd, comando))
    }
  });
    });
  });
})

fs.readdir(`./Eventos/`, (erro, pasta) => {
  pasta.forEach(subpasta => {
    fs.readdir(`./Eventos/${subpasta}/`, (erro, arquivos) => {
      arquivos.forEach(arquivo => {
        if (!arquivo.endsWith('.js')) return; require(`../Eventos/${subpasta}/${arquivo}`);
      });
    });
  });
});
};
