function convertHTML(str) {
    let items = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };

    return str.split("").map(entity => items[entity] || entity).join("");
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Schindler's List"));