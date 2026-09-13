import {
  Titulo,
  Boton,
  Parrafo,
  Imagen,
  Carrusel,
  Grafica,
  ListaFiltro,
  ListaSimple,
  Documento,
  BarraProgreso,
} from './index.js'

/**
 * Reproduce las 20 "hermanas" del kit original (A y B por categoria)
 * usando los mismos 10 componentes con props distintas, para
 * comparar 1:1 contra los archivos .html de src/*.
 */
export function Ejemplo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40, padding: 40 }}>
      {/* Titulos */}
      <Titulo eyebrow="Proyecto RECK" heading="Simulacion de la casilla" />
      <Titulo as="h2" eyebrow="Resultados" heading="Tiempos de espera por hora" size="26px" eyebrowSize="11px" />

      {/* Botones */}
      <div style={{ display: 'flex', gap: 16 }}>
        <Boton icon="▶" label="Iniciar simulacion" />
        <Boton label="Descargar reporte" padY="8px" padX="16px" fontSize="14px" />
      </div>

      {/* Parrafos */}
      <Parrafo label="Sobre el modelo">
        La simulacion representa una casilla del INE con agentes que llegan,
        forman fila y son atendidos. Cada corrida permite ajustar el numero
        de funcionarios y observar el efecto sobre el tiempo de espera.
      </Parrafo>
      <Parrafo label="Nota" width="360px" size="14px">
        El evento de lluvia reduce la velocidad de llegada de votantes en un
        porcentaje configurable durante la ventana de tiempo seleccionada.
      </Parrafo>

      {/* Imagenes */}
      <div style={{ display: 'flex', gap: 16 }}>
        <Imagen placeholder="imagen 1200x675" caption="Mapa de la casilla simulada" />
        <Imagen placeholder="imagen 400x400" caption="Icono del agente votante" width="220px" aspect="1/1" />
      </div>

      {/* Carruseles */}
      <Carrusel
        items={[
          { title: 'Corrida 1', description: '3 funcionarios, sin lluvia' },
          { title: 'Corrida 2', description: '3 funcionarios, con lluvia' },
          { title: 'Corrida 3', description: '5 funcionarios, sin lluvia' },
          { title: 'Corrida 4', description: '5 funcionarios, con lluvia' },
        ]}
      />
      <Carrusel
        cardWidth="260px"
        gap="20px"
        items={[
          { title: 'Agente: votante', description: 'Llega, forma fila, vota, sale.' },
          { title: 'Agente: funcionario', description: 'Atiende la fila a ritmo fijo.' },
          { title: 'Evento: lluvia', description: 'Reduce la llegada de votantes.' },
        ]}
      />

      {/* Graficas */}
      <Grafica
        title="Tiempo de espera promedio (min)"
        data={[
          { value: 40, display: '8', label: '9h' },
          { value: 65, display: '13', label: '11h' },
          { value: 90, display: '18', label: '13h' },
          { value: 55, display: '11', label: '15h' },
          { value: 30, display: '6', label: '17h' },
        ]}
      />
      <Grafica
        title="Votantes atendidos por funcionario"
        height="110px"
        barWidth="44px"
        data={[
          { value: 80, display: '120', label: 'F1' },
          { value: 60, display: '90', label: 'F2' },
          { value: 95, display: '140', label: 'F3' },
        ]}
      />

      {/* Listas con filtro */}
      <ListaFiltro
        filters={[
          { id: 'alerta', label: 'Alerta' },
          { id: 'ok', label: 'Ok' },
        ]}
        items={[
          { label: 'Fila 1', tag: 'ALERTA', tags: ['alerta'] },
          { label: 'Fila 2', tag: 'OK', tags: ['ok'] },
          { label: 'Fila 3', tag: 'OK', tags: ['ok'] },
          { label: 'Fila 4', tag: 'ALERTA', tags: ['alerta'] },
        ]}
      />
      <ListaFiltro
        width="min(320px,90vw)"
        filters={[
          { id: 'manana', label: 'Manana' },
          { id: 'tarde', label: 'Tarde' },
        ]}
        items={[
          { label: 'Corrida 09:00', tag: 'AM', tags: ['manana'] },
          { label: 'Corrida 15:00', tag: 'PM', tags: ['tarde'] },
          { label: 'Corrida 17:00', tag: 'PM', tags: ['tarde'] },
        ]}
      />

      {/* Listas sin filtro */}
      <ListaSimple
        items={[
          { label: 'Instalacion de la casilla', meta: '08:00' },
          { label: 'Apertura de votacion', meta: '08:15' },
          { label: 'Hora pico', meta: '12:00' },
          { label: 'Cierre de votacion', meta: '18:00' },
        ]}
      />
      <ListaSimple
        width="min(260px,90vw)"
        items={[
          { label: 'Mesa directiva' },
          { label: 'Representantes de partido' },
          { label: 'Observadores electorales' },
        ]}
      />

      {/* Documentos */}
      <div style={{ display: 'flex', gap: 16 }}>
        <Documento icon="PDF" name="reporte_simulacion.pdf" info="1.2 MB · hoy" />
        <Documento icon="CSV" name="log_agentes.csv" info="340 KB" actionLabel="⬇" width="min(280px,90vw)" />
      </div>

      {/* Barras de progreso */}
      <BarraProgreso label="Votantes atendidos" value={72} />
      <BarraProgreso label="Corridas completadas" value={35} height="6px" width="min(220px,90vw)" />
    </div>
  )
}
