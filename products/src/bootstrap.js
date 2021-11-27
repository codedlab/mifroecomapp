import faker from "faker";

const mount = (el) => {
    let products = "";

    for (let i = 0; i < 7; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    console.log(products);

    el.innerHTML = products;
    // ReactDom.render(<App />, el);
};


//Context/situation #1
//We are running this file in development in isolation
//We are using our local index.html file
//Which definitely has an element with an id of 'dev-products
//we want to immediately render our app into that element
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products'); 
    if (el) {
      mount(el);
    }
};

//Context/situation #2
//We are running this file in development or production through the Container app.
//No guarantees that an element with an id of 'dev-products'.
//We do not want to try to immediately render our app
export { mount };