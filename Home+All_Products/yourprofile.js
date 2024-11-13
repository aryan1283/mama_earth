function editProfile() {
    document.getElementById('profileForm').style.display = 'block';
    document.getElementById('profileDisplay').style.display = 'none';
}

function saveProfile(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    
    // Update the display fields with the input values
    document.getElementById('displayName').innerText = name;
    document.getElementById('displayEmail').innerText = email;
    document.getElementById('displayPhone').innerText = phone;
    document.getElementById('displayAddress').innerText = address;
    
    document.getElementById('profileForm').style.display = 'none';
    document.getElementById('profileDisplay').style.display = 'block';
}

function changePassword() {
    alert("Change password feature coming soon!");
}

function logout() {
    alert("Logging out...");
    // Add actual logout functionality here
}