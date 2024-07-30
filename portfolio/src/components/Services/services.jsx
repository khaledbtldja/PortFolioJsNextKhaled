import "./services.scss";
import { color, motion } from "framer-motion";
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('../Navbar/Navbar'), { ssr: false });




const Services = () => {
  return (
    <div>
        <Navbar/>
    <div className="services"  initial="initial" whileInView="animate">
      <div className="textContiner" >
        <p> BOUTELDJA
            <br />KHALED
            </p>
        <hr />
      </div>
      <div className="titleContiner" >
        <div className="title">
            <img src="/people.png" alt="" />
            <h1>
                <b whileHover={{color:"orange"}}>Unique</b> Ideas
            </h1>
        </div>
        <div className="title">
            <h1>
                <b whileHover={{color:"orange"}}>For Your</b> Busness
            </h1>
            <button>WHAT WE DO</button>
        </div>
      </div>
      <div className="listeContiner" >
        <div className="box" whileHover={{ background: "lightgray" ,  color: "black"}}>
            <h2>php</h2>
            <img src="/PHP.png" alt="" />
            <p>PHP est un langage de script serveur principalement utilisé pour créer des pages web dynamiques et interactives.</p>
        </div>

        <div className="box" whileHover={{ background: "lightgray" ,  color: "black"}}>
            <h2>jAVASCRIPT</h2>
            <img src="/JS.png" alt="" />
            <p>JavaScript est un langage de programmation utilisé pour rendre les pages web interactives et dynamiques côté client.</p>
        </div>

        <div className="box" whileHover={{ background: "lightgray" ,  color: "black"}}>
            <h2>C#</h2>
            <img src="/csharp.png" alt="" />
            <p>C# est un langage de programmation orienté objet développé par Microsoft.</p>
        </div>

        <div className="box"whileHover={{ background: "lightgray" ,  color: "black"}}>
            <h2>HTML</h2>
            <img src="/html.png" alt="" />
            <p>HTML est le langage standard de balisage utilisé pour créer et structurer les pages web sur internet.</p>
        </div>

        <div className="box" whileHover={{ background: "lightgray" ,  color: "black"}}>
            <h2>CSS</h2>
            <img src="/css-3.png" alt="" />
            <p>CSS est un langage de feuille de style utilisé pour décrire la présentation et la mise en forme des documents HTML.</p>
        </div>
        <div className="box" whileHover={{ background: "lightgray" ,  color: "black"}}>
            <h2>JAVA</h2>
            <img src="/java.png" alt="" />
            <p>Java est un langage de programmation orienté objet, polyvalent et indépendant de la plateforme, utilisé pour développer des applications robustes.</p>
        </div>
      </div>


    </div>
    </div>
  );
}

export default Services;
