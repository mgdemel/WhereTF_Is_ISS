const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
};

fetch('https://api.wheretheiss.at/v1/satellites/25544', options)
.then(data => {
    console.log(data);
    if (!data.ok) {
        throw Error(data.status);
    }
    return data.json();
})
.then(data => {
    console.log(data);
})
.catch(e => {
    console.log(e);
});