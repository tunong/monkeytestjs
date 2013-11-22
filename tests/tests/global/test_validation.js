registerTest ('Validation work', {
    setup: function() {
		this.emptyProductNameMsg = 'Product name is required';
		this.emptyProductSizeMsg = 'Product size is required';
		this.emptyUseByDateMsg = 'Used-by date is required';
		this.emptyBatchCodeMsg = 'Batch code is required';
	
        this.sourceCode = this.page.source;
        this.eMessage = this.workspace.document.getElementById("error-message");
        this.eForm = this.workspace.document.getElementById("main-form");
        this.eProductName = this.workspace.document.getElementById("product_name");
    },
    load : function() {
        this
        .test('The form cannot be submitted if any of the required fields are empty',function($) {
			this.eForm.enquiry_type.value = 'Product complaint';
			this.eForm.product_name.value = 'test';
			this.eForm.product_size.value = 'test';
			this.eForm.use_by_date.value = 'test';
			this.eForm.batch_code.value = 'test';
			
			// test case of empty first name
			this.eForm.first_name.value = '';
			this.eForm.surname.value = 'test';
			this.eForm.email.value = 'test@example.com';
			this.eForm.contact_number.value = 'test';
			this.eForm.address.value = 'test';
			this.eForm.suburb.value = 'test';
			this.eForm.postcode.value = 'test';
			$(this.eForm.submit).trigger("click");
			ok(this.eForm.checkValidity() == false);
			
			// empty surname
			this.eForm.first_name.value = 'test';
			this.eForm.surname.value = '';
			$(this.eForm.submit).trigger("click");
			ok(this.eForm.checkValidity() == false);
			
			// empty email
			this.eForm.surname.value = 'test';
			this.eForm.email.value = '';
			$(this.eForm.submit).trigger("click");
			ok(this.eForm.checkValidity() == false);
			
			// empty contact number
			this.eForm.email.value = 'test@example.com';
			this.eForm.contact_number.value = '';
			$(this.eForm.submit).trigger("click");
			ok(this.eForm.checkValidity() == false);
			
			// empty address
			this.eForm.contact_number.value = 'test';
			this.eForm.address.value = '';
			$(this.eForm.submit).trigger("click");
			ok(this.eForm.checkValidity() == false);
			
			// empty suburb
			this.eForm.address.value = 'test';
			this.eForm.suburb.value = '';
			$(this.eForm.submit).trigger("click");
			ok(this.eForm.checkValidity() == false);
			
			// empty postcode
			this.eForm.suburb.value = 'test';
			this.eForm.postcode.value = '';
			$(this.eForm.submit).trigger("click");
			ok(this.eForm.checkValidity() == false);
        })
        .test('The form cannot be submitted if the enquiry type is "Product complaint" and any \
				of the following fields are empty: product name, product size, use-by date or batch code.',function($) {
			
			// empty product name
			this.eForm.enquiry_type.value = 'Product complaint';
			this.eForm.product_name.value = '';
			this.eForm.product_size.value = 'test';
			this.eForm.use_by_date.value = '1/1/2013';
			this.eForm.batch_code.value = 'test';
			$(this.eForm.submit).trigger("click");
			equal(this.eMessage.innerHTML, this.emptyProductNameMsg, 'Empty product name validation works');
			
			// empty product size
			this.eForm.product_name.value = 'test';
			this.eForm.product_size.value = '';
			$(this.eForm.submit).trigger("click");
			equal(this.eMessage.innerHTML, this.emptyProductSizeMsg, 'Empty product size validation works');
			
			// empty used-by date
			this.eForm.product_size.value = 'test';
			this.eForm.use_by_date.value = '';
			$(this.eForm.submit).trigger("click");
			equal(this.eMessage.innerHTML, this.emptyUseByDateMsg, 'Empty used-by datevalidation works');
			
			// empty used-by date
			this.eForm.use_by_date.value = '1/1/2013';
			this.eForm.batch_code.value = '';
			$(this.eForm.submit).trigger("click");
			equal(this.eMessage.innerHTML, this.emptyBatchCodeMsg, 'Empty batch code validation works');
        });
    }
});
