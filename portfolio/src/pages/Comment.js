"use client";
import dynamic from 'next/dynamic';

// Charger dynamiquement le composant Comment pour éviter les problèmes de rendu côté serveur
const Comment = dynamic(() => import('../components/Comment/comment'), { ssr: false });

const CommentPage = () => {
  return <Comment />;
};

export default CommentPage;
