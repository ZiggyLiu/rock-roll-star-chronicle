const artists = [
  {
    id: "freddie",
    name: "Freddie Mercury",
    kicker: "Rock & Roll Star Chronicle",
    intro:
      "A song-by-song career timeline where each hit opens the story behind the moment: the recording, the pressure, the persona, and the private context around the artist.",
    stats: [
      ["1946-1991", "lifetime"],
      ["1970", "Queen forms"],
      ["1985", "Live Aid peak"]
    ],
    sources: [
      ["Queen Online: Freddie Mercury biography", "https://www.queenonline.com/freddie_mercury"],
      ["Official Freddie Mercury site", "https://www.freddiemercury.com/"],
      ["Queen Online: music archive", "https://www.queenonline.com/music"]
    ],
    songs: [
      {
        year: "1974",
        title: "Killer Queen",
        era: "Breakthrough",
        album: "Sheer Heart Attack",
        writer: "Freddie Mercury",
        note: "The pop breakthrough",
        hook: "The first big glimpse of Mercury as a writer who could make sophistication feel dangerous, funny, and radio-ready.",
        backstory:
          "Mercury built the song around a theatrical character sketch rather than a straight confession. Its polished piano, layered harmonies, and precise wit gave Queen a sharper pop identity without abandoning the band's glam-rock edge.",
        career:
          "The single helped move Queen from rising heavy-rock act to chart force. It showed that Mercury could write compact hits as confidently as the band could build long, ornate album tracks.",
        personal:
          "This is early Freddie in public-performance mode: arch, stylish, and controlled. It points to the way he could hide autobiography behind invented characters while still making the emotional temperature feel personal.",
        impact: "A key bridge from cult following to mainstream recognition."
      },
      {
        year: "1975",
        title: "Bohemian Rhapsody",
        era: "Risk becomes legend",
        album: "A Night at the Opera",
        writer: "Freddie Mercury",
        note: "The impossible single",
        hook: "A six-minute suite that turned private mystery, opera, hard rock, and pop spectacle into Queen's defining early monument.",
        backstory:
          "Queen's official biography notes that the song was nearly not released because of its length and unusual form, but Mercury pushed for it. The result refused standard verse-chorus rules and made the studio itself part of the drama.",
        career:
          "Its UK chart success turned Queen into a global headline act. The promotional video also helped define how rock bands could use short-form video as a core part of their mythology.",
        personal:
          "Mercury never pinned the song to one literal meaning, which is part of its power. The shifting voices and confessional tone invite listeners into an emotional crisis without reducing his life to a single explanation.",
        impact: "The song that made Queen's excess commercially undeniable."
      },
      {
        year: "1976",
        title: "Somebody to Love",
        era: "Vocal cathedral",
        album: "A Day at the Races",
        writer: "Freddie Mercury",
        note: "Gospel-scale yearning",
        hook: "A search for connection sung like a private prayer amplified into a full choir.",
        backstory:
          "The track channels gospel influence through Queen's stacked harmonies, with Mercury's lead vocal moving between vulnerability and command. The arrangement makes loneliness sound enormous.",
        career:
          "Coming after 'Bohemian Rhapsody,' it proved that Queen could follow a phenomenon without copying it. Mercury's piano-based songwriting stayed central while the band widened its emotional vocabulary.",
        personal:
          "The lyric's longing sits beside Mercury's public flamboyance in a revealing way. It lets the chronicle show the gap between stage certainty and the human need for love and belonging.",
        impact: "A showcase for Mercury's emotional and technical range."
      },
      {
        year: "1977",
        title: "We Are the Champions",
        era: "Stadium ritual",
        album: "News of the World",
        writer: "Freddie Mercury",
        note: "The audience joins",
        hook: "A triumph song shaped like a survivor's speech, built to turn a crowd into one voice.",
        backstory:
          "Mercury wrote a theatrical anthem with a slow-burn structure: intimate verses, rising piano, then a chorus that feels communal without losing its bruised edge.",
        career:
          "Alongside 'We Will Rock You,' it helped Queen master the scale of stadium rock. It changed the live relationship between Mercury and the audience into a call-and-response ceremony.",
        personal:
          "The song's confidence is not clean victory; it carries strain, endurance, and defiance. That tension fits Mercury's persona: glamorous, combative, and aware that applause is earned under pressure.",
        impact: "One of rock's most durable public anthems."
      },
      {
        year: "1978",
        title: "Don't Stop Me Now",
        era: "Velocity",
        album: "Jazz",
        writer: "Freddie Mercury",
        note: "Euphoria at full speed",
        hook: "A piano sprint through pleasure, freedom, and theatrical self-invention.",
        backstory:
          "The song starts with Mercury alone at the piano, then accelerates into one of Queen's most kinetic recordings. Its momentum feels like nightlife turned into melody.",
        career:
          "It reinforced Mercury as Queen's engine of velocity and charisma, even when the band was moving through increasingly varied styles.",
        personal:
          "The track captures a public version of Mercury's appetite for experience: funny, excessive, elegant, and reckless around the edges. A good chronicle can present that energy without pretending it tells the whole private story.",
        impact: "A late-blooming fan favorite and one of Queen's most recognizable mood-shifters."
      },
      {
        year: "1979",
        title: "Crazy Little Thing Called Love",
        era: "Rockabilly turn",
        album: "The Game",
        writer: "Freddie Mercury",
        note: "Loose, quick, direct",
        hook: "Mercury strips the grand architecture down to a sharp rock-and-roll throwback.",
        backstory:
          "Written as a playful nod to early rock and roll, the song traded Queen's maximalism for economy. Mercury even used guitar in performance, changing his physical relationship to the stage.",
        career:
          "Its success in the United States helped Queen cross further into American pop consciousness. It proved the band could sound casual without sounding small.",
        personal:
          "The lightness matters. Mercury's chronicle should include not only operatic intensity but also his humor, timing, and love of pop performance history.",
        impact: "A concise hit that widened Queen's audience."
      },
      {
        year: "1984",
        title: "I Want to Break Free",
        era: "Image shock",
        album: "The Works",
        writer: "John Deacon",
        note: "Video as provocation",
        hook: "A liberation song whose video turned domestic parody into one of Queen's most debated images.",
        backstory:
          "Deacon wrote the song, while the band made the video unforgettable through costume, comedy, and provocation. Mercury's performance turns the title into both pop hook and persona statement.",
        career:
          "The single became central to Queen's 1980s identity, even as the video landed differently across markets. It shows how visual storytelling could amplify or complicate a hit.",
        personal:
          "The song is useful for a chronicle because it lets the site discuss image, sexuality, press reaction, and audience interpretation without making a simple one-to-one claim about Mercury's private life.",
        impact: "A defining example of Queen using video to reshape a song's meaning."
      }
    ]
  },
  {
    id: "dylan",
    name: "Bob Dylan",
    kicker: "Folk, rock, and reinvention",
    intro:
      "A chronicle of Dylan through songs that changed protest music, electric rock, narrative songwriting, and the idea of the singer-songwriter as an evolving literary voice.",
    stats: [
      ["1941", "born"],
      ["1960s", "folk to electric"],
      ["2016", "Nobel Prize"]
    ],
    sources: [
      ["Official Bob Dylan site", "https://www.bobdylan.com/"],
      ["Bob Dylan songs archive", "https://www.bobdylan.com/songs/"],
      ["Bob Dylan albums archive", "https://www.bobdylan.com/albums/"]
    ],
    songs: [
      {
        year: "1963",
        title: "Blowin' in the Wind",
        era: "Protest voice",
        album: "The Freewheelin' Bob Dylan",
        writer: "Bob Dylan",
        note: "Questions as anthem",
        hook: "A simple question-song became one of the clearest signals that a songwriter could speak to public conscience without sounding like a speech.",
        backstory:
          "The song uses plain melody and repeated questions to make war, freedom, and moral responsibility feel immediate. Its ambiguity is part of the design: the answer is everywhere and still out of reach.",
        career:
          "It pushed Dylan from Greenwich Village folk circles into national attention and became a standard for the folk revival.",
        personal:
          "The young Dylan was already resisting fixed identity. This song made him a public spokesman, a role he would soon complicate and challenge.",
        impact: "A defining protest-era song and a gateway to Dylan's wider influence."
      },
      {
        year: "1964",
        title: "The Times They Are a-Changin'",
        era: "Movement anthem",
        album: "The Times They Are a-Changin'",
        writer: "Bob Dylan",
        note: "Generational warning",
        hook: "A public-address folk song that sounds like a notice pinned to history.",
        backstory:
          "The song is built on direct address: parents, writers, senators, and critics all get called into the same changing weather.",
        career:
          "It reinforced Dylan's early image as the voice of a generation, even as he was already moving toward stranger, more private writing.",
        personal:
          "The pressure of being treated as a prophet became part of Dylan's story. The chronicle can show how quickly a hit can harden into a public role.",
        impact: "One of the core songs connecting Dylan to 1960s political imagination."
      },
      {
        year: "1965",
        title: "Like a Rolling Stone",
        era: "Electric rupture",
        album: "Highway 61 Revisited",
        writer: "Bob Dylan",
        note: "Six-minute shock",
        hook: "A long, sneering, organ-driven single that blew open what rock radio could hold.",
        backstory:
          "Its scale, vocal bite, and shifting address made the song feel less like a confession than a confrontation. The recording turned folk lyric density into rock impact.",
        career:
          "This was Dylan's great electric break: a hit that made reinvention impossible to ignore and helped move rock toward album-era ambition.",
        personal:
          "Dylan was refusing the neat folk-savior frame. The sound is public rebellion, but the lyric also carries the private violence of losing a former self.",
        impact: "A landmark in rock songwriting and studio-era ambition."
      },
      {
        year: "1966",
        title: "Just Like a Woman",
        era: "Mercurial poet",
        album: "Blonde on Blonde",
        writer: "Bob Dylan",
        note: "Tender and barbed",
        hook: "A ballad where empathy, judgment, desire, and cruelty sit uncomfortably close together.",
        backstory:
          "The song's elegance comes from its instability. The narrator sounds wounded and accusing at once, which keeps the emotional ground moving.",
        career:
          "It belongs to Dylan's mid-1960s peak, when surreal imagery, rock arrangements, and folk phrasing fused into a new language.",
        personal:
          "This chapter lets the site treat Dylan's personal life carefully: the song feels intimate, but the dramatic voice is not simple autobiography.",
        impact: "A key example of Dylan making pop lyric writing psychologically unstable."
      },
      {
        year: "1975",
        title: "Tangled Up in Blue",
        era: "Memory maze",
        album: "Blood on the Tracks",
        writer: "Bob Dylan",
        note: "Narrative time loop",
        hook: "A breakup, a road story, and a memory puzzle folded into one restless narrative.",
        backstory:
          "The song shifts perspective and time, making the past feel alive but impossible to pin down. Dylan would keep revising it in performance.",
        career:
          "It marked a major 1970s return to form and showed that Dylan's later work could be as emotionally gripping as his 1960s breakthroughs.",
        personal:
          "Listeners often connect the album to separation and heartbreak, but Dylan's writing keeps the personal material refracted through character and structure.",
        impact: "A masterclass in narrative songwriting after the first wave of fame."
      },
      {
        year: "1997",
        title: "Not Dark Yet",
        era: "Late shadow",
        album: "Time Out of Mind",
        writer: "Bob Dylan",
        note: "Mortality blues",
        hook: "A late-career song where age, weather, and exhaustion become atmosphere.",
        backstory:
          "The recording is slow and haunted, with Dylan's voice carrying time rather than fighting it. The lyric sounds resigned but not empty.",
        career:
          "It helped define the late Dylan mode: less interested in youth culture, more interested in history, mortality, and deep song traditions.",
        personal:
          "The song turns aging into a creative resource. It broadens the chronicle beyond hits as youth explosions.",
        impact: "A late-career pillar that reframed Dylan as an elder artist."
      }
    ]
  },
  {
    id: "beatles-lennon",
    name: "The Beatles / John Lennon",
    kicker: "Band myth to solo witness",
    intro:
      "A timeline that follows Lennon inside the Beatles and beyond: from early Beatlemania to studio experimentation, public peace activism, and solo-era self-examination.",
    stats: [
      ["1940-1980", "John Lennon"],
      ["1960", "Beatles form"],
      ["1970", "solo era begins"]
    ],
    sources: [
      ["The Beatles official site", "https://www.thebeatles.com/"],
      ["The Beatles songs archive", "https://www.thebeatles.com/songs"],
      ["Official John Lennon site", "https://www.johnlennon.com/"]
    ],
    songs: [
      {
        year: "1963",
        title: "Please Please Me",
        era: "Beatlemania ignition",
        album: "Please Please Me",
        writer: "Lennon-McCartney",
        note: "The rush begins",
        hook: "A compressed burst of charm and urgency that helped turn the Beatles into a national event.",
        backstory:
          "The song's tight harmonies and rising energy show the early Beatles as a live-hardened band learning how to translate impact into singles.",
        career:
          "It helped launch Beatlemania in Britain and set up the band's fast move from club act to pop phenomenon.",
        personal:
          "For Lennon, the early hits still carried wit and edge inside a clean pop package. The public image was cheerful; the personality was sharper.",
        impact: "A spark point for the Beatles' first wave of mass attention."
      },
      {
        year: "1964",
        title: "A Hard Day's Night",
        era: "Film-star band",
        album: "A Hard Day's Night",
        writer: "Lennon-McCartney",
        note: "Fame in motion",
        hook: "A title chord, a chase scene, and a song that makes exhaustion sound glamorous.",
        backstory:
          "Written for the film era of the Beatles, the song captures the pace of touring, filming, press, and constant public demand.",
        career:
          "It helped turn the band into multimedia stars, not just record-makers.",
        personal:
          "The lyric is light, but the chronicle can read it against the pressure machine surrounding the group.",
        impact: "A signature of early Beatles speed, polish, and charisma."
      },
      {
        year: "1965",
        title: "Help!",
        era: "Pressure breaks through",
        album: "Help!",
        writer: "Lennon-McCartney",
        note: "Pop distress signal",
        hook: "A hit single whose surface brightness barely hides an actual cry for help.",
        backstory:
          "The arrangement keeps the song moving, but the lyric is unusually direct about insecurity and dependence.",
        career:
          "It arrived while the Beatles were still in the center of global frenzy, adding emotional tension to the polished image.",
        personal:
          "Lennon later framed the song as closer to his real state than many listeners understood. It is a good example of private distress entering public pop.",
        impact: "A key bridge from early pop craft toward more self-revealing songwriting."
      },
      {
        year: "1967",
        title: "A Day in the Life",
        era: "Studio expansion",
        album: "Sgt. Pepper's Lonely Hearts Club Band",
        writer: "Lennon-McCartney",
        note: "Dream logic",
        hook: "News fragments, dream drift, and orchestral chaos turned into one of the Beatles' most cinematic recordings.",
        backstory:
          "Lennon's detached verses and McCartney's everyday middle section collide, with the studio becoming the instrument that binds them.",
        career:
          "It marks the Beatles as album-era innovators whose records could work like films, collages, and art objects.",
        personal:
          "The song catches Lennon in observer mode: distant, fascinated, unsettled by the modern world.",
        impact: "A landmark in rock studio imagination."
      },
      {
        year: "1968",
        title: "Hey Jude",
        era: "Apple launch",
        album: "Non-album single",
        writer: "Lennon-McCartney",
        note: "Communal release",
        hook: "A private comfort song grows into a massive public singalong.",
        backstory:
          "McCartney wrote the core song, but in a Lennon-focused chronicle it matters because it sits inside the band's fractured late-1960s emotional landscape.",
        career:
          "It became a defining late Beatles single and helped launch Apple as a public label identity.",
        personal:
          "The song connects to family rupture around Lennon, Cynthia Lennon, and Julian Lennon, showing how Beatles hits often carried private lives in public form.",
        impact: "A late-period anthem that turned personal reassurance into mass ritual."
      },
      {
        year: "1969",
        title: "Give Peace a Chance",
        era: "Public activism",
        album: "Plastic Ono Band single",
        writer: "John Lennon",
        note: "Hotel-room anthem",
        hook: "A chant recorded during Lennon and Yoko Ono's peace activism became a movement song.",
        backstory:
          "Recorded in Montreal during a bed-in, it deliberately uses simplicity: a phrase people can remember, repeat, and carry into the street.",
        career:
          "It was one of Lennon's first major solo statements while the Beatles were still dissolving.",
        personal:
          "The song shows Lennon redirecting celebrity into activism, with Yoko Ono central to the public art and media strategy.",
        impact: "A solo-era pivot from band myth to political performance."
      },
      {
        year: "1971",
        title: "Imagine",
        era: "Solo icon",
        album: "Imagine",
        writer: "John Lennon and Yoko Ono",
        note: "Utopian plainness",
        hook: "A piano hymn that makes radical simplification sound intimate.",
        backstory:
          "The song's power comes from spare language and open space. Its idealism is direct enough to invite both devotion and debate.",
        career:
          "It became Lennon's central solo standard, outgrowing its album into a global peace anthem.",
        personal:
          "The song reflects Lennon's post-Beatles self-fashioning with Ono: less group identity, more manifesto, art, and public ideal.",
        impact: "One of the most recognizable solo statements by any former Beatle."
      }
    ]
  },
  {
    id: "neil-young",
    name: "Neil Young",
    kicker: "Fragile voice, loud guitar",
    intro:
      "A chronicle of Neil Young as a restless rock figure: folk intimacy, country-rock warmth, political urgency, feedback, and repeated refusal to stay in one lane.",
    stats: [
      ["1945", "born"],
      ["1972", "Harvest breakthrough"],
      ["1995", "Rock Hall"]
    ],
    sources: [
      ["Neil Young Archives", "https://neilyoungarchives.com/"],
      ["Neil Young official store and news", "https://neilyoung.warnerrecords.com/"],
      ["Rock & Roll Hall of Fame: Neil Young", "https://rockhall.com/inductees/neil-young/"]
    ],
    songs: [
      {
        year: "1969",
        title: "Cinnamon Girl",
        era: "Crazy Horse spark",
        album: "Everybody Knows This Is Nowhere",
        writer: "Neil Young",
        note: "Riff identity",
        hook: "A rough-edged guitar riff announces the Young and Crazy Horse chemistry.",
        backstory:
          "The song is direct and compact, built around a guitar sound that favors feel over polish.",
        career:
          "It helped define Young's electric side after Buffalo Springfield and showed that looseness could be a signature.",
        personal:
          "Young's voice sounds fragile against the heavy guitar, a contrast that would become central to his identity.",
        impact: "A foundation stone for Young's garage-rock and Crazy Horse lineage."
      },
      {
        year: "1970",
        title: "Ohio",
        era: "Emergency protest",
        album: "CSNY single",
        writer: "Neil Young",
        note: "News becomes song",
        hook: "A rapid response to the Kent State shootings, turning outrage into electric protest.",
        backstory:
          "Young wrote with urgency, and Crosby, Stills, Nash & Young recorded a song that did not smooth over anger.",
        career:
          "It showed Young could bring political immediacy into rock without losing musical force.",
        personal:
          "The song fits Young's instinct to react quickly when events cut through abstraction.",
        impact: "One of rock's clearest examples of protest as immediate response."
      },
      {
        year: "1972",
        title: "Heart of Gold",
        era: "Harvest fame",
        album: "Harvest",
        writer: "Neil Young",
        note: "Acoustic breakthrough",
        hook: "A plainspoken search song that made Young a mainstream star.",
        backstory:
          "The arrangement is spare and warm, with harmonica and acoustic guitar carrying a direct emotional line.",
        career:
          "It became Young's biggest chart breakthrough and put Harvest at the center of early-1970s singer-songwriter culture.",
        personal:
          "The song's gentleness also created a problem for Young: fame arrived through a softness he would later push against.",
        impact: "The hit that made Young broadly visible beyond rock loyalists."
      },
      {
        year: "1972",
        title: "Old Man",
        era: "Looking inward",
        album: "Harvest",
        writer: "Neil Young",
        note: "Age mirror",
        hook: "A young songwriter looks at an older man and sees a shared loneliness.",
        backstory:
          "The lyric turns a real-life encounter into a reflection on need, time, and emotional sameness across age.",
        career:
          "It deepened the Harvest moment beyond one hit, making Young's acoustic persona feel more durable.",
        personal:
          "The song is intimate without being ornate. It shows Young's gift for making small observations carry biographical weight.",
        impact: "A core song in Young's acoustic canon."
      },
      {
        year: "1975",
        title: "Cortez the Killer",
        era: "Long-form myth",
        album: "Zuma",
        writer: "Neil Young",
        note: "Guitar journey",
        hook: "A slow electric epic where history, myth, and guitar tone blur together.",
        backstory:
          "The extended guitar passages are as important as the lyric, making the song feel discovered rather than delivered.",
        career:
          "It reaffirmed Young's electric identity after the darker mid-1970s records and kept Crazy Horse central to his legend.",
        personal:
          "Young's best long songs often sound like private weather systems. This one makes history feel like a dream he cannot escape.",
        impact: "A live and fan favorite that defines Young's electric sprawl."
      },
      {
        year: "1979",
        title: "Hey Hey, My My",
        era: "Rust never sleeps",
        album: "Rust Never Sleeps",
        writer: "Neil Young and Jeff Blackburn",
        note: "Punk-era survival",
        hook: "A song about rock's decay and renewal that sounded awake to punk without imitating it.",
        backstory:
          "The song frames rock as a cycle of burnout, myth, and rebirth, with electric force making the argument physical.",
        career:
          "It helped Young look current at a moment when many 1960s figures seemed out of step.",
        personal:
          "The lyric's anxiety about staying alive creatively fits Young's lifelong refusal to settle into one successful format.",
        impact: "A late-1970s statement of artistic survival."
      },
      {
        year: "1989",
        title: "Rockin' in the Free World",
        era: "Political return",
        album: "Freedom",
        writer: "Neil Young",
        note: "State of the union",
        hook: "A huge guitar anthem whose title sounds celebratory while the verses cut hard.",
        backstory:
          "The song came from a phrase on tour and quickly became a critique of political language, social neglect, and late-Cold War optimism.",
        career:
          "It launched a major late-1980s resurgence and connected Young to a new alternative-rock generation.",
        personal:
          "Young turns contradiction into fuel: anthem and accusation, crowd release and discomfort, nostalgia and warning.",
        impact: "A late-career signature that still works as a live climax."
      }
    ]
  },
  {
    id: "david-bowie",
    name: "David Bowie",
    kicker: "Persona as instrument",
    intro:
      "A chronicle of Bowie through reinvention: alien glam, soul experiments, Berlin art-rock, stadium pop, and late-career self-mythology.",
    stats: [
      ["1947-2016", "lifetime"],
      ["1972", "Ziggy breaks out"],
      ["1983", "global pop peak"]
    ],
    sources: [
      ["Official David Bowie site", "https://www.davidbowie.com/"],
      ["David Bowie music archive", "https://www.davidbowie.com/music"],
      ["Rock & Roll Hall of Fame: David Bowie", "https://rockhall.com/inductees/david-bowie/"]
    ],
    songs: [
      {
        year: "1969",
        title: "Space Oddity",
        era: "Alien signal",
        album: "David Bowie",
        writer: "David Bowie",
        note: "Major Tom arrives",
        hook: "A space-age ballad that turned isolation into Bowie's first major myth.",
        backstory:
          "The song uses a fictional astronaut to turn distance, fame, and disconnection into pop theatre.",
        career:
          "It gave Bowie a breakthrough identity before he had settled on the glam persona that would make him a star.",
        personal:
          "Major Tom became a mask Bowie could return to, a way to make personal estrangement feel cinematic.",
        impact: "The first durable Bowie character and a blueprint for future reinventions."
      },
      {
        year: "1972",
        title: "Starman",
        era: "Ziggy Stardust",
        album: "The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
        writer: "David Bowie",
        note: "Glam invitation",
        hook: "A broadcast from somewhere stranger, kinder, and more glittering than ordinary pop.",
        backstory:
          "The song frames rock salvation as a message from the sky, turning alienness into community.",
        career:
          "It helped Bowie bring Ziggy Stardust into the mainstream and made television performance part of the event.",
        personal:
          "Bowie's own fluidity around image, gender presentation, and performance made the song feel like permission.",
        impact: "A defining glam-rock signal."
      },
      {
        year: "1975",
        title: "Fame",
        era: "Plastic soul",
        album: "Young Americans",
        writer: "David Bowie, John Lennon, Carlos Alomar",
        note: "Fame bites back",
        hook: "A funk-driven hit about the machinery that makes and traps stars.",
        backstory:
          "Built around a sharp groove and vocal fragments, the song makes celebrity sound seductive and corrosive at once.",
        career:
          "It brought Bowie a US number-one hit and confirmed that his reinvention could cross genres and markets.",
        personal:
          "The lyric lets the chronicle show Bowie becoming famous enough to distrust fame itself.",
        impact: "A crossover moment that widened Bowie's American presence."
      },
      {
        year: "1977",
        title: "Heroes",
        era: "Berlin myth",
        album: "Heroes",
        writer: "David Bowie and Brian Eno",
        note: "Defiance at the wall",
        hook: "A huge song about temporary courage, sung as if one day can still matter.",
        backstory:
          "The recording builds from restraint into force, matching the lyric's fragile hope.",
        career:
          "It stands at the center of Bowie's Berlin period, where art-rock, atmosphere, and discipline reshaped his work.",
        personal:
          "The song sounds heroic without pretending heroism is permanent. That tension suits Bowie's constant reinvention.",
        impact: "One of Bowie's most enduring late-1970s statements."
      },
      {
        year: "1983",
        title: "Let's Dance",
        era: "Global pop",
        album: "Let's Dance",
        writer: "David Bowie",
        note: "Stadium shine",
        hook: "A sleek dance-rock single that made Bowie a mass pop presence again.",
        backstory:
          "The track's polished production and guitar bite present Bowie at his most accessible.",
        career:
          "It became a commercial peak and introduced Bowie to a new MTV-era audience.",
        personal:
          "The scale brought success but also raised the question that follows many Bowie eras: what happens after a mask works too well?",
        impact: "The biggest pop doorway into Bowie's catalog."
      }
    ]
  },
  {
    id: "springsteen",
    name: "Bruce Springsteen",
    kicker: "American myth and work",
    intro:
      "A timeline of Springsteen's shift from boardwalk romantic to stadium witness: escape, labor, family, politics, and the cost of dreams.",
    stats: [
      ["1949", "born"],
      ["1975", "breakthrough"],
      ["1984", "stadium peak"]
    ],
    sources: [
      ["Official Bruce Springsteen site", "https://brucespringsteen.net/"],
      ["Bruce Springsteen music archive", "https://brucespringsteen.net/albums/"],
      ["Rock & Roll Hall of Fame: Bruce Springsteen", "https://rockhall.com/inductees/bruce-springsteen/"]
    ],
    songs: [
      {
        year: "1975",
        title: "Born to Run",
        era: "Escape velocity",
        album: "Born to Run",
        writer: "Bruce Springsteen",
        note: "The open road",
        hook: "A grand escape song where romance, desperation, and American highway myth all move at once.",
        backstory:
          "Springsteen built the song like a widescreen movie, stacking detail and sound until escape feels necessary.",
        career:
          "It turned him from critical favorite into a major rock figure.",
        personal:
          "The song's hunger reflects an artist fighting to make his ambition match the scale in his head.",
        impact: "The core Springsteen myth in one song."
      },
      {
        year: "1978",
        title: "Badlands",
        era: "Defiant realism",
        album: "Darkness on the Edge of Town",
        writer: "Bruce Springsteen",
        note: "Hope under pressure",
        hook: "A hard, open-throated song about refusing to let disappointment define the whole life.",
        backstory:
          "After legal and career delays, the song arrives with a tougher, leaner sound than the earlier romantic epics.",
        career:
          "It marked Springsteen's move toward working-class realism and moral endurance.",
        personal:
          "The voice is not naive anymore; it is choosing belief after seeing the cost.",
        impact: "A template for Springsteen's resilient live anthems."
      },
      {
        year: "1980",
        title: "The River",
        era: "Family weather",
        album: "The River",
        writer: "Bruce Springsteen",
        note: "Dreams narrow",
        hook: "A quiet story about young love, work, pregnancy, and the shrinking of possibility.",
        backstory:
          "The song uses plain narrative detail to make economic pressure feel intimate.",
        career:
          "It showed Springsteen could make a hit-era double album carry both celebration and grief.",
        personal:
          "The family story and small-town setting root his myth in consequences, not just escape.",
        impact: "One of his clearest story songs about ordinary life."
      },
      {
        year: "1984",
        title: "Born in the U.S.A.",
        era: "Misread anthem",
        album: "Born in the U.S.A.",
        writer: "Bruce Springsteen",
        note: "Flag and wound",
        hook: "A massive chorus wrapped around a bitter veteran's story.",
        backstory:
          "The production is huge, but the verses are harsh, making the song easy to misread and hard to exhaust.",
        career:
          "It made Springsteen a global stadium star and complicated his public image.",
        personal:
          "The song shows his recurring tension between public anthem and private damage.",
        impact: "A defining example of political ambiguity in arena rock."
      },
      {
        year: "1994",
        title: "Streets of Philadelphia",
        era: "Quiet witness",
        album: "Philadelphia soundtrack",
        writer: "Bruce Springsteen",
        note: "Empathy stripped down",
        hook: "A hushed song that trades arena scale for dignity and grief.",
        backstory:
          "Written for the film Philadelphia, the song uses restraint to center illness, isolation, and human recognition.",
        career:
          "It brought Springsteen major awards and showed his voice could carry a different kind of public compassion.",
        personal:
          "The song's power comes from stepping back, letting the subject breathe without grandstanding.",
        impact: "A late-career standard of empathy."
      }
    ]
  },
  {
    id: "hendrix",
    name: "Jimi Hendrix",
    kicker: "Electric guitar transformed",
    intro:
      "A compact chronicle of Hendrix as a revolutionary player, songwriter, studio experimenter, and performer whose short career reshaped rock guitar.",
    stats: [
      ["1942-1970", "lifetime"],
      ["1967", "breakthrough"],
      ["1970", "final year"]
    ],
    sources: [
      ["Official Jimi Hendrix site", "https://www.jimihendrix.com/"],
      ["Jimi Hendrix music", "https://www.jimihendrix.com/music/"],
      ["Rock & Roll Hall of Fame: Jimi Hendrix Experience", "https://rockhall.com/inductees/the-jimi-hendrix-experience/"]
    ],
    songs: [
      {
        year: "1967",
        title: "Purple Haze",
        era: "Psychedelic shock",
        album: "Are You Experienced",
        writer: "Jimi Hendrix",
        note: "New guitar language",
        hook: "A riff, a sound, and a vocal that made rock feel like it had discovered new physics.",
        backstory:
          "The recording compresses distortion, blues phrasing, studio effects, and psychedelic imagery into a single blast.",
        career:
          "It announced Hendrix as more than a guitar hero: he was a total sonic imagination.",
        personal:
          "The song's unsettled dream logic fits an artist often treated as both visionary and spectacle.",
        impact: "One of the clearest openings into Hendrix's electric world."
      },
      {
        year: "1967",
        title: "Hey Joe",
        era: "First impact",
        album: "Are You Experienced",
        writer: "Billy Roberts",
        note: "Cover as identity",
        hook: "A cover turned into a slow-burning introduction to Hendrix's voice and guitar control.",
        backstory:
          "Hendrix transformed the song through restraint, tension, and tone rather than speed.",
        career:
          "It helped launch him in Britain and gave audiences a first public shape for his sound.",
        personal:
          "His performance makes the character feel fatalistic, distant, and haunted.",
        impact: "The early single that opened the door."
      },
      {
        year: "1967",
        title: "The Wind Cries Mary",
        era: "Tender counterweight",
        album: "Are You Experienced",
        writer: "Jimi Hendrix",
        note: "Soft electricity",
        hook: "A gentle song where Hendrix's guitar sighs instead of explodes.",
        backstory:
          "The lyric is intimate and elliptical, while the guitar lines show emotional precision.",
        career:
          "It proved Hendrix's range beyond the loudest and strangest sounds.",
        personal:
          "The track gives the chronicle a quieter Hendrix: romantic, wounded, and melodic.",
        impact: "A core ballad in the Hendrix catalog."
      },
      {
        year: "1968",
        title: "All Along the Watchtower",
        era: "Reimagined cover",
        album: "Electric Ladyland",
        writer: "Bob Dylan",
        note: "Dylan electrified",
        hook: "Hendrix turns Dylan's parable into a storm.",
        backstory:
          "The arrangement makes the cover feel definitive through layered guitars and escalating drama.",
        career:
          "It became one of Hendrix's biggest recordings and a model for radical reinterpretation.",
        personal:
          "The song lets Hendrix speak through another writer while making the sound unmistakably his.",
        impact: "One of rock's most famous covers."
      },
      {
        year: "1970",
        title: "Machine Gun",
        era: "War and feedback",
        album: "Band of Gypsys",
        writer: "Jimi Hendrix",
        note: "Guitar as battlefield",
        hook: "A live performance where guitar noise becomes grief, violence, and protest.",
        backstory:
          "The song stretches into improvisation, using feedback and dynamics as narrative tools.",
        career:
          "It shows Hendrix pushing beyond hit singles into politically charged live exploration.",
        personal:
          "The performance carries exhaustion and fury, suggesting where his music might have gone next.",
        impact: "A late masterpiece of expressive electric guitar."
      }
    ]
  },
  {
    id: "rolling-stones",
    name: "The Rolling Stones / Mick Jagger",
    kicker: "Swagger, blues, survival",
    intro:
      "A Stones timeline centered on Mick Jagger's frontman persona: blues roots, danger, decadence, disco-era adaptation, and impossible longevity.",
    stats: [
      ["1962", "band forms"],
      ["1965", "global hit"],
      ["1972", "classic peak"]
    ],
    sources: [
      ["Official Rolling Stones site", "https://rollingstones.com/"],
      ["Rolling Stones music", "https://rollingstones.com/music/"],
      ["Rock & Roll Hall of Fame: Rolling Stones", "https://rockhall.com/inductees/the-rolling-stones/"]
    ],
    songs: [
      {
        year: "1965",
        title: "(I Can't Get No) Satisfaction",
        era: "Riff breakthrough",
        album: "Out of Our Heads",
        writer: "Mick Jagger and Keith Richards",
        note: "Modern frustration",
        hook: "A fuzz riff and a vocal full of boredom, appetite, and complaint.",
        backstory:
          "The song turns consumer culture and sexual frustration into a sharp rock hook.",
        career:
          "It made the Stones a global force with a harder, more insolent identity than their pop peers.",
        personal:
          "Jagger's delivery defines the star as restless and unsatisfied, a persona he would keep sharpening.",
        impact: "One of rock's definitive riffs and attitude statements."
      },
      {
        year: "1968",
        title: "Sympathy for the Devil",
        era: "Danger theatre",
        album: "Beggars Banquet",
        writer: "Mick Jagger and Keith Richards",
        note: "History in costume",
        hook: "A samba-rock provocation where Jagger performs evil as charm, intellect, and spectacle.",
        backstory:
          "The track builds through percussion, call-and-response, and a narrator moving through historical violence.",
        career:
          "It helped define the Stones' late-1960s dark glamour.",
        personal:
          "Jagger's power is theatrical distance: he can make menace magnetic without claiming it as confession.",
        impact: "A signature of the Stones' dangerous image."
      },
      {
        year: "1969",
        title: "Gimme Shelter",
        era: "End of the 60s",
        album: "Let It Bleed",
        writer: "Mick Jagger and Keith Richards",
        note: "Storm warning",
        hook: "A song that makes social collapse feel like weather rolling in.",
        backstory:
          "The recording's tension and Merry Clayton's vocal turn dread into something physical.",
        career:
          "It became the Stones' clearest soundtrack for the darker end of the 1960s.",
        personal:
          "Jagger is no longer just the libertine; here he is a witness to danger overtaking the party.",
        impact: "One of the band's most powerful studio recordings."
      },
      {
        year: "1971",
        title: "Brown Sugar",
        era: "Swagger and controversy",
        album: "Sticky Fingers",
        writer: "Mick Jagger and Keith Richards",
        note: "Riff and discomfort",
        hook: "A huge riff carrying material that now demands more historical and ethical context.",
        backstory:
          "The song's energy is undeniable, but its imagery around race, sex, and slavery makes it one of the band's most complicated hits.",
        career:
          "It opened the Sticky Fingers era and helped cement the Stones' early-1970s dominance.",
        personal:
          "A useful chronicle should not flatten Jagger's charisma into approval; it should hold style and discomfort together.",
        impact: "A major hit that also shows how rock history changes under later scrutiny."
      },
      {
        year: "1978",
        title: "Miss You",
        era: "Disco survival",
        album: "Some Girls",
        writer: "Mick Jagger and Keith Richards",
        note: "Dance-floor pivot",
        hook: "A disco-era groove filtered through Jagger's drawl and the Stones' streetwise looseness.",
        backstory:
          "The band absorbed New York club energy without fully abandoning their rock identity.",
        career:
          "It proved the Stones could adapt to late-1970s trends and still sound like themselves.",
        personal:
          "Jagger's persona becomes urban, playful, and mobile, less mythic than in the earlier dark epics.",
        impact: "A late-1970s reinvention hit."
      }
    ]
  },
  {
    id: "led-zeppelin",
    name: "Led Zeppelin / Robert Plant",
    kicker: "Myth, volume, and blues",
    intro:
      "A Led Zeppelin chronicle through Robert Plant's voice and the band's scale: blues explosion, acoustic fantasy, hard-rock architecture, and epic excess.",
    stats: [
      ["1968", "band forms"],
      ["1971", "Stairway era"],
      ["1980", "Bonham dies"]
    ],
    sources: [
      ["Official Led Zeppelin site", "https://www.ledzeppelin.com/"],
      ["Led Zeppelin discography", "https://www.ledzeppelin.com/discography"],
      ["Rock & Roll Hall of Fame: Led Zeppelin", "https://rockhall.com/inductees/led-zeppelin/"]
    ],
    songs: [
      {
        year: "1969",
        title: "Whole Lotta Love",
        era: "Heavy breakthrough",
        album: "Led Zeppelin II",
        writer: "Led Zeppelin",
        note: "Blues becomes seismic",
        hook: "A riff and vocal performance that turned blues desire into hard-rock architecture.",
        backstory:
          "The song stretches riff, studio effects, and Plant's high-voltage vocal into something massive.",
        career:
          "It helped make Zeppelin one of rock's dominant forces.",
        personal:
          "Plant's role is physical and mythic: less narrator than embodied sound.",
        impact: "A foundational hard-rock recording."
      },
      {
        year: "1970",
        title: "Immigrant Song",
        era: "Viking charge",
        album: "Led Zeppelin III",
        writer: "Jimmy Page and Robert Plant",
        note: "Mythic attack",
        hook: "A short, sharp blast that turns Plant's voice into a battle cry.",
        backstory:
          "The song's Norse imagery and relentless drive show Zeppelin using myth as pure propulsion.",
        career:
          "It balanced the acoustic range of the third album with a compact hard-rock hit.",
        personal:
          "Plant's fascination with myth and landscape becomes part of the band's identity.",
        impact: "One of Zeppelin's most immediate and recognizable anthems."
      },
      {
        year: "1971",
        title: "Stairway to Heaven",
        era: "Epic ascent",
        album: "Led Zeppelin IV",
        writer: "Jimmy Page and Robert Plant",
        note: "The slow climb",
        hook: "A quiet folk opening grows into one of rock's most famous crescendos.",
        backstory:
          "The song moves by accumulation: acoustic mystery, lyrical symbolism, electric lift, and solo release.",
        career:
          "It became the band's most mythologized song without being a conventional single.",
        personal:
          "Plant's lyric helped shape Zeppelin's mystical aura, even as he later became more ambivalent about the song's weight.",
        impact: "A central monument of album-rock culture."
      },
      {
        year: "1971",
        title: "Black Dog",
        era: "Stop-start power",
        album: "Led Zeppelin IV",
        writer: "Led Zeppelin",
        note: "Vocal and riff duel",
        hook: "Plant's call and the band's jagged riff answer each other like a dare.",
        backstory:
          "The song's structure makes the band feel both loose and mathematically locked.",
        career:
          "It strengthened Zeppelin IV as a hard-rock landmark beyond one epic track.",
        personal:
          "Plant's confidence becomes part of the composition, pushing against the riff rather than riding it politely.",
        impact: "A signature of Zeppelin's rhythmic force."
      },
      {
        year: "1975",
        title: "Kashmir",
        era: "Imperial scale",
        album: "Physical Graffiti",
        writer: "Jimmy Page, Robert Plant, John Bonham",
        note: "Desert grandeur",
        hook: "A massive modal riff and orchestral scale make rock feel ceremonial.",
        backstory:
          "The track's power comes from repetition, tension, and a sense of landscape larger than the band.",
        career:
          "It showed Zeppelin could still expand the frame after years of dominance.",
        personal:
          "Plant's lyrics turn travel and imagination into mythic geography.",
        impact: "A late classic of Zeppelin's large-scale sound."
      }
    ]
  },
  {
    id: "fleetwood-mac",
    name: "Fleetwood Mac / Stevie Nicks",
    kicker: "Romance under studio lights",
    intro:
      "A Fleetwood Mac and Stevie Nicks timeline about love, fracture, mysticism, studio perfection, and the strange power of singing directly beside your own history.",
    stats: [
      ["1975", "Nicks joins"],
      ["1977", "Rumours explodes"],
      ["1981", "solo breakthrough"]
    ],
    sources: [
      ["Official Fleetwood Mac site", "https://www.fleetwoodmac.com/"],
      ["Official Stevie Nicks site", "https://stevienicksofficial.com/"],
      ["Rock & Roll Hall of Fame: Fleetwood Mac", "https://rockhall.com/inductees/fleetwood-mac/"]
    ],
    songs: [
      {
        year: "1975",
        title: "Rhiannon",
        era: "Mystic arrival",
        album: "Fleetwood Mac",
        writer: "Stevie Nicks",
        note: "Witchy signature",
        hook: "A mysterious character song that turned Nicks' voice and imagery into a new band identity.",
        backstory:
          "The song builds a persona around enchantment, independence, and motion.",
        career:
          "It helped introduce Nicks as more than a new member: she brought a complete mythology.",
        personal:
          "The song's character gave Nicks a stage self she could inhabit and expand.",
        impact: "A defining entrance for Stevie Nicks."
      },
      {
        year: "1977",
        title: "Dreams",
        era: "Rumours fracture",
        album: "Rumours",
        writer: "Stevie Nicks",
        note: "Calm heartbreak",
        hook: "A breakup song sung with eerie composure while the band itself was breaking apart.",
        backstory:
          "The track's restraint makes the emotional damage feel cooler and sharper.",
        career:
          "It became Fleetwood Mac's only US number-one single and a centerpiece of Rumours.",
        personal:
          "Nicks wrote from inside band romantic turmoil, turning private breakup into public calm.",
        impact: "One of the cleanest examples of personal drama becoming pop classic."
      },
      {
        year: "1977",
        title: "Go Your Own Way",
        era: "Public breakup",
        album: "Rumours",
        writer: "Lindsey Buckingham",
        note: "Conflict as hit",
        hook: "A furious song aimed across the studio at a bandmate and former partner.",
        backstory:
          "The song's drive and accusation make the album's interpersonal tension impossible to miss.",
        career:
          "It gave Rumours a harder rock edge and helped turn the band's pain into momentum.",
        personal:
          "In this chronicle, it matters because Nicks is both subject and performer within the band's conflict.",
        impact: "A classic example of band drama becoming the record's engine."
      },
      {
        year: "1981",
        title: "Edge of Seventeen",
        era: "Solo force",
        album: "Bella Donna",
        writer: "Stevie Nicks",
        note: "White-winged dove",
        hook: "A driving solo anthem where grief, memory, and voice become ritual.",
        backstory:
          "The song's pulse and repeated imagery create a trance-like momentum.",
        career:
          "It confirmed Nicks could carry a major solo identity outside Fleetwood Mac.",
        personal:
          "The song channels loss and self-possession, turning biography into iconography.",
        impact: "A solo signature that deepened the Stevie Nicks myth."
      },
      {
        year: "1982",
        title: "Gypsy",
        era: "Memory and image",
        album: "Mirage",
        writer: "Stevie Nicks",
        note: "Looking back",
        hook: "A polished song about returning to the self before fame.",
        backstory:
          "The lyric looks backward through the image Nicks had built, asking what remains under the costume.",
        career:
          "It kept the band commercially strong in the MTV era.",
        personal:
          "The song is useful for showing how a star can become nostalgic for the person who created the star.",
        impact: "A late classic in the Fleetwood Mac/Nicks story."
      }
    ]
  },
  {
    id: "nirvana",
    name: "Nirvana / Kurt Cobain",
    kicker: "Noise, melody, and rupture",
    intro:
      "A Nirvana chronicle through Kurt Cobain's songwriting: punk damage, pop instinct, sudden fame, discomfort with the spotlight, and a brief career that changed rock's center of gravity.",
    stats: [
      ["1967-1994", "Kurt Cobain"],
      ["1991", "Nevermind breaks"],
      ["1994", "final year"]
    ],
    sources: [
      ["Official Nirvana site", "https://www.nirvana.com/"],
      ["Nirvana music", "https://www.nirvana.com/music/"],
      ["Rock & Roll Hall of Fame: Nirvana", "https://rockhall.com/inductees/nirvana/"]
    ],
    songs: [
      {
        year: "1989",
        title: "About a Girl",
        era: "Melody inside noise",
        album: "Bleach",
        writer: "Kurt Cobain",
        note: "Pop instinct appears",
        hook: "A tuneful song hiding inside a raw early record.",
        backstory:
          "The track shows Cobain's gift for melody before Nirvana's mainstream breakthrough.",
        career:
          "It became proof that the band was never only noise; pop structure was there from the start.",
        personal:
          "The song points to Cobain's tension between underground identity and love of classic hooks.",
        impact: "An early clue to Nirvana's crossover power."
      },
      {
        year: "1991",
        title: "Smells Like Teen Spirit",
        era: "Grunge explosion",
        album: "Nevermind",
        writer: "Nirvana",
        note: "Unwanted anthem",
        hook: "A quiet-loud blast that made underground rock the center of mainstream youth culture.",
        backstory:
          "The song fused punk energy, pop dynamics, and cryptic alienation into something radio could not ignore.",
        career:
          "It made Nirvana globally famous almost overnight and changed the commercial direction of rock.",
        personal:
          "Cobain's discomfort with becoming a generational spokesman became part of the song's afterlife.",
        impact: "The song that shifted early-1990s rock."
      },
      {
        year: "1992",
        title: "Come as You Are",
        era: "Ambivalent invitation",
        album: "Nevermind",
        writer: "Nirvana",
        note: "Contradiction hook",
        hook: "A hazy invitation full of contradiction, suspicion, and calm unease.",
        backstory:
          "The song's watery guitar line and repeated oppositions make trust feel unstable.",
        career:
          "It broadened Nirvana's reach beyond the first explosive single.",
        personal:
          "Cobain's writing often made identity feel fractured; this song turns that fracture into a hook.",
        impact: "A central Nevermind song with long afterlife."
      },
      {
        year: "1993",
        title: "Heart-Shaped Box",
        era: "Fame turns darker",
        album: "In Utero",
        writer: "Kurt Cobain",
        note: "Beauty and abrasion",
        hook: "A song where melody and bodily unease keep colliding.",
        backstory:
          "The track brings Nirvana's quiet-loud form into a more jagged and claustrophobic place.",
        career:
          "It introduced In Utero as a deliberate move away from polished blockbuster expectations.",
        personal:
          "The lyric is private, symbolic, and uncomfortable, fitting Cobain's resistance to clean explanation.",
        impact: "A late Nirvana signature that refused easy follow-up."
      },
      {
        year: "1994",
        title: "The Man Who Sold the World",
        era: "Unplugged afterglow",
        album: "MTV Unplugged in New York",
        writer: "David Bowie",
        note: "Cover as mirror",
        hook: "Cobain turns Bowie's identity song into something haunted and intimate.",
        backstory:
          "The performance strips away volume and leaves phrasing, vulnerability, and distance.",
        career:
          "Released after Cobain's death, it shaped how many listeners understood Nirvana's quieter side.",
        personal:
          "The cover's theme of estrangement made it feel uncannily suited to Cobain's public and private contradictions.",
        impact: "One of rock's most famous unplugged reinterpretations."
      }
    ]
  },
  {
    id: "janis-joplin",
    name: "Janis Joplin",
    kicker: "Blues feeling at full force",
    intro:
      "A Janis Joplin timeline about a voice that turned blues, rock, vulnerability, and ferocity into one of the late 1960s' most unforgettable presences.",
    stats: [
      ["1943-1970", "lifetime"],
      ["1967", "Monterey breakthrough"],
      ["1971", "posthumous hit"]
    ],
    sources: [
      ["Official Janis Joplin site", "https://janisjoplin.com/"],
      ["Janis Joplin music", "https://janisjoplin.com/music/"],
      ["Rock & Roll Hall of Fame: Janis Joplin", "https://rockhall.com/inductees/janis-joplin/"]
    ],
    songs: [
      {
        year: "1968",
        title: "Piece of My Heart",
        era: "Breakthrough fire",
        album: "Cheap Thrills",
        writer: "Jerry Ragovoy and Bert Berns",
        note: "Vulnerability as force",
        hook: "A soul song transformed into a rock confession that sounds like it is tearing itself open.",
        backstory:
          "Joplin's performance turns pain into power, making every repeat of the hook feel more exposed.",
        career:
          "It made her a defining voice of the San Francisco rock moment.",
        personal:
          "The song matched Joplin's public image: hungry for love, defiant, and emotionally unguarded.",
        impact: "Her signature Big Brother and the Holding Company performance."
      },
      {
        year: "1969",
        title: "Try",
        era: "Solo command",
        album: "I Got Dem Ol' Kozmic Blues Again Mama!",
        writer: "Jerry Ragovoy and Chip Taylor",
        note: "Horn-driven push",
        hook: "A soul-rock demand for persistence, carried by Joplin's relentless vocal attack.",
        backstory:
          "The fuller horn arrangement moved her sound toward soul and rhythm and blues.",
        career:
          "It marked the beginning of her post-Big Brother solo identity.",
        personal:
          "The title itself fits her mythology: effort, desire, and self-exposure pushed to the edge.",
        impact: "A key statement from her transitional solo period."
      },
      {
        year: "1970",
        title: "Me and Bobby McGee",
        era: "Posthumous classic",
        album: "Pearl",
        writer: "Kris Kristofferson and Fred Foster",
        note: "Freedom and loss",
        hook: "A road song about freedom that becomes heartbreaking in Joplin's hands.",
        backstory:
          "Her version moves from conversational warmth into full-throated release.",
        career:
          "Released after her death, it became her biggest single and reshaped her public memory.",
        personal:
          "The lyric's freedom and loneliness aligned powerfully with Joplin's image after 1970.",
        impact: "The posthumous hit that introduced many listeners to her softer side."
      },
      {
        year: "1971",
        title: "Mercedes Benz",
        era: "A cappella satire",
        album: "Pearl",
        writer: "Janis Joplin, Michael McClure, Bob Neuwirth",
        note: "Last-session icon",
        hook: "A dry, funny, a cappella prayer that mocks consumer desire with perfect timing.",
        backstory:
          "The spare recording makes the personality impossible to miss: wit, bite, and looseness.",
        career:
          "It became one of the most memorable final glimpses of Joplin on record.",
        personal:
          "The song complicates the tragic image by showing her humor and intelligence.",
        impact: "A small recording with enormous biographical weight."
      }
    ]
  }
];

