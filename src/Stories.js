export default function Stories(props) {
  let listStories = [
    { img: 'assets/img/9gag.svg', user: '9gag' },
    { img: 'assets/img/meowed.svg', user: 'meoewed' },
    { img: 'assets/img/barked.svg', user: 'barked' },
    { img: 'assets/img/nathanwpylestrangeplanet.svg', user: 'nathanwpylestrangeplanet' },
    { img: 'assets/img/wawawicomics.svg', user: 'wawawicomics' },
    { img: 'assets/img/respondeai.svg', user: 'respondeai' },
    { img: 'assets/img/filomoderna.svg', user: 'filomoderna' },
    { img: 'assets/img/memeriagourmet.svg', user: 'memeriagourmet' },

  ]
  return (
    <div class="stories"> 
          {listStories.map(item => {
            return (
              <div class="story">
                <div class="imagem">
                  <img src={item.img} alt='' />
                </div>
                <div class='usuario'>{item.user}</div>
              </div>
            )
          })}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>

  )
}
