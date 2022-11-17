const { Movie, Slate, User } = require(`../models`)
const db = require('./db')

async function seed () {

    await db.sync({
        force: true
    })
    await User.bulkCreate([
        {
            slaterName: "littleMovieBuffBoy69",
            email: "littleMovieBuffBoy69@fake.com",
            password: "password123",
            userSince: 2022-11-17
        },
        {
            slaterName: "ZacEfron4Eva",
            email: "ZacEfron4Eva@fake.com",
            password: "password123",
            userSince: 2022-11-17
        },
        {
            slaterName: "w4tchMyCh0psB3rn4rd",
            email: "w4tchMyCh0psB3rn4rd@fake.com",
            password: "password123",
            userSince: 2022-11-17
        },
        {
            slaterName: "coffinFlop",
            email: "coffinFlop@fake.com",
            password: "password123",
            userSince: 2022-11-17
        },
        {
            slaterName: "cry4help",
            email: "cry4help@fake.com",
            password: "password123",
            userSince: 2022-11-17
        },
        {
            slaterName: "4kMadBabe",
            email: "4kMadBabe@fake.com",
            password: "password123",
            userSince: 2022-11-17
        },
        {
            slaterName: "littlePigBoy",
            email: "littlePigBoy@fake.com",
            password: "password123",
            userSince: 2022-11-17
        },
        {
            slaterName: "elonHuskyLuvva",
            email: "elonHuskyLuvva@fake.com",
            password: "password123",
            userSince: 2022-11-17
        },
        {
            slaterName: "iH8Movies",
            email: "iH8Movies@fake.com",
            password: "password123",
            userSince: 2022-11-16
        },
        {
            slaterName: "rateMyDinner",
            email: "rateMyDinner@fake.com",
            password: "password123",
            userSince: 2022-11-16
        },
        {
            slaterName: "societalC0llapse",
            email: "societalC0llapse@fake.com",
            password: "password123",
            userSince: 2022-11-16
        },
        
    ])

    await Slate.bulkCreate([
    { //goodfellas
        date: 22-11-17,
        review: "I just can't get on board with the dragons. What was Scorsese thinking. Why do the gangsters have dragons"
    },
    
    { //Planet of the Apes
        date: 22-11-17,
        review: "Not realistic. Name me one planet up to now that's had apes on it. Just one. I'll wait."
    },
    
    {
        date: 22-11-17, //The Shape of Water
        review: "The Shape of Water is a lazy mansplaination of what happens to water once it drops below 0 degrees celsius. If I wanted to learn about freezing I'd have gone back to school"
    },
    
    {
        date: 22-11-17, //Schindler's list
        review: "movie hasn't aged well. Why Schindler couldn't write the list himself is beyond me. Isn't this based on a true story? How did he get away with murdering all those children? So much unexplained "
    },
    
    {
        date: 22-11-17, // The Matrix
        review: "from the plot this sounded like it would be a great movie, but honestly I switched it off after half an hour. Why a man with Keanu's looks would have to cry so much is beyond me. It was beyond ridiculous, and rendered the dialogue inaudible."
    },
    
    {
        date: 22-11-17,
        review: "I thought this was supposed to be about a killer whale? Well, prepare to be inundated with rapid-firing images of frog-dong, and a cacaphony of amphibious love-yelps. "
    },
    
    {
        date: 22-11-17,
        review: "dumb movie. easy choice mate. choose legs. "
    },
    
    {
        date: 22-11-18,
        review: "HI TOM ITS GRANDAD THE FACEBOOK BUTTON HAS GONE I CANT SEE YOUR PICTURES WHEN R U COMING TO SEE ME I NEED HELP WITH V GARDEN"
    },
    
    {
        date: 22-11-18,
        review: "sat through 2 hours of this movie and you didn't even get to find out if he got the job in the end"
    },
    
    {
        date: 22-11-18,
        review: "I thought this was going to be a good movie. Trains. Drugs. What's not to like. Truth is, drugs+train = drain. They mostly sit there the whole movie and even the passengers get fed up. Good soundtrack though"
    },
    
    ])

    await Movie.bulkCreate([
        {
            title: "The Matrix",
            year: 1999,
            plot: "plot1",
            director01: "Lana Wachowski",
            director02: "Lilly Wachowski",
            actor01:"Keanu Reeves",
            actor02: "Laurence Fishburne",
            actor03: "Carrie-Anne Moss",
            image: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
        },
        {
            title: "Goodfellas",
            year: 1990,
            plot: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
            director01: "Martin Scorsese",
            director02: "",
            actor01:"Robert De Niro",
            actor02: "Ray Liotta",
            actor03: "Joe Pesci",
            image: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
        },
        {
            title: "Planet of the Apes",
            year: 1968,
            plot: "An astronaut crew crash-lands on a planet in the distant future where intelligent talking apes are the dominant species, and humans are the oppressed and enslaved.",
            director01: "Franklin J. Schaffner",
            director02: "",
            actor01:"Charlton Heston",
            actor02: "Roddy McDowall",
            actor03: "Kim Hunter",
            image: "https://m.media-amazon.com/images/M/MV5BMTg0NjUwMzg5NF5BMl5BanBnXkFtZTgwNDQ0NjcwMTE@._V1_.jpg"
        },
        {
            title: "The Shape of Water",
            year: 2017,
            plot: "At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.",
            director01: "Guillermo del Toro",
            director02: "",
            actor01:"Sally Hawkins",
            actor02: "Octavia Spencer",
            actor03: "Michael Shannon",
            image: "https://m.media-amazon.com/images/M/MV5BNGNiNWQ5M2MtNGI0OC00MDA2LWI5NzEtMmZiYjVjMDEyOWYzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg"
        },
        {
            title: "Schindler's List",
            year: 1993,
            plot: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
            director01: "Steven Spielberg",
            director02: "",
            actor01:"Liam Neeson",
            actor02: "Ralph Fiennes",
            actor03: "Ben Kingsley",
            image: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
        },

    ])
}

module.exports = seed;
