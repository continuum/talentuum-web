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

                <p><strong>¡Bienvenido! 👋 Si estás leyendo esto es porque manifestaste interés en nuestro piloto</strong></p>

                <p>¿Como seguimos? Debes <strong><a href='#' onClick={openLogin}>inscribirte</a></strong> y contestar unas 4-5 preguntas que te haremos ahí via chat.</p>

                <p>Teniendo esa info un Agente de Talentuum (entre quienes quizás conozcas personajes de <a href="https://www.continuum.cl">Continuum</a> como <a href="https://twitter.com/lilianareyes">@lilianareyes</a>, <a href="https://twitter.com/leosoto">@leosoto</a> o <a href="https://twitter.com/ricardojara">@ricardojara</a>) te contactará personalmente en ese mismo chat (las primeras 4 preguntas son automatizadas). Podrás contestar por chat (ingresando a <a href="https://www.talentuum.cl">talentuum.cl</a>) o también podrás ir contestando por correo si prefieres esa vía.</p>

                <p>Con la suma de tus respuestas originales y a ese primer chat personal, tu agente evaluará si quedas priorizado en nuestro primer grupo o en el segundo de cara a ayudarte a encontrar ese trabajo ideal (ayudaremos a todos quienes se inscriban en el piloto)</p>

                <p><strong>El piloto tendrá un tope de 35 personas, por lo que mientras antes te inscribas mejor</strong>. Pero ponle cariño a las respuestas para aumentar tus chances de estar en el primer grupo.</p>

                <p>Sabemos que la confianza requiere transparencia, confidencialidad y responsabilidad. En <a href="https://paper.dropbox.com/doc/Talentuum-Agent-Piloto--AkVa_s9LXHaRy5UiWz3yTdDFAQ-TWBd6lWiE3hspm05f7eb3">este link puedes leer el plan a full</a>. Y cualquier duda la puedes plantear en el mismo chat con nostros. </p>

                <p>
                    <strong><a href='#' onClick={openLogin}>Registrate aquí</a></strong> y luego continúa en nuestro chat con Talentbot<br/> <small>(Aparecerá a la derecha si estás en un computador. Estamos en fase prototipo que no siempre funciona bien en móvil, pero puedes identificarte de nuevo en tu computador y continuar el chat ahí sin perder nada de lo que ya enviaste)</small>.
                </p>
            </div>
        </div>
    </Layout>
)

export default PilotPage
