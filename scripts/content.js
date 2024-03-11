


var formData = new FormData();
formData.append('searchname', 'NATURE');

// 添加其他表单字段...

fetch('https://www.letpub.com.cn/index.php?page=journalapp&view=search', {
  method: 'POST',
  body: formData,
  mode: 'no-cors'
})
.then(response => response.text())
.then(data => {
  console.log(data); // 输出返回的 HTML 内容
})
.catch(error => {
  console.error('Error occurred during fetch:', error);
});



/*
url = "https://www.letpub.com.cn/index.php?page=journalapp&view=search"

function Get_LetPub(url) {
    fetch('https://www.letpub.com.cn/index.php?page=journalapp&view=search', {
        mode: 'no-cors'
    })
    .then(response => {
        console.log('Response received, but content is opaque:', response);
    })
    .catch(error => {
        console.error('Error occurred during fetch:', error);
    });
};
*/
// console.log(Get_LetPub(url));