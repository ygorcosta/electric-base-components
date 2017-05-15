'use strict';

import ajax from 'metal-ajax';
import Component from 'metal-component';
import core from 'metal';
import { CancellablePromise as Promise } from 'metal-promise';

class ElectricSearchBase extends Component {
	attached() {
		this.on('queryChanged', this.handleQueryChange_.bind(this));
	}

	matchesQuery_(data, query) {
		const {childrenOnly, excludePath} = this;
		const path = this.path || location.pathname;

		let {content, description, hidden, title, url} = data;

		if ((childrenOnly && url.indexOf(path) !== 0 && url !== path) ||
			(excludePath && url.indexOf(excludePath) === 0)) {

			return false;
		}

		content = content ? content.toLowerCase() : '';
		description = description ? description.toLowerCase() : '';
		title = title ? title.toLowerCase() : '';

		return !hidden && (title.indexOf(query) > -1 ||
			description.indexOf(query) > -1 ||
			content.indexOf(query) > -1);
	}

	filterResults_(data, query) {
		const {children, childIds} = data;

		let results = [];

		if (this.matchesQuery_(data, query)) {
			results.push(data);
		}

		if (children) {
			childIds.forEach(childId => {
				const child = children[childId];

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
			.then(data => {
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
	childrenOnly: {
		validator: core.isBoolean,
		value: true
	},

	data: {
		validator: core.isObject
	},

	excludePath: {
		validator: core.isString
	},

	maxResults: {
		validator: core.isNumber,
		value: 4
	},

	path: {
		validator: core.isString,
		value: null
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
