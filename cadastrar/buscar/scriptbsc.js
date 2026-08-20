const MODO_TESTE =true; // muda pra false quando for usar a API de verdade
const url='http://localhost:8080/moto';

/*
let api = fetch('http://localhost:8080/moto')
.then(response=>response.json())
.then(data=>{
    const tbody= document.querySelector("#motos tbody");
    tbody.innerHTML="";
    data.forEach(moto => {
        const row=document.createElement("tr");
        row.innerHTML=`
        <td>${moto.baixa ? "vendida":"disponivel"}</td>
        <td>${moto.id}</td>
        <td>${moto.modelo}</td>
        <td>${moto.placa}</td>
        <td>${moto.cidade}</td>
        <td>${moto.anofabricado+"/"+moto.anomodelo}</td>
        <td>${moto.cor}</td>
        <td>${moto.km}</td>
        <td>${moto.comprada}</td>
        <td>${moto.datacompra}</td>
        <td>${moto.vendida}</td>
        <td>${moto.datavenda}</td>
        `;        ;
    const dadosocultos=document.createElement("tr");
    dadosocultos.className = "row-details";
    dadosocultos.innerHTML=`
        <td colspan="12">
            <div class="details">
                ${moto.refcomprada==null?"":" ref. comprador : "+moto.refcomprada+" - "}
                ${moto.refvendida==null?"":" refvendida : "+ moto.vendida+" - "}
                preco compra : ${moto.valorcompra}- 
                preco venda : ${moto.valorvenda}- 
                jogo de roda : ${moto.jogoderoda?" tem":" nao tem"}-
                <button class="editar">editar</button>
            </div>
        </td>
    `;

        row.addEventListener("click",()=>{
            row.classList.toggle("open");
            dadosocultos.classList.toggle("open");
        })
        
        
        tbody.appendChild(row);
        tbody.appendChild(dadosocultos);
        console.log("tabela carregada");
    });
})
.catch(error => console.error("erro na tabela",error));
*/

//selecionar linha

document.querySelectorAll("#motos tbody tr").forEach(function(row) {

    setTimeout(() => {
        
        document.querySelector("#motos tbody").addEventListener("click", function(e) {
                const row = e.target.closest("tr");
                if (!row) return;

                console.log("linha clicada");

                document.querySelectorAll("#motos tbody tr").forEach(r => r.classList.remove("selected"));
                row.classList.add("selected");

                let dados = Array.from(row.cells).map(cell => cell.innerText);
               // document.getElementById("info").innerText = dados.join(", ");
                console.log("Linha selecionada:", dados);
            });

        }, 2000);
    });




const motosMock = [
    {
        baixa: 1,
        id: 1,
        modelo: "pop110i",
        placa: "ABC-1C34",
        uf:"se",
        cidade: "SIMAO DIAS",
        anof: "2025/2026",
        cor: "branca",
        km: 9876,
        comprada: "HONDA",
        datacompra: "2026-08-15",
        vendida: "joao",
        datavenda: "2026-08-18",
        refcomprada: null,
        refvendida: null,
        valorcompra: 13000,
        valorvenda: 14000,
        jogoderoda: true,
    },
    {
        baixa: 1,
        id: 2,
        modelo: "fan160es",
        placa: "QKB-9G57",
        uf:"ba",
        cidade: "PARIPIRANGA",
        anof: "2025/2026",
        cor: "branca",
        km: 5000,
        comprada: "HONDA",
        datacompra: "2026-08-15",
        vendida: "MARCOS",
        datavenda: "2026-08-18",
        refcomprada: "DE LAGARTO",
        refvendida: "DA SALOBRA",
        valorcompra: 13000,
        valorvenda: 14000,
        jogoderoda: true,
    }
];

