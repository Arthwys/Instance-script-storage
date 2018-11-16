(function runMailScript(/* GlideRecord */ current, /* TemplatePrinter */ template,
          /* Optional EmailOutbound */ email, /* Optional GlideRecord */ email_action,
          /* Optional GlideRecord */ event) {
	var gr = new GlideRecord('new_call');
	gr.addQuery('transferred_to',current.request);
	gr.query();
	if (gr.next()){
		var shortDescription = gr.getValue('short_description');
		template.print("<i>" + shortDescription + "</i>");
	}
	
          // Add your code here

})(current, template, email, email_action, event);