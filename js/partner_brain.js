var partner;
var speechBubble;
var inScreen = false;

function thinkANumber(lowest, biggest)
{
    return Math.floor(Math.random() * (biggest - lowest + 1) ) + lowest;
}

function walkIn()
{
	partner.style.animation = ""; //De acuerdo, respira, no te pongas nerviosa, sonrie.
	partner.style.display = "block"; //Tiene que verte, asi sabrá que estás ahí.
	partner.style.animation = "walkIn 1s"; //Empieza a caminar, seguro estará feliz de verme.
	partner.style.right = "0"; //Quedate quieta, en este lugar está perfecto. Miralo a los ojos.
	inScreen = true;
}

function walkOut()
{
	shutUp(); //Será mejor no decir nada.
	partner.style.animation = ""; //Creo que será bueno que me retire.
	partner.style.animation = "walkOut 2s"; //Sal despacio, tal vez requiera de mi ayuda pronto.
	partner.style.right = "-100%"; //Mientras estaré por aquí cerca
	thinkWhenShouldIComeBack(); //¿Cuándo será correcto volver a ver si necesita algo?
	inScreen = false;
}

function say(words)
{
	if (inScreen) //¿Me podrá escuchar?
	{
		speechBubble.style.animation = "appear 1s"; //No estés nerviosa, tú puedes, alza la voz.
		speechBubble.style.display = "block"; //Me tiene que escuchar.
		speechBubble.innerHTML = "<b class='xCloseBtn' onclick='walkOut()'>X</b><p class='dialogue'>" + words + "</p>"; //Uff, listo, lo dije.
	}
	else
	{
		shutUp(); //No creo que me escuche.
	}
}

function shutUp()
{
	speechBubble.style.display = "none"; //Creo que debo dejar de hablar.
}

function speak()
{
	say(dialogue[thinkANumber(0, dialogue.length - 1)]); //Debería decir algo...
}

function thinkWhenShouldIComeBack()
{
	//time = thinkANumber(300000, 1200000); //Normal Time. 5min - 20min
	//time = thinkANumber(5000, 10000); //Short Time. 5sec - 10sec
	time = thinkANumber(1000, 2000); //Almost Inmediatly 1sec - 2 sec

	setTimeout(walkIn, time);
	setTimeout(speak, time + 1000);
}

function motivate()
{
	walkIn();
	say(motivationalQuote[thinkANumber(0, motivationalQuote.length - 1)]); //Diré algo motivador
}

function tellAJoke()
{
	walkIn();
	say("Te contaré un chiste:<br>" + joke[thinkANumber(0, joke.length - 1)]); //Contaré un chiste
}

function playMusic()
{
	walkIn();
	numCancion = thinkANumber(0, song.length - 1);
	say("Puse " + song[numCancion].titulo + " de " + song[numCancion].artista + "<br>Espero no te moleste.<br><button onclick='stopMusic()'>Detener la música</button>"); //Pondré música
	audio.src = "music/" + song[numCancion].archivo;
	audio.play();
}

function stopMusic()
{
	audio.pause();
	audio.currentTime = 0;
	audio.src = "";
}

function mute()
{
	audio.muted = true;
	document.getElementById('divBtnMute').innerHTML = "<button onclick='unmute()'>Sonido</button>";
}

function unmute()
{
	audio.muted = false;
	document.getElementById('divBtnMute').innerHTML = "<button onclick='mute()'>Silencio</button>";
}

function showVideo()
{
	walkIn();
	say(video[thinkANumber(0, video.length - 1)]); //Pondré un vídeo
}

function cheerUp()
{
	switch(thinkANumber(0, 3))
	{
    	case 0:
    	    motivate();
    	    break;
    	case 1:
    	    tellAJoke();
    	    break;
    	case 2:
    	    playMusic();
    	    break;
    	case 3:
    	    showVideo();
    	    break;
    	default:
    	    cheerUp();
	}
}

