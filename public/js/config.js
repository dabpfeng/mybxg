require.config({
    baseUrl: '/public/assets',
    paths: {
        jquery: 'jquery/jquery',
        cookie: 'jquery-cookie/jquery.cookie',
        template: 'artTemplate/template-web',
        bootstrap: 'bootstrap/js/bootstrap.min',
        common: '../js/common',
        login: '../js/login',
        teacherlist: '../js/teacher-list',
        teacheradd: '../js/teacher-add',
        util: '../js/util',
        datepicker: 'bootstrap-datepicker/js/bootstrap-datepicker.min',
        language: 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min'
    },
    shim: { 
        bootstrap: {
            deps: ['jquery']
        },
        language: {
            deps: ['jquery','datepicker']
        }
    }
});