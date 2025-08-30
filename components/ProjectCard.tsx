import Image from "next/image";

export interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  image: string;
}

export default function ProjectCard({ title, description, tags, href, image }: ProjectProps) {
  return (
    <div className="group glass rounded-2xl overflow-hidden hover-glow transition-all duration-500 hover:-translate-y-2 border border-gray-700">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/80 transition-all duration-300"></div>
        
        {/* Hover overlay with neon effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-300 mb-6 line-clamp-3 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 text-cyan-400 text-sm rounded-full font-medium border border-cyan-400/30"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn inline-flex items-center bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-3 rounded-xl font-bold hover-glow transition-all duration-300"
        >
          Voir le projet
          <svg
            className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
