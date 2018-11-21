module.exports = context => {
  const { numericId, totalFiles, content } = context
  const prevNumericId = numericId > 1 ? numericId - 1 : null
  const nextNumericId = numericId < totalFiles ? numericId + 1 : null
  const prev = prevNumericId ? `<a id="leftArrow" href="${prevNumericId}.html" class="arrow">◀</a>` : ''
  const next = nextNumericId ? `<a id="rightArrow" href="${nextNumericId}.html" class="arrow">▶</a>` : ''
  return `<!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8" />
    <title>Inventaire WikiCite 2018 - ${numericId}/${totalFiles}</title>
    <link rel="stylesheet" href="../style.css">
  </head>
  <body>
    <main id="page-${numericId}">${content}</main>
    <div id="nav">
      ${prev}
      <div id="progression">${numericId}/${totalFiles}</div>
      ${next}
    </div>
    <script src="../index.js" />
  </body>
  </html>`
}
