function showmessage() {
    try {

var vv= document.getElementById('myinput')    		

        var datamode = {
            message: 'Hello, Vue.js!',
            first_name: vv.value,
            last_name: " 111last_name",
            return_value: "返回数据填写 no form"
        }

        axios({
            method: 'post',
            url: 'http://127.0.0.1:5000',
            params: datamode
        }).then(function(response) {
            console.log(response);
            /*以下两句等效*/
            datamode.message = JSON.parse(response.request.response).return_value;
            var dd = document.getElementById('myshow')
            dd.value = datamode.message

        }).catch(function(error) {
            console.log("error:" + error);
        });
        console.log("gogogogogogog");
    } catch (e) {
        console.log(e);
    }            
        };
 