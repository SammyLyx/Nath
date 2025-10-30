/**
 * Archivo: interactividad.js (Completo y Final)
 * * * Incluye:
 * - 25 contenidos (versículos y frases).
 * - Optimización de rendimiento (animación CSS y carga diferida de imágenes).
 * - Lógica de inicio de música con el primer clic del usuario.
 * - Ajuste de posición para que todos los girasoles sean visibles.
 * - MODIFICACIÓN CLAVE: Lógica para 24 pétalos en cada girasol.
 * - Ajuste para mover el girasol visitado al fondo (z-index y opacidad).
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // -----------------------------------------------------
    // 1. ESTRUCTURA DE CONTENIDO (25 Frases Inspiradoras y Fotos)
    // -----------------------------------------------------

    const contenidos = [
        { 
            titulo: "Fuerza para los Desafíos", 
            descripcion: "Cuando sientas que la carga es demasiado pesada, recuerda esta promesa. No temas ni te desanimes, porque Él es tu Dios y te sostiene con Su mano victoriosa. ¡Yo creo en ti!", 
            referencia: "Isaías 41:10",
            foto: './imagenes/foto1.jpg' 
        },
        { 
            titulo: "El Descanso en la Tormenta", 
            descripcion: "Dios es tu refugio seguro en medio del caos. Que este nuevo ciclo te recuerde que, aunque todo se agite, Él es tu pronto auxilio. ¡Pon tu confianza en Él siempre!", 
            referencia: "Salmo 46:1",
            foto: './imagenes/foto2.jpg' 
        },
        { 
            titulo: "Planes de Bienestar", 
            descripcion: "Que la certeza de que Dios tiene planes perfectos para tu vida llene tu corazón de paz y emoción. ¡Un futuro lleno de esperanza te espera!", 
            referencia: "Jeremías 29:11",
            foto: './imagenes/foto3.jpg' 
        },
        { 
            titulo: "El Poder de la Fe", 
            descripcion: "La perseverancia forja el carácter. Mira tus luchas pasadas como escalones. ¡Tu entereza es prueba de que tienes una esperanza inquebrantable!", 
            referencia: "Romanos 5:3-4",
            foto: './imagenes/foto4.jpg' 
        },
        { 
            titulo: "La Renovación Diaria", 
            descripcion: "No te canses ni te fatigues, tu fuerza no es humana. Espera en Él, y volarás alto como las águilas. ¡Te deseo un año lleno de energía y logros!", 
            referencia: "Isaías 40:31",
            foto: './imagenes/foto5.jpg' 
        },
        
        // DEDICATORIAS SOBRE EL AMOR Y LA PAZ
        { 
            titulo: "Paz que Tranquiliza", 
            descripcion: "Deja de lado la ansiedad. En lugar de preocuparte, ora. La paz de Dios es un regalo que cuida tu mente y tu corazón. ¡Que hoy sea un día tranquilo!", 
            referencia: "Filipenses 4:6-7",
            foto: './imagenes/foto6.jpg' 
        },
        { 
            titulo: "El Mayor de los Tesoros", 
            descripcion: "Mientras caminas, recuerda los pilares: Fe para lo que no ves, Esperanza en el futuro. Pero el motor de tu vida debe ser siempre el amor. ¡Ámalo todo!", 
            referencia: "1 Corintios 13:13",
            foto: './imagenes/foto7.jpg' 
        },
        { 
            titulo: "Una Nueva Creación", 
            descripcion: "Celebra este día como un nuevo comienzo. Lo viejo quedó atrás. En Él, has sido hecha nueva, con un propósito fresco y sorprendente. ¡A disfrutar la vida abundante!", 
            referencia: "2 Corintios 5:17",
            foto: './imagenes/foto8.jpg' 
        },
        {
            titulo: "La Guía en tu Camino",
            descripcion: "En la oscuridad o en la incertidumbre, Su Palabra es la brújula que necesitas. Que ella ilumine tus pasos y te dé claridad en cada decisión.",
            referencia: "Salmos 119:105",
            foto: './imagenes/foto9.jpg'
        },
        {
            titulo: "Enfocada en lo Correcto",
            descripcion: "Aun cuando las cosas no salgan como esperabas, confía en Su soberanía. ¡Todas las cosas obran para tu bien porque Él te ama y te ha llamado con un propósito!",
            referencia: "Romanos 8:28",
            foto: './imagenes/foto10.jpg'
        },
        
        // Versículos adicionales para completar los 25 (mezclando nuevos y algunos anteriores)
        { 
            titulo: "Ánimo y Valentía", 
            descripcion: "Sé fuerte y valiente. No tengas miedo ni te desanimes, porque el Señor tu Dios estará contigo dondequiera que vayas. ¡Feliz día!", 
            referencia: "Josué 1:9",
            foto: './imagenes/foto11.jpg' 
        },
        { 
            titulo: "Bendiciones Diarias", 
            descripcion: "El Señor te bendiga y te guarde; el Señor haga resplandecer su rostro sobre ti y te dé paz. ¡Que su favor te acompañe!", 
            referencia: "Números 6:24-26",
            foto: './imagenes/foto12.jpg' 
        },
        { 
            titulo: "Esperanza Firme", 
            descripcion: "Que el Dios de la esperanza los llene de toda alegría y paz a ustedes que creen en él, para que rebosen de esperanza por el poder del Espíritu Santo.", 
            referencia: "Romanos 15:13",
            foto: './imagenes/foto13.jpg' 
        },
        { 
            titulo: "Sabiduría Divina", 
            descripcion: "Si a alguno de ustedes le falta sabiduría, pídasela a Dios, quien da a todos generosamente sin menospreciar a nadie, y le será dada.", 
            referencia: "Santiago 1:5",
            foto: './imagenes/foto14.jpg' 
        },
        { 
            titulo: "Vida Abundante", 
            descripcion: "Yo he venido para que tengan vida, y la tengan en abundancia. Que este nuevo año sea de plenitud para ti.", 
            referencia: "Juan 10:10",
            foto: './imagenes/foto15.jpg' 
        },
        { 
            titulo: "Amor Incondicional", 
            descripcion: "Sobre todo, ámense los unos a los otros profundamente, porque el amor cubre multitud de pecados. Que el amor te rodee siempre.", 
            referencia: "1 Pedro 4:8",
            foto: './imagenes/foto16.jpg' 
        },
        { 
            titulo: "Gratitud y Alegría", 
            descripcion: "Den gracias en toda situación, porque esta es la voluntad de Dios para ustedes en Cristo Jesús. Que cada día sea de agradecimiento.", 
            referencia: "1 Tesalonicenses 5:18",
            foto: './imagenes/foto17.jpg' 
        },
        { 
            titulo: "Un Corazón Fiel", 
            descripcion: "El que es fiel en lo muy poco, también es fiel en lo mucho. Que tu fidelidad te guíe y sea tu mayor virtud.", 
            referencia: "Lucas 16:10",
            foto: './imagenes/foto18.jpg' 
        },
        { 
            titulo: "Confianza Plena", 
            descripcion: "Confía en el Señor de todo corazón, y no en tu propia inteligencia. Reconócelo en todos tus caminos, y él allanará tus sendas.", 
            referencia: "Proverbios 3:5-6",
            foto: './imagenes/foto19.jpg' 
        },
        { 
            titulo: "Paciencia y Esperanza", 
            descripcion: "Mantengamos firme la esperanza que profesamos, porque fiel es el que hizo la promesa. ¡Tu espera será recompensada!", 
            referencia: "Hebreos 10:23",
            foto: './imagenes/foto20.jpg' 
        },
        { 
            titulo: "Gozo Duradero", 
            descripcion: "Aún si las circunstancias externas fallan, tu alegría no depende de ellas. Tu gozo se encuentra en el Dios de tu salvación.", 
            referencia: "Habacuc 3:17-18",
            foto: './imagenes/foto21.jpg' 
        },
        { 
            titulo: "Protección Divina", 
            descripcion: "El Señor es mi luz y mi salvación; ¿a quién temeré? Él es la fortaleza de mi vida. ¡Que Su protección te acompañe siempre!", 
            referencia: "Salmos 27:1",
            foto: './imagenes/foto22.jpg' 
        },
        { 
            titulo: "Generosidad y Bendición", 
            descripcion: "Dios ama al dador alegre. Que tu corazón sea siempre generoso y que tu alegría al dar sea tu mayor bendición.", 
            referencia: "2 Corintios 9:7",
            foto: './imagenes/foto23.jpg' 
        },
        { 
            titulo: "Fe Inquebrantable", 
            descripcion: "La fe es la certeza de lo que esperas, la convicción de lo que aún no ves. Que tu fe sea la roca inmovible de tu camino.", 
            referencia: "Hebreos 11:1",
            foto: './imagenes/foto24.jpg' 
        },
        { 
            titulo: "Descanso para el Alma", 
            descripcion: "Si te sientes cansada y agobiada, acércate a Jesús. Él promete darte descanso para tu alma. Su yugo es fácil y ligera su carga.", 
            referencia: "Mateo 11:28",
            foto: './imagenes/foto25.jpg' 
        },
    ];
    
    const contenedor = document.querySelector('.jardin-contenedor');
    const NUM_GIRASOLES = 25; 

    // -----------------------------------------------------
    // REFERENCIAS Y ESTADO GLOBAL
    // -----------------------------------------------------

    const visorGlobal = document.getElementById('visor-global');
    const cerrarBoton = document.getElementById('cerrar-visor');
    const visorImagen = document.getElementById('visor-imagen');
    const visorTitulo = document.getElementById('visor-titulo');
    const visorDescripcion = document.getElementById('visor-descripcion');
    const visorReferencia = document.getElementById('visor-referencia');
    
    const abrirVideoBtn = document.getElementById('abrir-video-btn');
    const visorVideoGlobal = document.getElementById('visor-video-global');
    const cerrarVideoBoton = document.getElementById('cerrar-visor-video');
    const volverAlJardinBoton = document.getElementById('volver-al-jardin');
    const videoPlayer = document.getElementById('video-player'); 
    
    const musicaFondo = document.getElementById('musica-fondo');
    let musicaIniciada = false; 
    
    // Almacenará la referencia del girasol actualmente abierto
    let girasolActivo = null; 

    
    // -----------------------------------------------------
    // 2. FUNCIÓN DE CREACIÓN Y ESTRUCTURA DEL GIRASOL 
    // -----------------------------------------------------

    /**
     * Crea un elemento HTML que representa un girasol.
     */
    function crearGirasol(itemContenido) {
        const girasol = document.createElement('div');
        girasol.classList.add('girasol', 'girasol-animado-css'); 
        
        // Almacenamos los datos en el dataset para la carga diferida
        girasol.dataset.titulo = itemContenido.titulo;
        girasol.dataset.descripcion = itemContenido.descripcion; 
        girasol.dataset.referencia = itemContenido.referencia;
        girasol.dataset.foto = itemContenido.foto; 
        
        // Crear el tallo
        const tallo = document.createElement('div');
        tallo.classList.add('tallo');
        girasol.appendChild(tallo);

        // Crear el centro (el círculo base de la flor)
        const centro = document.createElement('div');
        centro.classList.add('centro');
        girasol.appendChild(centro);

        // Crear los PÉTALOS (MUCHOS) y ROTARLOS alrededor del centro
        const NUM_PETALOS = 25; 
        for (let i = 0; i < NUM_PETALOS; i++) {
            const petalo = document.createElement('div');
            petalo.classList.add('petalo');
            
            const rotation = i * (360 / NUM_PETALOS);
            
            // Aplicamos la rotación y una pequeña traslación para separarlos del centro
            petalo.style.transform = `
                rotate(${rotation}deg) 
                translateY(-35px) 
            `; 
            
            petalo.style.opacity = 0; // Inicialmente ocultos para la animación
            girasol.appendChild(petalo);
        }

        // Añadir el evento de clic
        girasol.addEventListener('click', manejarClickGirasol);
        
        return { girasol, tallo, centro };
    }


    // -----------------------------------------------------
    // 3. FUNCIÓN DE ANIMACIÓN DE BROTAR (Crecimiento Inicial)
    // -----------------------------------------------------

    /**
     * Aplica SÓLO la animación inicial de "brotar" con anime.js.
     */
    function animarGirasol(girasolElement, delayFactor) {
        
        // 1. Animación de BROTAR (Crecimiento y Aparición)
        anime.timeline({
            targets: girasolElement,
            easing: 'easeInOutQuad'
        })
        .add({
            opacity: [0, 1], 
            duration: 100,
            delay: delayFactor 
        })
        .add({
            // Simula brotar desde abajo
            translateY: [anime.get(girasolElement, 'translateY') + 300, 0], 
            scale: [0.5, 1], 
            duration: 1500,
            elasticity: 200, 
        }, 0) 
        .add({
            targets: girasolElement.querySelectorAll('.petalo'),
            opacity: [0, 1],
            scaleY: [0, 1], 
            duration: 800,
            delay: anime.stagger(20) // Retraso más pequeño para que los 24 pétalos aparezcan rápido
        }, '-=800'); 
    }

    // -----------------------------------------------------
    // 4. LÓGICA DEL VISOR GLOBAL DE FOTOS Y CLIC EN GIRASOL
    // -----------------------------------------------------
    
    /**
     * Abre el visor y carga la imagen en ese momento (carga diferida).
     */
    function abrirVisor(datos) {
        // Carga la imagen SOLAMENTE en este momento
        visorImagen.src = datos.foto; 
        
        visorTitulo.textContent = datos.titulo;
        visorDescripcion.textContent = datos.descripcion;
        visorReferencia.textContent = `— ${datos.referencia}`;
        
        visorGlobal.classList.add('activo');
        document.body.style.overflow = 'hidden'; 
    }

    /**
     * CIERRA el visor y ejecuta la lógica para mover el girasol visitado al fondo.
     */
    function cerrarVisor() {
        visorImagen.src = ''; // Libera el recurso de la imagen
        visorGlobal.classList.remove('activo');
        document.body.style.overflow = ''; 
        
        // Lógica para mover el girasol al fondo
        if (girasolActivo) {
            // 1. Mueve el girasol detrás de los demás (z-index: 0, ya que los demás tienen z-index: 1 en CSS)
            girasolActivo.style.zIndex = '0'; 
            
            // 2. Reduce la opacidad para indicar que ya fue abierto.
            girasolActivo.style.opacity = '0.4'; 
            
            // 3. Deshabilita el clic para evitar reabrirlo fácilmente
            girasolActivo.removeEventListener('click', manejarClickGirasol);
            
            // 4. Limpia la referencia
            girasolActivo = null;
        }
    }

    cerrarBoton.addEventListener('click', cerrarVisor);
    visorGlobal.addEventListener('click', (e) => {
        if (e.target.id === 'visor-global') {
            cerrarVisor();
        }
    });

    /**
     * Maneja el clic en el girasol.
     */
    function manejarClickGirasol(event) {
        let targetGirasol = event.currentTarget;
        
        // Almacenamos la referencia del girasol activo
        girasolActivo = targetGirasol; 
        
        // LÓGICA DE INICIO DE MÚSICA con el primer clic
        if (!musicaIniciada) {
            musicaFondo.play().then(() => {
                musicaIniciada = true;
                const controlBtn = document.getElementById('control-musica');
                if (controlBtn) {
                    // Actualiza el botón de audio a "Sonando"
                    controlBtn.innerHTML = '🔊'; 
                    controlBtn.classList.add('activo');
                    musicaFondo.dataset.wasPlaying = 'true';
                }
            }).catch(e => {
                // Si la reproducción falla (bloqueo por navegador), creamos el control
                console.error("Error al intentar reproducir música:", e);
                crearBotonControlMusica(); 
            });
        }

        const datos = {
            titulo: targetGirasol.dataset.titulo,
            descripcion: targetGirasol.dataset.descripcion,
            referencia: targetGirasol.dataset.referencia,
            foto: targetGirasol.dataset.foto 
        };
        
        abrirVisor(datos);
    }
    
    // -----------------------------------------------------
    // 5. LÓGICA DEL VISOR DE VIDEO
    // -----------------------------------------------------

    function abrirVisorVideo() {
        visorVideoGlobal.classList.add('activo');
        document.body.style.overflow = 'hidden'; 
        
        // Pausa la música de fondo mientras el video se reproduce
        if (!musicaFondo.paused) {
            musicaFondo.pause();
            musicaFondo.dataset.wasPlaying = 'true'; 
        } else {
            musicaFondo.dataset.wasPlaying = 'false';
        }

        videoPlayer.play().catch(error => {
            console.log("La reproducción automática de video fue bloqueada.", error);
        });
    }

    function cerrarVisorVideo() {
        videoPlayer.pause(); 
        videoPlayer.currentTime = 0; 
        
        visorVideoGlobal.classList.remove('activo');
        document.body.style.overflow = ''; 
        
        // Reanuda la música de fondo 
        if (musicaFondo.dataset.wasPlaying === 'true' && musicaFondo.paused) {
             musicaFondo.play().catch(e => console.log("No se pudo reanudar la música.", e));
        }
    }

    abrirVideoBtn.addEventListener('click', abrirVisorVideo);
    cerrarVideoBoton.addEventListener('click', cerrarVisorVideo);
    volverAlJardinBoton.addEventListener('click', cerrarVisorVideo);
    visorVideoGlobal.addEventListener('click', (e) => {
        if (e.target.id === 'visor-video-global') {
            cerrarVisorVideo();
        }
    });

    // -----------------------------------------------------
    // 6. LÓGICA DEL AUDIO DE FONDO (Control Flotante)
    // -----------------------------------------------------
    
    // Intentamos reproducir al cargar (si falla, el botón aparecerá)
    musicaFondo.play().catch(error => {
        musicaIniciada = false; 
        crearBotonControlMusica();
    });

    musicaFondo.addEventListener('play', () => {
        musicaIniciada = true;
    });

    function crearBotonControlMusica() {
        if (document.getElementById('control-musica')) return; 

        const controlBtn = document.createElement('button');
        controlBtn.id = 'control-musica';
        controlBtn.innerHTML = '🔇'; 
        controlBtn.classList.add('control-musica-flotante');

        document.body.appendChild(controlBtn);

        controlBtn.addEventListener('click', () => {
            if (musicaFondo.paused) {
                musicaFondo.play();
                musicaFondo.dataset.wasPlaying = 'true'; 
                musicaIniciada = true; 
            } else {
                musicaFondo.pause();
                musicaFondo.dataset.wasPlaying = 'false'; 
            }
        });
        
        musicaFondo.addEventListener('play', () => {
             controlBtn.innerHTML = '🔊'; 
             controlBtn.classList.add('activo');
        });
        musicaFondo.addEventListener('pause', () => {
             controlBtn.innerHTML = '🔇'; 
             controlBtn.classList.remove('activo');
        });

        if (!musicaFondo.paused && musicaFondo.volume > 0) {
            controlBtn.innerHTML = '🔊';
            controlBtn.classList.add('activo');
            musicaFondo.dataset.wasPlaying = 'true';
        } else {
            controlBtn.innerHTML = '🔇';
            controlBtn.classList.remove('activo');
            musicaFondo.dataset.wasPlaying = 'false';
        }
    }

    // -----------------------------------------------------
    // 7. INICIALIZACIÓN: GENERAR Y COLOCAR GIRASOLES
    // -----------------------------------------------------
    
    // Generar y colocar cada girasol
    for (let i = 0; i < NUM_GIRASOLES; i++) {
        const contenidoItem = contenidos[i % contenidos.length]; 
        const { girasol, tallo, centro } = crearGirasol(contenidoItem);
        
        const x = anime.random(10, 90); 
        // Rango de 80vh a 100vh para que se vean completos
        const y = anime.random(80, 100); 
        
        girasol.style.left = `${x}vw`;
        girasol.style.top = `${y}vh`;
        girasol.style.width = '60px'; 
        girasol.style.height = '60px';
        
        contenedor.appendChild(girasol);
        
        // Usamos un retraso escalonado (stagger) para suavizar la carga inicial
        const delay = i * 200; 
        animarGirasol(girasol, delay);
    }

    // Aseguramos que el botón de control de música se cree si la reproducción automática falla
    if (!musicaIniciada) {
         crearBotonControlMusica();
    }
});