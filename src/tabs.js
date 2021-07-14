export function tabs(tabsClass, tabsContentClass) {

    const tabsClassList = document.getElementsByClassName(tabsClass);

    const tabsContentList = document.getElementsByClassName(tabsContentClass);

    const tabsList = [...tabsClassList];     // Converting HTML Collection into an array

    const contentDivsArray = [...tabsContentList];

    function clearTabs() {
    
        const clearTabsMap = contentDivsArray.map(tab => tab.style.display = 'none');
    
    }

    function showSelectedTab(tabNumber) {

        contentDivsArray[tabNumber].style.display = 'block';
    
    }
    
    function tabClickEvent(tab, tabNumber) {
    
        tab.addEventListener('click', () => {
    
            clearTabs();
    
            showSelectedTab(tabNumber);
    
        })
    
    }
    
    function assignTabEvents(){
    
        const eventsMap = tabsList.map((tab,tabNumber) => {
    
            tabClickEvent(tab, tabNumber);
    
        });
    
    }

    clearTabs();

    showSelectedTab(0);

    assignTabEvents();

    return contentDivsArray;

}

