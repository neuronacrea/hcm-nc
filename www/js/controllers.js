App.controller(
    'AppCtrl',
    [
        '$scope',
        '$state',
        '$location',
        'MenuService',
        'ListViewService',
        'ParallaxService',
        'LeftMenuService',
        'LoginAndRegisterService',
        'ImageGalleryService',
        'CheckBoxService',
        'SearchBarService',
        'SplashScreenService',
        'ShapeImageViewService',
        'TextViewService',
        'WizardService',
        'SpinnerService',
        'ProfileService',
        '$ionicSlideBoxDelegate',
        function (
            $scope,
            $state,
            $location,
            MenuService,
            ListViewService,
            ParallaxService,
            LeftMenuService,
            LoginAndRegisterService,
            ImageGalleryService,
            CheckBoxService,
            SearchBarService,
            SplashScreenService,
            ShapeImageViewService,
            TextViewService,
            WizardService,
            SpinnerService,
            ProfileService,
            $ionicSlideBoxDelegate
        ) {
            $scope.menuTitle = '';
            $scope.menuItems = [];
            $scope.title = '';
            $scope.items = [];
            $scope.params = {};
            $scope.stateParam = null;

            $scope.servicesMap = {
                listViews: ListViewService,
                leftMenus: LeftMenuService,
                parallax: ParallaxService,
                loginPages: LoginAndRegisterService,
                imageGallery: ImageGalleryService,
                splashScreens: SplashScreenService,
                searchBars: SearchBarService,
                checkBoxes: CheckBoxService,
                shapeImageViews: ShapeImageViewService,
                textViews : TextViewService,
                wizard : WizardService,
                spinner : SpinnerService,
                profile: ProfileService
            };

            $scope.onSelectItem = function(item){
                var service  = $scope.servicesMap[$state.params['item']];

                if (service) {
                    $scope.title = service.getItemTitle ? service.getItemTitle(item, $state.params['subitem']) : '';
                    $scope.params = service.prepareParams ? service.prepareParams(item, $state.params['subitem']) : {};
                }

                // if(analytics && typeof analytics !== undefined) {
                // analytics.trackView($scope.title);
                // }

                if ($state.params['item'] == "leftMenus") {
                    service.params = $scope.params;
                    $location.path('/leftMenu');
                } else {
                    $location.path('/app/content');
                }
            };

            $scope.initLeftMenu = function() {
                var service  = $scope.servicesMap['leftMenus'];
                $scope.params = service.params ? service.params : [];
            };

            $scope.initItemData = function(){
				 $location.path('/app/login');
            };

            $scope.initMenuData = function(){
                $scope.menuTitle = 'UIAppTemplate';
                $scope.menuItems = MenuService.getAllItems();
            };

            $scope.openLeftMenu = function () {
                $('body').addClass('menu-open');
                $('ion-side-menu-content').css({'transform' : 'translate3d(275px, 0px, 0px)'});
            };

            // Next Slide
            $scope.nextSlide = function() {
                $ionicSlideBoxDelegate.next();
            }
            $scope.prevSlide = function() {
                $ionicSlideBoxDelegate.previous();
            }
        }
    ]
);

