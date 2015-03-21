Template.Images.events({
  'click .load-more-btn': function () {
    Router.go('categoryPage', {
      name: 'food', 
      limit: this.limit + 10
    });
  }
});

Template.Images.helpers({
  images: function () {
    return Images.find({category: this.category}, {limit: this.limit});
  },
  reactiveImage: function () {
    return Session.get('reactiveImage');
  },
  showButton: function () {
    return this.limit <= Images.find({category: this.category}).count();
  }

});


Template.Images.rendered = function () {
};

Template.Images.created = function () {
  Session.setDefault('reactiveImage', {});
};
