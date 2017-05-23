App.factory('SplashScreenService', [function (){
    return {
        getTitle: function(){
            return 'Splash Screens';
        },
        getItemTitle: function(item) {
          return item ? item.title : '';
        },
        getAllThemes: function (){
            return [
                {
                    title: 'Fade in + Ken Burns 1',
                    theme: 'fade-in-ken-burn'
                },
                {
                    title: 'Down + Ken Burns',
                    theme: 'down-ken-burn'
                },
                {
                    title: 'Down + fade in + Ken Burns',
                    theme: 'down-fade-in-ken-burn'
                }
            ];
        },
        getDataForTheme: function(theme){
            var data = {
                redirectTo: '/app/splashScreens'
            };

          switch (theme) {
            case 'fade-in-ken-burn':
              data.duration = 10000;
              data.backgroundImage = 'img/background/loginmedia.jpg';
              data.logo = 'img/logo/login-universal-light.png';
              break;

            case 'down-ken-burn':
              data.duration = 10000;
              data.backgroundImage= 'img/background/registershop.jpg';
              data.logo = 'img/logo/login-universal-light.png';
              break;

            case 'down-fade-in-ken-burn':
              data.duration = 10000;
              data.backgroundImage = 'img/background/logintravel.jpg';
              data.logo = 'img/logo/login-universal-light.png';
              data.title = 'Title';
              break;
          }

          return data;
        },
        getEventsForTheme: function(){
            return;
        },
        prepareParams: function(item){
            return {
                splashScreensVisible: true,
                theme: item.theme,
                data: this.getDataForTheme(item.theme),
                events: this.getEventsForTheme(item.theme)
            };
        }
    };
}]);
