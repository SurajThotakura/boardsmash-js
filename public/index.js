let tab = document.getElementsByClassName('tab')

let tabContent = document.getElementsByClassName('tabContent')

// Tried to keep the function decleration out of the for loop, didn't workout as easy.
// function showTab(e) {
//     console.log(e.srcElement);
// }

// for (let index = 0; index < tab.length; index++) {
//     const element = tab[index];
//     element.addEventListener('click', showTab)
// }

// function to clear all the tab contents
function clearTabs() {
    for (let index = 0; index < tabContent.length; index++) {
        document.getElementById('tab'+index+'Content').style.display= 'none';
    }
}

// function to open the specific tab
function openTab(i) {
    document.getElementById('tab'+i+'Content').style.display= 'block';
}

// to clear all the tabs when the page is loaded
clearTabs();

// to open the default tab wihch is tab[0]
openTab(0);

// loop to assign eventListeners to all the tabs
for (let index = 0; index < tab.length; index++) {
    const element = tab[index];
    element.addEventListener('click', () => {
        clearTabs();
        openTab(index);
    });
}