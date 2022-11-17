const { blob } = require('stream/consumers')
const { Slate, User } = require(`../models`)
const { bulkBuild } = require('../models/movie.model')
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
    {
        date: 22-11-17,
        review: "I just can't get on board with the dragons. What was Scorsese thinking. There's no way they saved the King's Speech"
    },
    
    {
        date: 22-11-17,
        review: "Not realistic. Name me one planet up to now that's had apes on it. Just one. I'll wait."
    },
    
    {
        date: 22-11-17,
        review: "The Shape of Water is a lazy mansplaination of what happens to water once it drops below 0 degrees celsius. If I wanted to learn about freezing I'd have gone back to school"
    },
    
    {
        date: 22-11-17,
        review: "movie hasn't aged well. Why Schindler couldn't write the list himself is beyond me. Isn't this based on a true story? How did he get away with murdering all those children? So much unexplained "
    },
    
    {
        date: 22-11-17,
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
            plot: "",
            directors: [
                {
                    name: "Lana Wachowski"
                },
                {
                    name: "Lilly Wachowski"
                }
            ],
            actors: [
                {
                    name: "Keanu Reeves"
                },
                {
                    name: "Laurence Fishburne"
                },
                {
                    name: "Carrie-Anne Moss"
                }
            ],
            image: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
        },
        
    ])
}

