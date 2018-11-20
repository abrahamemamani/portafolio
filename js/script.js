new Vue({
    el: '#app',
    data: {
        site: {
            title: 'Mi portafolio',
            message: 'Son solo proyectos personales (de aprendizaje), ninguno es laboral.',
            footer: '2018 Mi portafolio. Todos los derechos reservados | Diseñado por Abraham Mamani.'
        },
        cards: [
            {
                title: 'Instalar',
                image: 'images/4.jpg',
                description: 'Se trata de un mini-instagram utilizando el framework Laravel.',
                date: 'Nov - 2018',
                link: 'http://instalar.herokuapp.com/',
            },
            {
                title: 'Vuegames',
                image: 'images/5.jpg',
                description: 'Es un CRUD utilizando los frameworks Laravel y VueJS.',
                date: 'Oct - 2018',
                link: 'http://vuegames.herokuapp.com/',
            },
            {
                title: 'Foody',
                image: 'images/1.jpg',
                description: 'Profesional y elegante. Foody es un template para restaurantes.',
                date: 'Ago - 2018',
                link: 'https://abrahamemamani.github.io/foody/',
            },
            {
                title: 'Codgames',
                image: 'images/2.jpg',
                description: 'Llamativo y adictivo, desde luego. Se trata de un template para un negocio de videojuegos.',
                date: 'Dic - 2017',
                link: 'https://abrahamemamani.github.io/codgames/',
            },
            {
                title: 'Bienstar',
                image: 'images/3.jpg',
                description: 'Buscando cumplir el sueño de todas, Bienstar está hecho para vestir bien y a la moda.',
                date: 'Dic - 2017',
                link: 'https://abrahamemamani.github.io/bienstar/',
            }
        ],
        checks: [
            'Desarrollador Front-end', 
            'HTML, CSS, JavaScript, jQuery, Bootstrap', 
            'Diseño web responsive', 
            'Programación orientada a objetos'
        ]
    }
});