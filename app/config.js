(function () {
    'use strict';

    angular.module('rsilva.net.app')
        .config(translateConfig);

    function translateConfig($translateProvider) {

        $translateProvider.translations('en-US', {
            MY_TITLE: 'Software Developer',
        });

        $translateProvider.translations('pt-BR', {
            MY_TITLE: 'Desenvolvedor de Software'
        });
        
        $translateProvider.preferredLanguage('en-US');
    }
})();