App.controller(
    'LoginController',['$rootScope','$scope','$location','$http','$ionicLoading','Toast', '$state', '$ionicHistory',function ($rootScope,$scope,$location,$http,$ionicLoading,Toast, $state, $ionicHistory) {
        $scope.user = {};
        $scope.errorPass = false;
        $scope.errorUser = false;
        $ionicHistory.clearHistory();
        
        if (window.localStorage) {            
            if(localStorage.getItem("username")!=null){
                 $scope.user.username = localStorage.getItem("username");
                 document.getElementById("username").focus();
            }
        }
        
        $scope.limpiar= function(){
            if($scope.user.username!=null && $scope.user.username!=''){
                $('#username').removeClass('error-obligatorio');
                $scope.errorUser = false;
            }
            
            if($scope.user.password!=null && $scope.user.password!=''){
                $('#password').removeClass('error-obligatorio');
                $scope.errorPass = false;
            }
        }
        
        $scope.ingresar= function(){
            /*URL Conección*/
            /*$rootScope.urlbase = "http://52.183.60.70:8080/NominaWEB/services/";*/
            $rootScope.urlbase = "https://nomina.hgs.com.co/NominaWEB/services/";
            if($scope.user.username!=null && $scope.user.username!='' && $scope.user.password!=null && $scope.user.password!=''){
                
                $scope.error = true;
                $ionicLoading.show({
                    content: 'Loading',
                    animation: 'fade-in',
                    showBackdrop: true,
                    maxWidth: 100,
                    showDelay: 0
                });
                
                $http({
                    method: 'POST',
                    url: $rootScope.urlbase+'authentication/verificarDominio',
                    data:$scope.user.username
                }).then(function successCallback(response) {
                    if(response.data.resultado=='Aprobado'){
                        $rootScope.urlbase = response.data.t+"services/";
                       
                        var login = {
                            username:$scope.user.username,
                            password:$scope.user.password
                        };

                         $ionicLoading.show({
                            content: 'Loading',
                            animation: 'fade-in',
                            showBackdrop: true,
                            maxWidth: 100,
                            showDelay: 0
                        });

                        $http({
                            method: 'POST',
                            url: $rootScope.urlbase+'authentication',
                            data:login
                        }).then(function successCallback(response) { 
                            if(response.data.resultado=='Aprobado'){
                                $rootScope.usuario = {
                                    nombre: response.data.v,
                                    idPersona: "",
                                    token:response.data.t
                                }; 
                                console.log($rootScope.usuario);
                                if (window.localStorage) {            
                                    localStorage.setItem("username", $scope.user.username);
                                    console.log(localStorage.getItem("username"));
                                }
                                $ionicLoading.hide();
                                $location.path("/app/profile");
                            }else {
                                console.log(response);
                                $scope.user.mensaje = "Credenciales de usuario invalidas";
                                $scope.error = true;
                                $ionicLoading.hide();
                            }
                        }, function errorCallback(response) {
                            $ionicLoading.hide();    
                            $scope.user.mensaje = "Credenciales de usuario invalidas";
                            $scope.error = true;
                        });
                        
                    }else {
                        $scope.user.mensaje = "No se puede obtener la información de inicio de sesión";
                        $scope.error = true;
                        $ionicLoading.hide();
                    }
                }, function errorCallback(response) {
                    $ionicLoading.hide();    
                    $scope.user.mensaje = "No se puede obtener la información de inicio de sesión";
                    $scope.error = true;
                });                
                   
            }else{
                if($scope.user.username==null || $scope.user.username==''){
                    $scope.errorUser = true;
                    var element = document.getElementById("username");
                    element.className += ' error-obligatorio';
                    $scope.user.mensajeObligatorio = "El campo es obligatorio";
                }
                if($scope.user.password==null || $scope.user.password==''){
                    $scope.errorPass = true;
                    var element = document.getElementById("password");
                    element.className += ' error-obligatorio';
                    $scope.user.mensajeObligatorio = "El campo es obligatorio";
                }
            }            
        };
    }
    ]
);


App.controller(
    'ProfileController',['$rootScope', '$scope','$location','$http', '$ionicLoading','Toast',function ($rootScope, $scope, $location, $http, $ionicLoading, Toast) {
                       
        this.init= function(){
                        
            $http({
                method: 'GET',
                url: $rootScope.urlbase+ 'nomina/reciente',
                headers: {'token':$rootScope.usuario.token}
            }).then(function successCallback(response) {
                if(response.data.resultado=='Aprobado'){
                    $scope.profile.pago.total= response.data.t.total;
                    $scope.profile.pago.fechaInicio= new Date(response.data.t.fechaPeriodoInicial);
                    $scope.profile.pago.fechaFin= new Date(response.data.t.fechaPeriodoFin);                    
                }else if(response.data.codigoError!=null){
                    console.log(response);
                    $http({
                        method: 'GET',
                        url: $rootScope.urlbase+ 'errores/codigo/{'+response.data.codigoError+'}',
                        headers: {'token':$rootScope.usuario.token}
                    }).then(function successCallback(response) {                    
                        Toast.showToast(response.data,3000);
                    }, function errorCallback(response) {
                    $scope.error = true;
                    });
                }
            }, function errorCallback(response) {
                $scope.error = true;
            });     
                        
            $http({
                method: 'GET',
                url: $rootScope.urlbase+ 'foto/persona',
                headers: {'token':$rootScope.usuario.token}
            }).then(function successCallback(response) {                  
                $scope.profile.url=response.data;
                $rootScope.urlfoto = $scope.profile.url;
            }, function errorCallback(response) {
                $scope.error = true;
            });  
        };

        $scope.updateData = function(){
            $scope.profile = {};
            $scope.profile.pago = {};
            $scope.profile.nombre=$rootScope.usuario.nombre;
        }

        this.init();
    }
    ]
);

