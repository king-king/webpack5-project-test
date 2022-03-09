const p = new Promise(res => {
    setTimeout(() => {
        res('成功');
    }, 3000);
});

p.then(value => {
    console.log(value);
});
