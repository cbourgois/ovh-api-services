angular.module("ovh-api-services").service("OvhApiXdslModemWifiAapi", function ($resource, OvhApiXdslModemWifi) {
    "use strict";

    var xdslModemWifiAapi = $resource("/xdsl/:xdslId/modem/wifi/details", {
        xdslId: "@xdslId"
    }, {
        getWifiDetails: {
            method: "GET",
            url: "/xdsl/:xdslId/modem/wifi/details",
            isArray: true,
            serviceType: "aapi",
            cache: OvhApiXdslModemWifi.cache
        }
    });

    return xdslModemWifiAapi;
});
