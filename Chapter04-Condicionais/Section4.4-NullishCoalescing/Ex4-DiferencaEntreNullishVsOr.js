const valorComZero = 0;
console.log(valorComZero || "Valor padrão"); // "Valor padrão" → Trata 0 como falso
console.log(valorComZero ?? "Valor padrão"); // 0 → Mantém 0
