function menuContent() {
    // get content div
    const contentDiv = document.getElementById('content');

    // create menu div
    const menu = document.createElement('div');

    const menuList = document.createElement('ul');
    const menuItems = ['Steak - £20', 'Burger - £14', 'Fish & Chips - £12.50', 'Lasagne - £14', 'Pork Belly - £16'];

    menuItems.forEach((item) => {
        const menuItem = document.createElement('li');
        menuItem.textContent = item;
        menuList.appendChild(menuItem);
    });

    // append dynamic content
    menu.appendChild(menuList);
    contentDiv.appendChild(menu);



};

export { menuContent };