let currency = {

    "amd": {
        "euro": 0.00188,
        "pound": 0.001602,
        "usd": 0.002085,
        "amd": 1,
        "rub": 0.13,
        "gel": 0.006033,
        "byn": 0.004425,
    },

    "euro": {
        "amd": 528,
        "pound": 1.17 ,
        "usd": 0.90 ,
        "euro": 1,
        "rub": 68.31,
        "gel": 3.198572,
        "byn": 2.346453,
    },

    "usd": {
        "amd": 479.610403,
        "pound": 0.76,
        "euro": 0.9 ,
        "usd": 1,
        "rub": 61.6,
        "gel": 2.884987,
        "byn": 2.115747,
    },

    "pound": {
        "amd": 626,
        "usd": 1.3,
        "euro": 1.17,
        "pound": 1,
        "rub": 80.17,
        "gel": 3.78565,
        "byn": 2.77854,
    },

    "rub": {
        "amd": 7.8,
        "usd": 0.016,
        "pound": 0.012,
        "euro": 0.015,
        "rub": 1,
        "gel": 0.046634,
        "byn": 0.034206,
    },

    "gel": {
        "amd": 165.747658,
        "usd": 0.346622,
        "euro": 0.31264,
        "pound": 0.264155,
        "rub": 21.443564,
        "gel": 1,
        "byn": 0.733353,
    },

    "byn": {
        "amd": 226.009934,
        "usd": 0.472646,
        "euro": 0.426175,
        "pound": 0.359901,
        "rub": 29.234592,
        "gel": 1.3636,
        "byn": 1,
    },
}



//Exchange code 
const convertBtn = document.querySelector('.convert-btn');
const reverser = document.querySelector(`.reverser`);
const exchange = (val, currency) => val * currency;
const convertFrom = document.getElementById(`convert_from`);

console.log(exchange(1000, currency["amd"]["usd"]));





convertFrom.addEventListener('input', (event) => {
    const convert_to = document.querySelector('select[name=convert_to]').value
    const convert_from = document.querySelector('select[name=convert_from]').value

    console.log(convert_to, convert_from)
    let val = document.getElementById('convert_from').value;
    let exchVal = exchange(val, currency[`${convert_from}`][`${convert_to}`]);
    document.getElementById('convert_to').value = exchVal;
});

//Reverse

reverser.addEventListener('click', (event) => {
    const convert_from = document.querySelector(`input[name=convert_from]:checked`)
    const convert_to = document.querySelector(`input[name=convert_to]:checked`)


})



