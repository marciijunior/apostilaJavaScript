const cpfs = [
    "34523453453",
    "52435234523",
    "74657721431",
    "15435275822",
    "82435745172",
];

const result = cpfs.map((cpf) =>
    typeof cpf === "string" ? cpf : cpf.toString()
);

console.log(result);
