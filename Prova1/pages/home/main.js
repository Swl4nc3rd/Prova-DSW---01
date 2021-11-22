
export default () => {
  const container = document.createElement("div");
  container.classList.add("container");
  
  container.innerHTML = `
    <section class="page-section">
      <figure class="box">
        <img class="home-img shadow" src="/assets/img1.jpg">
      </figure>
      <div class="box">
        <div class="section-text">
          
          <p>Conversor de Strings para base64<p>
          
         
        </div>
      </div> 
    </section>  
  `

  return container;
}