import React, { useState } from 'react';
import { generateWorkoutTip } from '../services/geminiService';
import { Sparkles, ArrowRight, Loader2 } from 'lucide-react';

export const AIWorkout: React.FC = () => {
  const [goal, setGoal] = useState('');
  const [tip, setTip] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!goal.trim()) return;
    setLoading(true);
    const result = await generateWorkoutTip(goal);
    setTip(result);
    setLoading(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-zinc-900 to-zinc-950 border-y border-zinc-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center bg-zinc-800/50 rounded-full px-4 py-1.5 mb-6 border border-zinc-700">
          <Sparkles size={16} className="text-primary mr-2" />
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">Powered by Gemini AI</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Dica Rápida de Treino Inteligente
        </h2>
        <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
          Não sabe por onde começar hoje? Me diga seu objetivo (ex: "definir abdômen", "ganhar força nas pernas") e receba uma dica exclusiva agora.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
          <input 
            type="text" 
            placeholder="Qual seu foco hoje? (ex: Hipertrofia)" 
            className="flex-1 bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
          />
          <button 
            onClick={handleGenerate}
            disabled={loading || !goal}
            className="bg-white text-black font-bold px-6 py-3 rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? <Loader2 className="animate-spin" /> : <ArrowRight />}
          </button>
        </div>

        {tip && (
          <div className="bg-zinc-800/50 border border-zinc-700 p-6 rounded-xl animate-fade-in mx-auto max-w-2xl">
            <p className="text-lg font-medium text-primary italic">"{tip}"</p>
          </div>
        )}
      </div>
    </section>
  );
};
