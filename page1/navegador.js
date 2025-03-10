function agregarNavegador() {
    const navegadorSuperior = `
<nav>
<a href="index.html">Index</a>
<a href="page1/page1.html">Page 1</a>
<a href="page1/page2.html">Page 2</a>
<a href="page1/page3.html">Page 3</a>
<a href="page1/page4.html">Page 4</a>
<a href="page1/page5.html">Page 5</a>
</nav>
    `;
 
    const navegadorInferior = `
<footer>
<nav>
<a href="index.html">Index</a>
<a href="page1/page1.html">Page 1</a>
<a href="page1/page2.html">Page 2</a>
<a href="page1/page3.html">Page 3</a>
<a href="page1/page4.html">Page 4</a>
<a href="page1/page5.html">Page 5</a>
</nav>
</footer>
    `;
 
    // Insertar el navegador en la parte superior
    document.body.insertAdjacentHTML('afterbegin', navegadorSuperior);
 
    // Insertar el navegador en la parte inferior
    document.body.insertAdjacentHTML('beforeend', navegadorInferior);
}