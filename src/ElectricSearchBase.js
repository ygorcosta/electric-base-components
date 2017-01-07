'use strict';

import ajax from 'metal-ajax';
import Component from 'metal-component';
import core from 'metal';
import { CancellablePromise as Promise } from 'metal-promise';

class ElectricSearchBase extends Component {
	attached() {
		this.on('queryChanged', this.handleQueryChange_.bind(this));
	}

	filterResults_(data, query) {
		let {children, content, description, hidden, title} = data;

		let results = [];

		content = content ? content.toLowerCase() : '';
		description = description ? description.toLowerCase() : '';
		title = title ? title.toLowerCase() : '';

		if (!hidden && title.indexOf(query) > -1 || description.indexOf(query) > -1 || content.indexOf(query) > -1) {
			results.push(data);
		}

		if (children) {
			children.forEach(child => {
				results = results.concat(this.filterResults_(child, query));
			});
		}

		return results;
	}

	handleQueryChange_({newVal}) {
		const instance = this;

		this.search_(newVal)
			.then(results => {
				instance.results = results;
			});
	}

	search_(query) {
		const instance = this;

		return Promise.resolve(this.data)
			.then(data => {
				if (data) {
					return data;
				}
				else {
					return ajax.request('/site.json')
						then(res)
				}
			})
			.then(data => {console.log(data);
				if (data.response) {
					data = JSON.parse(data.response).index;

					instance.data = data;
				}

				const {maxResults} = instance;

				let results = [];

				if (data && query) {
					results = instance.filterResults_(data, query.toLowerCase());

					if (results.length > maxResults) {
						results = results.slice(0, maxResults);
					}
				}

				return results;
			});
	}
};

ElectricSearchBase.STATE = {
	data: {
		validator: core.isObject
	},

	maxResults: {
		validator: core.isNumber,
		value: 4
	},

	query: {
		validator: core.isString,
		value: ''
	},

	results: {
		validator: core.isArray,
		value: []
	}
};

export default ElectricSearchBase;
