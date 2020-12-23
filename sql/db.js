var  mongoose = require('moogoose')
var db = mongoose.connect('mongodb://localhost:27017/easy-hiring')
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db connected seccessfully');
});
db.on('disconnected',function(){
    console.log('db disconnected aready');
})

module.exports = mongoose