
const twilio_1 = require('./Twilio/index');
const sendGrid_1 = require('./SendGrid/index');
const sendSlack_1 = require('./slackBot/sendChat');

exports.client = (option) => {
    return {
        sendSms: twilio_1.sendSms(option),
        sendMails: sendGrid_1.sendMails(option),
        sendSlackMessage: sendSlack_1.sendSlackMessage(option)
    }
}