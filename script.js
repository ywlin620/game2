const questions = [
  {
    question: "瑜玟的大學科系是什麼？",
    choices: ["生科", "化學", "資工", "醫科"],
    answer: "生科"
  },
  {
    question: "瑜玟的專題主要跟什麼有關？",
    choices: ["Spliceosome E complex", "植物光合作用", "癌症篩檢", "小提琴製作"],
    answer: "Spliceosome E complex"
  },
  {
    question: "瑜玟之後比較想往哪個方向發展？",
    choices: ["生物資訊", "純藝術", "法律", "餐飲管理"],
    answer: "生物資訊"
  },
  {
    question: "哪個情況最像瑜玟會崩潰的瞬間？",
    choices: ["OJ 一直 WA", "AKTA 跑歪", "PPT 字太多", "以上皆是"],
    answer: "以上皆是"
  },
  {
    question: "如果瑜玟說「我再改一下就好」，通常代表？",
    choices: ["真的只改一下", "會改到凌晨", "已經放棄", "準備睡覺"],
    answer: "會改到凌晨"
  }
];

let currentQuestion = 0;
let score = 0;
let playerName = "";

function startGame() {
  playerName = document.getElementById("player-name").value;

  if (playerName.trim() === "") {
    alert("先輸入名字啦！");
    return;
  }

  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");

  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];

  document.getElementById("progress").textContent =
    `第 ${currentQuestion + 1} / ${questions.length} 題`;

  document.getElementById("question").textContent = q.question;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  q.choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.className = "choice-btn";
    button.onclick = () => chooseAnswer(choice);
    choicesDiv.appendChild(button);
  });
}

function chooseAnswer(choice) {
  if (choice === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");

  document.getElementById("result-title").textContent =
    `${playerName} 的成績出爐！`;

  document.getElementById("score-text").textContent =
    `你得到 ${score} / ${questions.length} 分`;

  let comment = "";

  if (score === questions.length) {
    comment = "太扯，你是不是在我腦袋裡裝監視器。";
  } else if (score >= questions.length * 0.7) {
    comment = "不錯欸，你算是很懂我。";
  } else if (score >= questions.length * 0.4) {
    comment = "普通朋友程度，還需要再觀察。";
  } else {
    comment = "我們是不是該重新認識一下？";
  }

  document.getElementById("comment").textContent = comment;
}

function restartGame() {
  currentQuestion = 0;
  score = 0;

  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("start-screen").classList.remove("hidden");
}