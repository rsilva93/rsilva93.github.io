(function () {
    'use strict';

    angular.module('rsilva.net.app')
        .controller('skillsController', skillsController);

    skillsController.$inject = [];

    function skillsController() {

        this.skills = [
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
})();
