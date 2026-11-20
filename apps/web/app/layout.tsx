import type { ReactNode } from 'react';
export const metadata={title:'Dunya',description:'An open-source game about doing good'};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en"><body>{children}</body></html>}
