(function () {
    'use strict';

    angular.module('rsilva.net.app')
        .controller('profileController', profileController);

    profileController.$inject = [];

    function profileController() {

        this.skills = getSkills();
        this.experiences = getExperiences();

        function getSkills() {
            return [
                {
                    technology: '.NET / C#',
                    proficiency: '95%'
                },
                {
                    technology: 'ASP.NET Web API / REST',
                    proficiency: '90%'
                },
                {
                    technology: 'ASP.NET MVC',
                    proficiency: '75%'
                },
                {
                    technology: 'SQL / NHibernate',
                    proficiency: '85%'
                },
                {
                    technology: 'MongoDB',
                    proficiency: '75%'
                },
                {
                    technology: 'Javascript / AngularJS',
                    proficiency: '90%'
                },
                {
                    technology: 'JQuery',
                    proficiency: '85%'
                },
                {
                    technology: 'HTML5',
                    proficiency: '80%'
                },
                {
                    technology: 'CSS3',
                    proficiency: '80%'
                },
                {
                    technology: 'Gulp / Bower',
                    proficiency: '75%'
                }
            ];
        }

        function getExperiences() {
            return [
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

    }
})();
