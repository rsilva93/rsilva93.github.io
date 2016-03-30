(function () {
    'use strict';

    angular.module('rsilva.net.app')
        .controller('experienceController', experienceController);

    experienceController.$inject = [];

    function experienceController() {

        this.experiences = [
            {
                role: 'EXPERIENCE_ROLE_1',
                organization: 'T-Systems',
                time: '2010-2011'
            },
            {
                role: 'EXPERIENCE_ROLE_2',
                organization: 'T-Systems',
                time: '2011-2013'
            },
            {
                role: 'EXPERIENCE_ROLE_3',
                organization: 'BgmRodotec',
                time: '2013-2015'
            },
            {
                role: 'EXPERIENCE_ROLE_4',
                organization: 'Bludata Software',
                time: '2015-now'
            }
        ];
        
    }
})();
