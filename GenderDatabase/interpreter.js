oxfordify = function(arr, conjunction, ifempty){
    let l = arr.length;
    if (!l) return ifempty;
    if (l<2) return arr[0];
    if (l<3) return arr.join(` ${conjunction} `);
    arr = arr.slice();
    arr[l-1] = `${conjunction} ${arr[l-1]}`;
    return arr.join(", ");
};

function structureLanguage(language){
    return `
    <div class="language">
        <h2>${language.lang}</h2>
        <p>${language.lang} (ISO 639-3: ${language.iso}) has ${language.genders.length} genders${returnColon(language.genders.length)}${oxfordify(language.genders.map(genderList),"and","")}.</p>
        <h3>Paradigms</h3>
        <p>${paradigmIntro(language)}</p>
        <h3>Conventions</h3>
        <p>${conventionIntro(language)}</p>
    </div>
    `
}
function genderList(gender){
    return `${gender.name} (glossed: ${gender.gloss})`
}
function returnColon(n){
    if (n > 0){
        return `: `
    } else {
        return ``
    }
}
function paradigmIntro(language){
    if (language.paradigms === undefined){
        return `${language.lang} currently has no recorded paradigms.`
    } else {
        yeslist = language.paradigms.filter(thelist => thelist.value === "yes").map(paradigm => paradigm.paradigm);
        nolist = language.paradigms.filter(thelist => thelist.value === "no").map(paradigm => paradigm.paradigm);
        return `
        ${language.lang} has agreement on ${oxfordify(yeslist,"and","")}.
        ${language.lang} does not have agreement on ${oxfordify(nolist,"and","")}.
        `
    }
}
function conventionIntro(language){
    if (language.conventions === undefined){
        return `${language.lang} currently has no recorded conventions.`
    } else{
        return `${language.conventions.map(function(convention){return `
        <div>
            <h4>${convention.convention}</h4>
            
        </div>
        `
        }).join("")}`
    }
}
function poop(x){return `poop`}

document.getElementById("database").innerHTML =`
    <h1>Gender Defaults Database</h1>
    <p>There are currently ${JSON.parse(database).length} languages in this database.</p>
    ${JSON.parse(database).map(structureLanguage).join("")}
`