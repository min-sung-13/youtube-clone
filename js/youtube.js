function thumbsUp() {
    var likeBtn = document.getElementById("thumbsUp").style.color;
    color = '';

    if(likeBtn == 'rgb(47, 39, 205)') {
        var like = document.getElementById("thumbsUp");
        color = '#6C6B6B';
        like.style.color = color;  
    }
    else {
        var like = document.getElementById("thumbsUp");
        color = '#2F27CD';
        like.style.color = color;  
    }
}

function thumbsDown() {
    var hateBtn = document.getElementById("thumbsDown").style.color;
    color = '';

    if(hateBtn == 'rgb(47, 39, 205)') {
        var like = document.getElementById("thumbsDown");
        color = '#6C6B6B';
        like.style.color = color;  
    }
    else {
        var like = document.getElementById("thumbsDown");
        color = '#2F27CD';
        like.style.color = color;
        
    }
}



function clickSubscribe() {
    var button = document.getElementById("subsBtn").style.color;
    color = '';
    bgColor = '';
    text = '';
    
    if(button == 'rgb(92, 92, 92)') {
        var subscribeBtn = document.getElementById("subsBtn");
        alert('구독을 취소하시겠습니까?');

        bgColor = '#FD1616';
        color = '#ffffff';
        text = '구독';

        subscribeBtn.style.backgroundColor = bgColor;
        subscribeBtn.style.color = color;
        subscribeBtn.textContent = text;
    }
    else {
        var subscribeBtn = document.getElementById("subsBtn");
        bgColor = '#D8D8D9';
        color = '#5C5C5C';
        text = '구독중';

        subscribeBtn.style.backgroundColor = bgColor;
        subscribeBtn.style.color = color;
        subscribeBtn.textContent = text;
    } 
}
