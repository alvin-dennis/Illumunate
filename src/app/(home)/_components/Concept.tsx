import { MotionDiv } from '@/components/Framer';

export default function Concept() {
  const concepts = [
    {
      number: '01',
      title: 'Light',
      description: 'Christmas encoded as energy—radiant, abstract, alive.',
    },
    {
      number: '02',
      title: 'Motion',
      description: 'Dynamic experiences that pulse with creative velocity.',
    },
    {
      number: '03',
      title: 'Unity',
      description: 'Colleges converge in a shared celebration of innovation.',
    },
  ];

  return (
    <section className="relative py-40 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-24"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                The Concept
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9]">
              CHRISTMAS<br />
              <span className="text-muted-foreground">REIMAGINED</span>
            </h2>
          </MotionDiv>
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {concepts.map((concept, index) => (
              <MotionDiv
                key={concept.number}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="mb-6">
                  <span className="text-6xl md:text-7xl text-muted/60 group-hover:text-primary/60 transition-colors duration-500">
                    {concept.number}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl mb-4 group-hover:text-gradient transition-all duration-500">
                  {concept.title}
                </h3>
                <p className="text-editorial text-sm">
                  {concept.description}
                </p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
