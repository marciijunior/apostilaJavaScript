const atualizarLista = (listaOriginal, indiceParaRemover, itemParaAdicionar) => {
    const listaFiltrada = listaOriginal.filter((elemento, i) => {
        return i !== indiceParaRemover;
    });

    const listaFinal = [...listaFiltrada, itemParaAdicionar];

    return listaFinal;
};

const minhaListaDeCompras = ["maçã", "banana", "laranja", "pão"];
const indiceARemover = 2;
const itemAAdicionar = "leite";

const listaAtualizada = atualizarLista(minhaListaDeCompras, indiceARemover, itemAAdicionar);

console.log("Lista original:", minhaListaDeCompras);
console.log("Lista final:", listaAtualizada);