// Case-study copy from shreyasinha.co.in, structured for the template.
// Section blocks: { text } paragraph · { term, text } label/value pair · { list: [] } bullets.
// Section items are cards (competitors, decisions, features); images match by title via media.js.

export const caseStudies = {
  "earthly-lunar": {
    "slug": "earthly-lunar",
    "eyebrow": "Project",
    "title": "Earthly Lunar",
    "hook": "Making engineering health visible — for everyone who needs to see it.",
    "tags": [
      "Enterprise SaaS",
      "Developer Tools",
      "Web Application",
      "Dual-Audience Design"
    ],
    "stats": [
      {
        "value": "Enterprise",
        "label": "Scale"
      },
      {
        "value": "2",
        "label": "Distinct User Audiences"
      },
      {
        "value": "Solo",
        "label": "Product Designer"
      }
    ],
    "meta": "Earthly Lunar · Earthly.dev · RedCrackle's Client",
    "sections": [
      {
        "title": "The Brief",
        "blocks": [
          {
            "text": "Earthly Lunar is an engineering guardrails platform — it turns engineering standards, compliance requirements, and process documentation into automated, deterministic enforcement across every repository in an organization."
          }
        ]
      },
      {
        "title": "The challenge",
        "blocks": [
          {
            "text": "The platform serves two fundamentally different audiences — engineering leaders who need high-level visibility across hundreds of services, and developers who need granular, actionable feedback on their specific work. Designing one interface that serves both without overwhelming either was the core problem."
          }
        ]
      },
      {
        "title": "The Product",
        "blocks": [
          {
            "text": "At its core, Earthly Lunar gives large engineering organizations answers to questions that are otherwise impossible to answer at scale:"
          },
          {
            "list": [
              "Which of our 247 services are healthy right now?",
              "Which domains need attention?",
              "Is this PR compliant with our engineering standards?",
              "Who owns this component?"
            ]
          },
          {
            "text": "The dashboard surfaces all of this in real time — tracking adherence scores, domain health, active initiatives, and service-level compliance across an entire organization's engineering infrastructure."
          }
        ]
      },
      {
        "title": "Dual-Audience Design",
        "items": [
          {
            "title": "Engineering Leaders",
            "blocks": [
              {
                "text": "They need the 30,000-foot view — overall adherence scores, domain health trends, initiative progress, and risk signals across the entire organization. They're making strategic decisions. They need clarity, not detail."
              }
            ]
          },
          {
            "title": "Developers",
            "blocks": [
              {
                "text": "They need the ground-level view — specific feedback on their PRs, guardrail violations in their repositories, and actionable next steps. They're making tactical decisions. They need precision, not breadth."
              },
              {
                "text": "I designed the dashboard to serve both — a high-level organization overview that leaders can scan in seconds, and drill-down views that give developers exactly the detail they need without the noise."
              }
            ]
          }
        ],
        "blocks": [
          {
            "text": "The most important design decision in this project was recognizing that the same data means completely different things to different people."
          }
        ]
      },
      {
        "title": "Key Design Decisions",
        "items": [
          {
            "title": "01 — Authentication — every error state covered",
            "blocks": [
              {
                "text": "Login, registration, forgot password, reset password — every flow has empty states, error states, and success states. The auth experience is the first thing every user sees. Getting it right matters."
              }
            ]
          },
          {
            "title": "02 — Adherence scores as the primary language",
            "blocks": [
              {
                "text": "Rather than showing raw data, the dashboard translates complex engineering compliance into a single percentage score per domain and per initiative. Leaders can immediately see where attention is needed without needing to understand the underlying data."
              }
            ]
          },
          {
            "title": "03 — Domain Health at a glance",
            "blocks": [
              {
                "text": "The domain health table uses a traffic light system — green, yellow, red — with 30-day trend indicators. A leader can scan 12 domains in under 10 seconds and immediately know which ones need their attention."
              }
            ]
          },
          {
            "title": "04 — Drill-down without getting lost",
            "blocks": [
              {
                "text": "Every high-level view links to a detailed view. Every detailed view has clear navigation back. The information architecture ensures that users — whether leaders or developers — always know where they are and how to get back."
              }
            ]
          }
        ]
      },
      {
        "title": "Key Screens"
      },
      {
        "title": "Outcome",
        "blocks": [
          {
            "text": "A dual-audience enterprise dashboard that makes engineering health visible — from the organization level down to the individual service. Designed to serve engineering leaders making strategic decisions and developers making tactical ones, in the same product."
          }
        ]
      }
    ]
  },
  "ebb": {
    "slug": "ebb",
    "eyebrow": "Design sprint",
    "title": "Ebb",
    "hook": "Designing a fintech app in 10 days using 8 AI tools.",
    "tags": [
      "Fintech",
      "Mobile App",
      "AI-Augmented Design",
      "Freelance Tools"
    ],
    "stats": [
      {
        "value": "10 Days",
        "label": "Design Sprint"
      },
      {
        "value": "8",
        "label": "AI Tools Used"
      },
      {
        "value": "Solo",
        "label": "Product Designer"
      }
    ],
    "meta": "Personal Project · Concept · Tools: Claude · ChatGPT · Khroma · FontJoy · Microsoft Designer · Uizard · Relume · Figma",
    "sections": [
      {
        "title": "The Brief",
        "blocks": [
          {
            "text": "Ebb is a smart income management app for freelancers — designed to solve the financial problem that every existing budgeting tool ignores: irregular income."
          },
          {
            "text": "Revolut assumes you get paid on the 1st. QuickBooks treats your finances like a small business ledger. Wave is free but emotionally cold. None of them understand that a freelancer might earn ₹1.5 lakh one month and ₹30,000 the next — and needs to plan accordingly."
          },
          {
            "text": "Ebb gives freelancers one thing above everything else: a number they can trust."
          },
          {
            "text": "\"When income is anything but steady.\""
          }
        ]
      },
      {
        "title": "The AI Toolkit",
        "items": [
          {
            "title": "Claude",
            "blocks": [
              {
                "text": "Competitor analysis, user personas, UX copy, feature prioritization"
              }
            ]
          },
          {
            "title": "ChatGPT",
            "blocks": [
              {
                "text": "Simulated user interview responses for research validation"
              }
            ]
          },
          {
            "title": "Relume",
            "blocks": [
              {
                "text": "AI-generated sitemap and information architecture starting point"
              }
            ]
          },
          {
            "title": "Khroma",
            "blocks": [
              {
                "text": "Color palette generation trained on designer preferences"
              }
            ]
          },
          {
            "title": "FontJoy",
            "blocks": [
              {
                "text": "AI font pairing for typography system"
              }
            ]
          },
          {
            "title": "Microsoft Designer",
            "blocks": [
              {
                "text": "Mood board and visual direction exploration"
              }
            ]
          },
          {
            "title": "Uizard",
            "blocks": [
              {
                "text": "AI wireframe generation from text descriptions"
              }
            ]
          },
          {
            "title": "Figma",
            "blocks": [
              {
                "text": "Visual design, component system, and prototype"
              }
            ]
          }
        ],
        "blocks": [
          {
            "text": "This project was a deliberate experiment: use AI tools at every stage of the design process, document what worked, and be honest about where human judgment was still irreplaceable."
          },
          {
            "text": "Every tool was free. Every output was refined by human judgment."
          }
        ]
      },
      {
        "title": "The Problem",
        "items": [
          {
            "title": "The invisible number",
            "blocks": [
              {
                "text": "Freelancers never know their real safe-to-spend figure. Balance is not safe to spend. Safe to spend accounts for upcoming expenses, tax obligations, savings targets, and the possibility of a slow next month."
              }
            ]
          },
          {
            "title": "Income anxiety even in good months",
            "blocks": [
              {
                "text": "High income months don't feel secure because a slow month could follow. The emotional experience of freelance finances is anxiety regardless of current balance."
              }
            ]
          },
          {
            "title": "Tax as an afterthought",
            "blocks": [
              {
                "text": "Freelancers are responsible for their own taxes but most don't set money aside proactively. By tax season, the money is gone."
              }
            ]
          },
          {
            "title": "Fragmented income tracking",
            "blocks": [
              {
                "text": "WhatsApp to chase invoices. Notes to track what's owed. Bank statement to confirm what arrived. There's no single place to see everything."
              }
            ]
          },
          {
            "title": "Savings advice calibrated for the wrong person",
            "blocks": [
              {
                "text": "\"Save 20% of your income\" is built for salaried employees. For a freelancer, 20% means something completely different every month."
              }
            ]
          }
        ],
        "blocks": [
          {
            "text": "Five pain points that existing tools don't solve:"
          }
        ]
      },
      {
        "title": "Competitor Analysis",
        "items": [
          {
            "title": "Revolut",
            "blocks": [
              {
                "text": "Beautiful UI, strong analytics. Designed entirely for salaried income. Budgets assume a fixed monthly payment. No freelance-specific features."
              }
            ]
          },
          {
            "title": "QuickBooks Self-Employed",
            "blocks": [
              {
                "text": "Solves the tax problem, ignores the human problem. Feels like accounting software. Dated UI, steep learning curve, US-focused."
              }
            ]
          },
          {
            "title": "Wave",
            "blocks": [
              {
                "text": "Genuinely free and functional. No smart savings, no income prediction, no mobile-first experience. Users use it because it's free, not because they love it."
              }
            ]
          },
          {
            "title": "Jupiter",
            "blocks": [
              {
                "text": "Gets emotional design right — feels like a friend. Still built for employees. No irregular income management, no tax pocket, no self-employment awareness."
              }
            ]
          }
        ]
      },
      {
        "title": "The gap Ebb fills",
        "blocks": [
          {
            "text": "The only tool designed specifically for the emotional and financial reality of irregular freelance income."
          }
        ]
      },
      {
        "title": "User Personas",
        "items": [
          {
            "title": "Priya, 27 · Freelance UI/UX Designer · Bengaluru",
            "blocks": [
              {
                "text": "Earns ₹45,000–₹1,80,000/month. Tracks income in Notes. Guesses at taxes. Made more money this year than ever and stressed about money more than ever."
              },
              {
                "text": "\"I made more money this year than ever before. I also stressed about money more than ever before. Those two things shouldn't both be true.\""
              }
            ]
          },
          {
            "title": "Arjun, 32 · Freelance Content Strategist · Kochi",
            "blocks": [
              {
                "text": "Earns $800–$3,500/month across INR and USD clients. Uses a spreadsheet, Wise, and a separate savings account. Knows January is always slow. Forgets to save in December every single year."
              },
              {
                "text": "\"I've been doing this for five years. I should have figured out the money thing by now. I haven't.\""
              }
            ]
          }
        ]
      },
      {
        "title": "Information Architecture",
        "blocks": [
          {
            "text": "I used Relume to generate an initial sitemap from a text prompt — describing Ebb's core features and target user. The AI produced a reasonable starting structure that I then refined based on the research insights."
          },
          {
            "term": "What Relume got right",
            "text": "The core navigation structure — Dashboard, Income, Savings, Expenses, Tax — mapped closely to what the research suggested users needed."
          },
          {
            "term": "What I changed",
            "text": "Relume suggested a separate \"Reports\" section. I removed it — Ebb is not an accounting tool. Everything a freelancer needs to feel in control should be visible on the dashboard, not buried in a reports tab."
          },
          {
            "text": "This is where AI as a starting point — not a final answer — showed its value most clearly."
          }
        ]
      },
      {
        "title": "Visual Direction",
        "items": [
          {
            "title": "Color Palette — via Khroma",
            "blocks": [
              {
                "text": "Trained on warm, trustworthy, calm tones. Selected a palette anchored in deep teal with warm amber accents — financial enough to feel credible, warm enough to feel human. Not the cold blue of traditional banking."
              }
            ]
          },
          {
            "title": "Typography — via FontJoy",
            "blocks": [
              {
                "text": "(Libre Franklin-Noto Sans) A geometric sans for headings — confident and modern. A slightly warmer secondary for body text — readable and approachable. The combination feels considered without being clinical."
              }
            ]
          },
          {
            "title": "Mood Board — via Microsoft Designer",
            "blocks": [
              {
                "text": "The visual direction: calm, warm, minimal. A product that feels like it's on your side — not judging your spending, not overwhelming you with data. Like a financially savvy friend, not a bank."
              }
            ]
          }
        ]
      },
      {
        "title": "Wireframes",
        "blocks": [
          {
            "text": "I used Uizard to generate rough wireframes from text descriptions of each screen. The AI produced functional starting points in minutes — saving hours of blank-canvas work."
          },
          {
            "term": "What Uizard got right",
            "text": "Basic layout structures for the Dashboard and Income Tracker were close enough to use as direct references."
          },
          {
            "term": "What I refined",
            "text": "The Safe-to-Spend number needed far more visual hierarchy than Uizard gave it — it's the hero of the entire app and needed to feel like it. I also restructured the onboarding flow — Uizard's version felt transactional, not welcoming."
          },
          {
            "text": "The wireframes weren't the answer. They were the starting point that let me get to the answer faster."
          }
        ]
      },
      {
        "title": "The Design System",
        "items": [
          {
            "title": "Colors",
            "blocks": [
              {
                "text": "Primary teal · Accent amber · Neutral greys · Semantic red/green for income/expense"
              }
            ]
          },
          {
            "title": "Typography",
            "blocks": [
              {
                "text": "Two weights of the chosen pairing — Regular for body, Semibold for numbers and CTAs"
              }
            ]
          },
          {
            "title": "Components",
            "blocks": [
              {
                "text": "Safe-to-spend card · Income list item · Suggestion card · Tab bar · Empty state · Notification toast"
              }
            ]
          }
        ],
        "blocks": [
          {
            "text": "Before designing screens I built a minimal design system:"
          }
        ]
      },
      {
        "title": "Key Screens"
      },
      {
        "title": "UX Copy",
        "blocks": [
          {
            "text": "All microcopy written with Claude. A selection of the copy decisions that shaped the experience:"
          },
          {
            "term": "Safe-to-spend label",
            "text": "\"Safe to spend today\" (not \"Available balance\" — that's a bank term, not a freelance term)"
          },
          {
            "term": "Smart Save suggestion",
            "text": "\"Based on your last 3 months, we suggest saving ₹12,000 this month — a bit more than usual while things are going well.\""
          },
          {
            "term": "Low income alert",
            "text": "\"Heads up — this month is looking quieter than usual. We've adjusted your safe-to-spend to help you stay comfortable.\""
          },
          {
            "term": "Empty state — Dashboard",
            "text": "\"Your financial picture starts here. Add your first income to see what you can safely spend.\""
          },
          {
            "term": "Tax Pocket tooltip",
            "text": "\"We set aside this percentage automatically every time income lands. You'll never be surprised by tax season again.\""
          },
          {
            "term": "Onboarding — final step",
            "text": "\"Ebb works best when you're honest with it. The more you add, the better your safe-to-spend number gets.\""
          }
        ]
      },
      {
        "title": "Reflections — Where AI Helped and Where It Didn't",
        "items": [
          {
            "title": "Where AI genuinely helped",
            "blocks": [
              {
                "text": "Research acceleration — competitor analysis and persona development that would have taken two days took two hours. The outputs weren't perfect but they were good enough to build on."
              },
              {
                "text": "Starting points — Relume's sitemap and Uizard's wireframes gave me something to react to rather than starting from blank. Reacting is faster than originating."
              },
              {
                "text": "Copy generation — Claude generated first drafts of every piece of microcopy. I refined them, but having something to edit rather than something to create from nothing saved significant time."
              },
              {
                "text": "Color and typography — Khroma and FontJoy removed the paralysis of infinite options. Both tools gave me constrained, quality choices. I picked the best one. Done."
              }
            ]
          },
          {
            "title": "Where human judgment was irreplaceable",
            "blocks": [
              {
                "text": "Emotional design — no AI tool understood that the safe-to-spend number needed to feel reassuring, not alarming. That hierarchy decision was entirely human."
              },
              {
                "text": "What to cut — Relume suggested features I knew weren't right for this user. AI doesn't understand what to leave out. Restraint is a human skill."
              },
              {
                "text": "The feeling — the difference between a dashboard that feels like a bank and one that feels like a friend is entirely in the details. Typography weight, number size, card spacing, color temperature. AI generated the ingredients. I cooked the meal."
              }
            ]
          }
        ],
        "blocks": [
          {
            "text": "AI is a force multiplier, not a replacement. This project took 10 days instead of 6 weeks."
          },
          {
            "text": "The quality didn't suffer — it improved, because I spent my time on the decisions that actually required human judgment."
          }
        ]
      },
      {
        "title": "Prototype",
        "links": [
          {
            "label": "View Prototype",
            "href": "https://shreyasinha1920-des.github.io/ebb-prototype/"
          }
        ],
        "blocks": [
          {
            "text": "A clickable prototype covering the core user flow:"
          },
          {
            "text": "Welcome → Connect Income → Dashboard → Income Tracker → Smart Save → Tax Pocket"
          }
        ]
      },
      {
        "title": "Outcome",
        "blocks": [
          {
            "text": "Ebb is a concept product — designed to demonstrate AI-augmented design workflow in a real fintech context. It proved that a complete, polished mobile app can go from brief to prototype in 10 days when AI tools are used strategically at every stage."
          },
          {
            "text": "The more interesting outcome: a clear, documented map of exactly where AI adds value in a design process — and where it doesn't. That map is more useful than any single screen."
          }
        ]
      }
    ]
  },
  "eightfold-career-pages": {
    "slug": "eightfold-career-pages",
    "eyebrow": "Project",
    "title": "Eightfold Career Pages",
    "hook": "Five brands. Five completely different experiences. One platform.",
    "tags": [
      "Enterprise",
      "Brand-Matched Design",
      "Web",
      "Live Work",
      "Eightfold"
    ],
    "stats": [
      {
        "value": "5",
        "label": "Enterprise Clients"
      },
      {
        "value": "Live",
        "label": "All Sites Active"
      },
      {
        "value": "Solo",
        "label": "Product Designer"
      }
    ],
    "meta": "RedCrackle · Eightfold Platform · Fortive · Dexcom · Ralliant · 10x Genomics · Booking Holdings",
    "sections": [
      {
        "title": "The Brief",
        "blocks": [
          {
            "text": "Eightfold is an enterprise talent intelligence platform used by large organizations to manage their hiring. Each company gets a career page built within Eightfold's infrastructure — but the design must feel completely native to their brand, not like a generic job board."
          },
          {
            "text": "My job: take each client's brand identity and translate it faithfully into a career page experience within Eightfold's platform constraints. Five clients, five completely different visual languages, all delivered as live, production-ready designs."
          }
        ]
      },
      {
        "title": "The Challenge",
        "blocks": [
          {
            "text": "Designing within a platform is a different skill than designing from scratch. Every decision had to work within Eightfold's component structure while still feeling authentically on-brand for each client. The constraint was the brief."
          },
          {
            "text": "The result: five career pages that feel like extensions of each company's existing brand — not five versions of the same template."
          }
        ]
      },
      {
        "title": "The Five Brands",
        "items": [
          {
            "title": "Dexcom",
            "link": {
              "label": "See Live",
              "href": "https://careers.dexcom.com/careers/index"
            },
            "blocks": [
              {
                "text": "Dexcom is a medical technology company specializing in continuous glucose monitoring. The career page reflects their brand identity — clean, precise, and mission-driven. The design leads with their core purpose: game-changing technology, life-changing work. Regional navigation (Global, North America, EMEA, Asia-Pacific) surfaces immediately — critical for a company hiring across multiple global markets. The visual language is clinical and confident, matching Dexcom's position as a healthcare technology leader."
              }
            ]
          },
          {
            "title": "Fortive",
            "link": {
              "label": "See Live",
              "href": "https://careers.fortive.com/"
            },
            "blocks": [
              {
                "text": "Fortive is a diversified industrial technology conglomerate with multiple subsidiary companies. The career page had a unique challenge: it needed to represent Fortive as a parent brand while also surfacing its many subsidiary companies — Fluke, Accruent, Gordian, Industrial Scientific, and more. The navigation structure reflects this — a clear company hierarchy that lets candidates find the right brand within the Fortive family. The visual tone is professional and structured, reflecting an established industrial technology company."
              }
            ]
          },
          {
            "title": "Ralliant",
            "link": {
              "label": "See Live",
              "href": "https://careers.ralliant.com/"
            },
            "blocks": [
              {
                "text": "Ralliant is an industrial technology company spun off from Fortive — newer, more energetic, with a distinct brand voice. \"Make an impact every day\" leads the page — a more dynamic, forward-looking tone than its parent company. The design reflects Ralliant's positioning as a company where careers are defined by breakthrough moments. Orange brand color used confidently. The page feels distinct from Fortive despite sharing a lineage."
              }
            ]
          },
          {
            "title": "10x Genomics",
            "link": {
              "label": "See Live",
              "href": "https://careers.10xgenomics.com/careers/index"
            },
            "blocks": [
              {
                "text": "10x Genomics is a life sciences company accelerating the mastery of biology. The career page reflects their scientific precision and innovative positioning — a company at the cutting edge of genomics research. The design balances scientific credibility with human warmth, reflecting a company that's both rigorous and mission-driven."
              }
            ]
          },
          {
            "title": "Booking Holdings COE",
            "link": {
              "label": "See Live",
              "href": "https://bookingholdings-coe.com"
            },
            "blocks": [
              {
                "text": "Booking Holdings is one of the world's largest travel companies — parent to Booking.com, Priceline, and other global travel brands. The COE (Centre of Excellence) career page needed to represent the full Booking Holdings family while positioning the COE specifically as a talent destination. The design is polished and global — reflecting a company operating at worldwide scale with multiple brand properties."
              }
            ]
          }
        ]
      },
      {
        "title": "Design Approach",
        "items": [
          {
            "title": "01 — Brand Immersion",
            "blocks": [
              {
                "text": "Before touching any design tool, I studied each client's existing brand — their main website, their visual language, their typography, their color usage, their tone of voice. The career page had to feel like it belonged to the same family."
              }
            ]
          },
          {
            "title": "02 — Platform Constraints First",
            "blocks": [
              {
                "text": "Understanding what Eightfold's platform could and couldn't do shaped every decision. Working within constraints isn't a limitation — it's a design problem with a defined solution space."
              }
            ]
          },
          {
            "title": "03 — Brand Translation",
            "blocks": [
              {
                "text": "Taking each company's visual identity and applying it to Eightfold's component structure — hero imagery, navigation, typography, color, content hierarchy. The goal was always the same: a visitor landing on the career page should feel immediately that they're in the right place."
              }
            ]
          },
          {
            "title": "04 — Secondary Pages",
            "blocks": [
              {
                "text": "Beyond the main career page, I also designed the secondary pages — job listings, individual job detail pages, talent community sign-up flows — ensuring brand consistency throughout the entire candidate journey, not just the homepage."
              }
            ]
          }
        ],
        "blocks": [
          {
            "text": "Each project followed the same process, applied differently every time:"
          }
        ]
      },
      {
        "title": "Screen Highlights"
      },
      {
        "title": "Outcome",
        "blocks": [
          {
            "text": "All five career pages are live and actively used for hiring across some of the world's largest industrial technology and life sciences companies. Every page is a faithful translation of its brand — distinct, considered, and production-ready."
          },
          {
            "text": "Five companies. Five completely different experiences. One designer."
          }
        ]
      }
    ]
  },
  "herstories": {
    "slug": "herstories",
    "eyebrow": "Project",
    "title": "HerStories",
    "hook": "What if your reading app knew you — and let you be part of the story?",
    "tags": [
      "Mobile App",
      "Entertainment",
      "Social",
      "UX Exploration"
    ],
    "stats": [
      {
        "value": "2 Weeks",
        "label": "Design Duration"
      },
      {
        "value": "5",
        "label": "Homepage Variants Explored"
      },
      {
        "value": "Solo",
        "label": "Product Designer"
      }
    ],
    "meta": "Freelance · Personal Project · Design Paused",
    "sections": [
      {
        "title": "The Brief",
        "blocks": [
          {
            "text": "HerStories came from a former MuleSoft employee turned entrepreneur — a personal passion project he brought to me as a freelance client."
          },
          {
            "text": "The vision: an interactive reading app designed specifically for young women, where stories feel personal, the reading experience is social, and users can insert themselves into the narrative through a customizable avatar."
          },
          {
            "text": "Think Wattpad meets Webtoon — but with a stronger identity, a more considered UX, and a community layer built in from the start."
          },
          {
            "text": "The project was paused after two weeks when the client moved to a new role. What exists is an honest exploration of the core experience — not final designs, but a clear design direction."
          }
        ]
      },
      {
        "title": "The Product",
        "items": [
          {
            "title": "Webtoon",
            "blocks": [
              {
                "text": "Strong visual format, great for comics and illustrated stories. Community features work well but discovery is weak."
              }
            ]
          },
          {
            "title": "Wattpad",
            "blocks": [
              {
                "text": "The dominant player for written fiction. Huge library but dated UI and weak personalization."
              }
            ]
          },
          {
            "title": "Tapas",
            "blocks": [
              {
                "text": "Good monetization model with episode unlocking. Community engagement is strong."
              }
            ]
          },
          {
            "title": "AnyBooks",
            "blocks": [
              {
                "text": "Clean reading experience but minimal social layer."
              }
            ]
          }
        ],
        "blocks": [
          {
            "text": "Safal AI is built around three core AI tools, each addressing a specific knowledge problem the firm faces daily:"
          }
        ]
      },
      {
        "title": "The gap",
        "blocks": [
          {
            "text": "None of these gave users a sense of personal identity within the app. You're always a passive reader, never part of the story. HerStories would change that."
          }
        ]
      },
      {
        "title": "The Avatar System",
        "blocks": [
          {
            "text": "The most distinctive feature in HerStories is the customizable avatar — a character the user creates and owns, which then appears within their reading experience."
          },
          {
            "term": "Users customize",
            "text": "Outfits · Tops · Bottoms · Hair · Face · Arms"
          },
          {
            "term": "Three starting styles",
            "text": "Casual · Casual Friday · Summer Look"
          },
          {
            "text": "This wasn't a cosmetic feature — it was a core UX decision. By giving users a character to invest in, the app creates emotional ownership. You're not just reading a story. You're in it."
          },
          {
            "text": "The avatar also drives the coin economy — users earn coins through reading activity and spend them on character upgrades, early episode access, and customization items. It's a retention mechanic that feels like a reward rather than a paywall."
          }
        ]
      },
      {
        "title": "Five Homepage Explorations",
        "items": [
          {
            "title": "Variant 1",
            "blocks": [
              {
                "text": "Personalized character display prominent, current reads section, featured stories slider, genre categories"
              }
            ]
          },
          {
            "title": "Variant 2",
            "blocks": [
              {
                "text": "Featured stories slider leads, genre categories below, no character display — cleaner, more content-first"
              }
            ]
          },
          {
            "title": "Variant 3",
            "blocks": [
              {
                "text": "Featured slider leads, selected stories highlighted, genre rows below"
              }
            ]
          },
          {
            "title": "Variant 4",
            "blocks": [
              {
                "text": "Character display prominent, featured slider, genre categories — similar to Variant 1 but different visual weight"
              }
            ]
          },
          {
            "title": "Variant 5",
            "blocks": [
              {
                "text": "Character display, featured slider, selected stories highlighted, genre rows — most content-rich variant"
              },
              {
                "text": "This exploration wasn't about finding one right answer — it was about understanding the tension between personalization (showing the user's avatar and reading history) and discovery (showing what's new and trending). Different users would respond differently to each approach."
              }
            ]
          }
        ],
        "blocks": [
          {
            "text": "One of the most valuable parts of this project was the homepage exploration. I designed five distinct variants, each with a different information hierarchy:"
          }
        ]
      },
      {
        "title": "Key Features Designed",
        "items": [
          {
            "title": "Swipe to Discover",
            "blocks": [
              {
                "text": "A Tinder-style story discovery mechanic — Pass or I Like This. Reduces the paradox of choice in a large content library and makes discovery feel like play."
              }
            ]
          },
          {
            "title": "Ranking System",
            "blocks": [
              {
                "text": "Trending and Popular tabs with numbered charts — giving users a social signal about what's worth reading. Genre filters: Drama, Fantasy, Comedy, Action, Slice of Life, Romance, Thriller, Mystery, Supernatural, Sports, Sci-Fi, Superhero."
              }
            ]
          },
          {
            "title": "My Stories Library",
            "blocks": [
              {
                "text": "Reading history with Recent, Subscribed, and My Comments tabs. Reading/Unread/Finished filters. Episode-level tracking — \"1 episode unread\", \"You're caught up.\""
              }
            ]
          },
          {
            "title": "Community",
            "blocks": [
              {
                "text": "A social feed with text discussion posts, polls with countdown timers, and photo posts. Each with likes, comments, and view counts. Story-specific community spaces — \"Dark Eyes Family\", \"Under the Stars\" fan communities."
              }
            ]
          },
          {
            "title": "Settings",
            "blocks": [
              {
                "text": "A complete settings system: image resolution, device management, download management with storage tracking, default view (Card vs Compact), text size override, comment sort preferences, display theme (Light/Dark/System), sleep mode with time settings."
              }
            ]
          }
        ]
      },
      {
        "title": "Screen Highlights"
      },
      {
        "title": "Outcome",
        "blocks": [
          {
            "text": "HerStories was two weeks of genuine UX exploration — competitor research, avatar system, five homepage variants, community features, and a complete settings architecture. It didn't reach production. But it established a clear design direction: an app where reading feels personal, social, and yours."
          },
          {
            "text": "The project is paused. The direction is solid."
          }
        ]
      }
    ]
  },
  "pdf-to-web": {
    "slug": "pdf-to-web",
    "eyebrow": "Project",
    "title": "PDF to Web",
    "hook": "Making years of technical content actually readable.",
    "tags": [
      "Content Design",
      "Web Experience",
      "Enterprise",
      "MuleSoft",
      "Salesforce"
    ],
    "stats": [
      {
        "value": "6 Months",
        "label": "Project Duration"
      },
      {
        "value": "3",
        "label": "Core Objectives Solved"
      },
      {
        "value": "Proven",
        "label": "User-Tested & Validated"
      }
    ],
    "meta": "MuleSoft · A Salesforce Company · RedCrackle Client · Project paused post-acquisition",
    "sections": [
      {
        "title": "The Brief",
        "blocks": [
          {
            "text": "MuleSoft had a problem that most enterprise companies share — years of valuable technical content locked inside PDFs. Long whitepapers on microservices, API patterns, integration architecture. Genuinely useful material for developers. Almost impossible to actually read."
          },
          {
            "text": "The brief was deceptively simple: turn PDFs into web experiences. The reality was considerably more complex — the solution needed to simultaneously solve for SEO discoverability, user engagement, content analytics tracking, lead generation through form gates, and MuleSoft's ability to cross-promote their products throughout the reading experience."
          },
          {
            "text": "I worked directly with MuleSoft's Product Manager and an Analytics Developer — a rare collaboration that meant design decisions were validated with real tracking data, not just intuition."
          }
        ]
      },
      {
        "title": "The Three Problems",
        "items": [
          {
            "title": "Discoverability",
            "blocks": [
              {
                "text": "PDFs are invisible to search engines. Years of valuable technical content was generating zero organic traffic because it couldn't be indexed. Converting to web pages meant every section became searchable, linkable, and shareable."
              }
            ]
          },
          {
            "title": "Readability",
            "blocks": [
              {
                "text": "A 40-minute read as a continuous PDF is overwhelming. The same content broken into structured, navigable sections with clear hierarchy, read time indicators, and bite-sized pages becomes genuinely approachable. Developers could jump to exactly the section relevant to them."
              }
            ]
          },
          {
            "title": "Trackability",
            "blocks": [
              {
                "text": "PDFs tell you nothing about how people engage with your content. The web experience was designed with a comprehensive analytics layer — tracking form fills, time on page, pages clicked through, share button interactions, and \"Ask an Expert\" conversions. For the first time, MuleSoft could understand how developers actually consumed their content."
              }
            ]
          }
        ],
        "blocks": [
          {
            "text": "Solving this required addressing three distinct problems, each with its own design implications:"
          }
        ]
      },
      {
        "title": "The Design Solution",
        "blocks": [
          {
            "text": "The solution was a three-column web experience modelled after MuleSoft's existing design language — studied, validated with their design lead, and built to feel native to their site."
          },
          {
            "term": "Left Rail — Navigation",
            "text": "A collapsible tree structure showing the full document hierarchy — all sections and subsections visible at a glance. Users could see the entire content structure before reading a single word. Expanded by default on first visit so users immediately understood what they were getting into. Each section clickable, taking users directly to that page."
          },
          {
            "term": "Content Area — Centre",
            "text": "Each PDF section became its own web page — with a clear H1 title, read time indicator, and content formatted following MuleSoft's blog typography and image treatment. Pagination at the bottom connected pages sequentially. The visual and information load of a 40-minute PDF was reduced to digestible, focused sections."
          },
          {
            "term": "Right Rail — Context",
            "text": "Related content tiles, cross-promotional MuleSoft products, and an \"Ask an Expert\" CTA. This was the business value layer — every reading session became an opportunity to surface relevant products and capture leads from an already-engaged audience."
          }
        ]
      },
      {
        "title": "The Form Gate System",
        "blocks": [
          {
            "text": "One of the most technically complex design decisions was the form gate — a lead capture mechanism that appeared as a popup whenever a new user arrived, regardless of which page they landed on."
          },
          {
            "text": "The system needed to:"
          },
          {
            "list": [
              "Detect whether a user had previously completed the form",
              "Show the form only to new or unverified users",
              "Support progressive profiling — showing different form fields based on what MuleSoft already knew about the user",
              "Load a virtual thank you page on submission without disrupting the reading flow"
            ]
          },
          {
            "text": "I designed every state: form popup, filled state, error states, success state, and the ungated experience for returning users. The result was a lead generation mechanism that felt frictionless — not a wall, but a natural part of entering the content space."
          }
        ]
      },
      {
        "title": "Share & Distribution",
        "blocks": [
          {
            "text": "The share system was designed with three distinct options depending on context:"
          },
          {
            "text": "On the Landing Page:"
          },
          {
            "list": [
              "Share Link to This Doc (copies the full article URL to clipboard)"
            ]
          },
          {
            "text": "On Content Pages:"
          },
          {
            "list": [
              "Get Link to This Page (copies the specific section URL)",
              "Get Link to This Doc (copies the full article URL)",
              "Download PDF (original PDF still available for users who prefer it)"
            ]
          },
          {
            "text": "This distinction matters — a developer sharing a specific section with a colleague needs a different link than someone sharing the whole document. Small decision, significant usability improvement."
          }
        ]
      },
      {
        "title": "Two PDF Types — Two Templates",
        "blocks": [
          {
            "text": "The project tested two content lengths: a long-form whitepaper and a short-form document. Each rendered differently in the web experience — the navigation depth, pagination structure, and content hierarchy adapted to the length of the source material. This wasn't one template applied universally — it was a system flexible enough to handle different content structures gracefully."
          }
        ]
      },
      {
        "title": "Screen Highlights"
      },
      {
        "title": "Outcome",
        "blocks": [
          {
            "text": "The web experience was built, tested by the Analytics Developer, and validated. Search success rate increased from 48% to 72%, replacing a download-and-guess workflow with direct keyword landing on the exact content needed — proving that developers engaged meaningfully with the structured web content versus the original PDF format."
          },
          {
            "text": "Project paused post-Salesforce acquisition."
          }
        ]
      }
    ]
  },
  "redcrackle": {
    "slug": "redcrackle",
    "eyebrow": "Project",
    "title": "RedCrackle",
    "hook": "Designing the brand of the agency I design for.",
    "tags": [
      "Brand Identity",
      "Agency Website",
      "Digital Transformation",
      "Wordmark"
    ],
    "stats": [
      {
        "value": "~4 Months",
        "label": "Project Duration"
      },
      {
        "value": "7",
        "label": "Services Designed For"
      },
      {
        "value": "Live",
        "label": "redcrackle.com"
      }
    ],
    "meta": "RedCrackle · San Jose, CA · Internal Project",
    "sections": [
      {
        "title": "The Brief",
        "links": [
          {
            "label": "Live at redcrackle.com",
            "href": "https://redcrackle.com/"
          }
        ],
        "blocks": [
          {
            "text": "RedCrackle is a full-service digital transformation agency — serving Fortune 500 companies and startups across design transformation, web and mobile development, e-commerce, AI & ML, analytics, and interactive web experiences. Founded in 2012, the company had grown significantly but its visual identity hadn't kept pace."
          },
          {
            "text": "My job: create a complete brand identity — wordmark, color palette, visual system — and design the full website from scratch. Everything needed to feel modern, sleek, and impactful. Not stock. Not generic agency."
          },
          {
            "text": "The challenge wasn't just design — it was navigating two completely opposing creative directions within the organization."
          }
        ]
      },
      {
        "title": "The Creative Tension",
        "blocks": [
          {
            "text": "Two stakeholders. Two completely opposite visions."
          },
          {
            "text": "One wanted bold, bright, popping visuals — high energy, expressive, loud. The other wanted minimal service design — clean, quiet, nothing tacky. Neither was wrong. Both were right for different reasons."
          },
          {
            "text": "My solution: popping colors, minimal design. Take the energy and confidence of the first vision. Apply it with the restraint and sophistication of the second. The result is a brand that stands out without shouting — bold enough to be memorable, clean enough to feel credible."
          },
          {
            "text": "This is the design decision I'm most proud of on this project. It required understanding what both stakeholders actually wanted beneath their stated preferences — and finding the intersection."
          }
        ]
      },
      {
        "title": "Brand Identity",
        "items": [
          {
            "title": "The Wordmark",
            "blocks": [
              {
                "text": "A clean, modern wordmark — not a logo mark or icon, just type. The choice was deliberate: a wordmark forces the name to do the work, which is appropriate for a company whose reputation is built on what they do, not on a symbol. Modern, sleek, immediately readable."
              }
            ]
          },
          {
            "title": "The Color Palette",
            "blocks": [
              {
                "text": "Bold, confident colors that pop — applied with restraint across clean layouts. The palette gives RedCrackle visual energy without sacrificing the professional credibility an agency needs when pitching to Fortune 500 clients."
              }
            ]
          },
          {
            "title": "The System",
            "blocks": [
              {
                "text": "Typography, spacing, and visual hierarchy all follow the same principle: maximum impact, minimum noise."
              }
            ]
          }
        ]
      },
      {
        "title": "The Website",
        "items": [
          {
            "title": "Homepage",
            "blocks": [
              {
                "text": "The homepage was designed with interaction and animation in mind — a dynamic entry that communicates momentum. The live site has the design correct; the animations are partially implemented. The design intent was a site that felt alive on first load."
              }
            ]
          },
          {
            "title": "About Us",
            "blocks": [
              {
                "text": "RedCrackle's story — from a Drupal-focused startup in 2012 to a global digital transformation agency with clients including PayPal, eBay, MuleSoft, and others. The About page balances the founder's story with the team's expertise."
              }
            ]
          },
          {
            "title": "Case Studies",
            "blocks": [
              {
                "text": "A portfolio section showcasing client work — the evidence behind the agency's claims. Designed to be browsable and filterable by service type."
              }
            ]
          }
        ],
        "blocks": [
          {
            "text": "The RedCrackle website needed to do two things simultaneously — communicate what the agency does with enough clarity that a new visitor understands immediately, and feel impressive enough that the same visitor wants to work with them."
          },
          {
            "text": "Services — the core of the site Seven service areas, each with its own page:"
          },
          {
            "list": [
              "Design Transformation",
              "Web & Mobile App Development",
              "Interactive Website",
              "E-Commerce Development",
              "Marketing Ops",
              "AI & Machine Learning",
              "Analytics & BI"
            ]
          },
          {
            "text": "Each service page follows a consistent structure — the problem it solves, RedCrackle's approach, and case study references. The navigation is structured so users can move between services without losing context."
          }
        ]
      },
      {
        "title": "Screen Highlights"
      },
      {
        "title": "Outcome",
        "blocks": [
          {
            "text": "The RedCrackle brand identity and website are live at redcrackle.com — actively used to pitch and win clients including Fortune 500 companies. The visual system is in daily use across the agency's communications."
          },
          {
            "text": "Completed in approximately four months alongside client project work."
          }
        ]
      }
    ]
  },
  "rocketpages-project": {
    "slug": "rocketpages-project",
    "eyebrow": "Project",
    "title": "RocketPages",
    "hook": "Designing a website builder for people who've never built a website.",
    "tags": [
      "SaaS",
      "Web Application",
      "Design System",
      "Brand Identity",
      "Editor UX"
    ],
    "stats": [
      {
        "value": "~1 Year",
        "label": "Project Duration"
      },
      {
        "value": "25+",
        "label": "Components Designed"
      },
      {
        "value": "Solo",
        "label": "Product Designer"
      }
    ],
    "meta": "RedCrackle · Internal Product · Live & Used Across Africa",
    "sections": [
      {
        "title": "The Brief",
        "blocks": [
          {
            "text": "The idea came from the owner — a website builder simple enough for a small business to use without hiring a designer. My job was to define how that would actually work: the UX, the editor, the brand, and the component system. Everything from scratch."
          },
          {
            "text": "And yes — this portfolio is built on RocketPages. Live proof."
          }
        ]
      },
      {
        "title": "The Problem",
        "blocks": [
          {
            "text": "Platforms like Wix, Squarespace, and Weblium are powerful. They're also overwhelming. Most small business owners end up hiring designers or platform specialists just to use them — defeating the entire point of a no-code tool."
          },
          {
            "text": "Three things needed to change:"
          },
          {
            "list": [
              "Too many components and options for a user with no design background",
              "No clear starting point — users didn't know where to begin",
              "The editor felt built for designers, not business owners"
            ]
          },
          {
            "text": "RocketPages needed radical simplicity. Not fewer features — fewer decisions."
          }
        ]
      },
      {
        "title": "Competitor Research",
        "items": [
          {
            "title": "Wix",
            "blocks": [
              {
                "text": "Powerful but overwhelming. Too many options at every step."
              }
            ]
          },
          {
            "title": "Squarespace",
            "blocks": [
              {
                "text": "Beautiful templates but a steep learning curve for non-designers."
              }
            ]
          },
          {
            "title": "Weblium / Umso",
            "blocks": [
              {
                "text": "Closer to the right idea but still too complex for the target user."
              }
            ]
          }
        ]
      },
      {
        "title": "The gap",
        "statement": "Every platform was built for a broad audience from small to enterprise. No one was building specifically for the small business owner with no design experience and no budget for help."
      },
      {
        "title": "Brand Identity",
        "blocks": [
          {
            "text": "The name RocketPages came from a company-wide brainstorm — the idea that a website should propel your business forward. I took it literally."
          },
          {
            "text": "The logo is an origami rocket — combining rocket and pages into a single mark. Simple enough to work at small sizes, distinctive enough to be remembered."
          },
          {
            "text": "Orange + Blue. Energetic and trustworthy."
          },
          {
            "text": "The overall feeling: approachable, pleasant, encouraging. Like the product is rooting for you."
          }
        ]
      },
      {
        "title": "The Editor UX",
        "items": [
          {
            "title": "Content → Style → Layout",
            "blocks": [
              {
                "text": "Learn it once on the hero section, and you already know how to edit the gallery, the pricing table, and the contact form. That consistency was the most important UX decision in the project."
              },
              {
                "text": "Global Theme lets users set brand colors, font pairings, and button styles once — applied everywhere automatically. Instead of infinite options, I offered curated choices: a palette library, pre-tested font pairs, button style presets. Choices that can't go wrong."
              }
            ]
          }
        ],
        "blocks": [
          {
            "text": "The editor is built around one consistent pattern across every component:"
          }
        ]
      },
      {
        "title": "Component Library",
        "blocks": [
          {
            "text": "Every component has full content, style, and layout controls. Every interactive element has base and hover states. Every section is responsive."
          },
          {
            "text": "Design System Foundations:"
          },
          {
            "text": "Grids · Colors · Typography · Drop Shadows · Spacers · Input Fields · Badges · Avatars · Buttons · Background Radius · Icons"
          },
          {
            "text": "Page Components (25+ complete):"
          },
          {
            "text": "Header Banner · Header Navigation · Welcome · Welcome Slider · Blog · Text · Promotion · Features · Services · Products · Events · Gallery · Videos · Video Gallery · About · Testimonials · Pricing Table · Menu · Clients · Team · FAQs · Contact · Separators · Footer"
          }
        ]
      },
      {
        "title": "Key Screens"
      },
      {
        "title": "Outcome",
        "blocks": [
          {
            "list": [
              "RocketPages is live.",
              "30+ small businesses and community welfare organizations internationally are building their websites on a platform I designed from scratch — brand, UX, editor, components, and all.",
              "76% component reuse rate across all product and site builds on the platform."
            ]
          },
          {
            "text": "The most meaningful outcome isn't a number. It's that people who previously couldn't have a website now do."
          }
        ]
      }
    ]
  },
  "rootwords-project": {
    "slug": "rootwords-project",
    "eyebrow": "Project",
    "title": "RootWords",
    "hook": "Making vocabulary feel like a game — because it should.",
    "tags": [
      "Mobile App",
      "EdTech",
      "Gamification",
      "Branding",
      "iOS & Android"
    ],
    "stats": [
      {
        "value": "1 Month",
        "label": "Design Duration"
      },
      {
        "value": "4",
        "label": "Game Modes Designed"
      },
      {
        "value": "Live",
        "label": "App Store & Google Play"
      }
    ],
    "meta": "Confidential Client · rootwords.io · Live on iOS & Android",
    "sections": [
      {
        "title": "The Brief",
        "links": [
          {
            "label": "Live at rootwords.io",
            "href": "https://www.rootwords.io/"
          }
        ],
        "blocks": [
          {
            "text": "RootWords is a vocabulary learning app built around a simple but powerful insight: if you understand the Latin and Greek roots of words, you can decode the meaning of thousands of words you've never seen before. The app targets students from middle school through college — plus healthcare students learning medical terminology and professionals studying for standardized tests like the SAT, ACT, and IELTS."
          },
          {
            "text": "The challenge: vocabulary learning is notoriously dry. The brief was to make it genuinely fun — not just add a points system on top of flashcards, but design something that felt like play from the first screen."
          }
        ]
      },
      {
        "title": "The Core Mechanic",
        "blocks": [
          {
            "text": "The centrepiece of RootWords is a slot-machine mechanic for word learning. Instead of passively reading flashcards, users spin a slot machine that combines roots, prefixes, and suffixes to form words. The randomness creates surprise. The combination mechanic teaches pattern recognition. The spinning creates anticipation."
          },
          {
            "text": "It's the same dopamine loop that makes slot machines compelling — applied to something genuinely useful. You don't feel like you're studying. You feel like you're playing."
          }
        ]
      },
      {
        "title": "Four Game Modes",
        "items": [
          {
            "title": "Learn",
            "blocks": [
              {
                "text": "Guided introduction to roots, prefixes, and suffixes with context and examples. The foundation before the game begins."
              }
            ]
          },
          {
            "title": "Test",
            "blocks": [
              {
                "text": "Structured assessment mode — how well do you actually know what you've learned? Tracks progress and identifies weak spots."
              }
            ]
          },
          {
            "title": "Challenge",
            "blocks": [
              {
                "text": "Competitive, timed mode for users who want to push themselves. Higher stakes, faster pace, bigger rewards."
              }
            ]
          },
          {
            "title": "Nonsense",
            "blocks": [
              {
                "text": "The most creative mode — combining roots in ways that create non-existent but decodable words. Forces users to apply their understanding rather than just recall. Genuinely delightful."
              }
            ]
          }
        ]
      },
      {
        "title": "Branding",
        "blocks": [
          {
            "text": "The RootWords brand needed to feel smart but approachable — not intimidating like a textbook, not childish like a kids' app. It needed to appeal to a 14-year-old studying for the SAT and a 24-year-old studying for medical school at the same time."
          },
          {
            "text": "The visual identity balances playfulness and credibility — a mark that feels confident and distinctive without taking itself too seriously."
          }
        ]
      },
      {
        "title": "Tablet View",
        "blocks": [
          {
            "text": "The app was designed for both mobile and tablet — critical for the classroom use case where teachers often use tablets for group learning or students use iPads as their primary device. The tablet layout takes advantage of the larger canvas without simply scaling up the mobile design."
          }
        ]
      },
      {
        "title": "Key Screens"
      },
      {
        "title": "Outcome",
        "blocks": [
          {
            "text": "RootWords launched on the App Store and Google Play and is live and active. DAU/MAU ratio was 24%, indicating strong repeat engagement for a gamified learning app."
          },
          {
            "text": "The app serves middle school students, high school students, SAT/ACT/IELTS test-takers, college students, healthcare students, and ESL learners — a remarkably broad audience united by one thing: they all need to decode unfamiliar words quickly and confidently."
          },
          {
            "text": "Designed end-to-end in one month — brand identity, four game modes, onboarding, tablet view, and complete mobile app."
          }
        ]
      }
    ]
  },
  "safal-ai": {
    "slug": "safal-ai",
    "eyebrow": "Project",
    "title": "Safal AI",
    "hook": "Putting years of contract intelligence at your fingertips — instantly.",
    "tags": [
      "Enterprise SaaS",
      "AI-Powered",
      "Internal Tool",
      "Role-Based Design"
    ],
    "stats": [
      {
        "value": "3",
        "label": "AI Tools Designed"
      },
      {
        "value": "3",
        "label": "User Role Types"
      },
      {
        "value": "Solo",
        "label": "Product Designer"
      }
    ],
    "meta": "Safal Partners · US Government Contracting · RedCrackle Client",
    "sections": [
      {
        "title": "The Brief",
        "blocks": [
          {
            "text": "Safal Partners is a US-based government contracting firm sitting on years of accumulated contract data, employee expertise records, and performance history. The problem: none of it was easily searchable or accessible. Finding answers required digging through documents manually — slow, inconsistent, and dependent on institutional memory."
          },
          {
            "text": "The brief was to design an AI-powered internal platform that would make this knowledge instantly accessible to the right people — through natural language queries, not database searches."
          }
        ]
      },
      {
        "title": "The Product",
        "items": [
          {
            "title": "Past Performances",
            "blocks": [
              {
                "text": "An AI that searches and summarizes government contracts. Ask it a question in plain English — \"Summarize five contracts where technical assistance is a specific task\" or \"Compile a list of contracts where Safal was the subcontractor\" — and it surfaces the relevant contracts with a structured answer."
              }
            ]
          },
          {
            "title": "Resume AI",
            "blocks": [
              {
                "text": "Searches employee expertise across the organization. Ask \"Who in our company has experience in a specific industry sector?\" or \"Which employees have worked on projects similar to this description?\" and it finds the right people instantly — removing the reliance on who knows whom."
              }
            ]
          },
          {
            "title": "Verify Contracts",
            "blocks": [
              {
                "text": "Searches and validates contract data — allowing users to cross-reference, verify, and confirm contract details without manually pulling documents."
              }
            ]
          }
        ],
        "blocks": [
          {
            "text": "Safal AI is built around three core AI tools, each addressing a specific knowledge problem the firm faces daily:"
          }
        ]
      },
      {
        "title": "Role-Based Design",
        "blocks": [
          {
            "text": "One of the core design challenges was that Safal AI serves three distinct user types — each with different levels of access and different needs:"
          },
          {
            "term": "Admin",
            "text": "Full access to all three AI tools, user management, knowledge base editing, pending approvals, and account settings. Admins see the complete dashboard including user activity metrics and management controls."
          },
          {
            "term": "Editor/Viewer",
            "text": "Access to AI tools with editing permissions but no user management capabilities."
          },
          {
            "term": "Viewer",
            "text": "Read-only access to AI tools — can query and view results but cannot modify the knowledge base or manage users."
          },
          {
            "text": "The interface adapts to each role — Admins see management controls, Viewers don't. The same platform, three different experiences, zero confusion about what each user can and can't do."
          }
        ]
      },
      {
        "title": "Key Design Decisions",
        "items": [
          {
            "title": "01 — Conversational AI interface",
            "blocks": [
              {
                "text": "Each AI tool uses a chat-style interface — users type a natural language query and receive a structured answer. Query history is saved in a collapsible sidebar organized by time period (Previous 7 days, Previous 30 days) so users can revisit and build on previous searches. A loading state — \"Fetching results, this might take a moment\" — manages expectations during AI processing."
              }
            ]
          },
          {
            "title": "02 — Knowledge Base",
            "blocks": [
              {
                "text": "Beyond the three AI tools, I designed a Knowledge Base — a managed repository of documents and resources that feeds the AI's responses. Admins can add, edit, rename, and delete entries through a clean modal interface. This gives the Safal team control over what the AI knows and ensures responses stay accurate and current."
              }
            ]
          },
          {
            "title": "03 — User Management",
            "blocks": [
              {
                "text": "Admins can add new members by name or email, assign access types (Admin/Editor/Viewer), set tool-specific permissions, and manage active/inactive status — all from a single management panel. The permission system lets admins control access at the tool level: a user might have access to Past Performances but not Verify Contracts."
              }
            ]
          },
          {
            "title": "04 — Every error state covered",
            "blocks": [
              {
                "text": "Login, registration, forgot password, reset password — every flow has empty, error, and success states. Invalid email, incorrect password, password strength requirements, confirm password mismatch, loading states, unauthorized access screens — nothing was left to chance. When something goes wrong, users always know exactly what happened and what to do next."
              }
            ]
          }
        ]
      },
      {
        "title": "Screen Highlights"
      },
      {
        "title": "Outcome",
        "blocks": [
          {
            "list": [
              "Safal's team can now answer in seconds questions that previously required hours of manual document search-48% less time spent searching and validating opportunities, expertise, and contract sources.",
              "Designed for two user roles across three AI-powered tools — with full authentication, query history, source references, and knowledge base management.",
              "A complete internal AI platform that transforms years of institutional knowledge into an instantly searchable, conversational interface."
            ]
          }
        ]
      }
    ]
  },
  "vitalsthailand": {
    "slug": "vitalsthailand",
    "eyebrow": "Project",
    "title": "Vitals Thailand",
    "hook": "Turning a site that looked like a scam into one that felt like a brand.",
    "tags": [
      "E-commerce",
      "Healthcare",
      "Web & Mobile",
      "UX Redesign",
      "AI Feature"
    ],
    "stats": [
      {
        "value": "3 Months",
        "label": "Website Redesign"
      },
      {
        "value": "14",
        "label": "Page Types Designed"
      },
      {
        "value": "Solo",
        "label": "Product Designer"
      }
    ],
    "meta": "Vitals Thailand · Bangkok · Freelance · Live at vitals.co.th",
    "sections": [
      {
        "title": "The Brief",
        "blocks": [
          {
            "text": "Vitals is a Bangkok-based health supplement retailer — vitamins, proteins, fish oils, collagen — sold online and across three physical stores in Bangkok. Their website had a critical problem: it didn't look like a business worth trusting."
          },
          {
            "text": "My job was to redesign the entire platform from the ground up — web and mobile — and then design the CMS that would let the Vitals team manage it independently."
          }
        ]
      },
      {
        "title": "The Problem",
        "items": [
          {
            "title": "No discoverability",
            "blocks": [
              {
                "text": "Products existed in an infinite scroll. No proper filters. If you knew exactly what you wanted, you still couldn't find it efficiently."
              }
            ]
          },
          {
            "title": "No trust",
            "blocks": [
              {
                "text": "No trust badges, no reviews, no clear return policy, no visible contact information. For a health supplement brand — where users are putting things in their bodies — trust is everything. The site looked like a scam."
              }
            ]
          },
          {
            "title": "No user ownership",
            "blocks": [
              {
                "text": "No accounts, no order history, no order tracking. Users had no relationship with the platform beyond a single transaction."
              }
            ]
          }
        ],
        "blocks": [
          {
            "text": "Three things were actively hurting the business:"
          }
        ]
      },
      {
        "title": "Competitor Research",
        "items": [
          {
            "title": "iHerb",
            "blocks": [
              {
                "text": "Trust through volume — thousands of reviews, detailed product information, clinical interface. Too overwhelming, not personalized."
              }
            ]
          },
          {
            "title": "HK Vitals",
            "blocks": [
              {
                "text": "Influencer-driven product discovery. Strong on personality, weaker on trust signals."
              }
            ]
          },
          {
            "title": "Thai Local Competitors",
            "blocks": [
              {
                "text": "Broad inventory, poor design quality. An opportunity — a well-designed local platform could win on experience where global platforms win on selection."
              }
            ]
          }
        ]
      },
      {
        "title": "Direction",
        "statement": "iHerb's trust architecture + HK Vitals' influencer discovery pattern + local warmth that neither global player could offer."
      },
      {
        "title": "Key Design Decisions",
        "items": [
          {
            "title": "01 — Trust Architecture",
            "blocks": [
              {
                "text": "\"100% Genuine. 100% Guaranteed.\" isn't decoration — it's an answer to the question every new visitor asks. I introduced trust signals at every critical touchpoint: homepage, product cards, product detail pages, and checkout. Reviews with star breakdowns, stock availability, social proof counters, and clear payment information — all designed to answer doubt before it forms."
              }
            ]
          },
          {
            "title": "02 — Filter & Discovery System",
            "blocks": [
              {
                "text": "Category, Brands, Price Range in Thai Baht, Offers/Discounts — with active filter chips and sort options. Product cards carry contextual badges: Trending, New Arrival, Selling Fast, Expert Recommended. And critically: an empty state — \"No Products Found\" — because what happens when things go wrong matters as much as the happy path."
              }
            ]
          },
          {
            "title": "03 — Expert Pages",
            "blocks": [
              {
                "text": "Vitals works with real Thai influencers — beauty experts, fitness models, athletes. Each expert has a profile page showing their recommended products with their personal endorsement. It's social proof and product discovery combined. Users who follow Topz (Mister Supranational Thailand) can see exactly what he takes and buy it in two taps."
              }
            ]
          },
          {
            "title": "04 — Doc Vitals AI",
            "blocks": [
              {
                "text": "The most innovative feature in the project. Doc Vitals is an AI-powered health advisor embedded directly in the shopping experience. Users ask health questions, describe symptoms, or request product recommendations — Doc Vitals responds with guidance and surfaces relevant products inline."
              },
              {
                "text": "Designing this responsibly was as important as designing it well. A mandatory disclaimer appears before the chat opens. A 10-step Health Questionnaire builds a personal profile over time — making recommendations progressively smarter. This is live at vitals.co.th."
              }
            ]
          },
          {
            "title": "05 — Edge Cases as Trust Signals",
            "blocks": [
              {
                "text": "Most designers design the happy path. I designed what happens when things go wrong — because that's where trust is actually built or lost."
              },
              {
                "text": "Low stock warnings. Sold out with Notify Me email capture. Items going out of stock during checkout. Payment failure with alternative method prompt. Network error with branded screen. Each state is invisible when everything works — and essential when it doesn't."
              }
            ]
          },
          {
            "title": "06 — The CMS",
            "blocks": [
              {
                "text": "Designing the platform is only half the job. The other half is making sure the client can run it without coming back to me."
              },
              {
                "text": "I designed a full content management system that gives the Vitals team complete editorial independence — managing products, banners, blog posts, expert profiles, and promotional content without needing a developer for every update."
              },
              {
                "text": "This is what makes the redesign sustainable long-term. The front-end experience is only as good as the team's ability to keep it fresh and accurate."
              }
            ]
          }
        ]
      },
      {
        "title": "Screen Highlights"
      },
      {
        "title": "Outcome",
        "blocks": [
          {
            "list": [
              "The redesign transformed Vitals from a single-page infinite scroll into a complete e-commerce ecosystem — covering product discovery, trust architecture, personalization, AI-powered guidance, and post-purchase account management.",
              "Conversion rate increased from 3% to 21% after the redesign went live.",
              "Questionnaire completion rate increased from 47% to 65%. 36% of users who completed the questionnaire shopped from the recommendation they received."
            ]
          }
        ]
      }
    ]
  }
}
