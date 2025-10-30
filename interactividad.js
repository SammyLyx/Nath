/**
 * Archivo: interactividad.js (Completo y Optimizado)
 * * Versión final con:
 * - 25 contenidos (títulos, descripciones, referencias y rutas de fotos).
 * - Optimización de rendimiento (animación CSS y carga diferida de imágenes).
 * - Lógica de inicio de música con el primer clic del usuario.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // -----------------------------------------------------
    // 1. ESTRUCTURA DE CONTENIDO (25 Frases Inspiradoras y Fotos)
    // -----------------------------------------------------

    const contenidos = [
        { 
            titulo: "Fe y Confianza", 
            descripcion: "Confía en el Señor de todo corazón, y no en tu propia inteligencia. Reconócelo en todos tus caminos, y él allanará tus sendas. ¡El futuro está seguro en sus manos!", 
            referencia: "Proverbios 3:5-6",
            foto: './imagenes/foto1.jpg' 
        },
        { 
            titulo: "La Fuerza que Renueva", 
            descripcion: "Pero los que confían en el Señor renovarán sus fuerzas; volarán como las águilas; correrán y no se fatigarán, caminarán y no se cansarán.", 
            referencia: "Isaías 40:31",
            foto: './imagenes/foto2.jpg' 
        },
        { 
            titulo: "Luz en el Camino", 
            descripcion: "Tu palabra es una lámpara a mis pies; es una luz en mi sendero. Que su sabiduría ilumine cada paso de tu nuevo año.", 
            referencia: "Salmos 119:105",
            foto: './imagenes/foto3.jpg' 
        },
        { 
            titulo: "Paz que Supera Todo", 
            descripcion: "Y la paz de Dios, que sobrepasa todo entendimiento, cuidará sus corazones y sus pensamientos en Cristo Jesús.", 
            referencia: "Filipenses 4:7",
            foto: './imagenes/foto4.jpg' 
        },
        { 
            titulo: "Entereza y Esperanza", 
            descripcion: "Nos gozamos también en los sufrimientos, porque sabemos que el sufrimiento produce perseverancia; la perseverancia, entereza de carácter; la entereza de carácter, esperanza.", 
            referencia: "Romanos 5:3-4",
            foto: './imagenes/foto5.jpg' 
        },
        { 
            titulo: "Ánimo y Valentía", 
            descripcion: "Sé fuerte y valiente. No tengas miedo ni te desanimes, porque el Señor tu Dios estará contigo dondequiera que vayas. ¡Feliz cumpleaños!", 
            referencia: "Josué 1:9",
            foto: './imagenes/foto6.jpg' 
        },
        { 
            titulo: "Propósito Eterno", 
            descripcion: "Porque yo sé muy bien los planes que tengo para ustedes —afirma el Señor—, planes de bienestar y no de calamidad, a fin de darles un futuro y una esperanza.", 
            referencia: "Jeremías 29:11",
            foto: './imagenes/foto7.jpg' 
        },
        { 
            titulo: "Nueva Creación", 
            descripcion: "Por lo tanto, si alguno está en Cristo, es una nueva creación. ¡Lo viejo ha pasado, ha llegado ya lo nuevo! Celebra este nuevo capítulo.", 
            referencia: "2 Corintios 5:17",
            foto: './imagenes/foto8.jpg' 
        },
        {
            titulo: "Alegría Inagotable",
            descripcion: "La alegría del Señor es nuestra fuerza. Que encuentres motivos para sonreír y celebrar la vida cada día.",
            referencia: "Nehemías 8:10",
            foto: './imagenes/foto9.jpg'
        },
        {
            titulo: "Crecimiento Constante",
            descripcion: "No nos desanimamos. Al contrario, aunque por fuera nos vamos desgastando, por dentro nos vamos renovando día tras día. Los sufrimientos son ligeros en comparación a la gloria.",
            referencia: "2 Corintios 4:16-18",
            foto: './imagenes/foto10.jpg'
        },
        { 
            titulo: "Fuerza en la Debilidad", 
            descripcion: "Que el amor de Cristo sea el lazo que nos une, hoy y siempre. Disfruta de cada momento.", 
            referencia: "Colosenses 3:14",
            foto: './imagenes/foto11.jpg' 
        },
        { 
            titulo: "Bendiciones Diarias", 
            descripcion: "El Señor te bendiga y te guarde; el Señor haga resplandecer su rostro sobre ti y te dé paz. ¡Muchas felicidades!", 
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
        // ***** CONTENIDO ADICIONAL (Girasoles 16 a 25) *****
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
            descripcion: "El que es fiel en lo muy poco, también es fiel en lo mucho; y el que es deshonesto en lo muy poco, también es deshonesto en lo mucho. Que tu fidelidad te guíe.", 
            referencia: "Lucas 16:10",
            foto: './imagenes/foto18.jpg' 
        },
        { 
            titulo: "Paciencia y Fortaleza", 
            descripcion: "Pero los que esperan en el Señor renovarán sus fuerzas; se remontarán con alas como las águilas, correrán y no se cansarán, caminarán y no se fatigarán. Feliz día!", 
            referencia: "Isaías 40:31",
            foto: './imagenes/foto19.jpg' 
        },
        { 
            titulo: "Sabiduría del Corazón", 
            descripcion: "Confía en el Señor de todo corazón, y no en tu propia inteligencia. Reconócelo en todos tus caminos, y él allanará tus sendas. Un año lleno de decisiones sabias.", 
            referencia: "Proverbios 3:5-6",
            foto: './imagenes/foto20.jpg' 
        },
        { 
            titulo: "Renovación y Propósito", 
            descripcion: "De modo que si alguno está en Cristo, nueva criatura es; las cosas viejas pasaron; he aquí todas son hechas nuevas. Un nuevo comienzo para ti.", 
            referencia: "2 Corintios 5:17",
            foto: './imagenes/foto21.jpg' 
        },
        { 
            titulo: "Gozo Duradero", 
            descripcion: "Aunque la higuera no florezca ni haya frutos en las vides; aunque falle la cosecha del olivo y los campos no produzcan alimento; aunque se acaben las ovejas del redil y no haya ganado en los establos, con todo, yo me alegraré en el Señor, me regocijaré en el Dios de mi salvación.", 
            referencia: "Habacuc 3:17-18",
            foto: './imagenes/foto22.jpg' 
        },
        { 
            titulo: "Protección Divina", 
            descripcion: "El Señor es mi luz y mi salvación; ¿a quién temeré? El Señor es la fortaleza de mi vida; ¿de quién tendré temor? Que su protección te acompañe siempre.", 
            referencia: "Salmos 27:1",
            foto: './imagenes/foto23.jpg' 
        },
        { 
            titulo: "Generosidad y Bendición", 
            descripcion: "Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre. Que tu corazón sea generoso.", 
            referencia: "2 Corintios 9:7",
            foto: './imagenes/foto24.jpg' 
        },
        { 
            titulo: "Fe Inquebrantable", 
            descripcion: "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Que tu fe sea la roca de tu camino.", 
            referencia: "Hebreos 11:1",
            foto: './imagenes/foto25.jpg' 
        },
        // ***** FIN DE 25 CONTENIDOS *****
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

    
    // -----------------------------------------------------
    // 2. FUNCIÓN DE CREACIÓN Y ESTRUCTURA DEL GIRASOL (Optimizado)
    // -----------------------------------------------------

    function crearGirasol(itemContenido) {
        const girasol = document.createElement('div');
        girasol.classList.add('girasol', 'girasol-animado-css'); 
        
        girasol.dataset.titulo = itemContenido.titulo;
        girasol.dataset.descripcion = itemContenido.descripcion; 
        girasol.dataset.referencia = itemContenido.referencia;
        girasol.dataset.foto = itemContenido.foto; 
        
        const tallo = document.createElement('div');
        tallo.classList.add('tallo');
        girasol.appendChild(tallo);

        const centro = document.createElement('div');
        centro.classList.add('centro');
        girasol.appendChild(centro);

        const NUM_PETALOS = 12;
        for (let i = 0; i < NUM_PETALOS; i++) {
            const petalo = document.createElement('div');
            petalo.classList.add('petalo');
            const rotation = i * (360 / NUM_PETALOS);
            petalo.style.transform = `rotate(${rotation}deg) translateY(-50px)`; 
            petalo.style.opacity = 0; 
            girasol.appendChild(petalo);
        }

        girasol.addEventListener('click', manejarClickGirasol);
        
        return { girasol, tallo, centro };
    }


    // -----------------------------------------------------
    // 3. FUNCIÓN DE ANIMACIÓN DE BROTAR (Simplificada)
    // -----------------------------------------------------

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
            delay: anime.stagger(50) 
        }, '-=800'); 
    }

    // -----------------------------------------------------
    // 4. LÓGICA DEL VISOR GLOBAL DE FOTOS Y CLIC EN GIRASOL
    // -----------------------------------------------------
    
    function abrirVisor(datos) {
        // Carga la imagen SOLAMENTE en este momento
        visorImagen.src = datos.foto; 
        
        visorTitulo.textContent = datos.titulo;
        visorDescripcion.textContent = datos.descripcion;
        visorReferencia.textContent = `— ${datos.referencia}`;
        
        visorGlobal.classList.add('activo');
        document.body.style.overflow = 'hidden'; 
    }

    function cerrarVisor() {
        visorImagen.src = ''; 
        visorGlobal.classList.remove('activo');
        document.body.style.overflow = ''; 
    }

    cerrarBoton.addEventListener('click', cerrarVisor);
    visorGlobal.addEventListener('click', (e) => {
        if (e.target.id === 'visor-global') {
            cerrarVisor();
        }
    });

    function manejarClickGirasol(event) {
        let targetGirasol = event.currentTarget;
        
        // LÓGICA DE INICIO DE MÚSICA con el primer clic
        if (!musicaIniciada) {
            musicaFondo.play().then(() => {
                musicaIniciada = true;
                const controlBtn = document.getElementById('control-musica');
                if (controlBtn) {
                    controlBtn.innerHTML = '🔊'; 
                    controlBtn.classList.add('activo');
                    musicaFondo.dataset.wasPlaying = 'true';
                }
            }).catch(e => console.error("Error al intentar reproducir música:", e));
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
    // 5. LÓGICA DEL VISOR DE VIDEO (Mantenida)
    // -----------------------------------------------------

    function abrirVisorVideo() {
        visorVideoGlobal.classList.add('activo');
        document.body.style.overflow = 'hidden'; 
        
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
            musicaFondo.dataset.wasPlaying = 'false';
        }
    }

    // -----------------------------------------------------
    // 7. INICIALIZACIÓN: GENERAR Y COLOCAR GIRASOLES
    // -----------------------------------------------------
    
    for (let i = 0; i < NUM_GIRASOLES; i++) {
        const contenidoItem = contenidos[i % contenidos.length]; 
        const { girasol, tallo, centro } = crearGirasol(contenidoItem);
        
        const x = anime.random(10, 90); 
        const y = anime.random(70, 95); 
        
        girasol.style.left = `${x}vw`;
        girasol.style.top = `${y}vh`;
        girasol.style.width = '60px'; 
        girasol.style.height = '60px';
        
        contenedor.appendChild(girasol);
        
        const delay = i * 200; // Retraso escalonado para suavizar la carga
        animarGirasol(girasol, delay);
    }
});