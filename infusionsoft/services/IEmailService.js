module.exports = IEmailService = require('typedef')

// THIS CODE WAS GENERATED BY AN AUTOMATED TOOL. Editing it is not recommended.
// For more information, see http://github.com/bvalosek/grunt-infusionsoft
// Generated on Mon Aug 19 2013 21:29:03 GMT-0500 (CDT)

// APIEmailService allows you to email your contacts as well as attaching emails
// sent elsewhere (this lets you send email from multiple services and still see
// all communications inside of Infusionsoft).
.interface('IEmailService') .define({

    // Create a new email template that can be used for future emails
    __xmlrpc__addEmailTemplate: function(apiKey, pieceTitle, categories,
        fromAddress, toAddress, ccAddress, bccAddress, subject, textBody,
        htmlBody, contentType, mergeContext) {},

    // This will create an item in the email history for a contact. This does not
    // actually send the email, it only places an item into the email history.
    // Using the API to instruct Infusionsoft to send an email will handle this
    // automatically.
    __xmlrpc__attachEmail: function(apiKey, contactId, fromName,
        fromAddress, toAddress, ccAddresses, bccAddresses, contentType,
        subject, htmlBody, textBody, header, receivedDate, sentDate,
        emailSentType) {},

    // This retrieves all possible merge fields for the context provided
    __xmlrpc__getAvailableMergeFields: function(apiKey, mergeContext) {},

    // Retrieves the details for a particular email template
    __xmlrpc__getEmailTemplate: function(apiKey, templateId) {},

    //  
    __xmlrpc__getOptStatus: function(apiKey, email) {},

    // This method opts-in an email address. This method only works the first time
    // an email address opts-in
    __xmlrpc__optIn: function(apiKey, email, optInReason) {},

    // Opts-out an email address. Note that once an address is opt-out, the API
    // cannot opt it back in
    __xmlrpc__optOut: function(apiKey, email, optOutreason) {},

    // This will send an email to a list of contacts, as well as record the email
    // in the contacts' email history
    __xmlrpc__sendEmail: function(apiKey, contactList, fromAddress,
        toAddress, ccAddresses, bccAddresses, contentType, subject, htmlBody,
        textBody, _templateId) {},

    // This will send an email to a list of contacts, as well as record the email
    // in the contacts' email history
    __xmlrpc__sendTemplate: function(apiKey, contactList, templateId) {},

    // This method is used to update an already existing email template
    __xmlrpc__updateEmailTemplate: function(apiKey, templateId, pieceTitle,
        category, fromAddress, toAddress, ccAddress, bccAddresses, subject,
        textBody, htmlBody, contentType, mergeContext) {}

});