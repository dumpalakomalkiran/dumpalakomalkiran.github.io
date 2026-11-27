# Komal Kiran Dumpala | Frontend Engineering Portfolio

[View the live portfolio](https://dumpalakomalkiran.github.io/) · [Download my résumé (PDF)](https://dumpalakomalkiran.github.io/assets/resume.pdf)

I’m a frontend engineer based in Hyderabad, India. My work focuses on Angular, TypeScript, and RxJS for enterprise insurance applications. The portfolio includes case studies from Infosys and Honeybee Tech Solutions, freelance client work, and personal projects including FreelanceLedger and StreamPilot AI.

## Preview locally

This repository contains the production build. To preview it on Windows with Git and Python 3 installed, run the following in PowerShell.

```powershell
git clone https://github.com/dumpalakomalkiran/dumpalakomalkiran.github.io.git
cd dumpalakomalkiran.github.io
py -m http.server 8000 --bind 127.0.0.1
```

Open [the local portfolio](http://127.0.0.1:8000/). Press Ctrl+C in PowerShell to stop the server.

## Publish an update

- **Résumé** — Replace `assets/resume.pdf` and commit the file to `main`. Keeping the filename preserves the download link.
- **Content and design** — Edit the Angular source project and rebuild it for the root path (`/`). Copy the contents of `dist/public/` into the root of this repository, including the generated HTML, JavaScript, CSS, and assets. Keep `README.md` and the license notices.
- **Deployment** — GitHub Pages serves the site from the root of `main`. After committing an update, check the [deployment run](https://github.com/dumpalakomalkiran/dumpalakomalkiran.github.io/actions), then open the live site and test the changed content.

The published HTML includes a `noindex` directive. Visitors can open the site by its public URL, and the directive asks search engines to omit it from results.
