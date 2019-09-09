import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import informationImage from "../../static/images/Information-document.svg";
import eventImage from "../../static/images/Event-managment.svg";
import ProductivityImage from "../../static/images/Increase-Productivity.svg";
import happinessImage from "../../static/images/Make-happiness.svg";

const AboutPage = () => (
    <Layout>
        <SEO title="About"/>

        <div className={"container"}>
            <div className={"content"}>
                <div className={"title"}>
                    <h1>¿Qué es <b>Talentuum</b>?</h1>
                </div>

                <p><h3>Talentuum es varias cosas a la vez.</h3></p>
                    
                <p>Somos <span class="purple">agentes de talentos digitales</span> con ganas de desarrollarse profesionalmente y <span class="purple">reclutadores</span> para empresas que necesitan talento para hacer realidad sus productos y su visión. </p>

                <div className={"to_right"}>
                    <img className={"head-image"} src="https://image.flaticon.com/icons/svg/476/476863.svg" />
                </div>

                <p>También somos parte de <a href="https://www.continuum.cl"><img className={"img-in-title"} src="https://continuum.cl/assets/images/logoContinuum-f77adefb.svg" /></a>, donde por años hemos entendido que el talento de las personas hace toda la diferencia.</p>

            </div>
        </div>

    </Layout>
)

export default AboutPage
