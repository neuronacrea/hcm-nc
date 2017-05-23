App.factory('ListViewStickyHeaderService', ['$timeout', '$rootScope', 'Toast', function($timeout, $rootScope, Toast) {
    return {
        getTitle: function() {
            return 'Sticky list headers';
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
        generateMediaItems: function(count) {
            var items = [];

            var item = {
                title: '',
                items: [
                    {
                        id: 1,
                        title: 'ArtistName',
                        description: 'AlbumName (2006)',
                        shortDescription: '33:42',
                        image: 'img/avatar/0.jpg',
                        icon: 'icon-play'
                    },
                    {
                        id: 2,
                        title: 'ArtistName',
                        description: 'AlbumName (2006)',
                        shortDescription: '33:42',
                        image: 'img/avatar/1.jpg',
                        icon: 'icon-play'
                    },
                    {
                        id: 3,
                        title: 'ArtistName',
                        description: 'AlbumName (2006)',
                        shortDescription: '33:42',
                        image: 'img/avatar/2.jpg',
                        icon: 'icon-play'
                    },
                    {
                        id: 4,
                        title: 'ArtistName',
                        description: 'AlbumName (2006)',
                        shortDescription: '33:42',
                        image: 'img/avatar/3.jpg',
                        icon: 'icon-play'
                    },
                    {
                        title: 'ArtistName',
                        description: 'AlbumName (2006)',
                        shortDescription: '33:42',
                        image: 'img/avatar/4.jpg',
                        icon: 'icon-play'
                    }
                ]
            };

            for (var i = 0; i < count; i++) {
                var currentItem = angular.copy(item);
                currentItem.title = 'Jazzz ' + i;
                currentItem.icon = 'icon-heart-box-outline';
                items[i] = currentItem;
            }

            return items;
        },
        generateShopItems: function(count) {
            var items = [];

            var group = {
                title: '',
                items: []
            };

            var item = {
                id: '',
                image: '',
                image1: '',
                image2: '',
                image3: '',
                image4: '',
                title: 'Product name',
                description: 'Free shipping',
                oldPrice: "42.99$",
                newPrice: "35.99",
                button: "BUY"
            };

            for (var g = 0; g < count; g++) {
                var currentGroup = angular.copy(group);
                currentGroup.title = 'Wardrobe ' + (g + 1);
                for (var i = 0; i < 2; i++) {
                    var currentItem = angular.copy(item);
                    currentItem.id = i + 1;
                    currentItem.image = 'http://pengaja.com/uiapptemplate/newphotos/listviews/stickylistheaders/shop/' + Math.floor(Math.random() * 6) + '.jpg';
                    currentItem.image1 = 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/shop/' + Math.floor(Math.random() * 6) + '.jpg';
                    currentItem.image2 = 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/shop/' + Math.floor(Math.random() * 6) + '.jpg';
                    currentItem.image3 = 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/shop/' + Math.floor(Math.random() * 6) + '.jpg';
                    currentItem.image4 = 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/shop/' + Math.floor(Math.random() * 6) + '.jpg';
                    currentGroup.items[i] = currentItem;
                }
                items[g] = currentGroup;
            }

            return items;
        },
        generateSocialItems: function(count) {
            var items = [];

            var item = {
                title: 'Yesterday',
                description: '14.06.2016',
                icon: 'icon-calendar-today',
                items: [
                    {
                        id: '',
                        title: 'John Smit ',
                        image: 'img/avatar/0.jpg',
                        iconLike: 'icon-thumb-up',
                        iconBookmark: 'icon-bookmark',
                        iconShare: 'icon-share-variant',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also'
                    },
                    {
                        id: '',
                        title: 'John Smit ',
                        image: 'img/avatar/1.jpg',
                        iconLike: 'icon-thumb-up',
                        iconBookmark: 'icon-bookmark',
                        iconShare: 'icon-share-variant',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also'
                    },
                    {
                        id: '',
                        title: 'John Smit ',
                        image: 'img/avatar/2.jpg',
                        iconLike: 'icon-thumb-up',
                        iconBookmark: 'icon-bookmark',
                        iconShare: 'icon-share-variant',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also'
                    },
                    {
                        id: '',
                        title: 'John Smit ',
                        image: 'img/avatar/3.jpg',
                        iconLike: 'icon-thumb-up',
                        iconBookmark: 'icon-bookmark',
                        iconShare: 'icon-share-variant',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also'
                    },
                    {
                        id: '',
                        title: 'John Smit ',
                        image: 'img/avatar/4.jpg',
                        iconLike: 'icon-thumb-up',
                        iconBookmark: 'icon-bookmark',
                        iconShare: 'icon-share-variant',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also'
                    },
                    {
                        id: '',
                        title: 'John Smit ',
                        image: 'img/avatar/5.jpg',
                        iconLike: 'icon-thumb-up',
                        iconBookmark: 'icon-bookmark',
                        iconShare: 'icon-share-variant',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also'
                    }
                ]
            };

            var id = 0;

            for (var i = 0; i < count; i++) {
                var group = angular.copy(item);

                for (var j = 0; j < group.items.length; j++) {
                    group.items[j].id = id;
                    group.items[j].title = group.items[j].title + id;
                    id++;
                }

                items[i] = group;
            }

            return items;
        },
        generateTravelItems: function(count) {
            var items = [];

            var group = {
                title: '',
                icon: 'icon-home-variant',
                items: []
            };

            var item = {
                title: '',
                description: '3:30min walking tour',
                price: '112$',
                iconWalk: 'icon-walk',
                iconHome: 'icon-home-variant'

            };
        
            var listImages = [
                    'http://pengaja.com/uiapptemplate/newphotos/listviews/expandable/travel/expandable_travel_background_image.jpg', 
                    'http://pengaja.com/uiapptemplate/newphotos/listviews/stickylistheaders/travel/1.jpg', 
                    'http://pengaja.com/uiapptemplate/newphotos/listviews/stickylistheaders/travel/2.jpg',
                    'http://pengaja.com/uiapptemplate/newphotos/listviews/stickylistheaders/travel/3.jpg',
                    'http://pengaja.com/uiapptemplate/newphotos/listviews/stickylistheaders/travel/4.jpg',
                    'http://pengaja.com/uiapptemplate/newphotos/listviews/stickylistheaders/travel/5.jpg',
                    'http://pengaja.com/uiapptemplate/newphotos/listviews/stickylistheaders/travel/6.jpg'
            ];

            for (var g = 0; g < count; g++) {
                var currentGroup = angular.copy(group);
                currentGroup.title = 'HOTELS ' + (g + 1);
                for (var i = 0; i < count; i++) {
                    var currentItem = angular.copy(item);
                    currentItem.title = 'Hotel Palace ' + (g * count + i);
                    currentItem.image = listImages[i % listImages.length];
                    currentGroup.items[i] = currentItem;
                }
                items[g] = currentGroup;
            }

            return items;
        },
        generateUniversalItems: function(count) {
            var items = [];

            var group = {
                title: '',
                items: []
            };

            var item = {
                title: '',
                image: ''
            };

            for (var g = 0; g < count; g++) {
                var currentGroup = angular.copy(group);
                currentGroup.title = 'Header ' + g;
                for (var i = 0; i < count; i++) {
                    var currentItem = angular.copy(item);
                    currentItem.title = 'Row number ' + (g * count + i);
                    currentItem.image = 'img/avatar/' + i + '.jpg';
                    currentItem.favorite = (i % 2 == 0) ? true : false;
                    currentGroup.items[i] = currentItem;
                }
                items[g] = currentGroup;
            }

            return items;
        },

        getDataForMedia: function() {
            return {
                backgroundImage: 'img/background/loginmedia.jpg',
                refreshMessage : 'Pull to refresh...',
                items: this.generateMediaItems(10)
            };
        },
        getDataForShop: function() {
            return {
                refreshMessage : 'Pull to refresh...',
                items: this.generateShopItems(10)
            };
        },
        getDataForSocial: function() {
             return {
                refreshMessage : 'Pull to refresh...',
                items: this.generateSocialItems(10)
            };
        },
        getDataForTravel: function() {
            return {
                refreshMessage : 'Pull to refresh...',
                items: this.generateTravelItems(10)
            };
        },
        getDataForUniversal: function() {
            return {
                refreshMessage : 'Pull to refresh...',
                items: this.generateUniversalItems(10)
            };
        },
        getEventsForTheme: function(theme) {
            return this[
                'getEventsFor' + theme.charAt(0).toUpperCase() + theme.slice(1)
            ]();
        },
        getEventsForMedia: function() {
            return {
                onGroup: function(item) {
                    Toast.showToast(item.title);
                },
                onPlay: function(item) {
                    Toast.showToast('Play ' + item.id);
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
                onGroup: function(item) {
                    Toast.showToast(item.title);
                },
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
                onBookmark: function(item) {
                    Toast.showToast('Bookmark ' + item.id);
                },
                onShare: function(item) {
                    Toast.showToast('Share ' + item.id);
                },
                onImage: function(item) {
                    Toast.showToast('User image ' + item.id);
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
                stickyListHeadersVisible: true,
                theme: item.theme,
                data: this.getDataForTheme(item.theme),
                events: this.getEventsForTheme(item.theme)
            };
        }
    };
}]);
