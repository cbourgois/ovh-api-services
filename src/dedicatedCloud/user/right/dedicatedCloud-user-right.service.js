angular.module("ovh-api-services").service("OvhApiDedicatedCloudUserRight", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDedicatedCloudUserRightV6");
        }
    };

});
