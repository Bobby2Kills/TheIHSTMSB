const fetch = require('isomorphic-fetch');

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

//API Data for top crew

const crewOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c181a9b90bmsh56c11a4cb18537bp17572djsndda8226f05a7',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

// 1 - grab the data so it's local
// 2 - filter local data for what I need
// 3 - put it where I want - render
// expect to see functions that call each other as they finish


// tt0133093

const movieName = "The Matrix"

// retrieve the movie name and title
const movieInfo = async(movieName) => {
    const response = await fetch(`https://online-movie-database.p.rapidapi.com/title/find?q=${movieName}`, movieOptions)
    const data = await response.json()
    const info = await data.results[0]
    return [info.title, info.year] // need to grab .title and .year

}

// retrieve the plot summary for the movie
const plotSummary = async(movieName) => {
    const response = await fetch(`https://online-movie-database.p.rapidapi.com/title/find?q=${movieName}`, movieOptions)
    const data = await response.json()
    const splitID = await data.results[0].id.split("/")[2]
    
    const moviePlot = await fetch(`https://online-movie-database.p.rapidapi.com/title/get-plots?tconst=${splitID}`, plotOptions)
    const plotData = await moviePlot.json()
    return plotData.plots[0].text
}

const movieImg = async(movieName) => {
    const response = await fetch(`https://online-movie-database.p.rapidapi.com/title/find?q=${movieName}`, movieOptions)
    const data = await response.json()
    const imgUrl = await data.results[0].image.url
    return imgUrl
}

const movieDirector = async(movieName) => {
    const response = await fetch(`https://online-movie-database.p.rapidapi.com/title/find?q=${movieName}`, movieOptions)
    const data = await response.json()
    const splitID = await data.results[0].id.split("/")[2]

    const directors = await fetch(`https://online-movie-database.p.rapidapi.com/title/get-top-crew?tconst=${splitID}`, crewOptions)
    const directorData = await directors.json()
    const directorName = directorData.directors.map(director => director.name).join(", ")
    return directorName


}

const topCast = async(movieName) => {
    const response = await fetch(`https://online-movie-database.p.rapidapi.com/title/find?q=${movieName}`, movieOptions)
    const data = await response.json()
    const actor1 = await data.results[0].principals[0].name
    const actor2 = data.results[0].principals[1].name
    const actor3 = data.results[0].principals[2].name
    const actors = actor1 + ", " + actor2 +  ", " + actor3
    // const firstThree = actors.slice(0,3)
    // const actorName = firstThree.name
    return actors
}

// retrieve 


Promise.all([
    movieInfo(movieName),
    plotSummary(movieName),
    movieImg(movieName), // just grabs img url for now
    movieDirector(movieName),
    topCast(movieName),
]).then(data => console.log(data))
