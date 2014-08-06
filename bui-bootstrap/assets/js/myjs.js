$('.selectlist2 #shift_1').live('click',function(){
              var myoption =  $('#multiple1 option:selected').text();     
              var $newoption = $('#multiple2').append('<option></option>');
              var $lastoption = $('#multiple2 option:last');
              var $optionvalue = myoption;
              var $appendop = $('#multiple2 option:last').append($optionvalue);      
              $('#multiple1 option:selected').remove();
})