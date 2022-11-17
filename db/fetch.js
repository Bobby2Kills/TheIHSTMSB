const fetch = require('isomorphic-fetch')

//API Data for movie title, year and ID
const movieOptions = {
    method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c2ddd54fc7msh6346f81bc272b5ep1a980bjsnee70159cc800',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    },
}

//API Data for plot summary
const plotOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c181a9b90bmsh56c11a4cb18537bp17572djsndda8226f05a7',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

//movieName for API
// const movieName = "The Matrix" 


// tt0133093




// to async await it, it would look like
// const movieName = async(imdbRef) => {
//     const response = await fetch(`https://online-movie-database.p.rapidapi.com/title/find?q=${imdbRef}`, {
//         method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'c2ddd54fc7msh6346f81bc272b5ep1a980bjsnee70159cc800',
// 		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
//     }
//     })

// }
//     const data = await response.json()
//     console.log(data.title)


// movieName(tt0133093)



// api for finding all movie data


const movieName = "Avatar 2009"

// retrieve the movie name and title
const movieInfo = async(movieName) => {
    const response = await fetch(`https://online-movie-database.p.rapidapi.com/title/find?q=${movieName}`, movieOptions)
    const data = await response.json()
    const info = await data.results[0]
    console.log(info.title, info.year)

}

// retrieve the plot summary for the movie
const plotSummary = async(movieName)=>{
    const response = await fetch(`https://online-movie-database.p.rapidapi.com/title/find?q=${movieName}`, movieOptions)
    const data = await response.json()
    const splitID = data.results[0].id.split("/")[2]
    
    const moviePlot = await fetch(`https://online-movie-database.p.rapidapi.com/title/get-plots?tconst=${splitID}`, plotOptions)
    const plotData = await moviePlot.json()
    console.log(plotData.plots[0].text)

}
movieInfo(movieName)
plotSummary(movieName)
