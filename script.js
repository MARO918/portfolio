// 質問文（ドラえもん世界観）
const questions = [
    "もし「どこでもドア」があったら、いちばん最初にどこ行く？",
    "タイムマシンで過去へ行けるなら、まず誰に会いに行く？",
    "タケコプターで飛んでいたら、何を見たい？",
    "四次元ポケットをひとつだけ持てるなら、どんなことで使いたい？",
    "透明マントがあったら、こっそり何を見る？",
    "スモールライトで小さくなったら、まずどこを冒険する？",
    "木の上の秘密基地…君なら何を持ち込む？",
    "雲の上のレストランに着いたら、何を注文したい？",
    "未来の自分から手紙が届いたら、きっとなんて書いてると思う？",
    "最後の質問！ひとつだけ願いが叶うなら、どんな“しあわせ”を選ぶ？"
];

let current = 0;
let score = 0;

// HTML要素取得
const questionTitle = document.getElementById("question-title");
const nextBtn = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score-display");

// 画面切り替え
const questionScreen = document.getElementById("question-screen");
const resultScreen = document.getElementById("result-screen");

// 初期表示
questionTitle.textContent = questions[current];

// ===== ▼ ハート生成 =====
function createHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.textContent = "❤";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (3 + Math.random() * 3) + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 600);
}
createHearts();

// ===== ▼ 次へボタン =====
nextBtn.addEventListener("click", function () {
    const selected = document.querySelector("input[name='answer']:checked");

    if (!selected) {
        alert("選択肢を選んでね！");
        return;
    }

    const value = Number(selected.value);
    score += value;

    scoreDisplay.textContent = "現在のスコア：" + score;

    // 次の質問へ  
    current++;

    // 最後まで行ったら結果へ
    if (current >= questions.length) {
        showResult();
        return;
    }

    // 次の質問文を読み込み
    questionTitle.textContent = questions[current];

    // ラジオボタンリセット
    selected.checked = false;
});

// ===== ▼ 結果表示 =====
function showResult() {
    questionScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    let message = "";

    if (score <= 15) {
        message = "「きみはね、ちょっと疲れているだけなんだよ。大丈夫、大丈夫。」";
    } else if (score <= 24) {
        message = "「うんうん、きみは思っているよりずっと優しい心を持っているよ。」";
    } else {
        message = "「きみはほんとうにすてきだね。ぼくはね、そんなきみを応援したくなるんだ。」";
    }

    document.getElementById("result-message").textContent = message;
}
