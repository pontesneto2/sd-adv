import { cn } from '@/lib/cn';

export default function Button({ as = 'a', variant = 'primary', className, ...props }) {
  const Comp = as;
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-normal transition-all duration-300 hover:-translate-y-1 hover:shadow-xl';
  const variants = {
    primary:
      'bg-gradient-to-tr from-sd-gold to-sd-gold-2 text-black hover:from-sd-gold-2 hover:to-sd-gold',
    ghost:
      'border border-white/50 text-white hover:bg-white/10 hover:border-white',
    dark:
      'bg-sd-green text-white hover:bg-sd-green-2',
  };
  return <Comp className={cn(base, variants[variant], className)} {...props} />;
}
