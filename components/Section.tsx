interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-20 px-4 ${className}`}>
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            {title}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full neon-glow"></div>
        </div>
        {children}
      </div>
    </section>
  );
}
