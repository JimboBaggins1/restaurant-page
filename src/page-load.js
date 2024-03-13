function buildPage() {
    // get content div
    const contentDiv = document.getElementById('content');

    // get grid container to attach footer to
    const gridContainer = document.querySelector('.grid-container');

    // header
    const headingContainer = document.createElement('div');
    headingContainer.classList.add('heading-container');
    const heading = document.createElement('h1');
    heading.textContent = 'Big Jim\'s Steakhouse & Grill';
    headingContainer.appendChild(heading);

    // main content
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');
    const para = document.createElement('p');
    para.textContent = 'The finest Steakhouse in all the land! Visit Big Jim\'s and you won\'t leave disappointed.';
    mainContent.appendChild(para);

    // footer
    const footer = document.createElement('footer');
    footer.setAttribute('id', 'footer');
    footer.textContent = 'Copyright blah blah blah';

    // append children to contentDiv
    contentDiv.appendChild(headingContainer);
    contentDiv.appendChild(mainContent);

    // append footer to grid container
    gridContainer.appendChild(footer);
}

export { buildPage };