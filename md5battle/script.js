function calculateMD5() {
    const input1 = document.getElementById("input-1").value;
    const input2 = document.getElementById("input-2").value;
    const md5_1 = md5(input1);
    const md5_2 = md5(input2);
    const total1 = sumDigits(md5_1);
    const total2 = sumDigits(md5_2);
    let resultText;

    document.getElementById("result").innerHTML = "<div style='color:red'>⚔戦闘中⚔</div>";
    window.setTimeout(() => {
        document.getElementById("out-1").innerHTML = "チームA: " + total1 + "pt (" + md5_1 + ")";
        document.getElementById("out-2").innerHTML = "チームB: " + total2 + "pt (" + md5_2 + ")";
        if (total1 > total2) {
            resultText = `結果……<br> 「${input1}」 が勝ち！`;
        } else if (total1 < total2) {
            resultText = `結果……<br> 「${input2}」 が勝ち！`;
        } else {
            resultText = "結果……<br>引き分け！";
        }
        document.getElementById("result").innerHTML = resultText;
    }, 800);

}

function sumDigits(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        if (/\d/.test(char)) {
            sum += parseInt(char);
        }
    }
    return sum;
}
