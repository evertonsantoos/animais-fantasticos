function somaImagens() {
  const imgs = document.querySelectorAll("img");
  let soma = 0;
  imgs.forEach((imagem) => {
    soma = soma + imagem.offsetWidth;
  });

  console.log(soma);
}

window.onload = function () {
  somaImagens();
};

const links = document.querySelectorAll("a");

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;

  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, "Possui acessibilidade");
  } else {
    link, "Não possui acessibilidade";
  }
});
