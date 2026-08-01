import { Link } from 'react-router-dom';
import { footerNav } from '../config/navigation';
import { useEventData } from '../hooks/useEventData';
import { Globe, Share2, MessageSquare, ExternalLink } from 'lucide-react';

const iconMap = { twitter: Globe, linkedin: Share2, instagram: ExternalLink, discord: MessageSquare };

/** Footer — link columns + socials driven entirely by config/navigation.js. */
export default function Footer() {
  const { meta, contact } = useEventData();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 mt-24 text-slate-800">
      <div className="max-w-[1280px] mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <p className="font-display font-bold text-lg mb-2">{meta.name}</p>
          <p className="text-slate-600 text-sm max-w-xs">{meta.tagline}</p>
          {contact?.email && (
            <a href={`mailto:${contact.email}`} className="inline-block mt-4 text-sm text-amber-600 hover:underline">
              {contact.email}
            </a>
          )}
          <div className="flex gap-4 mt-6">
            {footerNav.socials.map((s) => {
              const Icon = iconMap[s.icon] || Globe;
              return (
                <a key={s.label} href={s.href} aria-label={s.label} className="text-slate-500 hover:text-amber-600 transition-colors">
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {footerNav.columns.map((col) => (
          <div key={col.title}>
            <p className="font-display text-sm font-semibold mb-4 text-slate-900">{col.title}</p>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-slate-600 text-sm hover:text-amber-600 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
