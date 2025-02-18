import ExternalLink from "app/components/external-link";

export const metadata = {
  title: "Uses",
  description: "Software and hardware I use.",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2 border-b pb-4">
      <h2 className="text-2xl font-medium underline">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Item({
  title,
  name,
  href,
  children,
}: {
  title: string;
  name: string;
  href?: string;
  children?: React.ReactNode;
}) {
  const itemName = href ? (
    <ExternalLink href={href}>{name}</ExternalLink>
  ) : (
    <span>{name}</span>
  );

  return (
    <div>
      <div className="flex items-baseline gap-1 text-base">
        <span className="font-semibold">{title}:</span>
        {itemName}
      </div>
      <p className="text-neutral-700">{children}</p>
    </div>
  );
}

export default function UsesPage() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl border-2 border-black px-1 rounded-sm w-fit">
          Things I use and enjoy enough to recommend.
        </h1>
        <span className="text-sm italic">{"(Updated 2025-02-17)"}</span>
      </div>

      <div className="space-y-4">
        <Section title="Hardware">
          <Item title="💻 Computer" name='MacBook Pro M1 (14", Space Gray)'>
            Most of us are using a computer for the majority of the day, and the
            tool we interact with this much should look beautiful, feel great,
            and work exceptionally. The M1 Pro is all that, and 4+ years later
            the performance and battery are still doing the job.
          </Item>

          <Item
            title="🐭 Mouse"
            name="Logitech MX Master"
            href="https://www.logitech.com/en-us/products/mice/mx-master-3s.html"
          >
            You can decouple the magnet on the scroll wheel to supposedly scroll
            1100 lines/second, which is... nice to know you can do if you need
            to?
          </Item>

          <Item
            title="⌨️ Keyboard"
            name="Keychron K2"
            href="https://www.keychron.com/products/keychron-k2-wireless-mechanical-keyboard?variant=39900390686809"
          >
            I'm by no means a keyboard junkie, but mechanical keyboards are
            pretty fun to use. This one looks pretty, is reasonably priced, and
            the keys click-clack nicely.
          </Item>

          <p className="text-sm text-neutral-700 italic border-y py-2">
            Normally folks just throw techy stuff here, but other tools are
            worth sharing too!
          </p>

          <Item
            title="🥘 Pan"
            name="Staub Perfect Pan"
            href="https://www.zwilling.com/us/staub-cast-iron---woks%2F-perfect-pans-12-inch-perfect-pan-graphite-grey-1312918/40511-462-0.html?cgid=our-brands_staub_cast-iron_woks-perfect-pans"
          >
            This is my favorite kitchen tool and I never see it on any lists.
            It's essentially a wok+dutch oven combo which seems weird but I use
            it for everything. If I had to replace all pots and pans with just a
            single one, I think this thing could do it.
          </Item>

          <Item
            title="🔪 Kitchen Knife"
            name="Global G-2"
            href="https://www.globalcutleryusa.com/classic-g-2"
          >
            Anthony Bourdain recommended this in Kitchen Confidential which was
            good enough a recommendation for me.
          </Item>

          <Item
            title="🪛 Home Toolkit"
            name="Wera Tool Check Plus"
            href="https://products.wera.de/en/bits_holders_adaptors_and_sets_bit_sets_tool-checks_and_bit-checks_with_zyklop_mini_ratchet_tool-check_plus.html.html"
          >
            The Rolls-Royce of miniature screwdriver+wrench sets but totally
            worth it. Plus you end up using them a lot to justify owning this.
          </Item>
        </Section>

        <Section title="Software">
          <Item title="📝 Notes" name="Apple Notes">
            It just works.
          </Item>

          <Item
            title="🧑‍💻 Code Editor"
            name="Cursor"
            href="https://www.cursor.com/"
          >
            Cursor has totally changed the way I view interacting with computers
            via code. Obviously mixed thoughts on using AI to code / abandoning
            the love of the craft... but the productivity I get using Cursor vs
            a non-assisted editor makes it so worth it.
          </Item>

          <Item title="🌐 Browser" name="Arc" href="https://www.arc.net/">
            To fit in at NYC WeWorks.
          </Item>

          <Item title="✅ To-Do" name="Todoist" href="https://todoist.com/">
            One of my most used apps... I use partly as a to-do list and partly
            as a brain-dump place for thoughts to revisit later. The natural
            language scheduling is the killer feature for me that keeps me using
            Todoist over something like Apple Reminders.
          </Item>

          <Item
            title="📑 Read It Later"
            name="Readwise Reader"
            href="https://readwise.io/read"
          >
            My other most used app, especially as I am trying to phase out
            algorithmic feeds for RSS, newsletters, and bookmarked articles. The
            text-to-speech feature is super cool, and helps to keep up with an
            ever growing backlog of Money Stuff newsletters.
          </Item>

          <Item
            title="📖 RSS"
            name="Readwise Reader"
            href="https://readwise.io/read"
          />

          <Item title="📰 News" name="NYT App, Readwise Reader" />

          <Item title="✍🏼 Journaling" name="Apple Journal">
            Was pretty bare bones when first released, but lately the Journal
            app has become great. A Mac version would be nice, but as a "jot a
            few thoughts at a time" vs an essayist journalist, the phone app
            suits my needs just fine.
          </Item>

          <Item
            title="📜 Word Processing"
            name="Obsidian"
            href="https://obsidian.md/"
          >
            Honestly not totally sold on this one yet, but giving it a try. I
            really just want a markdown editor with a pretty interface and so
            far Obsidian does the job.
          </Item>
        </Section>

        <p className="text-neutral-700">
          Finally, this site is built using NextJS with Tailwind styling and
          hosted with Vercel. Is a fancy React framework overkill for a mostly
          static site? Maybe, but it's what I'm most familiar with.
        </p>
      </div>
    </div>
  );
}
