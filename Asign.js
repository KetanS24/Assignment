// Tab Navigation
function showTab(tabId) {
    var tabs = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active-tab');
    }
    document.getElementById(tabId).classList.add('active-tab');
}

// Loan EMI Calculation
function calculateEMI() {
    var principal = parseFloat(document.getElementById('loan-principal').value);
    var duration = parseFloat(document.getElementById('loan-duration').value) * 12; // Convert years to months
    var interestRate = parseFloat(document.getElementById('loan-interest').value) / 12 / 100; // Monthly interest

    var emi = (principal * interestRate * Math.pow(1 + interestRate, duration)) / (Math.pow(1 + interestRate, duration) - 1);
    document.getElementById('loan-result').innerText = 'Your EMI is: ' + emi.toFixed(2);
}

// Deposit Maturity Calculation
function calculateMaturity() {
    var amount = parseFloat(document.getElementById('deposit-amount').value);
    var duration = parseInt(document.getElementById('deposit-duration').value);
    var interest = 7 / 100; // Fixed interest rate of 7%

    var maturity = amount * Math.pow((1 + interest), duration);
    document.getElementById('deposit-result').innerText = 'Maturity amount is: ' + maturity.toFixed(2);
}

// NetBanking Login
function login() {
    var customerId = document.getElementById('customer-id').value;
    var password = document.getElementById('password').value;

    if (customerId === '' || password.length < 8 || password.length > 12) {
        document.getElementById('login-result').innerText = 'Invalid Customer ID or Password.';
    } else {
        document.getElementById('login-result').innerText = 'WELCOME';
    }
}

// NetBanking Signup
function signup() {
    var password = document.getElementById('signup-password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        document.getElementById('signup-result').innerText = 'Passwords do not match!';
    } else if (password.length < 8 || password.length > 12) {
        document.getElementById('signup-result').innerText = 'Password must be between 8 to 12 characters!';
    } else {
        document.getElementById('signup-result').innerText = 'Registration Successful!';
    }
}