App.controller(
    'VacationController',['$rootScope', '$scope','$location','$http','Toast',function ($rootScope, $scope, $location, $http, Toast) {

    $scope.vacaciones = {};                     
    $scope.init= function(){  
            
        $http({
            method: 'GET',
            url: $rootScope.urlbase+ 'vacaciones/consolidado',
            headers: {'token':$rootScope.usuario.token}
        }).then(function successCallback(response) {
                if(response.data.resultado=='Aprobado'){
                    var fecha = new Date(response.data.t.fechaCorte);
                    $scope.vacaciones.fechaCorte=fecha;
                    $scope.vacaciones.consolidado=response.data.t.diasConsolidado;
                    $scope.vacaciones.politica=response.data.t.diasPolitica;
                    $scope.vacaciones.programado=response.data.t.diasProgramados;
                }else{
                    $scope.vacaciones.consolidado=0;
                    $scope.vacaciones.politica=0;
                    $scope.vacaciones.programado=0;
                }

            }, function errorCallback(response) {
                $scope.vacaciones.consolidado=0;
                $scope.vacaciones.politica=0;
                $scope.vacaciones.programado=0;
            });      
    }
    $scope.init();
        
        $scope.limpiar= function(){
            if($scope.vacaciones.fechaInicio!=null && $scope.vacaciones.fechaInicio!=''){
                $('#fechaInicioVacaciones').removeClass('error-obligatorio');
                $scope.errorF = false;
            }
        }
        
        $scope.solicitar= function(){
            
            this.limpiar();
            if($scope.vacaciones.fechaInicio!=null && $scope.vacaciones.cantidaddias!=null) {
                var fecha = $scope.vacaciones.fechaInicio;
                var dia = fecha.getDate();
                var mes = fecha.getMonth()+1;
                var anio =  fecha.getFullYear();

                var datosTramite = {
                    cantidadDias:$scope.vacaciones.cantidaddias,
                    fechaInicio:dia+'-'+mes+'-'+anio
                };          

                $http({
                    method: 'POST',
                    url: $rootScope.urlbase+'vacaciones/tramite',
                    data:datosTramite,
                    headers: {'token':$rootScope.usuario.token}
                }).then(function successCallback(response) {

                    if(response.data.resultado=='Aprobado'){
                        Toast.showToast("La solicitud de vacaciones ha sido registrada exitosamente",5000);
                        $location.path("/app/profile");
                    }else {
                        Toast.showToast(response.data.erroresPantalla,5000);
                    }

                }, function errorCallback(response) {
                    Toast.showToast("Error al consultar la información del plan de vacaciones",6000);
                });
            }else{
                 if($scope.vacaciones.fechaInicio==null || $scope.vacaciones.fechaInicio==''){
                    $scope.errorF = true;
                    var element = document.getElementById("fechaInicioVacaciones");
                    element.className += ' error-obligatorio';
                    $scope.vacaciones.mensajeObligatorio = "El campo es obligatorio";
                }
            }            
        };
    }
    ]
);

