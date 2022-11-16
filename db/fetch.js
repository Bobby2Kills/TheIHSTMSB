const fetch = require('isomorphic-fetch')



const movieName = //this is where either the movie name, or even better, the IMDB ref would go


/*to async await it, it would look like
const movieName = async(imdbRef){
    const response = fetch(`https://online-movie-database.p.rapidapi.com/title/find?q=${imdbRef},
    const data = await response.json()
    console.log(data.title)
    
}

movieName(tt0133093)
*/



fetch(`https://online-movie-database.p.rapidapi.com/title/find?q=${movieName}`, {
    method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c2ddd54fc7msh6346f81bc272b5ep1a980bjsnee70159cc800',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
})
.then(response => response.json()) //same on coding rooms, but from https://openlibrary.org/isbn.9780140328721.json
	.then(response => console.log(response)) // on coding rooms he says .then(data =< console.log(data.title)) - can play around with this.
	.catch(err => console.error(err));