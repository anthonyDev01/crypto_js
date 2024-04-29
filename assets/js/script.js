let btc = document.getElementById("bitcoin");
let eth = document.getElementById("ethereum");
let doge = document.getElementById("dogecoin");

const options = {
    method: "GET",
    headers: {
        accept: "assets/js/script.js",
        "x-cg-demo-api-key": "CG-fj5RWLRjcdzi3ExJwn7fX9vF",
        
    },
};

fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=brl",
    options
)
    .then((response) => response.json())

    .then((response) => {
        btc.innerHTML = response.bitcoin.brl;
        eth.innerHTML = response.ethereum.brl;
        doge.innerHTML = response.dogecoin.brl;
    })
    .catch((err) => console.error(err));
