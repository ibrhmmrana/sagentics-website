# Case Study: Antistatic
## Reputation-as-a-Service Platform for SMBs

**Client:** Sagentics  
**Product:** Antistatic  
**Delivery:** Full-stack web application (Next.js, Supabase, Stripe, Google APIs, AI)

---

## Overview

Sagentics commissioned the design and build of **Antistatic**, the world's first "reputation-as-a-service" platform for small and medium-sized businesses. Antistatic acts as a "pre-POS" engine: the point of credibility that helps businesses win foot traffic before customers ever reach the till. The product moves beyond passive dashboards by combining 24/7 AI monitoring with a transactional "fix-it-now" model and a marketplace of local creators.

---

## The Challenge

Small businesses face a recurring problem: they have a point of sale (POS) to take money, but they lack a systematic way to build the credibility that drives customers through the door. A competitor a kilometre away at 4.6 stars can steal walk-ins from a business stuck at 3.9. Most tools offer charts and reports (vitamins). Sagentics wanted a platform that sells outcomes (painkillers): detect the problem, present a clear fix, and let the owner pay to execute it in one flow.

---

## The Solution

Antistatic is built around two commercial pillars and a single product experience:

1. **Cover charge:** A low monthly subscription that unlocks an always-on early warning system. The system monitors the business's reviews, social presence, and, critically, its competitors.
2.

ence:

1. **Cover charge:** A low monthly subscription that unlocks an always-on early warning system. The system monitors the business's reviews, social presence, and, critically, its competitors.
2. **Real spend:** When a critical alert fires, the product surfaces a "fix-it-now" action. The owner does not "book a call"; they check out. The platform then dispatches vetted local creators to visit the business, create authentic content, and leave honest reviews.

The product triages all feedback into three signal types that map directly to the press narrative:

- **Critical signal (painkiller):** e.g. "You just got a 1-star review." The owner is prompted to address the cause and offered a one-off purchase to bury the bad review with new, positive, authentic ones.
- **Opportunity signal (growth tap):** e.g. "Your competitor just got a 1-star review" or "A happy customer just posted on Instagram." The system turns real-time data into offensive strategy to capture market share.
- **Victory signal (proof):** e.g. "You just hit a 4.5-star average" or "Your last 3 reels passed 10,000 local views." These close the loop, prove ROI, and validate continued spend.

---

## What We Built

### Core Modules (from the repo)

just hit a 4.5-star average" or "Your last 3 reels passed 10,000 local views." These close the loop, prove ROI, and validate continued spend.

---

## What We Built

### Core Modules (from the repo)

**Dashboard (Overview)**  
A single pane for the last 7–30 days: Google Business Profile (GBP) reviews (average rating, new reviews, trend), direction requests, search impressions, calls and website clicks, and social metrics (posts and engagement) aggregated from connected channels. Time-range filters let owners compare periods and see deltas. The dashboard is the daily "how am I doing?" view before diving into modules.

**Reputation Hub**  
Centralises Google reviews and messaging. Owners see all reviews in one inbox with sentiment and can reply with AI-suggested responses (tone options: Warm, Professional, Apologetic, Friendly, Short & direct; length: Short, Medium, Long) that respect the business's brand kit. Review requests can be sent via SMS, WhatsApp, or email to drive fresh 5-star reviews. Bulk reply and generate-reply APIs support both single and batch workflows. GBP replies are posted back to Google via the Google Business Profile API.

**Competitor Radar**  
Owners add competitors (by name or place) to a watchlist. The system discovers nearby places with a threat score (distance, rating velocity, review volume). Alerts fire when competitors get new reviews (especially very positive or very negative), when they post on social, or when they spike in visibility.

score (distance, rating velocity, review volume). Alerts fire when competitors get new reviews (especially very positive or very negative), when they post on social, or when they spike in visibility. An Opportunities tab surfaces "competitor just got a bad review" or low-rated competitors so the owner can act. Rankings and refresh endpoints keep GBP and competitor data current. Threat configuration and classification run in the background so alerts stay relevant.

**Social Studio**  
Unifies social presence and content execution. Owners connect Instagram, Facebook, X, LinkedIn, and TikTok by username. The platform scrapes and stores posts, then aggregates engagement (likes, comments, shares) into an Insights view and dashboard metrics. A Content Bank holds GBP images (from Google Places), review testimonials (positive reviews with text), and trending-in-industry videos; images can be AI-enhanced (Gemini) and used in creatives. The Generate tab offers an AI image enhancer (industry templates: auto, restaurant, dentist, mechanic, real estate, beauty salon, gym, legal) and a caption generator (platform and tone options, rewrite and copy). Planner and reminders support scheduling and follow-up. Positive reviews and GBP images feed the creator and content workflows.