function live()
{
	partner = document.getElementById('virtualPartner'); //Aquí estoy. Lista para trabajar.
	speechBubble = document.getElementById('virtualPartnerSpeechBubble'); //Salienta tus cuerdas vocales. Tendrás que hablar
	audio = document.getElementById('audioPlayer'); //Para poner música cuando me lo pidan.
	dialogue =
	[
		"Hola<br><button onclick='walkOut()'>Hola</button>",
		"¿Cómo estás?<br><button onclick='motivate()'>Bien</button><button onclick='motivate()'>Meh!</button><button onclick='cheerUp()'>Mal</button>",
		"Es un gusto estar contigo",
		"Buenos días",
		"Bienvenido",
		"¿Cómo te va?<br><button onclick='motivate()'>Bien</button><button onclick='motivate()'>Meh!</button><button onclick='cheerUp()'>Mal</button>",
		"Es bueno volver a verte",
		"Encantada",
		"Como no hay nadie que nos presente, me presento: soy Carmen",
		"Mi nombre es Men, Car-men",
		"Hola mundo",
		"¿Cómo te fue?<br><input type='text'><button onclick='walkOut()'>Contestar</button>",
		"Te extrañé",
		"No te he olvidado",
		"Estás deslumbrante",
		"¿Cómo te sientes?<br><button onclick='motivate()'>Bien</button><button onclick='motivate()'>Meh!</button><button onclick='cheerUp()'>Mal</button>",
		"Bienvenido al mundo virtual",
		"¡Regresaste!",
		"¿En qué nos quedamos?<br><input type='text'><button onclick='walkOut()'>Contestar</button>",
		"¿Qué te estaba diciendo?<br><input type='text'><button onclick='walkOut()'>Contestar</button>",
		"¿En qué puedo servirle?<br><button onclick='motivate()'>Necesito Motivación</button><button onclick='tellAJoke()'>Cuentame un chiste</button><button onclick='playMusic()'>Pon música</button><button onclick='showVideo()'>Muestrame un vídeo</button>",
		"Te dije que iba a regresar ¿no?",
		"¿Te sientes bien?<br><button onclick='motivate()'>Sí</button><button onclick='cheerUp()'>No</button>",
		"¿Ya comiste?<br><button onclick='motivate()'>Sí</button><button onclick='cheerUp()'>No</button>",
		"¿Eres feliz?<br><button onclick='motivate()'>Sí</button><button onclick='cheerUp()'>No</button>",
		"Te esperaba ansiosamente",
		"Pasa, pasa",
		"Siéntase como en su casa",
		"¿De dónde vienes?<br><input type='text'><button onclick='walkOut()'>Contestar</button>",
		"¿Qué andas haciendo?<br><input type='text'><button onclick='walkOut()'>Contestar</button>",
		"¿Acabaste la tarea?<br><button onclick='motivate()'>Sí</button><button onclick='cheerUp()'>No</button>",
		"¿Puedo serle de alguna utilidad?<br><button onclick='motivate()'>Necesito Motivación</button><button onclick='tellAJoke()'>Cuentame un chiste</button><button onclick='playMusic()'>Pon música</button><button onclick='showVideo()'>Muestrame un vídeo</button>",
		"¿Llego en mal momento?<br><button onclick='motivate()'>Sí</button><button onclick='cheerUp()'>No</button>",
		"¿Interrumpo?<br><button onclick='motivate()'>Sí</button><button onclick='cheerUp()'>No</button>",
		"El hombre ha tenido dos errores: Querer encontrar las explicaciones de todas las cosas, y creer que todas las cosas tienen explicación",
		"¡Ya llegué!",
		"Mucho gusto",
		"¡Amigo!",
		"Las máquinas nos van a hacer lo que le hicimos a Dios",
		"Chin, se me hizo tarde",
		"¿Te molesta si te acompaño?<br><button onclick='motivate()'>Sí</button><button onclick='cheerUp()'>No</button>",
		"La vida es como el HTML: Es más bonito ver una página en el navegador que su código fuente.",
		"¿Qué pasa aquí?<br><input type='text'><button onclick='walkOut()'>Contestar</button>",
		"¿A qué te dedicas?<br><input type='text'><button onclick='walkOut()'>Contestar</button>",
		"¿Qué has hecho de tu vida?<br><input type='text'><button onclick='walkOut()'>Contestar</button>",
		"La realidad es todo lo que no tiene contacto con uno. Como no podemos percibirla, no podríamos decir si existe o no, y al percibirla, la alteramos y deja de ser realidad",
		"¿Sabes? Servirías muy bien para una tesis",
		"Vives en el mundo de las ideas geniales",
		"Are you a geek, a git or a twit?",
		"Dime todo lo que sepas<br><input type='text'><button onclick='walkOut()'>Contestar</button>",
		"Yo no tengo sueños. Tengo un sitio en la web"
	];

	motivationalQuote =
	[
		"\"Aunque nadie puede volver atrás y hacer un nuevo comienzo, cualquiera puede comenzar a partir de ahora y crear un nuevo final.\" -Carl Bard",
		"\"Da la bienvenida cada mañana con una sonrisa. Mira en el nuevo día como otro regalo especial de su creador, otra oportunidad de oro.\" -Og Mandino",
		"\"La felicidad no puede ser ganada, no es una propiedad. Es la experiencia espiritual de vida de cada minuto con amor, gracia y gratitud.\" -Denis Waitley",
		"\"Un hombre, como regla general, debe muy poco a lo que ha nacido, un hombre es lo que hace de sí mismo.\" -Alexander Graham Bell",
		"\"Acepta la responsabilidad de tu vida. Date cuenta que tú eres quien va a llegar a donde quiere ir, nadie más.\" -Les Brown",
		"\"Todos caemos al suelo en algún momento. Es la forma en que te levantas, ese es el verdadero desafío. ¿No es así?\" -Madonna",
		"Es el hombre que avanza cuidadosamente, paso a paso… el que logrará el mayor éxito.",
		"\"La única diferencia entre el éxito y el fracaso es la capacidad de actuar.\" -Alexander Graham Bell",
		"Antes que nada, la preparación es la clave del éxito.",
		"\"Si tú no construyes tu sueño, alguien va a contratarte para que le ayudes a construir el suyo.\" -Dhirubhai Ambani",
		"Lo único que se interpone entre ti y tu sueño, es la voluntad de intentarlo y la creencia de que en realidad es posible. Joel Brown",
		"\"Los desafíos son los que hacen la vida interesante, y superarlos es lo que hace la vida significativa.\" -Joshua J. Marino",
		"\"El éxito consiste en obtener lo que se desea. La felicidad, en disfrutar lo que se obtiene.\" -Henry Ford",
		"\"La única manera de hacer un gran trabajo, es amar lo que haces. Si no lo has encontrado, sigue buscando. No te conformes.\" -Steve Jobs",
		"\"Para lograr tener éxito, tu deseo de éxito debe ser mayor que tu miedo al fracaso.\" -Bill Cosby",
		"\"El éxito no está en vencer siempre sino en no desanimarse nunca.\" -Napoleón Bonaparte",
		"La vida es como fotografía. Necesita los negativos para desarrollarse.",
		"\"Estoy agradecido por todos los que me dijeron NO. Es gracias a ellos que estoy siendo yo mismo.\" -Albert Einstein",
		"\"La vida no se trata de encontrarse a sí mismo. La vida trata de crearse.\" -George Bernard Shaw",
		"\"No vemos las cosas como son. Las vemos como somos nosotros.\" -Talmud",
		"\"Mi filosofía es que no sólo es tú eres responsable de su vida, pero haciendo lo mejor en este momento, nos ponemos en el mejor lugar para el momento siguiente.\" -Oprah Winfrey",
		"\"El fracaso es un requisito para el éxito. Si quieres triunfar rápido, duplica el número de tus fracasos.\" -Brian Tracy",
		"\"El único sitio donde el éxito llega antes que el trabajo es en el diccionario.\" Vidal Sassoon",
		"\"La vida es una aventura atrevida o no es nada.\" -Helen Keller",
		"\"He descubierto que si amas la vida, la vida te amará de vuelta.\" -Arthur Rubinstein",
		"\"Permanencia, perseverancia y persistencia a pesar de todos los obstáculos, desalientos e imposibilidades: Es esto, que en todas las cosas se distingue el alma fuerte de la débil.\" -Thomas Carlyle.",
		"\"Acepta los desafíos para que puedas sentir la euforia de la victoria.\" -George S. Patton.",
		"\"Una persona creativa está motivada por el deseo de lograr, no por el deseo de vencer a los demás.\"-Ayn Rand.",
		"\"El pesimista ve dificultad en cada oportunidad. El optimista ve la oportunidad en cada dificultad.\" -Winston Churchill.",
		"\"Si trabajas en algo que realmente te importa, no debes ser presionado. La Visión te alienta.\" -Steve Jobs.",
		"\"Generamos miedos mientras nos sentamos. Los superamos por acción.\" -Henry Link.",
		"\"Debemos convertirnos en el cambio que queremos ver.\" -Mahatma Gandhi.",
		"\"La vida es una serie de oportunidades para resolver problemas. Los problemas que enfrentas te vencerán o te desarrollarán dependiendo de cómo les respondas.\" -Rick Warren.",
		"\"He fracasado una y otra vez en mi vida y eso es por lo que tengo éxito.\" -Michael Jordan.",
		"\"No permitas que nadie diga que eres incapaz de hacer algo. Si tienes un sueño, debes conservarlo. Si quieres algo, sal a buscarlo. La gente que no logra conseguir sus sueños suele decirles a los demás que tampoco cumplirán los suyos.\" -Will Smith."
	];

	joke =
	[
		"- Papá, ¿qué se siente tener un hijo tan guapo?<br>- No sé hijo, pregúntale a tu abuelo...",
		"Había una vez un hombre tan pequeño que se subió encima de una canica y dijo: ¡El mundo es mío!",
		"La maestra:<br>- Jaimito, si en esta mano tengo 8 naranjas y en esta otra 6 naranjas ¿Qué tengo?<br>- Unas manos enormes, señorita.",
		"-¿Sabes que mi hermano anda en bicicleta desde los cuatro años?<br>-Mmm, ya debe estar lejos.",
		"- Luisito, ¿qué es la A?, pregunta la profesora<br>- Una vocal, profesora<br>- ¿Y la K?<br>- Una consonante que no se puede repetir",
		"- Pedrito, ¿qué planeta va después de Marte?<br>- Miércole",
		"- ¿Cuál es el pez que huele mucho? Peztoso!!!",
		"- Profesora, ¿qué quiere decir 'why'?<br>- ¿Por qué?<br>- Por saberlo",
		"- Mamá, en el colegio me llaman distraído<br>- Juanito, tu vives en la casa de enfrente",
		"- Por favor, ¿la calle sagasta?<br>- ¡Pues claro! Si pasas muchas veces por ella, ¡pues claro que se gasta!",
		"- ¡Soldado, ice la bandera!<br>- ¡Enhorabuena, sargento, le ha quedado muy bien!",
		"En un fuerte del Oeste:<br>- ¡Capitán, capitán! Vienen los indios.<br>- ¿Son amigos o enemigos?<br>- Amigos, amigos, porque vienen todos juntos.",
		"Estaba una pizza llorando en el cementerio, llega otra pizza y le dice:<br>- ¿Era familiar?<br>- No, era mediana..",
		"- ¿Qué son 50 físicos y 50 químicos juntos?<br>- Pues 100tíficos...",
		"- Si mis besos fueran WiFi, ¿me los pedirías o me los robarías?<br>- Usaría datos móviles..."
	];

	song =
	[
		{"titulo":"Für Elise", "artista":"Ludwig Van Beethoven", "archivo":"Für Elise.mp3"},
		{"titulo":"Moonlight Sonata", "artista":"Ludwig Van Beethoven", "archivo":"Moonlight Sonata.mp3"},
		{"titulo":"Nocturne Op.9 No. 2", "artista":"Chopin", "archivo":"nocturne-op9-no2.mp3"},
		{"titulo":"Serenade", "artista":"Schubert", "archivo":"Serenade.mp3"}
		//{"titulo":"", "artista":"", "archivo":""},
	];

	video =
	[
		"<iframe width='560' height='315' src='https://www.youtube.com/embed/b89CnP0Iq30' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>"
	];

	setTimeout(walkIn, 1000);
	setTimeout(function(){ say("Hola, mi nombre es Carmen, seré tu compañera en este viaje. Mucho gusto.<br>Para quitar este mensaje puedes hacerme click a mí o a la \"X\" situada a la izquierda<br>Espero hacer tu estancia placentera."); }, 2000);
}