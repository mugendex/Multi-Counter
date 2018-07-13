/**************************************************
        数字カウンター
***************************************************/
function CoinCounter(out){
    // いじるタグ
    this.out = document.getElementById(out);

    // 値をインクリメントする
    this.increment = function(){
        if(this.out.textContent < 5){
            this.out.textContent++;
        }
    }

    // 値をデクリメントする
    this.decrement = function(){
        if(this.out.textContent > 0){
            this.out.textContent--;
        }
    }
}

var NCNum = 0;//カウンターの数のカウント

// 数字カウンターを追加する
const CreateNC = function(parentId){
    //一つだけ作れる
    //if(document.getElementById(`${parentId}_NC_${NCNum}`) == null){
        var parent = document.getElementById(parentId);

        NCNum++;

        // 本体
        var NCWrapper = document.createElement("div");
        NCWrapper.classList.add("NCWrapper",`${parentId}`);
        NCWrapper.id = `${parentId}_NC_${NCNum}`;
        parent.appendChild(NCWrapper);
        
        // 値表示部
        var counter = document.createElement("div");
        counter.classList.add("NCContent",`${parentId}_NC_${NCNum}`);
        counter.id = `${parentId}_NC_out_${NCNum}`;
        counter.textContent = "0";
                
        
        // +ボタン
        var plusButton = document.createElement("button");
            plusButton.textContent = "＋";
            plusButton.classList.add("NCContent","btn",`${parentId}`);
            plusButton.onclick = function(){
            increment(counter.id);
        };
    
        // -ボタン
        var minusButton = document.createElement("button");
        minusButton.textContent = "－";
        minusButton.classList.add("NCContent","btn",`${parentId}`);
        minusButton.onclick = function(){
            decrement(counter.id);
        };

        // 削除ボタン
        var removeButton = document.createElement("Button");
        removeButton.textContent = "x";
        removeButton.classList.add("NCContent","btn",`${parentId}`);
        removeButton.onclick = function(){
            minusButton.remove();
            plusButton.remove();
            counter.remove();
            NCWrapper.remove();
            this.remove();
        }
                
        //下につける
        NCWrapper.appendChild(counter);
        NCWrapper.appendChild(plusButton);
        NCWrapper.appendChild(minusButton);
        NCWrapper.appendChild(removeButton);
    //}
}

/**************************************************
        ioカウンター
***************************************************/
//ioカウンタを作成
const Createio = function(parentId) {
    var parent = document.getElementById(parentId);

    //本体
    var ioWrapper;
    if(document.getElementById(`${parentId}_ioWrapper`) == null){
        ioWrapper = document.createElement("div");
        ioWrapper.classList.add("ioWrapper",`${parentId}`);
        ioWrapper.id = `${parentId}_ioWrapper`;

        parent.appendChild(ioWrapper);
        
        //削除ボタン
        ioremove = document.createElement("button");
        ioremove.textContent = "✕";
        ioremove.classList.add("ioContent","btn",`${parentId}`);
        ioremove.onclick = function(){
            if(ioWrapper.childNodes[2]){ //削除ボタン以外の小要素が2つ以上の場合
                ioWrapper.childNodes[1].remove();
            }else{
                //全て削除
                ioWrapper.childNodes[1].remove();
                this.remove();
                ioWrapper.remove();
            }
        }

        ioWrapper.appendChild(ioremove);
    }else{
        ioWrapper = document.getElementById(`${parentId}_ioWrapper`);
    }
    

    
    //ボタン
    var io = document.createElement("button");
    io.classList.add("ioContent","btn",`${parentId}`);
    io.textContent = "　";
    io.flag = false;
    io.onclick = function(){
        if(io.flag == false){
            io.textContent = "◯";
            io.style.color = "black";
            io.style.backgroundColor = "white";
            io.flag = true;
        }else{
            io.textContent = "　";
            io.style.color = "white";
            io.style.backgroundColor = "gray";
            io.flag = false;
        }

    }

    //小要素を親要素に追加
    ioWrapper.appendChild(io);
}
 
/**************************************************
        ダイス 
***************************************************/
//diceMax面のダイスを振る
const PlayDice = function(diceMax = 6){


    return Math.floor(Math.random() * diceMax + 1);
}

//[diceMax]d[diceCount]のダイスを振る
const  DiceEx = function(diceCount,diceMax){
    var diceArrey = [];

    count = 0;
    while(count < diceCount){
        diceArrey.push(PlayDice(diceMax));
        count++
    }

    var message = diceCount + "d" + diceMax + ":" + sum(diceArrey);
    console.log(message);

    return diceArrey;
}

/*--------------------------------
    汎用関数
------------------------------- */

//値を1増やす
function increment(out){
    document.getElementById(out).textContent++;
}

//値を1減らす
function decrement(out){
    document.getElementById(out).textContent--;
}

//配列の合計を返す
const ArrSum = function(arr){
    var sum = arr.reduce((a, b) => a + b);
    return sum;
}


