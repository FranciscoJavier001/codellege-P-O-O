class ManipularLocalStorage {
    static ArrayTweets = [];

    static AgregarTweetLocalStorage(ContenidoTweet) {

        this.ArrayTweets = this.ObtenerLocalStorage();

        this.ArrayTweets.push(ContenidoTweet);

        localStorage.setItem("tweets", JSON.stringify(this.ArrayTweets));
    }

    static ObtenerLocalStorage() {
        let tweetsObtenidosLS = [];

        if (localStorage.getItem('tweets') == null) {
            return tweetsObtenidosLS;
        }

        console.log();

        return JSON.parse(localStorage.getItem("tweets"));
    }
}