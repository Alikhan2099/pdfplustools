const tools = [
  {
    "title": "Image to PDF",
    "description": "Convert JPG, PNG and WebP images into one PDF with custom page order.",
    "category": "PDF Tools",
    "icon": "🖼️",
    "url": "tools/image-to-pdf",
    "keywords": "image pdf jpg png webp converter"
  },
  {
    "title": "Merge PDF",
    "description": "Combine multiple PDF files into one document and control file order.",
    "category": "PDF Tools",
    "icon": "📎",
    "url": "tools/merge-pdf",
    "keywords": "pdf merge combine documents"
  },
  {
    "title": "Split PDF",
    "description": "Extract selected pages from a PDF document.",
    "category": "PDF Tools",
    "icon": "✂️",
    "url": "tools/split-pdf",
    "keywords": "pdf split extract pages"
  },
  {
    "title": "PDF Info",
    "description": "View PDF page count and basic file details.",
    "category": "PDF Tools",
    "icon": "📄",
    "url": "tools/pdf-info",
    "keywords": "pdf info page count"
  },
  {
    "title": "Compress PDF",
    "description": "Compress and optimize PDF files.",
    "category": "PDF Tools",
    "icon": "🗜️",
    "url": "tools/compress-pdf",
    "keywords": "compress pdf reduce size"
  },
  {
    "title": "PDF to JPG",
    "description": "Convert PDF pages into JPG images.",
    "category": "PDF Tools",
    "icon": "🖼️",
    "url": "tools/pdf-to-jpg",
    "keywords": "pdf to jpg image"
  },
  {
    "title": "PDF to Word",
    "description": "Extract PDF text into a Word-compatible document.",
    "category": "PDF Tools",
    "icon": "📝",
    "url": "tools/pdf-to-word",
    "keywords": "pdf to word doc"
  },
  {
    "title": "PDF to Excel",
    "description": "Extract selectable PDF text into an Excel spreadsheet.",
    "category": "PDF Tools",
    "icon": "📊",
    "url": "tools/pdf-to-excel",
    "keywords": "pdf to excel xlsx spreadsheet table extract"
  },
  {
    "title": "Sign PDF",
    "description": "Add typed or image signatures to PDF files online.",
    "category": "PDF Tools",
    "icon": "✍️",
    "url": "tools/sign-pdf",
    "keywords": "sign pdf online add signature to pdf"
  },
  {
    "title": "Unlock PDF",
    "description": "Try to rebuild accessible PDFs into an editable copy.",
    "category": "PDF Tools",
    "icon": "🔓",
    "url": "tools/unlock-pdf",
    "keywords": "unlock pdf online remove pdf restrictions"
  },
  {
    "title": "Remove Watermark from PDF",
    "description": "Cover visible watermark areas on PDFs you own or can edit.",
    "category": "PDF Tools",
    "icon": "🧽",
    "url": "tools/remove-watermark-pdf",
    "keywords": "remove watermark from pdf"
  },
  {
    "title": "Invoice Generator",
    "description": "Create a simple invoice and download it as PDF.",
    "category": "Business Tools",
    "icon": "🧾",
    "url": "tools/invoice-generator",
    "keywords": "invoice generator pdf"
  },
  {
    "title": "Bulk Invoice Extractor",
    "description": "Extract invoice information from PDFs and export to Excel CSV.",
    "category": "Business Tools",
    "icon": "📊",
    "url": "tools/bulk-invoice-extractor",
    "keywords": "bulk invoice extractor excel csv"
  },
  {
    "title": "Image Invoice Extractor",
    "description": "Bulk extract invoice fields from images and export to Excel CSV.",
    "category": "Business Tools",
    "icon": "📷",
    "url": "tools/image-invoice-extractor",
    "keywords": "image invoice extractor ocr excel"
  },
  {
    "title": "Improved Image Invoice Extractor",
    "description": "Enhanced OCR invoice extraction from images with editable CSV export.",
    "category": "Business Tools",
    "icon": "📷",
    "url": "tools/image-invoice-extractor-improved",
    "keywords": "improved invoice extractor ocr csv"
  },
  {
    "title": "Semi-Manual Invoice Extractor",
    "description": "Review invoice image and OCR text, confirm fields, then export to Excel CSV.",
    "category": "Business Tools",
    "icon": "🧾",
    "url": "tools/semi-manual-invoice-extractor",
    "keywords": "semi manual invoice extractor"
  },
  {
    "title": "Manual Image Invoice Entry",
    "description": "View invoice images, manually capture invoice fields and export to Excel CSV.",
    "category": "Business Tools",
    "icon": "✍️",
    "url": "tools/manual-image-invoice-entry",
    "keywords": "manual invoice entry excel"
  },
  {
    "title": "Image Background Remover",
    "description": "Remove image backgrounds with click-to-preview and transparent PNG download.",
    "category": "Image Tools",
    "icon": "🪄",
    "url": "tools/image-background-remover",
    "keywords": "background remover transparent png"
  },
  {
    "title": "Image Compressor",
    "description": "Reduce image file size directly in your browser.",
    "category": "Image Tools",
    "icon": "📉",
    "url": "tools/image-compressor",
    "keywords": "image compressor jpg png webp"
  },
  {
    "title": "Resize Image",
    "description": "Resize images by width and height.",
    "category": "Image Tools",
    "icon": "↔️",
    "url": "tools/resize-image",
    "keywords": "resize image width height"
  },
  {
    "title": "Images to GIF Maker",
    "description": "Create animated GIFs from JPG, PNG and WebP images.",
    "category": "GIF Tools",
    "icon": "🎞️",
    "url": "tools/images-to-gif",
    "keywords": "images to gif animated gif creator"
  },
  {
    "title": "GIF Frame Extractor",
    "description": "Extract frames from animated GIFs and download PNG images.",
    "category": "GIF Tools",
    "icon": "🧩",
    "url": "tools/gif-frame-extractor",
    "keywords": "gif frame extractor extract gif frames png"
  },
  {
    "title": "Sprite Sheet to GIF",
    "description": "Convert a sprite sheet image or GIF into an animated GIF.",
    "category": "GIF Tools",
    "icon": "🎮",
    "url": "tools/sprite-sheet-to-gif",
    "keywords": "sprite sheet to gif animated gif maker"
  },
  {
    "title": "GIF to Sprite Sheet",
    "description": "Convert an animated GIF into a PNG sprite sheet.",
    "category": "GIF Tools",
    "icon": "🧱",
    "url": "tools/gif-to-sprite-sheet",
    "keywords": "gif to sprite sheet png frames"
  },
  {
    "title": "Word Counter",
    "description": "Count words, characters, sentences, paragraphs and reading time.",
    "category": "Text & Content Tools",
    "icon": "🔤",
    "url": "tools/word-counter",
    "keywords": "word counter characters"
  },
  {
    "title": "Case Converter",
    "description": "Convert text to uppercase, lowercase, title case and sentence case.",
    "category": "Text & Content Tools",
    "icon": "Aa",
    "url": "tools/case-converter",
    "keywords": "case converter uppercase lowercase"
  },
  {
    "title": "YouTube Title Generator",
    "description": "Generate title ideas, hooks, hashtags and descriptions.",
    "category": "Text & Content Tools",
    "icon": "▶️",
    "url": "tools/youtube-title-generator",
    "keywords": "youtube title hashtag generator"
  },
  {
    "title": "Meta Tag Generator",
    "description": "Create SEO title, description and keyword meta tags.",
    "category": "Text & Content Tools",
    "icon": "🏷️",
    "url": "tools/meta-tag-generator",
    "keywords": "meta tag generator seo"
  },
  {
    "title": "Age Calculator",
    "description": "Calculate exact age from date of birth.",
    "category": "Calculators",
    "icon": "🎂",
    "url": "tools/age-calculator",
    "keywords": "age calculator"
  },
  {
    "title": "Loan / EMI Calculator",
    "description": "Calculate monthly loan payment, interest and total cost.",
    "category": "Calculators",
    "icon": "💳",
    "url": "tools/loan-calculator",
    "keywords": "loan emi calculator"
  },
  {
    "title": "Unit Converter",
    "description": "Convert length, weight, temperature and volume units.",
    "category": "Calculators",
    "icon": "📏",
    "url": "tools/unit-converter",
    "keywords": "unit converter"
  },
  {
    "title": "QR Code Generator",
    "description": "Create downloadable QR codes for links, text and more.",
    "category": "Utility Tools",
    "icon": "▦",
    "url": "tools/qr-code-generator",
    "keywords": "qr code generator"
  },
  {
    "title": "Password Generator",
    "description": "Generate strong passwords with custom settings.",
    "category": "Utility Tools",
    "icon": "🔐",
    "url": "tools/password-generator",
    "keywords": "password generator secure"
  }
];