let currentArtist = artists[0];

const artistSelect = document.querySelector("#artist-select");
const artistKicker = document.querySelector("#artist-kicker");
const artistIntro = document.querySelector("#artist-intro");
const artistStats = document.querySelector("#artist-stats");
const sourceList = document.querySelector("#source-list");
const timeline = document.querySelector("#timeline");
const pageTitle = document.querySelector("#page-title");

const panelFields = {
  year: document.querySelector("#story-year"),
  era: document.querySelector("#story-era"),
  title: document.querySelector("#story-title"),
  hook: document.querySelector("#story-hook"),
  backstory: document.querySelector("#story-backstory"),
  career: document.querySelector("#story-career"),
  personal: document.querySelector("#story-personal"),
  album: document.querySelector("#story-album"),
  writer: document.querySelector("#story-writer"),
  impact: document.querySelector("#story-impact")
};

function renderArtistOptions() {
  const options = artists.map((artist) => {
    const option = document.createElement("option");
    option.value = artist.id;
    option.textContent = artist.name;
    return option;
  });

  artistSelect.replaceChildren(...options);
  artistSelect.value = currentArtist.id;
}

function renderArtistShell() {
  document.title = `Rock & Roll Star Chronicle | ${currentArtist.name}`;
  pageTitle.textContent = currentArtist.name;
  artistKicker.textContent = currentArtist.kicker;
  artistIntro.textContent = currentArtist.intro;

  const stats = currentArtist.stats.map(([value, label]) => {
    const item = document.createElement("span");
    const strong = document.createElement("strong");
    strong.textContent = value;
    item.append(strong, ` ${label}`);
    return item;
  });
  artistStats.replaceChildren(...stats);

  const sources = currentArtist.sources.map(([label, href]) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = href;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = label;
    item.append(link);
    return item;
  });
  sourceList.replaceChildren(...sources);
}