**Creator Hub**  
The on-ramp to the "fix-it-now" and creator marketplace.

nner and reminders support scheduling and follow-up. Positive reviews and GBP images feed the creator and content workflows.

**Creator Hub**  
The on-ramp to the "fix-it-now" and creator marketplace. Owners see four service types: Ratings and reviews (grow reputation; from R200), User generated content (brief creators to make content; from R750), Social media posts (influencers try the business and post; from R1,500), Paid media promotion (Facebook, Google, TikTok; from R2,000). Submitting an enquiry sends a structured payload (what you need, when, ideal customer, business location, service requested, user id and email) to an external webhook (e.g. Intakt) for fulfilment. The product does not store enquiries in-app; it passes them to the partner that dispatches local creators.

**Reports**  
Shareable reports that summarise performance and recommendations. The report frames Antistatic as the system that "monitors your reputation 24/7, spots threats and opportunities, and tells you exactly what to do next." Sections map to modules (local listings to Reputation Hub, social presence to Social Studio, search results to Competitor Radar, creator hub to Creator Hub). The narrative pushes owners from insight to action (e.g. "Turn a 3.9-star perception into a 4.6-star reality, fast") and links to open the relevant module.

**Marketplace, Settings, Billing**  
Marketplace is a dedicated nav destination.

ght to action (e.g. "Turn a 3.9-star perception into a 4.6-star reality, fast") and links to open the relevant module.

**Marketplace, Settings, Billing**  
Marketplace is a dedicated nav destination. Settings and billing are wired to Stripe (provisioning, portal, webhooks, sync) so subscription and one-off purchases stay in sync with the product. Onboarding ties business creation, location, and tool selection to the same Stripe and module logic.

### Integrations and Infrastructure

- **Auth and data:** Supabase (auth, Postgres, RLS, storage). Row-level security and service-role usage are scoped so dashboard, report, cron, and cross-tenant operations stay correct and secure.
- **Payments:** Stripe for subscription and one-off "fix-it-now" style transactions.
- **Google:** Google Business Profile API (reviews, replies, insights, location), Google Places API (details, photos, autocomplete), used for dashboard metrics, reputation, competitor discovery, and Content Bank GBP images.
- **AI:** OpenAI for review reply generation and caption/idea generation; Google Gemini for image enhancement (with retries and fallback model). Brand kit and business context feed into prompts so outputs stay on-brand.
- **Social and scraping:** Apify for social post scraping (Instagram, Facebook, X, LinkedIn, TikTok); sync-all and per-platform analysis APIs write into Social Studio tables. Instagram Graph API for publish, media, insights, and DMs where connected.

scraping (Instagram, Facebook, X, LinkedIn, TikTok); sync-all and per-platform analysis APIs write into Social Studio tables. Instagram Graph API for publish, media, insights, and DMs where connected.
- **Comms:** AWS SES for email (e.g. planner reminders), SNS for SMS; WhatsApp review-request flow for inviting customers to leave reviews.
- **Cron and webhooks:** Vercel cron for planner reminders, Apify refresh, and Social Studio sync; webhooks for Stripe and Meta (Instagram) to keep billing and social state in sync.

### Security and Reliability

- API routes are protected with auth, location ownership checks, and cost guards (rate limits and per-route budgets) to prevent abuse and control spend on Google, OpenAI, Gemini, and Apify.
- Sensitive comparisons (e.g. webhook secrets) use constant-time checks. Critical paths (e.g. Social Studio analysis tables, Content Bank cache) use the Supabase service role where RLS would block server-side writes, while still enforcing ownership at the API layer.
- Image and caption generation use retries, timeouts, and fallback models so transient provider failures do not break the user experience.

---

## Outcome

Antistatic is a single product that ties together monitoring, alerts, and execution. Owners get one dashboard, one inbox for reviews, one place to watch competitors and act on opportunities, one content and caption pipeline, and one path to book creator-led fixes.

erts, and execution. Owners get one dashboard, one inbox for reviews, one place to watch competitors and act on opportunities, one content and caption pipeline, and one path to book creator-led fixes. The architecture supports the "cover charge plus real spend" model and the three-signal narrative (critical, opportunity, victory) without em dashes: it is built to sell painkillers, not vitamins, and to turn reputation into revenue at the till.

---

## For Potential Clients

Sagentics used this engagement to ship a full SaaS product from concept to production: multi-tenant auth, subscription and one-off billing, several third-party APIs, AI-driven copy and imagery, and a clear commercial story. If you are looking for a partner to design and build a product that combines dashboards with transactional outcomes and real-world fulfilment (e.g. dispatching people or services), this case study is a compact of what we did with Antistatic.

**Contact:** Sagentics