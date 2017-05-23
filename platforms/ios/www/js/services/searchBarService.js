App.factory('SearchBarService', ['Toast', function (Toast) {
  return {
    getTitle: function () {
      return 'Search Bars';
    },
    getItemTitle: function (item) {
      return item ? item.title : '';
    },
    getAllThemes: function () {
      return [
        {
          title: 'Dark Search Bar',
          theme: 'dark'
        },
        {
          title: 'Light Search Bar',
          theme: 'light'
        },
        {
          title: 'Media Search Bar',
          theme: 'media'
        },
        {
          title: 'Shop Search Bar',
          theme: 'shop'
        },
        {
          title: 'Social Search Bar',
          theme: 'social'
        },
        {
          title: 'Travel Search Bar',
          theme: 'travel'
        }
      ];
    },
    getDataForTheme: function (theme) {
      return this[
      'getDataFor' + theme.charAt(0).toUpperCase() + theme.slice(1)
        ]();
    },
    getDataForLight: function () {
      return {
        items: []
      };
    },
    getDataForDark: function () {
      return {
        items: []
      };
    },
    getDataForShop: function () {
      return {
        backgroundImage: "img/background/registershop.jpg",
        items: [
          {
            title: 'Shoes',
            icon: ''
          },
          {
            title: 'Clothes',
            icon: ''
          },
          {
            title: 'Mobile',
            icon: ''
          },
          {
            title: 'IT',
            icon: ''
          },
          {
            title: 'Food',
            icon: ''
          },
          {
            title: 'Fruits',
            icon: ''
          },
          {
            title: 'Vegetable',
            icon: ''
          },
          {
            title: 'Drinks',
            icon: ''
          },
          {
            title: 'Alcohol',
            icon: ''
          },
          {
            title: 'Books',
            icon: ''
          }
        ]
      };
    },
    getDataForSocial: function () {
      return {
        title: 'Johnatan Douhou',
        description: 'from Oklahoma, USA',
        headerImage: 'http://pengaja.com/uiapptemplate/newphotos/search/social/1.jpg',
        avatar: 'img/avatar/0.jpg',
        items: [
          {
            title: 'Friends',
            description: '254 people'
          },
          {
            title: 'Enemies',
            description: '254 people'
          },
          {
            title: 'Neutral',
            description: '254 people'
          },
          {
            title: 'Family',
            description: '254 people'
          },
          {
            title: 'Guests',
            description: '254 people'
          },
          {
            title: 'Students',
            description: '254 people'
          }
        ]
      };
    },
    getDataForMedia: function () {
      return {
        backgroundImage: 'img/background/loginmedia.jpg',
        items: [
          {
            title: 'Song',
            icon: 'icon-music-box'
          },
          {
            title: 'Album',
            icon: 'icon-headset'
          },
          {
            title: 'Artist',
            icon: 'icon-human-child'
          },
          {
            title: 'Genre',
            icon: 'icon-menu'
          }
        ]
      };
    },
    getDataForTravel: function () {
      return {
          headerImage: 'http://pengaja.com/uiapptemplate/newphotos/listviews/googlecards/travel/1.jpg',
          items: [{
            id: 1,
            title: 'Monument walk tour',
            description: '3:30min walking tour',
            price: '123$',
            image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/travel/0.jpg'
          },
          {
            id: 2,
            title: 'River walk tour',
            description: '3:30min walking tour',
            price: '123$',
            image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/travel/1.jpg'
          },
          {
            id: 3,
            title: 'City walk tour',
            description: '3:30min walking tour',
            price: '123$',
            image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/travel/2.jpg'
          },
          {
            id: 4,
            title: 'Park walk tour',
            description: '3:30min walking tour',
            price: '123$',
            image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/travel/3.jpg'
          },
          {
            id: 5,
            title: 'Vilage walk tour',
            description: '3:30min walking tour',
            price: '123$',
            image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/travel/4.jpg'
          },
          {
            id: 6,
            title: 'Lake walk tour',
            description: '3:30min walking tour',
            price: '123$',
            image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/travel/5.jpg'
          },
          {
            id: 7,
            title: 'Castle walk tour',
            description: '3:30min walking tour',
            price: '123$',
            image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/travel/6.jpg'
          },
          {
            id: 8,
            title: 'Beach walk tour',
            description: '3:30min walking tour',
            price: '123$',
            image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/travel/7.jpg'
          }
        ]
        };

    },
    getEvents: function () {
      return {
        onSearch: function (newValue, oldValue, data) {
          var results = [];
          if (newValue) {
            Toast.showToast("Search for " + newValue);
          }
          if (data) {
            results = data.filter(function(value){
                if (!newValue) {
                  return true;
                } else {
                  return value.title.toLowerCase().includes(newValue.toLowerCase());
                }
            });
          }
          return results;
        },
        onRecord: function () {
          Toast.showToast("Mic");
        }
      };
    },
    prepareParams: function (item) {
      return {
        searchBarsVisible: true,
        theme: item.theme,
        data: this.getDataForTheme(item.theme),
        events: this.getEvents()
      };
    }
  };
}]);
