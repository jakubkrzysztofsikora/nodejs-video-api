var Sequelize = require('sequelize');

const sequelize = new Sequelize('video_app', 'video-user', 'video123', {
    host: 'nerdbase.ddns.net',
    dialect: 'mysql',
    pool: {
        max: 50,
        min: 0,
        idle: 10000
    }
});

sequelize.authenticate().then((err) => {
    console.log('Connection successful', err);
})
.catch((err) => {
    console.log('Unable to connect to database', err);
});

module.exports = sequelize;