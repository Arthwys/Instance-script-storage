//Script for Request creation notification
(function runMailScript(current, template, email, email_action, event) {
	template.print('<p><font size="3" color="#808080" face="Calibri"><strong>');
	template.print("Greetings " + current.requested_for.first_name +",");
	template.print('</strong></font></p>');
	template.print('<p><font size="3" color="#808080" face="Calibri"><strong>');
	template.print ('A request ticket has been opened on your behalf.');
	template.print('</strong></font></p>');
})(current, template, email, email_action, event);