const apiKey = 'vCRCzJ7mdIPpDUyJmWe4QJfCxJvZ7jJV';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(resp => resp.json())
    .then(data => {

        const url = data.data.images.original.url;

        const img = document.createElement('img');
        img.src=url;

        document.body.append(img);

    })
    .catch(console.warn);