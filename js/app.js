
let usrname = document.getElementById('usrname');
let pssword = document.getElementById('pssword');

//thanks https://www.codespeedy.com/shuffle-characters-of-a-string-in-javascript/
function shuffle(s) {
    var arr = s.split('');           // Convert String to array
    
    arr.sort(function() {
      return 0.5 - Math.random();
    });  
    s = arr.join('');                // Convert Array to string
    return s;                        // Return shuffled string
}

function picker(cnt, str) {
    let rstr = '';
    for (let i = 0; i < cnt; i++) {
        let rnum = Math.floor(Math.random() * str.length);
        rstr += str[rnum];
    }

    return rstr;
}

function generateubk() {
    JsBarcode("#bk", usrname.value, {
        displayValue: false
      });
};
//yea, yea, but it works and I'm simple nowadays
function generatepbk() {
    JsBarcode("#bk2", pssword.value, {
        displayValue: false
      });
};

function generatepwd() {
    //alert("Implemented soonish...");
    let nums = "0123456789";
    let alfs = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let chars = " +-*/^~-_:;,.<>!#%&()=?";
    let rstr = '';
    
    rstr += picker(28, alfs);
    rstr += picker(4, chars);
    rstr += picker(4, nums);

    pssword.value = shuffle(rstr);
    generatepbk();
} 

usrname.addEventListener("input", () => {
    generateubk();
});

pssword.addEventListener("input", () => {
    generatepbk();
});