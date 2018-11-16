//Script for Request notification body header creation
(function runMailScript(current, template, email, email_action, event) {
	template.print('<p><font size="5" color="#808080" face="Calibri"><strong>');
	template.print('${request.number} - ' + '${short_description}');
	template.print('</strong></font></p>');
})(current, template, email, email_action, event);