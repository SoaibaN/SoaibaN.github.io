import Link from "next/link";

const EMAIL = "sn3093@columbia.edu";
const LINKEDIN = "https://www.linkedin.com/in/soaiba-nuzhat/";
const GITHUB = "https://github.com/SoaibaN";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-mono text-sm font-semibold text-ink">
            Soaiba Nuzhat
          </p>
          <p className="mt-1 text-sm text-muted">
            New York, NY &middot; &copy; {year}
          </p>
        </div>

        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <li>
            <a
              href={`mailto:${EMAIL}`}
              className="text-muted transition-colors hover:text-accent"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
          </li>
          <li>
            {GITHUB ? (
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-accent"
              >
                GitHub
              </a>
            ) : (
              // [INSERT INFORMATION] — add GITHUB url above to activate this link.
              <span className="text-muted/60" title="GitHub link coming soon">
                GitHub
              </span>
            )}
          </li>
          <li>
            <Link
              href="/personal"
              className="text-muted transition-colors hover:text-accent"
            >
              Personal
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
