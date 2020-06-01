const contenidoTweet = document.querySelector("#txTeewt");
const listaTweets = document.querySelector("#lista-tweets");

eventListener();

function eventListener() {
    document.querySelector("#formulario")
        .addEventListener("submit", ObtenerFormulario);
    listaTweets.addEventListener("click", EliminarTweet);
}

function ObtenerFormulario(event) {
    event.preventDefault();

    if (contenidoTweet.value.trim() == "") return;

    const InstanciaTweet = new Tweets(contenidoTweet.value);

    InstanciaTweet.AgregarTweetDOM(listaTweets);
}

function EliminarTweet(event) {
    Tweets.EliminarTweetDom(event);
}