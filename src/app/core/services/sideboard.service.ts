import { Injectable, computed, signal } from '@angular/core';
import { PauperDeck } from '../models/sideboard.model';

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
      id: 'tron',
      slug: 'tron',
      name: 'Tron',
      metaPercentage: '7.1%',
      metaCount: 183,
      imageUrl: 'https://cards.mtggoldfish.com/images/019ce2ef-3280-7dc4-a8a5-666164870afb/variants/672/938/card_image.webp',
      colors: ['W', 'U', 'B', 'R', 'G'],
      archetypeType: 'Ramp',
      description: 'Ensamble de las tres tierras de Urza para generar maná masivo y dominar con loops de hechizos e invulnerabilidad.',
      keyCards: ['Urza\'s Tower', 'Mnemonic Wall', 'Ephemerate', 'Mulldrifter', 'Ghostly Flicker'],
      sideboardCards: ['Weather the Storm', 'Stonehorn Dignitary', 'Pyroblast', 'Breath Weapon', 'Relic of Progenitus'],
      matchups: [
        {
          vsDeckName: 'Mono Red Madness',
          difficulty: 'even',
          role: 'Control / Combo',
          inCards: [
            { cardName: 'Weather the Storm', quantity: 3, role: 'in', reason: 'Gana 9-15 vidas en respuesta a sus turnos de tormenta/daño.' },
            { cardName: 'Stonehorn Dignitary', quantity: 2, role: 'in', reason: 'Bloquea fases de combate continuamente con Ephemerate.' }
          ],
          outCards: [
            { cardName: 'Mulldrifter', quantity: 2, role: 'out', reason: '5 manás es demasiado lento si estás bajo asedio directo.' },
            { cardName: 'Compulsive Research', quantity: 2, role: 'out', reason: 'Falta de interacción inmediata.' }
          ],
          gameplayTips: [
            'Busca activamente el verde para Weather the Storm.',
            'Una vez ensamblado el Tron, protege tu vida antes de buscar ventajas infinitas.'
          ]
        }
      ]
    },
    {
      id: 'elves',
      slug: 'elves',
      name: 'Elves',
      metaPercentage: '5.7%',
      metaCount: 147,
      imageUrl: 'https://cards.mtggoldfish.com/images/019ce2f0-0bc6-7dd5-afe0-19d7b418c5af/variants/672/938/card_image.webp',
      colors: ['G'],
      archetypeType: 'Aggro',
      description: 'Enjambre tribal capaz de generar cantidades absurdas de maná y robar todo el mazo con Lead the Stampede.',
      keyCards: ['Quirion Ranger', 'Wellwisher', 'Timberwatch Elf', 'Lead the Stampede', 'Lys Alana Huntmaster'],
      sideboardCards: ['Spider Silk Armor', 'Gleeful Sabotage', 'Prohibit', 'Hydroblast', 'Magnify'],
      matchups: [
        {
          vsDeckName: 'Mono Red Madness',
          difficulty: 'favorable',
          role: 'Aggro',
          inCards: [
            { cardName: 'Spider Silk Armor', quantity: 2, role: 'in', reason: 'Protege contra End the Festivities y daño masivo de resistencia 1.' },
            { cardName: 'Wellwisher', quantity: 1, role: 'in', reason: 'Victoria automática si sobrevive 1 turno.' }
          ],
          outCards: [
            { cardName: 'Distant Melody', quantity: 2, role: 'out', reason: 'Demasiado ambicioso en partidas cortas.' }
          ],
          gameplayTips: [
            'Haz mulligan hacia manos con criaturas de soporte temprano y no descuides la vida.'
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
      id: 'bogles',
      slug: 'bogles',
      name: 'Bogles',
      metaPercentage: '4.7%',
      metaCount: 120,
      imageUrl: 'https://cards.mtggoldfish.com/images/019ce2f0-1028-7163-8dc1-8a19fc6bf145/variants/672/938/card_image.webp',
      colors: ['G', 'W'],
      archetypeType: 'Aggro',
      description: 'Criaturas con Antimaleficio (Hexproof) potenciadas por auras brutales que otorgan arrollar, lifelink y stats descomunales.',
      keyCards: ['Slippery Bogle', 'Gladecover Scout', 'Armadillo Cloak', 'Ethereal Armor', 'Ancestral Mask'],
      sideboardCards: ['Flaring Pain', 'Standard Bearer', 'Lifelink', 'Gut Shot', 'Ram Through'],
      matchups: [
        {
          vsDeckName: 'Mono Red Madness',
          difficulty: 'favorable',
          role: 'Aggro',
          inCards: [
            { cardName: 'Lifelink', quantity: 2, role: 'in', reason: 'Garantiza vida inmediata incluso contra daño preventivo.' }
          ],
          outCards: [
            { cardName: 'Cartouche of Solidarity', quantity: 2, role: 'out', reason: 'Menor impacto.' }
          ],
          gameplayTips: [
            'Armadillo Cloak gana la partida por sí solo al ser daño enlazado.'
          ]
        }
      ]
    },
    {
      id: 'dimir-faeries',
      slug: 'dimir-faeries',
      name: 'Dimir Faeries',
      metaPercentage: '4.6%',
      metaCount: 117,
      imageUrl: 'https://cards.mtggoldfish.com/images/019ce2ef-f58a-775e-91a2-b988f45f108c/variants/672/938/card_image.webp',
      colors: ['U', 'B'],
      archetypeType: 'Control',
      description: 'Estrategia tempo/control voladora con el motor de Spellstutter Sprite, Ninja of the Deep Hours y removal negro eficiente.',
      keyCards: ['Spellstutter Sprite', 'Ninja of the Deep Hours', 'Snuff Out', 'Cast Down', 'Faerie Miscreant'],
      sideboardCards: ['Hydroblast', 'Suffocating Fumes', 'Nihil Spellbomb', 'Arms of Hadar', 'Annul'],
      matchups: [
        {
          vsDeckName: 'Mono Red Madness',
          difficulty: 'even',
          role: 'Tempo',
          inCards: [
            { cardName: 'Hydroblast', quantity: 4, role: 'in', reason: 'Contrarresta daño y Kessig.' }
          ],
          outCards: [
            { cardName: 'Snuff Out', quantity: 2, role: 'out', reason: 'Pagar 4 vidas contra mazo de quemadura es peligroso.' }
          ],
          gameplayTips: [
            'Controla el tempo y busca bajar Ninja con soporte de Hydroblast.'
          ]
        }
      ]
    },
    {
      id: 'spy-combo',
      slug: 'spy-combo',
      name: 'Spy Combo',
      metaPercentage: '3.9%',
      metaCount: 101,
      imageUrl: 'https://cards.mtggoldfish.com/images/019ce2f0-0f67-7e9a-939b-fa88f12eea41/variants/672/938/card_image.webp',
      colors: ['B', 'G'],
      archetypeType: 'Combo',
      description: 'Mazo combo de cero tierras que vacía la biblioteca entera en turno 1-3 y gana mediante Dread Return y Lotleth Giant.',
      keyCards: ['Balustrade Spy', 'Destroy the Evidence', 'Dread Return', 'Lotleth Giant', 'Land Grant'],
      sideboardCards: ['Duress', 'Flaring Pain', 'Ingot Chewer', 'Foundry Inspector', 'Tinder Wall'],
      matchups: [
        {
          vsDeckName: 'Mono Red Madness',
          difficulty: 'unfavorable',
          role: 'Combo',
          inCards: [
            { cardName: 'Duress', quantity: 4, role: 'in', reason: 'Quita Relic of Progenitus antes de combar.' }
          ],
          outCards: [
            { cardName: 'Tinder Wall', quantity: 2, role: 'out', reason: 'Ajuste.' }
          ],
          gameplayTips: [
            'Quita Relic antes de vaciar la biblioteca.'
          ]
        }
      ]
    },
    {
      id: 'jund-wildfire',
      slug: 'jund-wildfire',
      name: 'Jund Wildfire',
      metaPercentage: '3.8%',
      metaCount: 97,
      imageUrl: 'https://cards.mtggoldfish.com/images/019ce2ef-f737-716e-b76e-c3426c0501e4/variants/672/938/card_image.webp',
      colors: ['B', 'R', 'G'],
      archetypeType: 'Midrange',
      description: 'Rampa de tierras indestructible con Cleansing Wildfire + puentes, limpiando el tablero e imponiendo amenazas contundentes.',
      keyCards: ['Cleansing Wildfire', 'Writhing Chrysalis', 'Avenging Hunter', 'Cast Down', 'Lethal Scheme'],
      sideboardCards: ['Pyroblast', 'Cast into the Fire', 'Weather the Storm', 'Deglamer', 'Campfire'],
      matchups: [
        {
          vsDeckName: 'Mono Red Madness',
          difficulty: 'even',
          role: 'Midrange',
          inCards: [
            { cardName: 'Weather the Storm', quantity: 3, role: 'in', reason: 'Recupera rango seguro de vidas.' },
            { cardName: 'Campfire', quantity: 2, role: 'in', reason: 'Ganancia de vida y recuperación.' }
          ],
          outCards: [
            { cardName: 'Lethal Scheme', quantity: 2, role: 'out', reason: 'Demasiado costoso.' }
          ],
          gameplayTips: [
            'Prioriza Writhing Chrysalis para generar Eldrazi Scions bloqueadores.'
          ]
        }
      ]
    },
    {
      id: 'white-aggro',
      slug: 'white-aggro',
      name: 'White Aggro',
      metaPercentage: '2.5%',
      metaCount: 65,
      imageUrl: 'https://cards.mtggoldfish.com/images/019ce2ef-98e6-7f07-b81c-361cdf964043/variants/672/938/card_image.webp',
      colors: ['W'],
      archetypeType: 'Aggro',
      description: 'Criaturas blancas agresivas con ventaja de cartas mediante artefactos reciclables, Glint Hawk y Kor Skyfisher.',
      keyCards: ['Thraben Inspector', 'Glint Hawk', 'Kor Skyfisher', 'Novice Inspector', 'Journey to Nowhere'],
      sideboardCards: ['Dust to Dust', 'Prismatic Strands', 'Destroy Evil', 'Dawnbringer Cleric', 'Standard Bearer'],
      matchups: [
        {
          vsDeckName: 'Mono Red Madness',
          difficulty: 'even',
          role: 'Midrange',
          inCards: [
            { cardName: 'Prismatic Strands', quantity: 4, role: 'in', reason: 'Previene daño rojo repetidamente.' },
            { cardName: 'Dawnbringer Cleric', quantity: 2, role: 'in', reason: 'Gana vidas y bloquea.' }
          ],
          outCards: [
            { cardName: 'Journey to Nowhere', quantity: 2, role: 'out', reason: 'Lento.' }
          ],
          gameplayTips: [
            'Protege tu vida con Strands y Cleric.'
          ]
        }
      ]
    }
  ]);

  readonly searchQuery = signal<string>('');
  readonly filterArchetype = signal<string>('all');

  readonly decks = this._decks.asReadonly();

  readonly filteredDecks = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const type = this.filterArchetype();

    return this._decks().filter((deck) => {
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
}