App.controller(
    'CertificadoController',['$rootScope', '$scope','$state','$stateParams', '$http', '$ionicLoading','Toast', '$location',function ($rootScope, $scope,$state,$stateParams, $http, $ionicLoading,Toast,$location) {

        $scope.certificado = {};  
        $scope.certificado.certificadoLaboral=false;
        $scope.certificado.certificadoIngresos=false;
        
        $scope.seleccionarCertificado= function(){
            
            if(document.getElementById("certificadoLaboral").selected == true){
                $scope.certificado.certificadoLaboral=true;
                $scope.certificado.certificadoIngresos=false;
            }else if (document.getElementById("certificadoIngresos").selected == true) {
                $scope.certificado.certificadoLaboral=false;
                $scope.certificado.certificadoIngresos=true;
            }
        }        
        
        $scope.limpiar= function(){
            $scope.error = false;
            if($scope.certificado.certificadoIngresos==true || $scope.certificado.certificadoLaboral==true){
                $('#tiposCertificados').removeClass('error-obligatorio');
                $scope.errorTipos = false;
            }
            if($scope.certificado.certificadoLaboral == true && document.getElementById("tipoCertificado").value!=null
                     && document.getElementById("tipoCertificado").value!=''){
                $('#tipoCertificado').removeClass('error-obligatorio');
                $scope.errorTipo = false;
            }
        }
        
        $scope.generar= function(){                   
            
            this.limpiar();
            if($scope.certificado.certificadoIngresos==false && $scope.certificado.certificadoLaboral==false){
                
                $scope.errorTipos = true;
                var element = document.getElementById("tiposCertificados");
                element.className += ' error-obligatorio';
                $scope.certificado.mensajeObligatorio = "El campo es obligatorio";
                
            }else{
                
                if($scope.certificado.certificadoLaboral == true && (document.getElementById("tipoCertificado").value==null
                     || document.getElementById("tipoCertificado").value=='')){
                    $scope.errorTipo = true;
                    var element = document.getElementById("tipoCertificado");
                    element.className += ' error-obligatorio';
                    $scope.certificado.mensajeObligatorio = "El campo es obligatorio";
                    $scope.error = true;
                }
                
                $ionicLoading.show({
                    content: 'Loading',
                    animation: 'fade-in',
                    showBackdrop: true,
                    maxWidth: 100,
                    showDelay: 0
                });
                
                if($scope.certificado.certificadoLaboral == true){
                    var datosTramite = {
                        idPlantillaCertificado:document.getElementById("tipoCertificado").value,
                        expedidoA:$scope.certificado.expedido,
                        contacto:$scope.certificado.contacto
                    }; 

                    $http({
                        method: 'POST',
                        url: $rootScope.urlbase+ 'certificadoLaboral',
                        data:datosTramite,
                        headers: {'token':$rootScope.usuario.token}
                    }).then(function successCallback(response) {                    
                        $ionicLoading.hide();
                        if( $scope.error == false){
                            Toast.showToast("El Certificado se ha generado correctamente y ha sido enviado a su correo electrónico",4000);
                            $location.path("/app/profile");
                        }                        
                    }, function errorCallback(response) {
                        $scope.error = true;
                        $ionicLoading.hide(); 
                });
                }else{
                    $http({
                        method: 'GET',
                        url: $rootScope.urlbase+ 'certificadoLaboral/ingresosRetenciones',
                        data:datosTramite,
                        headers: {'token':$rootScope.usuario.token}
                    }).then(function successCallback(response) {                    
                        $ionicLoading.hide();
                        if( $scope.error == false){
                            Toast.showToast("El Certificado se ha generado correctamente y ha sido enviado a su correo electrónico",4000);
                            $location.path("/app/profile");
                        }   
                    }, function errorCallback(response) {
                        $scope.error = true;
                        $ionicLoading.hide(); 
                    });
                }
            }
            
            
        }
        
        $scope.init= function(){
            
            $scope.certificado.certificadoLaboral=false;
            $http({
                method: 'GET',
                url: $rootScope.urlbase+ 'certificadoLaboral/tiposCertificado',
                headers: {'token':$rootScope.usuario.token}
            }).then(function successCallback(response) {                    

                for(var i=0;i<response.data.t.length;i++){
                    var x = document.getElementById("tipoCertificado");
                    var option = document.createElement("option");
                    option.text = response.data.t[i].nombre;
                    option.value = response.data.t[i].id;
                    x.add(option);
                }                

            }, function errorCallback(response) {
                $scope.error = true;
            });         
        };
        $scope.init();
    }
    ]
);

