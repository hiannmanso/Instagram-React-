export default function SideBar({ user, name, links, copyright }) {
    let infosSideBar = ['bad.vibes.memes', 'chibirdart', 'razoesparaacreditar', 'adorable_animals', 'smallcutecats']
    return (
        <div class="sidebar">
            <div class="usuario">
                <img src="assets/img/catanacomics.svg" />
                <div class="texto">
                    <strong>{user}</strong>
                    {name}
                </div>
            </div>
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {infosSideBar.map(item => {
                    return (
                        <div class="sugestao">
                            <div class="usuario">
                                <img src={`assets/img/${item}.svg`} />
                                <div class="texto">
                                    <div class="nome">{item}</div>
                                    <div class="razao">Segue você</div>
                                </div>
                            </div>

                            <div class="seguir">Seguir</div>
                        </div>
                    )
                })}
            </div>

            <div class="links">
                {links}
            </div>

            <div class="copyright">
                {copyright}
            </div>
        </div>
    )
}