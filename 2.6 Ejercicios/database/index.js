const mongoose = require('mongoose');

mongoose.connect
    ('mongodb+srv://alemanjosh7:phirpvK6OcupIF9F@cluster0-7dwhg.gcp.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Database connected'))
.catch(() => console.log('Error conection to database...'));