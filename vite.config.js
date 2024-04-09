import { resolve } from "node:path"

export default {
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                mariokart: resolve ("paginas/mario-kart.html") ,
                mortalkombat: resolve ("paginas/mortal-kombat.html") ,
                index: resolve ("index.html")
            }
        }
    }
}