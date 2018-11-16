//Script for Request delivery notification
(function runMailScript(current, template, email, email_action, event) {
	template.print('<p><font size="3" color="#808080" face="Calibri"><strong>');
	template.print("Greetings " + current.request.requested_for.first_name +",");
	template.print (' your request is being worked on.');
	template.print('</strong></font></p>');
})(current, template, email, email_action, event);