if (!localStorage.getItem("reviews")) {
    localStorage.setItem("reviews", JSON.stringify([]))
}

let selectedRating = 0;

function starSelect(index) {
    document.getElementById("selected-rating").style.display = "none"
    selectedRating = index;
    for (let i = 1; i<6; i++) {
        document.getElementById(i).style.color = i <= index ? "gold" : "#ddd";
    }
    return index;
}

function submitReview() {
    let input = document.getElementById("comment-input");
    let review = input.value.trim();
    if (review === "" || selectedRating === 0) {
        alert("Please enter a comment and select a rating.");
        return;
    }
    let reviews = JSON.parse(localStorage.getItem("reviews"));
    reviews.push({ review: review, rating: selectedRating });
    localStorage.setItem("reviews", JSON.stringify(reviews));
    input.value = "";
    selectedRating = 0;
    for (let i = 1; i <= 5; i++) {
        document.getElementById(i).style.color = "#ddd";
    }
    renderReview()
    alert("Review submitted!");
}

function renderReview() {
    let reviews = JSON.parse(localStorage.getItem("reviews"))
    let commentlistEl = document.querySelector("#comment-list")
    let dataHTML= ''

    for (let i = 0; i< reviews.length; i++) {
        let stars = '★'.repeat(reviews[i].rating);
        dataHTML += `
        <li><span>${stars}</span><b>${reviews[i].review}</b></li>
        `
    }
    commentlistEl.innerHTML = dataHTML
}

renderReview()