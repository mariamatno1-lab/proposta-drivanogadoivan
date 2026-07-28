import './globals.css';

export const metadata = { title: 'Dantas & Advogados Associados', description: 'Assessoria juridica' };

export default function RootLayout({ children }: { children: any }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
