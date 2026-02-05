# Private Downloads

This folder contains PDF files that customers can download after purchase.

## Security

Files in this folder are NOT publicly accessible. They can only be downloaded through the `/api/download/[productId]` endpoint after Stripe payment verification.

## Required Files

Place your product PDFs here with these exact filenames:

| Product | Filename |
|---------|----------|
| PE Recruiting Playbook | `PE-Recruiting-Guide-2026.pdf` |
| IB Technical Guide | `IB-Technical-Interview-Guide.pdf` |
| Networking & Cold Email Playbook | `Networking-Cold-Email-Playbook.pdf` |
| LBO Modeling Course | `LBO-Modeling-Course.pdf` |
| Stock Pitch Guide | `Stock-Pitch-Guide.pdf` |
| Resume Story Playbook | `Resume-Story-Playbook.pdf` |
| Restructuring Guide | `Restructuring-Guide.pdf` |
| REPE Modeling Guide | `REPE-Modeling-Guide.pdf` |
| Credit Direct Lending Playbook | `Credit-Direct-Lending-Playbook.pdf` |
| Superday Survival Guide | `Superday-Survival-Guide.pdf` |

## Adding New Products

To add a new downloadable product:

1. Add the product to `lib/data.ts`
2. Add the price mapping to `lib/stripe.ts`
3. Add the filename mapping in `app/api/download/[productId]/route.ts`
4. Place the PDF file in this folder with the matching filename

## Important

- This folder is gitignored - PDF files will NOT be committed to the repository
- Make sure to upload these files to your production server separately
- For Vercel: Consider using Vercel Blob Storage for production
