Template.Images.events({
  'click .load-more-btn': function () {
    var limit = Template.instance().limit;
    limit.set(limit.get() + 10);
  }
});

Template.Images.helpers({
  images: function () {
    var limit = Template.instance().limit;
    return Images.find({category: this.category}, {limit: limit.get()});
  },
  reactiveImage: function () {
    return Session.get('reactiveImage');
  },
  showButton: function () {
    var limit = Template.instance().limit;
    return limit.get() < Images.find({category: this.category}).count();
  }

});

Template.Images.onCreated(function () {
  this.limit = new ReactiveVar(10);
  Session.setDefault('reactiveImage', {});
});

Template.Images.onRendered(function () {
});


