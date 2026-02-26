# AI Digital Twin — Arnaud Demes

Live at **[arnauddemesdigitaltwin.com](https://arnauddemesdigitaltwin.com/)**

An AI-powered digital twin that represents me in conversation — built and deployed as part of the **AI Engineer Production Track: Deploy LLMs & Agents at Scale** course by [Ed Donner](https://edwarddonner.com/).

---

## What it is

A conversational AI that answers questions on my behalf, with memory, personality, and professional cloud infrastructure behind it.

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | Next.js (App Router), React, Tailwind CSS |
| Backend | FastAPI (Python) |
| AI | Claude (Anthropic) |
| Infrastructure | AWS Lambda, Terraform |
| Deployment | AWS, Vercel |

## Project structure

```
digitaltwin/
├── frontend/        # Next.js chat interface
├── backend/         # FastAPI + Lambda handler
├── terraform/       # AWS infrastructure as code
├── scripts/         # Deployment helpers
└── project-guides/  # Course day-by-day guides (days 1–5)
```

## Course context

This project was built over 5 days as the Week 2 assignment of Ed Donner's **AI Engineer Production Track**, covering:

- Building chat interfaces with Next.js App Router
- FastAPI backends for LLM conversations
- Conversation memory and context management
- AWS Lambda deployment
- Infrastructure as code with Terraform

---

Built by [Arnaud Demes](https://arnauddemesdigitaltwin.com/)