App.controller(
    'RecoverController',['$rootScope','$scope','$location','$http','$ionicLoading','Toast', '$state', function ($rootScope,$scope,$location,$http,$ionicLoading,Toast, $state) {
        $scope.user = {};        
        $rootScope.urlbase = "https://nomina.hgs.com.co/NominaWEB/services/";

        if($state.is('app.recover')){
            $('.header-item').css('color', '#333');
        }
        
        $scope.limpiar= function(){
            if($scope.user.username!=null && $scope.user.username!=''){
                $('#nombreUsuarioRecover').removeClass('error-obligatorio');
                $scope.errorUser = false;
            }            
            if($scope.user.tipoIdentificacion!=null && $scope.user.tipoIdentificacion!=''){
                $('#tipoCertificado').removeClass('error-obligatorio');
                $scope.errorTipoIdentificacion = false;
            }
            if($scope.user.identificacion!=null && $scope.user.identificacion!=''){
                $('#identificacionRecover').removeClass('error-obligatorio');
                $scope.errorIdentificacion = false;
            }
            if($scope.user.mensajeObligatorio!=null && $scope.user.fechaNacimiento!=''){
                $('#fechaNacimiento').removeClass('error-obligatorio');
                $scope.errorPass = false;
            }
        }
        
        $scope.ingresar= function(){
            this.limpiar();
            if($scope.user.username!=null && $scope.user.tipoIdentificacion!=null && $scope.user.identificacion!=null
              && $scope.user.fechaNacimiento!=null){
                
                var fecha = $scope.user.fechaNacimiento;
                var dia = fecha.getDate()+1;
                var mes = fecha.getMonth()+1;
                var anio =  fecha.getFullYear();
                
                var login = {
                    usuario:$scope.user.username,
                    tipoIdentificacion:$scope.user.tipoIdentificacion,
                    numeroDocumento:$scope.user.identificacion,
                    fechaNacimiento:anio+'-'+mes+'-'+dia
                };
                
                $ionicLoading.show({
                    content: 'Loading',
                    animation: 'fade-in',
                    showBackdrop: true,
                    maxWidth: 100,
                    showDelay: 0
                });

                $http({
                    method: 'POST',
                    url: $rootScope.urlbase+'authentication/verificarDominio',
                    data:$scope.user.username
                }).then(function successCallback(response) {
                    if(response.data.resultado=='Aprobado'){
                        $rootScope.urlbase = response.data.t+"services/";
                        
                        $ionicLoading.show({
                            content: 'Loading',
                            animation: 'fade-in',
                            showBackdrop: true,
                            maxWidth: 100,
                            showDelay: 0
                        });

                        $http({
                            method: 'POST',
                            url: $rootScope.urlbase+'authentication/recordar',
                            data:login
                        }).then(function successCallback(response) { 
                            if(response.data.resultado=='Aprobado'){
                                $rootScope.usuario = {
                                    nombre: response.data.v,
                                    idPersona: "",
                                    token:response.data.t
                                }; 
                                $ionicLoading.hide();
                                Toast.showToast("La contraseña ha sido enviada a su corre electrónico",4000);
                                $location.path("/app/login");
                            }else if(response.data.codigoError!=null){
                                $ionicLoading.hide();
                                Toast.showToast("Los datos ingresados no corresponden a la información almacenada",4000);              
                            }else{
                                Toast.showToast("Error al enviar el email",4000); 
                                $ionicLoading.hide();
                            }
                        }, function errorCallback(response) {
                            $ionicLoading.hide();
                            Toast.showToast("Los datos ingresados no corresponden a la información almacenada",4000); 
                        });
                        
                    }else {
                        Toast.showToast("Todos los campos son obligatorios",4000);
                        $ionicLoading.hide();
                    }
                }, function errorCallback(response) {
                    $ionicLoading.hide();    
                    Toast.showToast("Error al enviar el email",4000); 
                });
            }else{
                if($scope.user.username==null || $scope.user.username==''){
                    $scope.errorUser = true;
                    var element = document.getElementById("nombreUsuarioRecover");
                    element.className += ' error-obligatorio';
                    $scope.user.mensajeObligatorio = "El campo es obligatorio";
                }
                if($scope.user.tipoIdentificacion==null || $scope.user.tipoIdentificacion==''){
                    $scope.errorTipoIdentificacion = true;
                    var element = document.getElementById("tipoCertificado");
                    element.className += ' error-obligatorio';
                    $scope.user.mensajeObligatorio = "El campo es obligatorio";
                }
                if($scope.user.identificacion==null || $scope.user.identificacion==''){
                    $scope.errorIdentificacion = true;
                    var element = document.getElementById("identificacionRecover");
                    element.className += ' error-obligatorio';
                    $scope.user.mensajeObligatorio = "El campo es obligatorio";
                }
                if($scope.user.fechaNacimiento==null || $scope.user.fechaNacimiento==''){
                    $scope.errorfecha = true;
                    var element = document.getElementById("fechaNacimiento");
                    element.className += ' error-obligatorio';
                    $scope.user.mensajeObligatorio = "El campo es obligatorio";
                }
            }            
        };
    }
    ]
);

