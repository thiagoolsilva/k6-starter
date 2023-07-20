import http from "k6/http";

function randomNumber(number) {
  return Math.floor(Math.random() * number)
}

export default function () {
  let seed = randomNumber(19)
  console.log(seed);

  let body = {
    "nome": "Fulano da Silva",
    "email": `beltrano${seed}@qa.com.br`,
    "password": "teste",
    "administrador": "true"
  }
  let response = http.post("http://localhost:3000/usuarios", body);
}