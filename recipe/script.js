const ingredients = [
  "リンゴ","チョコ","トマト","タピオカ","イチゴ","ヨーグルト","鮭",
  "卵","アボカド","きゅうり","ホットケーキ","ブドウ","チーズ","ピーマン",
  "アスパラガス","キャラメル","野菜","にんじん","山菜","シソ","バター",
  "寿司","はちみつ","オクラ","茄子","バナナ","ナタデココ","ガム","ちくわ",
  "アーモンド","ライチ","どら焼き","中トロ","たこ焼き","じゃがりこ","ポテチ",
  "豚肉","鶏肉","牛肉","角煮","チキン","ポーク","ビーフ","餃子","シュウマイ",
  "納豆","シーチキン","ミートボール","ミートソース","マヨネーズ","醤油",
  "うなぎ","フカヒレ","ブロッコリー","さつまいも","ポテト","もやし",
  "豆腐","おから","油揚げ","さんま","海苔","激辛","シラス","かぼちゃ","大根",
  "キャベツ","ゴボウ","しいたけ","松茸","梨","生牡蠣","柿","ビワ","ミルク",
  "コーラ","牛乳","ソーダ","コーヒー","枝豆","そら豆","蟹","エビ","ホタテ",
  "魚介","塩","味噌","わかめ","ミント","チョコミント","ワサビ","生姜","にんにく",
  "米粉","抹茶","緑茶","メンマ","キムチ","ひじき","漬物","エナドリ","カレー",
  "寒天","こんにゃく","親子","いくら","たらこ","明太子","スパイス","フィッシュ",
  "コーン","オニオン","サーモン","ストロベリー","プロテイン","カスタード","クリーム",
  "シュガー","ルマンド","ねるねるねるね","高野豆腐","麦茶","カツオ","ワカサギ",
  "シナモン","ナツメグ","カニカマ","かまぼこ","グリーンピース","マンゴー","マーガリン",
  "黒ゴマ","イカスミ","メロン","メロンソーダ","桃","ピーチ","ポテトサラダ","マカロニ",
  "マカロン","ポッキー","天かす","梅","とり五目","おかか","ツナマヨ","海老マヨ","エビフライ",
  "ウインナー","ソーセージ","チキンカレー","ベーコン","ナポリタン","サラダチキン","軟骨",
  "カルビ","プルコギ","たけのこ","甘納豆","野沢菜","とんかつ","ニラ玉","紅しょうが",
  "シークヮーサー","果汁グミ","ドリトス","コーンフレーク","玉ねぎ",'ニラ','小松菜','カリフラワー',
  'パイナップル','ほうじ茶','赤紫蘇','黒蜜','黒糖','黒酢','オリーブオイル','レタス','白菜',
  'パセリ','ケール'
];

const cookingMethods = [
  "ピザ","炒め","パン","ジュース","スープ","サラダ","シチュー",
  "グラタン","カレー","オムレツ","の天ぷら","アイス","寿司","丼","丼",
  "ドーナツ","汁","クッキー","グラタン","餃子","ラーメン","チャーハン",
  "おでん","定食","蕎麦","うどん","の素揚げ","肉まん","まんじゅう",
  "ゼリー","ピラフ","麻婆豆腐","冷やし中華","巻き","おにぎり","そうめん",
  "大福","パイ","ビビンバ","サンド"
];

const reverseCookingMethods = [
  "炙り","焼き","生","乾燥","揚げ","蒸し","煮",
  "冷凍","丸焼き","塩焼き","半熟","京都風","イタリアン","和風",
  "水",""
];

function generateRecipe() {
  const ingredient = ingredients[Math.floor(Math.random() * ingredients.length)];
  const ingredient02 = ingredients[Math.floor(Math.random() * ingredients.length)];
  const cookingMethod = cookingMethods[Math.floor(Math.random() * cookingMethods.length)];
  const cookingMethod02 = cookingMethods[Math.floor(Math.random() * cookingMethods.length)];
  const recipe = document.getElementById("recipe");
  recipe.innerHTML = `「 ${ingredient}${cookingMethod} 」 と 「 ${ingredient02}${cookingMethod02} 」`;
}

function generateReverseRecipe() {
  const ingredient = ingredients[Math.floor(Math.random() * ingredients.length)];
  const ingredient02 = ingredients[Math.floor(Math.random() * ingredients.length)];
  const reverseCookingMethod = reverseCookingMethods[Math.floor(Math.random() * reverseCookingMethods.length)];
  const reverseCookingMethod02 = reverseCookingMethods[Math.floor(Math.random() * reverseCookingMethods.length)];
  const recipe = document.getElementById("recipe");
  recipe.innerHTML = `「 ${reverseCookingMethod}${ingredient} 」 と 「 ${reverseCookingMethod02}${ingredient02} 」`;
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
  if (Math.random() < 0.61) {
    generateRecipe();
  } else {
    generateReverseRecipe();
  }
});

document.getElementById("twitter-share-button").onclick = function() {
  let twText = encodeURIComponent("今日の料理は……\n"+recipe.innerHTML);
  let hashtags = "ランダム料理";
  let url = "https://ume-k.github.io/recipe/";
  window.open("https://twitter.com/intent/tweet?text="+twText+"%0D%0A"+"&hashtags="+hashtags+"&url="+url);
}

