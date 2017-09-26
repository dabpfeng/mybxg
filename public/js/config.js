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
        uploadify : 'uploadify/jquery.uploadify.min',
        region : 'jquery-region/jquery.region',
        settings: '../js/settings',
        ckeditor: 'ckeditor/ckeditor',
        jcrop : 'jcrop/js/Jcrop',
        index : '../js/index',
        courselist : '../js/course-list',
        courseadd : '../js/course-add',
        coursebasic : '../js/course-basic',
        coursepicture: '../js/course-picture'
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
        },
        ckeditor : {
            exports : 'CKEDITOR'
        }
    }
});