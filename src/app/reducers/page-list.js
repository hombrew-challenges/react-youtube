export default () => {
  return [
    {name: 'Home', icon: 'home', nav: true, selected: true, url: '#'},
    {name: 'My Channel', icon: 'user-circle', nav: false, selected: false, url: '#'},
    {name: 'Trending', icon: 'fire', nav: true, selected: false, url: '#'},
    {name: 'Subscriptions', icon: 'folder-open', nav: true, selected: false, url: '#'},
    {name: 'History', icon: 'history', nav: false, selected: false, url: '#'},
    {name: 'Watch Later', icon: 'clock-o', nav: false, selected: false, url: '#'}
  ];
};
