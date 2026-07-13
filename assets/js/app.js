

    // BANCO DE IMÓVEIS

    const imoveis = [

      {
        id:1,
        nome:"Auth Cobertura",
        categoria:"lancamento",
        cidade:"Curitiba",
        bairro:"Batel",
        tipo:"Cobertura",
        valor:950000,

        areaTotal:280,
        areaConstruida:210,
        quartos:4,
        suites:3,
        banheiros:5,
        vagas:3,

        imagem:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
        descricao:"Cobertura moderna com acabamento premium."
      
    },

      {
        id:2,
        nome:"Sky Residence",
        categoria:"destaque",
        cidade:"Curitiba",
        bairro:"Centro",
        tipo:"Apartamento",
        valor:650000,
        
        areaTotal:280,
        areaConstruida:210,
        quartos:4,
        suites:3,
        banheiros:5,
        vagas:3,

        imagem:"https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop",
        descricao:"Apartamento moderno próximo ao centro."
      },

      {
        id:3,
        nome:"Garden Premium",
        categoria:"pronto",
        cidade:"Curitiba",
        bairro:"Água Verde",
        tipo:"Casa",
        valor:1200000,
        
        areaTotal:280,
        areaConstruida:210,
        quartos:4,
        suites:3,
        banheiros:5,
        vagas:3,

        imagem:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
        descricao:"Casa sofisticada com piscina e área gourmet."
      },

      {
        id:4,
        nome:"Diamond Tower",
        categoria:"destaque",
        cidade:"São Paulo",
        bairro:"Moema",
        tipo:"Apartamento",
        valor:890000,
        
        areaTotal:280,
        areaConstruida:210,
        quartos:4,
        suites:3,
        banheiros:5,
        vagas:3,

        imagem:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop",
        descricao:"Empreendimento alto padrão em localização privilegiada."
      },

      {
        id:5,
        nome:"Lake House",
        categoria:"pronto",
        cidade:"Florianópolis",
        bairro:"Jurerê",
        tipo:"Casa",
        valor:2100000,
        
        areaTotal:280,
        areaConstruida:210,
        quartos:4,
        suites:3,
        banheiros:5,
        vagas:3,

        imagem:"https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1200&auto=format&fit=crop",
        descricao:"Casa luxuosa próxima à praia."
      },
      {
        id:6,
        nome:"Lake House",
        categoria:"lancamento",
        cidade:"Florianópolis",
        bairro:"Jurerê",
        tipo:"Casa",
        valor:2100000,
        
        areaTotal:280,
        areaConstruida:210,
        quartos:4,
        suites:3,
        banheiros:5,
        vagas:3,

        imagem:"https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1200&auto=format&fit=crop",
        descricao:"Casa luxuosa próxima à praia."
      },
      {
        id:7,
        nome:"Sky Residence",
        categoria:"destaque",
        cidade:"Curitiba",
        bairro:"Centro",
        tipo:"Apartamento",
        valor:650000,
        
        areaTotal:280,
        areaConstruida:210,
        quartos:4,
        suites:3,
        banheiros:5,
        vagas:3,

        imagem:"https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop",
        descricao:"Apartamento moderno próximo ao centro."
      },
      {
        id:8,
        nome:"Auth Cobertura",
        categoria:"lancamento",
        cidade:"Curitiba",
        bairro:"Batel",
        tipo:"Cobertura",
        valor:950000,
        
        areaTotal:280,
        areaConstruida:210,
        quartos:4,
        suites:3,
        banheiros:5,
        vagas:3,

        imagem:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
        descricao:"Cobertura moderna com acabamento premium."
      },
      {
        id:9,
        nome:"Diamond Tower",
        categoria:"destaque",
        cidade:"São Paulo",
        bairro:"Moema",
        tipo:"Apartamento",
        valor:890000,
        
        areaTotal:280,
        areaConstruida:210,
        quartos:4,
        suites:3,
        banheiros:5,
        vagas:3,

        imagem:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop",
        descricao:"Empreendimento alto padrão em localização privilegiada."
      },
      {
        id:6,
        nome:"Lake House",
        categoria:"lancamento",
        cidade:"Florianópolis",
        bairro:"Jurerê",
        tipo:"Casa",
        valor:2100000,
        
        areaTotal:280,
        areaConstruida:210,
        quartos:4,
        suites:3,
        banheiros:5,
        vagas:3,

        imagem:"https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1200&auto=format&fit=crop",
        descricao:"Casa luxuosa próxima à praia."
      }

      

    ];


    // ELEMENTOS

    const cardsContainer = document.getElementById("cardsContainer");

    const btnBuscar = document.querySelector(".btn-search");


    // mostrar Categoria
    function mostrarCategoria(containerId, categoria, limite = 4) {

    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    const lista = imoveis
        .filter(imovel => imovel.categoria === categoria)
        .slice(0, limite);

    lista.forEach(imovel => {
        container.innerHTML += criarCard(imovel);
    });

}
mostrarCategoria("sessaoLancamentos", "lancamento");
mostrarCategoria("sessaoDestaque", "destaque");


    // CRIAR CARD

   function criarCard(imovel){

  return `

    <div class="card">

      <img src="${imovel.imagem}" alt="${imovel.nome}">

      <div class="card-content">

        <h3>${imovel.nome}</h3>

        <div class="card-info">
          ${imovel.tipo} • ${imovel.bairro} • ${imovel.cidade}
        </div>

        <p>
          ${imovel.descricao}
        </p>

        <div class="card-features">

          <div class="feature">
            <i class="fa-solid fa-vector-square"></i>
            <span>${imovel.areaTotal} m²</span>
          </div>

          <div class="feature">
            <i class="fa-solid fa-house"></i>
            <span>${imovel.areaConstruida} m²</span>
          </div>

          <div class="feature">
            <i class="fa-solid fa-bed"></i>
            <span>${imovel.quartos}</span>
          </div>

          <div class="feature">
            <i class="fa-solid fa-hotel"></i>
            <span>${imovel.suites}</span>
          </div>

          <div class="feature">
            <i class="fa-solid fa-bath"></i>
            <span>${imovel.banheiros}</span>
          </div>

          <div class="feature">
            <i class="fa-solid fa-car"></i>
            <span>${imovel.vagas}</span>
          </div>

        </div>

        <div class="price">
          R$ ${imovel.valor.toLocaleString('pt-BR')}
        </div>

      </div>

    </div>

  `;
}


    // MOSTRAR IMÓVEIS

    function mostrarImoveis(lista) {

    const limite = 4;
    let expandido = false;

    function renderizar() {

        cardsContainer.innerHTML = "";

        if (lista.length === 0) {

            cardsContainer.innerHTML = `
                <div style="
                    grid-column:1/-1;
                    background:#fff;
                    padding:60px 20px;
                    border-radius:14px;
                    text-align:center;
                ">
                    <h2>Nenhum imóvel encontrado.</h2>
                </div>
            `;

            return;
        }

        // Exibe apenas 4 ou todos
        const imoveis = expandido ? lista : lista.slice(0, limite);

        imoveis.forEach(imovel => {
            cardsContainer.innerHTML += criarCard(imovel);
        });

        // Se houver mais de 4 imóveis, adiciona o botão
        if (lista.length > limite) {

            cardsContainer.innerHTML += `
                <div style="
                    grid-column:1/-1;
                    display:flex;
                    justify-content:center;
                    margin-top:30px;
                ">
                    <button id="btnVerMais" class="btn-ver-mais">
                        ${expandido ? "Ver menos" : "Ver mais"}
                    </button>
                </div>
            `;

            document.getElementById("btnVerMais").addEventListener("click", () => {
                expandido = !expandido;
                renderizar();
            });

        }

    }

    renderizar();

}
    // BUSCA

    function buscarImoveis(){

      const tipo = document.getElementById("tipo").value;

      const cidade = document.getElementById("cidade").value;

      const bairro = document.getElementById("bairro").value;

      const valorMin = document.getElementById("valorMin").value;

      const valorMax = document.getElementById("valorMax").value;


      const resultado = imoveis.filter(imovel => {

        const matchTipo =
          tipo === "" || imovel.tipo === tipo;

        const matchCidade =
          cidade === "" || imovel.cidade === cidade;

        const matchBairro =
          bairro === "" || imovel.bairro === bairro;

        const matchValorMin =
          valorMin === "" || imovel.valor >= Number(valorMin);

        const matchValorMax =
          valorMax === "" || imovel.valor <= Number(valorMax);

        return (
          matchTipo &&
          matchCidade &&
          matchBairro &&
          matchValorMin &&
          matchValorMax
        );

      });


      mostrarImoveis(resultado);

    }


    // EVENTO

    btnBuscar.addEventListener("click", buscarImoveis);


    // CARREGAR TODOS

    mostrarImoveis(imoveis);

