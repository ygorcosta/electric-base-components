'use strict';

import Clipboard from 'metal-clipboard';
import Component from 'metal-component';
import core from 'metal';
import dom from 'metal-dom';
import Soy from 'metal-soy';

import templates from './ElectricCode.soy';

class ElectricCode extends Component {
	attached() {
		if (!window.electricClipboard) {
			window.electricClipboard = new Clipboard({
				selector: '.code-container .copy-to-clipboard',
				text: delegateTarget => {
					return dom.next(delegateTarget, '.code').innerHTML;
				}
			});
		}
	}
};

Soy.register(ElectricCode, templates);

export default ElectricCode;
