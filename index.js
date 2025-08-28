
const heartIcons = document.querySelectorAll(".fa-heart");
const heartDisplay = document.getElementById("heart");
const callHistory = document.getElementById("call-history");
const clearBtn = document.getElementById("clear-history")
let heartCount = 0;

// function for setting attribute
function setInnerText(element, value) {
  if (element) {
    element.innerText = value;
  }
}

// heart click functionality
for (const icon of heartIcons) {
    icon.addEventListener('click', function(){
    heartCount += 1;
    setInnerText(heartDisplay, heartCount);
  });
}


// call button functionality

const callBtns = document.querySelectorAll(".call");

for (const btn of callBtns) {
    btn.addEventListener('click', function(){


        const service = btn.getAttribute("data-service");
        const number = btn.getAttribute("data-num");

        alert(`Service: ${service} \nNumber: ${number}`);

        // Coin count reduce

        const coins = document.getElementById("coin");
        const coinValue = parseInt(coins.innerText);
        if (coinValue <20){
            alert("Not enough Coins");
            return;
        }

        const updateCoinValue = coinValue - 20;

        setInnerText(coins,updateCoinValue);

        // Call history add
        const time = new Date();
        const timeString = time.toLocaleTimeString();

        const newHistory = document.createElement("div");
        newHistory.className = "flex justify-between items-center mt-3 shadow-md rounded-md p-2"
        newHistory.innerHTML = `
            <div>
                <h2 class="font-bold">${service}</h2>
                <h2>${number}</h2>
            </div>

            <div>
                <p>${timeString}</p>
            </div>
        `;

        callHistory.prepend(newHistory);
    })
}
// clear history functionality
clearBtn.addEventListener("click", function(){
    callHistory.innerHTML = "";
});
