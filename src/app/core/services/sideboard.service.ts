import { Injectable, computed, signal } from '@angular/core';
import { MagicFormat, PauperDeck } from '../models/sideboard.model';

@Injectable({
  providedIn: 'root'
})
export class SideboardService {
  private readonly _decks = signal<PauperDeck[]>([
    {
      id: 'mono-red-madness',
      slug: 'mono-red-madness',
      name: 'Mono Red Madness',
      metaPercentage: '12.6%',
      metaCount: 324,
      imageUrl: 'https://cards.mtggoldfish.com/images/019ce2ef-bdae-70cd-aab8-0a9d148a9c58/variants/672/938/card_image.webp',
      colors: ['R'],
      archetypeType: 'Aggro',
      author: '',
      decklistUrl: 'https://www.mtggoldfish.com/deck/7741866#paper',
      description: 'Estrategia explosiva de Mono Red Madness.',
      keyCards: ['Voldaren Epicure', 'Kessig Flamebreather', 'Sneaky Snacker', 'Guttersnipe', 'Faithless Looting', 'Lava Dart', 'Lightning Bolt', 'Grab the Prize', 'Highway Robbery', 'Fiery Temper', 'Fireblast'],
      sideboardCards: ['Pyroblast / Red Elemental Blast', 'Relic of Progenitus', 'End The Festivities', 'Cast into the Fire', 'Suplex'],
      maybeboard: [
        { name: 'Smash to Smithereens', note: 'Gran daño extra contra Campfire y artefactos pesados.' },
        { name: 'Campfire', note: 'Muy potente en mirrors y vs Rally Red para ganar vidas.' },
        { name: 'Searing Blaze', note: 'Removal eficiente con 3 de daño al jugador en emparejamientos de criaturas.' },
        { name: 'Tormod\'s Crypt', note: 'Hate de cementerio sin coste de maná que no exilia nuestro propio cementerio.' },
        { name: 'Electrickery', note: 'Instantáneo flexible contra Faeries, Rally Red y Elves.' },
        { name: 'Dwarven Forge-Chanter', note: 'Gran rendimiento en mirror, Rally Red y barajas de base azul.' },
        { name: 'Crimson Fleet Commodore', note: 'Monarch sólido contra barajas de pocas criaturas como Golgari Gardens.' },
        { name: 'Raze', note: 'Eficaz si Tron o Bogles aumentan su presencia en el metagame.' },
        { name: 'Flaring Pain', note: 'Anula Prismatic Strands si el metagame lo requiere.' },
        { name: 'Cleansing Wildfire', note: 'Cantrip de tierras, aunque algo lento para el plan de daño directo.' }
      ],
      proTips: [
        'Usa tus recursos de forma eficiente: No dispares todo el daño a fin de turno si lo necesitarás para eliminar una amenaza clave o potenciar a Guttersnipe.',
        'Considera siempre el peor escenario antes de girar todo tu maná: Mantén opciones abiertas ante contrahechizos o removals.',
        'Elige tu rol en cada emparejamiento: El mazo es dinámico; a veces jugarás como aggro puro, otras como combo, tempo o control.',
        'En ciertas situaciones, asume riesgos: No dejes que el miedo a perder te impida ganar; si el único camino viable es arriesgar, hazlo antes de darles tiempo para robar respuestas.',
        'El golpe que no ven venir es el que más duele: Guarda Guttersnipe para el turno en que cierras la partida (T4 o T5 con Fireblast y hechizos de 1 maná), rara vez en T3.',
        'Aprovecha las aperturas y optimiza la curva de maná: Maximiza el uso eficiente del maná disponible en cada turno.',
        'Piensa a futuro: Anticipa las jugadas rivales a 3-4 turnos (ej. vs Jund Wildfire con Toxin Analysis, bloquea con Epicure y mátalo tú mismo antes del daño para evitar que se curen).'
      ],
      matchups: [
        {
          vsDeckName: 'Inside Out Combo / Boros Tribe',
          difficulty: 'even',
          role: 'Tempo / Control',
          inCards: [
            { cardName: 'Pyroblast', quantity: 3, role: 'in', reason: 'Interactúa directamente con Inside Out para cortar su combo en seco.' }
          ],
          outCards: [
            { cardName: 'Faithless Looting', quantity: 1, role: 'out', reason: 'Ajuste de densidad de interacción.' },
            { cardName: 'Voldaren Epicure', quantity: 2, role: 'out', reason: 'Bloqueado con facilidad por criaturas de alta resistencia.' }
          ],
          gameplayTips: [
            'Mantén al menos 2 piezas de interacción abiertas en sus turnos de combo; pueden proteger a su criatura contra un solo removal.',
            'Lava Dart es clave porque ofrece dos removals en una sola carta.',
            'Respeta Prismatic Strands y no te sobrecomprometas a una línea que pueda anular.',
            'Fireblast sirve como respuesta sorpresa cuando creen estar seguros.'
          ]
        },
        {
          vsDeckName: 'Gruul Ruby Storm',
          difficulty: 'even',
          role: 'Aggro / Control',
          inCards: [],
          outCards: [],
          gameplayTips: [
            'Esencialmente una carrera: nuestro mazo principal es más consistente y los fuerza a combar antes de tiempo.',
            'Guarda removal para las criaturas reductoras de maná; responde al primer hechizo que lancen con una criatura en mesa para cortar su generación de maná.',
            'G1 es favorable. G2/G3 traerán Weather the Storm; no te rindas mentalmente tras una tormenta de vidas, Guttersnipe puede remontar con daño masivo si se quedan sin cartas.'
          ]
        },
        {
          vsDeckName: 'GW Gates',
          difficulty: 'unfavorable',
          role: 'Aggro',
          inCards: [
            { cardName: 'End the Festivities', quantity: 2, role: 'in', reason: 'Limpia criaturas pequeñas y abre huecos para daño.' },
            { cardName: 'Suplex', quantity: 2, role: 'in', reason: 'Interactúa con criaturas clave y presiona recursos.' }
          ],
          outCards: [
            { cardName: 'Faithless Looting', quantity: 1, role: 'out', reason: 'Reducción de cartas no agresivas.' },
            { cardName: 'Fiery Temper', quantity: 2, role: 'out', reason: 'Ajuste frente a Prismatic Strands y Saruli Gatekeepers.' },
            { cardName: 'Voldaren Epicure', quantity: 1, role: 'out', reason: 'Menor impacto ante bloqueadores resistentes.' }
          ],
          gameplayTips: [
            'Emparejamiento difícil debido a Armadillo Cloak, 4 Prismatic Strands y Saruli Gatekeepers.',
            'Aprovecha sus tierras giradas al inicio para ejercer máxima presión antes de que estabilicen.',
            'Cierra la partida con Guttersnipe y Kessig Flamebreather antes de que encadenen ganancia de vidas.'
          ]
        },
        {
          vsDeckName: 'Jeskai Ephemerate',
          difficulty: 'even',
          role: 'Aggro',
          inCards: [
            { cardName: 'Pyroblast', quantity: 4, role: 'in', reason: 'Contrarresta Augur of Bolas, Ephemerate, Lorien Revealed y contrahechizos.' }
          ],
          outCards: [
            { cardName: 'Fireblast', quantity: 1, role: 'out', reason: 'Riesgoso ante contrahechizos pesados.' },
            { cardName: 'Grab the Prize', quantity: 1, role: 'out', reason: 'Ajuste de curva.' },
            { cardName: 'Lava Dart', quantity: 2, role: 'out', reason: 'Menor impacto contra criaturas de resistencia 3+.' }
          ],
          gameplayTips: [
            'Presiona con criaturas temprano y no temas quemar a Augur of Bolas si permite que tus criaturas sigan atacando.',
            'Sneaky Snacker es una pesadilla para Jeskai; cuidado con Suplex, Ride\'s End y Fanged Flames del oponente.',
            'No es necesario traer Relic; mantener la densidad de amenazas es más efectivo.',
            'Ten en cuenta Union of the Third Path pero no dejes de ejecutar tu juego agresivo.'
          ]
        },
        {
          vsDeckName: 'Infect',
          difficulty: 'favorable',
          role: 'Control',
          inCards: [
            { cardName: 'End the Festivities', quantity: 2, role: 'in', reason: 'Castiga criaturas 1/1 y elimina amenazas múltiples.' },
            { cardName: 'Cast into the Fire', quantity: 2, role: 'in', reason: 'Exilia Ichorclaw Myr o elimina dos criaturas a la vez.' }
          ],
          outCards: [
            { cardName: 'Sneaky Snacker', quantity: 4, role: 'out', reason: 'Demasiado lento en una partida donde el objetivo único es matar sus bichos.' }
          ],
          gameplayTips: [
            'Mata a todas las criaturas del rival inmediatamente; sin criaturas no pueden ganar.',
            'Lava Dart es estelar por su doble removal de 1 daño.',
            'Juega con paciencia: fuerza al rival a comprometer maná o hechizos de protección antes de responder con removal en respuesta.'
          ]
        },
        {
          vsDeckName: 'Grixis Affinity',
          difficulty: 'even',
          role: 'Aggro',
          inCards: [
            { cardName: 'Cast into the Fire', quantity: 4, role: 'in', reason: 'Exilia puentes y destruye artefactos clave como Blood Fountain y Wellspring.' },
            { cardName: 'Suplex', quantity: 2, role: 'in', reason: 'Elimina amenazas clave y presiona recursos.' },
            { cardName: 'Pyroblast', quantity: 2, role: 'in', reason: 'Contrarresta Thoughtcast, Metallic Rebuke y Hydroblast.' }
          ],
          outCards: [
            { cardName: 'Fireblast', quantity: 2, role: 'out', reason: 'Riesgoso ante Reckoner\'s Bargain y Metallic Rebuke.' },
            { cardName: 'Grab the Prize', quantity: 2, role: 'out', reason: 'Demasiado lento para el ritmo requerido.' },
            { cardName: 'Lava Dart', quantity: 2, role: 'out', reason: 'Inútil contra Myr Enforcer 4/4.' },
            { cardName: 'Faithless Looting', quantity: 2, role: 'out', reason: 'Mantener máxima densidad de odio hacia artefactos.' }
          ],
          gameplayTips: [
            'Traemos 6 piezas de odio a artefactos para ralentizar su arranque y ganar la carrera.',
            'Juega con cuidado alrededor de Reckoner\'s Bargain cuando estén a rango letal; la ganancia de 4-7 vidas puede arruinar el cierre.'
          ]
        },
        {
          vsDeckName: 'Elves',
          difficulty: 'favorable',
          role: 'Control',
          inCards: [
            { cardName: 'End the Festivities', quantity: 2, role: 'in', reason: 'Barre el tablero completo de elfos 1/1.' },
            { cardName: 'Suplex', quantity: 2, role: 'in', reason: 'Elimina payoff creatures de resistencia media.' }
          ],
          outCards: [
            { cardName: 'Voldaren Epicure', quantity: 4, role: 'out', reason: 'Se neutraliza fácilmente frente al enjambre élfico.' }
          ],
          gameplayTips: [
            'Juega como control/tempo: mata sin piedad a Timberwatch Elf, Priest of Titania y Wellwisher.',
            'Mantén a Sneaky Snacker en el mazo: su evasión aérea y daño recurrente es crucial frente a su ganancia de vidas post-sideboard.'
          ]
        },
        {
          vsDeckName: 'Bogles',
          difficulty: 'unfavorable',
          role: 'Aggro',
          inCards: [
            { cardName: 'End the Festivities', quantity: 2, role: 'in', reason: 'Castiga si juegan criaturas antes de encantarlas o si cometen errores.' }
          ],
          outCards: [
            { cardName: 'Fiery Temper', quantity: 1, role: 'out', reason: 'Falta de objetivos válidos con Hexproof.' },
            { cardName: 'Faithless Looting', quantity: 1, role: 'out', reason: 'Mantener amenazas directas.' }
          ],
          gameplayTips: [
            'Esencialmente una carrera en la que llevan ventaja. Con Guttersnipe en mesa es posible cerrar la partida en turno 4 sin interactuar con sus criaturas.',
            'End the Festivities puede darte la victoria inmediata si bajan un Bogle sin auras.'
          ]
        },
        {
          vsDeckName: 'Caw Gates',
          difficulty: 'unfavorable',
          role: 'Aggro',
          inCards: [
            { cardName: 'Suplex', quantity: 2, role: 'in', reason: 'Elimina Guardian of the Guildpact o Kessig y presiona recursos.' },
            { cardName: 'Pyroblast', quantity: 3, role: 'in', reason: 'Contrarresta Brainstorm, Modern Age y criaturas azules.' }
          ],
          outCards: [
            { cardName: 'Faithless Looting', quantity: 1, role: 'out', reason: 'Reducción de card disadvantage.' },
            { cardName: 'Voldaren Epicure', quantity: 2, role: 'out', reason: 'Bloqueado por Sacred Cat y Squadron Hawk.' },
            { cardName: 'Grab the Prize', quantity: 1, role: 'out', reason: 'Ajuste de curva.' },
            { cardName: 'Fireblast', quantity: 1, role: 'out', reason: 'Anulado con facilidad por Prismatic Strands o Hydroblast.' }
          ],
          gameplayTips: [
            'Aplica presión temprana con criaturas y remata en midgame con daño directo.',
            'No bajes Guttersnipe o Kessig a menos que puedas lanzar múltiples hechizos de inmediato.',
            'Mata sus criaturas blancas siempre que sea posible para impedir que lancen Prismatic Strands por Flashback.'
          ]
        },
        {
          vsDeckName: 'Mono Red Madness / Mirror',
          difficulty: 'even',
          role: 'Aggro (Play) / Control (Draw)',
          inCards: [
            { cardName: 'Suplex', quantity: 2, role: 'in', reason: 'Mata Kessig Flamebreather y exilia Sneaky Snacker de forma permanente.' },
            { cardName: 'End the Festivities', quantity: 2, role: 'in', reason: 'Limpia Voldaren Epicure y Sneaky Snacker simultáneamente.' }
          ],
          outCards: [
            { cardName: 'Faithless Looting', quantity: 1, role: 'out', reason: 'Pérdida de ventaja de cartas en el mirror.' },
            { cardName: 'Lava Dart', quantity: 1, role: 'out', reason: 'Ajuste de daño.' },
            { cardName: 'Voldaren Epicure', quantity: 2, role: 'out', reason: 'Vulnerable a End the Festivities y Lava Dart rival.' }
          ],
          gameplayTips: [
            'En el play tienes ventaja para presionar; en el draw asume postura de control y no intentes una carrera alocada.',
            'Sneaky Snacker y Grab the Prize son las cartas clave en mano inicial.',
            'Guarda removal para Guttersnipe y Kessig; quien resuelve primero a Guttersnipe suele ganar.',
            'No traigas Relic of Progenitus: resta demasiada agresividad y consistencia.'
          ]
        },
        {
          vsDeckName: 'Mono U Terror',
          difficulty: 'unfavorable',
          role: 'Tempo',
          inCards: [
            { cardName: 'Pyroblast', quantity: 4, role: 'in', reason: 'Respuesta vital para contrarrestar sus 5/5, Lórien Revealed y cantrips.' },
            { cardName: 'Relic of Progenitus', quantity: 3, role: 'in', reason: 'Vacía su cementerio y retrasa dramáticamente la salida de Tolarian Terror.' }
          ],
          outCards: [
            { cardName: 'Grab the Prize', quantity: 1, role: 'out', reason: 'Objetivo fácil para Spell Pierce / Counterspell.' },
            { cardName: 'Fireblast', quantity: 2, role: 'out', reason: 'Quedarse sin tierras ante contrahechizos es derrota segura.' },
            { cardName: 'Lava Dart', quantity: 1, role: 'out', reason: 'No mata criaturas 5/5.' },
            { cardName: 'Lightning Bolt', quantity: 3, role: 'out', reason: 'Baja efectividad ante alta resistencia.' }
          ],
          gameplayTips: [
            'G1 solemos tener ventaja; G2/G3 traen oleadas de contrahechizos baratos y Hydroblast.',
            'Bajar Relic en turno 1 retrasa su cementerio varios turnos. Voldaren Epicure y Sneaky Snacker son pilares de presión constante.'
          ]
        },
        {
          vsDeckName: 'Mono Blue Faeries',
          difficulty: 'even',
          role: 'Control',
          inCards: [
            { cardName: 'Pyroblast', quantity: 4, role: 'in', reason: 'Contrarresta Ninja of the Deep Hours, Spellstutter y cantrips.' },
            { cardName: 'End the Festivities', quantity: 2, role: 'in', reason: 'Limpia hadas 1/1 y arruina la condición para Ninjutsu.' }
          ],
          outCards: [
            { cardName: 'Sneaky Snacker', quantity: 4, role: 'out', reason: 'Plan 1 (Recomendado): No aporta valor inmediato frente a contrahechizos.' },
            { cardName: 'Fireblast', quantity: 1, role: 'out', reason: 'Evitar sacrificar tierras frente a contadores.' },
            { cardName: 'Grab the Prize', quantity: 1, role: 'out', reason: 'Demasiado predecible.' }
          ],
          gameplayTips: [
            'Adopta postura de control: elimina cada hada y evita a toda costa que el Ninja conecte.',
            'Opción alternativa: Si prefieres mantener a Snacker para defensa, saca 1 Fireblast, 2 Grab the Prize, 2 Epicure y 1 Fiery Temper.'
          ]
        },
        {
          vsDeckName: 'Mono Red Rally',
          difficulty: 'unfavorable',
          role: 'Control',
          inCards: [
            { cardName: 'Cast into the Fire', quantity: 2, role: 'in', reason: 'Destruye tierras artefacto, mata 2 bichos o exilia Synthesizer.' },
            { cardName: 'End the Festivities', quantity: 2, role: 'in', reason: 'Barre enjambres de trasgos y criaturas 1/1.' }
          ],
          outCards: [
            { cardName: 'Sneaky Snacker', quantity: 4, role: 'out', reason: 'Demasiado lento ante su explosión en primeros 2 turnos.' }
          ],
          gameplayTips: [
            'Son más rápidos que nosotros; la clave es sobrevivir los primeros turnos y estabilizar en midgame con ventaja de cartas.',
            'Fireblast es de las peores cartas en mano inicial aquí; prioriza control de tablero.'
          ]
        },
        {
          vsDeckName: 'Black Sacrifice',
          difficulty: 'favorable',
          role: 'Tempo / Control',
          inCards: [
            { cardName: 'End the Festivities', quantity: 2, role: 'in', reason: 'Limpia tokens de Nested Shambler y bichos x/1.' },
            { cardName: 'Suplex', quantity: 2, role: 'in', reason: 'Mata Carrion Feeder y Mortician Beetle antes de que crezcan.' }
          ],
          outCards: [
            { cardName: 'Voldaren Epicure', quantity: 4, role: 'out', reason: 'Fácilmente bloqueado o aprovechado por el rival.' }
          ],
          gameplayTips: [
            'No permitas que Carrion Feeder o Mortician Beetle crezcan descontrolados.',
            'Cuidado con Sylvok Lifestaff y Nested Shambler con Supernatural Stamina.',
            'Sneaky Snacker vuela sobre sus defensas y aplica daño constante.'
          ]
        },
        {
          vsDeckName: 'Spy Combo',
          difficulty: 'favorable',
          role: 'Control',
          inCards: [
            { cardName: 'Relic of Progenitus', quantity: 3, role: 'in', reason: 'Exilia su cementerio entero en respuesta a Dread Return, ganando la partida.' },
            { cardName: 'Suplex', quantity: 1, role: 'in', reason: 'Elimina aceleradores tempranos.' }
          ],
          outCards: [
            { cardName: 'Voldaren Epicure', quantity: 4, role: 'out', reason: 'No aporta interacción relevante.' }
          ],
          gameplayTips: [
            'Mata sus aceleradores de maná (Tinder Wall, Wild Cantor) y baja Relic para neutralizar su Dread Return.',
            'Guttersnipe cierra la partida a gran velocidad en cuanto toca la mesa.'
          ]
        },
        {
          vsDeckName: 'Dimir Faeries',
          difficulty: 'even',
          role: 'Tempo',
          inCards: [
            { cardName: 'Pyroblast', quantity: 4, role: 'in', reason: 'Contrarresta hadas, ninjas, Lorien Revealed y contrahechizos.' }
          ],
          outCards: [
            { cardName: 'Fireblast', quantity: 1, role: 'out', reason: 'Riesgo innecesario ante counterspells.' },
            { cardName: 'Grab the Prize', quantity: 2, role: 'out', reason: 'Lento frente a tempo negro-azul.' },
            { cardName: 'Faithless Looting', quantity: 1, role: 'out', reason: 'Ajuste de recursos.' }
          ],
          gameplayTips: [
            'G1 suele ser favorable porque su Snuff Out les cuesta 4 vidas y nos da ventaja de tempo.',
            'Evita que mantengan criaturas para Ninjutsu sobre Augur of Bolas.',
            'Lanza tus instantáneos al final de su turno para forzarlos a girar su maná cuando a ti te convenga.'
          ]
        },
        {
          vsDeckName: 'Familiars',
          difficulty: 'favorable',
          role: 'Aggro',
          inCards: [
            { cardName: 'Pyroblast', quantity: 4, role: 'in', reason: 'Elimina Sunscape Familiar, Mulldrifter o niega loops de Ghostly Flicker.' }
          ],
          outCards: [
            { cardName: 'Fireblast', quantity: 1, role: 'out', reason: 'Ajuste frente a respuestas azules.' },
            { cardName: 'Lava Dart', quantity: 1, role: 'out', reason: 'No interactúa bien con God-Pharaoh\'s Faithful.' },
            { cardName: 'Faithless Looting', quantity: 1, role: 'out', reason: 'Conservar presión.' },
            { cardName: 'Voldaren Epicure', quantity: 1, role: 'out', reason: 'Menor impacto.' }
          ],
          gameplayTips: [
            'God-Pharaoh\'s Faithful es su carta más peligrosa contra nosotros; presiónalos antes de que estabilicen.',
            'Sunscape Familiar debe morir en cuanto entre al campo de batalla.'
          ]
        },
        {
          vsDeckName: 'Mono White Aggro',
          difficulty: 'even',
          role: 'Midrange / Control',
          inCards: [
            { cardName: 'Suplex', quantity: 2, role: 'in', reason: 'Elimina inspectores y amenazas de tamaño medio.' },
            { cardName: 'End the Festivities', quantity: 2, role: 'in', reason: 'Limpia tokens y criaturas x/1.' }
          ],
          outCards: [
            { cardName: 'Voldaren Epicure', quantity: 4, role: 'out', reason: 'Bloqueado con facilidad por Thraben/Novice Inspector.' }
          ],
          gameplayTips: [
            'Kessig Flamebreather en T2 es fantástico como bloqueador y fuente de daño pasivo.',
            'Lunarch Veteran debe morir inmediatamente con Lava Dart antes de que genere vidas masivas.',
            'Guttersnipe y Kessig son tus condiciones principales de victoria.'
          ]
        },
        {
          vsDeckName: 'Poison Storm',
          difficulty: 'favorable',
          role: 'Aggro',
          inCards: [
            { cardName: 'Pyroblast', quantity: 4, role: 'in', reason: 'Contrarresta cantrips azules y motores de proliferación.' }
          ],
          outCards: [
            { cardName: 'Lava Dart', quantity: 1, role: 'out', reason: 'Sin criaturas objetivo que eliminar.' },
            { cardName: 'Faithless Looting', quantity: 1, role: 'out', reason: 'Ajuste de cartas.' },
            { cardName: 'Grab the Prize', quantity: 1, role: 'out', reason: 'Curva.' },
            { cardName: 'Fiery Temper', quantity: 1, role: 'out', reason: 'Ajuste.' }
          ],
          gameplayTips: [
            'Aunque jueguen 4 Weather the Storm, son esencialmente moniazules y Pyroblast es demoledor.',
            'Aplica fuerte presión con criaturas para obligarlos a gastar Weather con tormenta baja.'
          ]
        },
        {
          vsDeckName: 'Golgari Gardens',
          difficulty: 'even',
          role: 'Aggro',
          inCards: [
            { cardName: 'Cast into the Fire', quantity: 2, role: 'in', reason: 'Exilia Campfire (vital contra su ganancia de vidas) y Lembas.' }
          ],
          outCards: [
            { cardName: 'Faithless Looting', quantity: 1, role: 'out', reason: 'Evita perder cartas ante Duress.' },
            { cardName: 'Lightning Bolt', quantity: 1, role: 'out', reason: 'Menor eficiencia contra criaturas con alta resistencia.' }
          ],
          gameplayTips: [
            'G1 es muy favorable; en G2/G3 traen Duress, Weather the Storm y Campfire.',
            'Voldaren Epicure y Sneaky Snacker fuerzan sus removals, creando ventanas para aterrizar a Guttersnipe y Kessig cuando se giren.'
          ]
        },
        {
          vsDeckName: 'Gruul Ramp',
          difficulty: 'favorable',
          role: 'Aggro',
          inCards: [
            { cardName: 'End the Festivities', quantity: 2, role: 'in', reason: 'Respuesta de 1 maná para matar a Arbor Elf y tokens.' }
          ],
          outCards: [
            { cardName: 'Faithless Looting', quantity: 1, role: 'out', reason: 'Maximizar presión.' },
            { cardName: 'Voldaren Epicure', quantity: 1, role: 'out', reason: 'Ajuste de criaturas terrestres.' }
          ],
          gameplayTips: [
            'Mata a Arbor Elf en cuanto entre; sin rampa su mazo es torpe.',
            'En G2/G3 jugarán Weather the Storm; sé paciente y no te vacíes la mano en un solo turno si tienen maná abierto.'
          ]
        },
        {
          vsDeckName: 'Rakdos Madness',
          difficulty: 'unfavorable',
          role: 'Combo',
          inCards: [
            { cardName: 'End the Festivities', quantity: 2, role: 'in', reason: 'Limpia Voldaren Epicure y Sneaky Snacker al mismo tiempo.' }
          ],
          outCards: [
            { cardName: 'Faithless Looting', quantity: 1, role: 'out', reason: 'Ajuste de ventaja de cartas.' },
            { cardName: 'Lava Dart', quantity: 1, role: 'out', reason: 'Ajuste.' }
          ],
          gameplayTips: [
            'Uno de los peores emparejamientos porque drenan vida y se curan a la vez.',
            'Enfócalo con mentalidad de mazo combo: no pierdas turnos de tierra, acumula recursos y genera un turno masivo con Guttersnipe.'
          ]
        },
        {
          vsDeckName: 'Boros Synthesizer',
          difficulty: 'unfavorable',
          role: 'Aggro',
          inCards: [
            { cardName: 'Suplex', quantity: 2, role: 'in', reason: 'Destruye tierras o criaturas y presiona recursos.' },
            { cardName: 'Cast into the Fire', quantity: 2, role: 'in', reason: 'Exilia Lembas, Campfire o Synthesizer.' }
          ],
          outCards: [
            { cardName: 'Voldaren Epicure', quantity: 4, role: 'out', reason: 'Inútil frente a Glint Hawk, Kor Skyfisher y removal blanco.' }
          ],
          gameplayTips: [
            'Tienen defensas pesadas y ganancia de vidas; Guttersnipe + Fireblast es la mejor vía de victoria.',
            'Cast into the Fire y Suplex frenan su motor de artefactos.'
          ]
        },
        {
          vsDeckName: 'Jund Wildfire',
          difficulty: 'favorable',
          role: 'Aggro',
          inCards: [
            { cardName: 'Cast into the Fire', quantity: 4, role: 'in', reason: 'Exilia puentes de tierra indestructibles e interactúa con artefactos.' }
          ],
          outCards: [
            { cardName: 'Lightning Bolt', quantity: 2, role: 'out', reason: 'No mata Writhing Chrysalis ni criaturas de resistencia 4+.' },
            { cardName: 'Lava Dart', quantity: 2, role: 'out', reason: 'Bajo impacto en tablero.' }
          ],
          gameplayTips: [
            'Cuidado con Writhing Chrysalis en turno 3; si aterriza domina la mesa.',
            'Juega alrededor de Weather the Storm post-sideboard.',
            'Regla de oro: si usan Toxin Analysis con Lifelink, bloquea con Epicure y mátalo con tu propio burn antes del daño de combate para impedir que curen vidas.'
          ]
        },
        {
          vsDeckName: 'Tron Ephemerate',
          difficulty: 'even',
          role: 'Aggro',
          inCards: [
            { cardName: 'Pyroblast', quantity: 4, role: 'in', reason: 'Contrarresta Ephemerate, Mulldrifter, Mnemonic Wall y contrahechizos.' },
            { cardName: 'Suplex', quantity: 2, role: 'in', reason: 'Presiona su desarrollo de maná y piezas clave.' }
          ],
          outCards: [
            { cardName: 'Faithless Looting', quantity: 1, role: 'out', reason: 'Ajuste de cartas.' },
            { cardName: 'Lava Dart', quantity: 1, role: 'out', reason: 'Inútil contra muros.' },
            { cardName: 'Voldaren Epicure', quantity: 1, role: 'out', reason: 'Bloqueado por criaturas con mucha defensa.' },
            { cardName: 'Grab the Prize', quantity: 1, role: 'out', reason: 'Curva.' },
            { cardName: 'Fiery Temper', quantity: 1, role: 'out', reason: 'Ajuste.' },
            { cardName: 'Lightning Bolt', quantity: 1, role: 'out', reason: 'Ajuste.' }
          ],
          gameplayTips: [
            'Establece un reloj rápido temprano; tienen removal limitado en los primeros turnos.',
            'Guttersnipe es el rey del matchup: juégalo en tu segunda fase principal en T4 con Fireblast para evitar respuestas.',
            'No te apures a quemarte la mano sin contemplar Weather the Storm.'
          ]
        },
        {
          vsDeckName: 'Walls Combo',
          difficulty: 'favorable',
          role: 'Control',
          inCards: [
            { cardName: 'Suplex', quantity: 2, role: 'in', reason: 'Elimina productores de maná clave como Overgrown Battlement y Axebane Guardian.' }
          ],
          outCards: [
            { cardName: 'Voldaren Epicure', quantity: 2, role: 'out', reason: 'Totalmente neutralizado por muros 0/3 y 0/4.' }
          ],
          gameplayTips: [
            'Mata a toda criatura que produzca maná de colores o maná por número de defensores.',
            'Guttersnipe hace daño directo sin importar cuántos bloqueadores tengan en mesa.',
            'Si juegan muchas criaturas de resistencia 1, puedes traer 2 End the Festivities sacando los 4 Epicure.'
          ]
        },
        {
          vsDeckName: 'Dredge',
          difficulty: 'favorable',
          role: 'Aggro',
          inCards: [
            { cardName: 'Relic of Progenitus', quantity: 3, role: 'in', reason: 'Limpia el cementerio y anula Gnaw to the Bone.' },
            { cardName: 'End the Festivities', quantity: 2, role: 'in', reason: 'Elimina criaturas pequeñas y abre huecos de ataque.' }
          ],
          outCards: [
            { cardName: 'Voldaren Epicure', quantity: 4, role: 'out', reason: 'Superado con rapidez por las criaturas del rival.' },
            { cardName: 'Faithless Looting', quantity: 1, role: 'out', reason: 'Ajuste de recursos.' }
          ],
          gameplayTips: [
            'La carta a respetar es Gnaw to the Bone; mantén maná abierto para activar Relic en respuesta a su lanzamiento.',
            'Nuestra velocidad de daño suele ser superior si no les permites curarse.'
          ]
        },
        {
          vsDeckName: 'Izzet Terror',
          difficulty: 'unfavorable',
          role: 'Tempo',
          inCards: [
            { cardName: 'Pyroblast', quantity: 4, role: 'in', reason: 'Pelea contra contrahechizos y destruye amenazas azules.' },
            { cardName: 'Relic of Progenitus', quantity: 3, role: 'in', reason: 'Frena el cementerio y retrasa a Tolarian Terror.' }
          ],
          outCards: [
            { cardName: 'Faithless Looting', quantity: 1, role: 'out', reason: 'Ajuste.' },
            { cardName: 'Lava Dart', quantity: 2, role: 'out', reason: 'No mata criaturas 5/5.' },
            { cardName: 'Grab the Prize', quantity: 2, role: 'out', reason: 'Fácilmente contrarrestado.' },
            { cardName: 'Fireblast', quantity: 1, role: 'out', reason: 'Riesgoso sacrificar tierras.' },
            { cardName: 'Lightning Bolt', quantity: 1, role: 'out', reason: 'Ajuste de daño.' }
          ],
          gameplayTips: [
            'G1 es favorable si les cuesta encontrar rojo; G2/G3 traen mucho contrahechizo y removal.',
            'Juega a ritmo medido; no tires tus hechizos principales cuando tengan maná azul abierto.',
            'Relic compra turnos esenciales para acumular el turno letal con Guttersnipe.'
          ]
        },
        {
          vsDeckName: 'Glintblade / Orzhov Blade',
          difficulty: 'favorable',
          role: 'Aggro',
          inCards: [
            { cardName: 'Suplex', quantity: 2, role: 'in', reason: 'Castiga desarrollo de tierras o criaturas y mantiene presión.' },
            { cardName: 'Cast into the Fire', quantity: 4, role: 'in', reason: 'Exilia Lembas, Ichor Wellspring y artefactos de ganancia de vidas.' }
          ],
          outCards: [
            { cardName: 'Faithless Looting', quantity: 1, role: 'out', reason: 'Conservar recursos.' },
            { cardName: 'Lava Dart', quantity: 1, role: 'out', reason: 'Bajo impacto.' },
            { cardName: 'Voldaren Epicure', quantity: 4, role: 'out', reason: 'Bloqueado por Refurbished Familiar y Glint Hawk.' }
          ],
          gameplayTips: [
            'Su juego temprano es lento, lo que nos da tiempo para preparar a Guttersnipe.',
            'Mantén 1 maná disponible cuando lancen Refurbished Familiar para descartar Fiery Temper o Sneaky Snacker sacando provecho.',
            'Cuidado con Thraben Charm al revivir a Snacker, ya que puede exiliarlo.'
          ]
        },
        {
          vsDeckName: 'Altar Tron',
          difficulty: 'even',
          role: 'Aggro',
          inCards: [
            { cardName: 'Relic of Progenitus', quantity: 3, role: 'in', reason: 'Interrumpe interacciones clave del cementerio y su combo con Ashnod\'s Altar.' },
            { cardName: 'Suplex', quantity: 2, role: 'in', reason: 'Presiona tierras de Tron y recursos.' }
          ],
          outCards: [
            { cardName: 'Faithless Looting', quantity: 2, role: 'out', reason: 'Mantener cartas con impacto.' },
            { cardName: 'Lava Dart', quantity: 1, role: 'out', reason: 'Ajuste.' },
            { cardName: 'Fiery Temper', quantity: 1, role: 'out', reason: 'Ajuste.' },
            { cardName: 'Lightning Bolt', quantity: 1, role: 'out', reason: 'Ajuste.' }
          ],
          gameplayTips: [
            'El jugador en el play tiene gran ventaja; en T3 con Tron ensamblado se complica.',
            'Juega con mucho cuidado alrededor de Weather the Storm y Fangren Marauder.',
            'Suplex interrumpe la formación de Tron o piezas clave del combo.'
          ]
        },
        {
          vsDeckName: 'Esper Affinity',
          difficulty: 'even',
          role: 'Aggro',
          inCards: [
            { cardName: 'Suplex', quantity: 2, role: 'in', reason: 'Destruye tierras o criaturas de artefacto.' },
            { cardName: 'Cast into the Fire', quantity: 4, role: 'in', reason: 'Exilia puentes y artefactos de soporte.' },
            { cardName: 'Pyroblast', quantity: 3, role: 'in', reason: 'Lucha contra Blue Elemental Blast, Hydroblast y robo azul.' }
          ],
          outCards: [
            { cardName: 'Voldaren Epicure', quantity: 4, role: 'out', reason: 'Superado por Myr Enforcer.' },
            { cardName: 'Lava Dart', quantity: 2, role: 'out', reason: 'Bajo impacto.' },
            { cardName: 'Grab the Prize', quantity: 1, role: 'out', reason: 'Lento.' },
            { cardName: 'Fireblast', quantity: 1, role: 'out', reason: 'Riesgoso ante contadores.' },
            { cardName: 'Faithless Looting', quantity: 1, role: 'out', reason: 'Ajuste de densidad de respuestas.' }
          ],
          gameplayTips: [
            'Suelen jugar Navigator\'s Compass en MD; presiona antes de que estabilicen con vidas.',
            'Cast into the Fire y Suplex destruyen sus puentes y recursos para evitar que lleguen al late game.'
          ]
        },
        {
          vsDeckName: 'Cycle Storm',
          difficulty: 'favorable',
          role: 'Aggro',
          inCards: [
            { cardName: 'Relic of Progenitus', quantity: 3, role: 'in', reason: 'Activa en respuesta a Reaping the Graves para arruinar su turno de combo.' }
          ],
          outCards: [
            { cardName: 'Fiery Temper', quantity: 1, role: 'out', reason: 'Ajuste de daño.' },
            { cardName: 'Sneaky Snacker', quantity: 1, role: 'out', reason: 'Lento en carrera pura.' },
            { cardName: 'Lava Dart', quantity: 1, role: 'out', reason: 'Sin criaturas a las que matar.' }
          ],
          gameplayTips: [
            'Carrera pura donde nuestro reloj es más rápido y consistente.',
            'Guarda la activación de Relic de Progenitus para responder a Reaping the Graves; no caigas en carnadas tempranas.'
          ]
        },
        {
          vsDeckName: 'Turbo Fog (Jund)',
          difficulty: 'favorable',
          role: 'Burn',
          inCards: [
            { cardName: 'Cast into the Fire', quantity: 2, role: 'in', reason: 'Elimina artefactos clave y aporta daño extra.' }
          ],
          outCards: [
            { cardName: 'Fiery Temper', quantity: 1, role: 'out', reason: 'Ajuste.' },
            { cardName: 'Faithless Looting', quantity: 1, role: 'out', reason: 'Ajuste.' }
          ],
          gameplayTips: [
            'Uno de los mejores emparejamientos: casi todo nuestro daño viene de hechizos y pingers (Guttersnipe y Kessig), ignorando totalmente sus efectos de Fog.',
            'Si juegan splash azul (Hydroblast + Weather the Storm), ten paciencia y no te precipites.'
          ]
        }
      ]
    },
    {
      id: 'blue-terror',
      slug: 'blue-terror',
      name: 'Blue Terror',
      metaPercentage: '8.1%',
      metaCount: 209,
      imageUrl: 'https://cards.mtggoldfish.com/images/019ce2f0-0fc9-7bd2-a5ab-5777a791c3e4/variants/672/938/card_image.webp',
      colors: ['U'],
      archetypeType: 'Control',
      author: '',
      decklistUrl: 'https://metagame.info/en-us/mtg/articles/pauper-mono-blue-terror-the-ultimate-guide-to-the-deck-and-sideboard',
      description: 'Guía definitiva de Metagame.info: acelera el cementerio con automill, despliega amenazas 5/5 y 6/5 por 1-2 manás y protege tu ventaja con Counterspell, Murmuring Mystic y Deem Inferior.',
      keyCards: [
        'Tolarian Terror',
        'Cryptic Serpent',
        'Delver of Secrets',
        'Murmuring Mystic',
        'Brainstorm',
        'Counterspell',
        'Mental Note',
        'Thought Scour',
        'Deem Inferior',
        'Lórien Revealed',
        'Ponder',
        'Sleep of the Dead',
        'Deep Analysis'
      ],
      sideboardCards: [
        'Annul (4)',
        'Hydroblast (4)',
        'Blue Elemental Blast (2)',
        'Dispel (2)',
        'Gut Shot (2)',
        'Envelop (1)'
      ],
      maybeboard: [
        { name: 'Force Spike', note: 'Aumenta la interacción en primeros turnos, aunque pierde valor como topdeck en partidas avanzadas.' },
        { name: 'Steel Sabotage', note: 'Alternativa sólida a Annul si los artefactos dominan; puede rebotar tierras artefacto en respuesta a Cleansing Wildfire.' },
        { name: 'Delverless Builds', note: 'Variante sin Delver para dedicar más espacios a ventaja de cartas o bloqueadores en metagames de mucho control.' }
      ],
      proTips: [
        'Brainstorm antes de Automill: Lanza Brainstorm, pon dos cartas innecesarias en la parte superior y usa Mental Note o Thought Scour sobre ti mismo para limpiarlas al cementerio.',
        'Brainstorm con trigger de Delver en pila: Durante tu mantenimiento, coloca un instantáneo o conjuro encima para garantizar la transformación inmediata en turno 2.',
        'Brainstorm antes de Deem Inferior: Al robar 3 cartas, reduces el coste de Deem Inferior a solo {U}, resolviendo cualquier permanente no-tierra por 2 manás en total.',
        'Combo Deem Inferior + Thought Scour rival: Si tu rival pone su carta la segunda desde arriba, usa Thought Scour sobre él para molerla definitivamente.',
        'Despliegue con Protección: Con 6 hechizos en cementerio e Islas suficientes, Terror cuesta {U}, dejando {U}{U} abiertos para Counterspell. Cryptic Serpent cuesta mínimo {U}{U}.',
        'Paciencia con Automill ante Hate de Cementerio: Si el rival tiene Bojuka Bog o Relic, no vacíes toda tu mano de automill; guarda una copia para reconstruirte tras el barrido.',
        'Reglas Clave a Recordar: Cryptic Serpent siempre cuesta al menos {U}{U}; Ward no protege contra edictos de sacrificio; Writhing Chrysalis tiene Devoid (incolora), por lo que Hydroblast NO puede afectarle.'
      ],
      matchups: [
        {
          vsDeckName: 'Mono-Red Madness',
          difficulty: 'even',
          role: 'Control',
          inCards: [
            { cardName: 'Hydroblast', quantity: 4, role: 'in', reason: 'Intercambio directo por 1 maná contra daño y Kessig.' },
            { cardName: 'Blue Elemental Blast', quantity: 2, role: 'in', reason: 'Ráfagas adicionales contra amenazas rojas.' },
            { cardName: 'Dispel', quantity: 2, role: 'in', reason: 'Frena burn a velocidad de instantáneo y Pyroblast rival.' },
            { cardName: 'Envelop', quantity: 1, role: 'in', reason: 'Contrarresta conjuros de robo y daño.' }
          ],
          outCards: [
            { cardName: 'Delver of Secrets', quantity: 4, role: 'out', reason: 'Muere ante cualquier chispa o ping.' },
            { cardName: 'Murmuring Mystic', quantity: 2, role: 'out', reason: 'Demasiado lento para el ritmo de quemadura directa.' },
            { cardName: 'Deep Analysis', quantity: 1, role: 'out', reason: 'Pagar 3 vidas es suicidio contra daño directo.' },
            { cardName: 'Sleep of the Dead', quantity: 2, role: 'out', reason: 'Girar criaturas no detiene habilidades pasivas de Kessig o Guttersnipe.' }
          ],
          gameplayTips: [
            'Prioriza contrarrestar los motores de daño pasivo: Kessig Flamebreather y Guttersnipe, además de sus hechizos de robo.',
            'Sleep no detiene sus habilidades disparadas. Guarda Deem Inferior para amenazas resueltas.',
            'Dispel ayuda contra chispas instantáneas y Pyroblast, pero no frena criaturas: asegúrate de tener respuesta temprana en mano.'
          ]
        },
        {
          vsDeckName: 'Rakdos Madness',
          difficulty: 'even',
          role: 'Control',
          inCards: [
            { cardName: 'Hydroblast', quantity: 4, role: 'in', reason: 'Contrarresta hechizos rojos y Pyroblasts.' },
            { cardName: 'Blue Elemental Blast', quantity: 2, role: 'in', reason: 'Ráfagas adicionales.' },
            { cardName: 'Dispel', quantity: 2, role: 'in', reason: 'Protección contra respuestas instantáneas.' },
            { cardName: 'Envelop', quantity: 1, role: 'in', reason: 'Contrarresta robos y conjuros.' }
          ],
          outCards: [
            { cardName: 'Delver of Secrets', quantity: 4, role: 'out', reason: 'Bajo impacto y fácil de remover.' },
            { cardName: 'Deep Analysis', quantity: 1, role: 'out', reason: 'Peligro por coste de vidas.' },
            { cardName: 'Deem Inferior', quantity: 4, role: 'out', reason: 'Rebotar amenazas baratas con prisa no compra suficiente tiempo.' }
          ],
          gameplayTips: [
            'Mantenemos Mystic y Sleep para frenar a sus voladoras (Kitchen Imp).',
            'Las ráfagas azules no pueden tocar cartas negras como Vampire\'s Kiss o Kitchen Imp; no gastes tus recursos en vano.',
            'Hard counters y Envelop cubren diferentes amenazas.'
          ]
        },
        {
          vsDeckName: 'Red Rally',
          difficulty: 'even',
          role: 'Control',
          inCards: [
            { cardName: 'Hydroblast', quantity: 4, role: 'in', reason: 'Contrarresta daño y chispas rojas.' },
            { cardName: 'Blue Elemental Blast', quantity: 2, role: 'in', reason: 'Ráfagas de soporte.' },
            { cardName: 'Annul', quantity: 4, role: 'in', reason: 'Frena Experimental Synthesizer, Clockwork Percussionist y hate.' },
            { cardName: 'Envelop', quantity: 1, role: 'in', reason: 'Contrarresta conjuros de enjambre.' }
          ],
          outCards: [
            { cardName: 'Delver of Secrets', quantity: 4, role: 'out', reason: 'Frágil ante daño masivo.' },
            { cardName: 'Murmuring Mystic', quantity: 2, role: 'out', reason: 'Muy costoso.' },
            { cardName: 'Deep Analysis', quantity: 1, role: 'out', reason: 'Coste de vida.' },
            { cardName: 'Deem Inferior', quantity: 2, role: 'out', reason: 'Ajuste de interacción.' },
            { cardName: 'Sleep of the Dead', quantity: 2, role: 'out', reason: 'Bajo impacto contra mesas anchas.' }
          ],
          gameplayTips: [
            'El plan es estabilizar con Serpientes gigantes y dejarlas como bloqueadores.',
            'Annul es crucial contra Synthesizer y odio de artefactos.',
            'Contrarresta los hechizos que inflan sus mesas anchas, como Goblin Bushwhacker y Rally at the Hornburg.'
          ]
        },
        {
          vsDeckName: 'Mono-Blue Terror (Mirror)',
          difficulty: 'even',
          role: 'Tempo',
          inCards: [
            { cardName: 'Gut Shot', quantity: 2, role: 'in', reason: 'Mata a Delver of Secrets en turno 1 antes de que se transforme.' },
            { cardName: 'Dispel', quantity: 2, role: 'in', reason: 'Gana las guerras de contras por 1 maná.' }
          ],
          outCards: [
            { cardName: 'Ponder', quantity: 2, role: 'out', reason: 'Ajuste de tempo.' },
            { cardName: 'Deem Inferior', quantity: 2, role: 'out', reason: 'Ajuste de respuestas.' }
          ],
          gameplayTips: [
            'Un Delver activo en T1 dicta quién ejerce la presión desde el inicio.',
            'Gut Shot neutraliza aperturas agresivas; Dispel gana las guerras de contras.',
            'Conservamos 2 Deem para lidiar con Mystic o Serpientes enemigas, y Sleep of the Dead para romper estancamientos.'
          ]
        },
        {
          vsDeckName: 'Dimir Terror & Dimir Faeries',
          difficulty: 'even',
          role: 'Tempo',
          inCards: [
            { cardName: 'Dispel', quantity: 2, role: 'in', reason: 'Protege nuestras serpientes de Snuff Out y Cast Down.' }
          ],
          outCards: [
            { cardName: 'Ponder', quantity: 2, role: 'out', reason: 'Ajuste de interacción a velocidad instantánea.' }
          ],
          gameplayTips: [
            'Juega siempre con maná enderezado para proteger tus criaturas de Snuff Out y Cast Down.',
            'No contrarrestes cada removal si eso permite que resuelvan un Mystic o una criatura con Monarch/Initiative.',
            'Alerta con Unexpected Fangs y su lifelink masivo. Si juegan muchas Moon-Circuit Hacker, mete 2 Gut Shots por 2 Deem.'
          ]
        },
        {
          vsDeckName: 'Mono-Blue Faeries',
          difficulty: 'favorable',
          role: 'Control',
          inCards: [
            { cardName: 'Gut Shot', quantity: 2, role: 'in', reason: 'Dispara a hadas 1/1 a coste cero antes del Ninjutsu.' },
            { cardName: 'Annul', quantity: 2, role: 'in', reason: 'Frena Bind the Monster, Unable to Scream y Relic of Progenitus.' },
            { cardName: 'Dispel', quantity: 2, role: 'in', reason: 'Gana disputas de contras y frena interacciones instantáneas.' }
          ],
          outCards: [
            { cardName: 'Deep Analysis', quantity: 1, role: 'out', reason: 'Lento.' },
            { cardName: 'Deem Inferior', quantity: 2, role: 'out', reason: 'Rebotar criaturas baratas no es óptimo.' },
            { cardName: 'Sleep of the Dead', quantity: 1, role: 'out', reason: 'Menor necesidad.' },
            { cardName: 'Ponder', quantity: 2, role: 'out', reason: 'Ajuste de velocidad.' }
          ],
          gameplayTips: [
            'Evita que sus criaturas generen ventaja de cartas vía Ninjutsu a toda costa.',
            'En el draw, Gut Shot rápido es vital; en el play tienes más margen para esculpir tu mano.',
            'Una vez aterrices una 5/5 o 6/5, déjala como bloqueadora en lugar de atacar a ciegas para cortar el paso a los ninjas.'
          ]
        },
        {
          vsDeckName: 'Grixis Affinity',
          difficulty: 'favorable',
          role: 'Control',
          inCards: [
            { cardName: 'Annul', quantity: 4, role: 'in', reason: 'Contrarresta amenazas de artefacto, Blood Fountain y hate.' },
            { cardName: 'Hydroblast', quantity: 4, role: 'in', reason: 'Elimina cartas rojas, Galvanic Blast y Pyroblasts.' },
            { cardName: 'Dispel', quantity: 2, role: 'in', reason: 'Frena Deadly Dispute, Reckoner\'s Bargain y respuestas.' }
          ],
          outCards: [
            { cardName: 'Delver of Secrets', quantity: 4, role: 'out', reason: 'Fácilmente bloqueado o eliminado.' },
            { cardName: 'Deem Inferior', quantity: 4, role: 'out', reason: 'Ineficaz ante criaturas con afinidad que entran gratis.' },
            { cardName: 'Ponder', quantity: 2, role: 'out', reason: 'Ajuste de interacción.' }
          ],
          gameplayTips: [
            'Mystic y Sleep ayudan a abrirse paso a través de sus mesas trabadas.',
            'Alerta extrema con Krark-Clan Shaman y Toxin Analysis: bajar Serpientes sin protección puede desencadenar un barrido total.',
            'No contrarrestes automáticamente cada cantrip; prioriza tus respuestas según los recursos del oponente.'
          ]
        },
        {
          vsDeckName: 'Jund Wildfire',
          difficulty: 'unfavorable',
          role: 'Tempo',
          inCards: [
            { cardName: 'Annul', quantity: 4, role: 'in', reason: 'Frena Blood Fountain y odio de artefactos.' },
            { cardName: 'Hydroblast', quantity: 4, role: 'in', reason: 'Contrarresta Cleansing Wildfire, Shaman y Pyroblast.' }
          ],
          outCards: [
            { cardName: 'Delver of Secrets', quantity: 4, role: 'out', reason: 'Muere ante barridos y removal negro/rojo.' },
            { cardName: 'Deem Inferior', quantity: 4, role: 'out', reason: 'Ajuste frente a criaturas con disparos al entrar.' }
          ],
          gameplayTips: [
            'Emparejamiento duro contra un mazo con enorme resiliencia y ventaja.',
            'Annul detiene Blood Fountain y hate; Hydroblast corta Cleansing Wildfire y Shaman.',
            'Sleep y Mystic son tus mejores cartas contra Writhing Chrysalis. Recuerda: las ráfagas azules NO pueden hacerle objetivo porque tiene Devoid (incoloro).'
          ]
        },
        {
          vsDeckName: 'Gruul Ramp / Ponza',
          difficulty: 'favorable',
          role: 'Tempo',
          inCards: [
            { cardName: 'Annul', quantity: 4, role: 'in', reason: 'Corta encantamientos de rampa de tierras, Nyxborn Hydra y hate.' }
          ],
          outCards: [
            { cardName: 'Deem Inferior', quantity: 4, role: 'out', reason: 'Rebotar monstruos con disparos al entrar o al lanzarse es perjudicial.' }
          ],
          gameplayTips: [
            'Annul frena su desarrollo acelerado de maná en los primeros turnos.',
            'Sleep y Mystic manejan a sus amenazas descomunales; Delver vuela y puede recuperar la Iniciativa.',
            'Contrarrestar un Eldrazi en la pila no detiene su habilidad al ser lanzado (cast trigger); evalúa ambos elementos por separado.'
          ]
        },
        {
          vsDeckName: 'Bogles',
          difficulty: 'even',
          role: 'Race / Tempo',
          inCards: [
            { cardName: 'Annul', quantity: 4, role: 'in', reason: 'Contrarresta Auras decisivas (Armadillo Cloak, Ancestral Mask, Ethereal Armor).' },
            { cardName: 'Envelop', quantity: 1, role: 'in', reason: 'Contrarresta conjuros de soporte.' }
          ],
          outCards: [
            { cardName: 'Murmuring Mystic', quantity: 2, role: 'out', reason: 'Demasiado lento para la velocidad del mazo.' },
            { cardName: 'Deep Analysis', quantity: 1, role: 'out', reason: 'Coste de vidas inaceptable en una carrera.' },
            { cardName: 'Sleep of the Dead', quantity: 2, role: 'out', reason: 'No puede hacer objetivo a criaturas con Hexproof.' }
          ],
          gameplayTips: [
            'Sus criaturas con Hexproof no pueden ser objetivo de Deem o Sleep, ¡pero sus Auras sí pueden ser contrarrestadas con Annul!',
            'Enfócate en contrarrestar las Auras que otorgan arrollar o lifelink (como Armadillo Cloak) para poder ganar la carrera por tierra o aire.'
          ]
        },
        {
          vsDeckName: 'Mono-White Aggro',
          difficulty: 'even',
          role: 'Midrange / Control',
          inCards: [
            { cardName: 'Envelop', quantity: 1, role: 'in', reason: 'Contrarresta Battle Screech y Guardians\' Pledge.' }
          ],
          outCards: [
            { cardName: 'Deep Analysis', quantity: 1, role: 'out', reason: 'Ajuste de curva y vidas.' }
          ],
          gameplayTips: [
            'Mystic es una de tus mejores cartas para trabar el cielo con pájaros 1/1.',
            'Evita ataques imprudentes que permitan al rival usar Prismatic Strands para barrer tus Serpientes en combate.',
            'Si detectas encantamientos o Relics, puedes meter 2 Annul por 2 Deem.'
          ]
        },
        {
          vsDeckName: 'Boros Synthesizer / Mardu Synthesizer',
          difficulty: 'even',
          role: 'Control',
          inCards: [
            { cardName: 'Annul', quantity: 4, role: 'in', reason: 'Frena Synthesizers, Lembas y hate de artefactos.' },
            { cardName: 'Hydroblast', quantity: 4, role: 'in', reason: 'Contrarresta chispas rojas, Synthesizer y Pyroblasts.' }
          ],
          outCards: [
            { cardName: 'Delver of Secrets', quantity: 4, role: 'out', reason: 'Neutralizado por Glint Hawk y Kor Skyfisher.' },
            { cardName: 'Deep Analysis', quantity: 1, role: 'out', reason: 'Ajuste de vidas.' },
            { cardName: 'Deem Inferior', quantity: 1, role: 'out', reason: 'Ajuste.' },
            { cardName: 'Sleep of the Dead', quantity: 2, role: 'out', reason: 'Menor efectividad ante criaturas voladoras recurrentes.' }
          ],
          gameplayTips: [
            'Baja Serpientes rápidas antes de que su mesa se llene de voladoras.',
            'Mystic gana la partida larga; Deem rescata a tus criaturas atrapadas bajo Journey to Nowhere.',
            'Annul desmantela su motor de artefactos y evita que saquen ventaja continua.'
          ]
        },
        {
          vsDeckName: 'Golgari Gardens',
          difficulty: 'even',
          role: 'Control',
          inCards: [
            { cardName: 'Annul', quantity: 4, role: 'in', reason: 'Corta Tithing Blade, Pestilence y hate de artefactos.' },
            { cardName: 'Dispel', quantity: 2, role: 'in', reason: 'Protege contra removal instantáneo y Cast Down.' }
          ],
          outCards: [
            { cardName: 'Deem Inferior', quantity: 3, role: 'out', reason: 'Rebotar criaturas con disparo al entrar no es óptimo.' },
            { cardName: 'Sleep of the Dead', quantity: 1, role: 'out', reason: 'Ajuste.' },
            { cardName: 'Delver of Secrets', quantity: 2, role: 'out', reason: 'Vulnerable a Crypt Rats y removal masivo.' }
          ],
          gameplayTips: [
            'Aplica presión temprana sin sobreextenderte ante Crypt Rats.',
            'Reserva contras para Monarchy e Initiative, que dominan el juego tardío.',
            'Las fichas de pájaro de Mystic absorben edictos de sacrificio salvando a tus Serpientes.'
          ]
        },
        {
          vsDeckName: 'Caw-Gates',
          difficulty: 'unfavorable',
          role: 'Tempo',
          inCards: [
            { cardName: 'Annul', quantity: 4, role: 'in', reason: 'Contrarresta encantamientos clave del mazo.' }
          ],
          outCards: [
            { cardName: 'Delver of Secrets', quantity: 4, role: 'out', reason: 'Superado por Squadron Hawk y Sacred Cat.' }
          ],
          gameplayTips: [
            'Criaturas voladoras con Basilisk Gate y lifelink complican enormemente la carrera.',
            'Guardian of the Guildpact es un MUST-COUNTER: su protección contra monocolor apaga toda nuestra interacción.',
            'Usa Sleep y Deem para evitar que una criatura con Gate inflija daño letal o cure vidas masivas.'
          ]
        },
        {
          vsDeckName: 'Jeskai Ephemerate',
          difficulty: 'even',
          role: 'Aggro / Tempo',
          inCards: [
            { cardName: 'Hydroblast', quantity: 4, role: 'in', reason: 'Contrarresta respuestas rojas y Pyroblasts.' },
            { cardName: 'Blue Elemental Blast', quantity: 2, role: 'in', reason: 'Ráfagas adicionales.' },
            { cardName: 'Dispel', quantity: 2, role: 'in', reason: 'Contrarresta Ephemerate y removal instantáneo.' }
          ],
          outCards: [
            { cardName: 'Murmuring Mystic', quantity: 2, role: 'out', reason: 'Lento frente a loops de parpadeo.' },
            { cardName: 'Deep Analysis', quantity: 1, role: 'out', reason: 'Ajuste de recursos.' },
            { cardName: 'Deem Inferior', quantity: 2, role: 'out', reason: 'Un efecto de blink hace que Deem falle por falta de objetivo.' },
            { cardName: 'Sleep of the Dead', quantity: 2, role: 'out', reason: 'El parpadeo endereza a las criaturas.' },
            { cardName: 'Ponder', quantity: 1, role: 'out', reason: 'Ajuste.' }
          ],
          gameplayTips: [
            'Presiona rápido antes de que sus motores de recursión tomen el control.',
            'Dispel y Blasts combaten Ephemerate y removal enemigo.',
            'Recuerda que Ephemerate parpadea sin relanzar: Counterspell puede detener el hechizo Ephemerate en la pila, pero no la criatura al volver.'
          ]
        },
        {
          vsDeckName: 'Altar Tron',
          difficulty: 'favorable',
          role: 'Tempo',
          inCards: [
            { cardName: 'Annul', quantity: 4, role: 'in', reason: 'Contrarresta piezas del combo de artefactos (Ashnod\'s Altar, Expedition Map).' }
          ],
          outCards: [
            { cardName: 'Murmuring Mystic', quantity: 2, role: 'out', reason: 'Lento.' },
            { cardName: 'Sleep of the Dead', quantity: 2, role: 'out', reason: 'No interactúa con su combo de sacrificio.' }
          ],
          gameplayTips: [
            'Presión rápida y corta sus artefactos de combo antes de que ensamblen Tron.',
            'Expedition Map es un objetivo prioritario para contrarrestar.',
            'Deem Inferior es una respuesta limpia si un Altar llega a tocar la mesa.'
          ]
        },
        {
          vsDeckName: 'Ephemerate Tron',
          difficulty: 'even',
          role: 'Tempo',
          inCards: [
            { cardName: 'Annul', quantity: 4, role: 'in', reason: 'Contrarresta Expedition Map y artefactos de filtro.' },
            { cardName: 'Hydroblast', quantity: 4, role: 'in', reason: 'Frena Pyroblasts y respuestas rojas.' },
            { cardName: 'Dispel', quantity: 2, role: 'in', reason: 'Contrarresta Ghostly Flicker o Ephemerate en momentos clave.' }
          ],
          outCards: [
            { cardName: 'Murmuring Mystic', quantity: 2, role: 'out', reason: 'Lento ante maná infinito.' },
            { cardName: 'Deep Analysis', quantity: 1, role: 'out', reason: 'Ajuste.' },
            { cardName: 'Deem Inferior', quantity: 4, role: 'out', reason: 'Rebotar criaturas con disparo al entrar beneficia al rival.' },
            { cardName: 'Sleep of the Dead', quantity: 2, role: 'out', reason: 'Parpadean y enderezan criaturas.' },
            { cardName: 'Ponder', quantity: 1, role: 'out', reason: 'Ajuste.' }
          ],
          gameplayTips: [
            'Protege tus amenazas y corta Ghostly Flicker o Ephemerate en momentos críticos.',
            'No gastes todas tus contras en fogs si permites que resuelvan el motor de recursión.'
          ]
        },
        {
          vsDeckName: 'Monster Tron',
          difficulty: 'favorable',
          role: 'Tempo',
          inCards: [
            { cardName: 'Annul', quantity: 4, role: 'in', reason: 'Frena Expedition Map y artefactos de soporte.' }
          ],
          outCards: [
            { cardName: 'Deem Inferior', quantity: 4, role: 'out', reason: 'Rebotar monstruos con disparos poderosos de entrada les permite reusarlos.' }
          ],
          gameplayTips: [
            'Ralentiza la formación de Tron con Annul a Expedition Map.',
            'Guarda Sleep y Mystic para manejar sus amenazas grandes sin rebotarlas.'
          ]
        },
        {
          vsDeckName: 'Elves',
          difficulty: 'unfavorable',
          role: 'Control',
          inCards: [
            { cardName: 'Gut Shot', quantity: 2, role: 'in', reason: 'Elimina Quirion Ranger o Timberwatch Elf a coste cero.' },
            { cardName: 'Envelop', quantity: 1, role: 'in', reason: 'Contrarresta Lead the Stampede y Winding Way.' }
          ],
          outCards: [
            { cardName: 'Murmuring Mystic', quantity: 2, role: 'out', reason: 'Demasiado lento ante el enjambre.' },
            { cardName: 'Deep Analysis', quantity: 1, role: 'out', reason: 'Ajuste.' }
          ],
          gameplayTips: [
            'Gut Shot y Deem Inferior deben neutralizar a Quirion Ranger y Timberwatch Elf.',
            'Envelop corta sus fuentes masivas de robo como Lead the Stampede.',
            'En el draw, disparar a su elfo de maná en turno 1 puede ser crucial para no quedar atrás.'
          ]
        },
        {
          vsDeckName: 'Walls Combo',
          difficulty: 'favorable',
          role: 'Control',
          inCards: [
            { cardName: 'Annul', quantity: 2, role: 'in', reason: 'Corta Freed from the Real y Shield-Wall Sentinel.' },
            { cardName: 'Envelop', quantity: 1, role: 'in', reason: 'Contrarresta conjuros tutores como Winding Way.' },
            { cardName: 'Gut Shot', quantity: 2, role: 'in', reason: 'Francotira a criaturas frágiles de maná.' }
          ],
          outCards: [
            { cardName: 'Murmuring Mystic', quantity: 2, role: 'out', reason: 'Lento.' },
            { cardName: 'Ponder', quantity: 1, role: 'out', reason: 'Ajuste.' },
            { cardName: 'Deep Analysis', quantity: 1, role: 'out', reason: 'Ajuste.' },
            { cardName: 'Sleep of the Dead', quantity: 1, role: 'out', reason: 'Poco impacto.' }
          ],
          gameplayTips: [
            'Annul corta Freed from the Real; Gut Shot snipes a sus criaturas frágiles de maná.',
            'Desbarata sus motores antes de que ensamblen maná infinito con protección.'
          ]
        },
        {
          vsDeckName: 'Spy Combo & Dredge',
          difficulty: 'even',
          role: 'Control / Race',
          inCards: [
            { cardName: 'Envelop', quantity: 1, role: 'in', reason: 'Contrarresta Dread Return y conjuros clave.' },
            { cardName: 'Gut Shot', quantity: 2, role: 'in', reason: 'Snipa aceleradores en Spy Combo.' }
          ],
          outCards: [
            { cardName: 'Murmuring Mystic', quantity: 2, role: 'out', reason: 'Lento en carreras extremas.' },
            { cardName: 'Deep Analysis', quantity: 1, role: 'out', reason: 'Ajuste.' }
          ],
          gameplayTips: [
            'Contra Spy Combo, reserva Counterspell para Balustrade Spy y maneja sus aceleradores.',
            'Contra Dredge, carrera agresiva y contrarresta Dread Return o Lotleth Giant. Gut Shot no es hate de cementerio real pero apoya el timing.'
          ]
        },
        {
          vsDeckName: 'Ruby Storm',
          difficulty: 'favorable',
          role: 'Tempo',
          inCards: [
            { cardName: 'Hydroblast', quantity: 4, role: 'in', reason: 'Contrarresta rituales de maná y tormenta roja.' },
            { cardName: 'Blue Elemental Blast', quantity: 2, role: 'in', reason: 'Ráfagas de soporte.' },
            { cardName: 'Dispel', quantity: 2, role: 'in', reason: 'Contrarresta rituales instantáneos.' },
            { cardName: 'Envelop', quantity: 1, role: 'in', reason: 'Contrarresta conjuros de tormenta y robo.' }
          ],
          outCards: [
            { cardName: 'Murmuring Mystic', quantity: 2, role: 'out', reason: 'Lento.' },
            { cardName: 'Deep Analysis', quantity: 1, role: 'out', reason: 'Ajuste.' },
            { cardName: 'Deem Inferior', quantity: 4, role: 'out', reason: 'Sin permanentes relevantes que rebotar.' },
            { cardName: 'Sleep of the Dead', quantity: 2, role: 'out', reason: 'Inútil contra combo de tormenta.' }
          ],
          gameplayTips: [
            'Delver es muy valioso aquí porque aplica presión rápida por 1 maná mientras mantienes respuestas abiertas.',
            'Distribuye tus contras entre sus rituales de maná y robos cruciales; nunca te gires en un turno donde puedan combar.'
          ]
        },
        {
          vsDeckName: 'Goblins Combo',
          difficulty: 'even',
          role: 'Control',
          inCards: [
            { cardName: 'Hydroblast', quantity: 4, role: 'in', reason: 'Contrarresta hechizos de combo rojos.' },
            { cardName: 'Blue Elemental Blast', quantity: 2, role: 'in', reason: 'Ráfagas adicionales.' },
            { cardName: 'Dispel', quantity: 2, role: 'in', reason: 'Contrarresta First Day of Class.' },
            { cardName: 'Envelop', quantity: 1, role: 'in', reason: 'Contrarresta conjuros.' },
            { cardName: 'Gut Shot', quantity: 2, role: 'in', reason: 'Mata a Skirk Prospector antes del bucle.' }
          ],
          outCards: [
            { cardName: 'Delver of Secrets', quantity: 4, role: 'out', reason: 'Ajuste.' },
            { cardName: 'Murmuring Mystic', quantity: 2, role: 'out', reason: 'Lento.' },
            { cardName: 'Deep Analysis', quantity: 1, role: 'out', reason: 'Ajuste de vidas.' },
            { cardName: 'Deem Inferior', quantity: 2, role: 'out', reason: 'Ajuste.' },
            { cardName: 'Sleep of the Dead', quantity: 2, role: 'out', reason: 'Inútil ante daño infinito.' }
          ],
          gameplayTips: [
            'Dispel es vital para cortar First Day of Class.',
            'Gut Shot interrumpe a Skirk Prospector o Putrid Goblin en respuesta a sus activaciones.'
          ]
        },
        {
          vsDeckName: 'Familiars',
          difficulty: 'favorable',
          role: 'Tempo',
          inCards: [
            { cardName: 'Dispel', quantity: 2, role: 'in', reason: 'Contrarresta parpadeos y hechizos instantáneos.' },
            { cardName: 'Envelop', quantity: 1, role: 'in', reason: 'Contrarresta conjuros de robo y filtro.' }
          ],
          outCards: [
            { cardName: 'Murmuring Mystic', quantity: 2, role: 'out', reason: 'Lento ante loops de parpadeo.' },
            { cardName: 'Ponder', quantity: 1, role: 'out', reason: 'Ajuste de velocidad.' }
          ],
          gameplayTips: [
            'Deem Inferior responde limpiamente a Sunscape Familiar o a su propio Mystic.',
            'Dispel contrarresta sus parpadeos y cantrips; aplica presión rápida sin dejar que establezcan loops infinitos con Archaeomancer.'
          ]
        }
      ]
    },
    {
      id: "tron",
      slug: "tron",
      name: "Tron",
      metaPercentage: "7.1%",
      metaCount: 183,
      imageUrl: "https://cards.mtggoldfish.com/images/019ce2ef-3280-7dc4-a8a5-666164870afb/variants/672/938/card_image.webp",
      colors: ["W", "U", "B", "R", "G"],
      archetypeType: "Ramp",
      author: "CardsRealm / Lega Pauper Colonia",
      decklistUrl: "https://cardsrealm.com/en-us/articles/pauper-monster-tron-deck-tech-sideboard-guide",
      description: "Estrategia de rampa basada en ensamblar las tres tierras de Urza (Tower, Mine, Power Plant). Combina la versión moderna de Monster Tron (Maelstrom Colossus, Boulderbranch Golem, Ancient Stirrings) con bucles de Flicker y Stonehorn Dignitary para bloquear turnos y generar maná inagotable.",
      keyCards: [
        "Urza's Tower",
        "Urza's Power Plant",
        "Urza's Mine",
        "Expedition Map",
        "Ancient Stirrings",
        "Maelstrom Colossus",
        "Boulderbranch Golem",
        "Mnemonic Wall",
        "Ephemerate",
        "Mulldrifter",
        "Ghostly Flicker",
        "Pulse of Murasa"
      ],
      sideboardCards: [
        "Relic of Progenitus",
        "Breath Weapon",
        "Fiery Cannonade",
        "Stonehorn Dignitary",
        "Kaervek's Torch",
        "Whispersilk Cloak",
        "Hydroblast",
        "Ancient Grudge",
        "Dinrova Horror"
      ],
      maybeboard: [
        {
          name: "Fangren Marauder",
          note: "Gana 5 vidas por cada artefacto que va al cementerio, demoledor vs Affinity."
        },
        {
          name: "Weather the Storm",
          note: "Imprescindible contra versiones de tormenta o daño hiperagresivo de Mono Red."
        },
        {
          name: "Bonder's Ornament",
          note: "Generador de ventaja de cartas simétrico que abusamos con nuestro maná incoloro."
        },
        {
          name: "Candy Trail",
          note: "Scry temprano, ganancia de vidas y cantrip que acelera el ensamblaje de tierras."
        },
        {
          name: "Crop Rotation",
          note: "Tutor instantáneo a velocidad instant para completar Tron en respuesta o buscar Bog."
        }
      ],
      proTips: [
        "Haz mulligan agresivo para encontrar Tron: No tengas miedo de bajar a 5 cartas si garantiza 2 piezas de Urza y un Map o Ancient Stirrings; una mano de 7 pasiva sin tierras de Urza pierde casi siempre.",
        "Secuencia de color y filtros: Prioriza bajar filtros como Prophetic Prism o Energy Refractor antes de lanzar cartas de color; el maná incoloro es inútil si no puedes castear tus cartas reactivas.",
        "Monsters antes que loops infinitos: Monster Tron gana cerrando la partida rápido con Maelstrom Colossus y Boulderbranch Golem para evitar dar turnos a la interacción rival.",
        "Protección contra hate de tierras: Si el rival juega Cleansing Wildfire o Cast into the Fire, juega tierras duplicadas de Urza antes de arriesgar tu única copia de Tower."
      ],
      matchups: [
        {
          vsDeckName: "Mono Blue Terror",
          difficulty: "favorable",
          role: "Ramp / Midrange",
          inCards: [
            {
              cardName: "Kaervek's Torch",
              quantity: 1,
              role: "in",
              reason: "Remate letal que ignora Spell Pierce y contrahechizos blandos gracias al sobrecoste."
            },
            {
              cardName: "Relic of Progenitus",
              quantity: 4,
              role: "in",
              reason: "Vacía su cementerio evitando que reduzcan el coste de Cryptic Serpent y Tolarian Terror."
            },
            {
              cardName: "Whispersilk Cloak",
              quantity: 1,
              role: "in",
              reason: "Permite colar colosos y golems imbloqueables y con velo."
            }
          ],
          outCards: [
            {
              cardName: "Breath Weapon",
              quantity: 2,
              role: "out",
              reason: "2 de daño no mata criaturas 5/5."
            },
            {
              cardName: "Prophetic Prism",
              quantity: 1,
              role: "out",
              reason: "Ajuste de densidad."
            },
            {
              cardName: "Pulse of Murasa",
              quantity: 1,
              role: "out",
              reason: "Sufre ante contrahechizos de 1 maná."
            },
            {
              cardName: "Bonder's Ornament",
              quantity: 1,
              role: "out",
              reason: "Lento frente a su reloj."
            },
            {
              cardName: "Candy Trail",
              quantity: 1,
              role: "out",
              reason: "Ajuste de curva."
            }
          ],
          gameplayTips: [
            "Usa Relic of Progenitus en turno 1-2 y no lo sacrifiques de inmediato; ve picando cartas en cada uno de sus turnos.",
            "Fuerza sus contrahechizos con hechizos de menor impacto antes de resolver Maelstrom Colossus.",
            "Una vez montado Tron, lanza Kaervek's Torch con X=15+ para cerrar la partida de forma imparable."
          ]
        },
        {
          vsDeckName: "Mono Red Madness",
          difficulty: "favorable",
          role: "Control / Ramp",
          inCards: [
            {
              cardName: "Relic of Progenitus",
              quantity: 4,
              role: "in",
              reason: "Exilia Sneaky Snacker y cartas de madness o flashback antes de que generen valor."
            },
            {
              cardName: "Stonehorn Dignitary",
              quantity: 1,
              role: "in",
              reason: "Bloquea ataques continuos de Voldaren Epicure y Kessig Flamebreather."
            }
          ],
          outCards: [
            {
              cardName: "Prophetic Prism",
              quantity: 1,
              role: "out",
              reason: "Demasiado pasivo."
            },
            {
              cardName: "Breath Weapon",
              quantity: 2,
              role: "out",
              reason: "Suelen quemar a la cara en vez de jugar criaturas pequeñas."
            },
            {
              cardName: "Bonder's Ornament",
              quantity: 1,
              role: "out",
              reason: "Lento contra daño directo."
            },
            {
              cardName: "Candy Trail",
              quantity: 1,
              role: "out",
              reason: "Ajuste de slots."
            }
          ],
          gameplayTips: [
            "Boulderbranch Golem y Pulse of Murasa son tus mejores cartas; ganar 6 vidas te saca instantáneamente de rango de Fireblast.",
            "No uses Ancient Stirrings para buscar tierras si ya tienes Tron y estás bajo de vidas; busca criaturas con ganancia de vida o artefactos defensivos.",
            "Exilia su cementerio con Relic en respuesta a los triggers de Sneaky Snacker o cartas con Madness."
          ]
        },
        {
          vsDeckName: "Grixis Affinity",
          difficulty: "even",
          role: "Control / Ramp",
          inCards: [
            {
              cardName: "Ancient Grudge",
              quantity: 2,
              role: "in",
              reason: "Destruye dos artefactos clave con una sola carta vía Flashback."
            },
            {
              cardName: "Whispersilk Cloak",
              quantity: 1,
              role: "in",
              reason: "Pasa por encima de Myr Enforcer y bloqueadores resistentes."
            }
          ],
          outCards: [
            {
              cardName: "Breath Weapon",
              quantity: 2,
              role: "out",
              reason: "Inútil contra Myr Enforcer 4/4."
            },
            {
              cardName: "Candy Trail",
              quantity: 1,
              role: "out",
              reason: "Ajuste de densidad."
            }
          ],
          gameplayTips: [
            "Destruye sus Blood Fountains y puentes artifact con Ancient Grudge para asfixiar su generación de maná.",
            "Ten cuidado con Krark-Clan Shaman limpiando tus Scions o criaturas tempranas; mantén tus golems grandes.",
            "Afina tu reloj: Maelstrom Colossus pone dos amenazas en mesa para superar su número de 4/4s."
          ]
        },
        {
          vsDeckName: "Elves",
          difficulty: "favorable",
          role: "Control",
          inCards: [
            {
              cardName: "Breath Weapon",
              quantity: 2,
              role: "in",
              reason: "Sweeper instantáneo que aniquila todos los elfos 1/1 antes de que Timberwatch actúe."
            },
            {
              cardName: "Fiery Cannonade",
              quantity: 1,
              role: "in",
              reason: "Limpia la mesa por completo a velocidad instantánea."
            },
            {
              cardName: "Stonehorn Dignitary",
              quantity: 1,
              role: "in",
              reason: "Niega su fase de combate si han acumulado poder."
            }
          ],
          outCards: [
            {
              cardName: "Pulse of Murasa",
              quantity: 1,
              role: "out",
              reason: "Ganar 6 vidas es inútil si atacan por 30 de daño de combate."
            },
            {
              cardName: "Candy Trail",
              quantity: 2,
              role: "out",
              reason: "Demasiado lento frente a su explosividad."
            },
            {
              cardName: "Bonder's Ornament",
              quantity: 1,
              role: "out",
              reason: "Sin impacto en mesa."
            }
          ],
          gameplayTips: [
            "Lanza Breath Weapon o Cannonade al final de su turno o en respuesta a la activación de Quirion Ranger / Timberwatch.",
            "No dejes que Wellwisher sobreviva un solo turno si pueden ganar 10+ vidas por turno.",
            "Una vez limpia la mesa rival, Maelstrom Colossus cierra en dos ataques."
          ]
        },
        {
          vsDeckName: "Jund Wildfire",
          difficulty: "favorable",
          role: "Ramp / Midrange",
          inCards: [
            {
              cardName: "Whispersilk Cloak",
              quantity: 1,
              role: "in",
              reason: "Hace a tus colosos imbloqueables y los protege de Cast Down."
            },
            {
              cardName: "Dinrova Horror",
              quantity: 1,
              role: "in",
              reason: "Rebota tierras puente y fuerza descartes continuos con Ephemerate."
            }
          ],
          outCards: [
            {
              cardName: "Breath Weapon",
              quantity: 2,
              role: "out",
              reason: "Writhing Chrysalis y Refurbished Familiar resisten o se regeneran."
            }
          ],
          gameplayTips: [
            "Jund busca un juego de desgaste de recursos, pero el maná de Tron supera cualquier motor de Deadly Dispute.",
            "Cuidado con Cleansing Wildfire sobre tus tierras: mantén copias extras de tierras de Urza en mano antes de jugarlas innecesariamente.",
            "Dinrova Horror o loops de Flicker sellan la partida dejándolos sin permanentes activos."
          ]
        },
        {
          vsDeckName: "Red Rally / Kuldotha",
          difficulty: "favorable",
          role: "Control",
          inCards: [
            {
              cardName: "Breath Weapon",
              quantity: 2,
              role: "in",
              reason: "Limpia tokens 1/1 y trasgos atacantes."
            },
            {
              cardName: "Fiery Cannonade",
              quantity: 1,
              role: "in",
              reason: "Sweeper rojo global."
            },
            {
              cardName: "Stonehorn Dignitary",
              quantity: 1,
              role: "in",
              reason: "Detiene ataques masivos con Goblin Bushwhacker."
            }
          ],
          outCards: [
            {
              cardName: "Candy Trail",
              quantity: 2,
              role: "out",
              reason: "Lento."
            },
            {
              cardName: "Bonder's Ornament",
              quantity: 1,
              role: "out",
              reason: "Poco interactivo."
            }
          ],
          gameplayTips: [
            "Breath Weapon barrena trasgos a velocidad instantánea antes de la resolución de hechizos que aumenten su ataque.",
            "Boulderbranch Golem estabiliza en turno 3 si aceleras con Tron natural."
          ]
        },
        {
          vsDeckName: "Faeries",
          difficulty: "even",
          role: "Ramp / Control",
          inCards: [
            {
              cardName: "Breath Weapon",
              quantity: 2,
              role: "in",
              reason: "Destruye todas sus hadas voladoras instantáneamente."
            },
            {
              cardName: "Fiery Cannonade",
              quantity: 1,
              role: "in",
              reason: "Elimina hadas y ninjas de resistencia 2."
            },
            {
              cardName: "Kaervek's Torch",
              quantity: 1,
              role: "in",
              reason: "Remate que no pueden contrarrestar con Spellstutter Sprite."
            }
          ],
          outCards: [
            {
              cardName: "Candy Trail",
              quantity: 2,
              role: "out",
              reason: "Ajuste."
            },
            {
              cardName: "Pulse of Murasa",
              quantity: 1,
              role: "out",
              reason: "Vulnerable a Counterspell."
            }
          ],
          gameplayTips: [
            "Juega alrededor de Spellstutter Sprite contando cuántas hadas tienen en mesa antes de lanzar hechizos de coste 1-2.",
            "Lanza Breath Weapon cuando el rival intente hacer Ninjutsu para llevarte dos criaturas con una sola respuesta."
          ]
        },
        {
          vsDeckName: "Bogles",
          difficulty: "even",
          role: "Control / Combo",
          inCards: [
            {
              cardName: "Stonehorn Dignitary",
              quantity: 2,
              role: "in",
              reason: "Bloquea su fase de combate indefinidamente con bucles de Ephemerate o Flicker."
            },
            {
              cardName: "Dinrova Horror",
              quantity: 1,
              role: "in",
              reason: "Fuerza el rebote de auras clave o de la criatura si no tiene velo completo."
            }
          ],
          outCards: [
            {
              cardName: "Breath Weapon",
              quantity: 2,
              role: "out",
              reason: "Los bogles crecen rápidamente por encima de 2 de resistencia."
            },
            {
              cardName: "Pulse of Murasa",
              quantity: 1,
              role: "out",
              reason: "No compensa el daño masivo con arrollar."
            }
          ],
          gameplayTips: [
            "Una carrera absoluta: si ensamblan un bogle 10/10 en T3 necesitas Stonehorn Dignitary de inmediato.",
            "Ephemerate en Stonehorn Dignitary al comienzo de su turno asegura dos fases de combate canceladas.",
            "Evita que conecten Armadillo Cloak si estás a rango de daño letal."
          ]
        }
      ]
    },
    {
      id: "elves",
      slug: "elves",
      name: "Elves",
      metaPercentage: "5.7%",
      metaCount: 147,
      imageUrl: "https://cards.mtggoldfish.com/images/019ce2f0-0bc6-7dd5-afe0-19d7b418c5af/variants/672/938/card_image.webp",
      colors: ["G"],
      archetypeType: "Aggro",
      author: "CardsRealm / Raniere2950 (Pacto das Guildas)",
      decklistUrl: "https://cardsrealm.com/en-us/articles/pauper-elves-deck-tech-sideboard-guide",
      description: "Enjambre tribal explosivo que combina generación descomunal de maná mediante Priest of Titania y Quirion Ranger con aceleradores de cartas masivos como Lead the Stampede y Winding Way, rematando con Timberwatch Elf o enjambres de Lys Alana Huntmaster.",
      keyCards: [
        "Priest of Titania",
        "Quirion Ranger",
        "Timberwatch Elf",
        "Wellwisher",
        "Birchlore Rangers",
        "Jaspera Sentinel",
        "Lead the Stampede",
        "Winding Way",
        "Lys Alana Huntmaster",
        "Llanowar Elves",
        "Fyndhorn Elves"
      ],
      sideboardCards: [
        "Dispel",
        "Blue Elemental Blast",
        "Viridian Longbow",
        "Spidersilk Armor",
        "Wrap in Vigor",
        "Prohibit",
        "Weather the Storm",
        "Circle of Protection: Red"
      ],
      maybeboard: [
        {
          name: "Masked Vandal",
          note: "Exilio de artefactos y encantamientos recurrente gracias a changeling y criatura en cementerio."
        },
        {
          name: "Faerie Macabre",
          note: "Hate de cementerio no contrarrestable que se puede robar con Lead the Stampede."
        },
        {
          name: "Valakut Invoker",
          note: "Win condition alternativa con maná infinito generada por Priest of Titania."
        },
        {
          name: "Mob Justice",
          note: "Daño directo a la cabeza igual a la cantidad de criaturas en juego para saltarse nieblas."
        },
        {
          name: "Distant Melody",
          note: "Robo masivo de 10+ cartas en turnos de combo."
        }
      ],
      proTips: [
        "Quirion Ranger como pseudo-prisa: Regresar un bosque a tu mano te permite enderezar un elfo recién entrado o volver a activar Priest of Titania en el mismo turno.",
        "Secuencia de Lead the Stampede y Winding Way: Guarda maná para vaciar tu mano de elfos antes de castear Lead the Stampede, garantizando que el turno siguiente puedas desplegarlos todos juntos.",
        "Gestión de barrenderos: No sobreextiendas innecesariamente si tienes ya mesa ganadora; mantén 2-3 elfos y un Lead the Stampede en mano para reconstruir en 1 solo turno tras un wipe.",
        "Wellwisher contra mazos de daño directo: Un Wellwisher activo te pone fuera de alcance de Burn y Mono Red Madness en cuestión de un par de giros."
      ],
      matchups: [
        {
          vsDeckName: "Mono Red Burn / Madness",
          difficulty: "favorable",
          role: "Aggro",
          inCards: [
            {
              cardName: "Blue Elemental Blast",
              quantity: 3,
              role: "in",
              reason: "Contrarresta rayos letales y elimina amenazas clave como Kessig Flamebreather."
            },
            {
              cardName: "Wrap in Vigor",
              quantity: 2,
              role: "in",
              reason: "Regenera a todos tus elfos ante End the Festivities o Fiery Cannonade."
            },
            {
              cardName: "Wellwisher",
              quantity: 1,
              role: "in",
              reason: "Estabiliza ganando decenas de vidas en turnos consecutivos."
            },
            {
              cardName: "Circle of Protection: Red",
              quantity: 1,
              role: "in",
              reason: "Inhabilita todo el plan de daño directo del oponente de forma permanente."
            }
          ],
          outCards: [
            {
              cardName: "Priest of Titania",
              quantity: 3,
              role: "out",
              reason: "Es el imán principal de todos sus removals baratos."
            },
            {
              cardName: "Lead the Stampede",
              quantity: 4,
              role: "out",
              reason: "Demasiado lento para el ritmo de la carrera de vidas."
            }
          ],
          gameplayTips: [
            "Wellwisher y Blue Elemental Blast frenan su reloj de daño en seco.",
            "Usa Birchlore Rangers para producir el maná azul necesario para Blue Elemental Blast.",
            "Circle of Protection: Red es victoria inmediata si logras resolverlo con maná abierto."
          ]
        },
        {
          vsDeckName: "Grixis Affinity",
          difficulty: "even",
          role: "Aggro",
          inCards: [
            {
              cardName: "Blue Elemental Blast",
              quantity: 3,
              role: "in",
              reason: "Contrarresta Krark-Clan Shaman o Galvanic Blast."
            },
            {
              cardName: "Prohibit",
              quantity: 1,
              role: "in",
              reason: "Contrahechizo versátil para Blood Fountain o Shaman."
            },
            {
              cardName: "Wellwisher",
              quantity: 1,
              role: "in",
              reason: "Te coloca fuera de alcance de ataques con Myr Enforcers."
            }
          ],
          outCards: [
            {
              cardName: "Lead the Stampede",
              quantity: 2,
              role: "out",
              reason: "Ajuste de velocidad."
            },
            {
              cardName: "Fyndhorn Elves",
              quantity: 1,
              role: "out",
              reason: "Reducción de dorks."
            },
            {
              cardName: "Priest of Titania",
              quantity: 1,
              role: "out",
              reason: "Objetivo fácil de Galvanic Blast y Shaman."
            }
          ],
          gameplayTips: [
            "Krark-Clan Shaman es su mayor peligro; guarda Blue Elemental Blast para cortar la entrada del Chamán antes de que sacrifiquen artefactos.",
            "Usa Timberwatch Elf para convertir cualquier bloqueador en un muro letal contra Myr Enforcer 4/4."
          ]
        },
        {
          vsDeckName: "Dimir Faeries",
          difficulty: "even",
          role: "Aggro",
          inCards: [
            {
              cardName: "Dispel",
              quantity: 4,
              role: "in",
              reason: "Protege tus elfos contra Snuff Out, Cast Down y Counterspell."
            },
            {
              cardName: "Viridian Longbow",
              quantity: 1,
              role: "in",
              reason: "Equipado a cualquier elfo derriba a todas sus criaturas voladoras sin coste."
            },
            {
              cardName: "Spidersilk Armor",
              quantity: 1,
              role: "in",
              reason: "Da alcance a todos tus elfos y neutraliza Suffocating Fumes y End the Festivities."
            }
          ],
          outCards: [
            {
              cardName: "Fyndhorn Elves",
              quantity: 1,
              role: "out",
              reason: "Ajuste."
            },
            {
              cardName: "Priest of Titania",
              quantity: 1,
              role: "out",
              reason: "Vulnerable a Snuff Out gratuito."
            },
            {
              cardName: "Wellwisher",
              quantity: 3,
              role: "out",
              reason: "Lento contra control puro con mucho removal puntual."
            }
          ],
          gameplayTips: [
            "Viridian Longbow con Quirion Ranger te permite ametrallar dos hadas por turno.",
            "Spidersilk Armor convierte a tus elfos 1/1 en 1/2 con alcance, deteniendo a Spellstutter Sprite y Faerie Miscreant por completo."
          ]
        },
        {
          vsDeckName: "Dimir Terror / Delver",
          difficulty: "favorable",
          role: "Aggro",
          inCards: [
            {
              cardName: "Dispel",
              quantity: 4,
              role: "in",
              reason: "Contrarresta Snuff Out, Cast Down y Lórien Revealed."
            },
            {
              cardName: "Spidersilk Armor",
              quantity: 1,
              role: "in",
              reason: "Permite bloquear Delver of Secrets con facilidad."
            },
            {
              cardName: "Wellwisher",
              quantity: 1,
              role: "in",
              reason: "Estabiliza vida mientras montas mesa."
            }
          ],
          outCards: [
            {
              cardName: "Fyndhorn Elves",
              quantity: 1,
              role: "out",
              reason: "Ajuste de densidad."
            },
            {
              cardName: "Lead the Stampede",
              quantity: 2,
              role: "out",
              reason: "Vulnerable a Spell Pierce y Counterspell."
            }
          ],
          gameplayTips: [
            "Terror apenas tiene removals masivos; un enjambre ancho los sobrepasa con facilidad.",
            "Usa Timberwatch Elf para forzar a sus Tolarian Terrors a bloquear o morir de un solo golpe."
          ]
        },
        {
          vsDeckName: "Caw-Gates / Boros Bully",
          difficulty: "even",
          role: "Aggro",
          inCards: [
            {
              cardName: "Dispel",
              quantity: 3,
              role: "in",
              reason: "Contrarresta Prismatic Strands o Thraben Charm."
            },
            {
              cardName: "Viridian Longbow",
              quantity: 1,
              role: "in",
              reason: "Mata a Squadron Hawks y Sacred Cats continuamente."
            },
            {
              cardName: "Spidersilk Armor",
              quantity: 1,
              role: "in",
              reason: "Bloquea amenazas voladoras infladas con Basilisk Gate."
            },
            {
              cardName: "Wrap in Vigor",
              quantity: 2,
              role: "in",
              reason: "Protege de Arms of Hadar."
            }
          ],
          outCards: [
            {
              cardName: "Fyndhorn Elves",
              quantity: 2,
              role: "out",
              reason: "Menor impacto ante bloqueadores."
            },
            {
              cardName: "Wellwisher",
              quantity: 3,
              role: "out",
              reason: "Prismatic Strands anula el combate mientras ganan ventaja aérea."
            }
          ],
          gameplayTips: [
            "Spidersilk Armor detiene sus ataques aéreos.",
            "Usa Dispel cuando lancen Prismatic Strands en tu turno de ataque letal con Timberwatch."
          ]
        },
        {
          vsDeckName: "Tron",
          difficulty: "favorable",
          role: "Aggro",
          inCards: [
            {
              cardName: "Dispel",
              quantity: 4,
              role: "in",
              reason: "Contrarresta Ephemerate, Ghostly Flicker y Moment's Peace."
            },
            {
              cardName: "Viridian Longbow",
              quantity: 1,
              role: "in",
              reason: "Elimina a Mnemonic Wall o Mulldrifter."
            }
          ],
          outCards: [
            {
              cardName: "Fyndhorn Elves",
              quantity: 1,
              role: "out",
              reason: "Ajuste."
            },
            {
              cardName: "Wellwisher",
              quantity: 3,
              role: "out",
              reason: "Tron no gana con daño rápido sino con loops de control."
            }
          ],
          gameplayTips: [
            "Carrera pura: aplica máxima presión en turnos 2-3 antes de que ensamblen Tron.",
            "Guarda Dispel para sus nieblas (Moment's Peace) en tu turno de ataque definitivo."
          ]
        },
        {
          vsDeckName: "Bogles",
          difficulty: "favorable",
          role: "Aggro",
          inCards: [
            {
              cardName: "Wellwisher",
              quantity: 1,
              role: "in",
              reason: "Gana más vidas por turno que el daño que pueden conectar con auras."
            },
            {
              cardName: "Weather the Storm",
              quantity: 1,
              role: "in",
              reason: "Gana 9-15 vidas tras turnos de múltiples auras rivales."
            },
            {
              cardName: "Wrap in Vigor",
              quantity: 2,
              role: "in",
              reason: "Permite chump-bloquear a su criatura con arrollar y regenerar a tus elfos."
            }
          ],
          outCards: [
            {
              cardName: "Jaspera Sentinel",
              quantity: 3,
              role: "out",
              reason: "Bloqueadores terrestres insuficientes ante arrollar."
            }
          ],
          gameplayTips: [
            "Wellwisher con Quirion Ranger te permite ganar 20-30 vidas cada turno, dejando a Bogles sin capacidad matemática de ganar.",
            "Busca tus aceleradores de cartas para encontrar a Wellwisher cuanto antes."
          ]
        },
        {
          vsDeckName: "Jund Wildfire / Cascade",
          difficulty: "even",
          role: "Aggro",
          inCards: [
            {
              cardName: "Dispel",
              quantity: 4,
              role: "in",
              reason: "Contrarresta Deadly Dispute o Cast Down."
            },
            {
              cardName: "Wrap in Vigor",
              quantity: 2,
              role: "in",
              reason: "Salva a toda tu mesa de Breath Weapon y Krark-Clan Shaman."
            }
          ],
          outCards: [
            {
              cardName: "Wellwisher",
              quantity: 3,
              role: "out",
              reason: "Lento frente a barrenderos masivos."
            },
            {
              cardName: "Fyndhorn Elves",
              quantity: 1,
              role: "out",
              reason: "Ajuste."
            }
          ],
          gameplayTips: [
            "Mantén Wrap in Vigor con 1 maná verde abierto en todo momento si sospechas de Krark-Clan Shaman o Breath Weapon.",
            "Timberwatch hace que tus elfos superen en combate a Writhing Chrysalis."
          ]
        }
      ]
    },
    {
      id: 'grixis-affinity',
      slug: 'grixis-affinity',
      name: 'Grixis Affinity',
      metaPercentage: '4.7%',
      metaCount: 120,
      imageUrl: 'https://cards.mtggoldfish.com/images/019ce2f0-2e57-7528-84d8-1a09bf74296e/variants/672/938/card_image.webp',
      colors: ['U', 'B', 'R'],
      archetypeType: 'Midrange',
      author: '',
      decklistUrl: 'https://www.mtggoldfish.com/deck/6966126#paper',
      description: '',
      keyCards: [
        'Myr Enforcer',
        'Refurbished Familiar',
        'Krark-Clan Shaman',
        'Utrom Monitor',
        'Thoughtcast',
        'Reckoner\'s Bargain',
        'Galvanic Blast',
        'Toxin Analysis',
        'Black Mage\'s Rod',
        'Sewer-veillance Cam',
        'Nihil Spellbomb',
        'Blood Fountain',
        'Ichor Wellspring',
        'Makeshift Munitions'
      ],
      sideboardCards: [
        'Hydroblast (4)',
        'Blue Elemental Blast (2)',
        'Pyroblast (4)',
        'Red Elemental Blast (1)',
        'Extract a Confession (2)',
        'Unexpected Fangs (1)',
        'Krark-Clan Shaman (1)'
      ],
      maybeboard: [
        { name: 'Somber Hoverguard', note: 'Reemplazado por Refurbished Familiar y Utrom Monitor; solo viable si necesitas una quinta voladora.' },
        { name: 'Gearseeker Serpent', note: 'Excelente 5/6 que esquiva 5/5s y ataca imbloqueable con Prophetic Prism en metagames sin Deadly Dispute.' },
        { name: 'Trinket Mage', note: 'Costoso hoy día, pero viable si aparecen nuevos artefactos de coste 1 de alto impacto.' },
        { name: 'Metallic Rebuke', note: 'Gran contrahechizo contra destrucción de tierras (RG Eldrazi / Ponza) y White Weenie.' },
        { name: 'Kenku Artificer', note: 'Monstruo de tierras indestructibles con volar para metagames de Monarch y Midrange.' },
        { name: 'Vedalken Certarch', note: 'Controla tierras y criaturas en formatos con poco removal.' },
        { name: 'Turn Aside', note: 'Protección de 1 maná contra Deglamer y removal rápido hacia tierras.' },
        { name: 'Counterspell', note: 'Buen contrahechizo contra combo y control, aunque {U}{U} es lento frente a Dust to Dust.' },
        { name: 'Negate', note: 'Excelente contra Ashnod\'s Altar y Dust to Dust sin requerir doble maná azul.' },
        { name: 'Gurmag Angler', note: 'Criatura corpulenta que esquiva Snuff Out cuando no hay espacio para Refurbished Familiar.' },
        { name: 'Glaze Fiend', note: 'Presión agresiva en metagames sin removal como Mono-Blue Terror.' },
        { name: 'Faerie Macabre', note: 'Hate de cementerio incountereable vital contra Spy Walls y High Tide.' },
        { name: 'Gorilla Shaman & Cast into the Fire', note: 'Armas demoledoras para el mirror de Affinity, Rakdos Burn y BG Fog.' },
        { name: 'Tithing Blade', note: 'Edicto artefacto excelente vs Tolarian Terror, desplazado temporalmente por Writhing Chrysalis.' },
        { name: 'Hunter\'s Blowgun', note: 'Deathtouch recurrente con Shaman y permite a Myr Enforcer tradear con 5/5s.' },
        { name: 'Lembas & Candy Trail', note: 'Filtro temprano en listas de 19 tierras contra mazos rápidos.' }
      ],
      proTips: [
        'Regla de Identidad Midrange: Grixis Affinity es una "navaja suiza". En cada partida debes identificar si eres el Beatdown (agresor) o el Control (reactivo) y adaptar tu juego.',
        'Checklist de Mulligan Probabilístico (19-20 tierras): 1) ¿Puedo permitirme perder un turno de desarrollo? 2) ¿Puedo ejecutar mi plan si robo una tierra más? 3) ¿Tengo recursos inmediatos para excavar el mazo? Si las respuestas son sí, la mano es keep.',
        'Combo Shaman + Toxin Analysis: Activar Krark-Clan Shaman con Toxin Analysis le da Deathtouch y Lifelink al daño de área, barriendo mesas gigantescas (incluso 5/5) y curando decenas de vidas.',
        'Sewer-veillance Cam (Control de Tempo): Úsalo para girar amenazas clave (Tolarian Terror, Writhing Chrysalis) o para enderezar tus propios bloqueadores por sorpresa (anulando Sleep of the Dead o frenando Ninjutsu).',
        'Black Mage\'s Rod (Reloj Inevitable): Permite infligir daño sin atacar (vital vs Fog, Tron, Jund) y bufa a Myr Enforcer a 5/4 para tradear de igual a igual con las serpientes en Mono-U Terror.',
        'Reckoner\'s Bargain como Escudo: Sacrifica un Myr Enforcer para ganar 7 vidas y robar 2 cartas, esquivando lethal burn. Úsalo también en respuesta a Dust to Dust o a Snap para dejar sin objetivo el hechizo y que falle.',
        'Ventaja de Pyroblast sobre REB: Pyroblast puede hacer objetivo a CUALQUIER permanente o hechizo (aunque no sea azul). Puedes lanzarlo sobre un permanente tuyo solo para disparar el daño de Black Mage\'s Rod.'
      ],
      matchups: [
        {
          vsDeckName: 'UB Faerie (Lista Tradicional)',
          difficulty: 'favorable',
          role: 'Aggro / Card Advantage',
          inCards: [
            { cardName: 'Pyroblast', quantity: 4, role: 'in', reason: 'Respuesta vital para contrarrestar robos, cantrips y Spellstutter Sprite.' },
            { cardName: 'Red Elemental Blast', quantity: 1, role: 'in', reason: 'Quinta ráfaga para frenar ventaja azul.' }
          ],
          outCards: [
            { cardName: 'Krark-Clan Shaman', quantity: 2, role: 'out', reason: 'Sus criaturas son voladoras o tienen demasiada resistencia.' },
            { cardName: 'Toxin Analysis', quantity: 3, role: 'out', reason: 'Innecesario sin Shaman y nuestras criaturas son superiores.' }
          ],
          gameplayTips: [
            'Supera al rival en ventaja de cartas; nuestras criaturas imponen un reloj más veloz.',
            'Mata a Faerie Seer en turno 1 para evitar Ninja of the Deep Hours en turno 2.',
            'Makeshift Munitions es el MVP absoluto: limpia todas las hadas de la mesa.',
            'Usa Sewer-veillance Cam para girar bloqueadores y recuperar la Monarch si bajan Thorn of the Black Rose.'
          ]
        },
        {
          vsDeckName: 'UB Faerie (Barff / Sneaky Snacker)',
          difficulty: 'favorable',
          role: 'Aggro',
          inCards: [
            { cardName: 'Pyroblast', quantity: 4, role: 'in', reason: 'Contrarresta robos, Murmuring Mystic y contrahechizos.' },
            { cardName: 'Red Elemental Blast', quantity: 1, role: 'in', reason: 'Ráfaga de control azul.' }
          ],
          outCards: [
            { cardName: 'Krark-Clan Shaman', quantity: 2, role: 'out', reason: 'Vulnerable ante amenazas aéreas.' },
            { cardName: 'Toxin Analysis', quantity: 3, role: 'out', reason: 'Ajuste de cartas.' }
          ],
          gameplayTips: [
            'Adoptan un rol más agresivo con Sneaky Snacker; no dejes que Murmuring Mystic se quede en mesa.',
            'Aprovecha sus costes altos iniciales para desarrollar presencia rápida en mesa.'
          ]
        },
        {
          vsDeckName: 'UB Terror',
          difficulty: 'favorable',
          role: 'Aggro',
          inCards: [
            { cardName: 'Pyroblast', quantity: 4, role: 'in', reason: 'Responde a Tolarian Terror, Murmuring Mystic o asegura nuestros hechizos.' },
            { cardName: 'Red Elemental Blast', quantity: 1, role: 'in', reason: 'Ráfaga adicional.' },
            { cardName: 'Extract a Confession', quantity: 2, role: 'in', reason: 'Elimina criaturas 5/5 esquivando Ward y sin targeting problemático.' }
          ],
          outCards: [
            { cardName: 'Krark-Clan Shaman', quantity: 3, role: 'out', reason: 'Inútil contra 5/5s y voladoras sin combo.' },
            { cardName: 'Toxin Analysis', quantity: 3, role: 'out', reason: 'Sustituido por removal dirigido más eficiente.' },
            { cardName: 'Galvanic Blast', quantity: 1, role: 'out', reason: 'Pocos objetivos pequeños.' }
          ],
          gameplayTips: [
            'Aterriza Nihil Spellbomb lo antes posible para frenar a Sneaky Snacker y retrasar al Terror.',
            'Black Mage\'s Rod es clave: hace daño sin atacar y aprovecha que el rival pierde vidas con Snuff Out.',
            'Prioridades de Pyroblast: 1) Terror si no hay removal, 2) Lórien Revealed, 3) Counterspell, 4) Mystic.'
          ]
        },
        {
          vsDeckName: 'UR Control',
          difficulty: 'even',
          role: 'Aggro',
          inCards: [
            { cardName: 'Pyroblast', quantity: 4, role: 'in', reason: 'Contrarresta y destruye permanentes azules y contrahechizos.' },
            { cardName: 'Red Elemental Blast', quantity: 1, role: 'in', reason: 'Ráfaga roja adicional.' },
            { cardName: 'Hydroblast', quantity: 3, role: 'in', reason: 'Responde a Gorilla Shaman y Cast into the Fire post-sideboard.' },
            { cardName: 'Extract a Confession', quantity: 2, role: 'in', reason: 'Elimina Tolarian Terror y abre huecos de ataque.' }
          ],
          outCards: [
            { cardName: 'Galvanic Blast', quantity: 4, role: 'out', reason: 'Falta de objetivos con baja resistencia.' },
            { cardName: 'Krark-Clan Shaman', quantity: 3, role: 'out', reason: 'El rival corre muy pocas criaturas.' },
            { cardName: 'Toxin Analysis', quantity: 3, role: 'out', reason: 'Sin objetivos para daño masivo.' }
          ],
          gameplayTips: [
            'Somos los agresores: debemos ganar rápido antes de que Murmuring Mystic genere enjambres.',
            'Refurbished Familiar y Blood Fountain generan 2-por-1 constantes en un mazo sin hate de cementerio.',
            'Cuidado post-side con Gorilla Shaman y Cast into the Fire; guarda Hydroblasts para proteger tus tierras.'
          ]
        },
        {
          vsDeckName: 'UR Faerie',
          difficulty: 'favorable',
          role: 'Card Advantage',
          inCards: [
            { cardName: 'Pyroblast', quantity: 4, role: 'in', reason: 'Contrarresta Spellstutter Sprite, Counterspell y Lórien Revealed.' },
            { cardName: 'Red Elemental Blast', quantity: 1, role: 'in', reason: 'Quinta ráfaga roja.' },
            { cardName: 'Hydroblast', quantity: 3, role: 'in', reason: 'Frena Gorilla Shaman, Cast into the Fire y Skred.' }
          ],
          outCards: [
            { cardName: 'Krark-Clan Shaman', quantity: 3, role: 'out', reason: 'Poco efectivo ante voladoras.' },
            { cardName: 'Toxin Analysis', quantity: 3, role: 'out', reason: 'Ajuste de cartas.' },
            { cardName: 'Nihil Spellbomb', quantity: 2, role: 'out', reason: 'El rival tiene poca interacción con el cementerio.' }
          ],
          gameplayTips: [
            'Abrúmalos con ventaja de cartas: Refurbished Familiar y Makeshift Munitions ganan solos la partida.',
            'Utrom Monitor bloquea hadas y ninjas con seguridad; con Sewer-veillance Cam puedes atacar y enderezar para bloquear.',
            'Protege tu base de maná contra Cast into the Fire y Gorilla Shaman.'
          ]
        },
        {
          vsDeckName: 'Mono-U Terror',
          difficulty: 'even',
          role: 'Aggro / Tempo',
          inCards: [
            { cardName: 'Pyroblast', quantity: 4, role: 'in', reason: 'Frena 5/5s, Lórien Revealed y Counterspell.' },
            { cardName: 'Red Elemental Blast', quantity: 1, role: 'in', reason: 'Ráfaga de control.' },
            { cardName: 'Extract a Confession', quantity: 2, role: 'in', reason: 'Respuesta letal que salta el Ward de Tolarian Terror.' }
          ],
          outCards: [
            { cardName: 'Galvanic Blast', quantity: 4, role: 'out', reason: 'No mata criaturas 5/5.' },
            { cardName: 'Makeshift Munitions', quantity: 1, role: 'out', reason: 'Sin objetivos pequeños.' },
            { cardName: 'Black Mage\'s Rod', quantity: 2, role: 'out', reason: 'Liberar huecos para interacción.' }
          ],
          gameplayTips: [
            'Baja criaturas voladoras temprano. Si su cementerio está vacío, no lances hechizos innecesarios para no llenárselo.',
            'Usa Reckoner\'s Bargain en el turno del rival para forzar maná y jugar seguro en tu turno.',
            'Sewer-veillance Cam es el MVP: endereza tus criaturas para contrarrestar Sleep of the Dead o gira sus 5/5s.'
          ]
        },
        {
          vsDeckName: 'Mono-U Faerie',
          difficulty: 'favorable',
          role: 'Aggro / Control',
          inCards: [
            { cardName: 'Pyroblast', quantity: 4, role: 'in', reason: 'Contrarresta ninjas y Spellstutter Sprite.' },
            { cardName: 'Red Elemental Blast', quantity: 1, role: 'in', reason: 'Ráfaga adicional.' }
          ],
          outCards: [
            { cardName: 'Toxin Analysis', quantity: 3, role: 'out', reason: 'Innecesario.' },
            { cardName: 'Krark-Clan Shaman', quantity: 1, role: 'out', reason: 'Mantenemos 2 copias para ninjas en mesa.' },
            { cardName: 'Nihil Spellbomb', quantity: 1, role: 'out', reason: 'Poco uso de cementerio.' }
          ],
          gameplayTips: [
            'Mata la hada de turno 1 para evitar Ninjutsu en turno 2.',
            'Utrom Monitor bloquea con total seguridad a ninjas y hadas sin morir ante Brinebarrow Intruder.',
            'Makeshift Munitions limpia su mesa completa.'
          ]
        },
        {
          vsDeckName: 'Jeskai Ephemerate',
          difficulty: 'favorable',
          role: 'Aggro',
          inCards: [
            { cardName: 'Pyroblast', quantity: 4, role: 'in', reason: 'Contrarresta Mulldrifter, Lórien Revealed, Archaeomancer y Kenku Artificer.' },
            { cardName: 'Red Elemental Blast', quantity: 1, role: 'in', reason: 'Ráfaga de control.' },
            { cardName: 'Hydroblast', quantity: 1, role: 'in', reason: 'Respuesta ante cartas rojas.' }
          ],
          outCards: [
            { cardName: 'Krark-Clan Shaman', quantity: 3, role: 'out', reason: 'Sin buenos objetivos terrestres.' },
            { cardName: 'Toxin Analysis', quantity: 3, role: 'out', reason: 'Ajuste de cartas.' }
          ],
          gameplayTips: [
            'Adopta postura muy agresiva: Skred necesita hasta turno 4 para ser letal.',
            'Nihil Spellbomb en respuesta a Archaeomancer desbarata sus bucles de parpadeo.',
            'Cuidado con Cleansing Wildfire hacia tus tierras; guarda Reckoner\'s Bargain en respuesta.'
          ]
        },
        {
          vsDeckName: 'UW Familiar',
          difficulty: 'unfavorable',
          role: 'Aggro',
          inCards: [
            { cardName: 'Pyroblast', quantity: 4, role: 'in', reason: 'Contrarresta Mulldrifter y Lórien Revealed para evitar que encuentren Dust to Dust.' },
            { cardName: 'Red Elemental Blast', quantity: 1, role: 'in', reason: 'Quinta ráfaga roja.' }
          ],
          outCards: [
            { cardName: 'Krark-Clan Shaman', quantity: 2, role: 'out', reason: 'No queremos sacrificar nuestro propio tablero.' },
            { cardName: 'Toxin Analysis', quantity: 3, role: 'out', reason: 'Innecesario.' }
          ],
          gameplayTips: [
            'Mata a Sunscape Familiar de inmediato.',
            'Jugada Pro: Si intentan usar Snap para enderezar tierras y lanzar Dust to Dust, responde con Reckoner\'s Bargain sobre tu propia criatura; Snap fallará por falta de objetivo y no enderezarán tierras.'
          ]
        },
        {
          vsDeckName: 'UW Tireless Tribe',
          difficulty: 'favorable',
          role: 'Control',
          inCards: [
            { cardName: 'Pyroblast', quantity: 4, role: 'in', reason: 'Contrarresta Inside Out y contrahechizos de protección.' },
            { cardName: 'Red Elemental Blast', quantity: 1, role: 'in', reason: 'Ráfaga extra.' },
            { cardName: 'Krark-Clan Shaman', quantity: 1, role: 'in', reason: 'Fuerza descartes continuos con activaciones de 1 daño.' }
          ],
          outCards: [
            { cardName: 'Toxin Analysis', quantity: 3, role: 'out', reason: 'Shaman basta por sí solo.' },
            { cardName: 'Black Mage\'s Rod', quantity: 2, role: 'out', reason: 'Demasiado lento para una carrera combo.' },
            { cardName: 'Nihil Spellbomb', quantity: 1, role: 'out', reason: 'Solo afecta Circular Logic.' }
          ],
          gameplayTips: [
            'Krark-Clan Shaman fuerza descartes continuos a Tireless Tribe para mantenerse viva.',
            'Espera a que Inside Out resuelva: la resistencia del Tribe bajará a 1 y morirá con Galvanic Blast.'
          ]
        },
        {
          vsDeckName: 'UG Turbo Fog',
          difficulty: 'favorable',
          role: 'Burn / Aggro',
          inCards: [
            { cardName: 'Pyroblast', quantity: 4, role: 'in', reason: 'Contrarresta Lórien Revealed, Arcane Denial y Behold the Multiverse.' },
            { cardName: 'Red Elemental Blast', quantity: 1, role: 'in', reason: 'Ráfaga para cortar robos.' }
          ],
          outCards: [
            { cardName: 'Krark-Clan Shaman', quantity: 2, role: 'out', reason: 'El rival no juega criaturas.' },
            { cardName: 'Toxin Analysis', quantity: 3, role: 'out', reason: 'Sin criaturas a las que hacer deathtouch.' }
          ],
          gameplayTips: [
            'Corta sus hechizos de robo para que se queden sin efectos de Fog.',
            'Cuidado con Tangle: no ataques con todas tus criaturas a la vez para evitar quedar girado 2 turnos.',
            'Black Mage\'s Rod y Makeshift Munitions cierran la partida por daño directo sin importar las nieblas.'
          ]
        },
        {
          vsDeckName: 'BG Turbo Fog',
          difficulty: 'favorable',
          role: 'Burn / Aggro',
          inCards: [
            { cardName: 'Krark-Clan Shaman', quantity: 1, role: 'in', reason: 'Cuerpo adicional y sacrificio.' },
            { cardName: 'Pyroblast', quantity: 2, role: 'in', reason: 'Contrarresta Stream of Thought.' }
          ],
          outCards: [
            { cardName: 'Toxin Analysis', quantity: 3, role: 'out', reason: 'Sin criaturas objetivo.' }
          ],
          gameplayTips: [
            'Refurbished Familiar drena su mano y Black Mage\'s Rod inflige daño inevitable fuera del combate.',
            'Si corres Kenku Artificer, conviérteles su Campfire en criatura y destrúyelo con removal.',
            'Guarda Nihil Spellbomb para exiliar en respuesta a Stream of Thought o Moment\'s Peace.'
          ]
        },
        {
          vsDeckName: 'BG/R Gardens',
          difficulty: 'unfavorable',
          role: 'Aggro',
          inCards: [
            { cardName: 'Krark-Clan Shaman', quantity: 1, role: 'in', reason: 'Cuerpo extra.' },
            { cardName: 'Extract a Confession', quantity: 1, role: 'in', reason: 'Remueve bloqueadores grandes.' }
          ],
          outCards: [
            { cardName: 'Toxin Analysis', quantity: 2, role: 'out', reason: 'Ajuste de cartas.' }
          ],
          gameplayTips: [
            'Despliega múltiples amenazas juntas en turnos 3-4 para disputar la Monarch ante Thorn of the Black Rose.',
            'Cuidado con Troublemaker Ouphe y Crypt Rats; no bajes Makeshift Munitions sin valor inmediato.'
          ]
        },
        {
          vsDeckName: 'Mono-B Sacrifice',
          difficulty: 'even',
          role: 'Control',
          inCards: [
            { cardName: 'Krark-Clan Shaman', quantity: 1, role: 'in', reason: 'Limpia el tablero entero.' },
            { cardName: 'Extract a Confession', quantity: 2, role: 'in', reason: 'Elimina al Carrion Feeder superviviente.' }
          ],
          outCards: [
            { cardName: 'Black Mage\'s Rod', quantity: 2, role: 'out', reason: 'Suele ser forraje de sacrificio.' },
            { cardName: 'Nihil Spellbomb', quantity: 1, role: 'out', reason: 'Poco uso de cementerio.' }
          ],
          gameplayTips: [
            'Shaman + Toxin Analysis limpia la mesa incluido Carrion Feeder por deathtouch.',
            'Cuidado con el combo de Perigee Beckoner si tienen sac outlet; mantén bloqueadores listos.',
            'No mates criaturas en el turno del rival para evitar que bajen Bone Picker por 1 maná.'
          ]
        },
        {
          vsDeckName: 'Mono-B Burn',
          difficulty: 'favorable',
          role: 'Aggro',
          inCards: [
            { cardName: 'Unexpected Fangs', quantity: 1, role: 'in', reason: 'Lifelink vital para ganar la carrera.' }
          ],
          outCards: [
            { cardName: 'Makeshift Munitions', quantity: 1, role: 'out', reason: 'Difícil de resolver y bajo impacto.' }
          ],
          gameplayTips: [
            'Gana vidas con Toxin Analysis, Reckoner\'s Bargain y Unexpected Fangs.',
            'Si tiran Soul Reap a tu criatura, sacrifícala en respuesta con Bargain para que falle y no te quemen.'
          ]
        },
        {
          vsDeckName: 'Mono-R Rally',
          difficulty: 'favorable',
          role: 'Control',
          inCards: [
            { cardName: 'Hydroblast', quantity: 4, role: 'in', reason: 'Contrarresta Gorilla Shaman, Cast into the Fire y Goblin Bushwhacker.' },
            { cardName: 'Blue Elemental Blast', quantity: 2, role: 'in', reason: 'Ráfagas de soporte.' },
            { cardName: 'Krark-Clan Shaman', quantity: 1, role: 'in', reason: 'Cuarto Shaman para barrer la mesa.' },
            { cardName: 'Unexpected Fangs', quantity: 1, role: 'in', reason: 'Lifelink masivo sobre Myr Enforcer.' }
          ],
          outCards: [
            { cardName: 'Nihil Spellbomb', quantity: 2, role: 'out', reason: 'No usan cementerio.' },
            { cardName: 'Black Mage\'s Rod', quantity: 2, role: 'out', reason: 'Demasiado lento.' },
            { cardName: 'Sewer-veillance Cam', quantity: 2, role: 'out', reason: 'Lento frente a agresores de coste 1.' },
            { cardName: 'Makeshift Munitions', quantity: 1, role: 'out', reason: 'Ajuste.' },
            { cardName: 'Ichor Wellspring', quantity: 1, role: 'out', reason: 'Ajuste de velocidad.' }
          ],
          gameplayTips: [
            'Baja Shaman cuando tengan 2-3 criaturas, no en mesa vacía.',
            'Activa Shaman al Inicio del Combate para que no puedan bajar criaturas con prisa y atacarte ese mismo turno.',
            'Si estás bajo de vidas, no dudes en sacrificar un Myr Enforcer con Reckoner\'s Bargain para ganar 7 vidas.'
          ]
        },
        {
          vsDeckName: 'Mono-R Madness',
          difficulty: 'favorable',
          role: 'Control / Midrange',
          inCards: [
            { cardName: 'Hydroblast', quantity: 4, role: 'in', reason: 'Contrarresta casi todo el mazo rival.' },
            { cardName: 'Blue Elemental Blast', quantity: 2, role: 'in', reason: 'Ráfagas adicionales.' },
            { cardName: 'Unexpected Fangs', quantity: 1, role: 'in', reason: 'Lifelink para salir de rango letal.' }
          ],
          outCards: [
            { cardName: 'Black Mage\'s Rod', quantity: 2, role: 'out', reason: 'Somos el control.' },
            { cardName: 'Sewer-veillance Cam', quantity: 2, role: 'out', reason: 'Lento.' },
            { cardName: 'Makeshift Munitions', quantity: 1, role: 'out', reason: 'Ajuste.' },
            { cardName: 'Ichor Wellspring', quantity: 1, role: 'out', reason: 'Ajuste.' },
            { cardName: 'Toxin Analysis', quantity: 1, role: 'out', reason: 'Ajuste.' }
          ],
          gameplayTips: [
            'Mata a los pingers de inmediato: nunca gastes un Galvanic Blast en Voldaren Epicure si hay Kessig o Guttersnipe en mesa.',
            'Prioriza contrarrestar sus hechizos de robo (Grab the Prize, Highway Robbery).',
            'Nihil Spellbomb mantiene a raya a Sneaky Snacker exiliándolo del cementerio.'
          ]
        },
        {
          vsDeckName: 'Rakdos Burn',
          difficulty: 'even',
          role: 'Aggro / Control',
          inCards: [
            { cardName: 'Hydroblast', quantity: 4, role: 'in', reason: 'Frena burn rojo, Gorilla Shaman y Cast into the Fire.' },
            { cardName: 'Blue Elemental Blast', quantity: 2, role: 'in', reason: 'Ráfagas azules.' },
            { cardName: 'Unexpected Fangs', quantity: 1, role: 'in', reason: 'Lifelink masivo para Myr Enforcer.' }
          ],
          outCards: [
            { cardName: 'Krark-Clan Shaman', quantity: 3, role: 'out', reason: 'No toca criaturas voladoras o con prisa negras.' },
            { cardName: 'Black Mage\'s Rod', quantity: 2, role: 'out', reason: 'Lento.' },
            { cardName: 'Sewer-veillance Cam', quantity: 1, role: 'out', reason: 'Ajuste.' },
            { cardName: 'Ichor Wellspring', quantity: 1, role: 'out', reason: 'Ajuste.' }
          ],
          gameplayTips: [
            'Al bajar de 10 vidas, busca estabilizar con Reckoner\'s Bargain sobre Myr Enforcer.',
            'Zona de peligro Alms: No bajes a 3 o menos vidas si solo tienes Blue Blast en mano, porque Alms of the Vein es negra y no la puedes contrarrestar.',
            'Unexpected Fangs sobre un Myr Enforcer gana la partida.'
          ]
        },
        {
          vsDeckName: 'Mono-R Kiln Fiend',
          difficulty: 'favorable',
          role: 'Control',
          inCards: [
            { cardName: 'Hydroblast', quantity: 4, role: 'in', reason: 'Contrarresta hechizos de daño y criaturas rojas.' },
            { cardName: 'Blue Elemental Blast', quantity: 2, role: 'in', reason: 'Ráfagas de respuesta.' },
            { cardName: 'Extract a Confession', quantity: 2, role: 'in', reason: 'Edicto letal que salta Apostle\'s Blessing y protección.' }
          ],
          outCards: [
            { cardName: 'Black Mage\'s Rod', quantity: 2, role: 'out', reason: 'Lento.' },
            { cardName: 'Nihil Spellbomb', quantity: 2, role: 'out', reason: 'No usan cementerio.' },
            { cardName: 'Toxin Analysis', quantity: 2, role: 'out', reason: 'Ajuste.' },
            { cardName: 'Sewer-veillance Cam', quantity: 1, role: 'out', reason: 'Ajuste.' },
            { cardName: 'Makeshift Munitions', quantity: 1, role: 'out', reason: 'Ajuste.' }
          ],
          gameplayTips: [
            'Mata o contrarresta a sus criaturas en cuanto toquen la mesa; nunca esperes a la fase de atacantes o se inflarán en respuesta con hechizos de protección.',
            'Extract a Confession es el arma perfecta porque salta Apostle\'s Blessing.'
          ]
        },
        {
          vsDeckName: 'Elves',
          difficulty: 'even',
          role: 'Control',
          inCards: [
            { cardName: 'Krark-Clan Shaman', quantity: 1, role: 'in', reason: 'Cuarto Shaman para barrer la mesa de elfos.' },
            { cardName: 'Extract a Confession', quantity: 2, role: 'in', reason: 'Elimina Nyxborn Hydra o Avenging Hunter que esquivan wipes.' }
          ],
          outCards: [
            { cardName: 'Black Mage\'s Rod', quantity: 2, role: 'out', reason: 'Moriría ante nuestros propios barridos.' },
            { cardName: 'Sewer-veillance Cam', quantity: 1, role: 'out', reason: 'Quirion Ranger salta el efecto de girar.' }
          ],
          gameplayTips: [
            'Encuentra Krark-Clan Shaman de inmediato: Shaman + Toxin Analysis limpia la mesa sin importar la resistencia.',
            'Mata a Timberwatch Elf y Priest of Titania nada más verlos.',
            'Cuidado con Masked Vandal: no descartes artefactos con Familiar demasiado pronto si les da dianas para destruir tus tierras.'
          ]
        },
        {
          vsDeckName: 'Walls Combo / Cascade',
          difficulty: 'favorable',
          role: 'Control',
          inCards: [
            { cardName: 'Krark-Clan Shaman', quantity: 1, role: 'in', reason: 'Barre la mesa entera de muros.' },
            { cardName: 'Extract a Confession', quantity: 2, role: 'in', reason: 'Elimina Crimson Acolyte (protección contra rojo) o rematadores.' }
          ],
          outCards: [
            { cardName: 'Black Mage\'s Rod', quantity: 2, role: 'out', reason: 'Innecesario.' },
            { cardName: 'Makeshift Munitions', quantity: 1, role: 'out', reason: 'Bajo impacto frente a muros de alta resistencia.' }
          ],
          gameplayTips: [
            'Mata inmediatamente a Axebane Guardian y Overgrown Battlement.',
            'Ten en cuenta Tamiyo\'s Safekeeping cuando actives Shaman; ten un segundo removal o Toxin Analysis listo.',
            'Nihil Spellbomb exilia el cementerio en respuesta a Reaping the Graves o Drift of Phantasms.'
          ]
        },
        {
          vsDeckName: 'GW Auras / Bogles',
          difficulty: 'favorable',
          role: 'Control',
          inCards: [
            { cardName: 'Krark-Clan Shaman', quantity: 1, role: 'in', reason: 'Shaman + Toxin Analysis limpia monstruos con Auras.' },
            { cardName: 'Extract a Confession', quantity: 2, role: 'in', reason: 'Edicto que salta Hexproof y mata la criatura cargada de auras.' }
          ],
          outCards: [
            { cardName: 'Black Mage\'s Rod', quantity: 2, role: 'out', reason: 'Lento.' },
            { cardName: 'Makeshift Munitions', quantity: 1, role: 'out', reason: 'No puede hacer objetivo a criaturas con Hexproof.' }
          ],
          gameplayTips: [
            'Arma el combo Shaman + Toxin Analysis lo antes posible para barrer criaturas con auras.',
            'Cuidado con criaturas con First Strike al usar Toxin Analysis para bloquear (si su criatura hace daño primero, deathtouch no actuará).',
            'Extract a Confession es letal contra su mazo de amenaza única.'
          ]
        },
        {
          vsDeckName: 'RG Eldrazi / Ponza',
          difficulty: 'favorable',
          role: 'Midrange',
          inCards: [
            { cardName: 'Krark-Clan Shaman', quantity: 1, role: 'in', reason: 'Shaman + Toxin Analysis barre monstruos gigantes.' },
            { cardName: 'Extract a Confession', quantity: 2, role: 'in', reason: 'Edicto contra amenazas de gran tamaño.' }
          ],
          outCards: [
            { cardName: 'Black Mage\'s Rod', quantity: 2, role: 'out', reason: 'Lento.' },
            { cardName: 'Makeshift Munitions', quantity: 1, role: 'out', reason: 'Pocos objetivos pequeños.' }
          ],
          gameplayTips: [
            'Prioriza manos con abundancia de tierras para absorber Gorilla Shaman o petatierras.',
            'Baja criaturas rápido para impedir que Avenging Hunter tome la Iniciativa de forma gratuita.',
            'Sewer-veillance Cam gira atacantes para robar o disputar la Iniciativa.'
          ]
        },
        {
          vsDeckName: 'White Weenie',
          difficulty: 'unfavorable',
          role: 'Control',
          inCards: [
            { cardName: 'Extract a Confession', quantity: 2, role: 'in', reason: 'Elimina amenazas clave saltando protección.' }
          ],
          outCards: [
            { cardName: 'Black Mage\'s Rod', quantity: 2, role: 'out', reason: 'Innecesario.' }
          ],
          gameplayTips: [
            'Battle Screech es una pesadilla de tokens voladores.',
            'Inunda el campo de criaturas temprano para tentar al rival a gastar Dust to Dust o Revoke Existence en criaturas y no en tus tierras.',
            'No lances Makeshift Munitions sin forraje inmediato o Thraben Charm la destruirá.'
          ]
        },
        {
          vsDeckName: 'White Heroic',
          difficulty: 'favorable',
          role: 'Control',
          inCards: [
            { cardName: 'Extract a Confession', quantity: 2, role: 'in', reason: 'Edicto que esquiva Emerge Unscathed y protección de color.' }
          ],
          outCards: [
            { cardName: 'Nihil Spellbomb', quantity: 2, role: 'out', reason: 'Heroic no usa el cementerio.' }
          ],
          gameplayTips: [
            'Si su criatura gana Lifelink, bloquéala y sacrifica tu criatura antes del daño (con Shaman o Bargain) para evitar que curen.',
            'Extract a Confession es su peor pesadilla al no poder proteger su única criatura.'
          ]
        },
        {
          vsDeckName: 'Boros / Mardu Synthesizer',
          difficulty: 'even',
          role: 'Beatdown',
          inCards: [
            { cardName: 'Hydroblast', quantity: 4, role: 'in', reason: 'Contrarresta Cast into the Fire, Gorilla Shaman y Synthesizer.' },
            { cardName: 'Blue Elemental Blast', quantity: 2, role: 'in', reason: 'Ráfagas azules de soporte.' }
          ],
          outCards: [
            { cardName: 'Krark-Clan Shaman', quantity: 3, role: 'out', reason: 'Poco efectivo ante voladoras.' },
            { cardName: 'Toxin Analysis', quantity: 3, role: 'out', reason: 'Ajuste.' }
          ],
          gameplayTips: [
            'Debemos ser los agresores: igualan nuestra ventaja de cartas.',
            'Corta Experimental Synthesizer con Hydroblast: es su motor principal de recursos.',
            'Cuidado con ráfagas masivas de burn acumulado; ten listo Reckoner\'s Bargain para escapar de rango letal.'
          ]
        },
        {
          vsDeckName: 'Caw Gates',
          difficulty: 'even',
          role: 'Maximum Aggression',
          inCards: [
            { cardName: 'Pyroblast', quantity: 4, role: 'in', reason: 'Gana guerras de contras, detiene Lórien y destruye The Modern Age.' },
            { cardName: 'Red Elemental Blast', quantity: 1, role: 'in', reason: 'Quinta ráfaga.' }
          ],
          outCards: [
            { cardName: 'Krark-Clan Shaman', quantity: 2, role: 'out', reason: 'Recursos ineficientes.' },
            { cardName: 'Toxin Analysis', quantity: 3, role: 'out', reason: 'Ajuste.' }
          ],
          gameplayTips: [
            'Agresividad máxima con Myr Enforcer y Refurbished Familiar antes de que sus gatos y halcones se inflen con Basilisk Gate.',
            'Makeshift Munitions es el MVP aquí: limpia sus criaturas voladoras de 1 resistencia.',
            'Sewer-veillance Cam es brutal: cuando giren maná para inflar con Basilisk Gate, gira su criatura en respuesta para anular su ataque.'
          ]
        },
        {
          vsDeckName: 'Flicker Tron',
          difficulty: 'favorable',
          role: 'Aggro',
          inCards: [
            { cardName: 'Pyroblast', quantity: 4, role: 'in', reason: 'Contrarresta Mulldrifter, Lórien Revealed y Ghostly Flicker.' },
            { cardName: 'Red Elemental Blast', quantity: 1, role: 'in', reason: 'Ráfaga de control.' }
          ],
          outCards: [
            { cardName: 'Krark-Clan Shaman', quantity: 2, role: 'out', reason: 'No intentamos controlar el late game.' },
            { cardName: 'Toxin Analysis', quantity: 3, role: 'out', reason: 'Ajuste.' }
          ],
          gameplayTips: [
            'Adopta postura 100% agresiva para bajar sus vidas antes de que ensamblen Tron.',
            'Nihil Spellbomb debe usarse con precisión milimétrica cuando intenten recuperar Ghostly Flicker o Ephemerate con Mnemonic Wall.',
            'Black Mage\'s Rod inflige daño inevitable saltando Moment\'s Peace.'
          ]
        },
        {
          vsDeckName: 'Grixis Affinity (Mirror)',
          difficulty: 'even',
          role: 'Aggro / Card Advantage',
          inCards: [
            { cardName: 'Hydroblast', quantity: 4, role: 'in', reason: 'Destruye Makeshift Munitions y contrarresta Gorilla Shaman / Cast into the Fire.' },
            { cardName: 'Pyroblast', quantity: 2, role: 'in', reason: 'Elimina Utrom Monitor y contrarresta Thoughtcast o Hydroblast rival.' }
          ],
          outCards: [
            { cardName: 'Krark-Clan Shaman', quantity: 3, role: 'out', reason: 'El mirror tiene demasiada recursión para que un wipe sea viable.' },
            { cardName: 'Toxin Analysis', quantity: 3, role: 'out', reason: 'Ajuste de cartas.' }
          ],
          gameplayTips: [
            'Hay 2 caminos a la victoria: 1) Salida ultra agresiva con Galvanic Blast, Munitions y Rod; 2) Superar al rival en ventaja de cartas.',
            'Nihil Spellbomb puede dejar sin criaturas al oponente si exilias repetidamente antes de sus Blood Fountains.',
            'Identifica quién es el agresor en los primeros 2 turnos: el reactivo debe bloquear y ganar tiempo; el agresor debe presionar para meter al rival en rango de Galvanic Blast.'
          ]
        }
      ]
    },
    {
      id: "bogles",
      slug: "bogles",
      name: "Bogles",
      metaPercentage: "4.7%",
      metaCount: 120,
      imageUrl: "https://cards.mtggoldfish.com/images/019ce2f0-1028-7163-8dc1-8a19fc6bf145/variants/672/938/card_image.webp",
      colors: ["G", "W"],
      archetypeType: "Aggro",
      author: "CardsRealm / Raniere2950",
      decklistUrl: "https://cardsrealm.com/en-us/articles/pauper-bogles-deck-tech-sideboard-guide",
      description: "Estrategia 'Voltron' de criaturas intargeteables con Antimaleficio (Hexproof) como Slippery Bogle y Gladecover Scout, cargándolas de auras devastadoras (Ancestral Mask, Ethereal Armor, Rancor, Armadillo Cloak) para arrollar al oponente en turnos 3-4.",
      keyCards: [
        "Slippery Bogle",
        "Gladecover Scout",
        "Silhana Ledgewalker",
        "Ancestral Mask",
        "Ethereal Armor",
        "Rancor",
        "Armadillo Cloak",
        "Utopia Sprawl",
        "Abundant Growth",
        "Cartouche of Solidarity"
      ],
      sideboardCards: [
        "Ram Through",
        "Standard Bearer",
        "Gut Shot",
        "Flaring Pain",
        "Freewind Falcon",
        "Lifelink",
        "Crimson Acolyte",
        "Tamiyo's Safekeeping"
      ],
      maybeboard: [
        {
          name: "Freestrider Lookout",
          note: "Genera ventaja de tierras continua si se comete un crimen al encantar."
        },
        {
          name: "Heliod's Pilgrim",
          note: "Tutor de auras específico para buscar Armadillo Cloak o Flaring Pain según el matchup."
        },
        {
          name: "Young Wolf",
          note: "Criatura con Undying perfecta para absorber edictos tipo Chainer's Edict o Tithing Blade."
        },
        {
          name: "Benevolent Unicorn",
          note: "Reduce el daño de hechizos de quemadura masivos como Breath Weapon o End the Festivities."
        },
        {
          name: "Ray of Revelation",
          note: "Respuesta con flashback contra Journey to Nowhere o el mirror de Bogles."
        }
      ],
      proTips: [
        "Protección contra edictos: Siempre busca tener una criatura secundaria en mesa (fichas de Cartouche of Solidarity, o un segundo bogle sin auras) para sacrificar ante Chainer's Edict o Tithing Blade.",
        "Secuencia de auras: Coloca primero Armadillo Cloak o Ethereal Armor para sacar a la criatura del rango de daño de sweepers globales como Breath Weapon (resistencia 3+) antes de sobrecomprometerte.",
        "Armadillo Cloak no es Lifelink: Es una habilidad disparada que se acumula con Lifelink real; dos auras de Armadillo Cloak en la misma criatura duplican la ganancia de vidas.",
        "Mulligan agresivo: Nunca te quedes una mano sin criatura con hexproof, sin importar lo buenas que sean las auras; un bogle en mano inicial es condición obligatoria."
      ],
      matchups: [
        {
          vsDeckName: "Mono Red Burn / Madness",
          difficulty: "favorable",
          role: "Aggro",
          inCards: [
            {
              cardName: "Freewind Falcon",
              quantity: 4,
              role: "in",
              reason: "Criatura voladora con protección contra rojo inmune a todo su mazo."
            },
            {
              cardName: "Lifelink",
              quantity: 3,
              role: "in",
              reason: "Aura de coste 1 que asegura estabilización de vidas desde turno 2."
            }
          ],
          outCards: [
            {
              cardName: "Silhana Ledgewalker",
              quantity: 3,
              role: "out",
              reason: "Coste 2 demasiado lento para la carrera directa."
            },
            {
              cardName: "Cartouche of Solidarity",
              quantity: 2,
              role: "out",
              reason: "Las fichas 1/1 mueren ante Lava Dart o End the Festivities."
            },
            {
              cardName: "Spirited Companion",
              quantity: 1,
              role: "out",
              reason: "Ajuste de slots."
            }
          ],
          gameplayTips: [
            "En cuanto conectas un ataque con Lifelink o Armadillo Cloak el mazo rojo se queda sin capacidad matemática de quemarte.",
            "Freewind Falcon bloquea a Voldaren Epicure y Kessig Flamebreather sin sufrir daño.",
            "No esperes a armar un monstruo gigante: un bogle 3/3 con Lifelink gana la partida por desgaste."
          ]
        },
        {
          vsDeckName: "Boros Bully / Synthesizer",
          difficulty: "even",
          role: "Aggro",
          inCards: [
            {
              cardName: "Ram Through",
              quantity: 2,
              role: "in",
              reason: "Removal que causa daño de arrollar al jugador rival a través de sus bloqueadores."
            },
            {
              cardName: "Flaring Pain",
              quantity: 1,
              role: "in",
              reason: "Anula la prevención de Prismatic Strands permitiendo conectar letal."
            }
          ],
          outCards: [
            {
              cardName: "Silhana Ledgewalker",
              quantity: 1,
              role: "out",
              reason: "Ajuste."
            },
            {
              cardName: "Cartouche of Solidarity",
              quantity: 2,
              role: "out",
              reason: "Menor impacto."
            }
          ],
          gameplayTips: [
            "Prismatic Strands es su única defensa real; ten siempre en mente cuándo tienen maná o criaturas blancas para lanzarlo con Flashback.",
            "Lanza Flaring Pain en el turno en que atacas con todo tu poder con Rancor.",
            "Ram Through con una criatura inflada y con arrollar remata el juego sin necesidad de atacar."
          ]
        },
        {
          vsDeckName: "Elves",
          difficulty: "unfavorable",
          role: "Aggro",
          inCards: [
            {
              cardName: "Ram Through",
              quantity: 2,
              role: "in",
              reason: "Elimina a Wellwisher o Timberwatch Elf inmediatamente."
            },
            {
              cardName: "Standard Bearer",
              quantity: 2,
              role: "in",
              reason: "Fuerza a Timberwatch Elf a tener que inflar obligatoriamente a tu criatura."
            },
            {
              cardName: "Gut Shot",
              quantity: 3,
              role: "in",
              reason: "Mata a Priest of Titania y Quirion Ranger en Turno 1 a velocidad instantánea sin maná."
            }
          ],
          outCards: [
            {
              cardName: "Cartouche of Solidarity",
              quantity: 2,
              role: "out",
              reason: "Bloqueadores irrelevantes ante enjambre."
            },
            {
              cardName: "Lifelink",
              quantity: 1,
              role: "out",
              reason: "Elfo gana más vidas que nosotros."
            },
            {
              cardName: "Gladecover Scout",
              quantity: 4,
              role: "out",
              reason: "Priorizamos Silhana Ledgewalker por su evasión no bloqueable."
            }
          ],
          gameplayTips: [
            "Carrera muy compleja: Wellwisher puede ganar más vidas de las que podemos quitarles.",
            "Dispara Gut Shot inmediatamente al primer elfo generador de maná que bajen.",
            "Standard Bearer los arruina por completo al desviar las activaciones de Timberwatch."
          ]
        },
        {
          vsDeckName: "Dimir Faeries",
          difficulty: "favorable",
          role: "Aggro",
          inCards: [
            {
              cardName: "Gut Shot",
              quantity: 3,
              role: "in",
              reason: "Elimina Spellstutter Sprite y Faerie Seer sin coste de maná para cortar Ninjutsu."
            },
            {
              cardName: "Standard Bearer",
              quantity: 1,
              role: "in",
              reason: "Atrae Snuff Out y Cast Down protegiendo fichas de Cartouche."
            }
          ],
          outCards: [
            {
              cardName: "Lifelink",
              quantity: 1,
              role: "out",
              reason: "No nos presionan de forma agresiva."
            },
            {
              cardName: "Armadillo Cloak",
              quantity: 2,
              role: "out",
              reason: "3 manás es peligroso ante Counterspell y Spellstutter Sprite."
            }
          ],
          gameplayTips: [
            "Sus removals dirigidos son cartas 100% muertas gracias a Hexproof.",
            "Juega alrededor de Spellstutter Sprite lanzando tus auras cuando no tengan hadas suficientes en mesa.",
            "Mantén un Cartouche of Solidarity en reserva por si traen Chainer's Edict del banquillo."
          ]
        },
        {
          vsDeckName: "Bogles (Mirror)",
          difficulty: "even",
          role: "Aggro",
          inCards: [
            {
              cardName: "Standard Bearer",
              quantity: 2,
              role: "in",
              reason: "Gana el mirror en solitario: obliga a que todas sus auras se anexen a tu Standard Bearer."
            },
            {
              cardName: "Ram Through",
              quantity: 2,
              role: "in",
              reason: "Permite destruir su Standard Bearer usando tu bogle gigante."
            }
          ],
          outCards: [
            {
              cardName: "Spirited Companion",
              quantity: 2,
              role: "out",
              reason: "Lento."
            },
            {
              cardName: "Cartouche of Solidarity",
              quantity: 2,
              role: "out",
              reason: "Ajuste."
            }
          ],
          gameplayTips: [
            "Quien resuelva primero Standard Bearer prácticamente gana el juego al robar todas las auras rivales.",
            "Si el rival baja Standard Bearer, tu prioridad número uno es matarlo con Ram Through."
          ]
        },
        {
          vsDeckName: "Grixis Affinity",
          difficulty: "even",
          role: "Aggro",
          inCards: [
            {
              cardName: "Ram Through",
              quantity: 2,
              role: "in",
              reason: "Destruye Myr Enforcer y causa daño letal sobrante."
            },
            {
              cardName: "Tamiyo's Safekeeping",
              quantity: 2,
              role: "in",
              reason: "Otorga indestructible contra la limpieza de Krark-Clan Shaman con Toxin Analysis."
            },
            {
              cardName: "Flaring Pain",
              quantity: 1,
              role: "in",
              reason: "Respuesta preventiva si splashan blanco para Strands."
            }
          ],
          outCards: [
            {
              cardName: "Cartouche of Solidarity",
              quantity: 2,
              role: "out",
              reason: "Muere ante Shaman."
            },
            {
              cardName: "Silhana Ledgewalker",
              quantity: 3,
              role: "out",
              reason: "Ajuste de velocidad."
            }
          ],
          gameplayTips: [
            "El combo Krark-Clan Shaman + Toxin Analysis es su única salida para limpiar tu bogle.",
            "Mantén siempre maná verde abierto para Tamiyo's Safekeeping en respuesta a las activaciones del chamán.",
            "Armadillo Cloak te pone fuera de alcance de ataques coordinados de Myr Enforcers."
          ]
        },
        {
          vsDeckName: "Golgari Gardens",
          difficulty: "even",
          role: "Aggro",
          inCards: [
            {
              cardName: "Tamiyo's Safekeeping",
              quantity: 2,
              role: "in",
              reason: "Protege auras de Crypt Rats o respuestas puntuales."
            },
            {
              cardName: "Cartouche of Solidarity",
              quantity: 1,
              role: "in",
              reason: "Crea una ficha adicional para absorber edictos."
            },
            {
              cardName: "Young Wolf",
              quantity: 2,
              role: "in",
              reason: "Criatura con Undying inmune a sacrificios únicos."
            }
          ],
          outCards: [
            {
              cardName: "Rancor",
              quantity: 2,
              role: "out",
              reason: "Ajuste."
            },
            {
              cardName: "Silhana Ledgewalker",
              quantity: 3,
              role: "out",
              reason: "Lenta ante Chainer's Edict y Tithing Blade."
            }
          ],
          gameplayTips: [
            "Gardens basa su juego contra Bogles en Chainer's Edict y Tithing Blade.",
            "Nunca dejes a tu bogle encantado solo en mesa: conserva siempre una ficha de Cartouche o un bogle secundario para entregar al sacrificio."
          ]
        }
      ]
    },
    {
      id: "dimir-faeries",
      slug: "dimir-faeries",
      name: "Dimir Faeries",
      metaPercentage: "4.6%",
      metaCount: 117,
      imageUrl: "https://cards.mtggoldfish.com/images/019ce2ef-f58a-775e-91a2-b988f45f108c/variants/672/938/card_image.webp",
      colors: ["U", "B"],
      archetypeType: "Control",
      author: "Beicodegeia / Pacto das Guildas",
      decklistUrl: "https://cardsrealm.com/en-us/articles/pauper-dimir-faeries-deck-tech-and-sideboard-guide",
      description: "Estrategia tempo/control con mecánicas de Ninjutsu y sinergia tribal de hadas. Genera ventaja masiva de cartas con Ninja of the Deep Hours y la corona del Monarca (Thorn of the Black Rose), respaldado por Counterspell, Spellstutter Sprite y removal eficiente.",
      keyCards: [
        "Spellstutter Sprite",
        "Ninja of the Deep Hours",
        "Faerie Seer",
        "Augur of Bolas",
        "Thorn of the Black Rose",
        "Murmuring Mystic",
        "Snuff Out",
        "Cast Down",
        "Counterspell",
        "Lórien Revealed"
      ],
      sideboardCards: [
        "Hydroblast",
        "Blue Elemental Blast",
        "Dispel",
        "Arms of Hadar",
        "Relic of Progenitus",
        "Chainer's Edict",
        "Okiba-Gang Shinobi",
        "Stormbound Geist",
        "Unexpected Fangs"
      ],
      maybeboard: [
        {
          name: "Extract a Confession",
          note: "Edict flexible que con Collect Evidence 4 elimina la criatura de mayor coste del rival."
        },
        {
          name: "Agony Warp",
          note: "Combate dos amenazas a la vez frenando daño y matando bloqueadores."
        },
        {
          name: "Suffocating Fumes",
          note: "Sweeper instantáneo contra fichas 1/1 y Elfos que se cicla si no es útil."
        },
        {
          name: "Behold the Multiverse",
          note: "Ventaja de cartas con Foretell para turnos intermedios."
        },
        {
          name: "Nihil Spellbomb",
          note: "Hate de cementerio unidireccional que reemplaza la carta robando."
        }
      ],
      proTips: [
        "Ninjutsu óptimo: Usa el Ninjutsu de Ninja of the Deep Hours devolviendo Faerie Seer para volver a hacer Scry 2 al turno siguiente, o Spellstutter Sprite para tener contrahechizo listo de nuevo.",
        "Timing del Monarca: Solo juega Thorn of the Black Rose en Turno 4 si tienes la certeza de poder defender la corona en el ataque del oponente; perder la corona contra mazos agresivos o de criaturas voladoras regala la partida.",
        "Gestión de Snuff Out: Pagar 4 vidas por Snuff Out es brutal contra combo o mazos lentos, pero suicidio contra Mono Red; quítalo inmediatamente post-sideboard contra mazos con daño directo.",
        "Murmuring Mystic como plan de cierre: Con Augur of Bolas y cantrips, una sola copia de Murmuring Mystic llena el aire de fichas de ilusión 1/1 para estabilizar contra cualquier enjambre."
      ],
      matchups: [
        {
          vsDeckName: "Boros Synthesizer",
          difficulty: "unfavorable",
          role: "Control",
          inCards: [
            {
              cardName: "Hydroblast",
              quantity: 2,
              role: "in",
              reason: "Contrarresta daño letal y criaturas rojas agresivas."
            },
            {
              cardName: "Dispel",
              quantity: 1,
              role: "in",
              reason: "Protege tus piezas de interacción."
            },
            {
              cardName: "Murmuring Mystic",
              quantity: 1,
              role: "in",
              reason: "Crea bloqueadores aéreos infinitos contra Kor Skyfisher."
            },
            {
              cardName: "Arms of Hadar",
              quantity: 1,
              role: "in",
              reason: "Limpia tokens de Glint Hawk y reclutas sin tocar tus criaturas."
            }
          ],
          outCards: [
            {
              cardName: "Suffocating Fumes",
              quantity: 1,
              role: "out",
              reason: "Sus criaturas voladoras tienen resistencia 2+."
            },
            {
              cardName: "Faerie Seer",
              quantity: 1,
              role: "out",
              reason: "Bloqueado fácilmente por Skyfisher."
            },
            {
              cardName: "Behold the Multiverse",
              quantity: 1,
              role: "out",
              reason: "Lento frente a su agresividad."
            },
            {
              cardName: "Thorn of the Black Rose",
              quantity: 1,
              role: "out",
              reason: "Riesgo alto de perder la corona en combate aéreo."
            },
            {
              cardName: "Agony Warp",
              quantity: 1,
              role: "out",
              reason: "Ajuste de removal."
            }
          ],
          gameplayTips: [
            "Kor Skyfisher es su criatura más peligrosa porque frena tus hadas voladoras y recicla Synthesizer.",
            "Juega alrededor de All That Glitters conservando siempre Counterspell o Snuff Out abierto.",
            "Murmuring Mystic es la vía principal de victoria al saturar el cielo de ilusiones 1/1."
          ]
        },
        {
          vsDeckName: "Mono-Red Kuldotha",
          difficulty: "even",
          role: "Control",
          inCards: [
            {
              cardName: "Hydroblast",
              quantity: 2,
              role: "in",
              reason: "Contrarresta rayos y mata Goblin Bushwhacker."
            },
            {
              cardName: "Blue Elemental Blast",
              quantity: 4,
              role: "in",
              reason: "Máxima densidad de respuestas baratas de 1 maná para frenar su salida."
            },
            {
              cardName: "Unexpected Fangs",
              quantity: 1,
              role: "in",
              reason: "Otorga lifelink a un Augur of Bolas o Ninja para sacarte de rango de muerte."
            },
            {
              cardName: "Arms of Hadar",
              quantity: 1,
              role: "in",
              reason: "Barre a todas las fichas de Kuldotha Rebirth a la vez."
            }
          ],
          outCards: [
            {
              cardName: "Snuff Out",
              quantity: 4,
              role: "out",
              reason: "Pagar 4 vidas contra mazo de daño directo es una sentencia de muerte."
            },
            {
              cardName: "Extract a Confession",
              quantity: 1,
              role: "out",
              reason: "Inútil contra enjambre de trasgos 1/1."
            },
            {
              cardName: "Dispel",
              quantity: 1,
              role: "out",
              reason: "No interactúa con conjuros ni criaturas con prisa."
            },
            {
              cardName: "Agony Warp",
              quantity: 1,
              role: "out",
              reason: "Ajuste de curva."
            },
            {
              cardName: "Faerie Seer",
              quantity: 1,
              role: "out",
              reason: "Muere ante cualquier ping de 1 daño."
            }
          ],
          gameplayTips: [
            "Snuff Out fuera al 100%: nunca conserves Snuff Out contra daño directo.",
            "Augur of Bolas es tu mejor bloqueador temprano; con Unexpected Fangs anexado ganas 2 vidas cada turno.",
            "Usa tus 6 blasts azules de forma proactiva para matar sus criaturas generadoras de daño en turno 1-2."
          ]
        },
        {
          vsDeckName: "Dimir Terror",
          difficulty: "favorable",
          role: "Tempo / Control",
          inCards: [
            {
              cardName: "Dispel",
              quantity: 1,
              role: "in",
              reason: "Contrarresta sus contrahechizos y Thought Scour en turnos clave."
            },
            {
              cardName: "Stormbound Geist",
              quantity: 1,
              role: "in",
              reason: "Amenaza aérea recurrente gracias a Undying que supera sus removals."
            },
            {
              cardName: "Relic of Progenitus",
              quantity: 2,
              role: "in",
              reason: "Vacía su cementerio evitando que reduzcan el coste de sus terrores."
            },
            {
              cardName: "Murmuring Mystic",
              quantity: 1,
              role: "in",
              reason: "Genera bloqueadores ilimitados para Tolarian Terror."
            },
            {
              cardName: "Chainer's Edict",
              quantity: 1,
              role: "in",
              reason: "Fuerza el sacrificio de su 5/5 con valor de Flashback."
            }
          ],
          outCards: [
            {
              cardName: "Agony Warp",
              quantity: 1,
              role: "out",
              reason: "-3/-3 no mata a criaturas con resistencia 5."
            },
            {
              cardName: "Suffocating Fumes",
              quantity: 1,
              role: "out",
              reason: "Inútil contra bichos gigantes."
            },
            {
              cardName: "Preordain",
              quantity: 2,
              role: "out",
              reason: "Ajuste de densidad reactiva."
            },
            {
              cardName: "Behold the Multiverse",
              quantity: 1,
              role: "out",
              reason: "Lento frente a su reloj."
            },
            {
              cardName: "Ninja of the Deep Hours",
              quantity: 1,
              role: "out",
              reason: "Bloqueado fácilmente si bajan un terror temprano."
            }
          ],
          gameplayTips: [
            "Monarch (Thorn of the Black Rose) es tu camino más seguro a la victoria: no pueden robarte la corona fácilmente por tierra gracias a tus chump-blockers.",
            "Relic of Progenitus en T1 los retrasa 3 turnos enteros.",
            "Cast Down y Chainer's Edict son tus removals clave; no gastes Counterspell en cantrips, resérvalo para sus amenazas."
          ]
        },
        {
          vsDeckName: "Azorius Familiars",
          difficulty: "favorable",
          role: "Tempo",
          inCards: [
            {
              cardName: "Dispel",
              quantity: 1,
              role: "in",
              reason: "Contrarresta Ephemerate y Meeting of Minds."
            },
            {
              cardName: "Okiba-Gang Shinobi",
              quantity: 1,
              role: "in",
              reason: "Ninjutsu sorpresa que les arranca dos cartas de combo de la mano."
            },
            {
              cardName: "Murmuring Mystic",
              quantity: 1,
              role: "in",
              reason: "Establece presencia masiva en mesa inmune a Snap."
            },
            {
              cardName: "Relic of Progenitus",
              quantity: 2,
              role: "in",
              reason: "Corta los objetivos de Ephemerate y Mortuary Mire."
            }
          ],
          outCards: [
            {
              cardName: "Extract a Confession",
              quantity: 1,
              role: "out",
              reason: "Demasiadas fichas o Sunscapes de poco coste para elegir."
            },
            {
              cardName: "Suffocating Fumes",
              quantity: 1,
              role: "out",
              reason: "Menor impacto ante Mulldrifter y Familiar."
            },
            {
              cardName: "Faerie Seer",
              quantity: 1,
              role: "out",
              reason: "Ajuste."
            },
            {
              cardName: "Behold the Multiverse",
              quantity: 1,
              role: "out",
              reason: "Ajuste de slots."
            },
            {
              cardName: "Agony Warp",
              quantity: 1,
              role: "out",
              reason: "Menor eficiencia."
            }
          ],
          gameplayTips: [
            "Familiars no tiene removal definitivo para tus criaturas; ataca agresivamente.",
            "Conectar un Okiba-Gang Shinobi en turno 3-4 destruye por completo su plan de juego.",
            "Mata a Sunscape Familiar en cuanto entre a la mesa para impedir que reduzcan costes."
          ]
        },
        {
          vsDeckName: "Caw-Gates",
          difficulty: "even",
          role: "Control / Tempo",
          inCards: [
            {
              cardName: "Dispel",
              quantity: 1,
              role: "in",
              reason: "Contrarresta Prismatic Strands o Brainstorm."
            },
            {
              cardName: "Okiba-Gang Shinobi",
              quantity: 1,
              role: "in",
              reason: "Castiga su mano en turnos de lentitud de puertas."
            },
            {
              cardName: "Relic of Progenitus",
              quantity: 2,
              role: "in",
              reason: "Exilia Prismatic Strands y Sacred Cat del cementerio."
            },
            {
              cardName: "Chainer's Edict",
              quantity: 1,
              role: "in",
              reason: "Elimina a Guardian of the Guildpact al no hacer target."
            },
            {
              cardName: "Arms of Hadar",
              quantity: 1,
              role: "in",
              reason: "Limpia a Squadron Hawks y Sacred Cats a la vez."
            }
          ],
          outCards: [
            {
              cardName: "Thorn of the Black Rose",
              quantity: 1,
              role: "out",
              reason: "Sus halcones voladores pueden robarte la corona con facilidad."
            },
            {
              cardName: "Faerie Seer",
              quantity: 1,
              role: "out",
              reason: "Ajuste."
            },
            {
              cardName: "Ninja of the Deep Hours",
              quantity: 1,
              role: "out",
              reason: "Bloqueado por Squadron Hawks."
            },
            {
              cardName: "Behold the Multiverse",
              quantity: 1,
              role: "out",
              reason: "Lento."
            },
            {
              cardName: "Snuff Out",
              quantity: 1,
              role: "out",
              reason: "Inútil contra Guardian of the Guildpact."
            },
            {
              cardName: "Extract a Confession",
              quantity: 1,
              role: "out",
              reason: "Ajuste."
            }
          ],
          gameplayTips: [
            "Guardian of the Guildpact es la carta a temer; no puede ser bloqueado ni destruido por cartas de color individual.",
            "Guarda Chainer's Edict y Arms of Hadar específicamente para cuando Guardian toque la mesa.",
            "Usa Relic of Progenitus para exiliar Sacred Cat y Prismatic Strands tan pronto como toquen el cementerio."
          ]
        },
        {
          vsDeckName: "Grixis Affinity",
          difficulty: "even",
          role: "Control",
          inCards: [
            {
              cardName: "Hydroblast",
              quantity: 2,
              role: "in",
              reason: "Contrarresta Galvanic Blast, Makeshift Munitions y KCS."
            },
            {
              cardName: "Dispel",
              quantity: 1,
              role: "in",
              reason: "Contrarresta Metallic Rebuke o Reckoner's Bargain."
            },
            {
              cardName: "Murmuring Mystic",
              quantity: 1,
              role: "in",
              reason: "Provee bloqueadores continuos contra Myr Enforcer."
            },
            {
              cardName: "Relic of Progenitus",
              quantity: 2,
              role: "in",
              reason: "Exilia Blood Fountain y cartas sacrificadas."
            }
          ],
          outCards: [
            {
              cardName: "Suffocating Fumes",
              quantity: 1,
              role: "out",
              reason: "Inútil contra artefactos de alta resistencia."
            },
            {
              cardName: "Snuff Out",
              quantity: 2,
              role: "out",
              reason: "No puede hacer target a Myr Enforcer al ser incoloro."
            },
            {
              cardName: "Agony Warp",
              quantity: 1,
              role: "out",
              reason: "Ajuste."
            },
            {
              cardName: "Thorn of the Black Rose",
              quantity: 1,
              role: "out",
              reason: "Riesgo de perder corona."
            }
          ],
          gameplayTips: [
            "Snuff Out no puede hacer objetivo a Myr Enforcer: guárdalo solo para Krark-Clan Shaman o cartas de color.",
            "Cast Down y Counterspell son tus mejores respuestas para sus 4/4s.",
            "Relic of Progenitus corta la activación de Blood Fountain para recuperar 4/4s del cementerio."
          ]
        },
        {
          vsDeckName: "Elves",
          difficulty: "favorable",
          role: "Control",
          inCards: [
            {
              cardName: "Arms of Hadar",
              quantity: 2,
              role: "in",
              reason: "Sweeper que mata todos los elfos 1/1 y 2/2."
            },
            {
              cardName: "Suffocating Fumes",
              quantity: 1,
              role: "in",
              reason: "Limpia tokens y dorks a velocidad instantánea."
            },
            {
              cardName: "Dispel",
              quantity: 2,
              role: "in",
              reason: "Contrarresta Wrap in Vigor o Lead the Stampede."
            }
          ],
          outCards: [
            {
              cardName: "Snuff Out",
              quantity: 2,
              role: "out",
              reason: "Menor eficiencia frente a enjambre masivo."
            },
            {
              cardName: "Thorn of the Black Rose",
              quantity: 1,
              role: "out",
              reason: "Perder la corona frente a 10 elfos es derrota instantánea."
            },
            {
              cardName: "Behold the Multiverse",
              quantity: 2,
              role: "out",
              reason: "Lento."
            }
          ],
          gameplayTips: [
            "Contrarresta Priest of Titania y Wellwisher con Spellstutter Sprite en cuanto intenten castearlos.",
            "Arms of Hadar y Suffocating Fumes aniquilan su mesa entera antes de que Timberwatch pueda activarse.",
            "No uses removal sobre elfos 1/1 comunes: guárdalos para los generadores de maná y motores de robo."
          ]
        },
        {
          vsDeckName: "Golgari Gardens",
          difficulty: "favorable",
          role: "Control",
          inCards: [
            {
              cardName: "Stormbound Geist",
              quantity: 1,
              role: "in",
              reason: "Criatura voladora con Undying inmune a Chainer's Edict y Cast Down."
            },
            {
              cardName: "Okiba-Gang Shinobi",
              quantity: 1,
              role: "in",
              reason: "Vacía su mano de recursos lentos."
            },
            {
              cardName: "Dispel",
              quantity: 2,
              role: "in",
              reason: "Contrarresta Deadly Dispute e instantáneos de interacción."
            },
            {
              cardName: "Relic of Progenitus",
              quantity: 2,
              role: "in",
              reason: "Exilia Flashback de Chainer's Edict y objetivos de Spinata."
            }
          ],
          outCards: [
            {
              cardName: "Snuff Out",
              quantity: 2,
              role: "out",
              reason: "No puede hacer target a criaturas negras como Crypt Rats o Avenging Hunter."
            },
            {
              cardName: "Agony Warp",
              quantity: 1,
              role: "out",
              reason: "Ajuste de slots."
            },
            {
              cardName: "Suffocating Fumes",
              quantity: 1,
              role: "out",
              reason: "Sin impacto."
            },
            {
              cardName: "Faerie Seer",
              quantity: 2,
              role: "out",
              reason: "Ajuste de densidad."
            }
          ],
          gameplayTips: [
            "Gardens juega a velocidad lenta: contraresta sus robos de cartas (Deadly Dispute) para dejarlos sin gasolina.",
            "Stormbound Geist es una pesadilla para ellos al requerir dos removals independientes para ser eliminado.",
            "Asegura la corona con Thorn of the Black Rose cuando no tengan criaturas en mesa."
          ]
        }
      ]
    },
    {
      id: "spy-combo",
      slug: "spy-combo",
      name: "Spy Combo",
      metaPercentage: "3.9%",
      metaCount: 101,
      imageUrl: "https://cards.mtggoldfish.com/images/019ce2f0-0f67-7e9a-939b-fa88f12eea41/variants/672/938/card_image.webp",
      colors: ["B", "G"],
      archetypeType: "Combo",
      author: "CardsRealm / Raniere2950",
      decklistUrl: "https://cardsrealm.com/en-us/articles/pauper-spy-walls-combo-deck-tech-and-sideboard-guide",
      description: "Mazo combo hiperconsistente de cero tierras en juego que vacía la biblioteca entera en un solo turno con Balustrade Spy tras ciclar el bosque con Land Grant, reanimando a Lotleth Giant con Dread Return para infligir 20+ daños directos instantáneos.",
      keyCards: [
        "Balustrade Spy",
        "Lotleth Giant",
        "Dread Return",
        "Land Grant",
        "Generous Ent",
        "Troll of Khazad-dûm",
        "Overgrown Battlement",
        "Axebane Guardian",
        "Quirion Ranger",
        "Winding Way",
        "Lead the Stampede"
      ],
      sideboardCards: [
        "Mesmeric Fiend",
        "Vitu-Ghazi Inspector",
        "Nylea's Disciple",
        "Masked Vandal",
        "Flaring Pain",
        "Mirrorshell Crab",
        "Acorn Harvest"
      ],
      maybeboard: [
        {
          name: "Healer of the Glade",
          note: "Gana 3 vidas tempranas y sirve como cuerpo de sacrificio para Dread Return."
        },
        {
          name: "Scattershot Archer",
          note: "Pinger anti-hadas que destruye faeries y fichas 1/1."
        },
        {
          name: "Songs of the Damned",
          note: "Variante de maná negro explosivo tras el vaciado de la biblioteca."
        },
        {
          name: "Avenging Hunter",
          note: "Plan de victoria alternativo de Initiative de rango medio post-sideboard."
        }
      ],
      proTips: [
        "Secuencia del combo sin tierras: Siempre confirma que tu biblioteca no tenga tierras antes de lanzar Balustrade Spy; cicla Generous Ent o usa Land Grant primero, de lo contrario Spy se detendrá en la primera tierra.",
        "Respetar hate de cementerio: Si el rival tiene Relic of Progenitus o Faerie Macabre, usa Mesmeric Fiend antes del turno de combo para exiliar su pieza de interacción de la mano.",
        "Flaring Pain contra Prismatic Strands: Flaring Pain con Flashback desde el cementerio tras el vaciado de Spy anula toda prevención de daño antes de disparar el efecto de entrada de Lotleth Giant.",
        "Dread Return y Acorn Harvest: Si te faltan criaturas para el coste de Flashback de Dread Return (3 criaturas), lanza Acorn Harvest con Flashback desde el cementerio para crear las fichas necesarias."
      ],
      matchups: [
        {
          vsDeckName: "Mono Red / Madness Burn",
          difficulty: "even",
          role: "Combo / Ramp",
          inCards: [
            {
              cardName: "Vitu-Ghazi Inspector",
              quantity: 2,
              role: "in",
              reason: "Gana vidas y pone un cuerpo en mesa para bloquear y sacrificar."
            },
            {
              cardName: "Nylea's Disciple",
              quantity: 4,
              role: "in",
              reason: "Gana 8-12 vidas gracias a la enorme devoción al verde de los muros sacándote de peligro."
            }
          ],
          outCards: [
            {
              cardName: "Dread Return",
              quantity: 1,
              role: "out",
              reason: "Ajuste de piezas no combo."
            },
            {
              cardName: "Masked Vandal",
              quantity: 3,
              role: "out",
              reason: "Sin artefactos clave prioritarios que exiliar."
            },
            {
              cardName: "Troll of Khazad-dûm",
              quantity: 2,
              role: "out",
              reason: "Lento frente a rayos directos a la cara."
            }
          ],
          gameplayTips: [
            "Nylea's Disciple es tu mejor jugada: una sola entrada de Disciple te recupera a 25+ vidas.",
            "Prioriza muros de resistencia 4 (Overgrown Battlement) que bloquean a Voldaren Epicure y esquivan Lightning Bolt.",
            "No arriesgues el combo si estás a 3 de vida y tienen maná rojo abierto: cúrate primero."
          ]
        },
        {
          vsDeckName: "Jund Wildfire",
          difficulty: "favorable",
          role: "Combo",
          inCards: [
            {
              cardName: "Mesmeric Fiend",
              quantity: 4,
              role: "in",
              reason: "Exilia Krark-Clan Shaman o Cast Down de su mano antes de tu turno de combo."
            },
            {
              cardName: "Acorn Harvest",
              quantity: 1,
              role: "in",
              reason: "Genera fichas adicionales desde el cementerio para pagar el sacrificio de Dread Return."
            }
          ],
          outCards: [
            {
              cardName: "Quirion Ranger",
              quantity: 2,
              role: "out",
              reason: "Muere ante cualquier ping de Shaman."
            },
            {
              cardName: "Wall of Roots",
              quantity: 3,
              role: "out",
              reason: "Ajuste de densidad de criaturas."
            }
          ],
          gameplayTips: [
            "Krark-Clan Shaman es su única interacción real contra tu mesa de muros.",
            "Usa Mesmeric Fiend en turno 2-3 para ver su mano, quitar el chamán o su removal y combar de forma segura en el turno siguiente.",
            "Acorn Harvest asegura los 3 sacrificios requeridos para Dread Return incluso si limpian tus criaturas."
          ]
        },
        {
          vsDeckName: "High Tide",
          difficulty: "favorable",
          role: "Combo",
          inCards: [
            {
              cardName: "Mesmeric Fiend",
              quantity: 4,
              role: "in",
              reason: "Arranca High Tide o piezas de combo clave de su mano."
            },
            {
              cardName: "Mirrorshell Crab",
              quantity: 1,
              role: "in",
              reason: "Contrahechizo no contrarrestable vía Channel para cortar su turno de tormenta."
            }
          ],
          outCards: [
            {
              cardName: "Masked Vandal",
              quantity: 3,
              role: "out",
              reason: "Sin objetivos de artefactos relevantes."
            },
            {
              cardName: "Wall of Roots",
              quantity: 2,
              role: "out",
              reason: "Ajuste de slots."
            }
          ],
          gameplayTips: [
            "Carrera pura donde Spy Walls es consistentemente un turno más veloz.",
            "Mesmeric Fiend les desarticula la mano antes de que acumulen islas suficientes.",
            "Channel Mirrorshell Crab para contrarrestar High Tide en cuanto intenten iniciarlo."
          ]
        },
        {
          vsDeckName: "Mono-Blue Terror",
          difficulty: "even",
          role: "Combo",
          inCards: [
            {
              cardName: "Mesmeric Fiend",
              quantity: 4,
              role: "in",
              reason: "Extrae Counterspell o Spell Pierce de su mano antes del lanzamiento de Balustrade Spy."
            },
            {
              cardName: "Mirrorshell Crab",
              quantity: 1,
              role: "in",
              reason: "Contrarresta criaturas o hechizos clave sin pasar por la pila de contrahechizos habitual."
            }
          ],
          outCards: [
            {
              cardName: "Masked Vandal",
              quantity: 3,
              role: "out",
              reason: "Ajuste."
            },
            {
              cardName: "Winding Way",
              quantity: 2,
              role: "out",
              reason: "Vulnerable a contrahechizos de 1 maná."
            }
          ],
          gameplayTips: [
            "Ceba sus contrahechizos con Overgrown Battlement y Winding Way antes de resolver Balustrade Spy.",
            "Mesmeric Fiend te muestra si la costa está despejada para ejecutar el combo en turno 3."
          ]
        },
        {
          vsDeckName: "White Aggro / Caw-Gates",
          difficulty: "favorable",
          role: "Combo",
          inCards: [
            {
              cardName: "Vitu-Ghazi Inspector",
              quantity: 2,
              role: "in",
              reason: "Bloqueador adicional y ganancia de vidas."
            },
            {
              cardName: "Flaring Pain",
              quantity: 1,
              role: "in",
              reason: "Flashback desde cementerio que anula Prismatic Strands para asegurar el letal de Lotleth Giant."
            }
          ],
          outCards: [
            {
              cardName: "Dread Return",
              quantity: 1,
              role: "out",
              reason: "Ajuste de densidad."
            },
            {
              cardName: "Wall of Roots",
              quantity: 2,
              role: "out",
              reason: "Ajuste."
            }
          ],
          gameplayTips: [
            "Prismatic Strands es inútil si lanzas Flaring Pain con flashback desde el cementerio tras el vaciado de Balustrade Spy.",
            "Tus muros bloquean a sus atacantes por tierra indefinidamente mientras buscas piezas de combo."
          ]
        },
        {
          vsDeckName: "Grixis Affinity",
          difficulty: "even",
          role: "Combo",
          inCards: [
            {
              cardName: "Masked Vandal",
              quantity: 3,
              role: "in",
              reason: "Exilia puentes indestructibles o Blood Fountain."
            },
            {
              cardName: "Mesmeric Fiend",
              quantity: 2,
              role: "in",
              reason: "Quita Metallic Rebuke o Galvanic Blast de su mano."
            }
          ],
          outCards: [
            {
              cardName: "Winding Way",
              quantity: 2,
              role: "out",
              reason: "Ajuste."
            },
            {
              cardName: "Wall of Roots",
              quantity: 3,
              role: "out",
              reason: "Ajuste de densidad."
            }
          ],
          gameplayTips: [
            "Masked Vandal ralentiza su afinidad y elimina sus motores de ventaja de cartas.",
            "Comba antes de que acumulen tres Myr Enforcers en mesa."
          ]
        },
        {
          vsDeckName: "Bogles",
          difficulty: "favorable",
          role: "Combo",
          inCards: [
            {
              cardName: "Nylea's Disciple",
              quantity: 2,
              role: "in",
              reason: "Gana vidas para comprar 1-2 turnos extra de combo."
            },
            {
              cardName: "Mesmeric Fiend",
              quantity: 2,
              role: "in",
              reason: "Quita auras críticas como Ancestral Mask o Armadillo Cloak."
            }
          ],
          outCards: [
            {
              cardName: "Masked Vandal",
              quantity: 2,
              role: "out",
              reason: "Ajuste."
            },
            {
              cardName: "Wall of Roots",
              quantity: 2,
              role: "out",
              reason: "Ajuste."
            }
          ],
          gameplayTips: [
            "Hexproof no interactúa con Balustrade Spy ni con Lotleth Giant, ya que Giant hace daño directo al jugador sin hacer objetivo a sus criaturas.",
            "Eres un mazo más rápido en cerrar la partida que Bogles si no cometen errores de mulligan."
          ]
        }
      ]
    },
    {
      id: "jund-wildfire",
      slug: "jund-wildfire",
      name: "Jund Wildfire",
      metaPercentage: "3.8%",
      metaCount: 97,
      imageUrl: "https://cards.mtggoldfish.com/images/019ce2ef-f737-716e-b76e-c3426c0501e4/variants/672/938/card_image.webp",
      colors: ["B", "R", "G"],
      archetypeType: "Midrange",
      author: "CardsRealm / Pacto das Guildas",
      decklistUrl: "https://cardsrealm.com/en-us/articles/pauper-jund-wild-foods-deck-tech-and-sideboard-guide",
      description: "Estrategia de rampa indestructible que combina Cleansing Wildfire sobre puentes artefacto para acelerar maná mientras roba cartas. Utiliza el paquete Wild Foods (Lembas, Candy Trail, Cauldron Familiar) junto a Writhing Chrysalis, Refurbished Familiar y el devastador combo de Krark-Clan Shaman + Toxin Analysis.",
      keyCards: [
        "Cleansing Wildfire",
        "Writhing Chrysalis",
        "Refurbished Familiar",
        "Deadly Dispute",
        "Krark-Clan Shaman",
        "Toxin Analysis",
        "Lembas",
        "Candy Trail",
        "Cauldron Familiar",
        "Galvanic Blast",
        "Drossforge Bridge",
        "Slagwoods Bridge"
      ],
      sideboardCards: [
        "Breath Weapon",
        "Weather the Storm",
        "Cast into the Fire",
        "Duress",
        "Pilfer",
        "Tithing Blade",
        "Ancient Grudge",
        "Nihil Spellbomb"
      ],
      maybeboard: [
        {
          name: "Avenging Hunter",
          note: "Amenaza de Initiative que gana juegos por sí sola acelerada en Turno 3 con Wildfire."
        },
        {
          name: "Deglamer",
          note: "Hate de artefactos que baraja en la biblioteca para evitar triggers de muerte o Blood Fountain."
        },
        {
          name: "Campfire",
          note: "Ganancia de vida recurrente y recuperación de cartas ante mazos de descarte."
        },
        {
          name: "Ichor Wellspring",
          note: "Motor alternativo de robo de cartas para Deadly Dispute y KCS."
        },
        {
          name: "Chainer's Edict",
          note: "Remoción de criaturas individuales pesadas con valor añadido de Flashback."
        }
      ],
      proTips: [
        "El combo Shaman + Toxin Analysis: Con Krark-Clan Shaman en mesa, lanzar Toxin Analysis le da Deathtouch y Lifelink; activar el chamán por 1 artefacto limpiará TODA la mesa rival y te curará entre 10 y 30 vidas de golpe.",
        "Objetivos de Cleansing Wildfire: Siempre haz target a tus propias tierras puente indestructibles (Drossforge Bridge, Slagwoods Bridge); el puente no se destruye y buscas una tierra básica desbloqueada, actuando como un Rampant Growth que además roba carta.",
        "Wildfire defensivo: Contra mazos dependientes de tierras clave (Tron o Caw-Gates con Basilisk Gate), apunta Cleansing Wildfire a sus tierras para cortarles el maná o sus fuentes de poder.",
        "Secuencia con Chrysalis: Writhing Chrysalis crece (+1/+1) con cada artefacto o Eldrazi Spawn sacrificado; sacrificar fichas para pagar hechizos infla a Chrysalis y esquiva daño de sweepers."
      ],
      matchups: [
        {
          vsDeckName: "Kuldotha Red / Mono Red Madness",
          difficulty: "favorable",
          role: "Midrange / Control",
          inCards: [
            {
              cardName: "Breath Weapon",
              quantity: 1,
              role: "in",
              reason: "Barre fichas de Kuldotha Rebirth y trasgos atacantes."
            },
            {
              cardName: "Weather the Storm",
              quantity: 3,
              role: "in",
              reason: "Gana 12-20 vidas tras sus cadenas de quemadura y artefactos."
            },
            {
              cardName: "Cast into the Fire",
              quantity: 3,
              role: "in",
              reason: "Exilia artefactos o elimina dos criaturas 1/1 a velocidad instantánea."
            }
          ],
          outCards: [
            {
              cardName: "Refurbished Familiar",
              quantity: 4,
              role: "out",
              reason: "Demasiado lento ante presión directa a los puntos de vida."
            },
            {
              cardName: "Cast Down",
              quantity: 2,
              role: "out",
              reason: "Inútil contra enjambre masivo de criaturas 1/1."
            },
            {
              cardName: "Galvanic Blast",
              quantity: 1,
              role: "out",
              reason: "Ajuste de densidad."
            }
          ],
          gameplayTips: [
            "Krark-Clan Shaman + Toxin Analysis es victoria automática: limpia la mesa completa y te cura 15+ vidas.",
            "Weather the Storm en respuesta a sus turnos de tormenta o daño directo los deja sin recursos de quemadura.",
            "Usa los alimentos (Lembas, Candy Trail) de forma constante para mantenerte por encima de 12 vidas."
          ]
        },
        {
          vsDeckName: "Mono-Blue Faeries",
          difficulty: "even",
          role: "Midrange / Control",
          inCards: [
            {
              cardName: "Breath Weapon",
              quantity: 1,
              role: "in",
              reason: "Sweeper instantáneo que no pueden bloquear con hadas voladoras."
            },
            {
              cardName: "Duress",
              quantity: 2,
              role: "in",
              reason: "Quita contrahechizos o Ninja of the Deep Hours de su mano."
            },
            {
              cardName: "Cast into the Fire",
              quantity: 3,
              role: "in",
              reason: "Mata dos hadas 1/1 por 2 manás a velocidad instantánea."
            }
          ],
          outCards: [
            {
              cardName: "Cauldron Familiar",
              quantity: 1,
              role: "out",
              reason: "Bloqueado fácilmente."
            },
            {
              cardName: "Krark-Clan Shaman",
              quantity: 2,
              role: "out",
              reason: "Sus criaturas vuelan y evitan el daño terrestre del chamán sin Toxin Analysis."
            },
            {
              cardName: "Cast Down",
              quantity: 2,
              role: "out",
              reason: "Ajuste."
            },
            {
              cardName: "Toxin Analysis",
              quantity: 1,
              role: "out",
              reason: "Ajuste de combo."
            }
          ],
          gameplayTips: [
            "Cast into the Fire es tu mejor herramienta: úsalo cuando intenten hacer Ninjutsu para castigar la criatura atacante y otra hada.",
            "Writhing Chrysalis tiene alcance (Reach): una vez en mesa frena por completo todos sus ataques aéreos."
          ]
        },
        {
          vsDeckName: "Gruul Ramp",
          difficulty: "favorable",
          role: "Control / Midrange",
          inCards: [
            {
              cardName: "Pilfer",
              quantity: 2,
              role: "in",
              reason: "Descarta sus monstruos de alta curva o aceleradores tempranos."
            }
          ],
          outCards: [
            {
              cardName: "Galvanic Blast",
              quantity: 2,
              role: "out",
              reason: "4 de daño es insuficiente contra sus monstruos gigantes."
            }
          ],
          gameplayTips: [
            "Gruul Ramp no puede competir con el combo de Krark-Clan Shaman + Toxin Analysis: mata todas sus criaturas sin importar resistencia.",
            "Cleansing Wildfire apunta a sus tierras no básicas para desincronizar su curva de maná.",
            "Writhing Chrysalis crece rápidamente superando el tamaño de sus atacantes."
          ]
        },
        {
          vsDeckName: "Bogles",
          difficulty: "favorable",
          role: "Control",
          inCards: [
            {
              cardName: "Breath Weapon",
              quantity: 1,
              role: "in",
              reason: "Mata bogles antes de que crezcan con auras pesadas."
            },
            {
              cardName: "Tithing Blade",
              quantity: 1,
              role: "in",
              reason: "Fuerza el sacrificio directo de su única criatura con hexproof."
            },
            {
              cardName: "Duress",
              quantity: 2,
              role: "in",
              reason: "Quita Ancestral Mask o Armadillo Cloak de su mano."
            },
            {
              cardName: "Pilfer",
              quantity: 2,
              role: "in",
              reason: "Descarta auras críticas."
            }
          ],
          outCards: [
            {
              cardName: "Cast Down",
              quantity: 2,
              role: "out",
              reason: "No puede hacer objetivo debido a Hexproof."
            },
            {
              cardName: "Galvanic Blast",
              quantity: 4,
              role: "out",
              reason: "Totalmente inútil contra criaturas con antimaleficio."
            }
          ],
          gameplayTips: [
            "Krark-Clan Shaman + Toxin Analysis aniquila a Bogles sin hacer target: toque mortal a toda la mesa destruye criaturas con cualquier cantidad de vidas o auras.",
            "Tithing Blade y Chainer's Edict pasan por encima de Antimaleficio.",
            "Duress en turno 1 les quita el aura con la que planeaban ganar la carrera."
          ]
        },
        {
          vsDeckName: "Golgari Broodscale Combo",
          difficulty: "even",
          role: "Control",
          inCards: [
            {
              cardName: "Breath Weapon",
              quantity: 1,
              role: "in",
              reason: "Limpia tokens infinitos de Eldrazi Spawn antes de que los sacrifiquen para daño."
            },
            {
              cardName: "Duress",
              quantity: 2,
              role: "in",
              reason: "Quita Sadistic Glee de su mano antes de que intenten combar."
            },
            {
              cardName: "Pilfer",
              quantity: 2,
              role: "in",
              reason: "Desarticula sus piezas de combo tempranas."
            }
          ],
          outCards: [
            {
              cardName: "Cauldron Familiar",
              quantity: 3,
              role: "out",
              reason: "Poco impacto frente al combo."
            },
            {
              cardName: "Blood Fountain",
              quantity: 2,
              role: "out",
              reason: "Demasiado lento."
            }
          ],
          gameplayTips: [
            "Guarda siempre Galvanic Blast o Cast Down con maná abierto cuando Basking Broodscale esté en mesa.",
            "Responde con removal cuando lancen Sadistic Glee sobre Broodscale para conseguir un devastador 2x1 a tu favor.",
            "Duress les desmonta el turno de combo antes de que comience."
          ]
        },
        {
          vsDeckName: "Dimir Terror",
          difficulty: "favorable",
          role: "Midrange",
          inCards: [
            {
              cardName: "Nihil Spellbomb",
              quantity: 2,
              role: "in",
              reason: "Exilia su cementerio impidiendo que bajen Tolarian Terror por 1 maná."
            },
            {
              cardName: "Duress",
              quantity: 2,
              role: "in",
              reason: "Quita contrahechizos o Thought Scour."
            },
            {
              cardName: "Pilfer",
              quantity: 2,
              role: "in",
              reason: "Descarta sus terrores o respuestas clave."
            }
          ],
          outCards: [
            {
              cardName: "Galvanic Blast",
              quantity: 2,
              role: "out",
              reason: "4 de daño no mata criaturas de resistencia 5."
            },
            {
              cardName: "Cauldron Familiar",
              quantity: 2,
              role: "out",
              reason: "Ajuste."
            },
            {
              cardName: "Blood Fountain",
              quantity: 2,
              role: "out",
              reason: "Vulnerable a contrahechizos."
            }
          ],
          gameplayTips: [
            "Nihil Spellbomb en turno 1-2 los deja sin opciones de jugar amenazas baratas durante turnos.",
            "Writhing Chrysalis supera en tamaño a Tolarian Terror rápidamente sacrificando Eldrazi Spawns y artefactos.",
            "Chainer's Edict y Cast Down manejan cualquier amenaza individual que logren colar."
          ]
        },
        {
          vsDeckName: "Grixis Affinity",
          difficulty: "even",
          role: "Midrange",
          inCards: [
            {
              cardName: "Cast into the Fire",
              quantity: 3,
              role: "in",
              reason: "Exilia puentes artefacto y Blood Fountains."
            },
            {
              cardName: "Ancient Grudge",
              quantity: 2,
              role: "in",
              reason: "Destruye dos artefactos clave con valor de flashback."
            },
            {
              cardName: "Breath Weapon",
              quantity: 1,
              role: "in",
              reason: "Limpia fichas de sangre y pequeñas amenazas."
            }
          ],
          outCards: [
            {
              cardName: "Cauldron Familiar",
              quantity: 2,
              role: "out",
              reason: "Poco impacto."
            },
            {
              cardName: "Galvanic Blast",
              quantity: 2,
              role: "out",
              reason: "Ajuste frente a 4/4s."
            },
            {
              cardName: "Refurbished Familiar",
              quantity: 2,
              role: "out",
              reason: "Ajuste de curva."
            }
          ],
          gameplayTips: [
            "Cast into the Fire exilia tierras puente artefacto impidiendo que aumenten su cuenta de afinidad.",
            "Usa Ancient Grudge sobre sus Blood Fountains para negarles la recuperación de criaturas del cementerio.",
            "Chrysalis domina el combate por tierra frente a Myr Enforcers."
          ]
        },
        {
          vsDeckName: "Caw-Gates",
          difficulty: "favorable",
          role: "Midrange",
          inCards: [
            {
              cardName: "Cast into the Fire",
              quantity: 2,
              role: "in",
              reason: "Mata dos aves 1/1 a la vez o exilia artefactos."
            },
            {
              cardName: "Duress",
              quantity: 2,
              role: "in",
              reason: "Quita Prismatic Strands o Brainstorm."
            },
            {
              cardName: "Breath Weapon",
              quantity: 1,
              role: "in",
              reason: "Barre a todos los Squadron Hawks en vuelo."
            }
          ],
          outCards: [
            {
              cardName: "Cauldron Familiar",
              quantity: 2,
              role: "out",
              reason: "Bloqueado por Sacred Cat."
            },
            {
              cardName: "Cast Down",
              quantity: 2,
              role: "out",
              reason: "Inútil contra Guardian of the Guildpact."
            },
            {
              cardName: "Galvanic Blast",
              quantity: 1,
              role: "out",
              reason: "Ajuste."
            }
          ],
          gameplayTips: [
            "Cleansing Wildfire apunta directamente a Basilisk Gate para destruir su condición principal de victoria.",
            "Writhing Chrysalis con Reach detiene a Squadron Hawks inflados con puertas.",
            "Krark-Clan Shaman con Toxin Analysis destruye a Guardian of the Guildpact al no hacer objetivo directo."
          ]
        }
      ]
    },
    {
      id: "white-aggro",
      slug: "white-aggro",
      name: "White Aggro",
      metaPercentage: "2.5%",
      metaCount: 65,
      imageUrl: "https://cards.mtggoldfish.com/images/019ce2ef-98e6-7f07-b81c-361cdf964043/variants/672/938/card_image.webp",
      colors: ["W"],
      archetypeType: "Aggro",
      author: "CardsRealm / Pacto das Guildas",
      decklistUrl: "https://cardsrealm.com/en-us/articles/pauper-caw-gates-deck-tech-and-sideboard-guide",
      description: "Estrategia de control y midrange basada en el motor de puertas (Basilisk Gate, Citadel Gate, Sea Gate) y criaturas evasivas ultrarresistentes como Guardian of the Guildpact, Squadron Hawk y Sacred Cat, combinadas con Brainstorm y la prevención de Prismatic Strands.",
      keyCards: [
        "Squadron Hawk",
        "Sacred Cat",
        "Guardian of the Guildpact",
        "The Modern Age",
        "Brainstorm",
        "Thraben Charm",
        "Prismatic Strands",
        "Basilisk Gate",
        "Citadel Gate",
        "Sea Gate",
        "Journey to Nowhere"
      ],
      sideboardCards: [
        "Dust to Dust",
        "Pyroblast",
        "Red Elemental Blast",
        "Arms of Hadar",
        "Negate",
        "Essence Scatter",
        "Dispel",
        "Dawnbringer Cleric"
      ],
      maybeboard: [
        {
          name: "Deep Analysis",
          note: "Generador de ventaja de cartas con flashback brutal en partidas de desgaste."
        },
        {
          name: "Thraben Charm",
          note: "Removal versátil, exilio de cementerio o destrucción de encantamientos en 1 carta modal."
        },
        {
          name: "Suffocating Fumes",
          note: "Respuesta instantánea con ciclismo contra enjambres 1/1."
        },
        {
          name: "Destroy Evil",
          note: "Elimina Murmuring Mystic, Gurmag Angler o grandes auras de Bogles sin fallar."
        },
        {
          name: "Coalition Honor Guard",
          note: "Redirige todo el targeting rival en mirrors o contra mazos de quemadura y auras."
        }
      ],
      proTips: [
        "El combo Brainstorm + Squadron Hawk: Lanza Brainstorm para devolver a tu biblioteca dos Squadron Hawks que tengas en mano, luego juega el tercer halcón para tutorar los dos de vuelta, convirtiendo Brainstorm en un Ancestral Recall de facto.",
        "Uso de Basilisk Gate: No te apresures a activar Basilisk Gate; actívala preferentemente en la fase de bloqueo o en respuesta a removals para forzar 2x1 a tu favor o infligir daño masivo sorpresa.",
        "Guardian of the Guildpact como pilar inexpugnable: Tiene protección contra todos los colores no multicolores; es inmune al 90% de removals del formato (Snuff Out, Lightning Bolt, Cast Down) y bloquea a Myr Enforcer y Terror para siempre.",
        "Flashback de Prismatic Strands: Puedes lanzar Prismatic Strands girando una criatura blanca desbloqueada (como Sacred Cat o Squadron Hawk) incluso cuando estés sin maná, anulando turnos de letal por completo."
      ],
      matchups: [
        {
          vsDeckName: "Mono Blue Faeries",
          difficulty: "even",
          role: "Midrange / Control",
          inCards: [
            {
              cardName: "Pyroblast",
              quantity: 2,
              role: "in",
              reason: "Contrarresta Spellstutter Sprite, Ninja of the Deep Hours o cantrips."
            },
            {
              cardName: "Red Elemental Blast",
              quantity: 1,
              role: "in",
              reason: "Destruye permanentes azules y contrahechizos."
            },
            {
              cardName: "Arms of Hadar",
              quantity: 2,
              role: "in",
              reason: "Barre a todas las hadas 1/1 voladoras en un solo turno."
            }
          ],
          outCards: [
            {
              cardName: "Deep Analysis",
              quantity: 2,
              role: "out",
              reason: "Demasiado lento frente a agresividad de tempo."
            },
            {
              cardName: "Thraben Charm",
              quantity: 2,
              role: "out",
              reason: "Ajuste de removal."
            },
            {
              cardName: "Brainstorm",
              quantity: 1,
              role: "out",
              reason: "Ajuste de cantrips."
            }
          ],
          gameplayTips: [
            "Squadron Hawk y Guardian of the Guildpact bloquean sus atacantes aéreos con total impunidad.",
            "Los blast rojos impiden que dominen el tempo con Spellstutter Sprite y Ninjas.",
            "Arms of Hadar barre su presencia entera sin dañar a tus criaturas blancas."
          ]
        },
        {
          vsDeckName: "Grixis Affinity",
          difficulty: "even",
          role: "Control",
          inCards: [
            {
              cardName: "Dust to Dust",
              quantity: 3,
              role: "in",
              reason: "Exilia dos tierras puente artefacto a la vez, arruinando su base de maná y afinidad."
            },
            {
              cardName: "Negate",
              quantity: 2,
              role: "in",
              reason: "Contrarresta Thoughtcast, Metallic Rebuke y Blood Fountain."
            }
          ],
          outCards: [
            {
              cardName: "Deep Analysis",
              quantity: 2,
              role: "out",
              reason: "Lento frente al reloj de los 4/4s."
            },
            {
              cardName: "Thraben Charm",
              quantity: 2,
              role: "out",
              reason: "Ajuste."
            },
            {
              cardName: "Brainstorm",
              quantity: 1,
              role: "out",
              reason: "Ajuste."
            }
          ],
          gameplayTips: [
            "Dust to Dust en Turno 3 exilia dos puentes y retrasa a Affinity 3 turnos enteros.",
            "Guardian of the Guildpact bloquea a Myr Enforcers indefinidamente sin recibir daño.",
            "Infla a Guardian o Squadron Hawk con Basilisk Gate para cerrar el juego antes de que recuperen recursos."
          ]
        },
        {
          vsDeckName: "Elves",
          difficulty: "even",
          role: "Control",
          inCards: [
            {
              cardName: "Arms of Hadar",
              quantity: 2,
              role: "in",
              reason: "Limpia todos los elfos 1/1 y 2/2 a velocidad de conjuro."
            },
            {
              cardName: "Negate",
              quantity: 2,
              role: "in",
              reason: "Contrarresta Lead the Stampede, Winding Way o Wrap in Vigor."
            },
            {
              cardName: "Essence Scatter",
              quantity: 1,
              role: "in",
              reason: "Contrarresta Timberwatch Elf o Wellwisher en curva."
            }
          ],
          outCards: [
            {
              cardName: "Dispel",
              quantity: 2,
              role: "out",
              reason: "Elfos juega casi exclusivamente conjuros y criaturas."
            },
            {
              cardName: "Deep Analysis",
              quantity: 2,
              role: "out",
              reason: "Demasiado lento."
            },
            {
              cardName: "Brainstorm",
              quantity: 1,
              role: "out",
              reason: "Ajuste."
            }
          ],
          gameplayTips: [
            "Arms of Hadar limpia sus elfos de baja resistencia antes de que Timberwatch actúe.",
            "Prismatic Strands anula por completo su turno de ataque masivo nombrando verde.",
            "Sacred Cat con Basilisk Gate genera ganancias de vida masivas para alejarte de su rango."
          ]
        },
        {
          vsDeckName: "Walls Combo / Spy Combo",
          difficulty: "unfavorable",
          role: "Control",
          inCards: [
            {
              cardName: "Essence Scatter",
              quantity: 1,
              role: "in",
              reason: "Contrarresta Axebane Guardian o Balustrade Spy."
            },
            {
              cardName: "Negate",
              quantity: 2,
              role: "in",
              reason: "Contrarresta Winding Way, Lead the Stampede o Dread Return."
            },
            {
              cardName: "Arms of Hadar",
              quantity: 1,
              role: "in",
              reason: "Limpia generadores de maná secundarios."
            }
          ],
          outCards: [
            {
              cardName: "Dispel",
              quantity: 1,
              role: "out",
              reason: "Ajuste."
            },
            {
              cardName: "Prismatic Strands",
              quantity: 2,
              role: "out",
              reason: "No previene la pérdida de vida de Lotleth Giant."
            },
            {
              cardName: "Journey to Nowhere",
              quantity: 1,
              role: "out",
              reason: "Lento frente a combo veloz."
            }
          ],
          gameplayTips: [
            "Corta sus muros aceleradores de maná en turno 2-3 para impedir que tengan 4 manás para combar.",
            "Ten cuidado: Prismatic Strands no previene la pérdida de vidas de Lotleth Giant; necesitas ganar antes o contrarestar la pieza clave."
          ]
        },
        {
          vsDeckName: "High Tide",
          difficulty: "even",
          role: "Control",
          inCards: [
            {
              cardName: "Pyroblast",
              quantity: 2,
              role: "in",
              reason: "Contrarresta High Tide o cantrips azules de combo."
            },
            {
              cardName: "Red Elemental Blast",
              quantity: 1,
              role: "in",
              reason: "Respuesta directa a High Tide."
            },
            {
              cardName: "Negate",
              quantity: 2,
              role: "in",
              reason: "Contrarresta hechizos de enderezar tierras o robo masivo."
            }
          ],
          outCards: [
            {
              cardName: "Journey to Nowhere",
              quantity: 4,
              role: "out",
              reason: "Carta totalmente muerta: no tienen criaturas objetivo."
            },
            {
              cardName: "Thraben Charm",
              quantity: 1,
              role: "out",
              reason: "Ajuste."
            }
          ],
          gameplayTips: [
            "Journey to Nowhere sale al 100% de inmediato.",
            "Guarda tus contrahechizos rojos y Negate exclusivamente para High Tide en su turno clave.",
            "Aplica máxima presión de daño en los primeros 3 turnos con Squadron Hawks inflados con Basilisk Gate."
          ]
        },
        {
          vsDeckName: "Dimir Terror",
          difficulty: "favorable",
          role: "Control",
          inCards: [
            {
              cardName: "Pyroblast",
              quantity: 2,
              role: "in",
              reason: "Contrarresta Delver of Secrets, Tolarian Terror o cantrips."
            },
            {
              cardName: "Red Elemental Blast",
              quantity: 1,
              role: "in",
              reason: "Elimina permanentes azules clave."
            },
            {
              cardName: "Negate",
              quantity: 2,
              role: "in",
              reason: "Contrarresta Thought Scour y contrahechizos rivales."
            }
          ],
          outCards: [
            {
              cardName: "Prismatic Strands",
              quantity: 2,
              role: "out",
              reason: "Ajuste de recursos."
            },
            {
              cardName: "Sacred Cat",
              quantity: 2,
              role: "out",
              reason: "Bloqueado con facilidad por terrores 5/5."
            },
            {
              cardName: "Journey to Nowhere",
              quantity: 1,
              role: "out",
              reason: "Sufre ante Spell Pierce."
            }
          ],
          gameplayTips: [
            "Guardian of the Guildpact no puede ser bloqueado ni destruido por Tolarian Terror ni Gurmag Angler.",
            "Infla al Guardian con Basilisk Gate para cerrar el juego en 2 ataques sin que puedan interactuar.",
            "Usa Journey to Nowhere solo cuando tengas respaldo de contrahechizo."
          ]
        },
        {
          vsDeckName: "Mono Red Kuldotha / Burn",
          difficulty: "favorable",
          role: "Midrange / Control",
          inCards: [
            {
              cardName: "Dawnbringer Cleric",
              quantity: 2,
              role: "in",
              reason: "Gana 2 vidas al entrar y bloquea con resistencia 3."
            },
            {
              cardName: "Dispel",
              quantity: 2,
              role: "in",
              reason: "Contrarresta Lightning Bolt, Fireblast y quemadura instantánea."
            },
            {
              cardName: "Prismatic Strands",
              quantity: 1,
              role: "in",
              reason: "Previene turnos enteros de daño rojo sin gastar maná."
            }
          ],
          outCards: [
            {
              cardName: "Journey to Nowhere",
              quantity: 2,
              role: "out",
              reason: "Lento ante criaturas con prisa y trasgos 1/1."
            },
            {
              cardName: "Deep Analysis",
              quantity: 2,
              role: "out",
              reason: "Pagar 3 vidas por flashback es inasumible contra quemadura."
            },
            {
              cardName: "The Modern Age",
              quantity: 1,
              role: "out",
              reason: "Lento frente a su agresividad."
            }
          ],
          gameplayTips: [
            "Sacred Cat con Basilisk Gate genera un motor de lifelink continuo que frustra su reloj de daño.",
            "Prismatic Strands con Flashback girando un Sacred Cat previene turnos letales de forma gratuita.",
            "Dawnbringer Cleric estabiliza tu total de vidas en turno 2."
          ]
        },
        {
          vsDeckName: "Caw-Gates (Mirror)",
          difficulty: "even",
          role: "Midrange / Control",
          inCards: [
            {
              cardName: "Negate",
              quantity: 2,
              role: "in",
              reason: "Contrarresta The Modern Age, Journey to Nowhere o Prismatic Strands."
            },
            {
              cardName: "Pyroblast",
              quantity: 2,
              role: "in",
              reason: "Contrarresta Brainstorm y Sea Gate o The Modern Age."
            },
            {
              cardName: "Red Elemental Blast",
              quantity: 1,
              role: "in",
              reason: "Elimina permanentes azules rivales."
            },
            {
              cardName: "Dust to Dust",
              quantity: 2,
              role: "in",
              reason: "Exilia sus puertas artefacto o Citadel Gates para desestabilizar su maná."
            }
          ],
          outCards: [
            {
              cardName: "Sacred Cat",
              quantity: 3,
              role: "out",
              reason: "Bloqueado por los gatos rivales sin valor."
            },
            {
              cardName: "Prismatic Strands",
              quantity: 2,
              role: "out",
              reason: "Partida de desgaste donde el combate es secundario al maná."
            },
            {
              cardName: "Journey to Nowhere",
              quantity: 2,
              role: "out",
              reason: "Inútil contra Guardian of the Guildpact."
            }
          ],
          gameplayTips: [
            "El mirror se define por el número de puertas activas y quién logra conectar más disparos de Basilisk Gate.",
            "Guardian of the Guildpact bloquea a los halcones rivales, pero cuidado si activan Basilisk Gate para inflarlo.",
            "Dust to Dust sobre sus puertas es devastador."
          ]
        }
      ]
    },
    {
        "id": "tron",
        "slug": "tron",
        "name": "Tron",
        "metaPercentage": "6.4%",
        "metaCount": 182,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2ef-3280-7dc4-a8a5-666164870afb/variants/672/938/card_image.webp",
        "colors": [
            "U",
            "R",
            "G"
        ],
        "archetypeType": "Ramp",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/pauper-tron#paper",
        "description": "Control y combo de maná masivo mediante las tres tierras de Urza (Tower, Mine y Power Plant) para cerrar con bucles de Ghostly Flicker o Altar of the Brood.",
        "keyCards": [
            "Urza's Tower",
            "Urza's Power Plant",
            "Urza's Mine",
            "Mnemonic Wall",
            "Ghostly Flicker",
            "Mulldrifter",
            "Expedition Map",
            "Crop Rotation",
            "Energy Refractor",
            "Compulsive Research"
        ],
        "sideboardCards": [
            "Weather the Storm",
            "Pyroblast / Red Elemental Blast",
            "Hydroblast",
            "Breath Weapon",
            "Fangren Marauder",
            "Stonehorn Dignitary",
            "Ancient Grudge"
        ],
        "maybeboard": [
            {
                "name": "Altar of the Brood",
                "note": "Condición de victoria mill en bucle infinito con dos Mnemonic Walls."
            },
            {
                "name": "Foundry Inspector",
                "note": "Acelera artefactos y mapas en listas centradas en Altar."
            },
            {
                "name": "Gorilla Shaman",
                "note": "Hate letal de tierras artefacto contra Affinity cuando se tiene maná ilimitado."
            },
            {
                "name": "Moment's Peace",
                "note": "Niebla con flashback excelente contra agresivas."
            }
        ],
        "proTips": [
            "Prioriza ensamblar el trío de Urza antes de gastar recursos en cantrips reactivos.",
            "Energy Refractor es tu seguro de vida para filtrar incoloro a maná de color bajo Blood Moon o Ponza.",
            "Un Stonehorn Dignitary en bucle con Ghostly Flicker salta indefinidamente la fase de combate rival."
        ],
        "matchups": [
            {
                "vsDeckName": "Mono Red Madness",
                "difficulty": "even",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Weather the Storm",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Frena su explosividad de daño directo."
                    },
                    {
                        "cardName": "Hydroblast",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Corta removals y daño letal."
                    },
                    {
                        "cardName": "Stonehorn Dignitary",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Bloquea sus ataques continuos."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Compulsive Research",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Demasiado lento ante presión rápida."
                    },
                    {
                        "cardName": "Ghostly Flicker",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Ajuste de densidad del bucle."
                    },
                    {
                        "cardName": "Mulldrifter",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Costoso para jugar en curva inicial."
                    }
                ],
                "gameplayTips": [
                    "Juega alrededor de Fireblast calculando tus vidas efectivas en cada turno.",
                    "Weather the Storm tras una cadena de quemaduras cierra por completo su ventana de victoria."
                ]
            },
            {
                "vsDeckName": "Grixis Affinity",
                "difficulty": "favorable",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Fangren Marauder",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Cada artefacto sacrificado o destruido nos otorga 5 vidas."
                    },
                    {
                        "cardName": "Ancient Grudge",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Removal 2x1 contra Enforcers e Ichor Wellspring."
                    },
                    {
                        "cardName": "Hydroblast",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Neutraliza Makeshift Munitions y Galvanic Blast."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Stonehorn Dignitary",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Pueden ganar con Munitions sin atacar."
                    },
                    {
                        "cardName": "Breath Weapon",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Sus criaturas clave resisten 4 de daño."
                    }
                ],
                "gameplayTips": [
                    "Fangren Marauder en mesa hace prácticamente imposible que pierdas contra Makeshift Munitions.",
                    "Cuidado con Blood Fountain en partidas largas."
                ]
            }
        ]
    },
    {
        "id": "elves",
        "slug": "elves",
        "name": "Elves",
        "metaPercentage": "6.2%",
        "metaCount": 176,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2f0-0bc6-7dd5-afe0-19d7b418c5af/variants/672/938/card_image.webp",
        "colors": [
            "G"
        ],
        "archetypeType": "Aggro",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/pauper-elves#paper",
        "description": "Estrategia tribal arquetípica de generación hiperacelerada de maná y presencia masiva en mesa para cerrar con Timberwatch Elf o Distant Melody.",
        "keyCards": [
            "Quirion Ranger",
            "Priest of Titania",
            "Timberwatch Elf",
            "Jaspera Sentinel",
            "Llanowar Elves",
            "Elvish Mystic",
            "Lead the Stampede",
            "Distant Melody",
            "Birchlore Rangers",
            "Wellwisher"
        ],
        "sideboardCards": [
            "Gleeful Sabotage",
            "Scattershot Archer",
            "Spidersilk Armor",
            "Hydroblast",
            "Magnify",
            "Relic of Progenitus",
            "Tormod's Crypt"
        ],
        "maybeboard": [
            {
                "name": "Lys Alana Huntmaster",
                "note": "Multiplicador de fichas elfo para sobrepasar bloqueadores."
            },
            {
                "name": "Viridian Longbow",
                "note": "Herramienta de control repetitiva con Quirion Ranger."
            },
            {
                "name": "Prohibit",
                "note": "Respuesta reactiva contra sweepers de daño masivo."
            }
        ],
        "proTips": [
            "Wellwisher gana partidas él solo contra quemaduras y barajas agresivas si se protege el turno 2.",
            "Usa Quirion Ranger dos veces por turno devolviendo un bosque a la mano antes y después del ataque.",
            "Calcula siempre el impacto de sweepers (Breath Weapon, Krark-Clan Shaman, End the Festivities) antes de vaciar la mano."
        ],
        "matchups": [
            {
                "vsDeckName": "Mono Red Madness",
                "difficulty": "even",
                "role": "Aggro",
                "inCards": [
                    {
                        "cardName": "Spidersilk Armor",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Saca a nuestros elfos del rango de End the Festivities y Lava Dart."
                    },
                    {
                        "cardName": "Hydroblast",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Contrarresta removals de área y quemaduras."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Lead the Stampede",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Ritmo algo lento en los primeros turnos."
                    },
                    {
                        "cardName": "Distant Melody",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Difícil de resolver ante removal instantáneo."
                    }
                ],
                "gameplayTips": [
                    "Si Wellwisher sobrevive un turno, prioriza ganar vidas cada turno con Quirion Ranger.",
                    "No bloquees a menos que sea estrictamente necesario para preservar tu motor de maná."
                ]
            },
            {
                "vsDeckName": "Blue Terror",
                "difficulty": "favorable",
                "role": "Aggro",
                "inCards": [
                    {
                        "cardName": "Relic of Progenitus",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Ralentiza el descuento de coste de Tolarian Terror y Cryptic Serpent."
                    },
                    {
                        "cardName": "Spidersilk Armor",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Resistencia a cartas de tempo."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Wellwisher",
                        "quantity": 2,
                        "role": "out",
                        "reason": "No nos presionan vidas rápido, nos interesa densidad de amenazas."
                    }
                ],
                "gameplayTips": [
                    "Sobrepásalos en número de criaturas: sus criaturas no tienen arrollar (trample).",
                    "Timberwatch Elf fuerza bloqueos desfavorables cada turno."
                ]
            }
        ]
    },
    {
        "id": "dimir-faeries",
        "slug": "dimir-faeries",
        "name": "Dimir Faeries",
        "metaPercentage": "5.1%",
        "metaCount": 146,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2ef-f58a-775e-91a2-b988f45f108c/variants/672/938/card_image.webp",
        "colors": [
            "U",
            "B"
        ],
        "archetypeType": "Control",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/pauper-dimir-faeries-625747e4-1ba6-4401-af7b-5c8033a12c6c#online",
        "description": "Estrategia tempo-control reactiva que explota la sinergia de hadas con Spellstutter Sprite y Ninjutsu, combinada con el removal más eficiente de Pauper (Snuff Out, Cast Down).",
        "keyCards": [
            "Spellstutter Sprite",
            "Ninja of the Deep Hours",
            "Faerie Seer",
            "Snuff Out",
            "Cast Down",
            "Counterspell",
            "Brainstorm",
            "Lorien Revealed",
            "Thorn of the Black Rose",
            "Moon-Circuit Hacker"
        ],
        "sideboardCards": [
            "Hydroblast",
            "Blue Elemental Blast",
            "Nihil Spellbomb",
            "Suffocating Fumes",
            "Arms of Hadar",
            "Okiba-Gang Shinobi",
            "Annul"
        ],
        "maybeboard": [
            {
                "name": "Gurmag Angler",
                "note": "Cierra partidas rápidamente tras llenar el cementerio con cantrips."
            },
            {
                "name": "Unexpected Fangs",
                "note": "Vínculo vital clave contra barajas agresivas y quemadura."
            },
            {
                "name": "Dispel",
                "note": "Protección de bajo coste para batallas de contrahechizos."
            }
        ],
        "proTips": [
            "No tengas miedo de pagar 4 vidas por Snuff Out si eso asegura un Ninja conectando en turno 2.",
            "Usa Faerie Seer con Ninjutsu para reordenar la parte superior de la biblioteca continuamente.",
            "Conserva Spellstutter Sprite para los hechizos clave de 1 y 2 manás del rival."
        ],
        "matchups": [
            {
                "vsDeckName": "Mono Red Madness",
                "difficulty": "favorable",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Hydroblast",
                        "quantity": 4,
                        "role": "in",
                        "reason": "Contrarresta sus cartas de daño y frena su tempo."
                    },
                    {
                        "cardName": "Suffocating Fumes",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Limpia Epicures y fichas a velocidad instantánea."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Snuff Out",
                        "quantity": 3,
                        "role": "out",
                        "reason": "El coste de 4 vidas es letal contra barajas de quemadura."
                    },
                    {
                        "cardName": "Thorn of the Black Rose",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Monarch arriesgado ante criaturas atacantes."
                    }
                ],
                "gameplayTips": [
                    "Banquillea fuera Snuff Out inmediatamente: 4 vidas son dos Lightning Bolts en tu contra.",
                    "Estabiliza la mesa y luego saca ventaja con Ninja of the Deep Hours."
                ]
            },
            {
                "vsDeckName": "Grixis Affinity",
                "difficulty": "even",
                "role": "Tempo",
                "inCards": [
                    {
                        "cardName": "Annul",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Corta amenazas de coste bajo y Makeshift Munitions."
                    },
                    {
                        "cardName": "Cast Down",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Respuestas a Myr Enforcer y Kenku Artificer."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Suffocating Fumes",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Ineficaz contra resistencia 4+."
                    },
                    {
                        "cardName": "Moon-Circuit Hacker",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Dificultad para atacar a través de bloqueadores resistentes."
                    }
                ],
                "gameplayTips": [
                    "Reserva Counterspell para Thoughtcast y Blood Fountain.",
                    "Spellstutter Sprite debe cortar Reckoner's Bargain o Deadly Dispute."
                ]
            }
        ]
    },
    {
        "id": "bogles",
        "slug": "bogles",
        "name": "Bogles",
        "metaPercentage": "4.5%",
        "metaCount": 127,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2f0-1028-7163-8dc1-8a19fc6bf145/variants/672/938/card_image.webp",
        "colors": [
            "W",
            "G"
        ],
        "archetypeType": "Aggro",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/pauper-bogles#paper",
        "description": "Estrategia de auras y criaturas con Antimaleficio (Hexproof) como Slippery Bogle y Gladecover Scout, transformándolas en monstruos masivos inalcanzables.",
        "keyCards": [
            "Slippery Bogle",
            "Gladecover Scout",
            "Rancor",
            "Armadillo Cloak",
            "Ancestral Mask",
            "Ethereal Armor",
            "Abundant Growth",
            "Utopia Sprawl",
            "Cartouche of Solidarity",
            "Commune with Spirits"
        ],
        "sideboardCards": [
            "Flaring Pain",
            "Lifelink",
            "Standard Bearer",
            "Relic of Progenitus",
            "Ray of Revelation",
            "Freewind Falconer",
            "Ram Through"
        ],
        "maybeboard": [
            {
                "name": "Tamiyo's Safekeeping",
                "note": "Protección adicional y ganancia de vidas incidental."
            },
            {
                "name": "Mask of Law and Grace",
                "note": "Protección contra negro y rojo frente a edictos y Pyroblasts."
            },
            {
                "name": "Favor of the Overbeing",
                "note": "Vuelo y vigilancia en criaturas verde/azules."
            }
        ],
        "proTips": [
            "Armadillo Cloak no da Lifelink técnico, se dispara como habilidad de ganancia de vidas (se acumula con Lifelink real).",
            "Juega Cartouche of Solidarity para crear una ficha blanca que te proteja de efectos de sacrificio tipo Chainer's Edict.",
            "No sobrecomprometas todas tus auras en una sola criatura si sospechas sweepers globales o edictos."
        ],
        "matchups": [
            {
                "vsDeckName": "Mono Red Madness",
                "difficulty": "favorable",
                "role": "Aggro",
                "inCards": [
                    {
                        "cardName": "Lifelink",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Garantiza ventaja de vidas imposible de superar."
                    },
                    {
                        "cardName": "Ram Through",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Elimina bloqueadores y conecta daño arrollador."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Commune with Spirits",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Ajuste de velocidad."
                    },
                    {
                        "cardName": "Ancestral Mask",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Curva alta, con Armadillo Cloak es suficiente."
                    }
                ],
                "gameplayTips": [
                    "Armadillo Cloak en turno 2 o 3 con Utopia Sprawl gana la partida de inmediato.",
                    "Ten cuidado con Cast into the Fire destruyendo tu aura principal si el bogle no es letal."
                ]
            },
            {
                "vsDeckName": "Blue Terror",
                "difficulty": "even",
                "role": "Aggro",
                "inCards": [
                    {
                        "cardName": "Flaring Pain",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Supera nieblas o trucos defensivos."
                    },
                    {
                        "cardName": "Ram Through",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Limpia a Tolarian Terror antes de que bloquee."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Cartouche of Solidarity",
                        "quantity": 1,
                        "role": "out",
                        "reason": "No usan edictos usualmente."
                    },
                    {
                        "cardName": "Abundant Growth",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Prioridad a presión."
                    }
                ],
                "gameplayTips": [
                    "Rancor o Armadillo Cloak son vitales para otorgar arrollar sobre sus serpientes y terrores 5/5.",
                    "Ataca solo cuando el combate sea letal o te otorgue un intercambio abrumador de vidas."
                ]
            }
        ]
    },
    {
        "id": "spy-combo",
        "slug": "spy-combo",
        "name": "Spy Combo",
        "metaPercentage": "4.2%",
        "metaCount": 120,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2f0-0f67-7e9a-939b-fa88f12eea41/variants/672/938/card_image.webp",
        "colors": [
            "B",
            "R",
            "G"
        ],
        "archetypeType": "Combo",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/pauper-spy-combo#online",
        "description": "Baraja 'Oops All Spells' sin tierras tradicionales que utiliza maná ritual y Balustrade Spy para auto-millearse por completo y cerrar con Dread Return sobre Lotleth Giant en turno 1-3.",
        "keyCards": [
            "Balustrade Spy",
            "Dread Return",
            "Lotleth Giant",
            "Songs of the Damned",
            "Lotus Petal",
            "Dark Ritual",
            "Simian Spirit Guide",
            "Tinder Wall",
            "Cabal Ritual",
            "Haunting Misery"
        ],
        "sideboardCards": [
            "Flaring Pain",
            "Duress",
            "Red Elemental Blast",
            "Pyroblast",
            "Fangren Marauder",
            "Dwarven Forge-Chanter",
            "Nature's Claim"
        ],
        "maybeboard": [
            {
                "name": "Golgari Brownscale",
                "note": "Dragado y ganancia de vidas en emparejamientos largos."
            },
            {
                "name": "Stinkweed Imp",
                "note": "Opción alternativa de dragado y defensa aérea."
            },
            {
                "name": "Land Grant",
                "note": "Buscador de la única tierra si la lista lleva 1 bosque/pantano."
            }
        ],
        "proTips": [
            "Calcula meticulosamente el maná flotante antes de lanzar Balustrade Spy para asegurar el lanzamiento de Songs of the Damned tras el mill.",
            "Si temes contrarrestras, fuerza su respuesta con Duress o Pyroblast en el turno del combo.",
            "Respeta el hate de cementerio (Relic of Progenitus, Nihil Spellbomb); comba antes de que tengan maná para activarlo."
        ],
        "matchups": [
            {
                "vsDeckName": "Blue Terror",
                "difficulty": "even",
                "role": "Combo",
                "inCards": [
                    {
                        "cardName": "Pyroblast",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Protege el combo contra Counterspell y Spell Pierce."
                    },
                    {
                        "cardName": "Duress",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Descarta contrahechizos clave antes de empezar."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Tinder Wall",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Ajuste de densidad de rituales."
                    },
                    {
                        "cardName": "Haunting Misery",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Plan B innecesario en G2/G3."
                    }
                ],
                "gameplayTips": [
                    "Lanza Duress en el turno de victoria para revisar su mano.",
                    "No intentes combar si tienen dos islas enderezadas sin respaldo de Pyroblast."
                ]
            },
            {
                "vsDeckName": "Mono Red Madness",
                "difficulty": "favorable",
                "role": "Combo",
                "inCards": [
                    {
                        "cardName": "Fangren Marauder",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Opción alternativa de estabilización."
                    },
                    {
                        "cardName": "Duress",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Descarta quemaduras rápidas o hate."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Haunting Misery",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Demasiado lento."
                    }
                ],
                "gameplayTips": [
                    "Es una carrera pura: Spy Combo puede ganar en T1 o T2, mucho antes de que Mono Red llegue a 20 de daño.",
                    "Cuidado con Relic of Progenitus que puedan banquillear."
                ]
            }
        ]
    },
    {
        "id": "mono-red-rally",
        "slug": "mono-red-rally",
        "name": "Mono Red Rally",
        "metaPercentage": "3.8%",
        "metaCount": 107,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2ef-2bdc-728a-9164-89bb84f6ccc2/variants/672/938/card_image.webp",
        "colors": [
            "R"
        ],
        "archetypeType": "Aggro",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/pauper-mono-red-rally#online",
        "description": "Variante hiperagresiva de Kuldotha Rebirth y trasgos con efectos de ataque en masa (Bushwhacker, Goblin Tomb Raider) para liquidar en turnos 3-4.",
        "keyCards": [
            "Kuldotha Rebirth",
            "Goblin Bushwhacker",
            "Goblin Tomb Raider",
            "Reckless Lackey",
            "Monastery Swiftspear",
            "Lightning Bolt",
            "Experimental Synthesizer",
            "Voldaren Epicure",
            "Great Furnace",
            "Galvanic Blast"
        ],
        "sideboardCards": [
            "Pyroblast",
            "Red Elemental Blast",
            "End the Festivities",
            "Cast into the Fire",
            "Flaring Pain",
            "Smash to Smithereens",
            "Raze"
        ],
        "maybeboard": [
            {
                "name": "Foundry Street Denizen",
                "note": "Potencia el daño si hay gran generación de fichas rojas."
            },
            {
                "name": "Jack-o'-Lantern",
                "note": "Artefacto cantrip para sacrificar con Kuldotha Rebirth."
            },
            {
                "name": "Campfire",
                "note": "Herramienta en mirror para escapar de rango de quemadura."
            }
        ],
        "proTips": [
            "Asegúrate de tener un artefacto en mesa antes de planear el turno con Kuldotha Rebirth.",
            "Goblin Bushwhacker con Kicker es letal cuando se combina con fichas de trasgo generadas el mismo turno.",
            "Administra el maná de Great Furnace teniendo en cuenta que cuenta para el artefacto de Goblin Tomb Raider."
        ],
        "matchups": [
            {
                "vsDeckName": "Blue Terror",
                "difficulty": "favorable",
                "role": "Aggro",
                "inCards": [
                    {
                        "cardName": "Pyroblast",
                        "quantity": 4,
                        "role": "in",
                        "reason": "Contrarresta Lorien Revealed, Murmuring Mystic y Counterspell."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Experimental Synthesizer",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Reducción de cartas que no ejercen presión directa."
                    },
                    {
                        "cardName": "Voldaren Epicure",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Menor poder de combate."
                    }
                ],
                "gameplayTips": [
                    "El daño rápido es la clave; no les des tiempo a descontar sus Tolarian Terrors a 1 maná.",
                    "Usa Pyroblast para proteger tu última oleada de ataque o quemadura letal."
                ]
            },
            {
                "vsDeckName": "Grixis Affinity",
                "difficulty": "even",
                "role": "Aggro",
                "inCards": [
                    {
                        "cardName": "Cast into the Fire",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Exilia tierras artefacto o mata pequeñas criaturas."
                    },
                    {
                        "cardName": "Smash to Smithereens",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Destruye Myr Enforcer y causa 3 de daño directo."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Goblin Tomb Raider",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Bloqueado fácilmente por Enforcers."
                    },
                    {
                        "cardName": "Voldaren Epicure",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Ajuste de curva."
                    }
                ],
                "gameplayTips": [
                    "Cast into the Fire sobre una tierra puente o básica artefacto en turno 1 puede cortarles el maná de por vida.",
                    "Ataca en masa antes de que bajen múltiples bloqueadores 4/4."
                ]
            }
        ]
    },
    {
        "id": "jund-wildfire",
        "slug": "jund-wildfire",
        "name": "Jund Wildfire",
        "metaPercentage": "3.6%",
        "metaCount": 102,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2ef-f737-716e-b76e-c3426c0501e4/variants/672/938/card_image.webp",
        "colors": [
            "B",
            "R",
            "G"
        ],
        "archetypeType": "Combo",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/pauper-jund-wildfire#online",
        "description": "Poderoso mazo midrange-combo basado en la interacción entre Basking Broodscale y Sadistic Glee para crear infinitos Eldrazi Scions y una criatura gigantesca, respaldado por ramp con Cleansing Wildfire.",
        "keyCards": [
            "Basking Broodscale",
            "Sadistic Glee",
            "Cleansing Wildfire",
            "Deadly Dispute",
            "Fanatical Offering",
            "Toxin Analysis",
            "Snuff Out",
            "Cast Down",
            "Drossforge Bridge",
            "Slagwoods Bridge"
        ],
        "sideboardCards": [
            "Weather the Storm",
            "Pyroblast",
            "Red Elemental Blast",
            "Nihil Spellbomb",
            "Cast into the Fire",
            "Arms of Hadar",
            "Pick Your Poison"
        ],
        "maybeboard": [
            {
                "name": "Writhing Chrysalis",
                "note": "Criatura dominante que genera fichas y alcanza tamaños descomunales."
            },
            {
                "name": "Chainer's Edict",
                "note": "Solución contra criaturas individuales con antimaleficio."
            },
            {
                "name": "Gorilla Shaman",
                "note": "Presión despiadada a bases de maná de artefactos."
            }
        ],
        "proTips": [
            "Cleansing Wildfire sobre tus propias tierras puente indestructibles actúa como un acelerador de maná que roba carta por 2 manás.",
            "Toxin Analysis sobre Basking Broodscale permite poner contadores cada vez que lucha o recibe daño, generando Scions y ganando vidas.",
            "Sadistic Glee + Broodscale crea un bucle infinito de fichas sacrificando un Scion para obtener maná incoloro y otro contador."
        ],
        "matchups": [
            {
                "vsDeckName": "Mono Red Madness",
                "difficulty": "even",
                "role": "Midrange",
                "inCards": [
                    {
                        "cardName": "Weather the Storm",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Detiene en seco su plan de daño directo."
                    },
                    {
                        "cardName": "Toxin Analysis",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Vínculo vital y toque mortal en bloqueos clave."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Snuff Out",
                        "quantity": 2,
                        "role": "out",
                        "reason": "El coste de 4 vidas es contraproducente."
                    },
                    {
                        "cardName": "Cleansing Wildfire",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Lento si te presionan en curva 1."
                    }
                ],
                "gameplayTips": [
                    "Comba solo cuando tengan menos de 2 manás rojos abiertos para evitar que maten a Broodscale en respuesta a Sadistic Glee.",
                    "Usa los Scions generados para bloquear y ganar tiempo."
                ]
            },
            {
                "vsDeckName": "Blue Terror",
                "difficulty": "favorable",
                "role": "Combo",
                "inCards": [
                    {
                        "cardName": "Pyroblast",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Protege el combo contra contrahechizos."
                    },
                    {
                        "cardName": "Nihil Spellbomb",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Exilia su cementerio antes de que bajen serpientes."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Snuff Out",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Terror es negro, no se puede hacer objetivo con Snuff Out."
                    },
                    {
                        "cardName": "Fanatical Offering",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Ajuste de densidad de robo."
                    }
                ],
                "gameplayTips": [
                    "Nihil Spellbomb vacía su cementerio y neutraliza su plan proactivo de juego.",
                    "El combo vuela por encima de sus grandes bloqueadores 5/5."
                ]
            }
        ]
    },
    {
        "id": "esper-affinity",
        "slug": "esper-affinity",
        "name": "Esper Affinity",
        "metaPercentage": "3.4%",
        "metaCount": 97,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2f0-2e57-7528-84d8-1a09bf74296e/variants/672/938/card_image.webp",
        "colors": [
            "W",
            "U",
            "B"
        ],
        "archetypeType": "Aggro",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/pauper-esper-affinity#online",
        "description": "Versión rápida y evasiva de Affinity que combina Refurbished Familiar y Glaze Fiend para golpear por el aire mientras desgasta la mano rival.",
        "keyCards": [
            "Refurbished Familiar",
            "Glaze Fiend",
            "Myr Enforcer",
            "Thoughtcast",
            "Deadly Dispute",
            "Kenku Artificer",
            "Blood Fountain",
            "Mistvault Bridge",
            "Goldmire Bridge",
            "Razortide Bridge"
        ],
        "sideboardCards": [
            "Dust to Dust",
            "Hydroblast",
            "Nihil Spellbomb",
            "Cast Down",
            "Suffocating Fumes",
            "Destroy Evil",
            "Tormod's Crypt"
        ],
        "maybeboard": [
            {
                "name": "Somber Hoverguard",
                "note": "Presencia aérea 3/2 de afinidad."
            },
            {
                "name": "Metallic Rebuke",
                "note": "Contrahechizo de improvisación clave."
            },
            {
                "name": "Cast into the Fire",
                "note": "Si se opta por tocar rojo con fuentes de tesoro."
            }
        ],
        "proTips": [
            "Glaze Fiend gana +2/+2 por cada artefacto que entra al campo; enlaza varios artefactos de coste cero o bajo para inflarlo a 7/7 o 9/9 y atacar por aire.",
            "Refurbished Familiar entra habitualmente por un solo maná negro y descarta una carta del rival mientras añade un volador 2/1.",
            "Usa Kenku Artificer sobre una tierra puente para tener un 3/3 indestructible volador imposible de matar con removal habitual."
        ],
        "matchups": [
            {
                "vsDeckName": "Mono Red Madness",
                "difficulty": "even",
                "role": "Midrange",
                "inCards": [
                    {
                        "cardName": "Hydroblast",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Corta quemaduras y Cast into the Fire."
                    },
                    {
                        "cardName": "Cast Down",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Removal seguro para amenazas rápidas."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Thoughtcast",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Lento si te presionan en curva 1."
                    },
                    {
                        "cardName": "Blood Fountain",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Ajuste de ritmo."
                    }
                ],
                "gameplayTips": [
                    "Un Kenku Artificer sobre una tierra puente frena en seco sus ataques terrestres.",
                    "Refurbished Familiar les quita su última carta de gas en mano."
                ]
            },
            {
                "vsDeckName": "Grixis Affinity",
                "difficulty": "favorable",
                "role": "Aggro",
                "inCards": [
                    {
                        "cardName": "Dust to Dust",
                        "quantity": 4,
                        "role": "in",
                        "reason": "La carta definitiva del mirror: exilia 2 artefactos o tierras puente por 3 manás."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Glaze Fiend",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Muere ante Galvanic Blast o Makeshift Munitions."
                    },
                    {
                        "cardName": "Deadly Dispute",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Ajuste de banquillo."
                    }
                ],
                "gameplayTips": [
                    "Dust to Dust en turno 3 sobre dos de sus tierras puente es habitualmente jaque mate.",
                    "Juega alrededor de su propio Dust to Dust no sobrecargando todas tus tierras si puedes evitarlo."
                ]
            }
        ]
    },
    {
        "id": "white-aggro",
        "slug": "white-aggro",
        "name": "White Aggro / Caw Gates",
        "metaPercentage": "2.5%",
        "metaCount": 70,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2ef-98e6-7f07-b81c-361cdf964043/variants/672/938/card_image.webp",
        "colors": [
            "W",
            "U"
        ],
        "archetypeType": "Midrange",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/pauper-white-aggro#online",
        "description": "Estrategia midrange evasiva que abusa de Squadron Hawk y Sacred Cat potenciados exponencialmente con Basilisk Gate y The Modern Age.",
        "keyCards": [
            "Squadron Hawk",
            "Sacred Cat",
            "Basilisk Gate",
            "The Modern Age",
            "Brainstorm",
            "Guardian of the Guildpact",
            "Prismatic Strands",
            "Counterspell",
            "Lorien Revealed",
            "Heap Gate"
        ],
        "sideboardCards": [
            "Dust to Dust",
            "Hydroblast",
            "Blue Elemental Blast",
            "Destroy Evil",
            "Relic of Progenitus",
            "Arms of Hadar",
            "Dawnbringer Cleric"
        ],
        "maybeboard": [
            {
                "name": "Thraben Inspector",
                "note": "Cantrip con pista y presencia terrestre."
            },
            {
                "name": "Seekers' Squire",
                "note": "Filtrado de biblioteca y tierras."
            },
            {
                "name": "Standard Bearer",
                "note": "Hate directo contra Bogles y mono red quemadura."
            }
        ],
        "proTips": [
            "Guarda Squadron Hawk en mano con Brainstorm para devolver 2 halcones y buscarlos de nuevo con el tercer halcón (ventaja virtual de cartas).",
            "Sacred Cat con Basilisk Gate es una fuente inagotable de vidas que aplasta a barajas aggro.",
            "Prismatic Strands se puede lanzar desde el cementerio tapeando una criatura blanca enderezada, sin coste de maná."
        ],
        "matchups": [
            {
                "vsDeckName": "Mono Red Madness",
                "difficulty": "favorable",
                "role": "Midrange",
                "inCards": [
                    {
                        "cardName": "Hydroblast",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Corta quemaduras clave y Flaring Pain."
                    },
                    {
                        "cardName": "Dawnbringer Cleric",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Gana vidas, bloquea o destruye encantamientos."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Guardian of the Guildpact",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Curva 4 algo lenta ante salidas hiperagresivas."
                    },
                    {
                        "cardName": "The Modern Age",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Ajuste de tempo."
                    }
                ],
                "gameplayTips": [
                    "Cuidado con Flaring Pain anulando tu Prismatic Strands; mantén Hydroblast listo para responder a Flaring Pain.",
                    "Sacred Cat embalsamado con Basilisk Gate te devuelve a 20 vidas rápidamente."
                ]
            },
            {
                "vsDeckName": "Grixis Affinity",
                "difficulty": "favorable",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Dust to Dust",
                        "quantity": 4,
                        "role": "in",
                        "reason": "Exilia 2 artefactos clave del oponente por 3 manás."
                    },
                    {
                        "cardName": "Destroy Evil",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Elimina a Myr Enforcer o Makeshift Munitions."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Sacred Cat",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Bloqueado con facilidad sin gate activa."
                    },
                    {
                        "cardName": "Prismatic Strands",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Ajuste de densidad."
                    }
                ],
                "gameplayTips": [
                    "Dust to Dust en curva es casi insuperable para Affinity.",
                    "Guardian of the Guildpact no puede ser bloqueado ni dañado por ninguna criatura monocolor de Affinity."
                ]
            }
        ]
    },
    {
        "id": "golgari-gardens",
        "slug": "golgari-gardens",
        "name": "Golgari Gardens",
        "metaPercentage": "2.2%",
        "metaCount": 62,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2ef-c6da-791a-b3fe-14ff39cb33c7/variants/672/938/card_image.webp",
        "colors": [
            "B",
            "G"
        ],
        "archetypeType": "Control",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/pauper-golgari-gardens#online",
        "description": "La cúspide del control puro basado en removal selectivo, sinergia con Khalni Garden y Crypt Rats, finalizando con la superioridad de Avenging Hunter (Iniciativa).",
        "keyCards": [
            "Avenging Hunter",
            "Crypt Rats",
            "Spinning Darkness",
            "Cast Down",
            "Chainer's Edict",
            "Deadly Dispute",
            "Khalni Garden",
            "Snuff Out",
            "Toxin Analysis",
            "Lembas"
        ],
        "sideboardCards": [
            "Weather the Storm",
            "Nihil Spellbomb",
            "Duress",
            "Fangren Marauder",
            "Campfire",
            "Trespasser's Curse",
            "Deglamer"
        ],
        "maybeboard": [
            {
                "name": "Thorn of the Black Rose",
                "note": "Monarch como motor de robo alternativo."
            },
            {
                "name": "Suffocating Fumes",
                "note": "Sweeper instantáneo con ciclado."
            },
            {
                "name": "Extract a Confession",
                "note": "Efecto edicto mejorado con sospecha."
            }
        ],
        "proTips": [
            "Spinning Darkness se puede lanzar gratis exiliando 3 cartas negras de tu cementerio (gran truco contra Aggro).",
            "Usa las fichas de planta de Khalni Garden para activar Deadly Dispute o bloquear atacantes terrestres masivos.",
            "Avenging Hunter introduce la Iniciativa en mesa; asegúrate de tener el control de mesa antes de bajarlo para no cederla al rival."
        ],
        "matchups": [
            {
                "vsDeckName": "Mono Red Madness",
                "difficulty": "even",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Weather the Storm",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Neutraliza la cadena de quemaduras."
                    },
                    {
                        "cardName": "Campfire",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Ganancia de vidas recurrente fuera de alcance de su removal."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Snuff Out",
                        "quantity": 2,
                        "role": "out",
                        "reason": "El coste de 4 vidas es prohibitivo."
                    },
                    {
                        "cardName": "Chainer's Edict",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Poco efectivo ante fichas de Voldaren Epicure."
                    }
                ],
                "gameplayTips": [
                    "Crypt Rats con X=1 o X=2 barre toda su mesa.",
                    "Gana vidas con Spinning Darkness en cuanto bajen su primera criatura atacante."
                ]
            },
            {
                "vsDeckName": "Blue Terror",
                "difficulty": "favorable",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Nihil Spellbomb",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Exilia cementerio y frena sus amenazas."
                    },
                    {
                        "cardName": "Chainer's Edict",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Removal ideal contra pocas criaturas grandes."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Crypt Rats",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Tolarian Terror tiene resistencia 5, difícil de matar con ratas."
                    },
                    {
                        "cardName": "Spinning Darkness",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Terror es negro, no se puede hacer objetivo."
                    }
                ],
                "gameplayTips": [
                    "Chainer's Edict y Cast Down son tus mejores armas.",
                    "Avenging Hunter con Iniciativa genera ventaja abrumadora mientras ellos solo juegan reactivo."
                ]
            }
        ]
    },
    {
        "id": "mono-blue-faeries",
        "slug": "mono-blue-faeries",
        "name": "Mono-Blue Faeries",
        "metaPercentage": "2.0%",
        "metaCount": 56,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2ef-f58a-775e-91a2-b988f45f108c/variants/672/938/card_image.webp",
        "colors": [
            "U"
        ],
        "archetypeType": "Control",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/pauper-mono-blue-faeries-f7d232c7-2c3c-4459-b219-f3e8d9abbec6#online",
        "description": "La versión mono-azul clásica y veloz con base de maná sin tierras giradas, combinando Faerie Miscreant, Spellstutter Sprite y Ninjas con protección como Mutagenic Growth.",
        "keyCards": [
            "Faerie Miscreant",
            "Faerie Seer",
            "Spellstutter Sprite",
            "Ninja of the Deep Hours",
            "Moon-Circuit Hacker",
            "Mutagenic Growth",
            "Counterspell",
            "Snap",
            "Of One Mind",
            "Spire Golem"
        ],
        "sideboardCards": [
            "Hydroblast",
            "Blue Elemental Blast",
            "Annul",
            "Gut Shot",
            "Relic of Progenitus",
            "Curse of Chains",
            "Dispel"
        ],
        "maybeboard": [
            {
                "name": "Bind the Monster",
                "note": "Removal permanente por un solo maná azul."
            },
            {
                "name": "Steel Sabotage",
                "note": "Herramienta flexible contra Affinity."
            },
            {
                "name": "Boomerang",
                "note": "Tempo puro rebotando tierras rivales en turno 2."
            }
        ],
        "proTips": [
            "Mutagenic Growth salva a tus criaturas de Lightning Bolt o Breath Weapon por cero manás.",
            "Snap te permite levantar una criatura rival y enderezar dos islas para dejar abierto Counterspell.",
            "No lances Ninja of the Deep Hours si el rival tiene maná abierto para removal y no tienes protección."
        ],
        "matchups": [
            {
                "vsDeckName": "Mono Red Madness",
                "difficulty": "even",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Hydroblast",
                        "quantity": 4,
                        "role": "in",
                        "reason": "Parada obligatoria contra quemadura."
                    },
                    {
                        "cardName": "Gut Shot",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Elimina Kessig Flamebreather y Epicure sin gastar maná."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Spire Golem",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Demasiado lento."
                    },
                    {
                        "cardName": "Snap",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Su criaturas tienen prisa o efectos de entrar en campo."
                    }
                ],
                "gameplayTips": [
                    "Spellstutter Sprite debe reservar su disparo para Lightning Bolt o Goblin Bushwhacker.",
                    "Mantén maná azul disponible siempre que sea posible."
                ]
            },
            {
                "vsDeckName": "Grixis Affinity",
                "difficulty": "even",
                "role": "Tempo",
                "inCards": [
                    {
                        "cardName": "Annul",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Corta amenazas de coste 0 y Makeshift Munitions."
                    },
                    {
                        "cardName": "Curse of Chains",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Neutraliza Myr Enforcers permanentemente."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Mutagenic Growth",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Menos relevante contra 4/4."
                    },
                    {
                        "cardName": "Faerie Miscreant",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Ajuste de densidad."
                    }
                ],
                "gameplayTips": [
                    "Annul en turno 1 sobre una tierra puente o en turno 2 sobre Munitions frena su motor por completo.",
                    "Usa Spire Golem como bloqueador gratuito una vez tengas 4 o 5 islas."
                ]
            }
        ]
    },
    {
        "id": "grixis-control",
        "slug": "grixis-control",
        "name": "Grixis Control",
        "metaPercentage": "2.0%",
        "metaCount": 56,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2f0-213d-7889-9b47-7f757c094415/variants/672/938/card_image.webp",
        "colors": [
            "U",
            "B",
            "R"
        ],
        "archetypeType": "Control",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/pauper-grixis-control-334e14c5-6fe9-46da-9c9b-799ef8bd1f0f#online",
        "description": "Control interactivo de tres colores con sweepers de daño como Breath Weapon, removal de calidad (Cast Down, Skred) y card advantage masivo con Lorien Revealed.",
        "keyCards": [
            "Breath Weapon",
            "Cast Down",
            "Skred",
            "Counterspell",
            "Lorien Revealed",
            "Gurmag Angler",
            "Thorn of the Black Rose",
            "Brainstorm",
            "Lightning Bolt",
            "Chainer's Edict"
        ],
        "sideboardCards": [
            "Pyroblast",
            "Hydroblast",
            "Nihil Spellbomb",
            "Arms of Hadar",
            "Gorilla Shaman",
            "Suffocating Fumes",
            "Relic of Progenitus"
        ],
        "maybeboard": [
            {
                "name": "Fiery Cannonade",
                "note": "Alternativa de sweeper tribal pirata."
            },
            {
                "name": "Tainted Pact",
                "note": "Para listas singleton de prueba."
            },
            {
                "name": "Extract a Confession",
                "note": "Remueve amenazas protegidas."
            }
        ],
        "proTips": [
            "Breath Weapon no daña a dragones, ten en cuenta esto ante posibles espejos o cartas concretas.",
            "Lorien Revealed cicla por una tierra dual con subtipo isla y sirve de robacartas masivo en el late game.",
            "Guarda Skred para cuando tus tierras de nieve alcancen el daño necesario sobre criaturas gigantes."
        ],
        "matchups": [
            {
                "vsDeckName": "Mono Red Madness",
                "difficulty": "favorable",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Hydroblast",
                        "quantity": 4,
                        "role": "in",
                        "reason": "Neutraliza daño directo y criaturas agresivas."
                    },
                    {
                        "cardName": "Suffocating Fumes",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Limpia tokens y orcos sin gastar maná alto."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Thorn of the Black Rose",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Monarch arriesgado."
                    },
                    {
                        "cardName": "Gurmag Angler",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Ajuste de curva."
                    }
                ],
                "gameplayTips": [
                    "Limpia la mesa en turno 3 con Breath Weapon.",
                    "Mantén Hydroblast para responder a Fireblast."
                ]
            },
            {
                "vsDeckName": "Grixis Affinity",
                "difficulty": "even",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Gorilla Shaman",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Destruye tierras puente y artefactos de coste 0 o 1."
                    },
                    {
                        "cardName": "Pyroblast",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Corta Thoughtcast y Kenku Artificer."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Breath Weapon",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Myr Enforcer resiste 4 de daño."
                    }
                ],
                "gameplayTips": [
                    "Gorilla Shaman con maná disponible destruye tierras artefacto no indestructibles en turno 2.",
                    "Usa Cast Down para Myrs y Skred para los voladores."
                ]
            }
        ]
    },
    {
        "id": "rakdos-madness",
        "slug": "rakdos-madness",
        "name": "Rakdos Madness",
        "metaPercentage": "1.9%",
        "metaCount": 55,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2ef-c396-7a5e-ac99-b938d683dbc4/variants/672/938/card_image.webp",
        "colors": [
            "B",
            "R"
        ],
        "archetypeType": "Aggro",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/pauper-rakdos-madness#online",
        "description": "Versión negra/roja de locura que integra Kitchen Imp como amenaza voladora con prisa de coste B y Alms of the Vein para ganar vidas mientras drena al rival.",
        "keyCards": [
            "Kitchen Imp",
            "Voldaren Epicure",
            "Faithless Looting",
            "Blood Fountain",
            "Fiery Temper",
            "Alms of the Vein",
            "Lightning Bolt",
            "Sneaky Snacker",
            "Grab the Prize",
            "Highway Robbery"
        ],
        "sideboardCards": [
            "Pyroblast",
            "Red Elemental Blast",
            "Cast into the Fire",
            "Nihil Spellbomb",
            "Duress",
            "Suffocating Fumes",
            "Chainer's Edict"
        ],
        "maybeboard": [
            {
                "name": "Gorging Vampire",
                "note": "Drenador adicional con buena resistencia."
            },
            {
                "name": "Cast Down",
                "note": "Removal incondicional en lugar de daño directo."
            },
            {
                "name": "Tormod's Crypt",
                "note": "Hate gratuito de cementerio."
            }
        ],
        "proTips": [
            "Kitchen Imp descartado entra por un solo maná negro como 2/2 volador con prisa.",
            "Alms of the Vein te da 3 vidas y hace 3 de daño por un solo maná negro al activarse por demencia.",
            "Blood Fountain recupera tus dos mejores amenazas del cementerio en partidas de desgaste."
        ],
        "matchups": [
            {
                "vsDeckName": "Blue Terror",
                "difficulty": "even",
                "role": "Aggro",
                "inCards": [
                    {
                        "cardName": "Pyroblast",
                        "quantity": 4,
                        "role": "in",
                        "reason": "Corta contrahechizos y cantrips clave."
                    },
                    {
                        "cardName": "Chainer's Edict",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Elimina a Tolarian Terror a través de su protección."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Voldaren Epicure",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Menor impacto en el combate."
                    },
                    {
                        "cardName": "Highway Robbery",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Ajuste de tempo."
                    }
                ],
                "gameplayTips": [
                    "Kitchen Imp vuela sobre sus terrores terrestres.",
                    "Usa Alms of the Vein para cerrar la partida a través de su defensa."
                ]
            },
            {
                "vsDeckName": "Mono Red Madness",
                "difficulty": "favorable",
                "role": "Midrange",
                "inCards": [
                    {
                        "cardName": "Duress",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Descarta sus quemaduras y robacartas."
                    },
                    {
                        "cardName": "Suffocating Fumes",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Limpia Epicures y fichas."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Faithless Looting",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Genera desventaja de cartas pura si te presionan."
                    },
                    {
                        "cardName": "Highway Robbery",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Ajuste de velocidad."
                    }
                ],
                "gameplayTips": [
                    "Alms of the Vein es la carta diferencial en este emparejamiento gracias a la ganancia de 3 vidas.",
                    "Kitchen Imp bloquea y ataca por aire con superioridad."
                ]
            }
        ]
    },
    {
        "id": "ruby-storm",
        "slug": "ruby-storm",
        "name": "Ruby Storm",
        "metaPercentage": "1.9%",
        "metaCount": 53,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2ef-2dcd-77f8-b2f9-42e9d7bcb8ba/variants/672/938/card_image.webp",
        "colors": [
            "R"
        ],
        "archetypeType": "Combo",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/pauper-ruby-storm#online",
        "description": "Mazo combo explosivo de Tormenta roja que encadena rituales de maná y robacartas con Kessig Flamebreather o Reckless Impulse para quemar en un solo turno.",
        "keyCards": [
            "Rite of Flame",
            "Manamorphose",
            "Kessig Flamebreather",
            "Reckless Impulse",
            "Wrenn's Resolve",
            "Lotus Petal",
            "Simian Spirit Guide",
            "Lava Dart",
            "Galvanic Relay",
            "Pyrite Spellbomb"
        ],
        "sideboardCards": [
            "Pyroblast",
            "Red Elemental Blast",
            "Flaring Pain",
            "Cast into the Fire",
            "Weather the Storm",
            "Gut Shot",
            "Abrade"
        ],
        "maybeboard": [
            {
                "name": "Grapeshot",
                "note": "Si el formato o torneo permite variantes específicas."
            },
            {
                "name": "Fiery Temper",
                "note": "Disparo adicional con descarte."
            },
            {
                "name": "Cathartic Reunion",
                "note": "Robo masivo de 3 cartas."
            }
        ],
        "proTips": [
            "Galvanic Relay al final de un turno de tormenta te prepara una mano de 6-8 cartas para el turno siguiente.",
            "Kessig Flamebreather hace 1 de daño por cada hechizo lanzado; con 10 hechizos la partida está sentenciada.",
            "Manamorphose filtra tu maná a otros colores para jugar respuestas de banquillo como Weather the Storm."
        ],
        "matchups": [
            {
                "vsDeckName": "Blue Terror",
                "difficulty": "even",
                "role": "Combo",
                "inCards": [
                    {
                        "cardName": "Pyroblast",
                        "quantity": 4,
                        "role": "in",
                        "reason": "Corta sus contrahechizos cuando vas a combar."
                    },
                    {
                        "cardName": "Flaring Pain",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Por si llevan prevención de daño."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Pyrite Spellbomb",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Lento."
                    },
                    {
                        "cardName": "Lava Dart",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Daño bajo."
                    }
                ],
                "gameplayTips": [
                    "Bait sus contrahechizos con robacartas antes de resolver Kessig Flamebreather.",
                    "Galvanic Relay te garantiza ganar al turno siguiente sobrepasando sus respuestas."
                ]
            },
            {
                "vsDeckName": "Mono Red Madness",
                "difficulty": "favorable",
                "role": "Combo",
                "inCards": [
                    {
                        "cardName": "Weather the Storm",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Gana 15-20 vidas fácilmente con Manamorphose."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Pyrite Spellbomb",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Ajuste de velocidad."
                    }
                ],
                "gameplayTips": [
                    "Weather the Storm te saca de rango de quemadura de por vida.",
                    "Tu combo de Kessig es habitualmente más rápido que su curva de daño."
                ]
            }
        ]
    },
    {
        "id": "gruul-ponza",
        "slug": "gruul-ponza",
        "name": "Gruul Ponza",
        "metaPercentage": "1.8%",
        "metaCount": 52,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2f0-0fc9-719e-9c7e-1bb4c5108b25/variants/672/938/card_image.webp",
        "colors": [
            "R",
            "G"
        ],
        "archetypeType": "Midrange",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/pauper-gruul-ponza#online",
        "description": "Estrategia de destrucción sistemática de tierras rivales (Thermokarst, Mwonvuli Acid-Moss) acelerada con arbor elf y utopia sprawl, finalizando con gigantes y la Iniciativa.",
        "keyCards": [
            "Thermokarst",
            "Mwonvuli Acid-Moss",
            "Arbor Elf",
            "Utopia Sprawl",
            "Wild Growth",
            "Avenging Hunter",
            "Jewel Thief",
            "Boarding Party",
            "Annoyed Altisaur",
            "Lightning Bolt"
        ],
        "sideboardCards": [
            "Weather the Storm",
            "Pyroblast",
            "Red Elemental Blast",
            "Cast into the Fire",
            "Deglamer",
            "Relic of Progenitus",
            "Breath Weapon"
        ],
        "maybeboard": [
            {
                "name": "Raze",
                "note": "Destrucción de tierra en turno 1 si es necesario."
            },
            {
                "name": "Stone Rain",
                "note": "Más densidad de destrucción de tierras."
            },
            {
                "name": "Spidersilk Armor",
                "note": "Defensa aérea contra hadas y delver."
            }
        ],
        "proTips": [
            "Arbor Elf + Utopia Sprawl te permite tener 4 manás en turno 2 para destruir la primera tierra del oponente.",
            "Mwonvuli Acid-Moss destruye una tierra y busca un bosque a tu campo, duplicando tu ventaja de tempo.",
            "Avenging Hunter o Boarding Party en cascada cierran la partida mientras el rival está atascado de maná."
        ],
        "matchups": [
            {
                "vsDeckName": "Blue Terror",
                "difficulty": "favorable",
                "role": "Midrange",
                "inCards": [
                    {
                        "cardName": "Pyroblast",
                        "quantity": 4,
                        "role": "in",
                        "reason": "Corta Counterspell y Lorien Revealed."
                    },
                    {
                        "cardName": "Relic of Progenitus",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Frena su cementerio."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Lightning Bolt",
                        "quantity": 2,
                        "role": "out",
                        "reason": "No mata a sus criaturas 5/5."
                    },
                    {
                        "cardName": "Boarding Party",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Ajuste de curva."
                    }
                ],
                "gameplayTips": [
                    "Destruir sus islas antes de que tengan maná para contrarrestar los deja completamente bloqueados.",
                    "Un Avenging Hunter temprano es inalcanzable para Terror."
                ]
            },
            {
                "vsDeckName": "Grixis Affinity",
                "difficulty": "even",
                "role": "Midrange",
                "inCards": [
                    {
                        "cardName": "Deglamer",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Bara tierras puente indestructibles barajándolas en el mazo."
                    },
                    {
                        "cardName": "Cast into the Fire",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Exilia tierras artefacto básicas."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Thermokarst",
                        "quantity": 2,
                        "role": "out",
                        "reason": "No puede hacer objetivo a tierras puente indestructibles."
                    },
                    {
                        "cardName": "Lightning Bolt",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Ajuste de removal."
                    }
                ],
                "gameplayTips": [
                    "Ten en cuenta que las tierras puente tienen 'Indestructible'; Thermokarst solo puede apuntar a básicas o tierras no indestructibles.",
                    "Deglamer y Cast into the Fire sí interactúan eficazmente con sus tierras."
                ]
            }
        ]
    },
    {
        "id": "familiars",
        "slug": "familiars",
        "name": "Familiars",
        "metaPercentage": "1.8%",
        "metaCount": 50,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2ef-e93e-7ba0-af8f-c8ef40ed2b6b/variants/672/938/card_image.webp",
        "colors": [
            "W",
            "U"
        ],
        "archetypeType": "Combo",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/pauper-familiars#online",
        "description": "Mazo combo/control azul y blanco que utiliza Sunscape Familiar para abaratar hechizos y generar bucles infinitos con Ghostly Flicker, Mulldrifter y God-Pharaoh's Faithful.",
        "keyCards": [
            "Sunscape Familiar",
            "God-Pharaoh's Faithful",
            "Mulldrifter",
            "Ghostly Flicker",
            "Archaeomancer",
            "Cloud of Faeries",
            "The Modern Age",
            "Preordain",
            "Deep Analysis",
            "Meeting of Minds"
        ],
        "sideboardCards": [
            "Hydroblast",
            "Dust to Dust",
            "Red Elemental Blast",
            "Stonehorn Dignitary",
            "Destroy Evil",
            "Relic of Progenitus",
            "Prohibit"
        ],
        "maybeboard": [
            {
                "name": "Murmuring Mystic",
                "note": "Fábrica de fichas voladoras con cada cantrip."
            },
            {
                "name": "Snap",
                "note": "Endereza tierras y genera tempo positivo."
            },
            {
                "name": "Dawnbringer Cleric",
                "note": "Respuestas versátiles contra encantamientos y daño."
            }
        ],
        "proTips": [
            "Con dos Sunscape Familiars y Ghostly Flicker sobre Archaeomancer y Cloud of Faeries, generas maná infinito y vidas infinitas con God-Pharaoh's Faithful.",
            "God-Pharaoh's Faithful gana 1 vida por cada hechizo azul, blanco o rojo que lanzas; bloquea con solvencia a las criaturas 2/2.",
            "Usa Meeting of Minds convocado por tus criaturas para robar cartas sin gastar maná."
        ],
        "matchups": [
            {
                "vsDeckName": "Mono Red Madness",
                "difficulty": "favorable",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Hydroblast",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Corta quemaduras clave."
                    },
                    {
                        "cardName": "Stonehorn Dignitary",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Anula sus ataques."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Deep Analysis",
                        "quantity": 2,
                        "role": "out",
                        "reason": "El flashback cuesta 3 vidas, inasumible contra rojo."
                    },
                    {
                        "cardName": "Mulldrifter",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Ajuste de velocidad."
                    }
                ],
                "gameplayTips": [
                    "God-Pharaoh's Faithful en turno 1 te otorga una ventaja defensiva decisiva.",
                    "Un bucle de Ghostly Flicker con Faithful fuera de su alcance sella la victoria."
                ]
            },
            {
                "vsDeckName": "Blue Terror",
                "difficulty": "even",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Stonehorn Dignitary",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Detiene el ataque de sus criaturas 5/5."
                    },
                    {
                        "cardName": "Relic of Progenitus",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Ralentiza sus invocaciones."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "The Modern Age",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Lento en este emparejamiento."
                    }
                ],
                "gameplayTips": [
                    "Sobrepasa su ventaja de cartas con Mulldrifter en bucle de parpadeo.",
                    "Ten cuidado con Spell Pierce cortando tu Ghostly Flicker clave."
                ]
            }
        ]
    },
    {
        "id": "jeskai-ephemerate",
        "slug": "jeskai-ephemerate",
        "name": "Jeskai Ephemerate",
        "metaPercentage": "1.7%",
        "metaCount": 48,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2ef-4209-7eaf-a2ab-b1ab02b880e8/variants/672/938/card_image.webp",
        "colors": [
            "W",
            "U",
            "R"
        ],
        "archetypeType": "Control",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/pauper-jeskai-ephemerate#online",
        "description": "El clásico motor de 'Blink' de Pauper que combina Ephemerate con Archaeomancer, Mulldrifter y Cleansing Wildfire para una ventaja de cartas y tierras imparable.",
        "keyCards": [
            "Ephemerate",
            "Archaeomancer",
            "Mulldrifter",
            "Cleansing Wildfire",
            "Augur of Bolas",
            "Lightning Bolt",
            "Counterspell",
            "Rustvale Bridge",
            "Razortide Bridge",
            "Silverbluff Bridge"
        ],
        "sideboardCards": [
            "Pyroblast",
            "Hydroblast",
            "Dust to Dust",
            "Gorilla Shaman",
            "Cast into the Fire",
            "Breath Weapon",
            "Destroy Evil"
        ],
        "maybeboard": [
            {
                "name": "Dawnbringer Cleric",
                "note": "Parpadeo de valor para ganar vidas y destruir auras."
            },
            {
                "name": "Skred",
                "note": "Si se juega con base de nieve."
            },
            {
                "name": "Murmuring Mystic",
                "note": "Condición de victoria sólida en el aire."
            }
        ],
        "proTips": [
            "Ephemerate sobre Mulldrifter evocado en respuesta al sacrificio te da 4 cartas por solo 4 manás (3 de evoke + 1 de ephemerate) y la criatura se queda en mesa.",
            "Cleansing Wildfire sobre tus propias tierras puente actúa como aceleración que roba carta.",
            "Archaeomancer con Ephemerate permite reutilizar cualquier hechizo instantáneo o conjuro del cementerio en cada turno del oponente gracias al Rebound."
        ],
        "matchups": [
            {
                "vsDeckName": "Mono Red Madness",
                "difficulty": "even",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Hydroblast",
                        "quantity": 4,
                        "role": "in",
                        "reason": "Contrarresta daño letal y frena su tempo."
                    },
                    {
                        "cardName": "Breath Weapon",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Limpia la mesa de amenazas agresivas."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Mulldrifter",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Costoso para bajar en curva temprana."
                    },
                    {
                        "cardName": "Cleansing Wildfire",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Ajuste de velocidad."
                    }
                ],
                "gameplayTips": [
                    "Augur of Bolas es un muro defensivo crucial en turno 2.",
                    "Usa Hydroblast con sabiduría para protegerte de quemaduras en cadena."
                ]
            },
            {
                "vsDeckName": "Grixis Affinity",
                "difficulty": "favorable",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Dust to Dust",
                        "quantity": 4,
                        "role": "in",
                        "reason": "Exilia 2 artefactos del rival."
                    },
                    {
                        "cardName": "Gorilla Shaman",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Destruye artefactos de bajo coste."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Breath Weapon",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Inútil contra Enforcers 4/4."
                    },
                    {
                        "cardName": "Augur of Bolas",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Superado por sus atacantes."
                    }
                ],
                "gameplayTips": [
                    "Dust to Dust en turno 3 sobre sus tierras puente desarticula su motor por completo.",
                    "Ephemerate puede rescatar tus criaturas de Galvanic Blast."
                ]
            }
        ]
    },
    {
        "id": "dimir-terror",
        "slug": "dimir-terror",
        "name": "Dimir Terror",
        "metaPercentage": "0.4%",
        "metaCount": 11,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2f0-0fc9-7bd2-a5ab-5777a791c3e4/variants/672/938/card_image.webp",
        "colors": [
            "U",
            "B"
        ],
        "archetypeType": "Control",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/pauper-dimir-terror#online",
        "description": "Evolución azul/negra de Tolarian Terror y Gurmag Angler que añade removal de máxima categoría (Cast Down, Snuff Out, Chainer's Edict) y robo con Lorien Revealed.",
        "keyCards": [
            "Tolarian Terror",
            "Gurmag Angler",
            "Cryptic Serpent",
            "Thought Scour",
            "Cast Down",
            "Snuff Out",
            "Counterspell",
            "Brainstorm",
            "Lorien Revealed",
            "Deep Analysis"
        ],
        "sideboardCards": [
            "Hydroblast",
            "Blue Elemental Blast",
            "Nihil Spellbomb",
            "Arms of Hadar",
            "Suffocating Fumes",
            "Dispel",
            "Chainer's Edict"
        ],
        "maybeboard": [
            {
                "name": "Agony Warp",
                "note": "Truco de combate y removal doble."
            },
            {
                "name": "Extract a Confession",
                "note": "Efecto edicto de bajo coste."
            },
            {
                "name": "Unexpected Fangs",
                "note": "Vínculo vital gigantesco sobre un Terror 5/5."
            }
        ],
        "proTips": [
            "Thought Scour haciéndote objetivo a ti mismo acelera de 2 a 3 manás el descuento de tus criaturas en turno 1-2.",
            "Unexpected Fangs sobre un Tolarian Terror o Gurmag Angler sella instantáneamente cualquier partida contra barajas agresivas.",
            "Gestiona cuidadosamente el cementerio para no exiliar hechizos que abaraten a Tolarian Terror al pagar el Delve de Gurmag Angler."
        ],
        "matchups": [
            {
                "vsDeckName": "Mono Red Madness",
                "difficulty": "even",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Hydroblast",
                        "quantity": 4,
                        "role": "in",
                        "reason": "Corta su daño letal y frena su tempo."
                    },
                    {
                        "cardName": "Suffocating Fumes",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Limpia tokens y orcos."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Snuff Out",
                        "quantity": 3,
                        "role": "out",
                        "reason": "Pagar 4 vidas te pone en rango de quemadura."
                    },
                    {
                        "cardName": "Deep Analysis",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Poco tiempo para activar el flashback."
                    }
                ],
                "gameplayTips": [
                    "Banquillea fuera Snuff Out sin dudar: pagar 4 vidas es letal contra quemaduras.",
                    "Un Tolarian Terror en turno 3 estabiliza tu mesa por completo."
                ]
            },
            {
                "vsDeckName": "Grixis Affinity",
                "difficulty": "favorable",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Cast Down",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Mata a Myr Enforcer y Kenku de forma incondicional."
                    },
                    {
                        "cardName": "Chainer's Edict",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Removal adicional en partidas largas."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Suffocating Fumes",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Ineficaz contra resistencia alta."
                    },
                    {
                        "cardName": "Thought Scour",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Ajuste de densidad."
                    }
                ],
                "gameplayTips": [
                    "Tus criaturas 5/5 son más grandes que sus Myrs 4/4; en combate terrestre tienes la ventaja.",
                    "Usa Cast Down para limpiar su presencia antes de que conecten con Makeshift Munitions."
                ]
            }
        ]
    },
    {
        "id": "boros-synthesizer",
        "slug": "boros-synthesizer",
        "name": "Boros Synthesizer",
        "metaPercentage": "0.5%",
        "metaCount": 13,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2ef-2bdc-728a-9164-89bb84f6ccc2/variants/672/938/card_image.webp",
        "colors": [
            "W",
            "R"
        ],
        "archetypeType": "Midrange",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/pauper-boros-synthesizer#online",
        "description": "El motor de ventaja de cartas por excelencia entre Glint Hawk, Kor Skyfisher y Experimental Synthesizer, combinando agresión aérea con control de quemaduras masivo.",
        "keyCards": [
            "Experimental Synthesizer",
            "Glint Hawk",
            "Kor Skyfisher",
            "Galvanic Blast",
            "Lightning Bolt",
            "Lembas",
            "Thraben Inspector",
            "Novice Inspector",
            "Rustvale Bridge",
            "Great Furnace"
        ],
        "sideboardCards": [
            "Dust to Dust",
            "Pyroblast",
            "Red Elemental Blast",
            "Cast into the Fire",
            "Destroy Evil",
            "Relic of Progenitus",
            "Dawnbringer Cleric"
        ],
        "maybeboard": [
            {
                "name": "Militia Bugler",
                "note": "Buscador de criaturas de resistencia 2 o menor."
            },
            {
                "name": "Seekers' Squire",
                "note": "Filtrado adicional de biblioteca."
            },
            {
                "name": "Standard Bearer",
                "note": "Protección contra encantamientos y daño dirigido."
            }
        ],
        "proTips": [
            "Devuelve Experimental Synthesizer a la mano con Glint Hawk o Kor Skyfisher para volver a exiliar y jugar otra carta.",
            "Asegúrate de tener maná disponible antes de activar o regresar Synthesizer para no perder la carta exiliada si no puedes pagarla.",
            "Galvanic Blast hace 4 de daño si tienes 3 o más artefactos (fácilmente alcanzable con fichas de pista, Lembas y tierras artefacto)."
        ],
        "matchups": [
            {
                "vsDeckName": "Mono Red Madness",
                "difficulty": "favorable",
                "role": "Midrange",
                "inCards": [
                    {
                        "cardName": "Dawnbringer Cleric",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Gana vidas y bloquea con solidez."
                    },
                    {
                        "cardName": "Cast into the Fire",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Mata criaturas pequeñas o exilia piezas clave."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Experimental Synthesizer",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Ajuste de tempo."
                    },
                    {
                        "cardName": "Thraben Inspector",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Demasiado pasivo."
                    }
                ],
                "gameplayTips": [
                    "Lembas y Dawnbringer Cleric te dan vidas recurrentes que escapan del alcance del daño rojo.",
                    "Kor Skyfisher bloquea con 3 de resistencia a casi todas sus amenazas."
                ]
            },
            {
                "vsDeckName": "Grixis Affinity",
                "difficulty": "favorable",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Dust to Dust",
                        "quantity": 4,
                        "role": "in",
                        "reason": "La respuesta definitiva: exilia 2 artefactos."
                    },
                    {
                        "cardName": "Destroy Evil",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Mata Myr Enforcer o Makeshift Munitions."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Lightning Bolt",
                        "quantity": 2,
                        "role": "out",
                        "reason": "3 de daño no mata a Myr Enforcer (4/4)."
                    },
                    {
                        "cardName": "Lembas",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Ajuste de densidad."
                    }
                ],
                "gameplayTips": [
                    "Dust to Dust en turno 3 sobre sus tierras puente les destroza la base de maná.",
                    "Usa Galvanic Blast (4 de daño) para destruir a sus Myr Enforcers."
                ]
            }
        ]
    },
    {
        "id": "turbo-fog",
        "slug": "turbo-fog",
        "name": "Turbo Fog",
        "metaPercentage": "1.2%",
        "metaCount": 33,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2f0-0e98-70ab-9d6d-60066bc7f2f1/variants/672/938/card_image.webp",
        "colors": [
            "U",
            "G"
        ],
        "archetypeType": "Control",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/pauper-turbo-fog-fe589501-15e6-4511-b259-e066f9f36c51#online",
        "description": "Mazo de control y desgaste que neutraliza todos los daños de combate con efectos de niebla (Fog, Moment's Peace, Tangle) mientras roba masivamente y gana por vaciado de biblioteca rival (Mill) con Stream of Thought.",
        "keyCards": [
            "Fog",
            "Moment's Peace",
            "Tangle",
            "Weather the Storm",
            "Accumulated Knowledge",
            "Brainstorm",
            "Stream of Thought",
            "Lorien Revealed",
            "Frantic Search",
            "Growth Spiral"
        ],
        "sideboardCards": [
            "Hydroblast",
            "Blue Elemental Blast",
            "Dispel",
            "Flaring Pain",
            "Curse of the Bloody Tome",
            "Relic of Progenitus",
            "Spidersilk Armor"
        ],
        "maybeboard": [
            {
                "name": "Campfire",
                "note": "Recupera cementerio y previene daño directo."
            },
            {
                "name": "Quiet Disrepair",
                "note": "Solución contra artefactos y ganancia pasiva de vidas."
            },
            {
                "name": "Turn Aside",
                "note": "Protección para tus permanentes clave."
            }
        ],
        "proTips": [
            "Moment's Peace te otorga dos turnos de protección en una sola carta gracias a Flashback.",
            "Usa Stream of Thought con Replicate para barajar en tu biblioteca tus mejores nieblas y cartas de robo, creando una biblioteca infinita.",
            "Contra barajas rojas, Weather the Storm es tu condición primaria de supervivencia antes de ensamblar el bucle de nieblas."
        ],
        "matchups": [
            {
                "vsDeckName": "Mono Red Madness",
                "difficulty": "even",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Hydroblast",
                        "quantity": 4,
                        "role": "in",
                        "reason": "Corta quemaduras letal y Flaring Pain."
                    },
                    {
                        "cardName": "Dispel",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Contrarresta hechizos de daño instantáneo."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Tangle",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Niebla terrestre superada por quemadura directa a la cabeza."
                    },
                    {
                        "cardName": "Stream of Thought",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Lenta para los primeros turnos."
                    }
                ],
                "gameplayTips": [
                    "Las nieblas no previenen el daño de los hechizos directos (Lightning Bolt, Lava Dart, Fireblast); Weather the Storm e Hydroblast son tus únicas salvaguardas.",
                    "Hydroblast debe guardarse prioritariamente para Flaring Pain."
                ]
            },
            {
                "vsDeckName": "Blue Terror",
                "difficulty": "favorable",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Dispel",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Protege tus nieblas de sus contrahechizos."
                    },
                    {
                        "cardName": "Hydroblast",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Control defensivo."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Weather the Storm",
                        "quantity": 2,
                        "role": "out",
                        "reason": "No generan tormenta ni quemadura directa."
                    }
                ],
                "gameplayTips": [
                    "Ellos solo ganan por combate: cada niebla que resuelvas es un turno entero comprado.",
                    "Stream of Thought millea sus pocas cartas de biblioteca mientras reciclas tus nieblas."
                ]
            }
        ]
    },
    {
        "id": "walls-combo",
        "slug": "walls-combo",
        "name": "Walls Combo",
        "metaPercentage": "0.2%",
        "metaCount": 7,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2f0-0e98-79da-9bfc-d22d904f60d1/variants/672/938/card_image.webp",
        "colors": [
            "G"
        ],
        "archetypeType": "Combo",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/pauper-walls-combo#online",
        "description": "Mazo combo basado en criaturas con Defensor (Axebane Guardian, Overgrown Battlement) que generan maná descomunal para activar Freed from the Real y cerrar con Valakut Invoker o fichas infinitas.",
        "keyCards": [
            "Axebane Guardian",
            "Overgrown Battlement",
            "Freed from the Real",
            "Quirion Ranger",
            "Saruli Caretaker",
            "Valakut Invoker",
            "Lead the Stampede",
            "Winding Way",
            "Tinder Wall",
            "Shield Sphere"
        ],
        "sideboardCards": [
            "Weather the Storm",
            "Scattershot Archer",
            "Spidersilk Armor",
            "Flaring Pain",
            "Gleeful Sabotage",
            "Crimson Fleet Commodore",
            "Relic of Progenitus"
        ],
        "maybeboard": [
            {
                "name": "Galvanic Alchemist",
                "note": "Heredero de Freed from the Real con Soulbond."
            },
            {
                "name": "Secret Door",
                "note": "Cierra partidas explorando mazmorras con maná infinito."
            },
            {
                "name": "Masked Vandal",
                "note": "Removal de artefactos o encantamientos."
            }
        ],
        "proTips": [
            "Axebane Guardian con Freed from the Real genera maná infinito de cualquier color si controlas al menos otro muro.",
            "Una vez obtenido maná infinito, invoca Valakut Invoker o activa Secret Door para ganar en ese mismo turno.",
            "Lead the Stampede y Winding Way rellenan tu mano con 4-5 criaturas por solo 2 o 3 manás."
        ],
        "matchups": [
            {
                "vsDeckName": "Blue Terror",
                "difficulty": "even",
                "role": "Combo",
                "inCards": [
                    {
                        "cardName": "Spidersilk Armor",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Resistencia a cartas de tempo y bloqueadores con alcance."
                    },
                    {
                        "cardName": "Relic of Progenitus",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Ralentiza sus terrores."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Shield Sphere",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Poco impacto en combate."
                    }
                ],
                "gameplayTips": [
                    "Sus criaturas no tienen evasión; tus muros bloquean indefinidamente a Tolarian Terror.",
                    "Espera a tener protección antes de encantar a Axebane Guardian con Freed from the Real."
                ]
            },
            {
                "vsDeckName": "Mono Red Madness",
                "difficulty": "even",
                "role": "Combo",
                "inCards": [
                    {
                        "cardName": "Weather the Storm",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Supervivencia obligada contra quemadura."
                    },
                    {
                        "cardName": "Scattershot Archer",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Limpia atacantes pequeños."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Valakut Invoker",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Demasiado frágil en curva 3."
                    },
                    {
                        "cardName": "Lead the Stampede",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Ajuste de velocidad."
                    }
                ],
                "gameplayTips": [
                    "Tus muros de 4 de resistencia (Overgrown Battlement) bloquean perfectamente a sus criaturas terrestres.",
                    "Cuidado con quemaduras en respuesta a tus activaciones."
                ]
            }
        ]
    },
    {
        "id": "modern-eldrazi",
        "slug": "modern-eldrazi",
        "name": "Eldrazi",
        "metaPercentage": "8.4%",
        "metaCount": 472,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2ef-713b-753d-a9f1-449808dbfd0b/variants/672/938/card_image.webp",
        "colors": [
            "R",
            "G"
        ],
        "archetypeType": "Aggro",
        "format": "modern",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/modern-eldrazi#online",
        "description": "Estrategia hiperagresiva y disruptiva de Eldrazis acelerada con Eldrazi Temple y Through the Breach, cerrando con Emrakul, the Promised End y Drowner of Hope.",
        "keyCards": [
            "Thought-Knot Seer",
            "Emrakul, the Promised End",
            "Kozilek's Command",
            "Eldrazi Temple",
            "Through the Breach",
            "Devourer of Destiny",
            "Sowing Mycospawn",
            "Chalice of the Void",
            "All Is Dust",
            "Talisman of Impulse"
        ],
        "sideboardCards": [
            "Chalice of the Void",
            "Dismember",
            "Trinisphere",
            "Pick Your Poison",
            "Relic of Progenitus",
            "Warping Wail",
            "Cavern of Souls"
        ],
        "maybeboard": [
            {
                "name": "Ulamog, the Defiler",
                "note": "Amenaza aniquiladora alternativa para partidas largas de desgaste."
            },
            {
                "name": "Null Rod",
                "note": "Hate directo de artefactos si el metagame tiene alta presencia de Affinity."
            },
            {
                "name": "Boseiju, Who Endures",
                "note": "Respuesta incounterable e instantánea a Blood Moon y Torpor Orb."
            }
        ],
        "proTips": [
            "Consign to Memory es el principal counter del meta 2026 contra nosotros: contrarresta hechizos incoloros por {U} y anula habilidades disparadas (como el control mental de Emrakul o el tutor de tierras de Mycospawn).",
            "Contra mazos agresivos y de Energy (Boros/Jeskai), un Chalice of the Void con X=1 en turno 1 frena Guide of Souls, Ocelot Pride, Galvanic Discharge y Consign to Memory.",
            "Through the Breach con Emrakul al final del turno rival o en fase principal esquiva respuestas a velocidad de conjuro como Wrath of the Skies o Phlage y limpia la mesa rival con Annihilator 6."
        ],
        "matchups": [
            {
                "vsDeckName": "Boros Energy",
                "difficulty": "even",
                "role": "Midrange",
                "inCards": [
                    {
                        "cardName": "Chalice of the Void",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Chalice a 1 maná anula Ocelot Pride, Galvanic Discharge y Guide of Souls."
                    },
                    {
                        "cardName": "Dismember",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Responde de forma inmediata a Phlage y criaturas rápidas."
                    },
                    {
                        "cardName": "Trinisphere",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Frena en seco su tempo y les impide jugar múltiples amenazas por turno."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Through the Breach",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Lento si te presionan agresivamente desde el turno 1."
                    },
                    {
                        "cardName": "All Is Dust",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Curva 7 demasiado pesada frente a su velocidad."
                    },
                    {
                        "cardName": "Sowing Mycospawn",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Ajuste de curva para acelerar la interacción temprana."
                    }
                ],
                "gameplayTips": [
                    "Un Chalice of the Void con X=1 en turno 1-2 gana automáticamente gran porcentaje de partidas.",
                    "Kozilek's Command exiliando el cementerio previene el Escape de Phlage, Titan of Fire's Fury.",
                    "Ten cuidado con Wear/Tear del rival, que destruye tanto Chalice como Trinisphere."
                ]
            },
            {
                "vsDeckName": "Izzet Prowess",
                "difficulty": "even",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Chalice of the Void",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Corta prácticamente todo su mazo de cantrips y fuegos."
                    },
                    {
                        "cardName": "Dismember",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Mata a Slickshot Show-Off a velocidad instantánea."
                    },
                    {
                        "cardName": "Trinisphere",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Impide por completo sus cadenas de hechizos y dopadores baratos."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Emrakul, the Promised End",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Demasiado lenta ante salidas explosivas."
                    },
                    {
                        "cardName": "Through the Breach",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Innecesario cuando la prioridad es frenar su ataque terrestre y aéreo."
                    },
                    {
                        "cardName": "Sowing Mycospawn",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Ajuste de velocidad para no caer ante turnos 2-3 de 20 daños."
                    },
                    {
                        "cardName": "All Is Dust",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Demasiado cara si te colocan en rango de letal rápido."
                    }
                ],
                "gameplayTips": [
                    "Mantén maná abierto para removal cuando lancen Slickshot Show-Off.",
                    "No te confíes de sus pocas cartas en mano; un Cori-Steel Cutter con Prowess puede infligir daño letal por sorpresa.",
                    "Chalice a 1 frena Lightning Bolt, Lava Dart, Preordain y Mutagenic Growth de un solo golpe."
                ]
            },
            {
                "vsDeckName": "Esper Blink / Control",
                "difficulty": "favorable",
                "role": "Beatdown",
                "inCards": [
                    {
                        "cardName": "Trinisphere",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Fuerza a que Solitude y counterspells como Spell Snare y Consign to Memory cuesten al menos 3 manás."
                    },
                    {
                        "cardName": "Thought-Knot Seer",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Despoja su mano de Solitude o Supreme Verdict antes de que puedan lanzarlos."
                    },
                    {
                        "cardName": "Cavern of Souls",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Hace incounterables tus Eldrazis gigantes frente a Consign to Memory y Counterspell."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Through the Breach",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Vulnerable a Teferi, Time Raveler y contrahechizos."
                    },
                    {
                        "cardName": "Dismember",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Poco efectivo contra Solitude evocado o criaturas de resistencia 5+."
                    },
                    {
                        "cardName": "All Is Dust",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Pueden parpadear o salvar criaturas con Ephemerate."
                    }
                ],
                "gameplayTips": [
                    "Cavern of Souls nombrando Eldrazi invalida todo su paquete de counterspells.",
                    "Trinisphere frena en seco sus turnos de disrupción barata por 1 maná.",
                    "Ataca prioritariamente a Teferi, Time Raveler para recuperar la velocidad de juego instantáneo."
                ]
            }
        ]
    },
    {
        "id": "modern-izzet-prowess",
        "slug": "modern-izzet-prowess",
        "name": "Izzet Prowess",
        "metaPercentage": "8.0%",
        "metaCount": 445,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2f0-04e4-764b-bb60-f14bc8770103/variants/672/938/card_image.webp",
        "colors": [
            "U",
            "R"
        ],
        "archetypeType": "Aggro",
        "format": "modern",
        "author": "Ethan Gaieski (@ethanmtg) & Andrea Mengucci (TCGplayer)",
        "decklistUrl": "https://www.tcgplayer.com/content/article/Modern-Izzet-Prowess-MTG-Deck-Guide-Best-Cards-Sideboarding-and-More/e83ed2d4-d0db-443c-a00f-df2cf4c1d9e9/?srsltid=AU7gw4VAg7PujizBcnjRrdtNFt6TC1pqrQb_jua-bYDsW08prkDtWaGg",
        "description": "Guía competitiva definitiva de Izzet Prowess en Modern basada en la tabla de banquillo de Ethan Gaieski (@ethanmtg) y el análisis de Andrea Mengucci en TCGplayer. Potencia hiperagresiva con Slickshot Show-Off, Dragon's Rage Channeler y Cori-Steel Cutter de Tarkir: Dragonstorm, respaldada por un banquillo quirúrgico con Unholy Heat, Consign to Memory, Meltdown, Into the Flood Maw y Murktide Regent.",
        "keyCards": [
            "Slickshot Show-Off",
            "Cori-Steel Cutter",
            "Monastery Swiftspear",
            "Dragon's Rage Channeler",
            "Mishra's Bauble",
            "Lightning Bolt",
            "Lava Dart",
            "Mutagenic Growth",
            "Preordain",
            "Expressive Iteration",
            "Violent Urge",
            "Unholy Heat"
        ],
        "sideboardCards": [
            "Consign to Memory",
            "Unholy Heat",
            "Spell Pierce",
            "Surgical Extraction",
            "Meltdown",
            "Into the Flood Maw",
            "Murktide Regent"
        ],
        "maybeboard": [
            {
                "name": "Subtlety",
                "note": "Respuesta gratuita para retrasar Phlage, Titan of Fire's Fury o Primeval Titan al entrar al campo de batalla."
            },
            {
                "name": "Stern Scolding",
                "note": "Corta criaturas clave de bajo coste como Guide of Souls, Ocelot Pride o Ajani por un solo maná azul."
            },
            {
                "name": "Blood Moon",
                "note": "Opción alternativa de hate de tierras contra Amulet Titan y Tron tradicional."
            }
        ],
        "proTips": [
            "Regla de oro de Ethan (@ethanmtg) y Mengucci: En emparejamientos de carrera pura o combo (Amulet Titan, Eldrazi Tron, Ruby Storm), retira las 4 copias de Expressive Iteration; en el metagame moderno no hay tiempo de pagar dos manás por robo lento.",
            "Contra mazos de artefactos (Affinity / Izzet Steel-Cutter), Meltdown con X=1 o X=2 destruye de un plumazo toda su presencia de mesa (Mox Opal, tokens de Urza's Saga, Cranial Ram, Cori-Steel Cutter) por un coste mínimo de maná.",
            "Into the Flood Maw es la navaja suiza de rebote por {U}: con Gift a tapped Fish responde instantáneamente a permanentes que no sean tierra imposibles de matar (The One Ring, Phlage escapado, Murktide Regent, Atraxa, Leylines).",
            "Murktide Regent desde el banquillo actúa como condición de victoria titánica en emparejamientos justos (Boros Energy, Mirror): vuela por encima de Ocelot Pride y esquiva Lightning Bolt y Galvanic Discharge.",
            "Surgical Extraction exilia de raíz las cartas clave del rival tras verlas en el cementerio: Phlage contra Boros Energy, Atraxa/Griselbrand contra Goryo's Vengeance o rituales contra Ruby Storm."
        ],
        "matchups": [
            {
                "vsDeckName": "Boros Energy",
                "difficulty": "even",
                "role": "Midrange",
                "inCards": [
                    {
                        "cardName": "Unholy Heat",
                        "quantity": 4,
                        "role": "in",
                        "reason": "Elimina a Phlage (con Delirium activo hace 6 daños) y mata a Guide of Souls y Ocelot Pride limpiamente."
                    },
                    {
                        "cardName": "Surgical Extraction",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Exilia a Phlage, Titan of Fire's Fury del cementerio para anular permanentemente su Escape."
                    },
                    {
                        "cardName": "Murktide Regent",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Amenaza voladora gigantesca que evade a sus bloqueadores terrestres y esquiva Galvanic Discharge."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Mutagenic Growth",
                        "quantity": 3,
                        "role": "out",
                        "reason": "Evita intercambios 2x1 desfavorables contra su abundante removal barato."
                    },
                    {
                        "cardName": "Violent Urge",
                        "quantity": 3,
                        "role": "out",
                        "reason": "Prescindible cuando la partida pasa a ser una guerra de desgaste y control de mesa."
                    },
                    {
                        "cardName": "Expressive Iteration",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Ajuste de ratio exacto (7 In / 7 Out según la guía de Ethan)."
                    }
                ],
                "gameplayTips": [
                    "Prioriza matar a Guide of Souls y Ocelot Pride de inmediato con Unholy Heat antes de que acumulen valor.",
                    "Usa Surgical Extraction en respuesta al disparo de Escape de Phlage para exiliar todas las copias de su baraja.",
                    "Murktide Regent en el midgame domina la mesa aérea y cierra la partida rápidamente."
                ]
            },
            {
                "vsDeckName": "Eldrazi Ramp",
                "difficulty": "favorable",
                "role": "Aggro",
                "inCards": [
                    {
                        "cardName": "Consign to Memory",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Contrarresta por {U} a Emrakul, Devourer of Destiny, Kozilek's Command y disparos de Mycospawn."
                    },
                    {
                        "cardName": "Spell Pierce",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Contrarresta hechizos de rampa como Ancient Stirrings, Kozilek's Command o All Is Dust."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Lava Dart",
                        "quantity": 4,
                        "role": "out",
                        "reason": "Inútil contra criaturas incoloras de resistencia 5+."
                    },
                    {
                        "cardName": "Lightning Bolt",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Ajuste de 5 Out para incorporar los 5 contrahechizos."
                    }
                ],
                "gameplayTips": [
                    "Consign to Memory es tu mejor herramienta: contrarresta tanto la criatura incolora como la habilidad disparada al ser lanzada.",
                    "Slickshot Show-Off con Plot o prisa puede infligir más de 12 daños de un solo golpe si encadenas Baubles y dopadores.",
                    "Aprovecha la falta de interacción instantánea en los primeros turnos del rival para presionar al máximo."
                ]
            },
            {
                "vsDeckName": "Eldrazi Tron",
                "difficulty": "even",
                "role": "Aggro-Control",
                "inCards": [
                    {
                        "cardName": "Consign to Memory",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Anula Chalice of the Void, Karn the Great Creator y amenazas incoloras gigantes."
                    },
                    {
                        "cardName": "Unholy Heat",
                        "quantity": 4,
                        "role": "in",
                        "reason": "Con Delirium activo elimina a Thought-Knot Seer, Karn y bloqueadores pesados."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Expressive Iteration",
                        "quantity": 4,
                        "role": "out",
                        "reason": "Regla de Ethan: fuera todo el robo lento en favor de interacción directa y velocidad."
                    },
                    {
                        "cardName": "Mutagenic Growth",
                        "quantity": 3,
                        "role": "out",
                        "reason": "Poco eficaz ante bloqueadores incoloros gigantes y Dismember rival."
                    }
                ],
                "gameplayTips": [
                    "Consign to Memory por {U} sobre Chalice of the Void o Karn salva tu partida.",
                    "Unholy Heat con 6 daños derriba a Thought-Knot Seer y limpia el camino terrestre.",
                    "Mantén una presión rápida con Monastery Swiftspear y Cori-Steel Cutter antes de que ensamblen Tron."
                ]
            },
            {
                "vsDeckName": "Affinity",
                "difficulty": "favorable",
                "role": "Aggro",
                "inCards": [
                    {
                        "cardName": "Meltdown",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Con X=1 o X=2 barre toda su mesa de artefactos (Mox Opal, tokens de Saga, Cranial Ram, Frogmite)."
                    },
                    {
                        "cardName": "Into the Flood Maw",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Rebota a Kappa Cannoneer con Ward o a un Constructo letal por un solo maná azul."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Mutagenic Growth",
                        "quantity": 3,
                        "role": "out",
                        "reason": "Ajuste exacto de 3 cartas fuera según la tabla de Ethan para incluir el hate de artefactos."
                    }
                ],
                "gameplayTips": [
                    "Meltdown en turno 2-3 es game over para ellos, destruyendo artefactos de coste 0, 1 y 2.",
                    "Into the Flood Maw te compra el turno necesario devolviendo a Kappa Cannoneer a su mano para conectar daño letal.",
                    "Lava Dart y Lightning Bolt limpian señales de maná como Ornithopter o piezas con Cranial Ram."
                ]
            },
            {
                "vsDeckName": "Amulet Titan",
                "difficulty": "favorable",
                "role": "Pure Aggro",
                "inCards": [
                    {
                        "cardName": "Consign to Memory",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Contrarresta los disparos de entrada de Amulet of Vigor y Primeval Titan."
                    },
                    {
                        "cardName": "Unholy Heat",
                        "quantity": 4,
                        "role": "in",
                        "reason": "Mata a Primeval Titan (6 daños con Delirium) y a Dryad of the Ilysian Grove."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Expressive Iteration",
                        "quantity": 4,
                        "role": "out",
                        "reason": "Fuera todo el robo lento según la regla de Ethan; no hay tiempo para gastar 2 manás en robar."
                    },
                    {
                        "cardName": "Lightning Bolt",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Daño insuficiente frente a la resistencia 6 de Primeval Titan."
                    },
                    {
                        "cardName": "Lava Dart",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Ajuste para completar los 7 Out exactos."
                    }
                ],
                "gameplayTips": [
                    "Maximiza el daño en turnos 1 a 3; la mejor defensa contra su combo es matarlos antes de que activen el titán.",
                    "Consign to Memory anula el disparo de búsqueda de Primeval Titan, ganándote el turno decisivo para rematar.",
                    "Unholy Heat con Delirium elimina a Primeval Titan en cuanto toque el campo."
                ]
            },
            {
                "vsDeckName": "Domain Zoo",
                "difficulty": "even",
                "role": "Aggro",
                "inCards": [
                    {
                        "cardName": "Consign to Memory",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Contrarresta por {U} a Scion of Draco al ser un artefacto incoloro."
                    },
                    {
                        "cardName": "Unholy Heat",
                        "quantity": 4,
                        "role": "in",
                        "reason": "Con Delirium derriba a Territorial Kavu 5/5, Nishoba Brawler y Scion of Draco."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Lava Dart",
                        "quantity": 3,
                        "role": "out",
                        "reason": "Inútil frente a criaturas con resistencia 4+ o protegidas por Scion de Draco."
                    },
                    {
                        "cardName": "Mutagenic Growth",
                        "quantity": 3,
                        "role": "out",
                        "reason": "Mala interacción contra Leyline Binding y Lightning Bolt rival."
                    },
                    {
                        "cardName": "Violent Urge",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Ajuste exacto de 7 Out según la guía de Ethan."
                    }
                ],
                "gameplayTips": [
                    "Consign to Memory frena a Scion of Draco antes de que otorgue Hexproof y Lifelink a toda su mesa.",
                    "Activa Delirium rápidamente con Channeler y Bauble para tener Unholy Heat listo con 6 daños.",
                    "Evita ataques suicidas si Territorial Kavu tiene Lifelink activo."
                ]
            },
            {
                "vsDeckName": "Goryo's Vengeance",
                "difficulty": "favorable",
                "role": "Tempo-Disruptive",
                "inCards": [
                    {
                        "cardName": "Surgical Extraction",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Exilia a Atraxa o Griselbrand en respuesta a Goryo's Vengeance en el cementerio."
                    },
                    {
                        "cardName": "Spell Pierce",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Contrarresta Goryo's Vengeance o Ephemerate por un solo maná azul."
                    },
                    {
                        "cardName": "Into the Flood Maw",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Rebota la criatura legendaria reanimada al final de su turno por {U}."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Mutagenic Growth",
                        "quantity": 3,
                        "role": "out",
                        "reason": "Riesgoso frente a removal negro y descarte."
                    },
                    {
                        "cardName": "Violent Urge",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Ajuste de banquillo para priorizar la interacción instantánea contra el cementerio."
                    }
                ],
                "gameplayTips": [
                    "Mantén maná o 2 vidas abiertas para Surgical Extraction en el turno en que tiren a Atraxa al cementerio.",
                    "Spell Pierce es devastador si intentan combar en turno 2-3 sin maná libre de respaldo.",
                    "Into the Flood Maw anula su intento de ataque con Griselbrand devolviéndolo a la mano."
                ]
            },
            {
                "vsDeckName": "Jeskai Blink",
                "difficulty": "even",
                "role": "Tempo",
                "inCards": [
                    {
                        "cardName": "Unholy Heat",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Elimina a Phlage (con Delirium) y otras criaturas problemáticas."
                    },
                    {
                        "cardName": "Spell Pierce",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Contrarresta Wrath of the Skies, Teferi, Time Raveler o Ephemerate."
                    },
                    {
                        "cardName": "Into the Flood Maw",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Rebota permanentes de bloqueo o The One Ring a velocidad instantánea."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Mutagenic Growth",
                        "quantity": 3,
                        "role": "out",
                        "reason": "Muy vulnerable al removal exiliador con Solitude y Prismatic Ending."
                    },
                    {
                        "cardName": "Violent Urge",
                        "quantity": 3,
                        "role": "out",
                        "reason": "Ajuste de 6 Out según la tabla de Ethan para sumar interacción."
                    }
                ],
                "gameplayTips": [
                    "Guarda Spell Pierce para contrarrestar Wrath of the Skies cuando intenten limpiar tu mesa.",
                    "Slickshot Show-Off con Plot te permite esperar a que giren maná para evitar Solitude.",
                    "Unholy Heat con Delirium es tu respuesta para limpiar a Phlage antes de que gane vidas."
                ]
            },
            {
                "vsDeckName": "Ruby Storm",
                "difficulty": "favorable",
                "role": "Tempo",
                "inCards": [
                    {
                        "cardName": "Spell Pierce",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Contrarresta rituales iniciales (Desperate/Pyretic Ritual) o Ruby Medallion."
                    },
                    {
                        "cardName": "Surgical Extraction",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Exilia rituales clave o Past in Flames del cementerio para cortar el bucle."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Expressive Iteration",
                        "quantity": 4,
                        "role": "out",
                        "reason": "Completamente fuera en una carrera pura hacia el letal (4 Out / 4 In según Ethan)."
                    }
                ],
                "gameplayTips": [
                    "Corta el primer ritual con Spell Pierce; sin maná duplicado se atascan.",
                    "Surgical Extraction sobre Desperate Ritual o Past in Flames les deja sin motor de tormenta.",
                    "Tu reloj es tan rápido que puedes cerrar la partida en turno 3 antes de que se recuperen."
                ]
            },
            {
                "vsDeckName": "Izzet Prowess (Mirror)",
                "difficulty": "even",
                "role": "Control-Tempo",
                "inCards": [
                    {
                        "cardName": "Unholy Heat",
                        "quantity": 4,
                        "role": "in",
                        "reason": "El mejor removal del espejo: con Delirium mata a cualquier atacante inflado."
                    },
                    {
                        "cardName": "Murktide Regent",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Condición de victoria insuperable que vuela y esquiva Lightning Bolt y Lava Dart."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Slickshot Show-Off",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Vulnerable a Lightning Bolt y Unholy Heat rival si no tienes mana abierto."
                    },
                    {
                        "cardName": "Expressive Iteration",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Lenta en los primeros compases del combate."
                    },
                    {
                        "cardName": "Violent Urge",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Ajuste exacto de 5 Out / 5 In según la guía de Ethan."
                    }
                ],
                "gameplayTips": [
                    "Quien controle el tempo con Unholy Heat y Dragon's Rage Channeler gana el emparejamiento.",
                    "Murktide Regent con 5 contadores o más es casi imposible de responder para el espejo.",
                    "No uses Lava Dart a la cabeza; resérvalo para rematar criaturas rivales tras bloqueos."
                ]
            },
            {
                "vsDeckName": "Dimir Midrange",
                "difficulty": "even",
                "role": "Midrange",
                "inCards": [
                    {
                        "cardName": "Unholy Heat",
                        "quantity": 4,
                        "role": "in",
                        "reason": "Mata a Murktide Regent (con Delirium) y a Psychic Frog antes de que crezca."
                    },
                    {
                        "cardName": "Spell Pierce",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Protege tus amenazas de Fatal Push o Drown in the Loch."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Mutagenic Growth",
                        "quantity": 3,
                        "role": "out",
                        "reason": "Ethan aconseja retirar trucos de combate que regalan ventajas ante removal negro barato."
                    },
                    {
                        "cardName": "Violent Urge",
                        "quantity": 3,
                        "role": "out",
                        "reason": "Demasiado arriesgado frente a counterspells y removal instantáneo."
                    }
                ],
                "gameplayTips": [
                    "Surveilea agresivamente con Dragon's Rage Channeler para activar Delirium rápido y alimentar Unholy Heat.",
                    "Spell Pierce te protege en el turno en que atacas con Slickshot Show-Off.",
                    "Unholy Heat con 6 daños es tu seguro de vida contra Psychic Frog crecida y Murktide Regent."
                ]
            }
        ]
    },
    {
        "id": "modern-eldrazi-ramp",
        "slug": "modern-eldrazi-ramp",
        "name": "Eldrazi Ramp",
        "metaPercentage": "7.7%",
        "metaCount": 431,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2f0-09f1-7fca-b085-a5cae92e555f/variants/672/938/card_image.webp",
        "colors": [
            "G"
        ],
        "archetypeType": "Ramp",
        "format": "modern",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/modern-eldrazi-ramp#online",
        "description": "Dominio de maná incoloro acelerado con Ugin's Labyrinth y Eldrazi Temple, desplegando The One Ring, Sowing Mycospawn y titanes imposibles de frenar.",
        "keyCards": [
            "Ugin's Labyrinth",
            "Eldrazi Temple",
            "The One Ring",
            "Sowing Mycospawn",
            "Kozilek's Command",
            "Devourer of Destiny",
            "Emrakul, the Promised End",
            "Ancient Stirrings",
            "Malevolent Rumble",
            "Boseiju, Who Endures"
        ],
        "sideboardCards": [
            "Dismember",
            "All Is Dust",
            "Trinisphere",
            "Pick Your Poison",
            "Chalice of the Void",
            "Kozilek's Return",
            "Consign to Memory"
        ],
        "maybeboard": [
            {
                "name": "Sire of Seven Deaths",
                "note": "Amenaza incolora masiva con protección y toque mortal."
            },
            {
                "name": "Grafdigger's Cage",
                "note": "Hate directo para Goryo's Vengeance y reanimator."
            },
            {
                "name": "Pithing Needle",
                "note": "Anula The One Ring, Agatha's Soul Cauldron y caminantes."
            }
        ],
        "proTips": [
            "Ugin's Labyrinth con una carta estampada de coste 7+ (como Devourer of Destiny o Emrakul) produce 2 manás en turno 1; ojo con Blood Moon rival que la convierte en una simple Montaña perdiendo el maná incoloro.",
            "Kozilek's Command es la navaja suiza de 2026: exilia cementerios (anula Phlage o Living End), pone 2 Scions, roba carta y aplica -X/-X a cualquier criatura rival.",
            "Solitude rival puede exiliar a Emrakul porque su invocación es un hechizo de criatura (no un instantáneo); sin embargo, su protección contra instantáneos la salva de Galvanic Discharge y Dismember."
        ],
        "matchups": [
            {
                "vsDeckName": "Boros Energy",
                "difficulty": "even",
                "role": "Midrange",
                "inCards": [
                    {
                        "cardName": "Dismember",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Mata criaturas tempranas y frena el lifegain de Guide of Souls."
                    },
                    {
                        "cardName": "All Is Dust",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Barre toda la mesa de permanentes de colores rivales de un solo golpe."
                    },
                    {
                        "cardName": "Trinisphere",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Impide que jueguen múltiples hechizos baratos por turno."
                    },
                    {
                        "cardName": "Pick Your Poison",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Responde a Blood Moon y Static Prison por un solo maná verde."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "The One Ring",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Demasiado lento ante presión masiva con tokens."
                    },
                    {
                        "cardName": "Sowing Mycospawn",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Ajuste de velocidad para interactuar más rápido."
                    },
                    {
                        "cardName": "Devourer of Destiny",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Coste elevado si no encontramos aceleración perfecta."
                    },
                    {
                        "cardName": "Ancient Stirrings",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Reemplazado por interactividad directa."
                    }
                ],
                "gameplayTips": [
                    "Blood Moon rival es letal si no tienes bosques básicos o talismanes; busca Forest básico temprano con Ancient Stirrings.",
                    "Trinisphere y All Is Dust limpian su mesa si sobrevives al turno 4.",
                    "Kozilek's Command exiliando el cementerio impide el Escape de Phlage."
                ]
            },
            {
                "vsDeckName": "Izzet Prowess",
                "difficulty": "even",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Chalice of the Void",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Chalice a 1 maná apaga completamente el 80% de su baraja."
                    },
                    {
                        "cardName": "Dismember",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Respuesta instantánea a Slickshot Show-Off antes de que conecte."
                    },
                    {
                        "cardName": "Kozilek's Return",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Limpia bichos de Prowess a velocidad de instantáneo por 3 manás."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "The One Ring",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Demasiado lento frente a daño en turno 3."
                    },
                    {
                        "cardName": "Emrakul, the Promised End",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Partida decidida antes de reunir el maná."
                    },
                    {
                        "cardName": "Sowing Mycospawn",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Rampa prescindible ante tanta agresividad."
                    },
                    {
                        "cardName": "Devourer of Destiny",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Curva demasiado pesada."
                    }
                ],
                "gameplayTips": [
                    "Bajar Chalice of the Void a 1 frena en seco toda su generación de ventaja.",
                    "No permitas que Slickshot Show-Off ataque sin respuesta abierta.",
                    "Un Devourer of Destiny en mano inicial puede exiliar a su primer atacante antes de que empiece la partida."
                ]
            },
            {
                "vsDeckName": "Amulet Titan",
                "difficulty": "favorable",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Consign to Memory",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Contrarresta disparos de Primeval Titan, Amulet of Vigor y Urza's Saga."
                    },
                    {
                        "cardName": "Pick Your Poison",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Obliga a sacrificar Amulet of Vigor o criaturas voladoras."
                    },
                    {
                        "cardName": "Damping Sphere",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Hace que sus bouncelands produzcan 1 solo incoloro, destruyendo su aceleración."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Dismember",
                        "quantity": 2,
                        "role": "out",
                        "reason": "No mata a Primeval Titan ni a Cultivator Colossus."
                    },
                    {
                        "cardName": "Kozilek's Command",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Lento comparado con la interacción específica contra artefactos."
                    },
                    {
                        "cardName": "Devourer of Destiny",
                        "quantity": 3,
                        "role": "out",
                        "reason": "Ajuste de banquillo para frenar su combo en turno 2-3."
                    }
                ],
                "gameplayTips": [
                    "Damping Sphere convierte sus bouncelands y Urza's Saga en productoras de un solo incoloro, desarmando su combo.",
                    "Consign to Memory anula los disparos de entrada de Primeval Titan.",
                    "Sowing Mycospawn con kicker puede exiliar su Valakut o bounceland clave."
                ]
            }
        ]
    },
    {
        "id": "modern-esper-blink",
        "slug": "modern-esper-blink",
        "name": "Esper Blink",
        "metaPercentage": "6.2%",
        "metaCount": 346,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2f0-2455-706a-8cc3-c7941c73b6ce/variants/672/938/card_image.webp",
        "colors": [
            "W",
            "U",
            "B"
        ],
        "archetypeType": "Midrange",
        "format": "modern",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/modern-esper-blink#online",
        "description": "Valor infinito y control disruptivo combinando Solitude, Ephemerate, Psychic Frog, Orcish Bowmasters y Teferi, Time Raveler.",
        "keyCards": [
            "Solitude",
            "Ephemerate",
            "Psychic Frog",
            "Orcish Bowmasters",
            "Teferi, Time Raveler",
            "Fallaji Archaeologist",
            "Counterspell",
            "Fatal Push",
            "Prismatic Ending",
            "Subtlety"
        ],
        "sideboardCards": [
            "Consign to Memory",
            "Ashiok, Dream Render",
            "Supreme Verdict",
            "Wrath of the Skies",
            "Flusterstorm",
            "High Noon",
            "Damping Sphere"
        ],
        "maybeboard": [
            {
                "name": "Kaya's Guile",
                "note": "Versatilidad suprema con exilio de cementerio y sacrificio forzado."
            },
            {
                "name": "Rest in Peace",
                "note": "Apaga cementerios por completo contra Living End y Goryo's Vengeance."
            },
            {
                "name": "Force of Negation",
                "note": "Protección sin coste de maná contra combos no creaturales."
            }
        ],
        "proTips": [
            "Solitude evocado en turno rival + Ephemerate en respuesta al disparo de sacrificio exilia 2 criaturas enemigas y te deja un 3/2 Lifelink en mesa por solo {W}.",
            "Teferi, Time Raveler apaga totalmente los trucos instantáneos de Izzet Prowess, las activaciones de Kozilek's Command y los hechizos de cascada o storm.",
            "Psychic Frog es un motor ridículo de ventaja de cartas y daño evasivo volador; descartar cartas no esenciales dopa a la rana y genera evasión letal."
        ],
        "matchups": [
            {
                "vsDeckName": "Eldrazi Ramp",
                "difficulty": "even",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Consign to Memory",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Contrarresta por {U} a Emrakul, Mycospawn y Kozilek's Command."
                    },
                    {
                        "cardName": "Ashiok, Dream Render",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Exilia el cementerio y previene tutor de tierras de Mycospawn y Urza's Saga."
                    },
                    {
                        "cardName": "Supreme Verdict",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Limpia la mesa de Eldrazis medianos e incounterable."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Orcish Bowmasters",
                        "quantity": 3,
                        "role": "out",
                        "reason": "Sin apenas objetivos para el disparo de 1 daño."
                    },
                    {
                        "cardName": "Spell Snare",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Pocos objetivos clave de coste 2 en su lista."
                    },
                    {
                        "cardName": "Fatal Push",
                        "quantity": 2,
                        "role": "out",
                        "reason": "No alcanza a monstruos gigantes de coste 4+."
                    }
                ],
                "gameplayTips": [
                    "Consign to Memory contrarresta tanto los hechizos incoloros como los disparos de cast de Emrakul y Mycospawn.",
                    "Ashiok neutraliza Shifting Woodland y anula las reducciones de coste de Emrakul al vaciar su cementerio.",
                    "Solitude es tu salvación contra Emrakul: al ser criatura, sobrepasa la protección de instantáneos."
                ]
            },
            {
                "vsDeckName": "Boros Energy",
                "difficulty": "favorable",
                "role": "Midrange",
                "inCards": [
                    {
                        "cardName": "Wrath of the Skies",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Limpia criaturas y artefactos de energía de un solo golpe."
                    },
                    {
                        "cardName": "Prismatic Ending",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Elimina Guide of Souls y Ocelot Pride limpiamente en turno 1-2."
                    },
                    {
                        "cardName": "Supreme Verdict",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Respuesta garantizada contra mesas anchas de tokens."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Counterspell",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Demasiado reactivo frente a amenazas de coste 1."
                    },
                    {
                        "cardName": "Subtlety",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Solo retrasa temporalmente criaturas baratas."
                    },
                    {
                        "cardName": "Teferi, Time Raveler",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Vulnerable al ataque rápido con múltiples atacantes."
                    }
                ],
                "gameplayTips": [
                    "Limpiar la mesa con Wrath of the Skies antes de que Phlage escape es prioritario.",
                    "Solitude es la respuesta ideal a Phlage ya que lo exilia directamente sin dejarlo en cementerio.",
                    "Psychic Frog puede bloquear y comerse amenazas pequeñas ganando lifelink si descartas cartas sobrantes."
                ]
            },
            {
                "vsDeckName": "Ruby Storm",
                "difficulty": "favorable",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Flusterstorm",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Contrarresta la cadena entera de tormenta de Grapeshot."
                    },
                    {
                        "cardName": "High Noon",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Restringe a 1 hechizo por turno, imposibilitando el combo."
                    },
                    {
                        "cardName": "Damping Sphere",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Impone un impuesto de maná acumulativo a cada ritual sucesivo."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Solitude",
                        "quantity": 3,
                        "role": "out",
                        "reason": "Sin objetivos de criaturas relevantes en su baraja."
                    },
                    {
                        "cardName": "Prismatic Ending",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Demasiado lenta frente al combo en turno 2-3."
                    },
                    {
                        "cardName": "Supreme Verdict",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Completamente inútil en este emparejamiento."
                    }
                ],
                "gameplayTips": [
                    "High Noon o Damping Sphere ganan la partida automáticamente si entran al campo de batalla.",
                    "Flusterstorm anula cualquier intento de ganar con Grapeshot.",
                    "Teferi, Time Raveler en mesa impide que lancen hechizos a velocidad instantánea en respuesta a tus jugadas."
                ]
            }
        ]
    },
    {
        "id": "modern-affinity",
        "slug": "modern-affinity",
        "name": "Affinity",
        "metaPercentage": "5.9%",
        "metaCount": 332,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2ef-67dc-7184-b27f-9221a330f394/variants/672/938/card_image.webp",
        "colors": [
            "U",
            "R"
        ],
        "archetypeType": "Aggro",
        "format": "modern",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/modern-affinity#online",
        "description": "Explosión de artefactos impulsada por Urza's Saga, Thought Monitor, Cranial Ram y la evasión blindada de Kappa Cannoneer.",
        "keyCards": [
            "Urza's Saga",
            "Thought Monitor",
            "Cranial Ram",
            "Frogmite",
            "Kappa Cannoneer",
            "Metallic Rebuke",
            "Mox Opal",
            "Springleaf Drum",
            "Shadowspear",
            "Galvanic Blast"
        ],
        "sideboardCards": [
            "Consign to Memory",
            "Metallic Rebuke",
            "Dispatch",
            "Haywire Mite",
            "Damping Sphere",
            "Etched Champion",
            "Wear/Tear"
        ],
        "maybeboard": [
            {
                "name": "Pithing Needle",
                "note": "Tutorizable con Urza's Saga para apagar caminantes o The One Ring."
            },
            {
                "name": "Soul-Guide Lantern",
                "note": "Hate de cementerio instantáneo tutorizable con Urza's Saga."
            },
            {
                "name": "Warping Wail",
                "note": "Exilia criaturas pequeñas de combo y contrarresta conjuros como Wrath of the Skies."
            }
        ],
        "proTips": [
            "Vexing Bauble rival en mesa contrarresta Mox Opal y cartas lanzadas por 0 manás con afinidad: debes priorizar destruirlo o contrarrestarlo de inmediato con Metallic Rebuke.",
            "Kappa Cannoneer con Ward 4 y Cranial Ram genera daño imbloqueable masivo que evade la gran mayoría de removal del formato.",
            "Urza's Saga en capítulo III te permite buscar Shadowspear para otorgar lifelink letal contra estrategias agresivas como Prowess o Boros Energy."
        ],
        "matchups": [
            {
                "vsDeckName": "Jeskai / Boros Energy",
                "difficulty": "even",
                "role": "Aggro",
                "inCards": [
                    {
                        "cardName": "Metallic Rebuke",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Contrarresta Wrath of the Skies y Phlage en momentos críticos."
                    },
                    {
                        "cardName": "Dispatch",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Exilia a Phlage de inmediato sin activar su cementerio."
                    },
                    {
                        "cardName": "Etched Champion",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Inmune a todo el removal de colores de la baraja rival."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Frogmite",
                        "quantity": 4,
                        "role": "out",
                        "reason": "Demasiado frágil ante barredores y removal de daño."
                    },
                    {
                        "cardName": "Springleaf Drum",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Ajuste de recursos para resistir el desgaste."
                    }
                ],
                "gameplayTips": [
                    "Prepárate para Wrath of the Skies; no sobreextiendas artefactos en mesa si puedes ganar con 2 Constructos de Urza's Saga.",
                    "Dispatch exilia a Phlage de inmediato impidiendo que vuelva a escapar.",
                    "Etched Champion equipado con Cranial Ram es inbloqueable e intocable para sus hechizos."
                ]
            },
            {
                "vsDeckName": "Eldrazi Ramp",
                "difficulty": "even",
                "role": "Aggro",
                "inCards": [
                    {
                        "cardName": "Consign to Memory",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Contrarresta All Is Dust, Kozilek's Command y amenazas incoloras."
                    },
                    {
                        "cardName": "Haywire Mite",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Tutorizable con Saga para exiliar The One Ring o tierras encantadas."
                    },
                    {
                        "cardName": "Damping Sphere",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Frena tierras de maná múltiple como Eldrazi Temple y Labyrinth."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Thoughtcast",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Demasiado pasivo ante la rampa contraria."
                    },
                    {
                        "cardName": "Frogmite",
                        "quantity": 3,
                        "role": "out",
                        "reason": "Bloqueado fácilmente por bichos gigantes incoloros."
                    },
                    {
                        "cardName": "Shadowspear",
                        "quantity": 2,
                        "role": "out",
                        "reason": "La carrera no es por vidas, sino por velocidad pura."
                    }
                ],
                "gameplayTips": [
                    "Consign to Memory contrarresta All Is Dust por solo 1 maná azul, salvando toda tu mesa de artefactos.",
                    "Damping Sphere convierte sus tierras de dos manás en tierras de 1 solo incoloro.",
                    "Acelera Kappa Cannoneer para cerrar la partida antes de que bajen a Emrakul."
                ]
            },
            {
                "vsDeckName": "Ruby Storm",
                "difficulty": "favorable",
                "role": "Aggro-Disruptive",
                "inCards": [
                    {
                        "cardName": "Damping Sphere",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Impone un impuesto de maná devastador a cada hechizo encadenado."
                    },
                    {
                        "cardName": "Metallic Rebuke",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Contrarresta el primer ritual o a Ral en turno 2."
                    },
                    {
                        "cardName": "Consign to Memory",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Contrarresta el disparo de tormenta de Grapeshot."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Dispatch",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Inútil contra un mazo casi sin criaturas de combate."
                    },
                    {
                        "cardName": "Shadowspear",
                        "quantity": 2,
                        "role": "out",
                        "reason": "El lifelink no te salvará de un Grapeshot letal de 30 daños."
                    },
                    {
                        "cardName": "Kappa Cannoneer",
                        "quantity": 3,
                        "role": "out",
                        "reason": "Demasiado pesado comparado con la interacción barata."
                    }
                ],
                "gameplayTips": [
                    "Damping Sphere en mesa anula por completo su capacidad de combar.",
                    "Metallic Rebuke por {U} interrumpe su turno crítico.",
                    "Aplica un reloj veloz con Constructos de Urza's Saga mientras mantienes el hate activo."
                ]
            }
        ]
    },
    {
        "id": "modern-domain-zoo",
        "slug": "modern-domain-zoo",
        "name": "Domain Zoo",
        "metaPercentage": "5.2%",
        "metaCount": 291,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2ef-313b-7500-bd01-4b1d52776981/variants/672/938/card_image.webp",
        "colors": [
            "W",
            "U",
            "B",
            "R",
            "G"
        ],
        "archetypeType": "Aggro",
        "format": "modern",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/modern-domain-zoo#online",
        "description": "Potencia multiversal desatada con Leyline of the Guildpact, Scion of Draco con todas las habilidades y Tribal Flames por 5 daños.",
        "keyCards": [
            "Scion of Draco",
            "Territorial Kavu",
            "Leyline of the Guildpact",
            "Tribal Flames",
            "Nishoba Brawler",
            "Leyline Binding",
            "Stubborn Denial",
            "Ragavan, Nimble Pilferer",
            "Wild Nacatl",
            "Lightning Bolt"
        ],
        "sideboardCards": [
            "Consign to Memory",
            "Pick Your Poison",
            "Wear/Tear",
            "Veil of Summer",
            "Kozilek's Return",
            "Prismatic Ending",
            "Teferi, Time Raveler"
        ],
        "maybeboard": [
            {
                "name": "Gaddock Teeg",
                "note": "Impide que jueguen All Is Dust, The One Ring o Through the Breach."
            },
            {
                "name": "Rest in Peace",
                "note": "Hate total contra cementerios y reanimator."
            },
            {
                "name": "Force of Vigor",
                "note": "Destruye Blood Moon y Torpor Orb sin pagar maná."
            }
        ],
        "proTips": [
            "Leyline of the Guildpact en mano inicial otorga todos los tipos de tierra básica a tus tierras en turno 0, activando Domain 5 completo para Scion of Draco y Territorial Kavu inmediatamente.",
            "Scion of Draco otorga Vigilance, Hexproof, Lifelink, First Strike y Deathtouch a tus criaturas según sus colores; con Leyline of the Guildpact tus criaturas adquieren TODAS esas habilidades.",
            "Contra Eldrazi, retira Stubborn Denial y Spell Pierce: no pueden contrarrestar criaturas incoloras como Sowing Mycospawn o Devourer of Destiny."
        ],
        "matchups": [
            {
                "vsDeckName": "Eldrazi Ramp",
                "difficulty": "even",
                "role": "Aggro",
                "inCards": [
                    {
                        "cardName": "Consign to Memory",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Contrarresta por {U} a Emrakul, Devourer of Destiny y disparos de Mycospawn."
                    },
                    {
                        "cardName": "Pick Your Poison",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Fuerza el sacrificio de voladores o artefactos gigantes."
                    },
                    {
                        "cardName": "Wear/Tear",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Responde a Urza's Saga y artefactos de rampa rivales."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Stubborn Denial",
                        "quantity": 3,
                        "role": "out",
                        "reason": "No pueden tocar criaturas incoloras ni disparos de rampa."
                    },
                    {
                        "cardName": "Spell Pierce",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Inútil contra su lista cargada de criaturas."
                    },
                    {
                        "cardName": "Lightning Bolt",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Poco daño contra criaturas de resistencia 5+."
                    }
                ],
                "gameplayTips": [
                    "Aplica presión directa con Territorial Kavu 5/5 antes de que bajen Ugin's Labyrinth activo.",
                    "Consign to Memory frena la búsqueda de tierras de Mycospawn y la entrada de monstruos incoloros.",
                    "Pick Your Poison resuelve situaciones críticas frente a amenazas evasivas gigantes."
                ]
            },
            {
                "vsDeckName": "Boros Energy",
                "difficulty": "even",
                "role": "Midrange",
                "inCards": [
                    {
                        "cardName": "Kozilek's Return",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Limpia tokens de Ocelot Pride y atacantes de energía a velocidad instantánea."
                    },
                    {
                        "cardName": "Prismatic Ending",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Elimina Guide of Souls y Static Prison de forma definitiva."
                    },
                    {
                        "cardName": "Wear/Tear",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Destruye Blood Moon y encantamientos de odio."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Stubborn Denial",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Poco eficiente contra un mazo repleto de bichos agresivos."
                    },
                    {
                        "cardName": "Ragavan, Nimble Pilferer",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Bloqueado fácilmente por tokens 1/1."
                    },
                    {
                        "cardName": "Nishoba Brawler",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Vulnerable a Galvanic Discharge por poco maná."
                    }
                ],
                "gameplayTips": [
                    "Territorial Kavu con Lifelink (gracias a Scion de Draco) domina el combate terrestre frente a Guide of Souls y Ocelot Pride.",
                    "Guarda Wear/Tear para responder a Blood Moon antes de que corte tu acceso a 5 colores.",
                    "Tribal Flames directo a la cabeza suele cerrar la partida sin necesidad de sobreexponerse."
                ]
            },
            {
                "vsDeckName": "Esper Blink / Control",
                "difficulty": "favorable",
                "role": "Aggro",
                "inCards": [
                    {
                        "cardName": "Veil of Summer",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Anula counterspells y removal negro de Solitude/Psychic Frog robando carta."
                    },
                    {
                        "cardName": "Stubborn Denial",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Contrarresta Supreme Verdict o Teferi por solo {U} con Ferocious activado."
                    },
                    {
                        "cardName": "Teferi, Time Raveler",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Impide que jueguen Ephemerate y counterspells en tu turno."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Lightning Bolt",
                        "quantity": 4,
                        "role": "out",
                        "reason": "Poco impacto contra criaturas de alta resistencia y Solitude."
                    },
                    {
                        "cardName": "Tribal Flames",
                        "quantity": 3,
                        "role": "out",
                        "reason": "Ajuste de interactividad para proteger tus amenazas en mesa."
                    }
                ],
                "gameplayTips": [
                    "Veil of Summer en respuesta a su removal te asegura la ventaja de cartas y mantiene tu atacante 5/5.",
                    "Scion of Draco con Hexproof invalida la mayor parte de su removal dirigido.",
                    "Teferi en mesa les impide usar Ephemerate en tu turno."
                ]
            }
        ]
    },
    {
        "id": "modern-boros-energy",
        "slug": "modern-boros-energy",
        "name": "Boros Energy",
        "metaPercentage": "5.1%",
        "metaCount": 286,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2f0-08c6-7d89-bc34-c1fcd3173d92/variants/672/938/card_image.webp",
        "colors": [
            "R",
            "W"
        ],
        "archetypeType": "Aggro",
        "format": "modern",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/modern-boros-energy#online",
        "description": "Sinérgica máquina de combate agresiva con Guide of Souls, Ocelot Pride, Ajani, Nacatl Pariah y el azote inagotable de Phlage.",
        "keyCards": [
            "Guide of Souls",
            "Ocelot Pride",
            "Ajani, Nacatl Pariah",
            "Phlage, Titan of Fire's Fury",
            "Galvanic Discharge",
            "Static Prison",
            "Blood Moon",
            "Goblin Bombardment",
            "Ranger-Captain of Eos",
            "Ragavan, Nimble Pilferer"
        ],
        "sideboardCards": [
            "Blood Moon",
            "Wear/Tear",
            "Damping Sphere",
            "Surgical Extraction",
            "High Noon",
            "Wrath of the Skies",
            "Sanctifier en-Vec"
        ],
        "maybeboard": [
            {
                "name": "Vexing Bauble",
                "note": "Hate directo para frenar hechizos de 0 manás y cascada."
            },
            {
                "name": "Celestial Purge",
                "note": "Exilia permanentes negros o rojos clave de forma limpia."
            },
            {
                "name": "Drannith Magistrate",
                "note": "Impide que jueguen cartas desde el cementerio o exilio."
            }
        ],
        "proTips": [
            "Blood Moon es devastador contra Eldrazi y Amulet Titan: Eldrazi Temple, Ugin's Labyrinth y Urza's Saga pasan a ser Montañas, cortando el maná incoloro que requieren para Kozilek's Command y Devourer of Destiny.",
            "Contra Broodscale Combo, Wear/Tear destruye Blade of the Bloodchief (pieza indispensable del bucle infinito de tokens) y Surgical Extraction exilia la pieza de toda su biblioteca.",
            "High Noon es tu mejor herramienta contra Izzet Prowess y Ruby Storm, ya que restringe a 1 solo hechizo por turno al adversario, matando su motor por completo."
        ],
        "matchups": [
            {
                "vsDeckName": "Eldrazi Ramp",
                "difficulty": "even",
                "role": "Aggro-Control",
                "inCards": [
                    {
                        "cardName": "Blood Moon",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Convierte Eldrazi Temple y Ugin's Labyrinth en Montañas, cortando su maná incoloro."
                    },
                    {
                        "cardName": "Wear/Tear",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Destruye Urza's Saga y artefactos de aceleración rivales."
                    },
                    {
                        "cardName": "Damping Sphere",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Hace que sus tierras que dan 2 manás den solo 1 incoloro."
                    },
                    {
                        "cardName": "Surgical Extraction",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Exilia amenazas clave o tierras tras verlas en el cementerio."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Goblin Bombardment",
                        "quantity": 3,
                        "role": "out",
                        "reason": "Demasiado lento frente a criaturas gigantes incoloras."
                    },
                    {
                        "cardName": "Static Prison",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Poco eficiente si sus criaturas tienen disparos de entrada devastadores."
                    },
                    {
                        "cardName": "Seasoned Pyromancer",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Ajuste de curva para meter disrupción directa temprana."
                    }
                ],
                "gameplayTips": [
                    "Mantén Blood Moon dentro: anula Eldrazi Temple y Ugin's Labyrinth de forma concluyente.",
                    "No confíes en Galvanic Discharge para matar a Emrakul: tiene protección contra instantáneos.",
                    "Presiona agresivamente con Ragavan y Ocelot Pride antes de que logren maná suficiente para All Is Dust."
                ]
            },
            {
                "vsDeckName": "Broodscale Combo",
                "difficulty": "favorable",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Wear/Tear",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Destruye Blade of the Bloodchief, el artefacto que activa el bucle infinito."
                    },
                    {
                        "cardName": "Surgical Extraction",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Exilia Blade of the Bloodchief de su baraja una vez caiga al cementerio."
                    },
                    {
                        "cardName": "Damping Sphere",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Ralentiza su rampa y castiga el bucle de maná."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Goblin Bombardment",
                        "quantity": 3,
                        "role": "out",
                        "reason": "No interactúa con su combo de forma directa."
                    },
                    {
                        "cardName": "Thraben Charm",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Wear/Tear cubre Blade y Urza's Saga de forma más eficiente."
                    }
                ],
                "gameplayTips": [
                    "Prioriza el removal inmediato con Galvanic Discharge sobre Basking Broodscale en cuanto toque mesa.",
                    "Destruir Blade of the Bloodchief apaga por completo su condición de victoria.",
                    "Surgical Extraction sobre Blade les deja sin su mejor vía de ataque infinito."
                ]
            },
            {
                "vsDeckName": "Izzet Prowess",
                "difficulty": "even",
                "role": "Midrange",
                "inCards": [
                    {
                        "cardName": "High Noon",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Restringe a 1 hechizo por turno, destrozando su motor de cantrips y Prowess."
                    },
                    {
                        "cardName": "Surgical Extraction",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Elimina copias restantes de Slickshot Show-Off o Lightning Bolt."
                    },
                    {
                        "cardName": "Sanctifier en-Vec",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Protección contra rojo y exilia cartas rojas del cementerio."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Blood Moon",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Tienen básicos y no les frena en absoluto."
                    },
                    {
                        "cardName": "Static Prison",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Lenta contra atacantes agresivos con prisa."
                    },
                    {
                        "cardName": "Seasoned Pyromancer",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Coste 3 demasiado vulnerable a salidas explosivas."
                    }
                ],
                "gameplayTips": [
                    "High Noon en mesa les imposibilita encadenar múltiples hechizos para hinchar a sus criaturas.",
                    "Sanctifier en-Vec bloquea a todas sus criaturas terrestres sin recibir daño alguno.",
                    "Usa Phlage como remate y estabilizador de vidas masivo en el midgame."
                ]
            }
        ]
    },
    {
        "id": "modern-goryos-vengeance",
        "slug": "modern-goryos-vengeance",
        "name": "Goryo's Vengeance",
        "metaPercentage": "4.4%",
        "metaCount": 245,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2f2-c3f2-78d7-b84e-f99333909772/variants/672/938/card_image.webp",
        "colors": [
            "W",
            "U",
            "B"
        ],
        "archetypeType": "Combo",
        "format": "modern",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/modern-goryos-vengeance#paper",
        "description": "Reanimación letal instantánea con Goryo's Vengeance y Atraxa, Grand Unifier, asegurando presencia infinita con parpadeos de Ephemerate.",
        "keyCards": [
            "Goryo's Vengeance",
            "Atraxa, Grand Unifier",
            "Griselbrand",
            "Ephemerate",
            "Psychic Frog",
            "Fallaji Archaeologist",
            "Tainted Indulgence",
            "Thoughtseize",
            "Prismatic Ending",
            "Fatal Push"
        ],
        "sideboardCards": [
            "Consign to Memory",
            "Prismatic Ending",
            "Leyline of Sanctity",
            "Fatal Push",
            "Teferi, Time Raveler",
            "Flusterstorm",
            "Toxic Deluge"
        ],
        "maybeboard": [
            {
                "name": "Dauthi Voidwalker",
                "note": "Presión alternativa que roba hechizos y bloquea evasivamente."
            },
            {
                "name": "Stern Scolding",
                "note": "Corta hate de criaturas como Drannith Magistrate o Dauthi."
            },
            {
                "name": "Subtlety",
                "note": "Respuesta gratuita para retrasar Phlage o Endurance rival."
            }
        ],
        "proTips": [
            "Goryo's Vengeance reanima a Atraxa a velocidad de instantáneo al final del turno rival; lanzar Ephemerate en tu turno la parpadea, eliminando el exilio de fin de turno y manteniéndola en mesa para siempre.",
            "Consign to Memory es tu mejor arma en 2026 contra Eldrazi y artefactos de odio, contrarrestando amenazas gigantes o hate en la pila por solo {U}.",
            "Si el rival despliega odio severo de cementerio (Rest in Peace, Sanctifier en-Vec), gana a través del plan beatdown con Psychic Frog y Orcish Bowmasters."
        ],
        "matchups": [
            {
                "vsDeckName": "Eldrazi Ramp",
                "difficulty": "favorable",
                "role": "Combo",
                "inCards": [
                    {
                        "cardName": "Consign to Memory",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Contrarresta por {U} a Emrakul, Devourer of Destiny y Kozilek's Command."
                    },
                    {
                        "cardName": "Prismatic Ending",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Elimina hate temprano y aceleradores de artefactos."
                    },
                    {
                        "cardName": "Leyline of Sanctity",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Protege tu mano de Thought-Knot Seer y disrupción dirigida."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Fatal Push",
                        "quantity": 3,
                        "role": "out",
                        "reason": "Inútil contra bichos incoloros gigantes de coste alto."
                    },
                    {
                        "cardName": "Orcish Bowmasters",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Sin impacto relevante en este emparejamiento."
                    },
                    {
                        "cardName": "Tainted Indulgence",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Ajuste de interacción para asegurar la protección del combo."
                    }
                ],
                "gameplayTips": [
                    "Reanimar Atraxa al final de su turno te permite robar 6-7 cartas y atacar al siguiente turno ganando vidas.",
                    "Consign to Memory frena a Kozilek's Command cuando intenten exiliar tu cementerio.",
                    "Leyline of Sanctity en turno 0 anula la disrupción de mano de Thought-Knot Seer."
                ]
            },
            {
                "vsDeckName": "Boros Energy",
                "difficulty": "even",
                "role": "Combo-Control",
                "inCards": [
                    {
                        "cardName": "Fatal Push",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Mata a Guide of Souls y Ocelot Pride antes de que acumulen recursos."
                    },
                    {
                        "cardName": "Toxic Deluge",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Limpia la mesa saltándose indestructibilidad."
                    },
                    {
                        "cardName": "Prismatic Ending",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Responde a Static Prison que exile a Atraxa."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Thoughtseize",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Perder 2 vidas acelera demasiado su reloj agresivo."
                    },
                    {
                        "cardName": "Ephemerate",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Ajuste de recursos de banquillo."
                    },
                    {
                        "cardName": "Fallaji Archaeologist",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Demasiado pasivo ante salidas explosivas."
                    }
                ],
                "gameplayTips": [
                    "Atraxa con Lifelink en turno 3 desbarata cualquier carrera de daño de Boros Energy.",
                    "Guarda Prismatic Ending para responder a Static Prison si encierran a tu criatura reanimada.",
                    "Cuidado con Surgical Extraction rival en el cementerio tras usar mill de Fallaji."
                ]
            },
            {
                "vsDeckName": "Jeskai Energy",
                "difficulty": "even",
                "role": "Combo",
                "inCards": [
                    {
                        "cardName": "Thoughtseize",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Quita counterspells o Subtlety antes de iniciar el combo."
                    },
                    {
                        "cardName": "Teferi, Time Raveler",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Impide que respondan a Goryo's Vengeance con contrahechizos."
                    },
                    {
                        "cardName": "Flusterstorm",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Gana la guerra de interacción en la pila."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Fatal Push",
                        "quantity": 3,
                        "role": "out",
                        "reason": "Poco efectivo contra mazos basados en control y planeswalkers."
                    },
                    {
                        "cardName": "Fallaji Archaeologist",
                        "quantity": 3,
                        "role": "out",
                        "reason": "Reemplazado por protección contra counterspells."
                    }
                ],
                "gameplayTips": [
                    "Teferi en mesa te asegura combar sin temor a Subtlety, Solitude o Wrath of the Skies.",
                    "Goryo a velocidad de instantáneo al final de su turno les fuerza a girar maná en su contra.",
                    "Si exilian a Atraxa con Solitude, responde con Ephemerate para salvarla y robar otra tanda de cartas."
                ]
            }
        ]
    },
    {
        "id": "modern-jeskai-energy",
        "slug": "modern-jeskai-energy",
        "name": "Jeskai Energy",
        "metaPercentage": "4.2%",
        "metaCount": 237,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2f0-0936-780b-9c54-40eb67534b50/variants/672/938/card_image.webp",
        "colors": [
            "U",
            "R",
            "W"
        ],
        "archetypeType": "Control",
        "format": "modern",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/modern-jeskai-energy#online",
        "description": "Muralla de control absoluto con Wrath of the Skies barriendo mesas, Galvanic Discharge eficiente y Phlage como finalizador inevitable.",
        "keyCards": [
            "Phlage, Titan of Fire's Fury",
            "Wrath of the Skies",
            "Galvanic Discharge",
            "Subtlety",
            "Teferi, Time Raveler",
            "Tune the Narrative",
            "Counterspell",
            "Solitude",
            "The One Ring",
            "Prismatic Ending"
        ],
        "sideboardCards": [
            "Consign to Memory",
            "Ashiok, Dream Render",
            "Mystical Dispute",
            "Stern Scolding",
            "Celestial Purge",
            "Wrath of the Skies",
            "Flusterstorm"
        ],
        "maybeboard": [
            {
                "name": "Narset, Parter of Veils",
                "note": "Corta robos adicionales de The One Ring y busca interacción."
            },
            {
                "name": "Rest in Peace",
                "note": "Hate total de cementerios si el meta tiene exceso de Reanimator."
            },
            {
                "name": "Obsidian Charmaw",
                "note": "Destruye tierras no básicas de rampa (Ugin's Labyrinth) entrando con descuento."
            }
        ],
        "proTips": [
            "Wrath of the Skies por {X}{W}{U} gasta energía para destruir todas las criaturas, artefactos y encantamientos de coste X o menor; barre Urza's Saga, Constructos y mesas anchas sin despeinarse.",
            "Ashiok, Dream Render desde el banquillo exilia cementerios rivales y anula los tutores de tierras de Sowing Mycospawn, Urza's Saga y Amulet Titan.",
            "Solitude o Phlage escapan del cementerio para cerrar partidas de desgaste larguísimas; asegúrate de no gastar toda la energía en removal innecesario."
        ],
        "matchups": [
            {
                "vsDeckName": "Eldrazi Ramp",
                "difficulty": "even",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Ashiok, Dream Render",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Corta búsquedas de biblioteca de Mycospawn y Urza's Saga, vaciando su cementerio."
                    },
                    {
                        "cardName": "Consign to Memory",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Contrarresta hechizos incoloros y habilidades disparadas por solo {U}."
                    },
                    {
                        "cardName": "Solitude",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Exilia a Emrakul esquivando su protección contra instantáneos."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Galvanic Discharge",
                        "quantity": 3,
                        "role": "out",
                        "reason": "Daño insuficiente frente a monstruos incoloros gigantes."
                    },
                    {
                        "cardName": "Wrath of the Skies",
                        "quantity": 2,
                        "role": "out",
                        "reason": "No alcanza a Emrakul (coste 13) de forma eficiente."
                    },
                    {
                        "cardName": "Tune the Narrative",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Ajuste de interacción para priorizar respuestas directas."
                    }
                ],
                "gameplayTips": [
                    "Ashiok neutraliza la rampa de Mycospawn y anula el Delirium de Shifting Woodland.",
                    "Solitude es tu respuesta directa a Emrakul: al ser invocación de criatura, se salta la protección de instantáneos.",
                    "Consign to Memory frena en seco Kozilek's Command y All Is Dust."
                ]
            },
            {
                "vsDeckName": "Izzet Prowess",
                "difficulty": "favorable",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Stern Scolding",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Corta Dragon's Rage Channeler y Slickshot Show-Off por un maná azul."
                    },
                    {
                        "cardName": "Mystical Dispute",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Cuesta {U} contra Expressive Iteration y Preordain."
                    },
                    {
                        "cardName": "Wrath of the Skies",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Limpia la mesa antes de que acumulen daño letal."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Teferi, Time Raveler",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Demasiado lento ante tanta agresividad en mesa."
                    },
                    {
                        "cardName": "The One Ring",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Poco margen para pagar 4 manás sin morir en el intento."
                    },
                    {
                        "cardName": "Counterspell",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Coste doble azul difícil mientras intentas lanzar removal rojo y blanco."
                    }
                ],
                "gameplayTips": [
                    "Galvanic Discharge y Stern Scolding deben usarse de inmediato para evitar que Slickshot Show-Off ataque.",
                    "Wrath of the Skies con X=2 barre toda su presencia de criaturas.",
                    "Phlage resolviendo en el midgame sella la partida con ganancia de vida recurrente."
                ]
            },
            {
                "vsDeckName": "Boros Energy (Mirror/Hermano)",
                "difficulty": "even",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Wrath of the Skies",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Barre criaturas, tokens y encantamientos acumuladores de energía."
                    },
                    {
                        "cardName": "Celestial Purge",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Exilia a Phlage y Blood Moon de forma limpia e irreversible."
                    },
                    {
                        "cardName": "Ashiok, Dream Render",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Vacía su cementerio evitando el escape de Phlage."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Subtlety",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Solo retrasa temporalmente criaturas de bajo coste."
                    },
                    {
                        "cardName": "Counterspell",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Demasiado lento contra salidas de Guide of Souls y Ocelot Pride."
                    },
                    {
                        "cardName": "Tune the Narrative",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Reemplazado por hate directo de cementerio."
                    }
                ],
                "gameplayTips": [
                    "Quien mejor controle el cementerio y el escape de Phlage gana el emparejamiento; Ashiok y Celestial Purge exilian a Phlage definitivamente.",
                    "Wrath of the Skies reinicia mesas descontroladas de Ocelot Pride y Ajani.",
                    "No te precipites en escapar a tu propio Phlage si sospechas Celestial Purge o Static Prison rival."
                ]
            }
        ]
    },
    {
        "id": "modern-ruby-storm",
        "slug": "modern-ruby-storm",
        "name": "Ruby Storm",
        "metaPercentage": "3.9%",
        "metaCount": 217,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2f0-07fe-7c89-ae89-ab86e3b554b4/variants/672/938/card_image.webp",
        "colors": [
            "R"
        ],
        "archetypeType": "Combo",
        "format": "modern",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/modern-ruby-storm#online",
        "description": "Explosión ininterrumpida de tormenta roja con Ruby Medallion, Ral, Monsoon Mage, rituales infinitos y remate letal con Grapeshot.",
        "keyCards": [
            "Ruby Medallion",
            "Ral, Monsoon Mage",
            "Desperate Ritual",
            "Pyretic Ritual",
            "Manamorphose",
            "Grapeshot",
            "Past in Flames",
            "Wish",
            "Reckless Impulse",
            "Wrenn's Resolve"
        ],
        "sideboardCards": [
            "Abrade",
            "Defense Grid",
            "Empty the Warrens",
            "Lightning Bolt",
            "Flame Slash",
            "Shattering Spree",
            "Consign to Memory"
        ],
        "maybeboard": [
            {
                "name": "Veil of Summer",
                "note": "Splash verde para apagar counterspells y descarte negro."
            },
            {
                "name": "Blood Moon",
                "note": "Hate sorpresivo para castigar bases no básicas."
            },
            {
                "name": "Grapeshot (Copia extra)",
                "note": "Objetivo directo de Wish desde el banquillo."
            }
        ],
        "proTips": [
            "Ral, Monsoon Mage reduce costes y al lanzar instantáneos o conjuros tira moneda; al transformarse en Planeswalker, su -2 duplica tu próximo ritual o Grapeshot para daño letal instantáneo.",
            "Cuidado extremo con High Noon, Trinisphere, Damping Sphere y Vexing Bauble: debes incluir Abrade o Smash to Smithereens para destruirlos antes de iniciar tu cadena de tormenta.",
            "Consign to Memory rival puede contrarrestar el disparo de Storm de Grapeshot o Past in Flames; ten preparada una victoria alternativa vía Empty the Warrens si el cementerio está vigilado."
        ],
        "matchups": [
            {
                "vsDeckName": "Boros / Jeskai Energy",
                "difficulty": "even",
                "role": "Combo",
                "inCards": [
                    {
                        "cardName": "Abrade",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Rompe Damping Sphere, High Noon o Vexing Bauble rivales."
                    },
                    {
                        "cardName": "Defense Grid",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Apaga Galvanic Discharge, Subtlety y Flusterstorm en tu turno de combo."
                    },
                    {
                        "cardName": "Empty the Warrens",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Condición de victoria alternativa si tienen hate contra Grapeshot."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Past in Flames",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Vulnerable a Surgical Extraction y hate de cementerio."
                    },
                    {
                        "cardName": "Manamorphose",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Ajuste de cartas para meter protección contra odio."
                    },
                    {
                        "cardName": "Lightning Bolt",
                        "quantity": 3,
                        "role": "out",
                        "reason": "Poco eficiente si necesitamos combar lo más rápido posible."
                    }
                ],
                "gameplayTips": [
                    "Abrade destruye High Noon o Damping Sphere antes de iniciar la cadena de rituales.",
                    "Defense Grid en turno 2 te da vía libre completa para combar en turno 3.",
                    "Empty the Warrens con tormenta 6-8 genera una legión de trasgos imposible de frenar por ataques terrestres."
                ]
            },
            {
                "vsDeckName": "Eldrazi Ramp",
                "difficulty": "favorable",
                "role": "Combo",
                "inCards": [
                    {
                        "cardName": "Abrade",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Destruye Chalice of the Void o Trinisphere tempranos."
                    },
                    {
                        "cardName": "Empty the Warrens",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Sobrepasa bloqueadores gigantes con multitud de atacantes."
                    },
                    {
                        "cardName": "Dismember",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Mata a Thought-Knot Seer antes de que desmonte tu mano."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Manamorphose",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Ajuste de banquillo."
                    },
                    {
                        "cardName": "Past in Flames",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Lento si te colocan Trinisphere en mesa."
                    },
                    {
                        "cardName": "Grapeshot",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Empty the Warrens es más eficaz contra amenazas gigantes."
                    }
                ],
                "gameplayTips": [
                    "Chalice of the Void o Trinisphere rival deben destruirse con Abrade antes de iniciar el turno de tormenta.",
                    "Crea 12+ trasgos con Empty the Warrens en turno 2 para ganar la carrera antes de que bajen a Emrakul.",
                    "No acumules cartas innecesariamente si sospechas Thought-Knot Seer en turno 2."
                ]
            },
            {
                "vsDeckName": "Izzet Prowess",
                "difficulty": "even",
                "role": "Combo",
                "inCards": [
                    {
                        "cardName": "Lightning Bolt",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Elimina a Slickshot Show-Off o Swiftspear de inmediato."
                    },
                    {
                        "cardName": "Abrade",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Mata criaturas o rompe artefactos molestos."
                    },
                    {
                        "cardName": "Flame Slash",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Mata criaturas con Prowess infladas por 1 maná."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Past in Flames",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Demasiado lento frente a daño en turno 3."
                    },
                    {
                        "cardName": "Wish",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Partida decidida por velocidad pura."
                    },
                    {
                        "cardName": "Manamorphose",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Ajuste para añadir interactividad de daño."
                    }
                ],
                "gameplayTips": [
                    "Es una carrera pura de velocidad hacia el turno 3.",
                    "Mata a Slickshot Show-Off en cuanto toque mesa para frenar su daño explosivo.",
                    "Ral, Monsoon Mage puede bloquear y transformarse absorbiendo daño crucial."
                ]
            }
        ]
    },
    {
        "id": "modern-broodscale-combo",
        "slug": "modern-broodscale-combo",
        "name": "Basking Broodscale Combo",
        "metaPercentage": "3.3%",
        "metaCount": 185,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2f3-c584-7a19-a1b7-4a0bfa5113d7/variants/672/938/card_image.webp",
        "colors": [
            "G"
        ],
        "archetypeType": "Combo",
        "format": "modern",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/modern-broodscale-combo#paper",
        "description": "Bucle infinito con Basking Broodscale y Blade of the Bloodchief generando maná incoloro infinito, fichas de Eldrazi Spawn y un atacante de fuerza infinita.",
        "keyCards": [
            "Basking Broodscale",
            "Blade of the Bloodchief",
            "Sadistic Glee",
            "Metallic Mimic",
            "Chord of Calling",
            "Malevolent Rumble",
            "Urza's Saga",
            "Ancient Stirrings",
            "Haywire Mite",
            "Springleaf Drum"
        ],
        "sideboardCards": [
            "Pick Your Poison",
            "Nature's Claim",
            "Dismember",
            "Trinisphere",
            "Thought-Knot Seer",
            "Veil of Summer",
            "Haywire Mite"
        ],
        "maybeboard": [
            {
                "name": "Endurance",
                "note": "Hate de cementerio instantáneo que aporta cuerpo 3/4 con Reach."
            },
            {
                "name": "Cavern of Souls",
                "note": "Asegura la entrada incounterable de Basking Broodscale contra control."
            },
            {
                "name": "Chalice of the Void",
                "note": "Hate temprano contra cantrips y mazos de Prowess."
            }
        ],
        "proTips": [
            "El bucle infinito: Basking Broodscale equipado con Blade of the Bloodchief (o encantado con Sadistic Glee) genera un Eldrazi Spawn al recibir un contador; sacrificas el Spawn para {C}, disparando Blade para poner otro contador sobre Broodscale y crear otro Spawn, logrando maná incoloro infinito y una criatura con fuerza infinita.",
            "Urza's Saga busca Blade of the Bloodchief directamente en capítulo III, permitiendo ensamblar el combo sin necesidad de robarlo en mano.",
            "Cuidado con Wear/Tear, Dismember y Consign to Memory rival; guarda Chord of Calling para buscar respuestas de protección o combar al final del turno rival."
        ],
        "matchups": [
            {
                "vsDeckName": "Boros Energy",
                "difficulty": "even",
                "role": "Combo",
                "inCards": [
                    {
                        "cardName": "Pick Your Poison",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Destruye Blood Moon y Static Prison por un solo maná verde."
                    },
                    {
                        "cardName": "Nature's Claim",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Rompe encantamientos u odio de artefactos a velocidad instantánea."
                    },
                    {
                        "cardName": "Dismember",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Elimina Guide of Souls antes de que ganen vidas masivas."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Chord of Calling",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Demasiado pesado si el rival presiona con atacantes baratos."
                    },
                    {
                        "cardName": "Malevolent Rumble",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Ajuste de interacción directa."
                    },
                    {
                        "cardName": "Springleaf Drum",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Vulnerable al removal de artefactos rival."
                    }
                ],
                "gameplayTips": [
                    "Destruye Blood Moon y Static Prison con Pick Your Poison o Nature's Claim para liberar tu combo.",
                    "Dismember elimina Guide of Souls antes de que el rival acumule contadores de energía.",
                    "Combos en turno 3 son posibles si tienes Blade of the Bloodchief en mano y juegas Broodscale."
                ]
            },
            {
                "vsDeckName": "Eldrazi Ramp",
                "difficulty": "favorable",
                "role": "Combo",
                "inCards": [
                    {
                        "cardName": "Trinisphere",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Frena su tempo de rampa y disrupción temprana."
                    },
                    {
                        "cardName": "Thought-Knot Seer",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Despoja su mano de All Is Dust o Kozilek's Command."
                    },
                    {
                        "cardName": "Nature's Claim",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Destruye The One Ring o artefactos de rampa rivales."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Sadistic Glee",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Vulnerable a Kozilek's Command exiliando criaturas."
                    },
                    {
                        "cardName": "Dismember",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Poco daño contra criaturas gigantes incoloras."
                    },
                    {
                        "cardName": "Springleaf Drum",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Ajuste de interacción de banquillo."
                    }
                ],
                "gameplayTips": [
                    "Bajar Trinisphere o combar en turno 3 sobrepasa con creces la rampa de Eldrazi.",
                    "Thought-Knot Seer remueve All Is Dust o Kozilek's Command antes de que puedan lanzarlos.",
                    "Urza's Saga te garantiza encontrar Blade of the Bloodchief de forma inevitable."
                ]
            },
            {
                "vsDeckName": "Izzet Prowess",
                "difficulty": "even",
                "role": "Midrange-Combo",
                "inCards": [
                    {
                        "cardName": "Dismember",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Responde instantáneamente a Slickshot Show-Off."
                    },
                    {
                        "cardName": "Haywire Mite",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Gana vidas cruciales y bloquea atacantes terrestres."
                    },
                    {
                        "cardName": "Veil of Summer",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Protege tus piezas de combo frente a Stern Scolding o Lightning Bolt."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Chord of Calling",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Lento frente a la velocidad pura de Prowess."
                    },
                    {
                        "cardName": "Blade of the Bloodchief",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Difícil de combar si tienen removal constante; prioriza el control de mesa."
                    },
                    {
                        "cardName": "Malevolent Rumble",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Ajuste de interactividad."
                    }
                ],
                "gameplayTips": [
                    "Basking Broodscale actúa como un excelente bloqueador de criaturas terrestres rivales.",
                    "Haywire Mite exilia artefactos rivales y te proporciona vidas para salir del rango de quemadura.",
                    "Veil of Summer anula sus contrahechizos protegiendo tu jugada decisiva."
                ]
            }
        ]
    },
    {
        "id": "modern-azorius-control",
        "slug": "modern-azorius-control",
        "name": "Azorius Control",
        "metaPercentage": "3.1%",
        "metaCount": 172,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2ef-80f2-7747-85b3-75edfa4e955d/variants/672/938/card_image.webp",
        "colors": [
            "W",
            "U"
        ],
        "archetypeType": "Control",
        "format": "modern",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/modern-azorius-control#paper",
        "description": "El clásico indiscutible del control en Modern: Teferi, Time Raveler silenciando respuestas, Solitude y Supreme Verdict dominando la mesa.",
        "keyCards": [
            "Teferi, Time Raveler",
            "Solitude",
            "Subtlety",
            "Supreme Verdict",
            "Counterspell",
            "The One Ring",
            "Memory Deluge",
            "Prismatic Ending",
            "Celestial Purge",
            "Leyline Binding"
        ],
        "sideboardCards": [
            "Consign to Memory",
            "Ashiok, Dream Render",
            "Wrath of the Skies",
            "Celestial Purge",
            "Flusterstorm",
            "High Noon",
            "Damping Sphere"
        ],
        "maybeboard": [
            {
                "name": "Narset, Parter of Veils",
                "note": "Ahoga los robos de The One Ring rival y busca conjuros clave."
            },
            {
                "name": "Rest in Peace",
                "note": "Exilio absoluto de cementerios contra Reanimator y Living End."
            },
            {
                "name": "Dovin's Veto",
                "note": "Contrahechizo incounterable para guerras de control."
            }
        ],
        "proTips": [
            "Teferi, Time Raveler desactiva las mecánicas de cascada, storm y cualquier interacción instantánea rival; defiéndelo como tu recurso más valioso.",
            "Solitude evocado no es un instantáneo (es una criatura), lo que le permite exiliar legalmente a Emrakul, the Promised End a pesar de su protección contra instantáneos.",
            "Consign to Memory es tu mejor banquillo en 2026 frente a Eldrazi y Affinity: contrarresta hechizos incoloros y habilidades disparadas por solo un maná {U}."
        ],
        "matchups": [
            {
                "vsDeckName": "Eldrazi Ramp",
                "difficulty": "even",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Consign to Memory",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Contrarresta por {U} a Emrakul, Devourer of Destiny y Kozilek's Command."
                    },
                    {
                        "cardName": "Ashiok, Dream Render",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Corta la búsqueda de tierras de Mycospawn y Urza's Saga, vaciando el cementerio."
                    },
                    {
                        "cardName": "Celestial Purge",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Responde a Through the Breach o permanentes de apoyo."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Spell Snare",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Apenas tienen objetivos de coste 2 relevantes."
                    },
                    {
                        "cardName": "Prismatic Ending",
                        "quantity": 2,
                        "role": "out",
                        "reason": "No alcanza a monstruos gigantes de coste 4+."
                    },
                    {
                        "cardName": "Supreme Verdict",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Lenta si te bajan amenazas con protección o cast triggers letales."
                    }
                ],
                "gameplayTips": [
                    "Consign to Memory contrarresta las amenazas incoloras clave y los disparos de rampa de Mycospawn.",
                    "Ashiok exilia el cementerio y anula las reducciones de coste de Emrakul.",
                    "Solitude es tu respuesta directa para exiliar a Emrakul esquivando su protección de instantáneos."
                ]
            },
            {
                "vsDeckName": "Boros Energy",
                "difficulty": "favorable",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Wrath of the Skies",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Barre criaturas y artefactos de energía de un plumazo."
                    },
                    {
                        "cardName": "Celestial Purge",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Exilia a Phlage y Blood Moon de forma limpia e irreversible."
                    },
                    {
                        "cardName": "High Noon",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Frena su tempo agresivo impidiendo jugar más de una criatura por turno."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Counterspell",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Demasiado reactivo contra salidas de coste 1."
                    },
                    {
                        "cardName": "Subtlety",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Solo retrasa temporalmente criaturas de bajo coste."
                    },
                    {
                        "cardName": "The One Ring",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Poco margen de vidas para pagar costes de robo frente a daño directo."
                    }
                ],
                "gameplayTips": [
                    "Wrath of the Skies limpia tokens, criaturas de energía y encantamientos.",
                    "Celestial Purge exilia de raíz a Phlage impidiendo que vuelva del cementerio.",
                    "Teferi en mesa limita su interacción forzándolos a actuar solo a velocidad de conjuro."
                ]
            },
            {
                "vsDeckName": "Ruby Storm",
                "difficulty": "favorable",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Flusterstorm",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Contrarresta la cadena entera de tormenta de Grapeshot."
                    },
                    {
                        "cardName": "High Noon",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Restringe a 1 hechizo por turno, imposibilitando el combo por completo."
                    },
                    {
                        "cardName": "Damping Sphere",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Impone un impuesto de maná acumulativo a cada ritual sucesivo."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Solitude",
                        "quantity": 3,
                        "role": "out",
                        "reason": "Sin objetivos de criaturas relevantes en su baraja."
                    },
                    {
                        "cardName": "Supreme Verdict",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Completamente inútil en este emparejamiento."
                    },
                    {
                        "cardName": "Prismatic Ending",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Demasiado lenta frente al combo en turno 2-3."
                    }
                ],
                "gameplayTips": [
                    "High Noon o Damping Sphere en turno 2 cierran completamente el acceso a la victoria del rival.",
                    "Flusterstorm anula cualquier intento de ganar con Grapeshot.",
                    "Mantén mana abierto para Counterspell sobre Ruby Medallion o Ral, Monsoon Mage."
                ]
            }
        ]
    },
    {
        "id": "modern-amulet-titan",
        "slug": "modern-amulet-titan",
        "name": "Amulet Titan",
        "metaPercentage": "2.8%",
        "metaCount": 158,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2f0-21f5-7783-b7e6-646824e89ee8/variants/672/938/card_image.webp",
        "colors": [
            "G"
        ],
        "archetypeType": "Combo",
        "format": "modern",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/modern-amulet-titan#paper",
        "description": "Ingeniería de tierras magistral combinando Amulet of Vigor con Primeval Titan, bouncelands y Valakut para infligir daño letal en un solo turno.",
        "keyCards": [
            "Primeval Titan",
            "Amulet of Vigor",
            "Summoner's Pact",
            "Urza's Saga",
            "Cultivator Colossus",
            "Dryad of the Ilysian Grove",
            "Boseiju, Who Endures",
            "Simic Growth Chamber",
            "Valakut, the Molten Pinnacle",
            "The One Ring"
        ],
        "sideboardCards": [
            "Force of Vigor",
            "Endurance",
            "Collector Ouphe",
            "Consign to Memory",
            "Cavern of Souls",
            "Engineered Explosives",
            "Boseiju, Who Endures"
        ],
        "maybeboard": [
            {
                "name": "Tireless Tracker",
                "note": "Motor de ventaja en partidas largas contra mazos cargados de removal."
            },
            {
                "name": "Pithing Needle",
                "note": "Tutorizable con Urza's Saga contra caminantes o The One Ring."
            },
            {
                "name": "Ghost Quarter",
                "note": "Respuesta terrestre a Tron o tierras problemáticas rivales."
            }
        ],
        "proTips": [
            "Con Amulet of Vigor y Primeval Titan, busca Simic Growth Chamber + Hanweir Battlements (o Boros Garrison + Slayers' Stronghold) para darle prisa y atacar el mismo turno buscando Valakut, the Molten Pinnacle.",
            "Cuidado con Blood Moon y Damping Sphere: convierten tus bouncelands en productoras de 1 solo incoloro, desarmando la aceleración de Titan.",
            "Consign to Memory rival contrarresta los disparos de Amulet of Vigor y la habilidad de entrada de Primeval Titan: ten Boseiju preparado para destruir hate de artefactos."
        ],
        "matchups": [
            {
                "vsDeckName": "Boros / Jeskai Energy",
                "difficulty": "even",
                "role": "Combo",
                "inCards": [
                    {
                        "cardName": "Force of Vigor",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Destruye Blood Moon, Static Prison y hate de artefactos sin pagar maná."
                    },
                    {
                        "cardName": "Endurance",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Frena el escape de Phlage en momentos decisivos y bloquea por tierra."
                    },
                    {
                        "cardName": "Cavern of Souls",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Asegura la entrada incounterable de Primeval Titan nombrando Gigante."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Summoner's Pact",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Peligroso si el rival lleva disrupción de maná."
                    },
                    {
                        "cardName": "Cultivator Colossus",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Demasiado pesado frente a presión rápida."
                    },
                    {
                        "cardName": "Explore",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Ajuste de interactividad de banquillo."
                    }
                ],
                "gameplayTips": [
                    "Force of Vigor responde a Blood Moon y Static Prison en respuesta a su lanzamiento.",
                    "Endurance frena el escape de Phlage vaciando su cementerio.",
                    "Cavern of Souls garantiza que Primeval Titan resuelva a través de Counterspell y Subtlety."
                ]
            },
            {
                "vsDeckName": "Eldrazi Ramp",
                "difficulty": "even",
                "role": "Combo",
                "inCards": [
                    {
                        "cardName": "Collector Ouphe",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Apaga Springleaf Drum, Talismanes y The One Ring rivales."
                    },
                    {
                        "cardName": "Force of Vigor",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Rompe Urza's Saga y Ugin's Labyrinth de forma instantánea."
                    },
                    {
                        "cardName": "Consign to Memory",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Contrarresta All Is Dust y Kozilek's Command."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Explore",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Reemplazado por respuestas directas contra artefactos."
                    },
                    {
                        "cardName": "Radiant Fountain",
                        "quantity": 1,
                        "role": "out",
                        "reason": "El lifegain no es prioritario contra criaturas gigantes."
                    },
                    {
                        "cardName": "Cultivator Colossus",
                        "quantity": 3,
                        "role": "out",
                        "reason": "Ajuste de velocidad para no atascarse ante monstruos incoloros."
                    }
                ],
                "gameplayTips": [
                    "Collector Ouphe apaga totalmente las fuentes de activación de artefactos rivales.",
                    "Force of Vigor rompe Urza's Saga antes de que cree constructos.",
                    "Boseiju, Who Endures responde a tierras no básicas como Eldrazi Temple a velocidad incounterable."
                ]
            },
            {
                "vsDeckName": "Izzet Prowess",
                "difficulty": "even",
                "role": "Combo",
                "inCards": [
                    {
                        "cardName": "Engineered Explosives",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Con X=1 limpia toda su mesa de atacantes agresivos de bajo coste."
                    },
                    {
                        "cardName": "Endurance",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Cuerpo 3/4 con Reach que bloquea a Dragon's Rage Channeler y frena Delirium."
                    },
                    {
                        "cardName": "Force of Vigor",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Destruye Cori-Steel Cutter y artefactos rápidos."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Cultivator Colossus",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Demasiado lento ante tanta agresividad en mesa."
                    },
                    {
                        "cardName": "Summoner's Pact",
                        "quantity": 1,
                        "role": "out",
                        "reason": "Pagar 4 manás el siguiente turno puede costar la partida."
                    },
                    {
                        "cardName": "Urza's Saga",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Lenta para generar constructos frente a daño en turno 3."
                    }
                ],
                "gameplayTips": [
                    "Engineered Explosives con X=1 barre a Monastery Swiftspear y Dragon's Rage Channeler.",
                    "Endurance con Reach frena en seco los ataques aéreos de Slickshot Show-Off y Channeler.",
                    "Busca Radiant Fountain para salir del alcance de su daño de quemadura."
                ]
            }
        ]
    },
    {
        "id": "modern-tron",
        "slug": "modern-tron",
        "name": "Tron",
        "metaPercentage": "2.6%",
        "metaCount": 145,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2ef-90c3-7caf-8edf-a626d108d5ec/variants/672/938/card_image.webp",
        "colors": [
            "G"
        ],
        "archetypeType": "Ramp",
        "format": "modern",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/modern-tron#paper",
        "description": "El ensamblaje definitivo: Urza's Tower, Power Plant y Mine produciendo 7 manás en turno 3 para desplegar a Karn, The One Ring y titanes incoloros.",
        "keyCards": [
            "Urza's Tower",
            "Urza's Mine",
            "Urza's Power Plant",
            "Karn the Great Creator",
            "The One Ring",
            "Oblivion Stone",
            "All Is Dust",
            "Wurmcoil Engine",
            "Chromatic Sphere",
            "Ancient Stirrings"
        ],
        "sideboardCards": [
            "Nature's Claim",
            "Dismember",
            "Ensnaring Bridge",
            "Haywire Mite",
            "Chalice of the Void",
            "Sundering Titan",
            "Consign to Memory"
        ],
        "maybeboard": [
            {
                "name": "Trinisphere",
                "note": "Buscable con Karn the Great Creator para congelar a Storm y Prowess."
            },
            {
                "name": "Tormod's Crypt",
                "note": "Hate gratuito de cementerios tutorizable con Karn."
            },
            {
                "name": "Cityscape Leveler",
                "note": "Destrucción continua incolora al entrar y atacar con Unearth."
            }
        ],
        "proTips": [
            "Karn the Great Creator busca respuestas inmediatas en tu banquillo: Ensnaring Bridge contra mazos agresivos, Trinisphere contra Storm/Prowess o Sundering Titan contra mazos de 3+ colores.",
            "Si el rival juega Blood Moon, puedes responder con Nature's Claim o usar Oblivion Stone (cargando contadores de destino) para barrer la mesa independientemente de tus tipos de tierra.",
            "The One Ring te otorga protección contra todo durante un turno completo, dándote el respiro necesario para montar Tron y bajar Karn o Ulamog."
        ],
        "matchups": [
            {
                "vsDeckName": "Boros Energy",
                "difficulty": "even",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Nature's Claim",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Rompe Blood Moon y Static Prison en turno 2-3 de forma inmediata."
                    },
                    {
                        "cardName": "Dismember",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Elimina Guide of Souls y Ocelot Pride antes de que acumulen valor."
                    },
                    {
                        "cardName": "Haywire Mite",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Exilia encantamientos molestos y proporciona ganancia de vidas."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "The One Ring",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Poco margen de vidas para pagar costes de robo frente a ataques agresivos."
                    },
                    {
                        "cardName": "Relic of Progenitus",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Ajuste para meter interacción de destrucción de odio."
                    },
                    {
                        "cardName": "All Is Dust",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Demasiado cara si Blood Moon retrasa el montaje de Tron."
                    }
                ],
                "gameplayTips": [
                    "Nature's Claim es vital para romper Blood Moon en respuesta a su entrada y reactivar las tierras de Tron.",
                    "Karn the Great Creator buscando Ensnaring Bridge frena en seco a Phlage y atacantes terrestres.",
                    "Wurmcoil Engine estabiliza las vidas y desanima los ataques rivales."
                ]
            },
            {
                "vsDeckName": "Izzet Prowess",
                "difficulty": "even",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Chalice of the Void",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Con X=1 apaga cantrips, rayos y la mayoría de su mazo."
                    },
                    {
                        "cardName": "Dismember",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Mata a Slickshot Show-Off a velocidad instantánea."
                    },
                    {
                        "cardName": "Nature's Claim",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Destruye Cori-Steel Cutter y artefactos agresivos."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Karn Liberated",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Demasiado lento para lidiar con múltiples atacantes pequeños."
                    },
                    {
                        "cardName": "All Is Dust",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Curva 7 poco realista si sufrimos presión letal en turno 3."
                    },
                    {
                        "cardName": "Wurmcoil Engine",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Ajuste de velocidad para interactuar en turno 1-2."
                    }
                ],
                "gameplayTips": [
                    "Chalice of the Void con X=1 en turno 2 corta por completo su plan de juego.",
                    "Baja Trinisphere con Karn the Great Creator para que no puedan encadenar múltiples hechizos.",
                    "Prioriza sobrevivir y estabilizar vidas antes de buscar amenazas gigantes."
                ]
            },
            {
                "vsDeckName": "Eldrazi Ramp",
                "difficulty": "even",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Consign to Memory",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Contrarresta a Kozilek's Command, Emrakul y disparos de Mycospawn."
                    },
                    {
                        "cardName": "Nature's Claim",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Rompe The One Ring y artefactos de aceleración rivales."
                    },
                    {
                        "cardName": "Sundering Titan",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Buscable con Karn para destruir sus bosques y tierras duales."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Oblivion Stone",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Poco eficiente si sus criaturas tienen disparos de entrada devastadores."
                    },
                    {
                        "cardName": "Relic of Progenitus",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Apenas dependen del cementerio comparado con otros mazos."
                    },
                    {
                        "cardName": "Wurmcoil Engine",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Bloqueado o exiliado fácilmente por All Is Dust o Kozilek's Command."
                    }
                ],
                "gameplayTips": [
                    "Consign to Memory frena a Kozilek's Command y Emrakul por solo {U}.",
                    "Sundering Titan destruye sus tierras de color dejándolos sin acceso a maná verde.",
                    "Monta Tron lo antes posible para lanzar Ulamog o Karn antes de que bajen a sus titanes."
                ]
            }
        ]
    },
    {
        "id": "modern-rakdos-midrange",
        "slug": "modern-rakdos-midrange",
        "name": "Rakdos Midrange",
        "metaPercentage": "1.9%",
        "metaCount": 107,
        "imageUrl": "https://cards.mtggoldfish.com/images/019ce2f0-2cc9-703f-b26e-f1724a2d987a/variants/672/938/card_image.webp",
        "colors": [
            "B",
            "R"
        ],
        "archetypeType": "Midrange",
        "format": "modern",
        "author": "",
        "decklistUrl": "https://www.mtggoldfish.com/archetype/modern-rakdos-midrange#online",
        "description": "Dominio absoluto del desgaste con Orcish Bowmasters, Thoughtseize, Blood Moon castigando tierras no básicas y la versatilidad de Fable.",
        "keyCards": [
            "Orcish Bowmasters",
            "Thoughtseize",
            "Blood Moon",
            "Fatal Push",
            "Dauthi Voidwalker",
            "Fable of the Mirror-Breaker",
            "Kolaghan's Command",
            "Terminate",
            "Ragavan, Nimble Pilferer",
            "Lightning Bolt"
        ],
        "sideboardCards": [
            "Blood Moon",
            "Damping Sphere",
            "Engineered Explosives",
            "Toxic Deluge",
            "Trinisphere",
            "Flusterstorm",
            "Kolaghan's Command"
        ],
        "maybeboard": [
            {
                "name": "Sheoldred, the Apocalypse",
                "note": "Castiga a mazos de cantrips y The One Ring ganando vidas."
            },
            {
                "name": "Brotherhood's End",
                "note": "Barre criaturas pequeñas o destruye artefactos como The One Ring."
            },
            {
                "name": "Feed the Swarm",
                "note": "Respuesta negra para destruir encantamientos problemáticos como Leylines."
            }
        ],
        "proTips": [
            "Blood Moon es tu carta estrella en el formato actual: arruina totalmente a Eldrazi Temple, Ugin's Labyrinth, Urza's Saga y las bases maná de 5 colores de Domain Zoo.",
            "Dauthi Voidwalker exilia cartas en lugar de enviarlas al cementerio, anulando el Escape de Phlage, el combo de Goryo's Vengeance y el delirium de Shifting Woodland.",
            "Orcish Bowmasters castiga severamente los cantrips de Izzet Prowess (Preordain, Expressive Iteration) y los robos masivos de The One Ring."
        ],
        "matchups": [
            {
                "vsDeckName": "Eldrazi Ramp",
                "difficulty": "favorable",
                "role": "Midrange",
                "inCards": [
                    {
                        "cardName": "Blood Moon",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Inhabilita Eldrazi Temple y Ugin's Labyrinth por completo cortando su maná incoloro."
                    },
                    {
                        "cardName": "Damping Sphere",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Frena tierras de maná múltiple y castiga turnos de múltiples hechizos."
                    },
                    {
                        "cardName": "Kolaghan's Command",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Destruye artefactos de rampa y fuerza el descarte de amenazas gigantes."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Lightning Bolt",
                        "quantity": 3,
                        "role": "out",
                        "reason": "Inútil contra criaturas de resistencia 5+."
                    },
                    {
                        "cardName": "Fatal Push",
                        "quantity": 2,
                        "role": "out",
                        "reason": "No alcanza a monstruos gigantes de coste alto."
                    },
                    {
                        "cardName": "Orcish Bowmasters",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Apenas tienen robos adicionales que castigar."
                    }
                ],
                "gameplayTips": [
                    "Blood Moon o Damping Sphere en mesa les corta todo el plan de rampa de raíz.",
                    "Thoughtseize en turno 1 les quita su único acelerador o tutor temprano.",
                    "Dauthi Voidwalker puede lanzar gratis un All Is Dust o Kozilek's Command exiliado del rival."
                ]
            },
            {
                "vsDeckName": "Boros Energy",
                "difficulty": "even",
                "role": "Midrange",
                "inCards": [
                    {
                        "cardName": "Engineered Explosives",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Limpia tokens de Ocelot Pride y atacantes de coste 1."
                    },
                    {
                        "cardName": "Toxic Deluge",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Barre la mesa saltándose indestructibilidad."
                    },
                    {
                        "cardName": "Kolaghan's Command",
                        "quantity": 1,
                        "role": "in",
                        "reason": "Destruye artefactos de odio y recupera criaturas de tu cementerio."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Blood Moon",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Tienen básicos y su baraja de 2 colores opera bien bajo Montañas."
                    },
                    {
                        "cardName": "Thoughtseize",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Pagar 2 vidas ayuda a su agresividad temprana."
                    },
                    {
                        "cardName": "Fable of the Mirror-Breaker",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Lenta si te están atacando con criaturas hinchadas en turno 3."
                    }
                ],
                "gameplayTips": [
                    "Limpia tokens y criaturas pequeñas con Toxic Deluge antes de que se descontrolen.",
                    "Dauthi Voidwalker impide que Phlage toque el cementerio, bloqueando su capacidad de escape.",
                    "Fatal Push debe reservarse prioritariamente para Guide of Souls y Ocelot Pride."
                ]
            },
            {
                "vsDeckName": "Ruby Storm",
                "difficulty": "favorable",
                "role": "Control",
                "inCards": [
                    {
                        "cardName": "Damping Sphere",
                        "quantity": 3,
                        "role": "in",
                        "reason": "Impone un impuesto de maná acumulativo a cada ritual sucesivo."
                    },
                    {
                        "cardName": "Trinisphere",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Impide lanzar hechizos con reducción de costes por menos de 3 manás."
                    },
                    {
                        "cardName": "Flusterstorm",
                        "quantity": 2,
                        "role": "in",
                        "reason": "Contrarresta la cadena entera de tormenta de Grapeshot."
                    }
                ],
                "outCards": [
                    {
                        "cardName": "Fatal Push",
                        "quantity": 3,
                        "role": "out",
                        "reason": "Sin objetivos de criaturas relevantes en su baraja."
                    },
                    {
                        "cardName": "Terminate",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Completamente innecesario en este emparejamiento."
                    },
                    {
                        "cardName": "Kolaghan's Command",
                        "quantity": 2,
                        "role": "out",
                        "reason": "Demasiado lento frente al combo en turno 2-3."
                    }
                ],
                "gameplayTips": [
                    "Damping Sphere y Trinisphere apagan totalmente su motor de rituales y storm.",
                    "Thoughtseize en turno 1 quita Ruby Medallion o Ral, Monsoon Mage dejándolos atascados.",
                    "Dauthi Voidwalker exilia sus rituales e impide el uso de Past in Flames."
                ]
            }
        ]
    }
  ]);

  readonly searchQuery = signal<string>('');
  readonly filterArchetype = signal<string>('all');
  readonly selectedFormat = signal<MagicFormat>('pauper');

  readonly decks = this._decks.asReadonly();

  readonly pauperCount = computed(() =>
    this._decks().filter((d) => !d.format || d.format === 'pauper').length
  );

  readonly modernCount = computed(() =>
    this._decks().filter((d) => d.format === 'modern').length
  );

  readonly filteredDecks = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const type = this.filterArchetype();
    const currentFormat = this.selectedFormat();

    return this._decks().filter((deck) => {
      const deckFormat = deck.format || 'pauper';
      if (deckFormat !== currentFormat) {
        return false;
      }

      const matchesType = type === 'all' || deck.archetypeType.toLowerCase() === type.toLowerCase();
      const matchesQuery = !query ||
        deck.name.toLowerCase().includes(query) ||
        deck.description.toLowerCase().includes(query) ||
        deck.keyCards.some((k) => k.toLowerCase().includes(query));

      return matchesType && matchesQuery;
    });
  });

  getDeckBySlug(slug: string): PauperDeck | undefined {
    return this._decks().find((deck) => deck.slug === slug);
  }

  setSearch(query: string): void {
    this.searchQuery.set(query);
  }

  setFilter(type: string): void {
    this.filterArchetype.set(type);
  }

  setFormat(format: MagicFormat): void {
    this.selectedFormat.set(format);
  }
}
