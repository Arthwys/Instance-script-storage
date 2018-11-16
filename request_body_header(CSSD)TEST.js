//Script for Request notification body header creation
(function runMailScript(current, template, email, email_action, event) {
		var gr = new GlideRecord('new_call');
	gr.addQuery('transferred_to',current.request);
	gr.query();
	if (gr.next())
		var shortDescription = gr.getValue('short_description');
	template.print('<p><font size="5" color="#808080" face="Calibri"><strong>');
	template.print('${request.number} - ' + '${short_description}');
	template.print('</strong></font></p>');
})(current, template, email, email_action, event);