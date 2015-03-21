Meteor.startup(function() {
  if (Images.find().count() === 0) {
    for (var i = 0; i < 50; i++) {
      Images.insert({
        url: 'http://lorempixel.com/' + _.random(150, 300) + '/' + _.random(150, 300) + '/nature',
        category: 'nature',
        title: 'Lorem Nature #' + i
      });
    }
    for (var i = 0; i < 50; i++) {
      Images.insert({
        url: 'http://lorempixel.com/' + _.random(150, 300) + '/' + _.random(150, 300) + '/cats',
        category: 'cats',
        title: 'Lorem Cats #' + i
      });
    }
    for (var i = 0; i < 50; i++) {
      Images.insert({
        url: 'http://lorempixel.com/' + _.random(150, 300) + '/' + _.random(150, 300) + '/sports',
        category: 'sports',
        title: 'Lorem Sports #' + i
    });
    }
    for (var i = 0; i < 50; i++) {
      Images.insert({
        url: 'http://lorempixel.com/' + _.random(150, 300) + '/' + _.random(150, 300) + '/food',
        category: 'food',
        title: 'Lorem Food #' + i
      });
    }
  }
});