# downyou-back (archivado)

> [!WARNING]
> **Este proyecto ya no se mantiene.** Quedó en un `POST /convert` de 32 líneas sobre
> `ytdl-core`, una librería que hoy está discontinuada y que se rompía cada vez que YouTube
> cambiaba algo. Lo que buscaba hacer sigue vivo, en dos piezas mejores:
>
> | Si querés… | Andá a |
> |---|---|
> | **una app** donde pegás un enlace y bajás el video o su audio | **[Upflow](https://github.com/santiquiroz/upflow)** — interfaz web, corre en tu máquina, y además reescala, transcribe, separa pistas y más |
> | **una librería** para descargar desde tu propio código Python | **[fetchflow](https://github.com/santiquiroz/fetchflow)** — yt-dlp embebible, con progreso tipado y cancelación |

## Qué era esto

DownYou: un descargador de YouTube a MP3 o a otros formatos, pensado para usuarios de la
organización SURU. Este repo era el backend — un Express con un endpoint que validaba la URL
y devolvía el stream del video.

## Por qué no siguió

El problema real de descargar de YouTube no es el servidor HTTP alrededor: es **la extracción**,
que se rompe sola cuando el sitio cambia. Mantener eso a mano no tiene sentido cuando
[yt-dlp](https://github.com/yt-dlp/yt-dlp) ya lo resuelve con 1751 extractores y una comunidad
detrás. `fetchflow` nació justamente de aceptar eso: no reimplementa la extracción, resuelve
todo lo que hay **entre** yt-dlp y una app que lo usa sin sorpresas.

El código queda acá como estaba, por si a alguien le sirve de referencia.
