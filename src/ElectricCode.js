'use strict';

import Clipboard from 'metal-clipboard';
import Component from 'metal-component';
import Tooltip from 'metal-tooltip';
import core from 'metal';
import dom from 'metal-dom';
import Soy from 'metal-soy';

import templates from './ElectricCode.soy';

class ElectricCode extends Component {
	attached() {
		const selector = '.code-container .btn-copy';

		if (!window.electricClipboardTooltip) {
			window.electricClipboardTooltip = new Tooltip({
				delay: [300, 150],
				elementClasses: 'fade',
				selector: selector,
				title: 'Copy',
				visible: false,
				events: {
					visibleChanged: function(event) {
						if (event.newVal) {
							this.title = 'Copy';
						}
					}
				}
			});
		}

		if (!window.electricClipboard) {
			window.electricClipboard = new Clipboard({
				selector: selector,
				text: delegateTarget => {
					window.electricClipboardTooltip.title = 'Copied';
					return dom.next(delegateTarget, '.code').innerHTML;
				}
			});
		}
	}
};

Soy.register(ElectricCode, templates);

export default ElectricCode;