function setupSearch() {
  const search = document.getElementById("toolSearch");
  if (!search) return;
  const sections = Array.from(document.querySelectorAll(".tool-section"));
  search.addEventListener("input", () => {
    const query = search.value.toLowerCase().trim();
    sections.forEach(section => {
      let visibleCount = 0;
      const cards = Array.from(section.querySelectorAll(".tool-card"));
      cards.forEach(card => {
        const match = !query || card.innerText.toLowerCase().includes(query);
        card.style.display = match ? "" : "none";
        if (match) visibleCount++;
      });
      section.style.display = visibleCount ? "" : "none";
    });
  });
}

document.addEventListener("DOMContentLoaded", setupSearch);



/* Local file testing helper.
   On the live Cloudflare site, clean URLs like /tools/pdf-to-excel work.
   When opened locally from file://, Windows/Chrome needs the physical .html file.
   This helper only runs locally and converts clean internal clicks to .html. */
(function () {
  if (window.location.protocol !== "file:") return;

  function shouldConvertLocalHref(href) {
    if (!href) return false;
    if (href.startsWith("#")) return false;
    if (/^(https?:|mailto:|tel:|data:|javascript:|\/\/)/i.test(href)) return false;

    var parts = href.split("#");
    var beforeHash = parts[0];
    var queryParts = beforeHash.split("?");
    var path = queryParts[0];

    if (!path) return false;
    if (path === "." || path === "./" || path === ".." || path === "../") return false;
    if (path.endsWith("/")) return false;
    if (/\.[a-z0-9]+$/i.test(path)) return false;

    return true;
  }

  function convertLocalHref(href) {
    var hash = "";
    var hashIndex = href.indexOf("#");
    if (hashIndex !== -1) {
      hash = href.slice(hashIndex);
      href = href.slice(0, hashIndex);
    }

    var query = "";
    var queryIndex = href.indexOf("?");
    if (queryIndex !== -1) {
      query = href.slice(queryIndex);
      href = href.slice(0, queryIndex);
    }

    return href + ".html" + query + hash;
  }

  document.addEventListener("click", function (event) {
    var anchor = event.target.closest && event.target.closest("a[href]");
    if (!anchor) return;

    var href = anchor.getAttribute("href");
    if (!shouldConvertLocalHref(href)) return;

    event.preventDefault();
    window.location.href = convertLocalHref(href);
  });
})();

