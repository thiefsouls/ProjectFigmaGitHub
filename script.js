// Adiciona um ouvinte de evento 'submit' ao formulário com o id 'loginForm'
document.getElementById('send-btn').addEventListener('click', (event) => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('message').value;
/* Para gerar um SecureToken para o EmailJS, você pode seguir os seguintes passos:
Acesse o site do EmailJS.
Crie uma conta gratuita se ainda não tiver uma.
Após fazer login, clique no botão “Encrypt your SMTP credentials” e preencha os campos necessários.
Depois disso, pressione “Generate security token”. O token gerado pode ser usado em sua função JS 
no lugar das configurações do servidor SMTP.*/
  Email.send({
    SecureToken:'', //Substitua 'dentro das aspas' pelo token que você gerou
    to:'', //Substitua '' pelo endereço de email para o qual você deseja enviar
    From:'', //Substitua '' pelo seu endereço de email
    Subject:'', //Substitua '' pelo assunto do email
    Body:`Email do Site <br/> Nome: ${name} <br/> Email: ${email} <br/> Mensagem: ${message}`,
      }).then((message) => {
        if (message === 'ok'){
          alert('Email enviado com sucesso');
        } else {
          alert('Erro ao enviar email');
      }      
  });
});
