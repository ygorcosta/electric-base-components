'use strict';

import core from 'metal';
import Soy from 'metal-soy';

import SSGSearchBase from './SSGSearchBase';
import templates from './SSGSearch.soy';

class SSGSearch extends SSGSearchBase {
	attached() {
		SearchBase.prototype.attached.apply(this);

		const queryString = window.location.search;
		const queryIndex = queryString.indexOf('q=');

		if (queryIndex !== -1) {
			this.query = queryString.substr(queryIndex + 2);
		}
	}

	handleInput_(event) {
		const {target} = event;

		this.query = target.value;
	}
};

Soy.register(SSGSearch, templates);

export default SSGSearch;
