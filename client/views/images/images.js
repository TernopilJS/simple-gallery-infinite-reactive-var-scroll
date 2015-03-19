Template.Images.events({
});

Template.Images.helpers({
  images: function () {
    return Images.find({category: this.category}, {limit: this.limit});
  }
});


Template.Images.rendered = function () {
};

Template.Images.created = function () {
};
