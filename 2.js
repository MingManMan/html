javascript: (function() {
    var a = document.createElement('div')
    a.style.cssText = 'position: absolute;top: 10px;right: 30px;padding: 5px;border-radius: 5px;box-shadow: rgb(92, 184, 229) 0px 0px 2px; -webkit-box-shadow: rgb(92, 184, 229) 0px 0px 2px;background-color: rgba(92, 184, 229, 0.498039) !important;z-index: 999999;',
        a.innerHTML = '<div style="padding: 20px;border: 1px solid rgb(92, 184, 229);background: white;border-radius: 5px;">\
                           <div id="appapp">\
                           {{ message }}\
                           <p><input type="text" v-model="message"></p>\
                   <p><button v-on:click="greet">提交</button></p> </div></div>'
    document.body.appendChild(a)
    
    var b = document.createElement("script");
    b.src = 'http://127.0.0.1/static/vue.js';
    /*b.setAttribute("src", 'http://127.0.0.1/static/vue.js');*/
    b.setAttribute("type", "text/javascript");
    b.setAttribute("charset", "utf-8");
    try {
    	document.getElementsByTagName('head')[0].appendChild(b)
        /*document.body.appendChild(b)*/
    } catch (e) {
        console.log("error"+e);
    }


    var d = document.createElement("script");
    d.setAttribute("src", 'http://127.0.0.1/static/axios.min.js');
    d.setAttribute("type", "text/javascript");
    d.setAttribute("charset", "utf-8");
    document.body.appendChild(d)

    var c = document.createElement("script");
    c.setAttribute("src", 'http://127.0.0.1/2.1.js');
    c.setAttribute("type", "text/javascript");
    c.setAttribute("charset", "utf-8");
    document.body.appendChild(c)


})();
