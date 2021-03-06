angular.module("ovh-api-services").service("OvhApiTelephonyServiceRepaymentConsumptionAapi", function ($resource) {
    "use strict";

    return $resource("/telephony/:billingAccount/service/:serviceName/repaymentConsumption/:consumptionId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        consumptionId: "@consumptionId"
    }, {
        repayment: {
            method: "GET",
            url: "/telephony/:billingAccount/repayment",
            serviceType: "aapi",
            isArray: true
        }
    });
});
