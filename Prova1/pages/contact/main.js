export default () => {
  const container = document.createElement("div");
  container.classList.add("container");

  container.innerHTML = `
    <section class="page-section">
      <figure class="box">
      
        <img class="contact-img shadow" src="/assets/img2.jpg">
      </figure>
      <div class="box">
        <div class="section-text">
       
          <h2>Base 64</h2>
          <p>É um método para codificação de dados para transferência na Internet. É utilizado frequentemente para transmitir dados binários por meios de transmissão que 
          lidam apenas com texto, como por exemplo para enviar arquivos anexos por e-mail. É constituído por 64 caracteres que deram origem ao seu nome!<p>
        </div>
      </div> 
    </section>  
  `

  return container;

}