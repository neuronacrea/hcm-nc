App.factory('ListViewSwipeToDismissService', ['Toast', function(Toast) {
    return {
        getTitle: function() {
            return 'Swipe-to-dismiss';
        },
        getItemTitle: function(item) {
            return item ? this.getTitle() + ' ' + item.theme : '';
        },
        getAllThemes: function() {
            return [
                {
                    title: 'Media',
                    theme: 'media'
                },
                {
                    title: 'Shop',
                    theme: 'shop'
                },
                {
                    title: 'Social',
                    theme: 'social'
                },
                {
                    title: 'Travel',
                    theme: 'travel'
                },
                {
                    title: 'Universal',
                    theme: 'universal'
                }
            ];
        },
        getDataForTheme: function(theme) {
            return this[
                'getDataFor' + theme.charAt(0).toUpperCase() + theme.slice(1)
            ]();
        },
        getDataForMedia: function() {
            return {
                title: 'PlaylistName',
                description: '56 songs',
                shortDescription: '35:72',
                iconLike: 'icon-thumb-up',
                iconFavorite: 'icon-heart',
                iconShare: 'icon-share-variant',
                iconPlay: 'icon-play-circle-outline',
                backgroundImage: 'img/background/loginmedia.jpg',
                items: [
                    {
                        id: 1,
                        title: 'SongName',
                        description: 'ArtistName',
                        shortDescription: '3:42',
                        message: 'Swipe again to dismiss!',
                        image: 'img/avatar/0.jpg',
                        iconPlay: 'icon-play',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 2,
                        title: 'SongName',
                        description: 'ArtistName',
                        shortDescription: '3:42',
                        message: 'Swipe again to dismiss!',
                        image: 'img/avatar/1.jpg',
                        iconPlay: 'icon-play',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 3,
                        title: 'SongName',
                        description: 'ArtistName',
                        shortDescription: '3:42',
                        message: 'Swipe again to dismiss!',
                        image: 'img/avatar/2.jpg',
                        iconPlay: 'icon-play',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 4,
                        title: 'SongName',
                        description: 'ArtistName',
                        shortDescription: '3:42',
                        message: 'Swipe again to dismiss!',
                        image: 'img/avatar/3.jpg',
                        iconPlay: 'icon-play',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 5,
                        title: 'SongName',
                        description: 'ArtistName',
                        shortDescription: '3:42',
                        message: 'Swipe again to dismiss!',
                        image: 'img/avatar/4.jpg',
                        iconPlay: 'icon-play',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 6,
                        title: 'SongName',
                        description: 'ArtistName',
                        shortDescription: '3:42',
                        message: 'Swipe again to dismiss!',
                        image: 'img/avatar/5.jpg',
                        iconPlay: 'icon-play',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 7,
                        title: 'SongName',
                        description: 'ArtistName',
                        shortDescription: '3:42',
                        message: 'Swipe again to dismiss!',
                        image: 'img/avatar/6.jpg',
                        iconPlay: 'icon-play',
                        iconUndo: 'icon-undo-variant'

                    },
                    {
                        id: 8,
                        title: 'SongName',
                        description: 'ArtistName',
                        shortDescription: '3:42',
                        message: 'Swipe again to dismiss!',
                        image: 'img/avatar/7.jpg',
                        iconPlay: 'icon-play',
                        iconUndo: 'icon-undo-variant'
                    }
                ]
            };
        },
        getDataForShop: function() {
          return {
            backgroundImage : 'img/background/registershop.jpg',
            totalPriceText : 'Total:',
            totalPrice: '$56.37',
            buttonText: 'PROCEED',
            cardName: 'REVIEW YOUR CART',
            headerTitle: 'Order No.1',
            title : 'Free shipping',
            items : [
              {
                  id: 1,
                  title: 'Black Shirt',
                  description: 'Duis aute irure dolor in reprehenderit in voluptate',
                  image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/shop/0.jpg',
                  message : "Swipe again to dismiss!",
                  oldPrice: '$42.99',
                  newPrice: '$35.99',
                  iconUndo: 'icon-undo-variant'
              },
              {
                  id: 2,
                  title: 'Black Sweater',
                  description: 'Duis aute irure dolor in reprehenderit in voluptate',
                  image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/shop/1.jpg',
                  message : "Swipe again to dismiss!",
                  oldPrice: '$42.99',
                  newPrice: '$35.99',
                  iconUndo: 'icon-undo-variant'
              },
              {
                  id: 3,
                  title: 'Shirt',
                  description: 'Duis aute irure dolor in reprehenderit in voluptate',
                  image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/shop/2.jpg',
                  message : "Swipe again to dismiss!",
                  oldPrice: '$42.99',
                  newPrice: '$35.99',
                  iconUndo: 'icon-undo-variant'
              },
              {
                  id: 4,
                  title: 'White Shirt',
                  description: 'Duis aute irure dolor in reprehenderit in voluptate',
                  image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/shop/3.jpg',
                  message : "Swipe again to dismiss!",
                  oldPrice: '$42.99',
                  newPrice: '$35.99',
                  iconUndo: 'icon-undo-variant'
              },
              {
                  id: 5,
                  title: 'White T shirt',
                  description: 'Duis aute irure dolor in reprehenderit in voluptate',
                  image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/shop/4.jpg',
                  message : "Swipe again to dismiss!",
                  oldPrice: '$42.99',
                  newPrice: '$35.99',
                  iconUndo: 'icon-undo-variant'
              },
              {
                  id: 6,
                  title: 'T shirt',
                  description: 'Duis aute irure dolor in reprehenderit in voluptate',
                  image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/shop/5.jpg',
                  message : "Swipe again to dismiss!",
                  oldPrice: '$42.99',
                  newPrice: '$35.99',
                  iconUndo: 'icon-undo-variant'
              },
              {
                  id: 7,
                  title: 'Hoodies',
                  description: 'Duis aute irure dolor in reprehenderit in voluptate',
                  image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/shop/6.jpg',
                  message : "Swipe again to dismiss!",
                  oldPrice: '$42.99',
                  newPrice: '$35.99',
                  iconUndo: 'icon-undo-variant'
              }
            ]
          };
        },
        getDataForSocial: function() {
            return {
                backgroundImage: 'img/background/woman_background.jpg',
                items : [
                    {
                        id: 1,
                        title: '@Monument walk tour',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        message: 'Swipe again to dismiss!',
                        undo: 'Undo',
                        image: 'img/avatar/3.jpg',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 2,
                        title: '@River walk tour',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        message: 'Swipe again to dismiss!',
                        undo: 'Undo',
                        image: 'img/avatar/4.jpg',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 3,
                        title: '@City walk tour',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        message: 'Swipe again to dismiss!',
                        undo: 'Undo',
                        image: 'img/avatar/5.jpg',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 4,
                        title: '@Park walk tour',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        message: 'Swipe again to dismiss!',
                        undo: 'Undo',
                        image: 'img/avatar/6.jpg',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 5,
                        title: '@Vilage walk tour',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        message: 'Swipe again to dismiss!',
                        undo: 'Undo',
                        image: 'img/avatar/7.jpg',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 6,
                        title: '@Lake walk tour',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        message: 'Swipe again to dismiss!',
                        undo: 'Undo',
                        image: 'img/avatar/8.jpg',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 7,
                        title: '@Castle walk tour',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        message : 'Swipe again to dismiss!',
                        undo: 'Undo',
                        image: 'img/avatar/9.jpg',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 8,
                        title: '@Beach walk tour',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        message: 'Swipe again to dismiss!',
                        undo: 'Undo',
                        image: 'img/avatar/10.jpg',
                        iconUndo: 'icon-undo-variant'
                    }
                ]
            };
        },
        getDataForTravel: function() {
            return {
                items : [{
                        id: 1,
                        title: 'Monument walk tour',
                        description: '3:30min walking tour',
                        undo: 'Press to undo',
                        message: 'WOOHOO! I’VE MADE IT!',
                        swipe: 'Swipe to dismiss',
                        image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/travel/0.jpg'
                    },
                    {
                        id: 2,
                        title: 'River walk tour',
                        description: '3:30min walking tour',
                        undo : 'Press to undo',
                        message: 'WOOHOO! I’VE MADE IT!',
                        swipe: 'Swipe to dismiss',
                        image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/travel/1.jpg'
                    },
                    {
                        id: 3,
                        title: 'City walk tour',
                        description: '3:30min walking tour',
                        undo: 'Press to undo',
                        message: 'WOOHOO! I’VE MADE IT!',
                        swipe: 'Swipe to dismiss',
                        image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/travel/2.jpg'
                    },
                    {
                        id: 4,
                        title: 'Park walk tour',
                        description: '3:30min walking tour',
                        undo: 'Press to undo',
                        message: 'WOOHOO! I’VE MADE IT!',
                        swipe: 'Swipe to dismiss',
                        image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/travel/3.jpg'
                    },
                    {
                        id: 5,
                        title: 'Vilage walk tour',
                        description: '3:30min walking tour',
                        undo: 'Press to undo',
                        message: 'WOOHOO! I’VE MADE IT!',
                        swipe: 'Swipe to dismiss',
                        image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/travel/4.jpg'
                    },
                    {
                        id: 6,
                        title: 'Lake walk tour',
                        description: '3:30min walking tour',
                        undo: 'Press to undo',
                        message: 'WOOHOO! I’VE MADE IT!',
                        swipe : 'Swipe to dismiss',
                        image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/travel/5.jpg'
                    },
                    {
                        id: 7,
                        title: 'Castle walk tour',
                        description: '3:30min walking tour',
                        undo: 'Press to undo',
                        message: 'WOOHOO! I’VE MADE IT!',
                        swipe: 'Swipe to dismiss',
                        image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/travel/6.jpg'
                    },
                    {
                        id: 8,
                        title: 'Beach walk tour',
                        description: '3:30min walking tour',
                        undo: 'Press to undo',
                        message: 'WOOHOO! I’VE MADE IT!',
                        swipe: 'Swipe to dismiss',
                        image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/travel/7.jpg'
                    }]
          };
        },
        getDataForUniversal: function() {
            return {
              items: [
                {
                  id: 1,
                  title: 'Isaac Reid',
                  image: 'img/avatar/0.jpg',
                  delete: 'DELETE',
                  undo: 'UNDO',
                  favorite: true
                },
                {
                    id: 2,
                    title: 'Jason Graham',
                    image: 'img/avatar/1.jpg',
                    delete: 'DELETE',
                    undo: 'UNDO',
                    favorite: true
                },
                {
                    id: 3,
                    title: 'Abigail Ross',
                    image: 'img/avatar/2.jpg',
                    delete: 'DELETE',
                    undo: 'UNDO',
                    favorite: true
                },
                {
                    id: 4,
                    title: 'Justin Rutherford',
                    image: 'img/avatar/3.jpg',
                    delete: 'DELETE',
                    undo: 'UNDO',
                    favorite: true
                },
                {
                    id: 5,
                    title: 'Nicholas Henderson',
                    image: 'img/avatar/4.jpg',
                    delete: 'DELETE',
                    undo: 'UNDO',
                    favorite: false
                },
                {
                    id: 6,
                    title: 'Elizabeth Mackenzie',
                    image: 'img/avatar/5.jpg',
                    delete: 'DELETE',
                    undo: 'UNDO',
                    favorite: false
                },
                {
                    id: 7,
                    title: 'Melanie Ferguson',
                    image: 'img/avatar/6.jpg',
                    delete: 'DELETE',
                    undo: 'UNDO',
                    favorite: false
                },
                {
                    id: 8,
                    title: 'Fiona Kelly',
                    image: 'img/avatar/7.jpg',
                    delete: 'DELETE',
                    undo: 'UNDO',
                    favorite: true
                },
                {
                    id: 9,
                    title: 'Nicholas King',
                    image: 'img/avatar/8.jpg',
                    delete: 'DELETE',
                    undo: 'UNDO',
                    favorite: true
                },
                {
                    id: 10,
                    title: 'Victoria Mitchell',
                    image: 'img/avatar/9.jpg',
                    delete: 'DELETE',
                    undo: 'UNDO',
                    favorite: false
                },
                {
                    id: 11,
                    title: 'Sophie Lyman',
                    image: 'img/avatar/10.jpg',
                    delete: 'DELETE',
                    undo: 'UNDO',
                    favorite: false
                },
                {
                    id: 12,
                    title: 'Carl Ince',
                    image: 'img/avatar/11.jpg',
                    delete: 'DELETE',
                    undo: 'UNDO',
                    favorite: false
                },
                {
                    id: 13,
                    title: 'Michelle Slater',
                    image: 'img/avatar/12.jpg',
                    delete: 'DELETE',
                    undo: 'UNDO',
                    favorite: false
                },
                {
                    id: 14,
                    title: 'Ryan Mathis',
                    image: 'img/avatar/13.jpg',
                    delete: 'DELETE',
                    undo: 'UNDO',
                    favorite: false
                },
                {
                    id: 15,
                    title: 'Julia Grant',
                    image: 'img/avatar/14.jpg',
                    delete: 'DELETE',
                    undo: 'UNDO',
                    favorite: false
                },
                {
                    id: 16,
                    title: 'Hannah Martin',
                    image: 'img/avatar/15.jpg',
                    delete: 'DELETE',
                    undo: 'UNDO',
                    favorite: false
                }
            ]};
        },
        getEventsForTheme: function(theme) {
            return this[
                'getEventsFor' + theme.charAt(0).toUpperCase() + theme.slice(1)
            ]();
        },
        getEventsForMedia: function() {
            return {
                onLike: function(item) {
                    Toast.showToast('Like');
                },
                onFavorite: function(item) {
                    Toast.showToast('Favorite');
                },
                onShare: function(item) {
                    Toast.showToast('Share');
                },
                onItemClick: function(item) {
                  Toast.showToast(item.title);
                }
            };
        },
        getEventsForShop: function() {
            return {
                onItemClick: function(item) {
                  Toast.showToast(item.title);
                },
                doRefresh: function () {
                  $timeout(function () {
                    $rootScope.$broadcast('scroll.refreshComplete');
                  }, 2000);
                }
            };
        },
        getEventsForSocial: function() {
            return {
                onItemClick: function(item) {
                  Toast.showToast(item.title);
                },
                doRefresh: function () {
                  $timeout(function () {
                    $rootScope.$broadcast('scroll.refreshComplete');
                  }, 2000);
                }
            };
        },
        getEventsForTravel: function() {
            return {
                onItemClick: function(item) {
                  Toast.showToast(item.title);
                },
                doRefresh: function () {
                  $timeout(function () {
                    $rootScope.$broadcast('scroll.refreshComplete');
                  }, 2000);
                }            };
        },
        getEventsForUniversal: function() {
            return {
                onItemClick: function(item) {
                  Toast.showToast(item.title);
                },
                onFavorite: function(item) {
                  Toast.showToast(item.title);
                },
                doRefresh: function () {
                  $timeout(function () {
                    $rootScope.$broadcast('scroll.refreshComplete');
                  }, 2000);
                }
            };
        },
        prepareParams: function(item) {
            return {
                listViewsVisible: true,
                swipeToDismissVisible: true,
                theme: item.theme,
                data: this.getDataForTheme(item.theme),
                events: this.getEventsForTheme(item.theme)
            };
        }
    };
}]);
