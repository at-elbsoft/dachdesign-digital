import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  image?: string;
}

export default function PageHero({ title, subtitle, breadcrumb, image }: PageHeroProps) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      ref={ref}
      className="relative bg-primary text-primary-foreground overflow-hidden"
    >
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" width={1920} height={600} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
      )}
      <div className="relative container-wide section-padding">
        <div className={`max-w-3xl ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          {breadcrumb && (
            <p className="text-sm font-medium uppercase tracking-wider opacity-70 mb-4">{breadcrumb}</p>
          )}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-[1.1] mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base md:text-lg opacity-85 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
