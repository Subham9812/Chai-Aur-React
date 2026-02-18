function customRender(reactElement, Container) {
    /*// this is not good approach to implement this task
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.Children;
    domElement.setAttribute('herf', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    Container.appendChild(domElement);
    */
    

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.Children;
    for(const prop in reactElement.props) {
        if(prop === 'childern') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    Container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer);