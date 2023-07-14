async function getDate() {
    try {
        const response = await fetch('/date');
        const json = await response.json();

        const timestamp = json[0].timestamp;
        let date = new Date(timestamp * 1000);
        date.setHours(0,0,0,0);

        return date;
    } catch (error) {
        console.log(error);
    }
}

function outdated(date) {
    let today = new Date();
    today.setHours(0,0,0,0);
    
    return (date < today) ? true: false; 
}

async function getQuotationId() {
    try {
        const response = await fetch('/quotation');
        const json = await response.json();

        let total_quotations = json.length;
        let quotation_id = Math.floor(Math.random()*total_quotations);

        return quotation_id;
    } catch (error) {
        console.log(error);
    }
}

async function getQuotation(id) {
    const response = await fetch('/quotation/'+id);
    const json = await response.json();

    let new_quotation = json.quotation;
    return new_quotation;
}

async function updateDB(quotation) {
    let today = new Date();
    today.setHours(0,0,0,0);
    today = today.getTime() / 1000;
    let object = {"timestamp": today, "quotation": quotation};
    
    fetch('/quotation/0', {
        method: 'PUT',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(object)
    }).then(data => {console.log(data)})
    .catch(error => {console.log(error)});
}

async function setQuotation() {
    try {
        const date = await getDate();

        if (outdated(date)){
            const quotation_id = await getQuotationId();
            const quotation = await getQuotation(quotation_id);

            updateDB(quotation);

            document.getElementById("quotation").innerHTML = quotation;
        } else {
            const quotation = await getQuotation(0);
            document.getElementById("quotation").innerHTML = quotation;
        }
    } catch (error) {
        console.log(error)
    }
}

setQuotation();