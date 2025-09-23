const atualizarListaManualmente = (listaOriginal, indiceParaRemover, itemParaAdicionar) => {
    const novaLista = [];
    
    for (let i = 0; i < listaOriginal.length; i++) {
        if (i !== indiceParaRemover) {
            novaLista.push(listaOriginal[i]);
        }
    }

    novaLista.push(itemParaAdicionar);

    return novaLista;
};

const minhaListaDeCompras = ["maçã", "banana", "laranja", "pão"];
const indiceARemover = 2;
const itemAAdicionar = "leite";

const listaAtualizada = atualizarListaManualmente(minhaListaDeCompras, indiceARemover, itemAAdicionar);

console.log("Lista original:", minhaListaDeCompras);
console.log("Lista final (versão manual):", listaAtualizada);