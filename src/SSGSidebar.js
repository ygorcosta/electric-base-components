'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';
import Toggler from 'metal-toggler';

import templates from './SSGSidebar.soy';

class SSGSidebar extends Component {
	attached() {
		new Toggler({
			content: '.sidebar-list-1',
			header: '.sidebar-header'
		});
	}
};

Soy.register(SSGSidebar, templates);

export default SSGSidebar;
