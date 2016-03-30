(function () {
    'use strict';

    angular.module('rsilva.net.app')
        .config(translateConfig);

    function translateConfig($translateProvider) {

        $translateProvider.translations('en-US', {

            MY_NAME: 'Robson da Silva',

            COVER_MY_TITLE: 'Software Developer',

            ABOUT_ME_TITLE: 'About Me',
            ABOUT_ME_TEXT: aboutMeTextEnglish(),

            EXPERIENCE_TITLE: 'Experience',
            EXPERIENCE_1_ROLE: 'Web Developer',
            EXPERIENCE_2_ROLE: 'Technical Support',
            EXPERIENCE_3_ROLE: 'Developer (.NET/C#)',
            EXPERIENCE_4_ROLE: 'Full Stack Developer (.NET/C#)',

            SKILLS_TITLE: 'Skills',

            FOOTER_LOCATION: 'Location',
            FOOTER_CITY: 'Blumenau / SC',
            FOOTER_COUNTRY: 'Brazil',
            FOOTER_AROUND_THE_WEB: 'Around the Web',
            FOOTER_CONTACTS: 'Contacts',
            FOOTER_PHONE: '+55 (47) 9200-1615',
            FOOTER_EMAIL: 'sc.robson@gmail.com',
            FOOTER_COPYRIGHT: 'Copyright &copy; rsilva.net 2016'
        });

        $translateProvider.translations('pt-BR', {

            MY_NAME: 'Robson da Silva',

            COVER_MY_TITLE: 'Desenvolvedor de Software',

            ABOUT_ME_TITLE: 'Sobre',
            ABOUT_ME_TEXT: aboutMeTextPortuguese(),

            EXPERIENCE_TITLE: 'Experiência',
            EXPERIENCE_1_ROLE: 'Desenvolvedor Web',
            EXPERIENCE_2_ROLE: 'Técnico de Suporte',
            EXPERIENCE_3_ROLE: 'Desenvolvedor (.NET/C#)',
            EXPERIENCE_4_ROLE: 'Desenvolvedor Full Stack (.NET/C#)',

            SKILLS_TITLE: 'Habilidades',

            FOOTER_LOCATION: 'Endereço',
            FOOTER_CITY: 'Blumenau / SC',
            FOOTER_COUNTRY: 'Brasil',
            FOOTER_AROUND_THE_WEB: 'Na Web',
            FOOTER_CONTACTS: 'Contatos',
            FOOTER_PHONE: '(47) 9200-1615',
            FOOTER_EMAIL: 'sc.robson@gmail.com',
            FOOTER_COPYRIGHT: 'Copyright &copy; rsilva.net 2016'
        });

        $translateProvider.preferredLanguage('pt-BR');
    }

    function aboutMeTextEnglish() {
        return 'I\'m a software developer and bachelor of computer science. I work in the technology area since ' +
            '2010 when I started to learn about software development and got my first job in IT. Over this years I obtained ' +
            'a large experience and knowledge from the projects I\'ve been involved, mostly related to .NET platform and ' +
            'web tecnhologies (front and back-end). I like to learn about new technologies and I\'m always trying to apply ' +
            'it in my code and projects. About my personal life, I\'m a huge fan of Tolkien universe and love to spend my ' +
            'free time watching some series/movies or hanging out with my girlfriend and friends.';
    }

    function aboutMeTextPortuguese() {
        return 'Sou desenvolvedor de software e bacharel em ciência da computação pela FURB. Trabalho na área de tecnologia desde ' +
            '2010, quando iniciei meus estudos em desenvolvimento de software e consegui meu primeiro emprego em TI. Ao longo dos anos acumulei ' +
            'uma boa experiência dos projetos nos quais estive envolvido, em sua maioria voltados para a plataforma .NET e tecnologias web ' +
            '(front and back-end). Gosto de aprender novas tecnologias e tento sempre colocá-las em prática em meu código e nos projetos ' +
            'que desenvolvo. Sobre minha vida pessoal, sou um grande fã do universo Tolkien e adoro passar meu tempo livre assistindo filmes e séries ' +
            'ou saindo com minha namorada e amigos.';
    }

})();
