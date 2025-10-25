const botao = document.getElementById('teste1');
const div = document.getElementById('teste5');

botao.addEventListener('click', () => {
  div.classList.toggle('ativo');
});