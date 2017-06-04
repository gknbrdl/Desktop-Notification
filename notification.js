"use strict";

(function(){

    angular.module('app').factory('DesktopNotification', DesktopNotification);


    function DesktopNotification(CONFIG) {
        var factory = {};
        factory.show = show;

        function show(title, content, href, imgurl) {
            var options = {
                body: content,
                icon: imgurl,
                dir: "ltr"
            };
            if (!("Notification" in window)) {
                alert("This browser does not support notification.");
            } else if (Notification.permission === "granted") {
                var notification = new Notification(title, options);
                notification.onclick = function() {
                    window.open(href).focus();
                    this.close();
                };
            } else if (Notification.permission !== 'denied') {
                Notification.requestPermission(function(permission) {
                    if (!('permission' in Notification)) {
                        Notification.permission = permission;
                    }
                    if (permission === "granted") {
                        var notification = new Notification(title, options);
                        notification.onclick = function() {
                            window.open(href).focus();
                            this.close();
                        };
                    }
                });
            }
        }

        return factory;
    }

})(angular);