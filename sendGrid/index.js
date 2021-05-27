exports.sendMails = (options) => {
    return async function (params) {
        params.recipientId = params.recipientId || process.env.nowpush_recipientId;

        let response = await options.httpClient.post('/SendNotification/sendMail', params);
        return response.data;
    }
}
