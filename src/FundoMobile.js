let icons = ['home','search-outline','add-cclire-outline','heart-outline','person-outline']

export default function FundoMobile(params) {
    return(
        <div class="fundo-mobile">
            {icons.map(icon => {
                return(
                    <ion-icon name={icon}/>
                )
            })}
        </div>
   
    )
}