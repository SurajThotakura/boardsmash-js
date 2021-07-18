export function tabs(tabsClass, tabsContentClass) {
    const tabsClassList = document.getElementsByClassName(tabsClass);
    const tabsContentList = document.getElementsByClassName(tabsContentClass);
    const tabsList = [...tabsClassList]; // Converting HTML Collection into an array
    const contentDivsArray = [...tabsContentList];
    function clearTabs() {
        contentDivsArray.forEach((tab) => (tab.style.display = 'none'));
    }
    function showSelectedTab(tabNumber) {
        contentDivsArray[tabNumber].style.display = 'block';
    }
    function tabClickEvent(tab, tabNumber) {
        tab.addEventListener('click', () => {
            clearTabs();
            showSelectedTab(tabNumber);
        });
    }
    function assignTabEvents() {
        tabsList.forEach((tab, tabNumber) => {
            tabClickEvent(tab, tabNumber);
        });
    }
    clearTabs();
    showSelectedTab(0);
    assignTabEvents();
    return contentDivsArray;
}
