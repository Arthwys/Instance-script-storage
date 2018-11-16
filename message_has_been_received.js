//Script for notification to caller that Email was received 
(function runMailScript(current, template, email, email_action, event) {
	email.setSubject("Your message: <i>" + current.short_description + "</i> has been received ") ;
	template.print('<p><font size="5" color="#808080" face="Calibri"><strong>');
    template.print("Greetings " + current.caller.first_name +",");
    template.print('</strong></font></p>');
    template.print('<p><font size="3" color="#808080" face="Calibri"><strong>');
    template.print("Your message for IT Support: <i>" + current.short_description + "</i> has been received. We will respond to you as soon as possible.");
	template.print('</strong></font></p>');
})(current, template, email, email_action, event);