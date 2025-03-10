function agregarNavegador() {
    const navegadorSuperior = `
<nav>
<a href="index.html">Index</a>
<a href="page1/page1index.html">Page 1</a>
<a href="page1/page2index.html">Page 2</a>
<a href="page1/page3index.html">Page 3</a>
<a href="page1/page4index.html">Page 4</a>
<a href="contact.html">Contact</a>
</nav>
    `;
 
    const navegadorInferior = `
<footer>
<nav>
<a href="index.html">Index</a>
<a href="page1/page1index.html">Page 1</a>
<a href="page1/page2index.html">Page 2</a>
<a href="page1/page3index.html">Page 3</a>
<a href="page1/page4index.html">Page 4</a>
<a href="contact.html">Contact</a>
</nav>
</footer>
    `;
 
    // Insertar el navegador en la parte superior
    document.body.insertAdjacentHTML('afterbegin', navegadorSuperior);
 
    // Insertar el navegador en la parte inferior
    document.body.insertAdjacentHTML('beforeend', navegadorInferior);
}