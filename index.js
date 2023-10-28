const enviarEmail = require("./envia-email");
const { isMonday, checkRecentVisit, buildEmailBody } = require("./helpers");
const { customers } = require("./mockDbCustomers");

const SUBJECT = 'Novidades da CarStore';

function sendEmailToCustomers() {
  const emailsReport = [];

  if (isMonday()) {
    customers.forEach((customer) => {
      if(checkRecentVisit(customer, 1) && customer.allowEmail) {
        const emailBody = buildEmailBody(customer);
        const { message } = enviarEmail(customer.name, customer.email, SUBJECT, emailBody);
        emailsReport.push(message);
      } else {
        emailsReport.push(`O cliente ${customer.name} não visitou a loja no último mês e/ou não permitiu o envio de emails.`);
      }
    })
  }

  emailsReport.forEach((email) => console.log(email))
}

sendEmailToCustomers();
