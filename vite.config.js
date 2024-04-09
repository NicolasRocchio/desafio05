import { resolve } from "path"

export default {
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                mariokart: resolve ("pages/mariokart.html") ,
                mortalkombat: resolve ("pages/mortalkombat.html") ,
                index: resolve ("index.html")
            }
        }
    }
}