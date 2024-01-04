// Auto detect number of tabs and adjust CSS
tabbar = document.getElementsByClassName("tabbar")[0]
num_tabs = tabbar.childElementCount;
tabbar.style.setProperty('--num-tabs', num_tabs);

// Tab switching
var tabs=document.getElementsByClassName("tab");
for(let i=0;i<tabs.length;i++){tabs[i].addEventListener('click',function(){TabClick(this);})}

function TabClick(sender){
    for(let i=0;i<tabs.length;i++){tabs[i].classList.remove("active");}
    sender.classList.toggle("active");
}




shelf_content = document.getElementsByClassName("shelf")[0].getElementsByClassName("content")[0]


// By Anirban
function Gender_Icon(gender){
    if (gender.toLowerCase() == 'male') {
        icon = "face";
    } else if (gender.toLowerCase() == 'female') {
        icon = "face_3";
    } else {
        icon = "transgender";
    }
    return icon;
}

function AddSection(section_name){
    html = "<div class=\"card section span2\">"+section_name+"</div>";
    shelf_content.innerHTML += html;
}

function AddText(text){
    html = "<div class=\"card text span2 \">" + text+"</div>";
    shelf_content.innerHTML += html;
}


function AddSinglePlayer(name, gender){
    icon = Gender_Icon(gender);
    html  = "<div class=\"card players single\">";
    html += "<div class=\"name\">"+name+"</div>";
    html += "<div class=\"icon material-symbols-outlined\">"+icon+"</div>";
    html += "</div>";
    shelf_content.innerHTML += html;
}

function AddDoublePlayer(name1, gender1, name2, gender2) {
    icon1 = Gender_Icon(gender1);
    icon2 = Gender_Icon(gender2);
    html  = "<div class=\"card players double\">";
    html += "<div class=\"name\">"+name1+"</div>";
    html += "<div class=\"icon material-symbols-outlined\">"+icon1+"</div>";
    html += "<div class=\"name\">"+name2+"</div>";
    html += "<div class=\"icon material-symbols-outlined\">"+icon2+"</div>";
    html += "</div>";
    shelf_content.innerHTML += html;
}

function AddCategory(single_or_double, gender, category_name, live) {
    html = "<div class=\"card game-category "+single_or_double+" "+gender+"\">";
    html += "<div class=\"text\">";
    html += "<div class=\"name\">"+ category_name +"</div>";
    if (live == true){
        html += "<div ><span class=\"live\">LIVE</span></div>";
    } else {
        html += "<div ><span class=\"live hide\">LIVE</span></div>";
    }
    html += "</div>";
    html += "<div class=\"icon material-symbols-outlined\">";
    // <!-- Implement control by here -->
    // <!-- Right now by CSS -->
    // <!-- Alignment Issue via HTML -->
    html += " </div>"; /* Add at least one character (even whitespace) otherwise css letter-spacing will break*/
    html += "</div>";
    shelf_content.innerHTML += html;
}

// 
// 
function ChangeTheme(){
    console.log("Test");
    document.body.classList.toggle("theme-light");
    document.body.classList.toggle("theme-dark");

    if(document.body.classList.split(' ').includes("theme-dark")){
        document.body.style.backgroundColor="black";
    }else{
        document.body.style.backgroundColor="white";
    }
}
// 
// 