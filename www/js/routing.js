app.config(function($stateProvider, $urlRouterProvider) {
    ionic.Platform.setPlatform('ios');

    $stateProvider
        .state('app.intro', {
            url: '/intro',
            views: {
                'menuContent': {
                    templateUrl: 'templates/intro.html',
                    controller: 'IntroController'
                }
            }
        })
        .state('app.login', {
            url: '/login',
            views: {
                'menuContent': {
                    templateUrl: 'templates/login.html',
                    controller: 'LoginController'
                }
            }
        })
        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/layout.html',
            controller: 'App'
        })

        .state('app.home', {
            url: '/home',
            views: {
                'menuContent': {
                    templateUrl: 'templates/home.html'
                }
            }
        })

        .state('app.search', {
            url: '/search',
            views: {
                'menuContent': {
                    templateUrl: 'templates/search.html'
                }
            }
        })

        .state('app.list', {
            url: '/list',
            views: {
                'menuContent': {
                    templateUrl: 'templates/list.html',
                    controller: 'List'
                }
            }
        })


        .state('app.single', {
            url: '/single/:playlistId',
            views: {
                'menuContent': {
                    templateUrl: 'templates/single.html',
                    controller: 'Single'
                }
            }
        })
    .state('app.top', {
        url: '/top',
        views: {
            'menuContent': {
                templateUrl: 'templates/top.html',
                controller: 'Top'
            }
        }
    })

    .state('app.random', {
        url: '/random',
        views: {
            'menuContent': {
                templateUrl: 'templates/random.html',
                controller: 'Random'
            }
        }
    })

    .state('app.profil', {
        url: '/profil',
        views: {
            'menuContent': {
                templateUrl: 'templates/profil.html',
                controller: 'Profil'
            }
        }
    })

    .state('app.friends', {
        url: '/friends',
        views: {
            'menuContent': {
                templateUrl: 'templates/friends.html',
                controller: 'Friends'
            }
        }
    })

    .state('app.add', {
        url: '/add',
        views: {
            'menuContent': {
                templateUrl: 'templates/add.html',
                controller: 'Add'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/intro');
});
