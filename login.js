document.getElementById('btn-submit').addEventListener('click', function () {
    //step-2
    const emailID = document.getElementById('user-email');
    const email = emailID.value;
    // console.log(email);
    //step-3
    const userPass = document.getElementById('user-pass');
    const pass = userPass.value;
    // console.log(pass);

    //verify mail & pass

    if (email === 'sontan@baap.com' && pass === 'secret') {
        location.href = 'another.html';
    } else {
        console.log('invaild user');
    }
});