function renderTimeline() {
  const items = currentArtist.songs.map((song, index) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.index = String(index);
    button.setAttribute("aria-label", `${song.year}, ${song.title}`);

    const title = document.createElement("span");
    title.className = "song-title";
    title.textContent = song.title;

    const dot = document.createElement("span");
    dot.className = "dot";
    dot.setAttribute("aria-hidden", "true");

    const year = document.createElement("span");
    year.className = "year";
    year.textContent = song.year;

    button.append(title, dot, year);
    li.append(button);
    return li;
  });

  timeline.replaceChildren(...items);
}

function setActiveSong(index) {
  const song = currentArtist.songs[index];

  panelFields.year.textContent = song.year;
  panelFields.era.textContent = song.era;
  panelFields.title.textContent = song.title;
  panelFields.hook.textContent = song.hook;
  panelFields.backstory.textContent = song.backstory;
  panelFields.career.textContent = song.career;
  panelFields.personal.textContent = song.personal;
  panelFields.album.textContent = song.album;
  panelFields.writer.textContent = song.writer;
  panelFields.impact.textContent = song.impact;

  document.querySelectorAll(".timeline button").forEach((button, buttonIndex) => {
    const isActive = buttonIndex === index;
    button.setAttribute("aria-current", isActive ? "true" : "false");
  });
}

function setArtist(artistId) {
  currentArtist = artists.find((artist) => artist.id === artistId) || artists[0];
  renderArtistShell();
  renderTimeline();
  setActiveSong(0);
}

timeline.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  setActiveSong(Number(button.dataset.index));
});

artistSelect.addEventListener("change", (event) => {
  setArtist(event.target.value);
});

renderArtistOptions();
setArtist(currentArtist.id);
