Router.configure({
  layoutTemplate: 'Layout',
});

Router.route('home', {
  path: '/',
  template: 'Images'
});

Router.route('categoryPage', {
  path: '/category/:name/',
  template: 'Images',
  data: function () {
    var self = this;
    return {
      category: self.params.name,
    }
  }
    
});