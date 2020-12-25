var  mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/easy-hiring',{ useNewUrlParser: true,useUnifiedTopology: true })
var connection = mongoose.connection
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function() {
  console.log('db connected seccessfully');
});
connection.on('disconnected',function(){
    console.log('db disconnected aready');
})

module.exports = mongoose