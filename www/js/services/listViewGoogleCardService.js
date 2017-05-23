App.factory('ListViewGoogleCardService', ['$timeout', '$rootScope', 'Toast', function($timeout, $rootScope, Toast) {
    return {
        getTitle: function() {
            return 'Google Cards';
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
        getDataForMedia: function(){
             return {
                title: 'PlaylistName',
                description: 'Author:Username',
                backgroundImage: 'img/background/loginmedia.jpg',
                duration: '35:72',
                items: [
                    {
                        id: 1,
                        title: 'Atrist Name',
                        image: 'img/googleCard/media/0.jpg',
                        description: 'Birth year: 1984',
                        shortDescription: 'Country: Germany',
                        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                        iconLike: 'icon-thumb-up',
                        iconFavorite: 'icon-heart',
                        iconShare: 'icon-share-variant'
                    },
                    {
                        id: 2,
                        title: 'Atrist Name',
                        image: 'img/googleCard/media/1.jpg',
                        description: 'Birth year: 1980',
                        shortDescription: 'Country: Germany',
                        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                        iconLike: 'icon-thumb-up',
                        iconFavorite: 'icon-heart',
                        iconShare: 'icon-share-variant'
                    },
                    {
                        id: 3,
                        title: 'Atrist Name',
                        image: 'img/googleCard/media/2.jpg',
                        description: 'Birth year: 1984',
                        shortDescription: 'Country: Germany',
                        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                        iconLike: 'icon-thumb-up',
                        iconFavorite: 'icon-heart',
                        iconShare: 'icon-share-variant'
                    },
                    {
                        id: 4,
                        title: 'Atrist Name',
                        image: 'img/googleCard/media/3.jpg',
                        description: 'Birth year: 1984',
                        shortDescription: 'Country: Germany',
                        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                        iconLike: 'icon-thumb-up',
                        iconFavorite: 'icon-heart',
                        iconShare: 'icon-share-variant'
                    },
                    {
                        id: 5,
                        title: 'Atrist Name',
                        image: 'img/googleCard/media/4.jpg',
                        description: 'Birth year: 1984',
                        shortDescription: 'Country: Germany',
                        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                        iconLike: 'icon-thumb-up',
                        iconFavorite: 'icon-heart',
                        iconShare: 'icon-share-variant'
                    },
                    {
                        id: 6,
                        title: 'Atrist Name',
                        image: 'img/googleCard/media/5.jpg',
                        description: 'Birth year: 1984',
                        shortDescription: 'Country: Germany',
                        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                        iconLike: 'icon-thumb-up',
                        iconFavorite: 'icon-heart',
                        iconShare: 'icon-share-variant'
                    },
                    {
                        id: 7,
                        title: 'Atrist Name',
                        image: 'img/googleCard/media/6.jpg',
                        description: 'Birth year: 1984',
                        shortDescription: 'Country: Germany',
                        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                        iconLike: 'icon-thumb-up',
                        iconFavorite: 'icon-heart',
                        iconShare: 'icon-share-variant'
                    },
                    {
                        id: 8,
                        title: 'Atrist Name',
                        image: 'img/googleCard/media/7.jpg',
                        description: 'Birth year: 1984',
                        shortDescription: 'Country: Germany',
                        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                        iconLike: 'icon-thumb-up',
                        iconFavorite: 'icon-heart',
                        iconShare: 'icon-share-variant'
                    }
                ]
            };
        },
        getDataForShop: function(){
            return [
                {
                    id: 1,
                    title: 'PROMO',
                    description: 'Special discount! Buy it now!',
                    shortDescription: 'Only this monday!',
                    longDescription: 'Lorem ipsum dolor sit amet, consectetur',
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/googlecards/shop/1.jpg',
                    price: '$19.18',
                    button: 'BUY'
                },
                {
                    id: 2,
                    title: 'PROMO',
                    description: 'Special discount! Buy it now!',
                    shortDescription: 'Only this monday!',
                    longDescription: 'Lorem ipsum dolor sit amet, consectetur',
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/googlecards/shop/2.jpg',
                    price: '$19.18',
                    button: 'BUY'
                },
                {
                    id: 3,
                    title: 'PROMO',
                    description: 'Special discount! Buy it now!',
                    shortDescription: 'Only this monday!',
                    longDescription: 'Lorem ipsum dolor sit amet, consectetur',
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/googlecards/shop/5.jpg',
                    price: '$19.18',
                    button: 'BUY'
                },
                {
                    id: 4,
                    title: 'PROMO',
                    description: 'Special discount! Buy it now!',
                    shortDescription: 'Only this monday!',
                    longDescription: 'Lorem ipsum dolor sit amet, consectetur',
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/googlecards/shop/3.jpg',
                    price: '$19.18',
                    button: 'BUY'
                },
                {
                    id: 5,
                    title: 'PROMO',
                    description: 'Special discount! Buy it now!',
                    shortDescription: 'Only this monday!',
                    longDescription: 'Lorem ipsum dolor sit amet, consectetur',
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/googlecards/shop/1.jpg',
                    price: '$19.18',
                    button: 'BUY'
                }
            ];
        },
        getDataForSocial: function(){
            return [
                {
                    id: 1,
                    title: 'Marty McFly 1',
                    avatar: 'img/avatar/2.jpg',
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/googlecards/social/1.jpg',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                    shortDescription: 'November 05, 1955',
                    firstButton: 'LIKE',
                    secondButton: 'FOLLOW'
                },
                {
                    id: 2,
                    title: 'Marty McFly 2',
                    avatar: 'img/avatar/0.jpg',
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/googlecards/social/2.jpg',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                    shortDescription: 'November 05, 1955',
                    firstButton: 'LIKE',
                    secondButton: 'FOLLOW'
                },
                {
                    id: 3,
                    title: 'Marty McFly 3',
                    avatar: 'img/avatar/1.jpg',
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/googlecards/social/3.jpg',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                    shortDescription: 'November 05, 1955',
                    firstButton: 'LIKE',
                    secondButton: 'FOLLOW'
                },
                {
                    id: 4,
                    title: 'Marty McFly 4',
                    avatar: 'img/avatar/4.jpg',
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/googlecards/social/4.jpg',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                    shortDescription: 'November 05, 1955',
                    firstButton: 'LIKE',
                    secondButton: 'FOLLOW'
                },
                {
                    id: 5,
                    title: 'Marty McFly 5',
                    avatar: 'img/avatar/5.jpg',
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/googlecards/social/5.jpg',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                    shortDescription: 'November 05, 1955',
                    firstButton: 'LIKE',
                    secondButton: 'FOLLOW'
                },
                {
                    id: 6,
                    title: 'Marty McFly 6',
                    avatar: 'img/avatar/6.jpg',
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/googlecards/social/6.jpg',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                    shortDescription: 'November 05, 1955',
                    firstButton: 'LIKE',
                    secondButton: 'FOLLOW'
                },
                {
                    id: 7,
                    title: 'Marty McFly 7',
                    avatar: 'img/avatar/7.jpg',
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/googlecards/social/7.jpg',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                    shortDescription: 'November 05, 1955',
                    firstButton: 'LIKE',
                    secondButton: 'FOLLOW'
                }
            ];
        },
        getDataForTravel: function(){
            return [
                {
                    id: 1,
                    headerText : "Lorem Ipsum",
                    title: 'Card Title 1',
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/googlecards/travel/0.jpg',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',firstButton: 'EXPLORE',
                    secondButton: 'SHARE'
                },
                {
                    id: 2,
                    headerText : "Lorem Ipsum",
                    title: 'Card Title 2',
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/googlecards/travel/1.jpg',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                    firstButton: 'EXPLORE',
                    secondButton: 'SHARE'
                },
                {
                    id: 3,
                    title: 'Card Title 3',
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/googlecards/travel/3.jpg',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                    firstButton: 'EXPLORE',
                    secondButton: 'SHARE'
                },
                {
                    id: 4,
                    title: 'Card Title 4',
                    headerText : "Lorem Ipsum",
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/googlecards/travel/4.jpg',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                    firstButton: 'EXPLORE',
                    secondButton: 'SHARE'
                },
                {
                    id: 5,
                    title: 'Card Title 5',
                    headerText : "Lorem Ipsum",
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/googlecards/travel/5.jpg',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                    firstButton: 'EXPLORE',
                    secondButton: 'SHARE'
                },
                {
                    id: 6,
                    title: 'Card Title 6',
                    headerText : "Lorem Ipsum",
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/googlecards/travel/6.jpg',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                    firstButton: 'EXPLORE',
                    secondButton: 'SHARE'
                }
            ];
        },
        getDataForUniversal: function(){
            return [
                {
                    id: 1,
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/googlecards/travel/0.jpg',
                    imageAlt: 'Google cards'
                },
                {
                    id: 2,
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/googlecards/travel/1.jpg',
                    imageAlt: 'Google cards'
                },
                {
                    id: 3,
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/googlecards/travel/2.jpg',
                    imageAlt: 'Google cards'
                },
                {
                    id: 4,
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/googlecards/travel/3.jpg',
                    imageAlt: 'Google cards'
                },
                {
                    id: 5,
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/googlecards/travel/4.jpg',
                    imageAlt: 'Google cards'
                },
                {
                    id: 6,
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/googlecards/travel/5.jpg',
                    imageAlt: 'Google cards'
                },
                {
                    id: 7,
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/googlecards/travel/6.jpg',
                    imageAlt: 'Google cards'
                },
                {
                    id: 8,
                    image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/googlecards/travel/0.jpg',
                    imageAlt: 'Google cards'
                }
            ];
        },
        getEventsForTheme: function(theme) {
            return this[
                'getEventsFor' + theme.charAt(0).toUpperCase() + theme.slice(1)
            ]();
        },
        getEventsForMedia: function() {
            return {
                onLike: function(item) {
                    Toast.showToast('Like ' + item.id);
                },
                onFavorite: function(item) {
                    Toast.showToast('Favorite ' + item.id);
                },
                onShare: function(item) {
                    Toast.showToast('Share ' + item.id);
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
                onBuy: function(item) {
                    Toast.showToast('Buy ' + item.id);
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
                onLike: function(item) {
                  Toast.showToast('Like ' + item.id);
                },
                onFollow: function(item) {
                  Toast.showToast('Follow ' + item.id);
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
                onExplore: function(item) {
                  Toast.showToast('Explore ' + item.id);
                },
                onShare: function(item) {
                  Toast.showToast('Share ' + item.id);
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
            doRefresh: function () {
              $timeout(function () {
                $rootScope.$broadcast('scroll.refreshComplete');
              }, 2000);
            }
          };
        },
        prepareParams: function(item){
            return {
                listViewsVisible: true,
                googleCardsVisible: true,
                theme: item.theme,
                data: this.getDataForTheme(item.theme),
                events: this.getEventsForTheme(item.theme)
            };
        }
    };
}]);
