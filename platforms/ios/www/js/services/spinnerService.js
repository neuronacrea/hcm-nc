App.factory('SpinnerService', [function () {
    return {
        getTitle: function () {
            return 'Spinner';
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
        getDataForTheme: function (theme) {
            var getData = this[
                    'getDataFor' + theme.charAt(0).toUpperCase() + theme.slice(1)
            ];
            return getData ? getData() : [];
        },
        getDataForUniversal: function() {
            return {
                items: [
                    {
                      'icon' : 'tail-spin'
                    },
                    {
                      'icon' : 'oval'
                    }
                ]
            };
        },
        getDataForMedia: function() {
          return {
                items: [
                    {
                      'icon' : 'audio'
                    },
                    {
                      'icon' : 'bars'
                    }
                ]
            };
        },
        getDataForSocial: function() {
          return {
                items: [
                    {
                      'icon' : 'hearts'
                    },
                    {
                      'icon' : 'three-dots'
                    }
                ]
            };
        },
        getDataForTravel: function() {
            return {
                items: [
                    {
                      'icon' : 'puff'
                    },
                    {
                      'icon' : 'grid'
                    }
                ]
            };
        },
        getDataForShop: function() {
            return {
                items: [
                    {
                      'icon' : 'ball-triangle'
                    },
                    {
                      'icon' : 'circles'
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
            return;
        },
        getEventsForShop: function(item) {
            return;
        },
        getEventsForSocial: function(item) {
            return;
        },
        getEventsForTravel: function(item) {
            return;
        },
        getEventsForUniversal: function(item) {
            return;
        },
        prepareParams: function(item) {
            return {
                spinnerVisible: true,
                theme: item.theme,
                data: this.getDataForTheme(item.theme),
                events: this.getEventsForTheme(item.theme)
            };
        }
    };
}]);
