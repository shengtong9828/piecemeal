class notionUtils {
	#analRichText(data) {
		return data.map((item) => item.plain_text).join('');
	}
	#analSelect(data) {
		return data.name;
	}
	#analMultiSelect(data) {
		return data.map((item) => item.name).join(',');
	}
	#analCheckbox(data) {
		return data.toString();
	}
	#analUnique_id(data) {
		return `${data.prefix}-${data.number}`;
	}
	#analUser(data) {
		return data.id;
	}
  #analFormula(data) {
		const { type } = data;
    return data[type]
  }
  #analStatus(data) {
    return data.name
  }
  #analDate(data) {
    const {start, end} = data
    return end ? `${start} - ${end}` : start
  }

	analPropItem(propItem) {
		const { type } = propItem;
		const data = propItem[type];
		switch (type) {
			case 'title':
			case 'rich_text':
				return this.#analRichText(data);
			case 'select':
				return this.#analSelect(data);
			case 'multi_select':
				return this.#analMultiSelect(data);
			case 'checkbox':
				return this.#analCheckbox(data);
			case 'unique_id':
				return this.#analUnique_id(data);
			case 'number': 
			case 'email': 
			case 'url':
			case 'phone_number':
			case 'created_time':
			case 'last_edited_time':
				break;
			case 'people':
			case 'created_by':
			case 'last_edited_by':
				return this.#analUser(data);
			case 'formula':
        return this.#analFormula(data);
      case 'status':
        return this.#analStatus(data);
      case 'date':
        return this.#analDate(data);
         
			default:
				console.log(type, data);
				break;
		}
		return data;
	}
	analProp(prop) {
		const result = {};
		Object.keys(prop).map((propItem) => {
			result[propItem] = this.analPropItem(prop[propItem]);
		});
		return result;
	}

	analProps(props) {
		console.log('analProps', props);
		const result = props.map((prop) => {
			return this.analProp(prop);
		});
		console.log('result', result);
		return result;
	}
}

export default new notionUtils();
