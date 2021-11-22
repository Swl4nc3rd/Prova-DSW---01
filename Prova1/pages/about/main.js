export default () => {
  const container = document.createElement("div");
  container.classList.add("container");
  
  container.innerHTML = `
    <section class="page-section">
  
    
      <div class="box">

        <div class="section-text">
        <h2>String Para BASE 64</h2>
      
        </div> 
      </div> 
    </section>  
  `

  return container; 
}