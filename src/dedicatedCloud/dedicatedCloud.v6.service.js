angular.module("ovh-api-services").service("OvhApiDedicatedCloudV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDedicatedCloudV6");
    var queryCache = $cacheFactory("OvhApiDedicatedCloudV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var dedicatedCloudResource = $resource("/dedicatedCloud/:serviceName", {
        serviceName: "@serviceName"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        get: { method: "GET", cache: cache },
        put: { method: "PUT", interceptor: interceptor },
        getServiceInfos: {
            url: "/dedicatedCloud/:serviceName/serviceInfos",
            method: "GET",
            cache: cache
        },
        terminate: {
            url: "/dedicatedCloud/:serviceName/terminate",
            method: "POST",
            interceptor: interceptor
        },
        confirmTermination: {
            url: "/dedicatedCloud/:serviceName/confirmTermination",
            method: "POST",
            interceptor: interceptor
        },
        hcx: {
            url: "/dedicatedCloud/:serviceName/hcx",
            method: "GET",
            cache: cache
        },
        getGlobalTasks: {
            url: "/dedicatedCloud/:serviceName/globalTasks",
            method: "GET",
            isArray: true,
            queryParams: {
                datacenterId: "@datacenterId",
                "endDate.from": "@endDate.from",
                "endDate.to": "@endDate.to",
                "executionDate.from": "@executionDate.from",
                "executionDate.to": "@executionDate.to",
                filerId: "@filerId",
                hostId: "@hostId",
                "lastModificationDate.from": "@lastModificationDate.from",
                "lastModificationDate.to": "@lastModificationDate.to",
                name: "@name",
                networkAccessId: "@networkAccessId",
                orderId: "@orderId",
                parentTaskId: "@parentTaskId",
                state: "@state",
                userId: "@userId",
                vlanId: "@vlanId"
            }
        }
    });

    dedicatedCloudResource.resetAllCache = function () {
        dedicatedCloudResource.resetCache();
        dedicatedCloudResource.resetQueryCache();
    };

    dedicatedCloudResource.resetCache = function () {
        cache.removeAll();
    };

    dedicatedCloudResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return dedicatedCloudResource;
});
