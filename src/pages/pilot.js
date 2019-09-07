import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { openLogin }  from "../services/auth"

const PilotPage = () => (
    <Layout>
        <SEO title="Piloto Talentuum Agent"/>
        <div className={"container"}>
            <div className={"content"}>
                <div className={"title"}>
                    <h1>Piloto Talentuum Agent</h1>
                </div>

                <p><strong>¡Bienvenido! Si estás leyendo esto es porque manifestaste interés en nuestro piloto</strong></p>

                <p>¿Como seguimos? Debes <a href='#' onClick={openLogin}>inscribirte</a> y contestar unas 4-5 preguntas que te haremos ahí via chat.</p>

                <p>Con eso tendremos tu información básica para que un Agente de Talentuum (entre los que estamos personas que quizás conozcas de Continuum como <a href="https://twitter.com/lilianareyes">@lilianareyes</a>, <a href="https://twitter.com/leosoto">@leosoto</a> o <a href="https://twitter.com/ricardojara">@ricardojara</a>) te atienda personalmente en ese mismo chat (las primeras 4 preguntas son automatizadas)</p>

                <p>Finalmente ese agente en base a tus respuestas originales y a ese primer chat personal evaluará si quedas priorizado en nuestro primer grupo o en el segundo de cara a ayudarte a encontrar ese trabajo ideal (ayudaremos a todos quienes se inscriban en el piloto)</p>

                <p><strong>El piloto tendrá un tope de 35 personas, por lo que mientras antes te inscribas mejor</strong>. Pero ponle cariño a las respuestas para aumentar tus chances de estar en el primer grupo.</p>

                <p>Sabemos que la confianza requiere transparencia, confidencialidad y responsabilidad. En <a href="https://paper.dropbox.com/doc/Talentuum-Agent-Piloto--AkVa_s9LXHaRy5UiWz3yTdDFAQ-TWBd6lWiE3hspm05f7eb3">este link puedes leer el plan a full</a>. Y cualquier duda la puedes plantear en el mismo chat con nostros. </p>

                <p>
                    <strong><a href='#' onClick={openLogin}>Registrate aquí</a></strong> y luego continúa en nuestro chat con Talentbot (aparecerá a la derecha si estás en un computador).
                </p>
            </div>
        </div>
    </Layout>
)

export default PilotPage
