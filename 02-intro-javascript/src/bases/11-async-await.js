const getImagen = async () => {

try {
    
    const apiKey = 'vCRCzJ7mdIPpDUyJmWe4QJfCxJvZ7jJV';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const data = await resp.json();

    const url = data.data.images.original.url;

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
    console.log(url);
} catch (error) {
    console.error(error)
}





}

getImagen();

/*
getImagen().then(resp => {
    console.log(resp);
    const img = document.createElement('img');
    img.src = resp;
    document.body.append(img);
});


    */