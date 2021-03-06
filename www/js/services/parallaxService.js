App.factory('ParallaxService', ['Toast', function (Toast) {
    return {
        getTitle: function () {
            return 'Parallax';
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
                },
                {
                  title: 'Swiper',
                  theme: 'swiper'
                }
            ];
        },
        getDataForTheme: function (theme) {
            var getData = this[
                    'getDataFor' + theme.charAt(0).toUpperCase() + theme.slice(1)
            ];
            return getData ? getData() : [];
        },
        getDataForUniversal: function() {
            return {
                headerImage: 'http://pengaja.com/uiapptemplate/newphotos/listviews/googlecards/travel/1.jpg',
                avatar: 'img/avatar/0.jpg',
                avatarAlt: 'Avatar',
                items: [
                    {
                        id: 1,
                        title: 'Isaac Raid',
                        icon: 'img/avatar/0.jpg',
                        favorite: false
                    },
                    {
                        id: 2,
                        title: 'Jason Graham',
                        icon: 'img/avatar/1.jpg',
                        favorite: false
                    },
                    {
                        id: 3,
                        title: 'Abigail Ross',
                        icon: 'img/avatar/2.jpg',
                        favorite: false
                    },
                    {
                        id: 4,
                        title: 'Justin Rutherford',
                        icon: 'img/avatar/3.jpg',
                        favorite: false
                    },
                    {
                        id: 5,
                        title: 'Nicholas Henderson',
                        icon: 'img/avatar/4.jpg',
                        favorite: false
                    },
                    {
                        id: 6,
                        title: 'Elizabeth Mackenzie',
                        icon: 'img/avatar/5.jpg',
                        favorite: false
                    },
                    {
                        id: 7,
                        title: 'Melanie Ferguson',
                        icon: 'img/avatar/6.jpg',
                        favorite: false
                    },
                    {
                        id: 8,
                        title: 'Fiona Kelly',
                        icon: 'img/avatar/7.jpg',
                        favorite: false
                    },
                    {
                        id: 9,
                        title: 'Nicholas King',
                        icon: 'img/avatar/8.jpg',
                        favorite: false
                    },
                    {
                        id: 10,
                        title: 'Victoria Mitchell',
                        icon: 'img/avatar/9.jpg',
                        favorite: false
                    },
                    {
                        id: 11,
                        title: 'Sophie Lyman',
                        icon: 'img/avatar/10.jpg',
                        favorite: false
                    },
                    {
                        id: 12,
                        title: 'Carl Ince',
                        icon: 'img/avatar/11.jpg',
                        favorite: false
                    },
                    {
                        id: 13,
                        title: 'Michelle Slater',
                        icon: 'img/avatar/12.jpg',
                        favorite: false
                    },
                    {
                        id: 14,
                        title: 'Ryan Mathis',
                        icon: 'img/avatar/13.jpg',
                        favorite: false
                    },
                    {
                        id: 15,
                        title: 'Julia Grant',
                        icon: 'img/avatar/14.jpg',
                        favorite: false
                    },
                    {
                        id: 16,
                        title: 'Hannah Martin',
                        icon: 'img/avatar/15.jpg',
                        favorite: false
                    }
                ]
            };
        },
        getDataForMedia: function() {
          return {
                headerImage: 'http://pengaja.com/uiapptemplate/newphotos/parallax/media/1.jpg',
                containerBodyImage : 'img/background/loginmedia.jpg',
                title: 'ArtistName',
                iconLike: 'icon-thumb-up',
                iconFavorite: 'icon-heart',
                iconShare: 'icon-share-variant',
                iconSkipPrevious: 'icon-skip-previous',
                iconPlay: 'icon-play',
                iconSkipNext: 'icon-skip-next',
                items: [
                    {
                        id: 1,
                        title: 'SongName',
                        description: 'ArtistName',
                        image: 'img/avatar/0.jpg',
                        imageAlt: 'avatar',
                        icon: 'icon-heart-outline',
                        duration: '3:42'
                    },
                    {
                        id: 2,
                        title: 'SongName',
                        description: 'ArtistName',
                        image: 'img/avatar/1.jpg',
                        imageAlt: 'avatar',
                        icon: 'icon-heart-outline',
                        duration: '3:42'
                    },
                    {
                        id: 3,
                        title: 'SongName',
                        description: 'ArtistName',
                        image: 'img/avatar/2.jpg',
                        imageAlt: 'avatar',
                        icon: 'icon-heart-outline',
                        duration: '3:42'
                    },
                    {
                        id: 4,
                        title: 'SongName',
                        description: 'ArtistName',
                        image: 'img/avatar/3.jpg',
                        imageAlt: 'avatar',
                        icon: 'icon-heart-outline',
                        duration: '3:42'
                    },
                    {
                        id: 5,
                        title: 'SongName',
                        description: 'ArtistName',
                        image: 'img/avatar/4.jpg',
                        imageAlt: 'avatar',
                        icon: 'icon-heart-outline',
                        duration: '3:42'
                    },
                    {
                        id: 6,
                        title: 'SongName',
                        description: 'ArtistName',
                        image: 'img/avatar/5.jpg',
                        imageAlt: 'avatar',
                        icon: 'icon-heart-outline',
                        duration: '3:42'
                    },
                    {
                        id: 7,
                        title: 'SongName',
                        description: 'ArtistName',
                        image: 'img/avatar/6.jpg',
                        imageAlt: 'avatar',
                        icon: 'icon-heart-outline',
                        duration: '3:42'
                    },
                    {
                        id: 8,
                        title: 'SongName',
                        description: 'ArtistName',
                        image: 'img/avatar/7.jpg',
                        imageAlt: 'avatar',
                        icon: 'icon-heart-outline',
                        duration: '3:42'
                    },
                    {
                        id: 9,
                        title: 'SongName',
                        description: 'ArtistName',
                        image: 'img/avatar/1.jpg',
                        imageAlt: 'avatar',
                        icon: 'icon-heart-outline',
                        duration: '3:42'
                    },
                    {
                        id: 10,
                        title: 'SongName',
                        description: 'ArtistName',
                        image: 'img/avatar/2.jpg',
                        imageAlt: 'avatar',
                        icon: 'icon-heart-outline',
                        duration: '3:42'
                    },
                    {
                        id: 11,
                        title: 'SongName',
                        description: 'ArtistName',
                        image: 'img/avatar/0.jpg',
                        imageAlt: 'avatar',
                        icon: 'icon-heart-outline',
                        duration: '3:42'
                    },
                    {
                        id: 12,
                        title: 'SongName',
                        description: 'ArtistName',
                        image: 'img/avatar/3.jpg',
                        imageAlt: 'avatar',
                        icon: 'icon-heart-outline',
                        duration: '3:42'
                    }
                ]
          };
        },
         getDataForShop: function() {
          return {
                containerBodyImage:'http://pengaja.com/uiapptemplate/newphotos/background/registershop.jpg',
                headerImage: 'http://pengaja.com/uiapptemplate/newphotos/listviews/googlecards/social/7.jpg',
                title: 'Super discount',
                description: '50% OFF',
                iconLike: 'icon-thumb-up',
                iconFavorite: 'icon-heart',
                iconShare: 'icon-share-variant',
                items: [
                    {
                        id: 1,
                        title: 'Black Shirt',
                        image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/shop/0.jpg',
                        description: 'Duis aute irure dolor in reprehenderit',
                        oldPrice: '$42.99',
                        newPrice: '$35.99'
                    },
                    {
                        id: 2,
                        title: 'Black Sweater',
                        image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/shop/1.jpg',
                        description: 'Duis aute irure dolor in reprehenderit',
                        oldPrice: '$42.99',
                        newPrice: '$35.99'
                    },
                    {
                        id: 3,
                        title: 'Shirt',
                        image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/shop/2.jpg',
                        description: 'Duis aute irure dolor in reprehenderit',
                        oldPrice: '$42.99',
                        newPrice: '$35.99'
                    },
                    {
                        id: 4,
                        title: 'White Shirt',
                        image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/shop/3.jpg',
                        description: 'Duis aute irure dolor in reprehenderit',
                        oldPrice: '$42.99',
                        newPrice: '$35.99'
                    },
                    {
                        id: 5,
                        title: 'White T Shirt',
                        image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/shop/4.jpg',
                        description: 'Duis aute irure dolor in reprehenderit',
                        oldPrice: '$42.99',
                        newPrice: '$35.99'
                    },
                    {
                        id: 6,
                        title: 'Hoodies',
                        image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/shop/5.jpg',
                        description: 'Duis aute irure dolor in reprehenderit',
                        oldPrice: '$42.99',
                        newPrice: '$35.99'
                    },
                    {
                      id: 7,
                      title: 'Black Shirt',
                      image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/shop/0.jpg',
                      description: 'Duis aute irure dolor in reprehenderit',
                      oldPrice: '$42.99',
                      newPrice: '$35.99'
                    },
                    {
                      id: 8,
                      title: 'Black Sweater',
                      image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/shop/1.jpg',
                      description: 'Duis aute irure dolor in reprehenderit',
                      oldPrice: '$42.99',
                      newPrice: '$35.99'
                    },
                    {
                      id: 9,
                      title: 'Shirt',
                      image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/shop/2.jpg',
                      description: 'Duis aute irure dolor in reprehenderit',
                      oldPrice: '$42.99',
                      newPrice: '$35.99'
                    },
                    {
                      id: 10,
                      title: 'White Shirt',
                      image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/shop/3.jpg',
                      description: 'Duis aute irure dolor in reprehenderit',
                      oldPrice: '$42.99',
                      newPrice: '$35.99'
                    },
                    {
                      id: 11,
                      title: 'White T Shirt',
                      image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/shop/4.jpg',
                      description: 'Duis aute irure dolor in reprehenderit',
                      oldPrice: '$42.99',
                      newPrice: '$35.99'
                    },
                    {
                      id: 12,
                      title: 'Hoodies',
                      image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/swipetodissmiss/shop/5.jpg',
                      description: 'Duis aute irure dolor in reprehenderit',
                      oldPrice: '$42.99',
                      newPrice: '$35.99'
                    }
                ]
          };
        },
        getDataForSocial: function() {
          return {
                headerImage: 'http://pengaja.com/uiapptemplate/newphotos/parallax/social/7.jpg',
                title: 'Jone Smith',
                description: 'from New York, USA',
                duration : '22 min ago',
                friends : '152 friends',
                iconDuration: 'icon-alarm-check',
                iconFriends: 'icon-account-multiple',
                avatar: 'img/avatar/0.jpg',
                avatarAlt: 'avatar',
                items: [
                    {
                        id: 1,
                        name: 'Jane Smith',
                        image: 'http://pengaja.com/uiapptemplate/newphotos/parallax/social/1.jpg',
                        avatar: 'img/avatar/2.jpg',
                        avatarAlt : 'Avatar',
                        duration: '1 hours ago',
                        like: 'LIKE',
                        comment: 'COMMENT',
                        share: 'SHARE'
                    },
                    {
                        id: 2,
                        name: 'Jane Smith',
                        image: 'http://pengaja.com/uiapptemplate/newphotos/parallax/social/2.jpg',
                        avatar: 'img/avatar/2.jpg',
                        avatarAlt : 'Avatar',
                        duration: '2 hours ago',
                        like: 'LIKE',
                        comment: 'COMMENT',
                        share: 'SHARE'
                    },
                    {
                        id: 3,
                        name: 'Jane Smith',
                        image: 'http://pengaja.com/uiapptemplate/newphotos/parallax/social/3.jpg',
                        avatar: 'img/avatar/2.jpg',
                        avatarAlt : 'Avatar',
                        duration: '3 hours ago',
                        like: 'LIKE',
                        comment: 'COMMENT',
                        share: 'SHARE'
                    },
                    {
                        id: 4,
                        name: 'Jane Smith',
                        image: 'http://pengaja.com/uiapptemplate/newphotos/parallax/social/4.jpg',
                        avatar: 'img/avatar/2.jpg',
                        avatarAlt : 'Avatar',
                        duration: '4 hours ago',
                        like: 'LIKE',
                        comment: 'COMMENT',
                        share: 'SHARE'
                    },
                    {
                        id: 5,
                        name: 'Jane Smith',
                        image: 'http://pengaja.com/uiapptemplate/newphotos/parallax/social/5.jpg',
                        avatar: 'img/avatar/2.jpg',
                        avatarAlt : 'Avatar',
                        duration: '5 hours ago',
                        like: 'LIKE',
                        comment: 'COMMENT',
                        share: 'SHARE'
                    },
                    {
                        id: 6,
                        name: 'Jane Smith',
                        image: 'http://pengaja.com/uiapptemplate/newphotos/parallax/social/6.jpg',
                        avatar: 'img/avatar/2.jpg',
                        avatarAlt : 'Avatar',
                        duration: '6 hours ago',
                        like: 'LIKE',
                        comment: 'COMMENT',
                        share: 'SHARE'
                    },
                    {
                        id: 7,
                        name: 'Jane Smith',
                        image: 'http://pengaja.com/uiapptemplate/newphotos/parallax/social/7.jpg',
                        avatar: 'img/avatar/2.jpg',
                        avatarAlt : 'Avatar',
                        duration: '7 hours ago',
                        like: 'LIKE',
                        comment: 'COMMENT',
                        share: 'SHARE'
                    }
                ]
          };
        },
        getDataForTravel: function() {
            return {
                headerImage: 'http://pengaja.com/uiapptemplate/newphotos/parallax/travel/1.jpg',
                iconLike: 'icon-star-outline',
                iconFavorite: 'icon-comment',
                iconShare: 'icon-share-variant',
                reviews : '4.12 (78 reviews)',
                iconButton: 'icon-walk',
                description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequ.',
                description2 : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequ.',
                iconsStar: [
                    {
                        isActive : true,
                        iconActive: 'icon-star',
                        iconInactive: 'icon-star-outline'
                    },
                    {
                        isActive : true,
                        iconActive: 'icon-star',
                        iconInactive: 'icon-star-outline'
                    },
                    {
                        isActive : true,
                        iconActive: 'icon-star',
                        iconInactive: 'icon-star-outline'
                    },
                    {
                        isActive : true,
                        iconActive: 'icon-star',
                        iconInactive: 'icon-star-outline'
                    },
                    {
                        isActive : false,
                        iconActive: 'icon-star',
                        iconInactive: 'icon-star-outline'
                    },
                ],
                items: [
                    {
                        name: 'ADDRESS:',
                        value: 'Boulevard of food, New York, USA'
                    },
                    {
                        name: 'PHONE:',
                        value: "+555 555 555"
                    },
                    {
                        name: 'WEB:',
                        value: 'www.joesrestaurant.com'
                    },
                    {
                        name: 'MAIL:',
                        value: 'markomarkovic@gmail.com'
                    },
                    {
                        name: 'WORKING HOURS:',
                        value: '7:00 to 23:00 every day'
                    }
                ],

            };
        },
        getDataForSwiper: function() {
            return {
                headerImages: [
                  'http://pengaja.com/uiapptemplate/uiionictemplate/listviews/parallax/swiper/2.jpg',
                  'http://pengaja.com/uiapptemplate/uiionictemplate/listviews/parallax/swiper/1.jpg',
                  'http://pengaja.com/uiapptemplate/uiionictemplate/listviews/parallax/swiper/3.jpg',
                  'http://pengaja.com/uiapptemplate/uiionictemplate/listviews/parallax/swiper/4.jpg'
                ],
                iconLike: 'icon-thumb-up',
                iconFavorite: 'icon-heart',
                iconShare: 'icon-share-variant',
                reviews : '4.12 (78 reviews)',
                iconButton: 'icon-basket-fill',
                title: "Product Name",
                price: '$55',
                featured: 'Featured',
                iconsStar: [
                    {
                        isActive : true,
                        iconActive: 'icon-star',
                        iconInactive: 'icon-star-outline'
                    },
                    {
                        isActive : true,
                        iconActive: 'icon-star',
                        iconInactive: 'icon-star-outline'
                    },
                    {
                        isActive : true,
                        iconActive: 'icon-star',
                        iconInactive: 'icon-star-outline'
                    },
                    {
                        isActive : true,
                        iconActive: 'icon-star',
                        iconInactive: 'icon-star-outline'
                    },
                    {
                        isActive : false,
                        iconActive: 'icon-star',
                        iconInactive: 'icon-star-outline'
                    },
                ],
                items: [
                    {
                        name: 'About product:',
                        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequ.'
                    },
                    {
                        name: 'Material:',
                        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
                    },
                    {
                        name: 'Brand:',
                        value: 'Lorem ipsum'
                    },
                    {
                        name: 'Country:',
                        value: "USA"
                    }
                ],

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
                    Toast.showToast('Play');
                },
                onNext: function(item) {
                    Toast.showToast('Next');
                },
                onPrevious: function(item) {
                    Toast.showToast('Previous');
                },
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
        getEventsForShop: function(item) {
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
        getEventsForSocial: function(item) {
            return {
                onLike: function(item) {
                    Toast.showToast('Like');
                },
                onComment: function(item) {
                    Toast.showToast('Favorite');
                },
                onShare: function(item) {
                    Toast.showToast('Share');
                }
            };
        },
        getEventsForTravel: function(item) {
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
                  Toast.showToast("Run");
                },
                onRates: function (items, index) {
                  for (var i = 0; i < items.length; i++) {
                    if (i <= index) {
                      items[i].isActive = true;
                    } else {
                      items[i].isActive = false;
                    }
                  }
                }
            };
        },
        getEventsForSwiper: function(item) {
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
                  Toast.showToast("Buy");
                },
                onRates: function (items, index) {
                  for (var i = 0; i < items.length; i++) {
                    if (i <= index) {
                      items[i].isActive = true;
                    } else {
                      items[i].isActive = false;
                    }
                  }
                }
            };
        },
        getEventsForUniversal: function(item) {
            return {
                onItemClick: function(item) {
                  item.favorite = !item.favorite;
                  Toast.showToast(item.title);
                }
            };
        },
        prepareParams: function(item) {
            return {
                parallaxVisible: true,
                theme: item.theme,
                data: this.getDataForTheme(item.theme),
                events: this.getEventsForTheme(item.theme)
            };
        }
    };
}]);
