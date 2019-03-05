// re is JS regex express to test email format
const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (emails) => {
    // remove last , if exists
    emails = emails.replace(/,\s*$/, "");
    const invalidEmails = emails
        .split(',')
        .map(email => email.trim())
        .filter(email=> re.test(email) === false); // failed the re test

    if (invalidEmails.length) {
        return `These emails are invalid ${invalidEmails}`;
    }

    return;
};