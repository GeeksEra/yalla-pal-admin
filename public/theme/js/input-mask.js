// Class definition

var KTInputmask = function () {
    
    // Private functions
    var demos = function () {
        // date format
        $("#kt_inputmask_1").inputmask("99/99/9999", {
            "placeholder": "mm/dd/yyyy",
            autoUnmask: true
        });
        $(".date").inputmask("99/99/9999", {
            "placeholder": "mm/dd/yyyy",
            autoUnmask: true
        });

        // custom placeholder        
        $("#kt_inputmask_2").inputmask("99/99/9999", {
            "placeholder": "mm/dd/yyyy",
        });
        
        // phone number format
        $("#home_phone").inputmask("mask", {
            "mask": "(999) 9 999-9999"
        }); 

        // empty placeholder
        $("#kt_inputmask_4").inputmask({
            "mask": "99-9999999",
            placeholder: "" // remove underscores from the input mask
        });

        // repeating mask
        $("#kt_inputmask_5").inputmask({
            "mask": "9",
            "repeat": 10,
            "greedy": false
        }); // ~ mask "9" or mask "99" or ... mask "9999999999"
        
        // decimal format
        $("#kt_inputmask_6").inputmask('decimal', {
            rightAlignNumerics: false
        }); 
        
        // currency format
        $("#kt_inputmask_7").inputmask('€ 999.999.999,99', {
            numericInput: true
        }); //123456  =>  € ___.__1.234,56

        //ip address
        $("#kt_inputmask_8").inputmask({
            "mask": "999.999.999.999"
        });  

        //cnic
        $("#cnic").inputmask({
            "mask": "99999-9999999-9"
        });  

        //mobile_no
        $("#mobile_no").inputmask({
            "mask": "9999-9999999"
        });  

        //landline_no
        $("#landline_no").inputmask({
            "mask": "9999-9999999"
        });  

        //zip code
        $("#zip_code").inputmask({
            "mask": "99999"
        });  

        //email address
        $(".email_address").inputmask({
            mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
            greedy: false,
            onBeforePaste: function (pastedValue, opts) {
                pastedValue = pastedValue.toLowerCase();
                return pastedValue.replace("mailto:", "");
            },
            definitions: {
                '*': {
                    validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
                    cardinality: 1,
                    casing: "lower"
                }
            }
        });        
    }

    return {
        // public functions
        init: function() {
            demos(); 
        }
    };
}();

jQuery(document).ready(function() {
    KTInputmask.init();
});
