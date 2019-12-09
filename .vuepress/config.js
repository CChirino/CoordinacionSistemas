module.exports = {
    title: 'Coordinación de Sistemas',
    description: 'Solventamos tus dudas con mi UNE 2.0',
    dest: 'pages',
    themeConfig: { 
        nav:[
            {text: 'Inicio', link:'/'},
            {text: 'Guia', link:'/guia/'},
            {text: 'Soy Nuevo', link:'/nuevo/'},
            {text: 'Como Crear un Modulo Nuevo', link:'/modulo_nuevo/'},
        ],
        sidebar: {
            '/guia/':[
            '',
            'Módulo',
            'Consultas',
            'Mantenimiento',
            'Profile',
            'Reports',
            'Statics',
            'Transactions',
            'Modalidad',
            'Inscripciones'
            ],
            '/modulo_nuevo/': [
            ''
            ],
            '/nuevo/': [
            ''
            ],
            displayAllHeaders: true
        }

    }
}