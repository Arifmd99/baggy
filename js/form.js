$(document).ready(function(){
    $('#form1').bootstrapValidator({
        fields :{
            name :{
                validators:{
                    stringLength : {
                        min: 5,
                        message: 'Name requires min 6 char'
                    },
                    notEmpty: {
                        message: 'Name  is required'
                    }
                }
            },
            phone:{
                validators: {
                    stringLength: {
                        min: 10,
                        message: 'Mobile Number must be 10 digits'
                    },
                    notEmpty: {
                        message: 'Mobile Number is required'
                    }
                }
            }
        }
    })
    $(".send").click(function(){
        alert("Request Submitted Successfully!")
        $("this").form.reset();
        
    })
})