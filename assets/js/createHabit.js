function postHabit(Data) {
    console.log(Data);
    // let object = new Object();
    // object.data = Data;
    $.ajax({
        url: '/createHabit',
        method: 'POST',
        data: Data,
        success: function (res) {
            console.log("Success in getting habits", res.message);
            notification(true);

        }, error: function () {
            console.log('error while reaching server');
            notification(false);
        }
    });
}

function notification(value) {
    if (value) {
        new Noty({
            theme: 'relax',
            text: 'Data Added Successfully',
            type: 'success',
            layout: 'topRight',
            timeout: 1500,
        }).show();
    }
    else {
        new Noty({
            theme: 'relax',
            text: 'Error occurred',
            type: 'error',
            layout: 'topRight',
            timeout: 1500,
        }).show();
    }
}

$('#submit').on('click',function(){
    let obj = {};
    obj.habit=$('input[type="text"]').val();
    obj.date = $('input[type="date"]').val();
    postHabit(obj);
}); 