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
    
    console.log("Date was previously "+date);
    updateDate(today);

    return (date < today) ? true: false; 
}

async function updateDate(date) {
    let today = date.getTime() / 1000;
    let today_object = {"timestamp": today};
    
    fetch('/quotation/0', {
        method: 'PUT',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(today_object)
    }).then(data => {
        console.log("Date is updated to "+data)})
    .catch(error => {console.log(error)});
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

async function setQuotation() {
    try {
        const date = await getDate();

        if (outdated(date)){
            const quotation_id = await getQuotationId();
            const quotation = await getQuotation(quotation_id);
            document.getElementById("quotation").innerHTML = quotation;
        }
    } catch (error) {
        console.log(error)
    }
}

setQuotation();