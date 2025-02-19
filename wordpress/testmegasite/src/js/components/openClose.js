import 'plugins/openClosePlugin';

// open-close init
export function initOpenClose() {
  ResponsiveHelper.addRange({
		'..767': {
			on: function() {
				jQuery('.open-close').openClose({
					activeClass: 'active',
					opener: '.opener',
					slider: '.slide',
					animSpeed: 400,
					effect: 'slide'
				});
			},
			off: function() {
				jQuery('.open-close').openClose('destroy');
			}
		}
	});
}
