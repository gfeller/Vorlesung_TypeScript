// ── Abstrakte Komponente ──────────────────────────────────────
abstract class FileSystemEntry {
    constructor(public name: string) { }
    abstract getSize(): number;
    abstract display(indent?: string): void;
}

// ── Leaf ─────────────────────────────────────────────────────
class File extends FileSystemEntry {
    constructor(name: string, private size: number) {
        super(name);
    }
    getSize(): number { return this.size; }
    display(indent = ""): void {
        console.log(`${indent}- ${this.name} (${this.size} KB)`);
    }
}

// ── Composite ─────────────────────────────────────────────────
class Folder extends FileSystemEntry {
    private children: FileSystemEntry[] = [];

    add(component: FileSystemEntry): void {
        this.children.push(component);
    }

    getSize(): number {
        return this.children.reduce((sum, c) => sum + c.getSize(), 0);
    }
    display(indent = ""): void {
        console.log(`${indent}+ ${this.name}/`);
        this.children.forEach(c => c.display(indent + "  "));
    }
}

// ── Instanziierung & Array ────────────────────────────────────
const indexHtml = new File("index.html", 20);

const iconPng = new File("icon.png", 15);
const logoPng = new File("logo.png", 80);
const introPng = new File("intro.png", 120);
const indexJs = new File("index.js", 60);
const trackingJs = new File("tracking.js", 40);

const images = new Folder("images");
images.add(logoPng);
images.add(introPng);

const js = new Folder("js");
js.add(indexJs);
js.add(trackingJs);

const assets = new Folder("assets");
assets.add(iconPng);
assets.add(images);
assets.add(js);

const root = new Folder("root");
root.add(indexHtml);
root.add(assets);

root.display();
// + root/
//   - index.html (20 KB)
//   + assets/
//     - icon.png (15 KB)
//     + images/
//       - logo.png (80 KB)
//       - intro.png (120 KB)
//     + js/
//       - index.js (60 KB)
//       - tracking.js (40 KB)

console.log("Gesamtgrösse root:", root.getSize(), "KB"); // 335 KB
