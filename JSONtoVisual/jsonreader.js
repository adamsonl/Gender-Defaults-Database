

function visualizeWord(word){
    return `
    <div class="word">
        <div class="textitem">
            ${word.text}
        </div>
        <div class="glossitem">
            ${word.gloss}
        </div>
    </div>
    `
}

function visualizePhrase(phrase){
        return `
        <div class="examplebox">
            <div class="glossline">
                ${phrase.words.map(visualizeWord).join("")}
            </div>
            <div class="transline">
                "${phrase.translation}"
            </div>
        </div>
        `
}

function visualize(){
    var inputjson = JSON.parse(inputbox.value);
    document.querySelector("#outputdiv").innerHTML = inputjson.map(visualizePhrase).join("")
};

