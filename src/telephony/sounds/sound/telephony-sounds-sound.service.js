angular.module("ovh-api-services").service("OvhApiTelephonySoundsSound", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonySoundsSoundV6");
        }
    };
});
