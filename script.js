fetch("http://localhost:3000/quotation")
  .then((response) => response.json())
  .then((json) => console.log(json));
