Template.Images.events({

  'click .category': function (e, tmpl) {
    e.preventDefault();
    tmpl.category.set($(e.target).text());
  },

  'click .menu > h1': function (e, tmpl) {
    tmpl.category.set('');
  }

});

Template.Images.helpers({
  images: function (limit) {
    return Images.find({category: Template.instance().category.get()}, {limit: limit});
  }
});


// Template.Images.rendered = function () {
//   console.log('Images are rendered!');
// };

Template.Images.created = function () {
  this.category = new ReactiveVar('');
};

// Image

Template.Image.created = function () {
  console.log('Image is created!');
};

Template.Image.rendered = function () {
  console.log('Image is rendered!');
};
