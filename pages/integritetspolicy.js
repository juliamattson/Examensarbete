
import Layout from "../Components/Layout";
import { Helmet } from 'react-helmet';

const Policy = (props) => {
    const { policy } = props;
    return (
        <Layout>
            <div className="policyPage">
                <Helmet>
                    <title>Köpvillkor - Hjärtan av guld UF</title>
                </Helmet>
                <div className="policy-header">
                    <h1>Köpvillkor</h1>
                </div>
                <div className="policy-content">
                    <div className="policy-text">
                        <h3>Ångerrätt & Retur</h3>
                        <h5>Ångerrätt</h5>
                        <p>Du har 14 dagars ångerrätt från den dagen varan levereras till dig i enlighet med konsumentsskyddlagstiftning.
                        Detta gör du genom att meddela oss via e-post: info@hjartanavguld.se inom 14 dagar från det du tagit emot varan. Varan ska returneras inom 14 dagar från det datumet du meddelade oss att du ville utnyttja ångerrätten.</p>

                        <p>Varan/varorna ska vara i originalskick och i originalförpackning.</p>
                        <p>Du som köpare betalar returfrakten.</p>
                        <p>När du ångrar ditt köp betalar Hjärtan Av Guld tillbaka beloppet du har betalt för varan via Swish, så fort returen är oss tillhanda.</p>

                        <h5>Garanti & Reklamation</h5>
                        <p>Garantin omfattar defekter som uppkommit vid tillverkning, alltså fabrikationsfel.</p>
                        <p>Reklamationsrätten gäller varor som är defekta enligt konsumentlagstiftningen. Du har 3 års reklamationsrätt.</p>
                        <p>Vid godkända reklamationer står Hjärtan Av Guld UF för returfrakten.</p>
                        <p>Vi kompenserar dig i enlighet med konsumentlagstiftningen.
                        Hjärtan Av Guld UF förbehåller sig rätten att neka en reklamation om det visar sig att varan inte är defekt enligt konsumentskyddslagstiftningen.
                        Vi följer riktlinjer från allmänna reklamationsnämnden (ARN).</p>


                        <h3>Integritetspolicy</h3>
                        <p>Behandling av personuppgifter på Hjärtan Av Guld UF
                        (Uppdaterad: 2021-02-01).</p>

                        <p>För Hjärtan Av Guld UF är personlig integritet viktigt. Vi eftersträvar en hög nivå av dataskydd. I denna policy förklarar vi hur vi samlar in och använder personuppgifter. Vi beskriver också dina rättigheter och hur du kan göra dem gällande.
                        Du är alltid välkommen att kontakta oss om du har frågor om hur vi behandlar dina personuppgifter. Kontaktuppgifter står sist i denna text.</p>
                        <h5>Vad är en personuppgift och vad är en behandling av personuppgifter?</h5>
                        <p>Personuppgifter är alla uppgifter om en levande fysisk person som direkt eller indirekt kan kopplas till den personen. Det handlar inte bara om namn och personnummer utan även om till exempel bilder och e-postadresser.
                        Behandling av personuppgifter är allt som sker med personuppgifterna i IT-systemen, oavsett om det handlar om mobila enheter eller datorer. Det handlar om till exempel insamling, registrering, strukturering, lagring, bearbetning och överföring. I vissa fall kan även manuella register omfattas.</p>
                        <h5>Personuppgiftsansvarig</h5>
                        <p>För de behandlingar som sker inom Hjärtan Av Guld UF:s verksamhet är Hjärtan Av Guld UF personuppgiftsansvarig. (Västra Söbacken 29, 444 41 Stenungsund).</p>
                        <h5>Vilka personuppgifter samlar vi in om dig och varför?</h5>
                        <p>Vi behandlar i huvudsak ditt namn, adress och kontaktuppgifter, betalningsinformation och betalningshistorik. Information om din beställning (t ex ordernr., produkt och leveransadress).</p>
                        <p>Vi behandlar dina personuppgifter för att kunna administrera och tillhandahålla avtalad tjänst/vara. När det gäller personuppgiftsbehandling för att fullgöra krav som exempelvis bokföringslagen eller skattelagstiftningen är den rättsliga grunden för behandling rättslig förpliktelse.</p>

                        <h5>Vilka kan vi komma att dela dina personuppgifter med?</h5>

                        <p> 1) Transporter (logistikföretag och speditörer). <br></br>
                        2) Betallösningar (kortinlösande företag, banker och andra betaltjänstleverantörer). <br></br>
                        3) IT-tjänster (företag som hanterar nödvändig drift, teknisk support och underhåll av våra IT-lösningar).<br></br>
                        Dessa företag som är självständigt personuppgiftsansvariga. Vi ansvarar inte hur de behandlar dina personuppgifter utan det är deras personuppgiftshantering och integritetspolicy som gäller. Självständiga personuppgiftsansvariga som vi delar dina personuppgifter med är statliga myndigheter (polis, skatteverket m.m.), företag som ombesörjer allmänna varutransporter och företag som erbjuder betallösningar.
                        </p>
                        <h5>Hur länge sparar vi dina personuppgifter?</h5>
                        <p> Vi sparar aldrig dina personuppgifter längre än vad som är nödvändigt för respektive ändamål. Vissa uppgifter i bokföringen behöver på grund av lagstiftning till exempel sparas minst sju år.</p>

                        <h5>Vad är dina rättigheter som registrerad?</h5>
                        <p>Som registrerad har du enligt gällande lagstiftning ett antal rättigheter. Du har rätt till att få ett utdrag som visar vilka personuppgifter vi har registrerade om dig. Du kan begära rättelse av felaktiga uppgifter och i vissa fall radering.
                        Om du har frågor om hur vi behandlar personuppgifter kontakta oss på info@hjartanavguld.se.
                        Vi kan komma att göra ändringar i vår integritetspolicy. Den senaste versionen av integritetspolicyn finns alltid här på webbplatsen.</p>

                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default Policy;