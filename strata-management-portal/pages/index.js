import Head from 'next/head';
import Link from 'next/link';
import '../styles/globals.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Strata Management Portal</title>
      </Head>
      <header>
        <h1>{process.env.NEXT_PUBLIC_BUILDING_NAME || 'My Strata Building'}</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/committee">Committee</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
      <main>
        <h2>Welcome to the Strata Management Portal</h2>
        <p>This portal is for residents and committee members to manage the building efficiently.</p>
        <img src="/logo.png" alt="Building Logo" width="200" />
      </main>
      <footer>
        <p>&copy; 2025 Strata Committee</p>
      </footer>
    </>
  );
}