App.factory('WizardService', ['Toast', function(Toast) {
    return {
        getTitle: function() {
            return 'Wizard';
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
              'backgroundImage': 'img/background/loginmedia.jpg',
              'btnPrev': 'Previous',
              'btnNext': 'Next',
              'btnFinish': 'Finish',
              'items': [
                {
                  logo: '',
                  iconSlider: 'icon-star-outline',
                  title: 'Fragment Example 1',
                  description: 'Text for Fragment Example 1 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                  buttonNext: 'Next'
                },
                {
                  logo: '',
                  iconSlider: 'icon-star-half',
                  title: 'Fragment Example 2',
                  description: 'Text for Fragment Example 2 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                  buttonNext: 'Next',
                  buttonPrevious: 'Previous'
                },
                {
                  logo: '',
                  iconSlider: 'icon-star',
                  title: 'Fragment Example 3',
                  description: 'Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                  buttonPrevious: 'Previous',
                  buttonFinish: 'Finish'

                }
              ]
            };
        },
        getDataForShop: function() {
            return {
              'btnNext': 'Next',
              'btnFinish': 'Finish',
              'items': [
                {
                  image: 'http://pengaja.com/uiapptemplate/newphotos/wizard/shop/1.jpg',
                  title: 'Fragment Example 1',
                  button: 'Next'
                },
                {
                  image: 'http://pengaja.com/uiapptemplate/newphotos/wizard/shop/2.jpg',
                  title: 'Fragment Example 2',
                  button: 'Next'
                },
                {
                  image: 'http://pengaja.com/uiapptemplate/newphotos/wizard/shop/3.jpg',
                  title: 'Fragment Example 3',
                  button: 'Finish'
                }
              ]
            };
        },
        getDataForSocial: function() {
            return {
              'btnNext': 'Next',
              'btnFinish': 'Finish',
              'items': [
                {
                  backgroundImage: 'http://pengaja.com/uiapptemplate/newphotos/wizard/social/1.jpg',
                  title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 1',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                  button: 'Next',
                  skip : 'Skip'
                },
                {
                  backgroundImage: 'http://pengaja.com/uiapptemplate/newphotos/wizard/social/2.jpg',
                  title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 2',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                  button: 'Next',
                  skip : 'Skip'
                },
                {
                  backgroundImage: 'http://pengaja.com/uiapptemplate/newphotos/wizard/social/3.jpg',
                  title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 3',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                  button: 'Finish',
                  skip : 'Skip'
                }
              ]
            };
        },
        getDataForTravel: function() {
            return {
              'btnSignIn' : "Sign In",
              'items': [
                {
                  image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/googlecards/social/6.jpg',
                  title: 'Fragment Example 1',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                  button: 'Sign in'
                },
                {
                  image: 'http://pengaja.com/uiapptemplate/newphotos/parallax/social/1.jpg',
                  title: 'Fragment Example 2',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                  button: 'Sign in'
                },
                {
                  image: 'http://pengaja.com/uiapptemplate/newphotos/listviews/googlecards/travel/4.jpg',
                  title: 'Fragment Example 3',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                  button: 'Sign in'
                }
              ]
            };
        },
        getDataForUniversal: function() {
            return {
              'btnSkip': 'Skip',
              'items': [
                {
                  logo: '',
                  backgroundColor: '#9A519F',
                  icon: 'icon-cloud-outline',
                  title: 'Fragment Example 1',
                  description: 'Text for Fragment Example 1 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                  button: 'Skip'
                },
                {
                  logo: '',
                  backgroundColor: '#7b1fa2',
                  icon: 'icon-weather-rainy',
                  title: 'Fragment Example 2',
                  description: 'Text for Fragment Example 2 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                  button: 'Skip'
                },
                {
                  logo: '',
                  backgroundColor: '#4B2C86',
                  icon: 'icon-weather-hail',
                  title: 'Fragment Example 3',
                  description: 'Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                  button: 'Skip'
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
                onFinish: function() {
                    Toast.showToast("Finish");
                }
            };
        },
        getEventsForShop: function() {
            return {
                onFinish: function() {
                    Toast.showToast("Finish");
                }
            };
        },
        getEventsForSocial: function() {
            return {
                onFinish: function() {
                    Toast.showToast("Finish");
                },
                onSkip: function() {
                    Toast.showToast("Skip");
                }
            };
        },
        getEventsForTravel: function() {
           return {
                onSignIn: function() {
                    Toast.showToast("Sign in");
                }
            };
        },
        getEventsForUniversal: function() {
            return {
                onFinish: function() {
                    Toast.showToast("Finish");
                },
                onSkip: function() {
                    Toast.showToast("Skip");
                }
            };
        },
        prepareParams: function(item) {
            return {
                theme: item.theme,
                wizardVisible : true,
                data: this.getDataForTheme(item.theme),
                events: this.getEventsForTheme(item.theme)
            };
        }
    };
}]);
