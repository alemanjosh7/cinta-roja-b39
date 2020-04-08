const mongoose = require('mongoose');
const URI = '';

mongoose.connect
    ('mongodb+srv://alemanjosh7:lorena2003@cluster0-363fd.gcp.mongodb.net/test?retryWrites=true&w=majority',          {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Database connected'))
.catch(() => console.log('Error conection to database...'));