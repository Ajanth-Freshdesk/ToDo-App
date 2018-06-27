import Service from '@ember/service';

export default Service.extend({
    setCookie(name,value) {
        var expires = "";
        var date = new Date();
        date.setTime(date.getTime() + (60*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
     },
     getCookie(c_name) {
        if (document.cookie.length > 0) {
            var c_start = document.cookie.indexOf(c_name + "=");
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1;
                var c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1) {
                    c_end = document.cookie.length;
                }
                return unescape(document.cookie.substring(c_start, c_end));
            }
        }
        return "";
    },
    deleteCookie(name) {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
    }
});
