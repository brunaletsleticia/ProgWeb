const map = L.map('map').setView([-15.7942, -47.8822], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

let marcador;

const carrinho = [];

// function adicionarCarrinho(livro) {
const adicionarCarrinho = (livro) => {
    carrinho.push(livro);
    atualizarCarrinho();
    alert(`Livro "${livro}" adicionado ao carrinho!`);
}

//function atualizarCarrinho() {
const atualizarCarrinho = () => {
    const contador = document.getElementById('carrinho-contador');
    const lista = document.getElementById('itens-carrinho');
    contador.innerText = carrinho.length;
    lista.innerHTML = '';
    carrinho.forEach((livro) => {
    const item = document.createElement('li');
    item.textContent = livro;
    lista.appendChild(item);
    });
}

//function toggleCarrinho() {
const toggleCarrinho = () => {
    const carrinhoEl = document.getElementById('carrinho');
    carrinhoEl.style.display = carrinhoEl.style.display === 'block' ? 'none' : 'block';
}

//function esvaziarCarrinho() {
const esvaziarCarrinho = () => {
    carrinho.length = 0;
    atualizarCarrinho();
}


//function localizarEndereco() {
const localizarEndereco = () => {
    const cep = document.getElementById('cep').value;
    const endereco = document.getElementById('endereco').value;

    if (!cep || !endereco) {
        alert("Por favor, preencha o CEP e o endereço completo.");
        return;
    }

    const query = encodeURIComponent(`${endereco}, ${cep}, Brasil`);
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`)
        .then(res => res.json())
        .then(data => {
            if (data.length > 0) {
                const { lat, lon } = data[0];
                map.setView([lat, lon], 16);

                if (marcador) map.removeLayer(marcador);
                marcador = L.marker([lat, lon]).addTo(map)
                    .bindPopup("Endereço de entrega").openPopup();

                const distanciaKm = distancia(LCC3, [parseFloat(lat), parseFloat(lon)]);
                mostrarCardEntrega(distanciaKm);
            } else {
                alert("Endereço não encontrado. Verifique os dados.");
            }
        })
        .catch(err => {
            console.error(err);
            alert("Erro ao buscar localização. Tente novamente mais tarde.");
        });
}

const LCC3 = [-7.2135, -35.9084];

const distancia = ([latitude1, longitude1], [letitude2, longitude2]) => {
    const radianos = deg => deg * Math.PI / 180;
    const RaioTerra = 6371;
    const dLat = radianos(letitude2 - latitude1);
    const dLon = radianos(longitude2 - longitude1);
    const curvaturaTerra = Math.sin(dLat / 2) ** 2 +
              Math.cos(radianos(latitude1)) * Math.cos(radianos(letitude2)) *
              Math.sin(dLon / 2) ** 2;
    const angulo = 2 * Math.atan2(Math.sqrt(curvaturaTerra), Math.sqrt(1 - curvaturaTerra));
    return RaioTerra * angulo;
};

const mostrarCardEntrega = (distanciaKm) => {
  const custo = distanciaKm * 1.20;
  document.getElementById('distancia-entrega').textContent = distanciaKm.toFixed(2);
  document.getElementById('custo-entrega').textContent = custo.toFixed(2);
  document.getElementById('card-entrega').style.display = 'block';
};
;

