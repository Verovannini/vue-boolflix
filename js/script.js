var app = new Vue (
    {
        el: '#root',
        data: {
            // Array che viene popolato dalla chiamata all'API
            searchedMovies: [],

            searchedSeries: [],

            // Ricerca dell'utente nella input
            userSearch: '',

            // Array di link di bandiere
            flags: {
                it: 'https://lipis.github.io/flag-icon-css/flags/4x3/it.svg',
                en: 'https://lipis.github.io/flag-icon-css/flags/4x3/gb.svg',
                fr: 'https://lipis.github.io/flag-icon-css/flags/4x3/fr.svg',
                de: 'https://lipis.github.io/flag-icon-css/flags/4x3/de.svg',
                es: 'https://lipis.github.io/flag-icon-css/flags/4x3/es.svg'
            },

            apiKey: '86aa4c6e9326e99a2398f49eac5855b2'
        },
        methods: {
            // Funzione che manda una chiamata all'API quando l'utente preme il button o preme enter
            searchMovieAndSeries() {
                if ( this.userSearch != '' ) {
                    this.callApi('https://api.themoviedb.org/3/search/movie', this.searchedMovies);
                    console.log(this.searchedMovies);

                    this.callApi('https://api.themoviedb.org/3/search/tv', this.searchedSeries);
                    console.log(this.searchedSeries);
                }
            },

            // Funzione che effettua una chiamata all'API
            // 
            // endpoint --> endpoint per effettuare la chiamata
            callApi(endpoint, array) {
                axios
                    .get( endpoint , {
                        params: {
                            api_key: this.apiKey,
                            query: this.userSearch
                        }
                    })
                    .then( (response) => {
                        const result = response.data;
                        array = result.results;
                        console.log('array', array);
                    });
            }
        }
    }
);