$(document).ready(function() {
	if ($("#help").length == 0) {
		return;
	}

	var help_button = '<button type="button" class="btn btn-default btn-xs help" data-toggle="modal" data-target="#help_message">Help</button>';
	var content = $('body div.content');
	var container = $(content).find('div.container');
	if (container.length != 0) {
		content = container;
	}
	var icon = $(content).find('img.title_icon');
	var mesg = $(content).find('div.alert');
	if (icon.length != 0) {
		$(help_button).insertAfter(icon);
	} else if (mesg.length != 0) {
		$(help_button).insertAfter(mesg);
	} else {
		$(help_button).prependTo(content);
	}

	var help_content =
		'<div id="help_message" class="modal fade" role="dialog">' +
			'<div class="modal-dialog">' +
				'<div class="modal-content">' +
					'<div class="modal-header">' +
						'<button type="button" class="close" data-dismiss="modal">&#215;</button>' +
						'<h4 class="modal-title modal-title-primary">Help</h4>' +
					'</div>' +
					'<div class="modal-body">' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>';
	$(help_content).appendTo("body");
	$("div#help").appendTo("div#help_message div.modal-body");
});
