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
  // history Record
  let title = document.getElementById("card-1-title").innerText;
  let today = new Date().toLocaleString();
  let record = document.createElement("div");
  record.className =
    "bg-white p-5 rounded-xl my-[2.5rem] w-full border-2 border-gray-200";
  record.innerHTML = `
  <div class="bg-white px-[2.5rem] rounded-2xl w-full">
  <h1 class="text-2xl text-justify font-semibold ">${input1} taka is donate for ${title}</h1>
  <p class="text-xl text-[#111111B3]" >Date: ${today} (Bangladesh Standard Time)</p>
  </div> `;
  let recordContainer = document.getElementById("history-record-container");
  recordContainer.insertBefore(record, recordContainer.firstChild);
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
  // history Record
  let title = document.getElementById("Title2").innerText;
  let today = new Date().toLocaleString();
  let record = document.createElement("div");
  record.className =
    "bg-white p-5 rounded-xl my-[2.5rem] w-full border-2 border-gray-200";
  record.innerHTML = `
    <div class="bg-white px-[2.5rem] rounded-2xl w-full">
    <h1 class="text-2xl text-justify font-semibold">${input2} taka is donate for ${title}</h1>
    <p class="text-xl text-[#111111B3]" >Date: ${today} (Bangladesh Standard Time)</p>
    </div> `;
  let recordContainer = document.getElementById("history-record-container");
  recordContainer.insertBefore(record, recordContainer.firstChild);
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
  // history Record
  let title = document.getElementById("Title-3").innerText;
  let today = new Date().toLocaleString();
  let record = document.createElement("div");
  record.className =
    "bg-white p-5 rounded-xl my-[2.5rem] w-full border-2 border-gray-200";
  record.innerHTML = `
      <div class="bg-white px-[2.5rem] rounded-2xl w-full">
      <h1 class="text-2xl text-justify font-semibold">${input3} taka is donate for ${title}</h1>
      <p class="text-xl text-[#111111B3]" >Date: ${today} (Bangladesh Standard Time)</p>
      </div> `;
  let recordContainer = document.getElementById("history-record-container");
  recordContainer.insertBefore(record, recordContainer.firstChild);
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
    let cardelemets = document.getElementById("Cards");
    cardelemets.style.display = "flex";
    let historyRecord = document.getElementById("history-record-container");
    historyRecord.classList.add("hidden");
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
    let cardelemets = document.getElementById("Cards");
    cardelemets.style.display = "none";
    let historyRecord = document.getElementById("history-record-container");
    historyRecord.classList.remove("hidden");
  });
