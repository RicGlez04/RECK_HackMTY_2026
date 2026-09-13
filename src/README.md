# Elementos UI modulares — RECK

Kit de 10 categorías de componentes, con **2 archivos HTML por categoría**
(20 en total) que sirven como plantilla base para el proyecto. Cada par es
un conjunto de "hermanas": dos variantes reales del mismo componente que
demuestran qué se puede cambiar y qué no.

## Estructura de carpeta

```
elementos-ui/
├── tokens.css              ← variables de color/tipografía/espaciado compartidas
├── 01-titulo-a.html        ├─ Títulos
├── 02-titulo-b.html        ┘
├── 03-boton-a.html         ├─ Botones
├── 04-boton-b.html         ┘
├── 05-parrafo-a.html       ├─ Espacios para párrafos
├── 06-parrafo-b.html       ┘
├── 07-imagen-a.html        ├─ Espacios para imágenes
├── 08-imagen-b.html        ┘
├── 09-carrusel-a.html      ├─ Contenedores con deslizables
├── 10-carrusel-b.html      ┘
├── 11-grafica-a.html       ├─ Gráficas
├── 12-grafica-b.html       ┘
├── 13-lista-filtro-a.html  ├─ Listas con filtros
├── 14-lista-filtro-b.html  ┘
├── 15-lista-simple-a.html  ├─ Listas sin filtros
├── 16-lista-simple-b.html  ┘
├── 17-documento-a.html     ├─ Espacios para documentos
├── 18-documento-b.html     ┘
├── 19-barra-progreso-a.html├─ Barras que se van llenando
└── 20-barra-progreso-b.html┘
```

Abre cualquier archivo directamente en el navegador para verlo aislado
(la etiqueta gris en la esquina indica categoría y hermana).

## Los 4 rasgos fijos

Cada componente tiene 4 rasgos que **no cambian** entre hermanas y que
tampoco deberías cambiar al crear variaciones nuevas — son la identidad
del componente:

1. **Color** — siempre tomado de `tokens.css` (`var(--accent)`,
   `var(--text)`, `var(--border)`, etc.), nunca un valor suelto.
2. **Forma** — la geometría/composición visual (pastilla, tarjeta,
   barra, recuadro con relación de aspecto...).
3. **Propósito** — la función que cumple en la interfaz.
4. **Estructura** — el esqueleto de etiquetas/clases (p. ej.
   `section.rk-slider > div.rk-slider__track + div.rk-slider__nav`).

Cada archivo documenta sus 4 rasgos en un comentario al inicio del
`<style>`, a modo de ficha técnica.

## Lo que sí cambia entre hermanas (y en variaciones nuevas)

- **Proporciones** — cada componente expone variables CSS propias
  (`--rk-title-size`, `--rk-btn-pad-x`, `--rk-chart-height`,
  `--rk-slider-card-w`, etc.) que se pueden sobreescribir con un
  `style="--variable:valor"` en el elemento raíz, sin tocar el CSS.
- **Contenido** — todo lo marcado con `data-slot="..."` es
  intercambiable: textos, número de tarjetas/ítems/barras, iconos,
  imágenes. Debe seguir cumpliendo el propósito del componente (p. ej.
  el slot `data-slot="label"` de una lista siempre espera una etiqueta
  corta, no un párrafo).

## Cómo programar una nueva "hermana"

1. Duplica el archivo `-a.html` o `-b.html` de la categoría que
   necesitas.
2. **No toques** las reglas dentro de `.rk-*{...}` en el `<style>` —
   ahí vive Color, Forma, Propósito y Estructura.
3. Ajusta las proporciones agregando/editando el atributo
   `style="--rk-...:valor"` en la etiqueta raíz del componente.
4. Reemplaza el contenido dentro de los `data-slot="..."`.
5. Actualiza la ficha del comentario (`Hermana: C`, etc.) para llevar
   el registro de la variante.

Así cualquier variación nueva queda garantizada como parte de la misma
familia visual, sin duplicar lógica de estilos.

## `tokens.css`

Contiene únicamente variables (colores claros/oscuros, tipografía,
escala de espaciado y radios), tomadas de `src/index.css` del proyecto
RECK, más una clase `.rk-preview` usada solo para centrar el componente
al abrir el archivo suelto (se puede ignorar al integrar los
componentes a la app real).
