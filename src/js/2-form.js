let formData = {
    email: "",
    message: "",
};

const formFeedback = document.querySelector('.feedback-form');

const fillFormFieldLS = () => {
    try {
        const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));
        if (formDataFromLS === null) {
            return;
        }

        formData = formDataFromLS;

        for (const key in formDataFromLS) {
            formFeedback.elements[key].value = formDataFromLS[key];
        }
    } catch (err) {
        console.log(err);
    }
}

fillFormFieldLS();

const onFormFieldInput = event => {
    const { target: formFieldEl } = event;

    const fieldValue = formFieldEl.value;

    const fieldName = formFieldEl.name;

    formData[fieldName] = fieldValue;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const submitForm = event => {
    event.preventDefault();

    if (Object.values(formData).includes('')) {
        alert('Fill please all fields');
        return;
    }

     console.log(formData);

    event.currentTarget.reset();

    localStorage.removeItem('feedback-form-state');

    formData = {
        email: "",
        message: "",
    };
};

 

formFeedback.addEventListener('input', onFormFieldInput);

formFeedback.addEventListener('submit', submitForm);

