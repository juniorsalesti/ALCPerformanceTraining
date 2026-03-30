import React, { useState } from 'react';
import { BLOG_POSTS, WHATSAPP_LINK } from '../constants';
import { Clock, Tag, X, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const openPost = (post: BlogPost) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closePost = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'auto'; // Restore background scrolling
  };

  return (
    <section id="blog" className="bg-dark py-24 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-6 uppercase">Blog Fitness & Performance</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Conteúdo técnico simplificado para te ajudar a entender o processo de ganho de massa, emagrecimento e saúde.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="bg-card rounded-2xl overflow-hidden border border-zinc-900 hover:border-primary transition-all group flex flex-col h-full cursor-pointer" onClick={() => openPost(post)}>
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/70 backdrop-blur text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Dica de Treino
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-6 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                   <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0,3).map(tag => (
                      <span key={tag} className="text-xs text-zinc-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button 
                    className="flex items-center text-primary font-bold uppercase text-sm tracking-wider hover:text-white transition-colors"
                  >
                    Ler Artigo <ArrowRight size={16} className="ml-2"/>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Blog Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={closePost}></div>
          <div className="relative bg-card w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border border-zinc-800 flex flex-col animate-fade-in">
            
            <button 
              onClick={closePost}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-primary hover:text-black transition-colors"
            >
              <X size={24} />
            </button>

            <div className="relative h-64 sm:h-80 flex-shrink-0">
               <img src={selectedPost.imageUrl} alt={selectedPost.title} className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
            </div>

            <div className="p-8 sm:p-10">
              <div className="flex items-center gap-4 text-sm text-zinc-400 mb-6">
                <span className="flex items-center"><Clock size={16} className="mr-1"/> 5 min de leitura</span>
                <span className="flex items-center uppercase text-primary font-bold"><Tag size={16} className="mr-1"/> Dica do Coach</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                {selectedPost.title}
              </h2>

              <div className="prose prose-invert prose-lg max-w-none text-zinc-300">
                 <p className="lead text-xl text-white font-medium mb-6 italic border-l-4 border-primary pl-4">
                   {selectedPost.excerpt}
                 </p>
                 <div className="whitespace-pre-wrap">
                   {selectedPost.content}
                 </div>
                 
                 <div className="mt-8 pt-8 border-t border-zinc-800">
                   <h4 className="font-bold text-white mb-4">Gostou da dica?</h4>
                   <p className="text-zinc-400 mb-6">
                     Na minha consultoria, você tem acesso a centenas de conteúdos como este e um plano montado especificamente para você.
                   </p>
                   <a 
                     href={WHATSAPP_LINK} 
                     target="_blank" 
                     rel="noreferrer"
                     className="inline-block bg-primary text-black font-black text-lg py-3 px-8 rounded-full hover:bg-white transition-colors"
                   >
                     Quero um Treino Personalizado
                   </a>
                 </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};