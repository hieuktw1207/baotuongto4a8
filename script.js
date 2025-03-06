document.addEventListener("DOMContentLoaded", function() {
    const commentButton = document.querySelector(".comment-section button");
    const emailInput = document.querySelector(".comment-section input");
    const commentTextarea = document.querySelector(".comment-section textarea");

    commentButton.addEventListener("click", function() {
        const email = emailInput.value.trim();
        const comment = commentTextarea.value.trim();

        if (email === "" || comment === "") {
            alert("Vui lòng nhập đầy đủ email và bình luận!");
        } else {
            alert("Cảm ơn bạn đã gửi bình luận, chúng tôi sẽ xem xét tiếp thu và cải thiện trong những lần tiếp theo!");
            emailInput.value = "";
            commentTextarea.value = "";
        }
    });
});
