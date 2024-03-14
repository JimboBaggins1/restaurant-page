function aboutContent() {
    // get content div
    const contentDiv = document.getElementById('content');

    // create about div
    const about = document.createElement('div');

    // create page content
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');

    p1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula, massa eget eleifend tincidunt, ante nisl volutpat elit, eget vehicula turpis magna ac nisl. Cras eu dolor at dolor facilisis egestas ac eget elit. Aliquam facilisis rhoncus nisi, at ullamcorper ipsum tincidunt ut. Proin porta sodales nisl, non tincidunt arcu elementum at. Maecenas pulvinar, turpis at malesuada imperdiet, dui ligula convallis elit, in posuere neque sapien at lacus. Mauris blandit accumsan diam vel molestie. Suspendisse est est, condimentum eget efficitur in, maximus vel lacus. Phasellus sit amet porta tellus. Duis maximus mauris nunc, in ullamcorper odio sollicitudin eget.';

    p2.textContent = 'Etiam venenatis urna id mi vulputate convallis eu nec mi. Etiam congue massa vel lectus auctor, id vehicula metus efficitur. Etiam orci enim, imperdiet malesuada tincidunt sit amet, consectetur in nulla. Pellentesque egestas viverra erat, non placerat lacus sodales sit amet. Curabitur commodo feugiat lectus. Quisque gravida ultrices aliquam. Nam feugiat erat est, eu tristique neque condimentum eu. Aenean quam lacus, finibus id commodo vestibulum, venenatis quis nisi. Nunc eu magna imperdiet ipsum egestas porttitor vel et elit. Etiam et dictum justo.';

    p3.textContent = 'Nunc scelerisque risus metus, hendrerit sollicitudin sem fringilla quis. Maecenas a ipsum sit amet justo bibendum vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec quam tortor. Nulla eleifend ligula nec cursus congue. Sed sed faucibus dui, et elementum ex. Ut purus nibh, mollis id lacinia ut, finibus non sem. Cras fermentum, mauris vel facilisis placerat, ex lorem hendrerit neque, a tempor lacus mauris in libero. Mauris mauris.';




    


    // append dynamic content to content div
    about.appendChild(p1);
    about.appendChild(p2);
    about.appendChild(p3);
    contentDiv.appendChild(about);
};

export { aboutContent };