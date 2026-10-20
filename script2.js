let carrinho = [];
let filtroAtual = 'todos';

function filtrar() {
  const busca = document.getElementById('search').value.toLowerCase();
  document.querySelectorAll('.produto').forEach(produto => {
    const nome = produto.querySelector('h3').textContent.toLowerCase();
    const categoriaCerta = filtroAtual === 'todos' || produto.dataset.categoria === filtroAtual;
    produto.style.display = nome.includes(busca) && categoriaCerta ? 'block' : 'none';
  });
}
function categoria(nome) { filtroAtual = nome; filtrar(); }
function favoritar(botao) {
  botao.classList.toggle('marcado');
  botao.textContent = botao.classList.contains('marcado') ? '♥ Favoritado' : '♡ Favoritar';
}
function adicionar(nome, preco) {
  carrinho.push({nome: nome, preco: preco});
  document.getElementById('quantidade').textContent = carrinho.length;
  alert(nome + ' foi adicionado ao carrinho!');
}
function abrirCarrinho() {
  document.getElementById('carrinho').style.display = 'flex';
  let total = 0;
  document.getElementById('itens').innerHTML = carrinho.length ? carrinho.map(item => {
    total += item.preco;
    return '<p>' + item.nome + ' — R$ ' + item.preco.toFixed(2).replace('.', ',') + '</p>';
  }).join('') : '<p>Seu carrinho está vazio.</p>';
  document.getElementById('total').textContent = total.toFixed(2).replace('.', ',');
}
function fecharCarrinho() { document.getElementById('carrinho').style.display = 'none'; }
function finalizar() {
  if (!carrinho.length) { alert('Adicione algum produto primeiro.'); return; }
  alert('Pedido demonstrativo finalizado!');
  carrinho = [];
  document.getElementById('quantidade').textContent = '0';
  abrirCarrinho();
}
function copiarCupom() {
  navigator.clipboard.writeText('AMOR20').then(() => alert('Cupom AMOR20 copiado!')).catch(() => alert('Use o código AMOR20 no seu pedido.'));
}