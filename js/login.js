document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('registerForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
        } else {
            fetch('/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                if (data.message === 'Usuario registrado con éxito') {
                    $('#registerModal').modal('hide');
                }
            });
        }
    });

    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            if (data.message === 'Login exitoso') {
                $('#loginModal').modal('hide');
            }
        });
    });
});