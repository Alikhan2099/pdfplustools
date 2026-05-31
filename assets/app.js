const tools = [
  {
    "title": "Image to PDF",
    "description": "Convert JPG, PNG and WebP images into one PDF with custom page order.",
    "category": "PDF Tools",
    "icon": "🖼️",
    "url": "tools/image-to-pdf.html",
    "keywords": "image pdf jpg png webp converter"
  },
  {
    "title": "Merge PDF",
    "description": "Combine multiple PDF files into one document and control file order.",
    "category": "PDF Tools",
    "icon": "📎",
    "url": "tools/merge-pdf.html",
    "keywords": "pdf merge combine documents"
  },
  {
    "title": "Split PDF",
    "description": "Extract selected pages from a PDF document.",
    "category": "PDF Tools",
    "icon": "✂️",
    "url": "tools/split-pdf.html",
    "keywords": "pdf split extract pages"
  },
  {
    "title": "PDF Info",
    "description": "View PDF page count and basic file details.",
    "category": "PDF Tools",
    "icon": "📄",
    "url": "tools/pdf-info.html",
    "keywords": "pdf info page count"
  },
  {
    "title": "Compress PDF",
    "description": "Compress and optimize PDF files.",
    "category": "PDF Tools",
    "icon": "🗜️",
    "url": "tools/compress-pdf.html",
    "keywords": "compress pdf reduce size"
  },
  {
    "title": "PDF to JPG",
    "description": "Convert PDF pages into JPG images.",
    "category": "PDF Tools",
    "icon": "🖼️",
    "url": "tools/pdf-to-jpg.html",
    "keywords": "pdf to jpg image"
  },
  {
    "title": "PDF to Word",
    "description": "Extract PDF text into a Word-compatible document.",
    "category": "PDF Tools",
    "icon": "📝",
    "url": "tools/pdf-to-word.html",
    "keywords": "pdf to word doc"
  },
  {
    "title": "Sign PDF",
    "description": "Add typed or image signatures to PDF files online.",
    "category": "PDF Tools",
    "icon": "✍️",
    "url": "tools/sign-pdf.html",
    "keywords": "sign pdf online add signature to pdf"
  },
  {
    "title": "Unlock PDF",
    "description": "Try to rebuild accessible PDFs into an editable copy.",
    "category": "PDF Tools",
    "icon": "🔓",
    "url": "tools/unlock-pdf.html",
    "keywords": "unlock pdf online remove pdf restrictions"
  },
  {
    "title": "Remove Watermark from PDF",
    "description": "Cover visible watermark areas on PDFs you own or can edit.",
    "category": "PDF Tools",
    "icon": "🧽",
    "url": "tools/remove-watermark-pdf.html",
    "keywords": "remove watermark from pdf"
  },
  {
    "title": "Invoice Generator",
    "description": "Create a simple invoice and download it as PDF.",
    "category": "Business Tools",
    "icon": "🧾",
    "url": "tools/invoice-generator.html",
    "keywords": "invoice generator pdf"
  },
  {
    "title": "Bulk Invoice Extractor",
    "description": "Extract invoice information from PDFs and export to Excel CSV.",
    "category": "Business Tools",
    "icon": "📊",
    "url": "tools/bulk-invoice-extractor.html",
    "keywords": "bulk invoice extractor excel csv"
  },
  {
    "title": "Image Invoice Extractor",
    "description": "Bulk extract invoice fields from images and export to Excel CSV.",
    "category": "Business Tools",
    "icon": "📷",
    "url": "tools/image-invoice-extractor.html",
    "keywords": "image invoice extractor ocr excel"
  },
  {
    "title": "Improved Image Invoice Extractor",
    "description": "Enhanced OCR invoice extraction from images with editable CSV export.",
    "category": "Business Tools",
    "icon": "📷",
    "url": "tools/image-invoice-extractor-improved.html",
    "keywords": "improved invoice extractor ocr csv"
  },
  {
    "title": "Semi-Manual Invoice Extractor",
    "description": "Review invoice image and OCR text, confirm fields, then export to Excel CSV.",
    "category": "Business Tools",
    "icon": "🧾",
    "url": "tools/semi-manual-invoice-extractor.html",
    "keywords": "semi manual invoice extractor"
  },
  {
    "title": "Manual Image Invoice Entry",
    "description": "View invoice images, manually capture invoice fields and export to Excel CSV.",
    "category": "Business Tools",
    "icon": "✍️",
    "url": "tools/manual-image-invoice-entry.html",
    "keywords": "manual invoice entry excel"
  },
  {
    "title": "Image Background Remover",
    "description": "Remove image backgrounds with click-to-preview and transparent PNG download.",
    "category": "Image Tools",
    "icon": "🪄",
    "url": "tools/image-background-remover.html",
    "keywords": "background remover transparent png"
  },
  {
    "title": "Image Compressor",
    "description": "Reduce image file size directly in your browser.",
    "category": "Image Tools",
    "icon": "📉",
    "url": "tools/image-compressor.html",
    "keywords": "image compressor jpg png webp"
  },
  {
    "title": "Resize Image",
    "description": "Resize images by width and height.",
    "category": "Image Tools",
    "icon": "↔️",
    "url": "tools/resize-image.html",
    "keywords": "resize image width height"
  },
  {
    "title": "Images to GIF Maker",
    "description": "Create animated GIFs from JPG, PNG and WebP images.",
    "category": "GIF Tools",
    "icon": "🎞️",
    "url": "tools/images-to-gif.html",
    "keywords": "images to gif animated gif creator"
  },
  {
    "title": "GIF Frame Extractor",
    "description": "Extract frames from animated GIFs and download PNG images.",
    "category": "GIF Tools",
    "icon": "🧩",
    "url": "tools/gif-frame-extractor.html",
    "keywords": "gif frame extractor extract gif frames png"
  },
  {
    "title": "Sprite Sheet to GIF",
    "description": "Convert a sprite sheet image or GIF into an animated GIF.",
    "category": "GIF Tools",
    "icon": "🎮",
    "url": "tools/sprite-sheet-to-gif.html",
    "keywords": "sprite sheet to gif animated gif maker"
  },
  {
    "title": "GIF to Sprite Sheet",
    "description": "Convert an animated GIF into a PNG sprite sheet.",
    "category": "GIF Tools",
    "icon": "🧱",
    "url": "tools/gif-to-sprite-sheet.html",
    "keywords": "gif to sprite sheet png frames"
  },
  {
    "title": "Word Counter",
    "description": "Count words, characters, sentences, paragraphs and reading time.",
    "category": "Text & Content Tools",
    "icon": "🔤",
    "url": "tools/word-counter.html",
    "keywords": "word counter characters"
  },
  {
    "title": "Case Converter",
    "description": "Convert text to uppercase, lowercase, title case and sentence case.",
    "category": "Text & Content Tools",
    "icon": "Aa",
    "url": "tools/case-converter.html",
    "keywords": "case converter uppercase lowercase"
  },
  {
    "title": "YouTube Title Generator",
    "description": "Generate title ideas, hooks, hashtags and descriptions.",
    "category": "Text & Content Tools",
    "icon": "▶️",
    "url": "tools/youtube-title-generator.html",
    "keywords": "youtube title hashtag generator"
  },
  {
    "title": "Meta Tag Generator",
    "description": "Create SEO title, description and keyword meta tags.",
    "category": "Text & Content Tools",
    "icon": "🏷️",
    "url": "tools/meta-tag-generator.html",
    "keywords": "meta tag generator seo"
  },
  {
    "title": "Age Calculator",
    "description": "Calculate exact age from date of birth.",
    "category": "Calculators",
    "icon": "🎂",
    "url": "tools/age-calculator.html",
    "keywords": "age calculator"
  },
  {
    "title": "Loan / EMI Calculator",
    "description": "Calculate monthly loan payment, interest and total cost.",
    "category": "Calculators",
    "icon": "💳",
    "url": "tools/loan-calculator.html",
    "keywords": "loan emi calculator"
  },
  {
    "title": "Unit Converter",
    "description": "Convert length, weight, temperature and volume units.",
    "category": "Calculators",
    "icon": "📏",
    "url": "tools/unit-converter.html",
    "keywords": "unit converter"
  },
  {
    "title": "QR Code Generator",
    "description": "Create downloadable QR codes for links, text and more.",
    "category": "Utility Tools",
    "icon": "▦",
    "url": "tools/qr-code-generator.html",
    "keywords": "qr code generator"
  },
  {
    "title": "Password Generator",
    "description": "Generate strong passwords with custom settings.",
    "category": "Utility Tools",
    "icon": "🔐",
    "url": "tools/password-generator.html",
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
