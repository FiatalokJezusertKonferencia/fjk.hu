'use strict';

module.exports = {
  page: {
    regIsOn: Boolean(process.env.REG_IS_ON),
    year: 2020,
    home: 'https://fjk.hu',
    title: 'Fiatalok Jézusért Konferencia',
    assetsPath: '../../assets',
    nav: {
      hero: {
        url: '#hero',
        text: 'Téma'
      },
      speakers: {
        url: '#speakers',
        text: 'Előadók'
      },
      seminars: {
        url: '#seminars',
        text: 'Szemináriumok'
      },
      schedule: {
        url: '#schedule',
        text: 'Program'
      },
      venue: {
        url: '#venue',
        text: 'Helyszín'
      },
      registration: {
        url: '#registration',
        text: 'Regisztráció'
      },
      changeLang: {
        url: '../../en/conferences/2020',
        text: 'EN'
      }
    }
  },
  content: {
    title: 'Jézus egykor... és MA - avagy a leghatékonyabb missziós módszer',
    dates: '2020. jan. 29 - febr. 02.',
    location: 'Budapest',
    motto: '"Uramnak, az Úrnak lelke nyugszik rajtam, mert felkent engem az Úr. Elküldött, hogy örömhírt vigyek a szegényeknek, bekötözzem a megtört szíveket, szabadulást hirdessek a foglyoknak, és szabadon bocsátást a megkötözötteknek."<br>Ézsaiás 61:1 ',
    speakers: {
      title: 'Előadók',
      speakers: [
        {
          img: '/img/szabolaszlo.jpg',
          name: 'Szabó László',
          description: 'Lelkész',
          bio: 'Gondosan megterveztem az életem, de közbejött valami. Megszólított, Akiről előtte azt gondoltam csak hallgatni tud. Leginkább a technológia érdekelt, de Isten kivett belőle három betűt és sokkal nagyobb titkok felé fordított: teológia. A lét és a természetfölötti kérdései kíváncsivá tettek. Soha nem akartam lelkész lenni, most mégis ez áll legközelebb hozzám és másokat is erre képezek. Kerültem, hogy Istenről beszéljek, most szinte mást sem teszek. Nem akartam nyelveket tanulni, most néha percenként váltok a nyelvek között. A nemzetközi közeg diktálja a tempót. Ez a hétköznapi valóság, amiben dolgozom. A meglepetések és változások sora az életemben még mindig tart. Van, amit nagyon szeretek, például a nincstelen Maszáj gyermekek arcára mosolyt varázsolni Tanzániában. Van, amit kevésbé szeretek. Ilyen az egyház helyzete és képe a mai társadalomban. Jelenleg a Friedensau Adventista Egyetem tanára és az egyetlen európai adventista missziói intézet (ADIMIS) vezetője vagyok. Rengeteg lehetőséget kapok az érdeklődési területemnek megfelelő szolgálatra és örülök annak, hogy ebben társam a feleségem Szilvia is. Az élet bónusza és kiváltsága az, hogy Istentől két most már egyre inkább felnőtté váló gyermeket is kaptunk.'
        },
        {
          img: '/img/neville.jpg',
          name: 'Neville Neveling',
          description: 'MCSSA',
          bio: 'Neville 31 éve él Namíbiában. Reinettel kötött házasságot, két gyermekük van - Ewan és Simon. A fiatalabbik - Simon házas. Jennyvel, egy angol állampolgárral házasodott össze, négy gyermekük született.<br>Neville 12 évet foglalkozott az informatika területén a relációs adatbázisok fejlesztésével.<br>1983-ban folytatta a teológiai tanulmányait az Andrews Egyetemen a Helderberg Főiskolán (Somerset West, Dél-Afrika) keresztül. Ez idő alatt számos tanulmánya jelent meg az „Ostrakában”, ami egy teológiai kar kiadványa Dr. Isak van Zyl vezetésével. Emellett lelkészként szolgált a Strand Gyülekezetben, és egy gyülekezetet alapított Stellenboschban (Dél-Afrika) Dr. Isk van Zyllel.<br>1987-ben elfogadott egy ajánlatot, hogy a délnyugat-afrikai rádióközvetítési vállalat vallási osztályán dolgozzon Windhoekben, Namíbiában. Ez később a Namíbiai Rádióközvetítési Vállalattá vált.<br>Tevékenyen dolgozott annak érdekében, hogy eljuttassa az áldott reménység üzenetét hatalmas országának. Továbbá részt vett a gyülekezet életében, különösképpen az evangelizálásban, mint az egyik kedvenc tevékenységében.<br>2017 óta vesz részt a Teljes Tagbevonás programjában (Total Member Involvement - TMI), amelynek keretében egy kommunikációs programot fejlesztett, aminek segítségével elérhetik az embereket a mobiltelefonjukon. Ebből a fejlesztésből kifolyólag jelenleg a Generál Konferencián belül az AWR360/TMI-nek dolgozik, mint globális evangelizációs oktató.'
        },
        {
          img: '/img/alexb.jpg',
          name: 'Alex Browne',
          description: '',
          bio: 'Alex Browne egy köztisztviselő, aki jelenleg Londonban dolgozik és éli meg hitének mindennapjait. Legtöbb idejét kifogások keresésével tölti, hogy a tengerparton lehessen és próbál nem megvenni több könyvet.'
        },
        {
          img: '/img/csengeikaroly.jpg',
          name: 'Csengei Károly',
          description: 'Élelmiszeripari üzemmérnök, életmód tanácsadó',
          bio: 'Élelmiszeripari üzemmérnök, akik az egészséges életmód széles körben való terjesztésének elkötelezett híve. Előadásaiban közérthetően és gyakorlati módon mutat irányt a tudatos életmód felé. Húsz éve gyakorlatban mutatja be, hogy mit tehetünk az egészségünk érdekében.<br>Az egészségesek körében végzendő felvilágosítás, a rizikófaktorok kiküszöbölése, az egészséges életmód elméleti alapjainak és ezek gyakorlati megvalósíthatóságának ismertetése, amelyek segítségével egyszerű és természetes módon lehet megelőzni a későbbiekben esetleg komollyá váló kóros állapotokat.  Vegán főzőtanfolyamok tartása által megismertetni az emberekkel, hogy mit mivel lehet helyettesíteni és finom tartalmas ételeket készíteni.<br> Már kialakult problémák esetén olyan alternatívákat tanítunk, amelyek hatékonyan segítik a szervezetet a helyreállításban. Segítünk abban is, hogy a kialakult betegség diétáját a beteg hosszú távon meg tudja tartani úgy, hogy az új táplálkozási forma beépüljön az életvitelébe. Egyénre szabott, étrendi-életvezetési tanácsot adunk az állapotromlás megállítására, illetve lehetőség szerint az egészség visszaszerzése.'
        }
      ]
    },
    seminars: {
      title: 'Szemináriumok',
      seminars: [
        {
          title: 'Vezetőképzés ',
          speaker: 'Matlák Tímea, Bodnár Levente, Szabó László',
          description: `<p>Időnként úgy érzed szétesőben van a világ? Hiányoznak a hatékony keresztény vezetők, akik jó befolyást gyakorolnak másokra nem keresztény körökben is. Ez a szeminárium választ keres arra a kérdésre, hogyan válhatsz a saját környezetedben közösségépítő, keresztény csoportokat alapító hatékony vezetővé és multiplikátorrá. Étkezés, beszélgetés és séta? – a leghétköznapibb elemek is hatékony eszközei lehetnek a missziónak. Hogyan? A szemináriumon választ kapsz rá!</p>`
        },
        {
          title: 'Cellphone Mission',
          speaker: 'Neville Neveling',
          description: `<p>Megszámoltad már valaha, hogy egy nap alatt hány embert látsz okostelefonnal a kezében? És gondolkoztál már azon, hogy milyen fantasztikus lehetőség rejlene abban, ha az okostelefonokat az evangélium hirdetésének szolgálatába állítanánk? Ha érdekel egy nagyon hatékony módszer, hogy hogyan lehet ezeken az eszközökön keresztül missziózni, akkor gyere el Neville Neveling szemináriumára és garantáltan olyan ötleteket fogsz belőle kapni, amelyek nem csak a Te életedet, hanem sokak életét megváltoztatják./p>`
        },
		{
          title: 'Nem minden egészséges, amit eladnak nekünk',
          speaker: 'Csengei Károly / csütörtök délelőtt',
          description: `<p>Ma sokkal több külső és belső károsító faktor létezik. A korábbinál jóval nagyobbak a káros terhelések. Egy részük kiiktatható, más részük ellensúlyozható. AZ EGÉSZSÉG EVANGÉLIUMA: Bármikor „új élet” kezdhető. Amikor jobban tudatosul benned az, hogy a döntésed az élelmiszerről az döntés az energiáról is, döntés a földről, döntés a vízről, akkor elkezdhetsz változtatni a viselkedéseden.</p>`
        },
		{
          title: 'Miként tudok jobban koncentrálni a vizsgán?',
          speaker: 'Csengei Károly / csütörtök délután',
          description: `<p>Hatékonyabb problémamegoldás, jobb emlékezőképesség, hosszabb időn át tartó figyelőképesség, gördülékeny beszéd, jobb magaviselet, jobb iskolai eredmények? Nem lehetetlen, ha valóban szeretnénk és teszünk is érte. Hogyan tudjuk növelni az állóképességünket? <i>(interaktív, főzés és kóstolás)</i></p>`
        },
		{
          title: 'Mit nyerhetünk a szokások átprogramozásával?',
          speaker: 'Csengei Károly / csütörtök délután',
          description: `<p>A gondolattól az „új életig”. A változtatás alapfeltétele, annak elismerése és elfogadása, hogy életvitelemben hiányosságok vannak és a helytelen szokások kiküszöbölése nélkül előbb-utóbb megbetegszem, tanácsra van szükségem. Gondolat, cselekedet, jó szokások, egészségjavulás, szemléletváltozás, személyiségváltozás. <i>(interaktív, főzés és kóstolás)</i></p>`
        },
		{
          title: 'Milyen lehetőséget nyújt számunkra a klímaváltozás?',
          speaker: 'Csengei Károly / péntek délelőtt',
          description: `<p>Tízmilliárd ember etetése lehetséges, azonban csak akkor, ha megváltoztatjuk ahogy az ételeket termeljük, illetve elfogyasztjuk,” “Az élelmiszer szektor kizöldítése, vagy a bolygó felfalása: ma ez van étlapon”. Mi is hozzá tudunk járulni ahhoz, hogy egy sokkal fenntarthatóbb világban éljünk, és ezt a világot még a gyerekeink is élvezni tudják.</p>`
        },
		{
          title: 'Hogyan lehetek érzékeny és figyelmes hallgató?',
          speaker: 'Csengei Károly / péntek délelőtt',
          description: `<p>Az Úr azt szeretné, hogy minden szolgája ragadja meg az orvosi missziómunkát, kapcsolatot teremtve így az emberekkel, akiknek szíve meglágyul, amikor ínségüket enyhítitek. Mialatt szenvedéseiket enyhítitek, alkalom nyílik velük Jézus szeretetéről beszélni.</p>`
        },
		{
          title: 'Hogy lehetek kétszerte eredményesebb a misszióban?',
          speaker: 'Csengei Károly / szombat délután',
          description: `<p>Isten gyógymódjai megnyitják az ajtót az időszerű igazság előtt. A mindennapi cselekedetek többet mondanak, mint a szavak áradata. A kedvesség, gyengédség, szívesség, keresztény jóakarat, türelem és szeretet eloszlatja az előítéletet, s megnyitja a szívet az igazság befogadására.</p>`
        },
        {
          title: 'Az egyetlen: A magányos adventista?',
          speaker: 'Alex Browne',
          description: `<p>Körülbelül 5.223 adventistát számolunk ma Magyarországon. Tehát egy adventistára 1868 ember jut. Ez azt jelenti, hogy valószínűleg te vagy az egyetlen hetednapi adventista az iskoládban, az egyetemeden, vagy választott hivatásodban. Ettől magányosnak érezheted magad. Talán te vagy az egyetlen fiatal a gyülekezetedben. Ez is magányossá tud tenni. Illés történetén keresztül megpróbálunk választ találni arra kérdésre, hogy „egyetlennek” lenni keresztény életünk természetes velejárója-e; és ha igen, mit kezdjünk vele?</p>`
        },
		{
          title: 'Só és világosság: Muszáj, hogy az evangelizáció furcsa legyen?',
          speaker: 'Alex Browne',
          description: `<p>Az adventisták különös emberek, ezt nem tagadhatjuk. Különös alatt szombati pihenőnapot tartó, egészségesen étkező, próféciaszerető embereket értek, akik sokat olvasnak egy 19. századi, Ellen nevű női szerzőtől. Azonban csak azért, mert különösek vagyunk, nem kell evangelizációnknak is különösnek lennie. Ez a szeminárium arról fog szólni, hogyan beszélhetünk barátainknak Jézusról olyan természetesen, mintha a hírekről beszélgetnénk; és hogyan lehetünk „só és világosság” (Máté 5:13-16) éppen ott, ahol vagyunk.</p>`
        },
		{
          title: 'Gyülekezet: Mi értelme van?',
          speaker: 'Alex Browne',
          description: `<p>Manapság a gyülekezet lényegtelennek tűnhet. Felállni, leülni, olvasni, énekelni, hallgatni (és esetleg elaludni). Egyáltalán van-e értelme elmenni, amikor az ágyad kényelméből valami jobbat is nézhetsz online? Ez a szeminárium Pálnak az efézusi gyülekezetről alkotott kozmikus vízióját fogja megvizsgálni; illetve néhány gyakorlatias tanácsot keres olyan helyzetekre, amikor a valóság eltér az ideálistól.</p>`
        },
      ]
    },
    schedule: {
      title: 'Program',
      booklet: {
        link: '/files/program.pdf',
        text: 'Töltsd le a programot pdf-ben.'
      },
      schedule: {
        wednesday: {
          name: 'Szerda',
          items: [
            {
              time: '15:00-18:00',
              text: 'Regisztráció'
            },
            {
              time: '17:00-18:00',
              text: 'Vacsora'
            },
            {
              time: '18:00-19:40',              
              text: '<strong>Megnyitó és esti áhítat (Szabó László)</strong>'
            },
            {
              time: '19:40-21:00',
              text: 'Kiállítások nyitva'
            },
			      {
              time: '19:40-22:00',
              text: 'Közösségi program (játék, beszélgetés)'
            }
          ]
        },
        thursday: {
          name: 'Csütörtök',
          items: [
            {
              time: ' ',
              text: 'Személyes áhítat'
            },
            {
              time: '08:30-09:30',
              text: '<strong>Reggeli imaalkalom</strong>'
            },
			      {
              time: '09:45-11:00',
              text: '<strong>Bizonyságtétel (Neville Neveling)</strong>'
            },
            {
              time: '11:15-12:00',
              text: 'Szemináriumok'
            },
            {
              time: '12:00-13:00',
              text: 'Ebéd'
            },
            {
              time: '13:00-13:30',
              text: 'FJK kóruspróba / Kiállítások nyitva'
            },
            {
              time: '13:30-14:25',
              text: '<strong>Szemináriumok</strong> (közös kezdéssel)'
            },
            {
              time: '14:30-14:45',
              text: 'Vezetett Mozgás (fakultatív)'
            },
			{
              time: '15:00-15:45',
              text: '<strong>Szemináriumok</strong>'
            },
            {
              time: '16:00-17:00',
              text: 'Kiscsoportos beszélgetés'
            },
            {
              time: '17:00-18:00',
              text: 'Vacsora'
            },
            {
              time: '18:00-19:30',
              text: '<strong>Esti áhítat (Szabó László)</strong>'
            },
            {
              time: '19:30-20:30',
              text: 'Kiállítások nyitva'
            },
			      {
              time: '19:30-22:00',
              text: 'Közösségi program (játék, beszélgetés)'
            }
          ]
        },
        friday: {
          name: 'Péntek',
          items: [
            {
              time: ' ',
              text: 'Személyes áhítat'
            },
            {
              time: '08:30-09:30',
              text: '<strong>Reggeli imaalkalom</strong>'
            },
            {
              time: '09:45-10:50',
              text: '<strong>Szemináriumok</strong> (közös kezdéssel)'
            },
			      {
              time: '11:00-11:45',
              text: '<strong>Szemináriumok</strong>'
            },
            {
              time: '12:00-13:00',
              text: 'Ebéd'
            },
			      {
              time: '13:00-13:30',
              text: 'FJK kóruspróba / Kiállítások nyitva'
            },
            {
              time: '13:30-14:30',
              text: '<strong>Bizonyságtétel (Alex Browne)</strong>'
            },
			      {
              time: '14:30-16:30',
              text: '<strong>Külmissziós tevékenység</strong>'
            },
            {
              time: '17:00-18:00',
              text: 'Vacsora'
            },
            {
              time: '18:00-19:30',
              text: '<strong>Esti áhítat (Szabó László)</strong>'
            },
            {
              time: '19:30-20:30',
              text: 'Kiállítások nyitva'
            }
          ]
        },
        sabbath: {
          name: 'Szombat',
          items: [
            {
              time: ' ',
              text: 'Személyes áhítat'
            },
            {
              time: '09:30-10:40',
              text: '<strong>Szombatiskola (Alex Browne)</strong>'
            },
            {
              time: '11:00-12:30',
              text: '<strong>Istentisztelet (Szabó László)</strong>'
            },
            {
              time: '13:00-14:00',
              text: 'Ebéd'
            },
            {
              time: '14:00-14:30',
              text: 'Kiállítások nyitva'
            },
            {
              time: '14:30-15:45',
              text: '<strong>Szemináriumok</strong> (közös kezdéssel)'
            },
	      		{
              time: '16:00-17:00',
              text: 'Kiscsoportos beszélgetés'
            },
            {
              time: '17:00-18:00',
              text: 'Vacsora'
            },
            {
              time: '18:00-19:30',
              text: '<strong>Esti áhítat (Szabó László)</strong>'
            },
			{
              time: '20:00-22:00',
              text: 'Közösségi program (játék, beszélgetés)'
            }
          ]
        },
        sunday: {
          name: 'Vasárnap',
          items: [
            {
              time: ' ',
              text: 'Személyes áhítat'
            },
            {
              time: '08:30-09:30',
              text: '<strong>Reggeli imaalkalom</strong>'
            },
            {
              time: '09:45-11:30',
              text: '<strong>Záróplenáris (Szabó László)</strong>'
            },
			      {
              time: '12:00-13:00',
              text: 'Megbeszélés a leendő önkéntesekkel :)'
            }
          ]
        }
      }
    },
    venue: {
      title: 'Helyszín',
      name: 'Terézvárosi Adventista Gyülekezet',
      address: '1062 Budapest, Székely Bertalan u. 13',
      description: {
        showOnMap: {
          url: 'https://www.google.hu/maps/place/Adventista+Egyh%C3%A1z/@47.5124065,19.0686943,17z/data=!3m1!4b1!4m5!3m4!1s0x4741dc76a3e9f379:0xe2e25891ed49b993!8m2!3d47.5124065!4d19.0686943',
          text: 'Mutasd térképen'
        },
        text: 'Hétköznap és vasárnap a Budapest Terézvárosi Adventista Gyülekezet lesz a Konferencia helyszíne.'
      },
      pics: [
        '/img/gyulkep.jpg',
        '/img/gyulkep-2.jpg',
        '/img/gyulkep-3.jpg'
      ]
    },
    sabbathVenue: {
      title: 'Helyszín',
      name: 'Szombaton: Dürer Rendezvényház',
      address: '1146 Budapest, Ajtósi Dürer sor 19-21.',
      description: {
        showOnMap: {
          url: 'https://www.google.com/maps/place/D%C3%BCrer+Rendezv%C3%A9nyk%C3%B6zpont/@47.5092441,19.0871213,17z/data=!3m1!4b1!4m5!3m4!1s0x4741dc8096f9263f:0x36022c5da92be3bf!8m2!3d47.5092441!4d19.0893153',
          text: 'Mutasd térképen'
        },
        text: 'A Konferencia szombati helyszíne idén újra a <a href="http://durerhaz.hu/" target="_blank">Dürer Rendezvényházban</a> lesz, amely már számos egyházi rendezvényünknek adott otthont.'
      },
      pics: [
        '/img/durer_1.jpg',
        '/img/durer_2.jpg',
        '/img/durer_3.jpg'
      ]
    },
    registration: {
      url: '../../registration',
      text: 'Regisztrálj még ma!'
    }
  }
};
