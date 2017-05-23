App.factory('MenuService', function () {
    return {
        getAllItems: function () {
            return [
                {
                    title: 'Perfil',
                    url: 'profile',
                    icon: 'icon-account-circle'
                },
                {
                    title: 'Detalle salario',
                    url: 'salary//',
                    icon: 'icon-account-circle'
                },
                {
                    title: 'Vacaciones',
                    url: 'vacations',
                    icon: 'icon-account-circle'
                },
                {
                    title: 'Solicitudes',
                    url: 'news',
                    icon: 'icon-format-align-justify'
                }
            ];
        }
    };
});
