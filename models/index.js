const Movie = require('./movie.model');
const Slate = require('./slate.model');
const User = require('./user.model');

User.hasMany(Slate);

Movie.hasMany(Slate);

Slate.belongsTo(Movie, {through: 'Movie_Slate'});
Slate.belongsTo(User, {through: 'User_Slate'});

module.exports = { Movie, Slate, User }
