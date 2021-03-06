define(["helpers"], function(helpers) {
    // Wrapper for AT&T M2X Distribution API
    //
    // https://m2x.att.com/developer/documentation/distribution
    var Distributions = function(client) {
        this.client = client;
    };

    // Retrieve a list of device distributions
    //
    // https://m2x.att.com/developer/documentation/v2/distribution#List-Distributions
    Distributions.prototype.list = function(params, callback, errorCallback) {
        if (typeof params === "function") {
            callback = params;
            errorCallback = callback;
            params = {};
        }
        return this.client.get("/distributions", { qs: params || {} }, callback, errorCallback);
    };

    // Create a new device distribution
    //
    // https://m2x.att.com/developer/documentation/v2/distribution#Create-Distribution
    Distributions.prototype.create = function(params, callback, errorCallback) {
        return this.client.post("/distributions", { params: params }, callback, errorCallback);
    };

    // Retrieve information about an existing device distribution
    //
    // https://m2x.att.com/developer/documentation/v2/distribution#View-Distribution-Details
    Distributions.prototype.view = function(id, callback, errorCallback) {
        return this.client.get(helpers.url("/distributions/{0}", id), callback, errorCallback);
    };

    // Update an existing device distribution
    //
    // https://m2x.att.com/developer/documentation/v2/distribution#Update-Distribution-Details
    Distributions.prototype.update = function(id, params, callback, errorCallback) {
        return this.client.put(
            helpers.url("/distributions/{0}", id),
            { params: params },
            callback, errorCallback
        );
    };

    // Retrieve a list of devices added to the a device distribution
    //
    // https://m2x.att.com/developer/documentation/v2/distribution#List-Devices-from-an-existing-Distribution
    Distributions.prototype.devices = function(id, callback, errorCallback) {
        return this.client.get(
            helpers.url("/distributions/{0}/devices", id),
            callback, errorCallback
        );
    };

    // Add a new device to an existing device distribution
    //
    // https://m2x.att.com/developer/documentation/v2/distribution#Add-Device-to-an-existing-Distribution
    Distributions.prototype.addDevice = function(id, serial, callback, errorCallback) {
        return this.client.post(helpers.url("/distributions/{0}/devices", id), {
            headers: { "Content-Type": "application/json" },
            params: { serial: serial }
        }, callback, errorCallback);
    };

    // Delete an existing device distribution
    //
    // https://m2x.att.com/developer/documentation/v2/distribution#Delete-Distribution
    Distributions.prototype.deleteDistribution = function(id, callback, errorCallback) {
        return this.client.del(helpers.url("/distributions/{0}", id), callback, errorCallback);
    };

    // Retrieve a list of data streams associated with the distribution
    //
    // https://m2x.att.com/developer/documentation/v2/distribution#List-Data-Streams
    Distributions.prototype.dataStreams = function(id, callback, errorCallback) {
        return this.client.get(
            helpers.url("/distributions/{0}/streams", id),
            callback, errorCallback
        );
    };

    // Create/Update a data stream associated with the distribution
    //
    // https://m2x.att.com/developer/documentation/v2/distribution#Create-Update-Data-Stream
    Distributions.prototype.updateDataStream = function(id, name, params, callback, errorCallback) {
        return this.client.put(
            helpers.url("/distributions/{0}/streams/{1}", id, name),
            {
                headers: { "Content-Type": "application/json" },
                params: params
            },
            callback, errorCallback
        );
    };

    // View information about a stream associated to the distribution
    //
    // https://m2x.att.com/developer/documentation/v2/distribution#View-Data-Stream
    Distributions.prototype.dataStream = function(id, name, callback, errorCallback) {
        return this.client.get(
            helpers.url("/distributions/{0}/streams/{1}", id, name),
            callback, errorCallback
        );
    };

    // Delete an existing data stream associated to distribution
    //
    // https://m2x.att.com/developer/documentation/v2/distribution#Delete-Data-Stream
    Distributions.prototype.deleteDataStream = function(id, name, callback, errorCallback) {
        return this.client.del(
            helpers.url("/distributions/{0}/streams/{1}", id, name),
            callback, errorCallback
        );
    };

    // Retrieve list of triggers associated with the distribution
    //
    // https://m2x.att.com/developer/documentation/v2/distribution#List-Triggers
    Distributions.prototype.triggers = function(id, callback, errorCallback) {
        return this.client.get(
            helpers.url("/distributions/{0}/triggers", id),
            callback, errorCallback
        );
    };

    // Create a new trigger associated with the distribution
    //
    // https://m2x.att.com/developer/documentation/v2/distribution#Create-Trigger
    Distributions.prototype.createTrigger = function(id, params, callback, errorCallback) {
        return this.client.post(
            helpers.url("/distributions/{0}/triggers", id),
            { params: params },
            callback, errorCallback
        );
    };

    // Retrieve information about a trigger associated to a distribution
    //
    // https://m2x.att.com/developer/documentation/v2/distribution#View-Trigger
    Distributions.prototype.trigger = function(id, triggerId, callback, errorCallback) {
        return this.client.get(
            helpers.url("/distributions/{0}/triggers/{1}", id, triggerId),
            callback, errorCallback
        );
    };

    // Update an existing trigger associated with the distribution
    //
    // https://m2x.att.com/developer/documentation/v2/distribution#Update-Trigger
    Distributions.prototype.updateTrigger = function(id, triggerId, params, callback, errorCallback) {
        return this.client.put(
            helpers.url("/distributions/{0}/triggers/{1}", id, triggerId),
            { params: params },
            callback, errorCallback
        );
    };

    // Test a trigger by firing a fake value
    //
    // https://m2x.att.com/developer/documentation/v2/distribution#Test-Trigger
    Distributions.prototype.testTrigger = function(id, triggerId, params, callback, errorCallback) {
        return this.client.post(
            helpers.url("/distributions/{0}/triggers/{1}/test", id, triggerId),
            { params: params },
            callback, errorCallback
        );
    };

    // Delete a trigger associated to the distribution
    //
    // https://m2x.att.com/developer/documentation/v2/distribution#Delete-Trigger
    Distributions.prototype.deleteTrigger = function(id, triggerId, callback, errorCallback) {
        return this.client.del(
            helpers.url("/distributions/{0}/triggers/{1}", id, triggerId),
            callback, errorCallback
        );
    };

    return Distributions;
});
