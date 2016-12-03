export default () => {
  return [
    {name: 'Home', icon: 'home', nav: true, selected: true},
    {name: 'My Channel', icon: 'user-circle', nav: false, selected: false},
    {name: 'Trending', icon: 'fire', nav: true, selected: false},
    {name: 'Subscriptions', icon: 'folder-open', nav: true, selected: false},
    {name: 'History', icon: 'history', nav: false, selected: false},
    {name: 'Watch Later', icon: 'clock-o', nav: false, selected: false}
  ];
};
