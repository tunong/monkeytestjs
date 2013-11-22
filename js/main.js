
function displayError(msg) {
	var eProductName = document.getElementById('error-message');
	eProductName.innerHTML = msg;
}

function validateForm() {
	var eForm = document.getElementById('main-form');
	if (eForm.product_name.value == '') {
		displayError('Product name is required');
		return false;
	}
	if (eForm.product_size.value == '') {
		displayError('Product size is required');
		return false;
	}
	if (eForm.use_by_date.value == '') {
		displayError('Used-by date is required');
		return false;
	}
	if (eForm.batch_code.value == '') {
		displayError('Batch code is required');
		return false;
	}
	if (eForm.enquiry_type.value != 'Product complaint') {
		displayError('Enquiry type must be Product complaint');
		return false;
	}
	return true;
}

function submitForm() {
	return validateForm();
}