async function carregarMotos() {
    if (MODO_TESTE) {
        // simula um delay, igual uma requisição real
        return new Promise((resolve) => {
            setTimeout(() => resolve(motosMock), 300);
        });
    } else {const resposta = fetch(url)
                .then(response=>response.json())
                .then(data=>{
                    const tbody= document.querySelector("#motos tbody");
                    tbody.innerHTML="";
                    data.forEach(moto => {
        const row=document.createElement("tr");
        row.innerHTML=`
        <td>${moto.baixa ? "vendida":"disponivel"}</td>
        <td>${moto.id}</td>
        <td>${moto.modelo}</td>
        <td>${moto.placa}</td>
        <td>${moto.cidade}</td>
        <td>${moto.anofabricado+"/"+moto.anomodelo}</td>
        <td>${moto.cor}</td>
        <td>${moto.km}</td>
        <td>${moto.comprada}</td>
        <td>${moto.datacompra}</td>
        <td>${moto.vendida}</td>
        <td>${moto.datavenda}</td>
        `;        ;
    const dadosocultos=document.createElement("tr");
    dadosocultos.className = "row-details";
    dadosocultos.dataset.id=moto.id;
    dadosocultos.innerHTML=`
        <td colspan="11 ">
            <div class="details">
                ${moto.refcomprada==null?"":" ref. comprador : "+moto.refcomprada+" - "}
                ${moto.refvendida==null?"":" refvendida : "+ moto.vendida+" - "}
                preco compra : ${moto.valorcompra}- 
                preco venda : ${moto.valorvenda}- 
                jogo de roda : ${moto.jogoderoda?" tem":" nao tem"}-
                <td><div class="editar"><button class="editar">editar</button></div></td>
            </div>   
        </td>
        
    `;

        row.addEventListener("click",()=>{
            row.classList.toggle("open");
            dadosocultos.classList.toggle("open");
        })
        
        
        tbody.appendChild(row);
        tbody.appendChild(dadosocultos);
        console.log("tabela carregada");
    });
})
.catch(error => console.error("erro na tabela",error));
        return await resposta.json();
    }
}

    async function renderizarMotos() {
    const motos = await carregarMotos();
    const tbody = document.querySelector("#motos tbody");
    tbody.innerHTML = ""; // limpa só uma vez, antes do loop

    motos.forEach(moto => {
        const row=document.createElement("tr");
        row.dataset.id=moto.id;
        row.className="modelo";
        row.innerHTML=`
        <td>${moto.baixa ? "vendida":"disponivel"}</td>
        <td>${moto.id}</td>
        <td>${moto.modelo}</td>
        <td>${moto.placa}</td>
        <td>${moto.cidade}</td>
        <td>${moto.anof}</td>
        <td>${moto.cor}</td>
        <td>${moto.km}</td>
        <td>${moto.comprada}</td>
        <td>${moto.datacompra}</td>
        <td>${moto.vendida}</td>
        <td>${moto.datavenda}</td>
        `;        
    const dadosocultos=document.createElement("tr");
    dadosocultos.className = "row-details";
    dadosocultos.dataset.id=moto.id;
    dadosocultos.innerHTML=`
        <td colspan="12">
            <div class="details">
                ${moto.refcomprada==null?"":" ref. comprador : "+moto.refcomprada+" - "}
                ${moto.refvendida==null?"":" refvendida : "+ moto.vendida+" - "}
                preco compra : ${moto.valorcompra}- 
                preco venda : ${moto.valorvenda}- 
                jogo de roda : ${moto.jogoderoda?" tem":" nao tem"}-
                <button class="editar">editar</button>
            </div>
        </td>
    `;

        row.addEventListener("click",()=>{
            row.classList.toggle("open");
            dadosocultos.classList.toggle("open");
        })
        
        
        tbody.appendChild(row);
        tbody.appendChild(dadosocultos);
        console.log("tabela carregada");
    });
}

renderizarMotos();



//clique do botao editar

document.querySelector("#motos tbody").addEventListener("click",(e)=>{
    if(e.target.classList.contains("editar")){
        const linha=e.target.closest("tr");
        const id = linha.dataset.id;
        console.log("o id e "+id);

        editar(id);
    }
})

async function editar(id){
    
    if(MODO_TESTE){
        const moto = motosMock.find(m=>m.id===Number(id));
        if(!moto){return console.error("moto nao encontrada");}
        preencherform(moto);
        
    }else{
        const resp= await fetch(url+"/"+id);
        const moto= await resp.json();
        if(!moto){return console.error("moto nao encontrada");}
        preencherform(moto);
        
    }
}

function sepmodelo(motomodelo){
    
    const maths= motomodelo.match(/^([a-zA-Z]+)(\d+)([a-zA-Z]*)$/)
    if (!maths) {
        return { modelo: "", cc: "", versao: "" };
    }
    return {
        modelo: maths[1].toLowerCase(),
        cc: maths[2],
        versao: maths[3].toLowerCase(),
    };
}



function preencherform(moto){
    console.log(" a moto é , ",moto);
    const{modelo,cc, versao} = sepmodelo(moto.modelo||"");
    const placa=moto.placa;
    const partes=placa.split("-");
    const letras=partes[0];
    const numeros=partes[1];
    const ano=moto.anof;
    const anop=ano.split("/");
    const anofab=anop[0];
    const anomod=anop[1];

    document.getElementById("modelo").value = modelo||"";
    document.getElementById("cc").value=cc||"";
    document.getElementById("versao").value=versao||"";
    document.getElementById("letra").value=letras||"";
    document.getElementById("numeros").value=numeros||"";
    document.getElementById("uf").value=moto.uf;
    document.getElementById("cidade").value=moto.cidade||"";
    document.getElementById("km").value=moto.km||"";
    document.getElementById("cor").value=moto.cor||"";
    document.getElementById("anofabricado").value=anofab||"";
    document.getElementById("anomodelo").value=anomod||"";

    document.getElementById("comprador").value=moto.comprada||"";
    document.getElementById("refcomprador").value=moto.refcomprada||"";
    document.getElementById("vlcomp").value=moto.valorcompra||0;
    document.getElementById("dtcomp").value=moto.datacompra||"";

    const baixada=!!moto.baixa;
    document.getElementById("btnvenda").checked=baixada;
    document.getElementById("vendida").value=moto.vendida||"";
    document.getElementById("refvendida").value=moto.refvendida||"";
    document.getElementById("valorvenda").value=moto.valorvenda||"";
    document.getElementById("datavenda").value=moto.datavenda||"";
    const jgroda=!!moto.jogoderoda;
    document.getElementById("jogoderoda").checked=jgroda;

    document.getElementById("modeloeditar").showModal();
}


// fechar modal no botão cancelar
document.getElementById("btnCancelar").addEventListener("click", () => {
    document.getElementById("modeloeditar").close();
});