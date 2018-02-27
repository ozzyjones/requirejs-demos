
requirejs.config({
    paths: {
        'jquery': 'https://code.jquery.com/jquery-3.2.1.slim.min',
        // 'bootstrap': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min'
    },
    // shim: {
        // 'bootstrap': ['jquery']
    // }
});

requirejs(['app/main']);