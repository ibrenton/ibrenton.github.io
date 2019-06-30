var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });


// Change getBTCprice() to getCryptoPrice(): just make url variable based on a parameter, making this function reusable internally

function getBTCprice() {
    const url = 'https://api.coinbase.com/v2/prices/BTC-USD/spot';
    const priceDisplay = document.getElementById("output");
    const info = {
        method: "GET"
    }
    fetch(url, info)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log(JSON.stringify(myJson));
            console.log('Price: $', myJson.data.amount);
            let price = formatter.format(myJson.data.amount);
            priceDisplay.innerHTML = price;
        });
}