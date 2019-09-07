import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { openLogin }  from "../services/auth"

import featureImage from "../../static/images/hero.png"
import thumbnailEvent from "../../static/images/feature-event.png"
import thumbnailBoard from "../../static/images/feature-board.png"
import thumbnailNews from "../../static/images/feature-news.png"
import thumbnailTeams from "../../static/images/feature-team.png"
import thumbnailStaff from "../../static/images/feature-user.png"

const IndexPage = () => (
    <Layout>
        <SEO title="Te ayudamos a encontrar tu trabajo ideal. Te ayudamos a encontrar el talento clave para tus equipos."/>
        <div className={"page-header home"}>
            <div className={"row"}>
                <div className={"col-6"}>
                    <h1>👩🏻‍💻👨🏻‍💻<br/>¿Eres un profesional talentoso <br/>que hace la diferencia?</h1>
                </div>
                <div className={"col-6"}>
                    <h1>🏢🏔<br/>¿Ofreces desafíos <br/> en que valen la pena trabajar?</h1>
                </div>
            </div>
            <p>Reunimos los mejores talentos con las mejores oportunidades</p>
            {/* <img alt={"Dashboard"} src={featureImage}/> */}
        </div>

        <div className={"container"}>
            <div className={"features"}>
                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                {/* <img alt={"Event"} src={thumbnailEvent}/> */}
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Reclutamos<br/>🏢🏔</h2>
                                <p>Ayudamos a tu empresa comunicar una propuesta de valor para atraer talentos que conecten con los desafíos de tu equipo o empresa (y luego validamos y entrevisamos para que uses tu tiempo con los mejores candidatos)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Buscamos tu trabajo ideal<br/>👩🏻‍💻👨🏻‍💻</h2>
                                <p>Nos preocupamos de entender de lo que eres capaz con tu talento. Pero más importante: Nos interesa saber qué te mueve, y conseguirte un lugar donde lo encuentres (aunque sea en empresas que no son clientes nuestros)</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                {/* <img alt={"Board"} src={thumbnailBoard}/> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                {/* <img alt={"News"} src={thumbnailNews}/> */}
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Validamos y Garantizamos<br/>🏢🏔</h2>
                                <p>En Continuum llevamos más de 10 años encontrando y seleccionando talento. Ponemos el mismo proceso y experiencia a tu disposición. Con garantía de 3 hasta 12 meses.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Guiamos tu crecimiento<br/>👩🏻‍💻👨🏻‍💻</h2>
                                <p>A veces no sabes si estás preparado para el siguiente paso en tu carrera. Te ayudamos a identificar esas brechas. O a veces el síndrome del impostor te hace pensar que no estás listo. Te damos ese empujoncito cuando corresponda.  </p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                {/* <img alt={"Team"} src={thumbnailTeams}/> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                {/* <img alt={"Users"} src={thumbnailStaff}/> */}
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Entendemos tus dolores<br/>🏢🏔</h2>
                                <p>Nunca sobra caja y nuevos miembros del equipo no son productivos inmediatamente, así que te cobramos en cuotas mensuales. Y si estás limitado por <i>head count</i>, te ofrecemos <i>outsourcing</i> por un tiempo (pero con miras a que contrates tú directo más temprano que tarde).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={"call-to-action"}>
            <div className={"container"}>
                <div className={"call-to-action__content"}>
                    <h2>¿Te interesa?</h2>
                    <p>Regístrate o Ingresa para descubrir nuestro servicio.</p>
                </div>

                <div className={"button"}>
                    <a href='#' onClick={openLogin}>Me Interesa</a>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
