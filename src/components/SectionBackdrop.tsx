interface SectionBackdropProps {
  variant?: 'left' | 'right' | 'center';
  intensity?: 'soft' | 'bold';
}

const variantPositions: Record<'left' | 'right' | 'center', string> = {
  left: '-left-32 top-[-10%]',
  right: '-right-32 top-[10%]',
  center: 'left-1/2 -translate-x-1/2 -top-10'
};

const intensitySizes: Record<'soft' | 'bold', string> = {
  soft: 'w-64 h-64',
  bold: 'w-[28rem] h-[28rem]'
};

export const SectionBackdrop = ({ variant = 'center', intensity = 'bold' }: SectionBackdropProps) => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div
      className={`absolute ${variantPositions[variant]} ${intensitySizes[intensity]} bg-gradient-to-br from-primary/20 via-accent/20 to-transparent blur-3xl opacity-60 animate-pulse`}
    />
    <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_transparent_55%)]" />
    <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(120deg,_rgba(255,255,255,0.35)_1px,_transparent_1px)] bg-[length:140px_140px]" />
    <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/10 blur-[120px]" />
  </div>
);
