export default function initFetchBitcoin() {
  async function fetchBitcoin(url) {
    try {
      const bitcoinResponse = await fetch(url);
      const bitcoinJSON = await bitcoinResponse.json();
      const btcPreco = document.querySelector(".btc-preco");

      btcPreco.innerText = (1000 / bitcoinJSON.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchBitcoin("https://blockchain.info/ticker");
}
