// ================= LÓGICA DO CARROSSEL DO TOPO =================
let indiceAtual = 0;
const slides = document.querySelectorAll('.slide-produto');
let intervaloAutomatico;

function mostrarSlide(index) {
    if (slides.length === 0) return;

    slides.forEach(slide => slide.classList.remove('ativo'));

    if (index >= slides.length) {
        indiceAtual = 0;
    } else if (index < 0) {
        indiceAtual = slides.length - 1;
    } else {
        indiceAtual = index;
    }

    slides[indiceAtual].classList.add('ativo');
}

function mudarSlide(direcao) {
    mostrarSlide(indiceAtual + direcao);
    reiniciarTempo();
}

function iniciarCarrossel() {
    intervaloAutomatico = setInterval(() => {
        mostrarSlide(indiceAtual + 1);
    }, 4000);
}

function reiniciarTempo() {
    clearInterval(intervaloAutomatico);
    iniciarCarrossel();
}

// ================= LISTA E VITRINE DE PRODUTOS =================
const listaProdutos = [
    { nome: "DUCHA 4T BELLA DUCHA 220V 6800W BRANCA LORENZETTI", preco: 104.90, imagem: "img/bella_ducha_4t_220v_6800w.jpeg" },
    { nome: "CIMENTO CP2 50KG SUPREMO", preco: 36.99, imagem: "img/cimento_cp2_50kg_supremo.JPG" },
    { nome: "CIMENTO CP2 50 KG VOTORAN", preco: 38.99, imagem: "img/cimento_cp2_50kg_votoram.jpg" },
    { nome: "CARRINHO DE MAO CINZA TRAMONTINA", preco: 499.90, imagem: "img/carrinho_de_mao_tramontina_sinza.jpg" },
    { nome: "CARRINHO DE MAO VERMELHO", preco: 149.90, imagem: "img/carrinho_de_mao_vermelho.jpg" },
    { nome: "ABAFADOR RUIDOS CONCHA SPA-3 DELTAPLUS", preco: 36.90, imagem: "img/abafador_01.JPG" },
    { nome: "ABAJUR LUZ NOTURNA GOLFINHO 220V***", preco: 13.00, imagem: "img/abajur_01.JPG" },
    { nome: "ABRACADEIRA ACO LAMPADA FLUORESCENTE 20/40W", preco: 2.40, imagem: "img/abracadeira_01.jpg" },
    { nome: "ABRACADEIRA ANTENA INCA", preco: 5.99, imagem: "img/abracadeira_02.jpg" },
    { nome: "ABRACADEIRA CINTA PERFURADA ACO 10MT", preco: 34.00, imagem: "img/abracadeira_03.jpg" },
    { nome: "ABRACADEIRA ENCAIXE TUBO PVC SOLDA 25MM TIGRE", preco: 15.90, imagem: "img/abracadeira_04.jpg" },
    { nome: "ABRACADEIRA NYLON 2,5X100MM PCT BRANCA FERJA", preco: 8.80, imagem: "img/abracadeira_05.JPG" },
    { nome: "ALFANGE ESTREITO 22 S/C", preco: 44.15, imagem: "img/alffange_01.JPG" },
    { nome: "ALICATE BOMBA DAGUA 10 TRAMONTINA", preco: 84.90, imagem: "img/alicate_bomba_dagua_10_tramontina.jpg" },
    { nome: "TUBO SOLDAVEL 110MM 4 POL 6MT TIGRE", preco: 84.90, imagem: "img/tubosoldavel110mm6mtstigre.jpg" },
    { nome: "TUBO SOLDAVEL 25MM 6 METROS KRONA", preco: 31.90, imagem: "img/tubosoldavel_25mm_6_metros_krona.jpg" },
    { nome: "TUBO ESGOTO 100 MM KRONA", preco: 141.90, imagem: "img/tubo_esgoto_100_mm_krona.jpg" },
    { nome: "ASSENTO SANITARIO ALMOFADADO EMBORRACHADO BRANCO ASTRA", preco: 114.90, imagem: "img/assento_almofadado_astra_01.jpg" },
    { nome: "BACIA CAIXA ACOPLADA ONE BRANCA LORENZETTI", preco: 499.90, imagem: "img/bacia_caixa_acoplada_lorenzet_01.JPG" },
    { nome: "DISCO CORTE ACO 4 POL REMAX", preco: 3.99, imagem: "img/disco_corte_aco_4_pol_remax.JPG" }
];

const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');

if (productsGrid) {
    productsGrid.style.display = 'grid';
    productsGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))';
    productsGrid.style.gap = '20px';
    productsGrid.style.padding = '20px';
    productsGrid.style.fontFamily = 'Arial, sans-serif';
}

function renderGrid(produtos) {
    if (!productsGrid) return;
    productsGrid.innerHTML = '';
    
    if (produtos.length === 0) {
        productsGrid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 40px; color: #888;">Nenhum produto encontrado.</div>`;
        return;
    }

    produtos.forEach((item, index) => {
        const card = document.createElement('div');
        card.style.border = '1px solid #e0e0e0';
        card.style.borderRadius = '8px';
        card.style.padding = '16px';
        card.style.backgroundColor = '#ffffff';
        card.style.position = 'relative';
        card.style.display = 'flex';
        card.style.flexDirection = 'column';
        card.style.justifyContent = 'space-between';
        card.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)';
        
        card.innerHTML = `
            <span style="position: absolute; top: 12px; right: 12px; background-color: #0c1b9e; color: white; font-size: 10px; font-weight: bold; padding: 3px 6px; border-radius: 4px; text-transform: uppercase;">Preços podem variar</span>
            <div style="width: 100%; height: 150px; display: flex; align-items: center; justify-content: center; margin-bottom: 12px; margin-top: 15px;">
                <img src="${item.imagem}" alt="${item.nome}" style="max-width: 100%; max-height: 100%; object-fit: contain;">
            </div>
            <h3 style="font-size: 13px; color: #333; font-weight: 500; margin: 0 0 6px 0; min-height: 36px; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                ${item.nome}
            </h3>
            <span style="font-size: 11px; color: #888; display: block; margin-bottom: 6px;">Cód. 9100${100 + index}</span>
            <div style="display: flex; align-items: center; gap: 2px; margin-bottom: 15px;">
                <span style="color: #ff9800; font-size: 14px;">★★★★★</span>
                <span style="font-size: 11px; color: #666; margin-left: 4px;">(5)</span>
            </div>
            <div>
                <div style="font-size: 18px; font-weight: bold; color: #222;">
                    R$ ${item.preco.toFixed(2).replace('.', ',')} <span style="font-size: 12px; font-weight: normal; color: #555;">cada</span>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = listaProdutos.filter(item => 
            item.nome.toLowerCase().includes(term)
        );
        renderGrid(filtered);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    iniciarCarrossel();
    renderGrid(listaProdutos);
});