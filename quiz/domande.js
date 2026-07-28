const TITOLI = {
  normativa:     'Normativa — Codice della Navigazione',
  meteorologia:  'Meteorologia — Vento, Maree e Tempo',
  navigazione:   'Navigazione — Carte e Strumenti',
  segnalamento:  'Segnalamento — Luci, Boe e Segnali',
  sicurezza:     'Sicurezza in Mare',
  manovre:       'Manovre — Ormeggio e Manovre',
  motore:        'Motore e Meccanica',
  vela:          'Teoria della Vela',
};

const DOMANDE = {

  /* ══════════════════════════════════════════════
     01 — NORMATIVA
  ══════════════════════════════════════════════ */
  normativa: [
    {
      q: 'Due imbarcazioni a motore si incrociano: una viene da destra. Chi ha la precedenza?',
      opts: ['Chi viene da sinistra', 'Chi viene da destra', 'La più grande', 'Quella più veloce'],
      correct: 1,
      tip: 'Regola COLREG: chi ha l\'altra barca alla propria dritta deve cedere la precedenza.'
    },
    {
      q: 'Cosa deve fare chi ha la precedenza in una situazione di incrocio?',
      opts: ['Accelerare', 'Mantenere rotta e velocità', 'Accostare a sinistra', 'Fischiare tre volte'],
      correct: 1,
      tip: 'Chi ha la precedenza mantiene rotta e velocità per rendersi prevedibile.'
    },
    {
      q: 'Una barca a vela e una a motore si incrociano. Chi cede?',
      opts: ['La barca a vela', 'La barca a motore', 'Chi è più piccolo', 'Dipende dalla rotta'],
      correct: 1,
      tip: 'La barca a motore cede sempre alla barca a vela, salvo che quest\'ultima stia sorpassando.'
    },
    {
      q: 'Chi sta sorpassando un\'altra imbarcazione deve:',
      opts: ['Fischiare due volte e passare', 'Cedere sempre la precedenza a chi viene sorpassato', 'Passare a dritta', 'Accelerare per ridurre il tempo di sorpasso'],
      correct: 1,
      tip: 'Chi sorpassa cede la precedenza all\'imbarcazione sorpassata, anche se è a motore contro una a vela.'
    },
    {
      q: 'Due barche a motore si avvicinano prua contro prua. Come devono manovrare?',
      opts: ['Entrambe accostano a sinistra', 'Entrambe accostano a dritta', 'Quella più piccola cede', 'Quella a motore diesel cede'],
      correct: 1,
      tip: 'Prua contro prua: entrambe accostano a dritta, passandosi fianco sinistro (babordo).'
    },
    {
      q: 'Qual è il limite massimo di alcolemia consentito al conduttore di un\'imbarcazione?',
      opts: ['0,2 g/l', '0,5 g/l', '0,8 g/l', '1,0 g/l'],
      correct: 1,
      tip: 'Il limite è 0,5 g/l come per gli automobilisti. A 0,8 g/l scatta il reato penale.'
    },
    {
      q: 'Il comandante di un\'imbarcazione ha l\'obbligo di soccorso verso:',
      opts: ['Solo le barche dello stesso tipo', 'Chiunque sia in pericolo in mare, salvo pericolo grave per la propria imbarcazione', 'Solo i propri passeggeri', 'Solo le barche battenti stessa bandiera'],
      correct: 1,
      tip: 'L\'obbligo di soccorso è assoluto e si applica a chiunque sia in pericolo. La sola eccezione è il pericolo grave per la propria imbarcazione.'
    },
    {
      q: 'La "velocità di sicurezza" in navigazione è:',
      opts: ['La velocità massima del motore', 'La velocità indicata sulle carte nautiche', 'La velocità che consente manovre appropriate e l\'arresto entro distanza adeguata', 'Sempre meno di 5 nodi'],
      correct: 2,
      tip: 'Non è un valore fisso: dipende da visibilità, traffico, manovrabilità della barca e condizioni del mare.'
    },
    {
      q: 'Quale documento certifica che l\'imbarcazione rispetta i requisiti di sicurezza?',
      opts: ['Licenza di navigazione', 'Certificato di sicurezza', 'Polizza assicurativa', 'Patente nautica'],
      correct: 1,
      tip: 'Il certificato di sicurezza attesta la conformità dell\'imbarcazione ai requisiti normativi. Ha una scadenza e va rinnovato.'
    },
    {
      q: 'La patente nautica entro 12 miglia abilita a navigare:',
      opts: ['Solo in acque interne', 'Fino a 12 miglia dalla costa', 'Senza limiti di distanza dalla costa', 'Solo di giorno'],
      correct: 1,
      tip: 'La distanza si misura dal punto della costa più vicino. Per navigare oltre le 12 miglia serve l\'abilitazione estesa.'
    },
    {
      q: 'L\'assicurazione RC (responsabilità civile) a bordo è:',
      opts: ['Facoltativa', 'Obbligatoria per barche a motore con potenza > 40,8 kW', 'Obbligatoria per tutte le imbarcazioni', 'Obbligatoria solo in alto mare'],
      correct: 2,
      tip: 'L\'assicurazione RC verso terzi è obbligatoria per tutte le imbarcazioni da diporto, indipendentemente dalla potenza.'
    },
    {
      q: 'Cosa si intende per "colpa nautica"?',
      opts: ['Navigare senza patente', 'Negligenza, imprudenza o imperizia nella condotta dell\'imbarcazione', 'Superare i limiti di velocità', 'Non avere i documenti a bordo'],
      correct: 1,
      tip: 'La colpa nautica è alla base della responsabilità civile e penale del comandante in caso di incidente.'
    },
  ],

  /* ══════════════════════════════════════════════
     02 — METEOROLOGIA
  ══════════════════════════════════════════════ */
  meteorologia: [
    {
      q: 'A quale forza Beaufort corrispondono venti di 17–21 nodi?',
      opts: ['Forza 3', 'Forza 4', 'Forza 5', 'Forza 6'],
      correct: 2,
      tip: 'Forza 5 (brezza tesa): 17–21 nodi. Onde di circa 2 m, schiuma estesa.'
    },
    {
      q: 'Come si chiama il centro di bassa pressione su una carta meteorologica?',
      opts: ['Anticiclone', 'Isobare', 'Ciclone (depressione)', 'Fronte caldo'],
      correct: 2,
      tip: 'Il ciclone o depressione è indicato con "L" (Low). Il vento vi ruota in senso antiorario nell\'emisfero Nord.'
    },
    {
      q: 'Cosa indicano isobare molto ravvicinate su una carta meteo?',
      opts: ['Tempo stabile', 'Vento forte', 'Alta temperatura', 'Mare calmo'],
      correct: 1,
      tip: 'Più le isobare sono fitte, maggiore è il gradiente di pressione e quindi più forte il vento.'
    },
    {
      q: 'Le maree di massima escursione si chiamano:',
      opts: ['Quadrature', 'Sizigie', 'Correnti di marea', 'Maree morte'],
      correct: 1,
      tip: 'Le sizigie si verificano con Luna piena o nuova, quando Luna, Sole e Terra sono allineati.'
    },
    {
      q: 'Su quale canale VHF si trasmette il bollettino meteo marino in Italia?',
      opts: ['Canale 16', 'Canale 68', 'Canale 22', 'Canale 9'],
      correct: 1,
      tip: 'Il canale 68 VHF è usato per i bollettini meteo; il canale 16 è il canale di emergenza/chiamata.'
    },
    {
      q: 'Da dove proviene il "vento di Tramontana"?',
      opts: ['Da Sud', 'Da Est', 'Da Nord', 'Da Ovest'],
      correct: 2,
      tip: 'La Tramontana proviene da Nord: è fredda e secca, porta mare formato ma cielo spesso sereno. Il vento è indicato dalla direzione da cui soffia.'
    },
    {
      q: '1 nodo equivale a:',
      opts: ['1 km/h', '1,609 km/h', '1,852 km/h', '2,0 km/h'],
      correct: 2,
      tip: '1 nodo = 1 miglio nautico/ora = 1,852 km/h. È l\'unità di misura standard per la velocità in mare.'
    },
    {
      q: 'Un fronte freddo porta generalmente:',
      opts: ['Piogge lunghe e progressive, poi stabile', 'Temporali brevi e intensi, poi rasserenamento rapido', 'Nebbia persistente', 'Vento calante e mare piatto'],
      correct: 1,
      tip: 'Il fronte freddo è caratterizzato da temporali violenti ma brevi. Dopo il passaggio il tempo migliora rapidamente.'
    },
    {
      q: 'Le maree di minima escursione (maree morte) si verificano:',
      opts: ['Con la luna piena', 'Con la luna nuova', 'Quando Luna e Sole sono in quadratura', 'In equinozio'],
      correct: 2,
      tip: 'Le quadrature (primo e ultimo quarto di Luna) producono le maree di minima escursione perché le forze di Luna e Sole sono perpendicolari.'
    },
    {
      q: 'Cosa si intende per "visibilità scarsa" nel bollettino meteo marino?',
      opts: ['Visibilità inferiore a 10 nm', 'Visibilità inferiore a 1 nm', 'Visibilità inferiore a 5 nm', 'Presenza di foschia'],
      correct: 1,
      tip: 'Buona > 5 nm; moderata 1–5 nm; scarsa < 1 nm; nebbia < 0,5 nm. Con visibilità scarsa è obbligatorio il segnale sonoro.'
    },
    {
      q: 'Lo Scirocco è un vento che proviene da:',
      opts: ['Nord-Ovest', 'Nord-Est', 'Sud-Est', 'Sud-Ovest'],
      correct: 2,
      tip: 'Lo Scirocco (o Sirocco) proviene da Sud-Est: porta aria calda e umida dal Sahara, spesso con polvere rossa e mare lungo.'
    },
    {
      q: 'Qual è il significato di "forza 0 Beaufort"?',
      opts: ['Vento leggero, mare mosso', 'Bonaccia, specchio d\'olio, meno di 1 nodo', 'Brezza, increspature', 'Calma piatta, solo corrente'],
      correct: 1,
      tip: 'Forza 0 = bonaccia. Il mare è piatto come uno specchio, il vento è praticamente assente (< 1 nodo).'
    },
  ],

  /* ══════════════════════════════════════════════
     03 — NAVIGAZIONE
  ══════════════════════════════════════════════ */
  navigazione: [
    {
      q: 'Cos\'è la variazione magnetica?',
      opts: ['La deviazione causata dai metalli a bordo', 'L\'angolo tra il Nord geografico e il Nord magnetico', 'La differenza di rotta tra andata e ritorno', 'L\'errore del GPS'],
      correct: 1,
      tip: 'La variazione magnetica è indicata sulla carta nautica e dipende dalla posizione geografica. Cambia lentamente ogni anno.'
    },
    {
      q: 'La formula corretta per calcolare la rotta vera è:',
      opts: ['Rv = Rb − Dev − Var', 'Rv = Rb + Dev + Var', 'Rv = Rb × Dev', 'Rv = Rb / Var'],
      correct: 1,
      tip: 'Rv = Rotta vera; Rb = Rotta bussola; Dev = deviazione bussola; Var = variazione magnetica. E = positivo, W = negativo.'
    },
    {
      q: 'Un miglio nautico equivale a:',
      opts: ['1000 m', '1609 m', '1852 m', '2000 m'],
      correct: 2,
      tip: '1 miglio nautico = 1852 m, corrispondente a 1 minuto di latitudine sull\'equatore.'
    },
    {
      q: 'Su quale proiezione sono costruite le carte nautiche standard?',
      opts: ['Proiezione di Peters', 'Proiezione di Mercatore', 'Proiezione conica', 'Proiezione zenitale'],
      correct: 1,
      tip: 'La proiezione di Mercatore conserva le direzioni (angoli), rendendo le rotte lossodromiche linee rette.'
    },
    {
      q: 'Con una velocità di 6 nodi, quante miglia percorro in 2 ore?',
      opts: ['6 miglia', '10 miglia', '12 miglia', '18 miglia'],
      correct: 2,
      tip: 'S = V × T → 6 nodi × 2 ore = 12 miglia nautiche.'
    },
    {
      q: '1 minuto di latitudine corrisponde a:',
      opts: ['1 km', '1 miglio nautico (1852 m)', '1 miglio terrestre (1609 m)', '100 m'],
      correct: 1,
      tip: 'È la definizione stessa di miglio nautico: 1\' (un primo) di arco di meridiano = 1852 m.'
    },
    {
      q: 'La deviazione della bussola è causata da:',
      opts: ['La posizione geografica', 'I metalli e gli apparati elettronici a bordo', 'La velocità dell\'imbarcazione', 'Le correnti marine'],
      correct: 1,
      tip: 'La deviazione dipende dall\'imbarcazione stessa (metalli, motore, strumenti). Va tabulata per ogni rotta.'
    },
    {
      q: 'Cosa misura il loch?',
      opts: ['La profondità dell\'acqua', 'La velocità e la distanza percorsa rispetto all\'acqua', 'La temperatura dell\'acqua', 'La velocità del vento'],
      correct: 1,
      tip: 'Il loch misura la velocità "sull\'acqua", non "sul fondo". La differenza è causata dalle correnti.'
    },
    {
      q: 'Cosa fa l\'AIS (Automatic Identification System)?',
      opts: ['Misura la profondità', 'Trasmette e riceve posizione, rotta e velocità delle navi vicine', 'Calcola la rotta ottimale', 'Invia il Mayday automaticamente'],
      correct: 1,
      tip: 'L\'AIS è obbligatorio sulle navi commerciali e sempre più diffuso sui diportisti. Permette di "vedere" il traffico sullo schermo del chartplotter.'
    },
    {
      q: 'Il "punto nave" visivo si ottiene con:',
      opts: ['Il GPS e la bussola', 'Il rilevamento di almeno tre punti noti a terra', 'L\'ecoscandaglio e il loch', 'Due rilevamenti dello stesso punto in tempi diversi'],
      correct: 1,
      tip: 'Tre rilevamenti visivi formano un triangolo detto "cocked hat". Al centro c\'è il punto nave. Più piccolo è il triangolo, più accurata è la posizione.'
    },
    {
      q: 'Cosa indica il numero in cifre su una carta nautica vicino a un punto del fondo marino?',
      opts: ['L\'altezza delle onde in quel punto', 'La profondità in metri rispetto al livello di bassa marea', 'La corrente in nodi', 'La temperatura dell\'acqua'],
      correct: 1,
      tip: 'Le sonde (profondità) sulle carte sono riferite al Livello di Minima Bassa Marea (LMBM). La profondità reale è uguale o maggiore.'
    },
    {
      q: 'Il sistema GPS utilizza il datum:',
      opts: ['ED50', 'Roma 1940', 'WGS84', 'ETRS89'],
      correct: 2,
      tip: 'Il GPS usa il datum WGS84 (World Geodetic System 1984). Le carte nautiche italiane moderne sono già in WGS84, ma alcune vecchie usano ED50.'
    },
  ],

  /* ══════════════════════════════════════════════
     04 — SEGNALAMENTO
  ══════════════════════════════════════════════ */
  segnalamento: [
    {
      q: 'In Italia (Regione A IALA), una boa ROSSA sul lato di un canale indica:',
      opts: ['Passare a dritta della boa', 'Lato sinistro del canale (entrando in porto)', 'Pericolo isolato', 'Acque sicure al centro'],
      correct: 1,
      tip: 'In Regione A: rosso = sinistra entrando in porto. Mnemonica: "rosso a sinistra entrando".'
    },
    {
      q: 'Quanti lampi emette una boa cardinale EST?',
      opts: ['1 lampeggio continuo', '3 lampi', '6 lampi + 1 lungo', '9 lampi'],
      correct: 1,
      tip: 'Est = 3 lampi (Q(3) o VQ(3)). Mnemonica: E-S-T = 3 lettere.'
    },
    {
      q: 'Cosa significa vedere il fanale VERDE di un\'altra imbarcazione?',
      opts: ['La barca si allontana (vedo la poppa)', 'La barca viene da sinistra rispetto a me', 'La barca è alla mia sinistra e punta verso di me', 'La barca è autorizzata a passare'],
      correct: 1,
      tip: 'Il fanale verde è sul lato destro (dritta). Se lo vedo, l\'altra barca ha la sua dritta verso di me, quindi viene da sinistra rispetto alla mia rotta.'
    },
    {
      q: 'Un segnale sonoro di DUE fischi brevi in navigazione significa:',
      opts: ['Sto accostando a dritta', 'Sto accostando a sinistra', 'Sto indietreggiando', 'Non capisco le tue manovre'],
      correct: 1,
      tip: '1 breve = dritta; 2 brevi = sinistra; 3 brevi = indietro; 4+ brevi = pericolo/incomprensione.'
    },
    {
      q: 'Le boe cardinali sono di colore:',
      opts: ['Rosso e verde', 'Giallo e nero', 'Bianco e rosso', 'Arancione e blu'],
      correct: 1,
      tip: 'Le boe cardinali sono gialle e nere. La disposizione delle bande e dei segnali superiori indica il punto cardinale.'
    },
    {
      q: 'Una boa di colore BIANCO con banda rossa orizzontale indica:',
      opts: ['Pericolo cardinale Nord', 'Acque sicure (fairway buoy)', 'Canale di destra', 'Area di divieto di ancoraggio'],
      correct: 1,
      tip: 'La boa di acque sicure (bianca con banda rossa) segnala acque navigabili tutto intorno. Spesso posta all\'imboccatura di un canale.'
    },
    {
      q: 'Quanti lampi emette una boa cardinale OVEST?',
      opts: ['3 lampi', '6 + 1 lampi', '9 lampi', 'Luce rapida continua'],
      correct: 2,
      tip: 'Ovest = 9 lampi (Q(9) o VQ(9)). Mnemonica: O-V-E-S-T = 5 lettere → 9 (non funziona, impara il codice!).'
    },
    {
      q: 'Il fanale di dritta (verde) ha un settore di:',
      opts: ['225°', '135°', '112,5°', '360°'],
      correct: 2,
      tip: 'I fanali laterali (rosso e verde) coprono ciascuno 112,5°. Il fanale di poppa copre 135°. Il fanale di testa d\'albero copre 225°.'
    },
    {
      q: 'Vedo contemporaneamente il fanale ROSSO e VERDE di un\'imbarcazione. Cosa significa?',
      opts: ['L\'imbarcazione si sta allontanando', 'L\'imbarcazione punta verso di me (rotta di collisione potenziale)', 'L\'imbarcazione è ancorata', 'L\'imbarcazione sta manovrando a bassa velocità'],
      correct: 1,
      tip: 'Vedere entrambi i fanali laterali (rosso e verde) significa che la barca punta verso di te. Verificare subito se si è su rotta di collisione.'
    },
    {
      q: 'Quale segnale sonoro emette in nebbia una nave a motore in moto?',
      opts: ['Un suono lungo ogni 2 minuti', '3 suoni lunghi', 'Suono lungo + 2 brevi', 'Nessun obbligo'],
      correct: 0,
      tip: 'Nave a motore in moto: 1 suono lungo ogni 2 minuti. Nave a vela: 1 lungo + 2 brevi ogni 2 minuti. Nave all\'ancora: scampanio rapido.'
    },
    {
      q: 'Le boe laterali di destra (entrando) in Regione A sono di colore:',
      opts: ['Rosso', 'Verde', 'Giallo', 'Bianco'],
      correct: 1,
      tip: 'In Regione A: destra = verde, sinistra = rosso. In Regione B (USA, Giappone, ecc.) è il contrario.'
    },
    {
      q: 'Una boa di pericolo isolato ha i segnali superiori:',
      opts: ['Due sfere nere', 'Due coni a punte unite', 'Un cono con la punta in su', 'Una croce'],
      correct: 0,
      tip: 'La boa di pericolo isolato ha due sfere nere sovrapposte come segnali superiori. Il colore è nero con banda rossa orizzontale.'
    },
  ],

  /* ══════════════════════════════════════════════
     05 — SICUREZZA
  ══════════════════════════════════════════════ */
  sicurezza: [
    {
      q: 'Qual è il segnale radio di emergenza per pericolo di vita imminente?',
      opts: ['PAN PAN', 'SECURITÉ', 'MAYDAY', 'SOS'],
      correct: 2,
      tip: 'MAYDAY (ripetuto tre volte) è il segnale di massima emergenza. PAN PAN = urgenza; SECURITÉ = avviso sicurezza.'
    },
    {
      q: 'Su quale canale VHF si lancia il Mayday?',
      opts: ['Canale 68', 'Canale 16', 'Canale 6', 'Canale 72'],
      correct: 1,
      tip: 'Il canale 16 VHF è il canale internazionale di emergenza e chiamata, sempre da monitorare.'
    },
    {
      q: 'Un giubbotto di salvataggio da 150 N ha la caratteristica di:',
      opts: ['Essere il più leggero', 'Girare un incosciente a faccia in su', 'Funzionare solo in acqua calma', 'Essere obbligatorio solo in regata'],
      correct: 1,
      tip: '150 N è il solo giubbotto che rovescia automaticamente un incosciente a faccia in su per mantenere le vie aeree fuori dall\'acqua.'
    },
    {
      q: 'In caso di incendio in sala macchine, cosa NON si deve fare?',
      opts: ['Spegnere il motore', 'Chiamare aiuto via VHF', 'Aprire immediatamente il cofano per vedere', 'Allontanare le persone dal fuoco'],
      correct: 2,
      tip: 'Aprire il cofano fa entrare ossigeno e può provocare una fiammata improvvisa. Prima usare l\'estintore attraverso il foro apposito.'
    },
    {
      q: 'Il dispositivo EPIRB trasmette il segnale di soccorso su:',
      opts: ['VHF canale 16', '406 MHz via satellite', 'FM radio', '27 MHz CB'],
      correct: 1,
      tip: 'L\'EPIRB trasmette su 406 MHz al sistema satellitare COSPAS-SARSAT, che localizza e allerta i centri di coordinamento SAR.'
    },
    {
      q: 'Cosa significa "PAN PAN" in radio?',
      opts: ['Pericolo di vita imminente', 'Urgenza: situazione grave ma non imminente pericolo di vita', 'Avviso di navigazione pericolosa', 'Richiesta di assistenza tecnica'],
      correct: 1,
      tip: 'PAN PAN indica urgenza (persona ferita, avaria grave) ma non l\'immediato pericolo di vita del Mayday.'
    },
    {
      q: 'Entro quante miglia dalla costa è obbligatoria la zattera di salvataggio?',
      opts: ['Oltre 3 miglia', 'Oltre 6 miglia', 'Oltre 12 miglia', 'Oltre 20 miglia'],
      correct: 2,
      tip: 'La zattera di salvataggio è obbligatoria per navigazione oltre 12 miglia dalla costa. Va revisionata annualmente o ogni 3 anni secondo il tipo.'
    },
    {
      q: 'Ogni quanti anni scadono i fuochi pirotecnici di segnalazione?',
      opts: ['1 anno', '2 anni', '3–4 anni (secondo il tipo)', '5 anni'],
      correct: 2,
      tip: 'I fuochi pirotecnici hanno una scadenza stampata sulla confezione, in genere 3–4 anni. Usare fuochi scaduti è pericoloso e illegale.'
    },
    {
      q: 'Quale tipo di estintore si usa per un incendio di carburante (Classe B)?',
      opts: ['Acqua', 'CO₂ o schiuma', 'Sabbia', 'Solo polvere ABC'],
      correct: 1,
      tip: 'Gli incendi di liquidi infiammabili (classe B) si combattono con CO₂ o schiuma. L\'acqua è controindicata perché può diffondere il liquido in fiamme.'
    },
    {
      q: 'In caso di uomo a mare, qual è la prima cosa da fare?',
      opts: ['Chiamare i soccorsi', 'Indicare la persona con il dito senza mai perderla di vista e lanciare il salvagente', 'Tuffarsi subito', 'Fermare il motore e aspettare'],
      correct: 1,
      tip: 'Tenere la persona in vista è fondamentale. In pochi secondi può diventare difficile vederla. Il salvagente dà tempo per la manovra di recupero.'
    },
    {
      q: 'Il segnale "SECURITÉ" viene usato per:',
      opts: ['Emergenza medica a bordo', 'Avviso di pericolo alla navigazione (relitto, rete galleggiante)', 'Richiesta di rimorchio', 'Segnalare un incendio'],
      correct: 1,
      tip: 'SECURITÉ è il livello più basso dei tre segnali radio. Serve ad avvisare gli altri naviganti di un ostacolo o pericolo alla navigazione.'
    },
    {
      q: 'Come si chiama il segnale visivo diurno per indicare la posizione a elicotteri e aerei?',
      opts: ['Razzo paracadute', 'Fumogeno arancione', 'Fuoco a mano rosso', 'Specchio segnalatore'],
      correct: 1,
      tip: 'Il fumogeno arancione è il segnale diurno per eccellenza: la nuvola arancione è visibile anche da grande distanza in condizioni di buona visibilità.'
    },
  ],

  /* ══════════════════════════════════════════════
     06 — MANOVRE
  ══════════════════════════════════════════════ */
  manovre: [
    {
      q: 'Quale cima di ormeggio impedisce alla barca di scivolare in avanti o indietro lungo la banchina?',
      opts: ['Traversino', 'Spring', 'Cima di prua', 'Cima di poppa'],
      correct: 1,
      tip: 'Lo spring è la cima incrociata che impedisce lo scivolamento longitudinale. È fondamentale con corrente o traffico portuale.'
    },
    {
      q: 'Per un ormeggio con catena, la scorta minima consigliata è:',
      opts: ['1–2 volte la profondità', '4–5 volte la profondità', '10 volte la profondità', 'Uguale alla lunghezza della barca'],
      correct: 1,
      tip: 'Con la catena: 4–5× la profondità. Con il cavo in nylon: 6–7×. Più catena = catena quasi piatta = ancora tiene meglio.'
    },
    {
      q: 'Nella manovra di recupero uomo a mare, l\'elica deve essere:',
      opts: ['In avanti per avvicinarsi velocemente', 'Ferma quando si è vicini alla persona', 'In retromarcia per frenare', 'Indifferente'],
      correct: 1,
      tip: 'L\'elica in rotazione è un pericolo mortale per chi è in acqua. Va fermata prima di avvicinarsi alla persona.'
    },
    {
      q: 'La gassa d\'amante è usata perché:',
      opts: ['Si scioglie facilmente sotto carico', 'Forma un occhio fisso che non si stringe', 'È il nodo più veloce da fare', 'È l\'unico nodo per unire due cavi'],
      correct: 1,
      tip: 'La gassa d\'amante crea un occhio di dimensione fissa: non si stringe né si allarga. È il nodo di sicurezza per eccellenza.'
    },
    {
      q: 'Quando si ancora, quale tipo di fondo è da evitare?',
      opts: ['Sabbia', 'Fango', 'Posidonia e roccia', 'Ghiaia fine'],
      correct: 2,
      tip: 'Su posidonia (prateria marina) e roccia l\'ancora fatica ad attaccarsi e può staccarsi improvvisamente. Sabbia e fango sono i fondi migliori.'
    },
    {
      q: 'I parabordi vanno posizionati:',
      opts: ['Dopo aver toccato la banchina', 'Prima di avvicinarsi alla banchina', 'Solo di notte', 'Solo quando c\'è vento'],
      correct: 1,
      tip: 'I parabordi si posizionano prima della manovra di avvicinamento, non quando si è già in contatto con la banchina o con un\'altra barca.'
    },
    {
      q: 'Qual è la prima cima da dare quando si ormeggiate a una banchina?',
      opts: ['Lo spring poppiero', 'La cima di prua o poppa (la più vicina alla banchina)', 'Il traversino', 'Dipende dalla corrente'],
      correct: 1,
      tip: 'Si dà prima la cima più vicina alla banchina (generalmente prua o poppa) per bloccare lo spostamento più pericoloso, poi si completano le altre.'
    },
    {
      q: 'Cos\'è il "raggio di fonda"?',
      opts: ['La lunghezza della catena filata', 'Il cerchio che la barca descrive intorno all\'ancora', 'La profondità massima per ancorare', 'La distanza minima da altri natanti'],
      correct: 1,
      tip: 'Il raggio di fonda è il cerchio che la barca percorre intorno all\'ancora con il vento o la corrente. Va considerato quando si sceglie il posto e la catena da filare.'
    },
    {
      q: 'Il nodo "galera" si usa principalmente per:',
      opts: ['Unire due cavi di uguale diametro', 'Ormeggio rapido a una bitta; si scioglie facilmente anche sotto carico', 'Fermare il capo di una cima nel bozzello', 'Creare un\'asola fissa'],
      correct: 1,
      tip: 'Il nodo galera (o parlato doppio su bitta) è il nodo da ormeggio per eccellenza: veloce da fare e da sciogliere, sicuro sotto carico.'
    },
    {
      q: 'La manovra "Quick Stop" per il recupero uomo a mare prevede:',
      opts: ['Accelerare per girare rapidamente attorno alla persona', 'Accostare immediatamente dalla parte dell\'uomo, completare un cerchio e avvicinarsi sottovento', 'Fermare il motore e aspettare i soccorsi', 'Lanciare una sagola e trainare la persona'],
      correct: 1,
      tip: 'Il Quick Stop mantiene la persona sempre vicina alla barca durante la manovra. È preferito perché riduce la distanza e il tempo di recupero.'
    },
    {
      q: 'Il nodo "savoia" serve a:',
      opts: ['Unire due cavi', 'Fermare il capo di una cima per evitare che scorra in un bozzello', 'Ormeggiare a una bitta', 'Creare un\'imbracatura'],
      correct: 1,
      tip: 'Il nodo savoia (o nodo a otto) è un nodo di arresto: impedisce al capo di scorrere attraverso un carrello, una puleggia o un occhio.'
    },
    {
      q: 'L\'ancora galleggiante (sea anchor) si usa per:',
      opts: ['Ancorare in fondali molto profondi', 'Frenare la deriva e tenere la prua al vento in caso di avaria', 'Segnalare la presenza dell\'ancora sul fondo', 'Recuperare un oggetto affondato'],
      correct: 1,
      tip: 'L\'ancora galleggiante è un paracadute sottoacqueo calato di prua. Riduce la velocità alla deriva e tiene la barca in posizione più sicura rispetto alle onde.'
    },
  ],

  /* ══════════════════════════════════════════════
     07 — MOTORE
  ══════════════════════════════════════════════ */
  motore: [
    {
      q: 'Qual è la causa più comune di avaria al motore diesel a bordo?',
      opts: ['Batteria scarica', 'Acqua nel carburante', 'Troppo olio', 'Cinghia alternatore rotta'],
      correct: 1,
      tip: 'L\'acqua nel gasolio contamina il carburante e intasa gli iniettori. Usare sempre separatori acqua-carburante e filtri adeguati.'
    },
    {
      q: 'Cosa indica l\'allarme temperatura del motore?',
      opts: ['Mancanza di carburante', 'Problema al circuito di raffreddamento', 'Batteria scarica', 'Olio esaurito'],
      correct: 1,
      tip: 'L\'allarme temperatura segnala un problema di raffreddamento: girante della pompa rotta, presa a mare chiusa, o perdita nel circuito.'
    },
    {
      q: 'Cos\'è la cavitazione dell\'elica?',
      opts: ['L\'elica che aspira aria dalla superficie', 'Formazione di bolle di vapore sulle pale per bassa pressione', 'Il rumore normale dell\'elica', 'Un tipo di elica a pale cave'],
      correct: 1,
      tip: 'La cavitazione avviene quando la pressione sul dorso delle pale scende sotto la pressione di vapore dell\'acqua, formando bolle che collassano erodendo le pale.'
    },
    {
      q: 'Qual è la differenza principale tra motore 2 tempi e 4 tempi?',
      opts: ['Il 4T consuma di più', 'Il 2T ha un ciclo per giro, il 4T ogni due giri', 'Il 4T è sempre più potente', 'Il 2T usa solo gasolio'],
      correct: 1,
      tip: 'Il 2T ha un ciclo ogni giro (più potente a parità di cilindrata), il 4T ogni due giri (più efficiente e meno emissioni).'
    },
    {
      q: 'La girante della pompa dell\'acqua di mare va sostituita:',
      opts: ['Solo se si rompe', 'Ogni 5 anni', 'Ogni anno o 200 ore di moto', 'Ogni 10.000 km'],
      correct: 2,
      tip: 'La girante in gomma si indurisce e si degrada nel tempo. Va sostituita preventivamente ogni stagione e portarne sempre una di ricambio a bordo.'
    },
    {
      q: 'Perché il carburante diesel è più sicuro della benzina a bordo?',
      opts: ['Costa di meno', 'Non forma vapori esplosivi a temperatura ambiente', 'Brucia più lentamente', 'Ha un odore più gradevole'],
      correct: 1,
      tip: 'I vapori di benzina sono più pesanti dell\'aria e si accumulano nel fondo della barca, creando miscele esplosive. Il diesel è molto meno volatile.'
    },
    {
      q: 'L\'effetto evolutivo di un\'elica destra in marcia avanti fa:',
      opts: ['Scendere la prua a sinistra', 'Scendere la poppa a sinistra', 'Scendere la poppa a destra', 'Nessun effetto apprezzabile'],
      correct: 1,
      tip: 'Un\'elica destra (gira in senso orario vista da poppa) in avanti spinge la poppa a sinistra. In retromarcia l\'effetto è inverso: poppa a destra.'
    },
    {
      q: 'In uno sterndrive (entrofuoribordo), il motore è:',
      opts: ['Completamente fuori bordo', 'Dentro lo scafo, con il piede di trasmissione all\'esterno', 'Completamente dentro lo scafo con albero fisso', 'Montato sul boma'],
      correct: 1,
      tip: 'Lo sterndrive ha il blocco motore all\'interno dello scafo (come l\'entrobordo) e un piede sterzo con l\'elica all\'esterno (come il fuoribordo). Combina i vantaggi di entrambi.'
    },
    {
      q: 'Prima di avviare il motore, quale controllo è più critico?',
      opts: ['Livello del liquido tergicristalli', 'Presa a mare del raffreddamento aperta', 'Pressione dei pneumatici', 'Livello del liquido freni'],
      correct: 1,
      tip: 'La presa a mare deve essere aperta prima di avviare: senza acqua il motore si surriscalda in pochi secondi e la girante brucia.'
    },
    {
      q: 'Cosa si intende per "ventilazione" dell\'elica?',
      opts: ['Il raffreddamento delle pale', 'L\'aspirazione di aria dalla superficie che riduce la spinta', 'Il sistema di aerazione della sala macchine', 'La rotazione a vuoto in aria'],
      correct: 1,
      tip: 'La ventilazione (diversa dalla cavitazione) avviene quando l\'elica aspira aria dalla superficie, perdendo presa sull\'acqua. Accade con elica troppo alta o in virata stretta ad alta velocità.'
    },
    {
      q: 'Il filtro del gasolio va sostituito:',
      opts: ['Solo quando il motore non parte', 'Ogni stagione, come manutenzione preventiva', 'Ogni 5 anni', 'Mai, è autopulente'],
      correct: 1,
      tip: 'Il filtro gasolio va sostituito ogni stagione. Un filtro intasato riduce il flusso di carburante e può fermare il motore al momento peggiore.'
    },
    {
      q: 'Un fuoribordo eroga retromarcia:',
      opts: ['Attraverso un cambio interno', 'Ruotando fisicamente l\'elica in senso inverso', 'Invertendo il senso di rotazione del motore', 'Non può fare retromarcia'],
      correct: 1,
      tip: 'Nei fuoribordo (e negli sterndrive) la retromarcia si ottiene ruotando il gruppo elica-riduttore. Il motore gira sempre nello stesso senso.'
    },
  ],

  /* ══════════════════════════════════════════════
     08 — VELA
  ══════════════════════════════════════════════ */
  vela: [
    {
      q: 'Perché una barca a vela riesce a risalire il vento?',
      opts: ['Perché il vento spinge direttamente in avanti', 'Perché la vela crea depressione sul lato sottovento e la chiglia oppone resistenza laterale', 'Perché il peso della zavorra la tira avanti', 'Perché il vento colpisce la prua'],
      correct: 1,
      tip: 'La vela funziona come un\'ala: crea portanza. La chiglia (o deriva) impedisce lo scivolamento laterale, e la barca "sfugge" in avanti.'
    },
    {
      q: 'Come si chiama l\'andatura con il vento proveniente da circa 90°?',
      opts: ['Bolina', 'Traverso', 'Lasco', 'Poppa'],
      correct: 1,
      tip: 'Al traverso il vento è quasi perpendicolare alla barca (≈90°). È spesso l\'andatura più veloce.'
    },
    {
      q: 'Come si chiama la manovra di cambio di mure passando con la prua attraverso il vento?',
      opts: ['Abbattuta', 'Virata (tacking)', 'Strambata', 'Poggiata'],
      correct: 1,
      tip: 'La virata (o tacking) fa girare la prua attraverso la zona morta. L\'abbattuta fa passare la poppa attraverso il vento.'
    },
    {
      q: 'Cosa indica il filetto segnavento sopravvento che si alza verso l\'alto?',
      opts: ['La vela è troppo lascata', 'Si sta stringendo troppo (orzare troppo)', 'La vela è perfettamente regolata', 'Il vento è troppo forte'],
      correct: 1,
      tip: 'Filetto sopravvento in aria = si sta orzando troppo. Rimedio: poggiare un filo o lascara la scotta.'
    },
    {
      q: 'La "zona morta" nella rosa delle andature è:',
      opts: ['La zona di poppa dove le vele non gonfiano', 'Il settore di circa 45° per lato davanti alla prua dove le vele fileggiano', 'La zona di bonaccia', 'Il punto di massima velocità'],
      correct: 1,
      tip: 'La zona morta è il settore di circa ±45° di fronte alla prua: troppo vicino al vento per avere portanza. Una barca in zona morta è "in irons".'
    },
    {
      q: 'Cosa fa la chiglia (o deriva) di una barca a vela?',
      opts: ['Gonfia la vela', 'Impedisce lo scivolamento laterale e bilancia la forza del vento', 'Aumenta la velocità', 'Regola l\'altezza della vela'],
      correct: 1,
      tip: 'La chiglia è una seconda "ala" nell\'acqua. Si oppone alla spinta laterale del vento e (grazie alla zavorra) limita lo sbandamento.'
    },
    {
      q: 'L\'andatura di "bolina" corrisponde a un angolo dal vento di circa:',
      opts: ['0–45°', '45°–70°', '90°', '110°–150°'],
      correct: 1,
      tip: 'Bolina stretta: 45°–70°. È l\'andatura più vicina al vento dove la barca riesce ancora ad avanzare con le vele gonfie.'
    },
    {
      q: 'La "strambata" si differisce dall\'abbattuta perché:',
      opts: ['È più lenta', 'È una virata in poppa subita accidentalmente, non controllata', 'Passa con la prua attraverso il vento', 'Si fa solo con la vela ammainata'],
      correct: 1,
      tip: 'La strambata è un\'abbattuta non voluta: il boma passa da un lato all\'altro improvvisamente a causa di una raffica, un\'onda o distrazione al timone. Può essere pericolosa.'
    },
    {
      q: 'L\'andatura di "lasco" corrisponde a un angolo dal vento di:',
      opts: ['45°–70°', '90°', '110°–150°', '180°'],
      correct: 2,
      tip: 'Al lasco il vento viene da circa 110°–150°: è un\'andatura ampia, comoda e veloce, spesso più veloce del traverso su molte barche moderne.'
    },
    {
      q: 'Cosa si intende per "orzare"?',
      opts: ['Allontanare la prua dal vento (poggiare)', 'Avvicinare la prua al vento (stringere il vento)', 'Ammainare le vele', 'Aumentare la velocità'],
      correct: 1,
      tip: 'Orzare = portare la prua verso il vento (verso il centro della rosa). Poggiare = allontanare la prua dal vento (verso il basso della rosa).'
    },
    {
      q: 'Perché una barca a vela usa due vele (randa + fiocco) invece di una sola grande?',
      opts: ['Per motivi estetici', 'Per distribuire la superficie velica su più alberi', 'Il fiocco crea un venturi tra le vele che accelera il flusso d\'aria sulla randa, aumentando la portanza', 'Per poter navigare senza randa in caso di rottura'],
      correct: 2,
      tip: 'Il canale formato tra randa e fiocco accelera il flusso d\'aria (effetto venturi), aumentando la depressione sul lato sottovento e quindi la portanza totale.'
    },
    {
      q: 'Se il filetto segnavento sottovento si alza verso il basso, bisogna:',
      opts: ['Cazzare la scotta per chiudere la vela', 'Orzare un filo o lascara la scotta', 'Alzare il boma', 'Cambiare mure'],
      correct: 1,
      tip: 'Filetto sottovento in aria = la vela è troppo lascata oppure si sta poggiando troppo. Rimedio: orzare un filo o cazzare la scotta.'
    },
  ],

};