App.controller(
    'NewsController',['$rootScope','$scope','$state','$stateParams', '$http', '$filter',function ($rootScope,$scope,$state,$stateParams, $http, $filter) {
    $scope.profile = {};    
    $scope.profile.url=$rootScope.urlfoto;    
}
]
);        

App.controller(
    'SalaryController',['$rootScope','$scope','$state','$stateParams', '$http', '$filter',function ($rootScope,$scope,$state,$stateParams, $http, $filter) {

        $scope.salary = {};
        $scope.salary.idPeriodo = 0;
        $scope.salary.contador = 0;
        
        $scope.init= function(){          
            
            var datosTramite = {
                id:'',
                siguiente:true
            }; 
            
            $http({
                method: 'POST',
                url: $rootScope.urlbase+ 'nomina/periodo',
                data:datosTramite,
                headers: {'token':$rootScope.usuario.token}
            }).then(function successCallback(response) {
                asignarCampos(response);
            }, function errorCallback(response) {
                $scope.error = true;
            });
            
            ocultarCampo();
        };
        
        function asignarCampos(response){
            
            var x = document.getElementById("divContenedor");
            x.innerHTML="";
            
            if(response.data.t!=null){
               for(var i=0;i<response.data.t.length;i++){
                    if(response.data.t[i].idNaturaleza!=null){
                        $scope.salary.idPeriodo = response.data.t[i].idPeriodo;

                        var option = document.createElement("div");
                        option.setAttribute("class","row");

                        var option2 = document.createElement("div");
                        option2.setAttribute("class", "col col-50");

                        var h3 = document.createElement("h3");
                        h3.innerText=response.data.t[i].descripcion;
                        option2.appendChild(h3);

                        var option3 = document.createElement("div");
                        option3.setAttribute("class", "col col-50");
                        var p = document.createElement("p");   
                        
                        if(response.data.t[i].idNaturaleza==1){
                            p.innerText = $filter('currency')(response.data.t[i].valorConcepto, "$", 2);
                        }else{
                            p.innerText ="- "+$filter('currency')(response.data.t[i].valorConcepto, "$", 2);
                        }                        
                        
                        option3.appendChild(p);

                        option.appendChild(option2);
                        option.appendChild(option3);
                        x.appendChild(option);
                    }else{
                        $scope.salary.total=response.data.t[i].valorConcepto;
                        $scope.salary.fecha=response.data.t[i].descripcion;
                    }                
                } 
            }else{
                $scope.salary.total=0;
            }             
        }
        
        function ocultarCampo(){
            if($scope.salary.contador==0){
                document.getElementById('siguiente').style.display='none';
            }else{
                document.getElementById('siguiente').style.display='initial';
            }
        }

        $scope.atras=function(){
            $scope.salary.contador--;
            ocultarCampo();
            var datosTramite = {
                id:$scope.salary.idPeriodo,
                siguiente:false
            }; 
            
            $http({
                method: 'POST',
                url: $rootScope.urlbase+ 'nomina/periodo',
                data:datosTramite,
                headers: {'token':$rootScope.usuario.token}
            }).then(function successCallback(response) {                    
                asignarCampos(response);
            }, function errorCallback(response) {
                $scope.error = true;
            });
        }

        $scope.adelante=function(){
            $scope.salary.contador++;
            ocultarCampo();
            var datosTramite = {
                id:$scope.salary.idPeriodo,
                siguiente:true
            }; 
            
            $http({
                method: 'POST',
                url: $rootScope.urlbase+ 'nomina/periodo',
                data:datosTramite,
                headers: {'token':$rootScope.usuario.token}
            }).then(function successCallback(response) {                    
                asignarCampos(response);                
            }, function errorCallback(response) {
                $scope.error = true;
            });
        }
        
        $scope.init();
    }
    ]
);
