import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Linkedin } from "lucide-react";
import { PaperCard } from "@/components/paper";
import { contact } from "@/lib/portfolio-content";

const title = "Connect — Marketing Coordinator Portfolio";
const description = "Thanks for visiting! Let's connect and collaborate — phone, email and LinkedIn.";

export const Route = createFileRoute("/connect")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Connect,
});

function Connect() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-8 text-center">
      <p className="text-xs uppercase tracking-[0.4em] text-primary">The last page</p>
      <h1 className="mt-4 font-display text-6xl leading-[0.9] tracking-wide sm:text-7xl">
        Thanks for visiting!
        <span className="mt-2 block text-primary">Let&apos;s connect &amp; collaborate</span>
      </h1>

      <PaperCard tape className="mt-14 text-left">
        <ul className="space-y-5">
          <li className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary" />
            <span className="text-lg">{contact.phone}</span>
          </li>
          <li className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <a href={`mailto:${contact.email}`} className="text-lg underline underline-offset-4">
              {contact.email}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Linkedin className="h-5 w-5 text-primary" />
            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="text-lg underline underline-offset-4"
            >
              {contact.linkedinLabel}
            </a>
          </li>
        </ul>
      </PaperCard>
    </div>
  );
}