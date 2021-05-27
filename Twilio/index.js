exports.sendSms = (options) => {
    return async function (params) {
        params.SID = params.SID || process.env.SID;
        params.auth_token = params.auth_token || process.env.TWILIO_AUTH_TOKEN;
        params.twilio_number = params.twilio_number || process.env.TWILIO_NUMBER;

        let response = await options.httpClient.post('/SendNotification/sendSms', params);
        return response.data;
    }
}
