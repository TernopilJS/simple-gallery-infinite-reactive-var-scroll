Router.configure({
  layoutTemplate: 'Layout',
});

Router.route('home', {
  path: '/',
  template: 'Images'
});

Router.route('categoryPage', {
  path: '/category/:name/:limit',
  template: 'Images',
  data: function () {
    var self = this;
    return {
      category: self.params.name,
      limit: parseInt(self.params.limit)
    }
  }
    
});