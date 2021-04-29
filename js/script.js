var app = new Vue (
    {
        el: '#root',
        data: {
            // Array che viene popolato dalla chiamata all'API
            searchedMovies: [],

            // Ricerca dell'utente nella input
            userSearch: '',
        },
        methods: {
            // Funzione che manda una chiamata all'API quando l'utente preme il button o preme enter
            searchMovie() {
                if ( this.userSearch != '' ) {
                    axios
                        .get('https://api.themoviedb.org/3/search/movie', {
                            params: {
                                api_key: '86aa4c6e9326e99a2398f49eac5855b2',
                                query: this.userSearch
                            }
                        })
                        .then( (response) => {
                            const result = response.data;
                            this.searchedMovies = result.results;
                        });
                }
            }
        }
    }
);