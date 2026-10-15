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
