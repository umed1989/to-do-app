const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // client.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5af0e9bc0725da361c8d10b2')
  // }, {
  //     $set: {
  //       completed: false
  //     }
  //   }, {
  //     returnOriginal: false
  //   }).then((result) => {
  //     console.log(result);
  //   });

  client.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5af0edbb2a21b12dfcddf1f0')
  }, {
      $set: {
        name: 'Bakha'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    })
});