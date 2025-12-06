import React, { useState } from 'react';
import { BookOpen, Feather, Users, Flame, Shield, FileText, Heart, Star, X, Info } from 'lucide-react';

const RizalFlowchart = () => {
  const [hoveredStage, setHoveredStage] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);

  const stages = [
    {
      id: 'A',
      title: 'CHILDHOOD AND EARLY INFLUENCES',
      period: '1861-1872',
      icon: BookOpen,
      color: 'from-emerald-500 to-teal-600',
      borderColor: 'border-emerald-600',
      bgColor: 'bg-emerald-50',
      summary: 'Foundation of Rizal\'s nationalist consciousness through family influence, educational experiences, and witnessing colonial injustices.',
      details: {
        writings: 'Early childhood observations; no formal writings from this period, but experiences documented in later memoirs and biographies.',
        characters: 'Teodora Alonso (mother and first teacher), Paciano Rizal (revolutionary brother), Father Francisco Paula de Sanchez (Jesuit mentor), GOMBURZA martyrs',
        ideas: 'Early awareness of social inequality, colonial oppression, importance of education, and justice. Seeds of reform thinking.',
        emotions: 'Indignation at mother\'s unjust imprisonment, grief over GOMBURZA execution, pride in Filipino identity, determination for justice.',
        symbolism: 'Mother\'s persecution symbolizes colonial injustice; GOMBURZA execution represents state violence against reform; Ateneo represents enlightenment.',
        relevance: 'Establishes the foundational experiences that shaped Rizal\'s lifelong commitment to peaceful reform and education as liberation.',
        impact: 'Transformed childhood experiences of oppression into a driving force for advocating systemic change through intellectual means.'
      }
    },
    {
      id: 'B',
      title: 'SA AKING MGA KABABATA',
      period: 'Circa 1869',
      icon: Feather,
      color: 'from-amber-500 to-orange-600',
      borderColor: 'border-amber-600',
      bgColor: 'bg-amber-50',
      summary: 'First articulation of linguistic nationalism - declaring love of one\'s native language as essential to human dignity.',
      details: {
        writings: '"Sa Aking Mga Kababata" (To My Fellow Children) - poem celebrating the Filipino language and cultural identity.',
        characters: 'Implied Filipino youth and the general Filipino people as the audience; no specific characters, but speaks to a collective identity.',
        ideas: 'Language as foundation of national identity; cultural pride; equality of all languages; Filipino self-worth.',
        emotions: 'Pride in native language, defiance against cultural suppression, joy in Filipino identity, passionate defense of dignity.',
        symbolism: 'Language represents freedom and identity; comparing those who reject their language to "beasts" symbolizes dehumanization.',
        relevance: 'First literary declaration of Filipino cultural nationalism, establishing language as a pillar of national consciousness.',
        impact: 'Planted the seed of cultural nationalism in young Rizal, establishing that Filipino identity must be actively defended and celebrated.'
      }
    },
    {
      id: 'C',
      title: 'A LA JUVENTUD FILIPINA',
      period: '1879',
      icon: Users,
      color: 'from-blue-500 to-indigo-600',
      borderColor: 'border-blue-600',
      bgColor: 'bg-blue-50',
      summary: 'A clarion call to Filipino youth to pursue education and intellectual excellence as the path to national redemption.',
      details: {
        writings: '"A La Juventud Filipina" (To the Filipino Youth) - prize-winning poem written at University of Santo Tomas.',
        characters: 'Filipino youth collectively; the future generation as agents of change; implied mentors and educators.',
        ideas: 'Education as liberation, intellectual development as national progress, youth as hope, cultivation of arts and sciences.',
        emotions: 'Hope for the future, inspiration and motivation, confidence in youth potential, urgency for enlightenment.',
        symbolism: 'Youth as "fair hope of my Fatherland"; dawn represents enlightenment; genius represents Filipino potential.',
        relevance: 'Shifts nationalism from cultural identity to intellectual empowerment, positioning education as the primary tool for liberation.',
        impact: 'Crystallized Rizal\'s belief that enlightened minds would transform society, shaping his lifelong advocacy for educational reform.'
      }
    },
    {
      id: 'D',
      title: 'THE ELIAS NARRATIVE',
      period: 'Noli Me Tangere, 1887',
      icon: Flame,
      color: 'from-red-500 to-rose-600',
      borderColor: 'border-red-600',
      bgColor: 'bg-red-50',
      summary: 'Introduction of revolutionary consciousness through Elias, representing armed resistance as a legitimate but tragic path.',
      details: {
        writings: '"Noli Me Tangere" (Touch Me Not) - social novel exposing colonial abuses and presenting contrasting approaches to reform.',
        characters: 'Elias (revolutionary idealist), Ibarra (reformist protagonist), Sisa (symbol of oppressed masses), Padre Dámaso (corrupt friar).',
        ideas: 'Revolution vs. reform debate, social justice, colonial oppression, class consciousness, moral corruption of colonial system.',
        emotions: 'Righteous anger, tragic resignation, revolutionary fervor, compassion for the oppressed, moral outrage.',
        symbolism: 'Elias\'s death in the forest represents the premature nature of armed revolution; his sacrifice symbolizes noble but futile resistance.',
        relevance: 'First major work acknowledging that violent revolution may be necessary, while still advocating for peaceful reform through Ibarra.',
        impact: 'Forced Rizal to confront the revolutionary alternative, deepening his understanding of the complexity of colonial resistance.'
      }
    },
    {
      id: 'E',
      title: 'CONCLUSION OF EL FILIBUSTERISMO',
      period: '1891',
      icon: Heart,
      color: 'from-purple-500 to-violet-600',
      borderColor: 'border-purple-600',
      bgColor: 'bg-purple-50',
      summary: 'Father Florentino\'s discourse articulates the moral and practical conditions necessary for successful revolution.',
      details: {
        writings: '"El Filibusterismo" (The Reign of Greed) - darker sequel exploring failed revolutionary conspiracy and moral philosophy.',
        characters: 'Simoun (failed revolutionary/Ibarra transformed), Father Florentino (voice of wisdom), Isagani (idealistic student).',
        ideas: 'Conditions for just revolution, moral purity of cause, suffering as catalyst, enlightened populace as prerequisite for change.',
        emotions: 'Disillusionment, philosophical resignation, deeper understanding of suffering, moral clarity, tragic wisdom.',
        symbolism: 'Simoun\'s death represents consequences of premature/corrupt revolution; jewels thrown to sea symbolize wasted violent efforts.',
        relevance: 'Presents a more nuanced philosophy: revolution is justified only under specific moral conditions and with popular support.',
        impact: 'Matured Rizal\'s political thought, balancing revolutionary sympathy with insistence on moral foundations and popular readiness.'
      }
    },
    {
      id: 'F',
      title: 'LETTER TO THE YOUNG WOMEN OF MALOLOS',
      period: '1889',
      icon: FileText,
      color: 'from-pink-500 to-rose-600',
      borderColor: 'border-pink-600',
      bgColor: 'bg-pink-50',
      summary: 'Expands nationalist framework to include women\'s liberation and education as essential to national progress.',
      details: {
        writings: '"Letter to the Young Women of Malolos" - essay honoring women who defied friars to pursue education.',
        characters: 'Twenty women of Malolos (pioneers of women\'s education), Filipino mothers and daughters, oppressive Spanish friars.',
        ideas: 'Women\'s education as national necessity, gender equality, maternal influence on future generations, resistance to clerical tyranny.',
        emotions: 'Admiration and respect, solidarity with women\'s struggle, defiance against patriarchal oppression, hope for social transformation.',
        symbolism: 'Women\'s night school symbolizes enlightenment against darkness; educated mothers represent the future of the nation.',
        relevance: 'Recognizes that national liberation requires liberating all sectors of society, particularly women who shape the next generation.',
        impact: 'Broadened Rizal\'s nationalism to encompass gender justice, understanding that true freedom must include women\'s empowerment.'
      }
    },
    {
      id: 'G',
      title: 'LA LIGA FILIPINA',
      period: '1892',
      icon: Shield,
      color: 'from-orange-500 to-amber-600',
      borderColor: 'border-orange-600',
      bgColor: 'bg-orange-50',
      summary: 'Concrete political action - organizing Filipinos into a civic society for mutual aid, protection, and peaceful reform.',
      details: {
        writings: 'Constitution and founding documents of La Liga Filipina; manifestos outlining organizational structure and goals.',
        characters: 'Rizal as founder, Filipino reformists and intellectuals, members seeking unity and mutual protection.',
        ideas: 'Collective action, civil society organization, non-violent reform, mutual aid, education and economic development, unity.',
        emotions: 'Hope for organized change, determination for peaceful progress, solidarity among Filipinos, urgency for action.',
        symbolism: 'Liga represents organized civil resistance; its quick dissolution symbolizes colonial fear of Filipino unity.',
        relevance: 'Marks transition from theoretical writings to practical political organizing, demonstrating commitment to peaceful reform.',
        impact: 'Though immediately suppressed, La Liga proved Rizal\'s commitment to action and inspired future revolutionary organizations like Katipunan.'
      }
    },
    {
      id: 'H',
      title: 'MI ÚLTIMO ADIÓS',
      period: '1896',
      icon: Star,
      color: 'from-gray-600 to-slate-800',
      borderColor: 'border-gray-900',
      bgColor: 'bg-gray-900',
      textColor: 'text-white',
      summary: 'Final testament before execution - consecrating his death as sacrifice for Philippine freedom and national redemption.',
      details: {
        writings: '"Mi Último Adiós" (My Last Farewell) - farewell poem hidden in alcohol lamp, discovered after execution.',
        characters: 'Rizal himself as martyr, the Philippines personified as beloved homeland, Filipino people as inheritors of sacrifice.',
        ideas: 'Martyrdom for nation, ultimate sacrifice, death as consecration, blood nourishing freedom, immortal patriotism.',
        emotions: 'Peaceful acceptance of death, profound love for country, hope despite tragedy, serenity in sacrifice, eternal devotion.',
        symbolism: 'Blood nourishing soil represents life giving life to freedom; dawn represents coming liberation; poem in lamp represents hidden truth.',
        relevance: 'Transforms Rizal from reformist writer to immortal martyr, providing the revolutionary movement with its most powerful symbol.',
        impact: 'Martyrdom completed Rizal\'s evolution - his death became the catalyst that ignited the revolution he intellectually prepared but never led.'
      }
    }
  ];

  const openDetailModal = (stage, detailKey, detailValue) => {
    setSelectedDetail({
      stageId: stage.id,
      stageTitle: stage.title,
      stagePeriod: stage.period,
      detailKey,
      detailValue,
      color: stage.color
    });
  };

  const closeDetailModal = () => {
    setSelectedDetail(null);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 md:p-8 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-block mb-6">
          <div className="w-40 h-40 md:w-56 md:h-56 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
            <img
              src="/resources/Rizal.jpg"
              alt="José Rizal"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          JOSÉ RIZAL
        </h1>

        <p className="text-xl md:text-2xl text-amber-400 font-semibold mb-2">
          Journey to Nationalism
        </p>

        <p className="text-base md:text-lg text-slate-400 mb-6 max-w-2xl mx-auto">
          Interactive roadmap of Rizal's transformation from child to national hero
        </p>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          <div className="bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-lg border border-white/20">
            <span className="text-slate-200 font-medium text-sm md:text-base">Interactive Roadmap</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-lg border border-white/20">
            <span className="text-slate-200 font-medium text-sm md:text-base">1861 - 1896</span>
          </div>
          <div className="bg-amber-500/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-lg border border-amber-500/30">
            <span className="text-amber-300 font-medium text-sm md:text-base">Hover to Expand</span>
          </div>
        </div>
      </div>
        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Central vertical line */}
          <div className="absolute left-6 md:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 via-blue-500 to-gray-500"></div>
          
          <div className="space-y-4 md:space-y-6">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              const isHovered = hoveredStage === stage.id;
              const isDark = stage.id === 'H';
              
              return (
                <div 
                  key={stage.id} 
                  className="relative pl-16 md:pl-24"
                  onMouseEnter={() => setHoveredStage(stage.id)}
                  onMouseLeave={() => setHoveredStage(null)}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-3 md:left-8 top-6 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center shadow-lg border-4 border-slate-900 transition-all duration-300 z-10 ${isHovered ? 'scale-125 shadow-amber-500/50' : 'scale-100'}`}>
                    <Icon className="text-white w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  
                  {/* Stage Card */}
                  <div className="transform transition-all duration-300">
                    <div className={`${isDark ? 'bg-slate-900 border-slate-700' : 'bg-slate-800/90 border-slate-700'} backdrop-blur-lg rounded-xl shadow-2xl border-2 overflow-hidden hover:shadow-amber-500/20 transition-all duration-300`}>
                      {/* Header - Always visible */}
                      <div className={`p-4 md:p-6 bg-gradient-to-r ${stage.color} bg-opacity-10`}>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 md:gap-3 mb-2">
                              <span className={`text-xl md:text-2xl font-bold text-amber-100`}>
                                {stage.id}
                              </span>
                              <h2 className="text-lg md:text-2xl font-bold text-white">
                                {stage.title}
                              </h2>
                            </div>
                            <p className="text-xs md:text-sm text-lime-100 font-medium mb-3">
                              {stage.period}
                            </p>
                            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                              {stage.summary}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Auto-expanding detailed content on hover */}
                      <div 
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${isHovered ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                        <div className={`p-4 md:p-6 ${isDark ? 'bg-slate-950/50' : 'bg-slate-900/50'} border-t-2 ${stage.borderColor}`}>
                          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
                            {/* Writings */}
                            <div 
                              onClick={(e) => {
                                e.stopPropagation();
                                openDetailModal(stage, 'Writings Involved', stage.details.writings);
                              }}
                              className={`${isDark ? 'bg-slate-800/70' : 'bg-slate-800/50'} backdrop-blur-sm rounded-lg p-4 md:p-5 border ${isDark ? 'border-slate-600' : 'border-slate-700'} cursor-pointer hover:scale-105 hover:border-amber-400 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 group`}
                            >
                              <h4 className="text-xs md:text-sm uppercase font-bold mb-2 text-amber-400 tracking-wide flex items-center gap-2">
                                <Feather className="w-4 h-4" />
                                Writings Involved
                                <Info className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                              </h4>
                              <p className="text-slate-300 leading-relaxed text-sm md:text-base line-clamp-3">
                                {stage.details.writings}
                              </p>
                              <p className="text-xs text-amber-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Click for more →</p>
                            </div>

                            {/* Characters */}
                            <div 
                              onClick={(e) => {
                                e.stopPropagation();
                                openDetailModal(stage, 'Characters', stage.details.characters);
                              }}
                              className={`${isDark ? 'bg-slate-800/70' : 'bg-slate-800/50'} backdrop-blur-sm rounded-lg p-4 md:p-5 border ${isDark ? 'border-slate-600' : 'border-slate-700'} cursor-pointer hover:scale-105 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group`}
                            >
                              <h4 className="text-xs md:text-sm uppercase font-bold mb-2 text-blue-400 tracking-wide flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                Characters
                                <Info className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                              </h4>
                              <p className="text-slate-300 leading-relaxed text-sm md:text-base line-clamp-3">
                                {stage.details.characters}
                              </p>
                              <p className="text-xs text-blue-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Click for more →</p>
                            </div>

                            {/* Ideas */}
                            <div 
                              onClick={(e) => {
                                e.stopPropagation();
                                openDetailModal(stage, 'Ideas', stage.details.ideas);
                              }}
                              className={`${isDark ? 'bg-slate-800/70' : 'bg-slate-800/50'} backdrop-blur-sm rounded-lg p-4 md:p-5 border ${isDark ? 'border-slate-600' : 'border-slate-700'} cursor-pointer hover:scale-105 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 group`}
                            >
                              <h4 className="text-xs md:text-sm uppercase font-bold mb-2 text-green-400 tracking-wide flex items-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                Ideas
                                <Info className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                              </h4>
                              <p className="text-slate-300 leading-relaxed text-sm md:text-base line-clamp-3">
                                {stage.details.ideas}
                              </p>
                              <p className="text-xs text-green-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Click for more →</p>
                            </div>

                            {/* Emotions */}
                            <div 
                              onClick={(e) => {
                                e.stopPropagation();
                                openDetailModal(stage, 'Emotions', stage.details.emotions);
                              }}
                              className={`${isDark ? 'bg-slate-800/70' : 'bg-slate-800/50'} backdrop-blur-sm rounded-lg p-4 md:p-5 border ${isDark ? 'border-slate-600' : 'border-slate-700'} cursor-pointer hover:scale-105 hover:border-pink-400 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 group`}
                            >
                              <h4 className="text-xs md:text-sm uppercase font-bold mb-2 text-pink-400 tracking-wide flex items-center gap-2">
                                <Heart className="w-4 h-4" />
                                Emotions
                                <Info className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                              </h4>
                              <p className="text-slate-300 leading-relaxed text-sm md:text-base line-clamp-3">
                                {stage.details.emotions}
                              </p>
                              <p className="text-xs text-pink-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Click for more →</p>
                            </div>

                            {/* Symbolism */}
                            <div 
                              onClick={(e) => {
                                e.stopPropagation();
                                openDetailModal(stage, 'Symbolism', stage.details.symbolism);
                              }}
                              className={`${isDark ? 'bg-slate-800/70' : 'bg-slate-800/50'} backdrop-blur-sm rounded-lg p-4 md:p-5 border ${isDark ? 'border-slate-600' : 'border-slate-700'} cursor-pointer hover:scale-105 hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group`}
                            >
                              <h4 className="text-xs md:text-sm uppercase font-bold mb-2 text-purple-400 tracking-wide flex items-center gap-2">
                                <Star className="w-4 h-4" />
                                Symbolism
                                <Info className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                              </h4>
                              <p className="text-slate-300 leading-relaxed text-sm md:text-base line-clamp-3">
                                {stage.details.symbolism}
                              </p>
                              <p className="text-xs text-purple-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Click for more →</p>
                            </div>

                            {/* Relevance */}
                            <div 
                              onClick={(e) => {
                                e.stopPropagation();
                                openDetailModal(stage, 'Relevance', stage.details.relevance);
                              }}
                              className={`${isDark ? 'bg-slate-800/70' : 'bg-slate-800/50'} backdrop-blur-sm rounded-lg p-4 md:p-5 border ${isDark ? 'border-slate-600' : 'border-slate-700'} cursor-pointer hover:scale-105 hover:border-orange-400 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 group`}
                            >
                              <h4 className="text-xs md:text-sm uppercase font-bold mb-2 text-orange-400 tracking-wide flex items-center gap-2">
                                <Shield className="w-4 h-4" />
                                Relevance
                                <Info className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                              </h4>
                              <p className="text-slate-300 leading-relaxed text-sm md:text-base line-clamp-3">
                                {stage.details.relevance}
                              </p>
                              <p className="text-xs text-orange-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Click for more →</p>
                            </div>

                            {/* Impact */}
                            <div 
                              onClick={(e) => {
                                e.stopPropagation();
                                openDetailModal(stage, 'Impact on Rizal', stage.details.impact);
                              }}
                              className={`${isDark ? 'bg-slate-800/70' : 'bg-slate-800/50'} backdrop-blur-sm rounded-lg p-4 md:p-5 border ${isDark ? 'border-slate-600' : 'border-slate-700'} md:col-span-2 cursor-pointer hover:scale-105 hover:border-red-400 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 group`}
                            >
                              <h4 className="text-xs md:text-sm uppercase font-bold mb-2 text-red-400 tracking-wide flex items-center gap-2">
                                <Flame className="w-4 h-4" />
                                Impact on Rizal
                                <Info className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                              </h4>
                              <p className="text-slate-300 leading-relaxed text-sm md:text-base line-clamp-3">
                                {stage.details.impact}
                              </p>
                              <p className="text-xs text-red-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Click for more →</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Quote */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-amber-900/40 to-amber-800/40 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-2xl border-2 border-amber-600/30">
            <p className="text-base md:text-xl text-amber-100 italic leading-relaxed max-w-3xl">
              "The youth is the hope of our fatherland."
            </p>
            <p className="text-amber-400 mt-3 md:mt-4 font-semibold text-sm md:text-base">— José Rizal</p>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedDetail && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeDetailModal}
        >
          <div 
            className="bg-slate-800 rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto shadow-2xl border-2 border-slate-700 animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${selectedDetail.color} p-6 md:p-8 rounded-t-2xl relative`}>
              <button
                onClick={closeDetailModal}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:rotate-90"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <div className="pr-12">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl font-bold text-white/80">
                    {selectedDetail.stageId}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {selectedDetail.stageTitle}
                  </h3>
                </div>
                <p className="text-white/80 text-sm md:text-base mb-4">
                  {selectedDetail.stagePeriod}
                </p>
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <h4 className="text-white font-bold text-sm md:text-base">
                    {selectedDetail.detailKey}
                  </h4>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-slate-700">
                <p className="text-slate-200 leading-relaxed text-base md:text-lg whitespace-pre-line">
                  {selectedDetail.detailValue}
                </p>
              </div>
              
              {/* Close button at bottom */}
              <div className="mt-6 flex justify-center">
                <button
                  onClick={closeDetailModal}
                  className={`bg-gradient-to-r ${selectedDetail.color} text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg`}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RizalFlowchart;
