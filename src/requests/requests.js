const API_KEY ='<fa3966344002abb5aaa9142eeeb69bc3>'

export default{
   
    fetchTrending:`https://api.themoviedb.org/3/trending/all/week?api_key=fa3966344002abb5aaa9142eeeb69bc3`,
    
    fetchTopRated:'https://api.themoviedb.org/3/movie/top_rated?api_key=fa3966344002abb5aaa9142eeeb69bc3&language=Hindi&page=1',

    fetchUpComingMovie:`https://api.themoviedb.org/3/movie/upcoming?api_key=fa3966344002abb5aaa9142eeeb69bc3&language=Hindi&page=1`,
    
    fetchPopular:`https://api.themoviedb.org/3/movie/popular?api_key=fa3966344002abb5aaa9142eeeb69bc3&language=hindi&page=1`,

    fetchTv:`https://api.themoviedb.org/3/tv/popular?api_key=fa3966344002abb5aaa9142eeeb69bc3&language=en-US&page=1`,

    fetchPerson:`https://api.themoviedb.org/3/movie/121/recommendations?api_key=fa3966344002abb5aaa9142eeeb69bc3&language=en-US&page=1`,

    fetchSimilar:`https://api.themoviedb.org/3/discover/tv?api_key=fa3966344002abb5aaa9142eeeb69bc3&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`,

    fetchEpisode:'https://api.themoviedb.org/3/discover/movie?api_key=fa3966344002abb5aaa9142eeeb69bc3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',

    fetchActionMovies:`https://api.themoviedb.org/3/discover/movie?api_key=fa3966344002abb5aaa9142eeeb69bc3&with_genres=28`,
    fetchComedyMovies:`https://api.themoviedb.org/3/discover/movie?api_key=fa3966344002abb5aaa9142eeeb69bc3&with_genres=35`,
    fetchHorrorMovies:`https://api.themoviedb.org/3/discover/movie?api_key=fa3966344002abb5aaa9142eeeb69bc3&with_genres=27`,
    fetchRomanceMovies:`https://api.themoviedb.org/3/discover/movie?api_key=fa3966344002abb5aaa9142eeeb69bc3&with_genres=10749`,
    fetchDocumentaries:`https://api.themoviedb.org/3/discover/movie?api_key=fa3966344002abb5aaa9142eeeb69bc3&with_genres=99`,




}   

//fa3966344002abb5aaa9142eeeb69bc3