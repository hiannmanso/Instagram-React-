


export default function Posts(params) {
  

    return(
        <div class="posts">
            <Post name='meowed' src ='assets/img/meowed.svg' imgPost='assets/img/gato-telefone.svg' textName='hiann luiz' textLikes='outras 108.801 pessoas' />
            <Post name='barked' src="assets/img/barked.svg" imgPost="assets/img/dog.svg" textName ='adorable_animals' textLikes='outras 99.159 pessoas'/>
        </div>
    ) 
}

function Post({name,src,textName,textLikes,imgPost}) {
  return(
    <div class="post">
    <div class="topo">
      <div class="usuario">
        <img src={src} />
            {name}
        </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>

    <div class="conteudo">
      <img src={imgPost} />
    </div>

    <div class="fundo">
      <div class="acoes">
        <div>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div class="curtidas">
        <img src="assets/img/respondeai.svg" />
        <div class="texto">
           Curtido por <strong>{textName}</strong> e <strong>{textLikes}</strong>
        </div>
      </div>
    </div>
  </div>
  )
  
}