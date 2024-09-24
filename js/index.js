document.getElementById("blogBtn").addEventListener("click", function () {
  window.location.href = "/blog.html";
});

function updateMoney(intialMoney, inputmoney, donatedValue) {
  let money = intialMoney - inputmoney;
  let donateMoney = parseFloat(donatedValue);
  donateMoney = donateMoney + inputmoney;
  return [money, donateMoney];
}

document.getElementById("DonateBtn1").addEventListener("click", function () {
  //Input-field-1
  let input1 = parseFloat(document.getElementById("cardOneInput").value);
  let donateAmount1 = parseFloat(
    document.getElementById("donateAmount1").innerText
  );
  let intialValue = parseFloat(document.getElementById("mainMoney").innerText);
  let [money, donateMoney] = updateMoney(intialValue, input1, donateAmount1);
  document.getElementById("mainMoney").innerText = money;
  document.getElementById("donateAmount1").innerText = donateMoney;
});
document.getElementById("DonateBtn2").addEventListener("click", function () {
  //Input-field-2
  let input2 = parseFloat(document.getElementById("cardTwoInput").value);
  let intialValue = parseFloat(document.getElementById("mainMoney").innerText);
  let donateAmount2 = parseFloat(
    document.getElementById("donateAmount2").innerText
  );
  let [money, donateMoney] = updateMoney(intialValue, input2, donateAmount2);
  document.getElementById("mainMoney").innerText = money;
  document.getElementById("donateAmount2").innerText = donateMoney;
});
document.getElementById("DonateBtn3").addEventListener("click", function () {
  //Input-field-3
  let input3 = parseFloat(document.getElementById("cardThreeInput").value);
  let intialValue = parseFloat(document.getElementById("mainMoney").innerText);
  let donateAmount3 = parseFloat(
    document.getElementById("donateAmount3").innerText
  );
  let [money, donateMoney] = updateMoney(intialValue, input3, donateAmount3);
  document.getElementById("mainMoney").innerText = money;
  document.getElementById("donateAmount3").innerText = donateMoney;
});
//Donation button
let donationBtn = document
  .getElementById("donation-btn")
  .addEventListener("click", function () {
    this.classList.add(
      "bg-[#B4F461]",
      "px-5",
      "py-3",
      "rounded-2xl",
      "font-bold"
    );
    let historyBtn = document.getElementById("history-btn");
    historyBtn.classList.remove(
      "bg-[#B4F461]",
      "px-5",
      "py-3",
      "rounded-2xl",
      "font-bold"
    );
    historyBtn.classList.add("border-2", "px-5", "py-3", "rounded-xl");
  });
// History Button
let historyBtn = document
  .getElementById("history-btn")
  .addEventListener("click", function () {
    this.classList.add(
      "bg-[#B4F461]",
      "px-5",
      "py-3",
      "rounded-2xl",
      "font-bold"
    );
    let donationBtn = document.getElementById("donation-btn");
    donationBtn.classList.remove(
      "bg-[#B4F461]",
      "px-5",
      "py-3",
      "rounded-2xl",
      "font-bold"
    );
    donationBtn.classList.add("border-2", "px-5", "py-3", "rounded-xl");

    console.log("clicked");
  });
