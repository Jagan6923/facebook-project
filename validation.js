$(document).ready(function () {
    $('#signup').validate({
        rules: {
            fname: {
                required: true,
                minlength: 5,
            },
            sname: {
                required: true,
                minlength: 5,
            },
            mobile: {
                required: true,
                minlength: 5,
            },
            password: {
                required: true,
                minlength: 8,
            },
            day: {
                required: true,

            },
            month: {
                required: true,

            },
            year: {
                required: true,

            },
            gender: {
                required: true,
            }
        },
        messages: {
            fname: {
                required: "Please enter the first name",
                minlength: "Please enter minimun 5 letters"
            },
            sname: {
                required: "Please enter the sur name",
                minlength: "Please enter minimun 5 letters"
            },
            mobile:{
                required:"Please enter the mobile number ",
                minlength:"Please enter the valid mobile number"
            },
        }
    })
});