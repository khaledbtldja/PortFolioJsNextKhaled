"use client";

import Cookies from 'js-cookie';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import "./comment.scss";

const Navbar = dynamic(() => import('../Navbar/Navbar'), { ssr: false });

function Comment() {
  const router = useRouter();
  const [commentaires, setCommentaires] = useState([]);
  const [nouveauCommentaire, setNouveauCommentaire] = useState("");
  const [indexEnEdition, setIndexEnEdition] = useState(null);
  const [pageActuelle, setPageActuelle] = useState(1);
  const [error, setError] = useState("");
  const [nomUtilisateur, setNomUtilisateur] = useState("");
  const commentairesParPage = 3;

  useEffect(() => {
    const isLoggedIn = Cookies.get('isLoggedIn');
    const username = Cookies.get('username'); // Récupérer le nom d'utilisateur à partir des cookies

    if (!isLoggedIn || !username) {
      router.replace('/login');
    } else {
      const commentairesEnregistres = JSON.parse(localStorage.getItem("commentaires")) || [];
      setCommentaires(commentairesEnregistres);
      setNomUtilisateur(username); // Stocker le nom d'utilisateur dans l'état
    }

    return () => {
      Cookies.remove('isLoggedIn');
      Cookies.remove('username');
    };
  }, [router]);

  const deconnecter = () => {
    Cookies.remove('isLoggedIn');
    Cookies.remove('username'); // Supprimer le nom d'utilisateur des cookies
    router.replace('/login');
  };

  const changerContenu = (event, index) => {
    setCommentaires(prevCommentaires => {
      const commentairesMisAJour = [...prevCommentaires];
      commentairesMisAJour[index].contenu = event.target.value;
      return commentairesMisAJour;
    });
  };

  const supprimerCommentaire = index => {
    setCommentaires(prevCommentaires => {
      const commentairesMisAJour = prevCommentaires.filter((_, i) => i !== index);
      localStorage.setItem("commentaires", JSON.stringify(commentairesMisAJour));
      return commentairesMisAJour;
    });
  };

  const ajouterCommentaire = () => {
    if (nouveauCommentaire.trim() === "") {
      setError("Tous les champs sont obligatoires.");
      return;
    }

    setCommentaires(prevCommentaires => {
      const commentairesMisAJour = [...prevCommentaires, { auteur: nomUtilisateur, contenu: nouveauCommentaire }];
      localStorage.setItem("commentaires", JSON.stringify(commentairesMisAJour));
      return commentairesMisAJour;
    });

    setNouveauCommentaire("");
    setError("");
  };

  const sauvegarderCommentaire = index => {
    if (commentaires[index].contenu.trim() === "") {
      setError("Le commentaire ne peut pas être vide.");
      return;
    }

    setIndexEnEdition(null);
    localStorage.setItem("commentaires", JSON.stringify(commentaires));
    setError("");
  };

  const indexDebut = (pageActuelle - 1) * commentairesParPage;
  const commentairesAffiches = commentaires.slice(indexDebut, indexDebut + commentairesParPage);
  const totalPages = Math.ceil(commentaires.length / commentairesParPage);

  return (
    <div className="comment-page">
      <Navbar />

      <div className="container">
        <div className="header">
          <h1>Bienvenue sur notre page de commentaires</h1>
          <p>N'hésitez pas à laisser un commentaire ci-dessous :</p>
          <button onClick={deconnecter} className="logout-button">Déconnexion</button>
        </div>

        <div className="content">
          <div className="comment-list">
            {commentairesAffiches.length === 0 ? (
              <p className="empty">Aucun commentaire disponible. Soyez le premier à en laisser un !</p>
            ) : (
              commentairesAffiches.map((commentaire, index) => (
                <div className="commentaire" key={index}>
                  <h2>{commentaire.auteur}</h2>
                  {indexEnEdition === index ? (
                    <>
                      <textarea
                        value={commentaire.contenu}
                        onChange={(event) => changerContenu(event, index)}
                        className="editable-textarea"
                      />
                      <div className="buttons">
                        <button onClick={() => sauvegarderCommentaire(index)}>Sauvegarder</button>
                      </div>
                    </>
                  ) : (
                    <>
                      <p>{commentaire.contenu}</p>
                      <div className="buttons">
                        <button onClick={() => setIndexEnEdition(index)}>Modifier</button>
                        <button onClick={() => supprimerCommentaire(index)}>Supprimer</button>
                      </div>
                    </>
                  )}
                </div>
              ))
            )}
          </div>

          {error && <p className="error">{error}</p>}

          <div className="pagination">
            <button onClick={() => setPageActuelle(prev => Math.max(prev - 1, 1))} disabled={pageActuelle === 1}>
              Précédent
            </button>
            <span>Page {pageActuelle} sur {totalPages}</span>
            <button onClick={() => setPageActuelle(prev => Math.min(prev + 1, totalPages))} disabled={pageActuelle === totalPages}>
              Suivant
            </button>
          </div>

          <div className="nouveau-commentaire">
            <textarea
              placeholder="Ajouter un commentaire..."
              value={nouveauCommentaire}
              onChange={(e) => setNouveauCommentaire(e.target.value)}
            />
            <button onClick={ajouterCommentaire}>Ajouter un commentaire</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
