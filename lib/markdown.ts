import { Marked, type Tokens, type RendererObject } from "marked"

// Custom renderer for styled blog output
const renderer: RendererObject = {
  heading({ tokens, depth }: Tokens.Heading) {
    const text = this.parser.parseInline(tokens)
    if (depth === 2) {
      return `<h2 class="text-2xl font-bold text-charcoal mt-12 mb-4">${text}</h2>`
    }
    if (depth === 3) {
      return `<h3 class="text-xl font-semibold text-charcoal mt-8 mb-3">${text}</h3>`
    }
    if (depth === 4) {
      return `<h4 class="text-lg font-semibold text-charcoal mt-6 mb-2">${text}</h4>`
    }
    return `<h${depth} class="font-bold text-charcoal mt-6 mb-2">${text}</h${depth}>`
  },

  paragraph({ tokens }: Tokens.Paragraph) {
    return `<p class="text-charcoal/80 leading-relaxed mb-4">${this.parser.parseInline(tokens)}</p>`
  },

  strong({ tokens }: Tokens.Strong) {
    return `<strong class="text-charcoal font-semibold">${this.parser.parseInline(tokens)}</strong>`
  },

  em({ tokens }: Tokens.Em) {
    return `<em>${this.parser.parseInline(tokens)}</em>`
  },

  link({ href, tokens }: Tokens.Link) {
    const isExternal = href.startsWith("http")
    const attrs = isExternal ? ' target="_blank" rel="noopener noreferrer"' : ""
    return `<a href="${href}" class="text-gold hover:text-navy underline transition-colors"${attrs}>${this.parser.parseInline(tokens)}</a>`
  },

  list({ ordered, items }: Tokens.List) {
    const body = items.map((item) => this.listitem(item)).join("")
    if (ordered) {
      return `<ol class="list-decimal list-inside space-y-2 my-4 ml-4 text-charcoal/80">${body}</ol>`
    }
    return `<ul class="list-disc list-inside space-y-2 my-4 ml-4 text-charcoal/80">${body}</ul>`
  },

  listitem(item: Tokens.ListItem) {
    return `<li class="text-charcoal/80 leading-relaxed">${this.parser.parse(item.tokens)}</li>`
  },

  blockquote({ tokens }: Tokens.Blockquote) {
    return `<blockquote class="pl-4 border-l-4 border-gold bg-gold/5 py-3 pr-4 rounded-r-lg text-charcoal/80 italic my-6">${this.parser.parse(tokens)}</blockquote>`
  },

  hr() {
    return `<hr class="my-10 border-gold/30" />`
  },

  table({ header, align, rows }: Tokens.Table) {
    const headerCells = header.map((cell, i) => {
      const a = align[i]
      const alignClass = a ? ` text-${a}` : " text-left"
      return `<th class="px-3 py-2 text-xs font-semibold text-navy bg-navy/5 border-b border-border${alignClass}">${this.parser.parseInline(cell.tokens)}</th>`
    }).join("")

    const bodyRows = rows.map((row) => {
      const cells = row.map((cell, i) => {
        const a = align[i]
        const alignClass = a ? ` text-${a}` : " text-left"
        return `<td class="px-3 py-2 text-xs text-charcoal/70 border-b border-border/50${alignClass}">${this.parser.parseInline(cell.tokens)}</td>`
      }).join("")
      return `<tr>${cells}</tr>`
    }).join("")

    return `<div class="my-6 overflow-x-auto rounded-lg border border-border"><table class="w-full"><thead><tr>${headerCells}</tr></thead><tbody>${bodyRows}</tbody></table></div>`
  },

  code({ text }: Tokens.Code) {
    const escaped = text.replace(/</g, "&lt;").replace(/>/g, "&gt;")
    return `<pre class="my-6 rounded-lg bg-charcoal/5 border border-border p-4 overflow-x-auto"><code class="text-sm text-charcoal/80 font-mono">${escaped}</code></pre>`
  },

  codespan({ text }: Tokens.Codespan) {
    return `<code class="bg-charcoal/5 text-charcoal/80 px-1.5 py-0.5 rounded text-sm font-mono">${text}</code>`
  },

  image({ href, title, text }: Tokens.Image) {
    const titleAttr = title ? ` title="${title}"` : ""
    return `<img src="${href}" alt="${text}"${titleAttr} class="rounded-lg my-6 max-w-full" loading="lazy" />`
  },
}

// Create a dedicated marked instance with our renderer
const blogMarked = new Marked({ renderer, gfm: true, breaks: false })

/**
 * Convert markdown content to styled HTML for blog posts
 */
export function renderMarkdown(content: string): string {
  return blogMarked.parse(content) as string
}
