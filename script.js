/*chatroom*/
const helperBtn = document.querySelector("#helper");
const closeBtn = document.querySelector(".title svg");
const chatroom = document.querySelector(".chatroom");
const background = document.querySelector(".background");

helperBtn.addEventListener("click", () => {
    chatroom.style.transform = "translateY(0)";
    background.style.opacity = "1";
    background.style.pointerEvents = "auto";
});

closeBtn.addEventListener("click", () => {
    chatroom.style.transform = "translateY(-100%)";
    background.style.opacity = "0";
    background.style.pointerEvents = "none";
});

background.addEventListener("click", () => {
    chatroom.style.transform = "translateY(-100%)";
    background.style.opacity = "0";
    background.style.pointerEvents = "none";
});

const conversation = document.querySelector(".conversation");
const suggestedBtn = document.querySelector(".suggested-btn");


suggestedBtn.addEventListener("click", () => {

    document.querySelector(".user-side").style.display="none";

    const userBubble = document.createElement("div");
    userBubble.className = "user-side animate";
    userBubble.innerHTML = `
        <div class="user-bubble">
            <p>Explain H.R. 1 in simple language.</p>
        </div>
    `;
    conversation.appendChild(userBubble);

    setTimeout(() => {
        const botBubble = document.createElement("div");
        botBubble.className = "bot-side animate";
        botBubble.innerHTML = `
            <div class="no-icon bot-bubble">
                <p>H.R. 1, the “One Big Beautiful Bill” Act, is a major 2025 reconciliation law that extends tax cuts, boosts defense and border spending, and cuts over $1 trillion from Medicaid and SNAP.</p>
            </div>
            <div class="with-icon">
                <img src="images/live-chat.png">
                <div class="bot-bubble">
                    <p>For more details,
                    <button class="bill-btn">
                        <strong class="link-text">View Bill</strong>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
                            <path d="m600-200-57-56 184-184H80v-80h647L543-704l57-56 280 280-280 280Z"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;
        conversation.appendChild(botBubble);
    }, 600);
});

conversation.addEventListener("click", (e) => {
    if (e.target.closest(".bill-btn")) {
        window.location.href = "bill.html";
    }
});

/*filter*/
const pills = document.querySelectorAll(".pill");
const cards = document.querySelectorAll(".card");
const noResult = document.querySelector(".no-result")

pills.forEach(pill=>{
    pill.addEventListener("click", ()=>{
    
        pills.forEach(pill => pill.classList.remove("selected"));
        pill.classList.add("selected");

        noResult.style.display = "none";

        const selectedCategory = pill.dataset.category;

        cards.forEach(card => {
            const cardCategories = card.dataset.categories.split(" ");

            let displayCard = false;

            if (selectedCategory === "all") {
                displayCard = true;
            }

            if (selectedCategory === "education") {
                noResult.style.display = "block";
            }

            if (cardCategories.includes(selectedCategory)) {
                displayCard = true;
            }
            if (displayCard) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    })
})

/*bill*/
const hr1 = document.querySelector(".hr1");

hr1.addEventListener("click", () => {
    window.location.href="bill.html";
})