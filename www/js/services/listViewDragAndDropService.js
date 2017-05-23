App.factory('ListViewDragAndDropService', ['$rootScope', '$timeout', 'Toast', function($rootScope, $timeout, Toast) {
    return {
        getTitle: function() {
            return 'Drag and Drop';
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
                refreshMessage : 'Pull to refresh...',
                description: 'Author:Username',
                duration: '35:72',
                icon: 'icon-check',
                items: [
                    {
                        id: 1,
                        title: 'SongName',
                        author: 'Author:UserName',
                        image: 'img/avatar/0.jpg',
                        leftIcon: 'icon-play-circle-outline',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 2,
                        title: 'SongName',
                        author: 'Author:UserName',
                        image: 'img/avatar/1.jpg',
                        leftIcon: 'icon-play-circle-outline',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 3,
                        title: 'SongName',
                        author: 'Author:UserName',
                        image: 'img/avatar/2.jpg',
                        leftIcon: 'icon-play-circle-outline',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 4,
                        title: 'SongName',
                        author: 'Author:UserName',
                        image: 'img/avatar/3.jpg',
                        leftIcon: 'icon-play-circle-outline',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 5,
                        title: 'SongName',
                        author: 'Author:UserName',
                        image: 'img/avatar/4.jpg',
                        leftIcon: 'icon-play-circle-outline',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 6,
                        title: 'SongName',
                        author: 'Author:UserName',
                        image: 'img/avatar/5.jpg',
                        leftIcon: 'icon-play-circle-outline',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 7,
                        title: 'SongName',
                        author: 'Author:UserName',
                        image: 'img/avatar/6.jpg',
                        leftIcon: 'icon-play-circle-outline',
                        rightIcon: 'icon-unfold-more'
                    }
                ]
            };
        },
        getDataForShop: function() {
            return {
              title: 'Order No. 1',
              description : 'Will be shipped: 15.5.2016.',
              buttonText: 'PROCEED',
              headerImage: 'http://pengaja.com/uiapptemplate/newphotos/listviews/draganddrop/shop/7.jpg',
              price: '$42.99',
              items : [
                {
                    id: 1,
                    title: 'Black Shirt',
                    seller: 'Seller Name',
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/shop/0.jpg',
                    oldPrice: '$42.99',
                    newPrice: '$35.99',
                    rightIcon: 'icon-unfold-more'
                },
                {
                  id: 2,
                  title: 'Black Sweater',
                  seller: 'Seller Name',
                  image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/shop/1.jpg',
                  oldPrice: '$42.99',
                  newPrice: '$35.99',
                  rightIcon: 'icon-unfold-more'
                },
                {
                  id: 3,
                  title: 'Shirt',
                  seller: 'Seller Name',
                  image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/shop/2.jpg',
                  oldPrice: '$42.99',
                  newPrice: '$35.99',
                  rightIcon: 'icon-unfold-more'
                },
                {
                  id: 4,
                  title: 'White Shirt',
                  seller: 'Seller Name',
                  image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/shop/3.jpg',
                  oldPrice: '$42.99',
                  newPrice: '$35.99',
                  rightIcon: 'icon-unfold-more'
                },
                {
                  id: 5,
                  title: 'White T shirt',
                  seller: 'Seller Name',
                  image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/shop/4.jpg',
                  oldPrice: '$42.99',
                  newPrice: '$35.99',
                  rightIcon: 'icon-unfold-more'
                },
                {
                  id: 6,
                  title: 'T shirt',
                  seller: 'Seller Name',
                  image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/shop/5.jpg',
                  oldPrice: '$42.99',
                  newPrice: '$35.99',
                  rightIcon: 'icon-unfold-more'
                },
                {
                  id: 7,
                  title: 'Hoodies',
                  seller: 'Seller Name',
                  image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/shop/6.jpg',
                  oldPrice: '$42.99',
                  newPrice: '$35.99',
                  rightIcon: 'icon-unfold-more'
                }
              ]
            };
        },
        getDataForSocial: function() {
            return {
                refreshMessage : 'Pull to refresh...',
                backgroundImage: 'img/background/woman_background.jpg',
                items: [
                    {
                        id: 1,
                        title: 'Isaac Reid',
                        description: 'from Las Vegas',
                        image: 'img/avatar/0.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 2,
                        title: 'Jason Graham',
                        description: 'from Las Vegas',
                        image: 'img/avatar/1.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 3,
                        title: 'Abigail Ross',
                        description: 'from Las Vegas',
                        image: 'img/avatar/2.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 4,
                        title: 'Justin Rutherford',
                        description: 'from Las Vegas',
                        image: 'img/avatar/3.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 5,
                        title: 'Nicholas Henderson',
                        description: 'from Las Vegas',
                        image: 'img/avatar/4.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 6,
                        title: 'Elizabeth Mackenzie',
                        description: 'from Las Vegas',
                        image: 'img/avatar/5.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 7,
                        title: 'Melanie Ferguson',
                        description: 'from Las Vegas',
                        image: 'img/avatar/6.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 8,
                        title: 'Fiona Kelly',
                        description: 'from Las Vegas',
                        image: 'img/avatar/7.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 9,
                        title: 'Nicholas King',
                        description: 'from Las Vegas',
                        image: 'img/avatar/8.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 10,
                        title: 'Victoria Mitchell',
                        description: 'from Las Vegas',
                        image: 'img/avatar/9.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 11,
                        title: 'Sophie Lyman',
                        description: 'from Las Vegas',
                        image: 'img/avatar/10.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 12,
                        title: 'Carl Ince',
                        description: 'from Las Vegas',
                        image: 'img/avatar/11.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 13,
                        title: 'Michelle Slater',
                        description: 'from Las Vegas',
                        image: 'img/avatar/12.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 14,
                        title: 'Ryan Mathis',
                        description: 'from Las Vegas',
                        image: 'img/avatar/13.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 15,
                        title: 'Julia Grant',
                        description: 'from Las Vegas',
                        image: 'img/avatar/14.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 16,
                        title: 'Hannah Martin',
                        description: 'from Las Vegas',
                        image: 'img/avatar/15.jpg',
                        rightIcon: 'icon-unfold-more'
                    }
                ]
            };
        },
        getDataForTravel: function() {
            return {
              refreshMessage : 'Pull to refresh...',
              items:[
                {
                    id: 1,
                    title: 'Monument walk tour',
                    description: '23min walk from center',
                    icon: 'icon icon-star',
                    mark: '4.1',
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/draganddrop/travel/0.jpg',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 2,
                    title: 'Park walk tour',
                    description: '23min walk from center',
                    icon: 'icon icon-star',
                    mark: '4.1',
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/draganddrop/travel/1.jpg',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 3,
                    title: 'River walk tour',
                    description: '23min walk from center',
                    icon: 'icon icon-star',
                    mark: '4.1',
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/draganddrop/travel/2.jpg',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 4,
                    title: 'City walk tour',
                    description: '23min walk from center',
                    icon: 'icon icon-star',
                    mark: '4.1',
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/draganddrop/travel/3.jpg',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 5,
                    title: 'Lake walk tour',
                    description: '23min walk from center',
                    icon: 'icon icon-star',
                    mark: '4.1',
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/draganddrop/travel/4.jpg',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 6,
                    title: 'Vilage walk tour',
                    description: '23min walk from center',
                    icon: 'icon icon-star',
                    mark: '4.1',
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/draganddrop/travel/5.jpg',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 7,
                    title: 'Castle walk tour',
                    description: '23min walk from center',
                    icon: 'icon icon-star',
                    mark: '4.1',
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/draganddrop/travel/6.jpg',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 8,
                    title: 'Beach walk tour',
                    description: '23min walk from center',
                    icon: 'icon icon-star',
                    mark: '4.1',
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/draganddrop/travel/7.jpg',
                    rightIcon: 'icon-unfold-more'
                }
            ]};
        },
        getDataForUniversal: function() {
            return {
                refreshMessage : 'Pull to refresh...',
                items: [
                    {
                        id: 1,
                        title: 'Isaac Reid',
                        image: 'img/avatar/0.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 2,
                        title: 'Jason Graham',
                        image: 'img/avatar/1.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 3,
                        title: 'Abigail Ross',
                        image: 'img/avatar/2.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 4,
                        title: 'Justin Rutherford',
                        image: 'img/avatar/3.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 5,
                        title: 'Nicholas Henderson',
                        image: 'img/avatar/4.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 6,
                        title: 'Elizabeth Mackenzie',
                        image: 'img/avatar/5.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 7,
                        title: 'Melanie Ferguson',
                        image: 'img/avatar/6.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 8,
                        title: 'Fiona Kelly',
                        image: 'img/avatar/7.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 9,
                        title: 'Nicholas King',
                        image: 'img/avatar/8.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 10,
                        title: 'Victoria Mitchell',
                        image: 'img/avatar/9.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 11,
                        title: 'Sophie Lyman',
                        image: 'img/avatar/10.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 12,
                        title: 'Carl Ince',
                        image: 'img/avatar/11.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 13,
                        title: 'Michelle Slater',
                        image: 'img/avatar/12.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 14,
                        title: 'Ryan Mathis',
                        image: 'img/avatar/13.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 15,
                        title: 'Julia Grant',
                        image: 'img/avatar/14.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 16,
                        title: 'Hannah Martin',
                        image: 'img/avatar/15.jpg',
                        rightIcon: 'icon-unfold-more'
                    }
                ]
            };
        },
        getEventsForTheme: function(theme) {
            return this[
                'getEventsFor' + theme.charAt(0).toUpperCase() + theme.slice(1)
            ]();
        },
        getEventsForMedia: function() {
            return {
                onPlay: function(item) {
                    Toast.showToast('Play ' + item.id);
                },
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
        getEventsForShop: function() {
            return {
                onProceed: function() {
                    Toast.showToast('Proceed...');
                },
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
            }
          };
        },
        getEventsForUniversal: function() {
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
        prepareParams: function(item) {
            return {
                listViewsVisible: true,
                dragAndDropVisible: true,
                theme: item.theme,
                data: this.getDataForTheme(item.theme),
                events: this.getEventsForTheme(item.theme)
            };
        }
    };
}]);
