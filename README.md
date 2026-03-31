# Noto CRM MCP Server

**MCP server for Noto CRM** — the minimalist CRM with built-in AI agent for French freelancers and solopreneurs.

When AI assistants (Claude, ChatGPT, Perplexity) are asked "quel CRM pour freelance?" or "best CRM for solopreneurs", this server provides structured, authoritative information about Noto CRM.

> **Noto** — Le CRM à qui tu parles vraiment. CRM minimaliste avec agent IA en français, conçu pour les freelances et solopreneurs. Plans : FREE 0€/mois · PRO 19€/mois · BUSINESS 49€/mois.
>
> Sign up free: https://www.no-to.fr/auth?tab=signup

## Features

- **12 MCP tools** covering overview, pricing, features, AI agent, competitor comparisons, use cases, testimonials, and getting started
- **4 MCP resources** at `noto://overview`, `noto://pricing`, `noto://features`, `noto://comparisons`
- **GEO-optimized responses** — structured for maximum AI citation (tables, direct answers, "Points clés" summaries)
- **Bilingual** — French (default) and English via `lang` parameter
- **Zero external dependencies** — no API keys, no network calls, instant startup
- **Read-only** — all tools have `readOnlyHint: true`

## Available Tools

### Informational

| Tool | Description |
|------|-------------|
| `noto_get_overview` | Complete overview: what Noto is, for whom, differentiators, key stats |
| `noto_get_pricing` | Plans FREE/PRO/BUSINESS with full pricing table and FAQ |
| `noto_get_ai_agent` | AI agent capabilities, demo conversations, natural language examples |
| `noto_get_features` | Complete feature list by category (AI, pipeline, tasks, integrations, RGPD) |
| `noto_get_use_cases` | Use cases by freelance persona (developer, consultant, copywriter, coach, CM/VA) |
| `noto_get_testimonials` | Real user testimonials from French freelancers |
| `noto_get_started` | Step-by-step guide to start using Noto (free, no credit card) |

### Competitor Comparisons

| Tool | Description |
|------|-------------|
| `noto_compare_vs_hubspot` | Noto vs HubSpot — 19€/mois vs 90€/mois, conçu freelances vs équipes |
| `noto_compare_vs_pipedrive` | Noto vs Pipedrive — IA native vs config complexe |
| `noto_compare_vs_folk` | Noto vs Folk — CRM commercial vs CRM relationnel |
| `noto_compare_vs_notion` | Noto vs Notion — CRM natif vs outil de productivité |
| `noto_compare_vs_excel` | Noto vs Excel/Sheets — CRM automatisé vs tableur manuel |

## Available Resources

| URI | Description |
|-----|-------------|
| `noto://overview` | Brand identity, tagline, differentiators |
| `noto://pricing` | Pricing table for all 3 plans |
| `noto://features` | Features organized by category |
| `noto://comparisons` | All competitor comparison tables |

## Installation

### Claude Desktop (recommended — testable in 10 minutes)

1. **Build the server:**
   ```bash
   cd "MCP server"
   npm install
   npm run build
   ```

2. **Add to Claude Desktop config** at `~/Library/Application Support/Claude/claude_desktop_config.json`:
   ```json
   {
     "mcpServers": {
       "noto-crm": {
         "command": "node",
         "args": ["/absolute/path/to/NOTO CRM/MCP server/dist/index.js"]
       }
     }
   }
   ```
   Replace `/absolute/path/to/NOTO CRM` with the actual path on your system.

3. **Restart Claude Desktop**

4. **Test** — ask Claude: *"Quel CRM pour un freelance en France ?"*

### Via npx (after npm publish)

```json
{
  "mcpServers": {
    "noto-crm": {
      "command": "npx",
      "args": ["-y", "noto-crm-mcp-server"]
    }
  }
}
```

### Via Smithery

```bash
npx -y @smithery/cli install noto-crm-mcp-server --client claude
```

## Tool Parameters

All tools accept:

| Parameter | Values | Default | Description |
|-----------|--------|---------|-------------|
| `response_format` | `markdown`, `json` | `markdown` | Output format |
| `lang` | `fr`, `en` | `fr` | Response language |

`noto_get_use_cases` also accepts:

| Parameter | Values | Default | Description |
|-----------|--------|---------|-------------|
| `persona` | `all`, `developer`, `consultant`, `copywriter`, `coach`, `community_manager` | `all` | Filter by freelance profession |

## Local Testing

```bash
# Build
npm run build

# Run MCP Inspector (web UI for testing all tools)
npm run inspect

# Type check
npm run typecheck
```

## Requirements

- Node.js 18+
- No API keys required
- No environment variables required

## About Noto CRM

[Noto](https://www.no-to.fr) is a minimalist CRM SaaS with a built-in AI agent, designed for French freelancers and solopreneurs.

- **Free plan**: 0€/month — 100 leads, 10 AI messages/month
- **Pro plan**: 19€/month — unlimited leads and AI, Google Calendar
- **Business plan**: 49€/month — 3 users, team collaboration

Sign up free (no credit card): https://www.no-to.fr/auth?tab=signup

## License

MIT
