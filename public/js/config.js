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
        validate: 'validate/jquery-validate.min',
        form: 'jquery-form/jquery.form',
        util: '../js/util',
        datepicker: 'bootstrap-datepicker/js/bootstrap-datepicker.min',
        language: 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        uploadify : 'jquery/jquery.uploadify',
        region : 'jquery-region/jquery.region',
    },
    shim: { 
        bootstrap: {
            deps : ['jquery']
        },
        language: {
            deps : ['jquery','datepicker']
        },
        validate: {
            deps : ['jquery']
        },
        uploadify : {
            deps : ['jquery']
        }
    }
});