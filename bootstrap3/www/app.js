
requirejs.config({
    paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min',
        'bootstrap': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min'
    },
    shim: {
        'bootstrap': ['jquery']
    }
});

requirejs(['app/main']);