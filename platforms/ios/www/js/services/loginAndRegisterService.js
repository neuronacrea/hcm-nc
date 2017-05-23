App.factory('LoginAndRegisterService', ['Toast', function(Toast){
    return {
        getTitle: function(){
            return 'Login Pages';
        },
        getItemTitle: function(item) {
            return item ? this.getTitle() + ' ' + item.theme : '';
        },
        getAllThemes: function(){
            return [
                {
                    title: 'Light',
                    type: 'login',
                    theme: 'light'
                },
                {
                    title: 'Dark',
                    type: 'login',
                    theme: 'dark'
                },
                {
                    title: 'Media',
                    type: 'login',
                    theme: 'media'
                },
                {
                    title: 'Social',
                    type: 'login',
                    theme: 'social'
                },
                {
                    title: 'Travel',
                    type: 'login',
                    theme: 'travel'
                },
                {
                    title: 'Register shop',
                    type: 'register',
                    theme: 'shop'
                },
                {
                    title: 'Register travel',
                    type: 'register',
                    theme: 'travel'
                }
            ];
        },
        getLoginDataForTheme: function(theme){
            return this[
                'getLoginDataFor' + theme.charAt(0).toUpperCase() + theme.slice(1)
            ]();
        },
        getLoginDataForLight: function(){
            return {
                backgroundImage: '/android_asset/www/img/background/generalBackground.jpg',
                logo : "/android_asset/www/img/logo/logo.png",
                username: 'Nombre de usuario',
                password: 'Contraseña',
                register: '',
                login: 'Ingresar',
                iconAccount: 'icon-account',
                iconKey: 'icon-key',
                facebook: 'Facebook',
                twitter: 'Twitter',
                google: 'Google',
                pinterest: 'Pinterest',
                signInWith: 'Or sign in with:'
            };
        },
        getLoginDataForDark: function(){
            return {
                backgroundImage: '/android_asset/www/img/background/generalBackground.jpg',
                logo : "/android_asset/www/img/logo/logo.png",
                username: 'Correo Electronico',
                password: 'Password',
                register: 'Register',
                login: 'Enviar contraseña al correo',
                iconAccount: 'icon-account',
                iconKey: 'icon-key',
                facebook: 'Facebook',
                twitter: 'Twitter',
                google: 'Google',
                pinterest: 'Pinterest',
                signInWith: 'Or sign in with:'

            };
        },
        getLoginDataForMedia: function(){
            return {
                backgroundImage: '/android_asset/www/img/background/loginmedia.jpg',
                logo : "/android_asset/www/img/logo/login-media.png",
                username: 'Username',
                password: 'Password',
                skip: 'Skip',
                register: 'Register',
                login: 'Login',
                facebook: 'Facebook',
                twitter: 'Twitter',
                google: 'Google',
                pinterest: 'Pinterest',
                signInWith: 'Or sign in with:'
            };
        },
        getLoginDataForSocial: function(){
            return {
                backgroundImage: 'img/background/loginsocial.jpg',
                logo : "img/logo/login-social.png",
                username: 'Username',
                password: 'Password',
                skip: 'Skip',
                register: 'Register',
                login: 'Login',
                facebook: 'Facebook',
                twitter: 'Twitter',
                google: 'Google',
                pinterest: 'Pinterest',
                signInWith: 'Or sign in with:'
            };
        },
        getLoginDataForTravel: function(){
            return {
                backgroundImage: 'img/background/logintravel.jpg',
                logo : "img/logo/login-travel.png",
                username: 'Username',
                password: 'Password',
                skip: 'Skip',
                register: 'Register',
                login: 'Login',
                iconAccount: 'icon-account',
                iconLock: 'icon-lock',
                facebook: 'Facebook',
                twitter: 'Twitter',
                google: 'Google',
                pinterest: 'Pinterest',
                signInWith: 'Or sign in with:'
            };
        },
        getRegisterDataForTheme: function(theme){
            return this[
                'getRegisterDataFor' + theme.charAt(0).toUpperCase() + theme.slice(1)
            ]();
        },
        getRegisterDataForShop: function(){
            return {
                backgroundImage: 'img/background/registershop.jpg',
                logo : "img/logo/login-shop.png",
                iconAccount: 'icon-account',
                iconAccountMultiple: 'icon-account-multiple',
                iconHome: 'icon-home-variant',
                iconCity: 'icon-city',
                iconWeb: 'icon-web',
                button: 'submit',
                username: 'Username',
                password: 'Password',
                address: 'Address',
                city: 'City',
                state: 'State'

            };
        },
        getRegisterDataForTravel: function(){
            return {
                backgroundImage: 'img/background/registertravel.jpg',
                logo: 'img/logo/login-register.png',
                title: 'Register',
                username: 'Username',
                password: 'Password',
                email: 'Email',
                country: 'Country',
                city: 'City',
                register: 'Register',
                skip: 'Skip',
                iconAccount: 'icon-account',
                iconLock: 'icon-lock',
                iconEmail: 'icon-email-outline',
                iconFlag: 'icon-flag-outline-variant',
                iconCity: 'icon-city'
            };
        },
        getLoginEvents: function(){
            return {
                onLogin: function(params){
                    Toast.showToast('LOGIN');
                    console.log( "login!!!" );
                },
                onRegister: function(params) {
                    Toast.showToast('REGISTER');
                },
                onSkip: function(params) {
                    Toast.showToast('SKIP');
                },
                onFacebook: function(params) {
                    Toast.showToast('Facebook');
                },
                onTwitter: function(params) {
                    Toast.showToast('Twitter');
                },
                onGoogle: function(params) {
                    Toast.showToast('Google');
                },
                onPinterest: function(params) {
                    Toast.showToast('Pinterest');
                }
            };
        },
        getRegisterEvents: function(){
            return {
                onRegister: function(params){
                    Toast.showToast('REGISTER');
                },
                onSkip: function(params){
                    Toast.showToast('SKIP');
                }
            };
        },
        prepareLoginParams: function(item){
            return {
                loginPagesVisible: true,
                theme: item.theme,
                data: this.getLoginDataForTheme(item.theme),
                events: this.getLoginEvents()
            };
        },
        prepareRegisterParams: function(item){
            return {
                registerPagesVisible: true,
                theme: item.theme,
                data: this.getRegisterDataForTheme(item.theme),
                events: this.getRegisterEvents()
            };
        },
        prepareParams: function(item){
            return this[
                'prepare' + item.type.charAt(0).toUpperCase() + item.type.slice(1) + 'Params'
            ](item);
        }
    };
}]);
