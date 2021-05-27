exports.sendSlackMessage = (options) => {
    return async function (params) {
        params.recipientId = params.recipientId || process.env.nowpush_recipientId;

        let response = await options.httpClient.post('/SendNotification/sendSlack', params);
        return response.data;
    }
}
