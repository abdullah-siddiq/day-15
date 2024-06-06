let main = document.createElement("div");
main.classList.add("container", "d-flex", "justify-content-center", "align-items-center", "vh-100");
main.style.backgroundColor = "#1002";

let row = document.createElement("div");
row.classList.add("row", "w-100");

let count = document.createElement("div");
count.classList.add("col-md-4", "offset-md-4", "text-center", "rounded", "border", "align-middle", "p-3");
count.style.color = "black";
count.style.backgroundColor = "#0567";

let msg = document.createElement("h1");
msg.classList.add("heading");
msg.innerHTML = "10";
msg.style.fontSize = "15rem";

setTimeout(() => {
    msg.innerHTML = "10";
    setTimeout(() => {
        msg.innerHTML = "9";
        setTimeout(() => {
            msg.innerHTML = "8";
            setTimeout(() => {
                msg.innerHTML = "7";
                setTimeout(() => {
                    msg.innerHTML = "6";
                    setTimeout(() => {
                        msg.innerHTML = "5";
                        setTimeout(() => {
                            msg.innerHTML = "4";
                            setTimeout(() => {
                                msg.innerHTML = "3";
                                setTimeout(() => {
                                    msg.innerHTML = "2";
                                    setTimeout(() => {
                                        msg.innerHTML = "1";
                                        setTimeout(() => {
                                            msg.innerHTML = "Happy Independence Day !!!!";
                                            msg.style.fontSize = "10rem"; 
                                            count.classList.add("col-md-12");
                                            count.classList.remove("offset-md-4");
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

count.appendChild(msg);
row.appendChild(count);
main.appendChild(row);

document.body.appendChild(main);
s