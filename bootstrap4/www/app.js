
requirejs.config({
    paths: {
        'jquery': 'https://code.jquery.com/jquery-3.2.1.slim.min',
        'bundle': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.bundle.min',
        'bootstrap': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min'
    },
    shim: {
        'bootstrap': ['jquery', 'bundle']
    }
});

requirejs(['app/main']);