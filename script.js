function showForm(formType) {
    const signupSection = document.getElementById('signup');
    const signinSection = document.getElementById('signin');
    const formSelection = document.getElementById('form-selection');

    if (formType === 'signup') {
        signupSection.style.display = 'block';
        signinSection.style.display = 'none';
    } else if (formType === 'signin') {
        signinSection.style.display = 'block';
        signupSection.style.display = 'none';
    }

    // Hide the form selection buttons once a form is shown
    formSelection.style.display = 'none';
}
