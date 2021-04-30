Nesse exato momento o banco de dados foi conectado e está funcionando belezinha
Eu acho que é um bom momento pra vc tentar refazer. Tudo a contento
Aula 5 começa assim npm install cookie-parser express-session express-flash --save
Vamos começar a trabalhar com mensagens para dar um feedback para usuário se as coisas deram ou não certo
Na aula ele diz que o slug está ficando com a letra maiuscula como no título, mas no meu não está, por isso eu não vou fazer essa alteração
mas caso comece a dar esse problema vc faz
  this.slug = slug(this.title, {lower:true});
  OBS Na aula 8 quando eu acrescento essa linha cima ele da erro mas não para de funcionar, nunca vi isso
  app.use(express.static(__dirname+'/public')) Isso torna essa pasta publica é estática a pasta pubic não precisa ser nomeada pode partir dela