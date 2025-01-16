document.addEventListener('DOMContentLoaded', function () {
    /* 用户登录 */
    // 获取输入框元素
    var inputusername = document.getElementById('username');
    var inputpassword = document.getElementById('password');
    const submit = document.getElementById('submit');
    const log = document.getElementById('login');
    let login = false;
    if (!login) {
        log.style.display = 'block';
    }
    submit.addEventListener('click', function (event) {
        alert('daw');
        event.stopPropagation();
        const xhr = new XMLHttpRequest();
        /* 查看Ajax的状态码 */
        /* console.log(xhr.readyState); */
        xhr.open('post', 'http://127.0.0.1:8000/users/login', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        var data = {
            phone: inputusername.value,
            password: inputpassword.value
        };
        var jsonData = JSON.stringify(data);
        xhr.send(jsonData);
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) return;
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                log.style.display = 'none';
            }
        };
    });
});