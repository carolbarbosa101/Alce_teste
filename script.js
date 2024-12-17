const openPopupButton = document.getElementById('openPopup');
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('fecharPopup');
const refreshImageButton = document.getElementById('atualizarImagem');
const imageAleatoria = document.getElementById('imageAleatoria');


const accessKey = '0vkqtiqc5D6JlzSPV2NBumXcCiaMOyqNufz_s6ypM_k';


// funcao pra api
const loadRandomImage = async () => {
    try {
      const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}`);
      if (!response.ok) {
        throw new Error(`Erro ao carregar imagem: ${response.statusText}`);
      }

      const data = await response.json();


      console.log(data);


      if (data && data.length > 0 && data[0].urls) {
        imageAleatoria.src = data[0].urls.regular; 
        imageAleatoria.alt = "Imagem aleatória do Unsplash";

      }
      
      else {
        imageAleatoria.src = "./img/gat.jpg";
        imageAleatoria.alt = "Imagem padrão";
      }

    } catch (error) {
      imageAleatoria.src = "./img/gat.jpg";
      imageAleatoria.alt = "Erro ao carregar imagem.";
    }
  };

openPopupButton.addEventListener('click', () => {
  popup.style.display = 'flex';
  loadRandomImage();
});
  
closePopupButton.addEventListener('click', () => {
  popup.style.display = 'none';
});

loadRandomImage();