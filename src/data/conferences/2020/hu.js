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
          bio: 'Élelmiszeripari üzemmérnök, akik az egészséges életmód széles körben való terjesztésének elkötelezett híve. Előadásaiban közérthetően és gyakorlati módon mutat irányt a tudatos életmód felé. Húsz éve gyakorlatban mutatja be, hogy mit tehetünk az egészségünk érdekében.<br>Az egészségesek körében végzendő felvilágosítás, a rizikófaktorok kiküszöbölése, az egészséges életmód elméleti alapjainak és ezek gyakorlati megvalósíthatóságának ismertetése, amelyek segítségével egyszerű és természetes módon lehet megelőzni a későbbiekben esetleg komollyá váló kóros állapotokat.  Vegán főzőtanfolyamok tartása által megismertetni az emberekkel, hogy mit mivel lehet helyettesíteni és finom tartalmas ételeket készíteni.<br> Már kialakult problémák esetén olyan alternatívákat tanítunk, amelyek hatékonyan segítik a szervezetet a helyreállításban. Segítünk abban is, hogy a kialakult betegség diétáját a beteg hosszú távon meg tudja tartani úgy, hogy az új táplálkozási forma beépüljön az életvitelébe. Egyénre szabott, étrendi-életvezetési tanácsot adunk az állapotromlás megállatására, illetve lehetőség szerint az egészség visszaszerzése.'
        }
      ]
    },
    seminars: {
      title: 'Szemináriumok',
      seminars: [
        {
          title: 'Hogyan tanulmányozzuk a Bibliát?',
          speaker: 'Israel Ramos',
          description: `<p><ol>
            <li>Megfigyelések: Egy bibliaértelmezési gyakorlat</li>
            <li>A megértés útján: A Bibliatanulmányozás négy lépése</li>
            <li>A szöveg áttekintése</li>
            <li>Hogyan végezzünk hatékony szótanulmányokat?</li>
          </ol></p>`
        },
        {
          title: 'Jézus téged misszionáriussá tesz (Jn 15:16-17)',
          speaker: 'Milan Moskala',
          description: `<p><ol>
            <li>Kelj fel általam! (Ézs 60,1)</li>
            <li>Maradj bennem! (Jn 15,1-17)</li>
            <li>Ragyogj Lelkem által! (Csel 1,8)</li>
            <li>Örülj velem örökké! (Jn 16,20-24)</li>
          </ol></p>`
        },
        {
          title: 'A csatlakozás egy kutatás fényében',
          speaker: 'Ősz-Farkas Ernő',
          description: `
<p>
  Szakadások, széthúzások, konfliktusok a kereszténység történelmének állandósult tapasztalatai.
  Sokan kutatták a különféle szakadások okait, de egyesülésről, csatlakozásról, megbékélésről szinte
  nem létezik szakirodalom az Adventista Egyházban. Ritka tapasztalat átélője lehetett a Magyar Unió
  2015-ben, amikor 40 év után 700 fő csatlakozott a Hetednapi Adventista Egyház világszéles
  családjához.
</p>
<p>
A kutató (egy teológiai disszertáció keretében) a csatlakozás motivációit vizsgálta a kultúra-váltás
meglévő tudományos elméleteivel összevetve, 3 fókusz csoport bevonásával.
</p>

<p>Kérdések, amire választ keresünk 4 szemináriumi előadás alatt:</p>
<ul>
  <li>A magyar tapasztalat mennyiben adhat pozitív mintát egyházunkat ma is sújtó virtuális
szakadások megoldására?</li>
  <li>A csatlakozás lélektanának jobb megértése mennyiben segítheti az aggodalmak eloszlását, az
integráció megélését, a vezetői támogatás hatékonyságát?</li>
  <li>A változás szakaszainak megértése és tudatosítása mennyiben segítheti az élet más
területein tapasztalt váltások megélését?</li>
</ul>

<br>

<p>A szemináriumi előadások:</p>
<p>
<ol>
  <li><div>
  <p><strong>A magyar adventista szakadások és a sikertelen csatlakozási kísérletek anatómiája</strong></p>
  <p>A kommunista diktatúra hátterén három nagyobb szakadás sajátos mintázatot követett. Melyek az
ismétlődő motívumok? Más politikai háttéren is elképzelhetők hasonló jelenségek? Mit tanulhatunk
a múltból?</p>
</div></li> 
  
  <li><div>
  <p><strong>A csatlakozás lélektana</strong></p>
  <p>A kutatás módszertanának megértése megalapozza az eredmények hitelességét. Hogyan lehet 30 fős
minta véleményét kiterjeszteni a csatlakozók népes táborára? Nyolc sikertelen kísérlet után, milyen
körülmények segítették a 2015-ös folyamatot? A csatlakozás motívumai a három fókusz csoport
elemzése alapján.</p>
</div></li>  

  <li><div>
  <p><strong>William Bridges átmenet-elmélete és az integráció folyamata</strong></p>
  <p>A kutatás eredményei és tanulságai. Van-e meglepetés ahhoz képest, amit kívülről látunk vagy
belülről átéltünk? Hogyan hasznosíthatók a tanulságok?</p>
</div></li>  

  <li><div>
  <p><strong>Teológiai reflexiók a csatlakozás bibliai alapjairól</strong></p>
  <p>Nem mi írjuk a történelmet. 2000 évvel ezelőtt zsidók és pogányok évezredes válaszfala dőlt le. Mi
történt akkor? Hogyan alkalmazzuk ma? Mi történne, ha a biblikus vonalat követnénk? Melyek a mai
válaszfalak egyházon belül? Van-e remény a valóságos egységre, vagy csak illúziót kergetünk?</p>
</div></li>  
</ol>
</p>

<p>Melyek a csatlakozás vezetői kihívásai? A kutatás összefoglaló, mai tanulságai.</p>

<p><strong>Megjegyzés:</strong> Az előadások egymásra épülnek. Azoknak ajánljuk, akik mind a 4 előadást meg tudják
hallgatni.</p>
`
        },
        {
          title: 'Innováció a misszióban',
          speaker: 'Jonathan Ostrowski',
          description: ''
        },
        {
          title: 'Függök tőle vagy szeretem? Mi a különbség?',
          speaker: 'Horváth Gábor',
          description: `Társfüggőség és egészséges kapcsolódás a Biblia mérlegén
      </p>

      <p>
        A szeminárium alatt feldolgozott témák a következők:
      </p>

      <p>
        <ol>
          <li><div>
            <p>Hogyan lesz valakiből társfüggő? Mi van akkor, ha én is az vagyok?</p>
            <p>Alapkapcsolódásaim számbavétele</p>
          </div></li>

          <li><div>
            <p>A társfüggőség két szélsősége és megjelenési formái</p>
            <p>Hol vannak a határaim, mennyire látom a másik határait?</p>
          </div></li>

          <li><div>
            <p>Az egészséges párkapcsolat jellemzői</p>
            <p>Alapozás egy életre szóló kapcsolathoz</p>
          </div></li>

          <li><div>
            <p>Hogyan szeretne Isten kapcsolódni hozzám?</p>
            <p>Stabil alapozás, stabil kapcsolatok</p>
        </div></li>
        </ol>`
        }
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
              time: '18:00-19:40',              
              text: '<strong>Nyitóalkalom, Plenáris előadás (Szabó László)</strong>'
            },
            {
              time: '19:30-21:00',
              text: 'Kiállítások nyitva'
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
              text: '<strong>Reggeli áhítat, imaalkalom</strong>'
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
              text: 'Kiállítások nyitva'
            },
            {
              time: '13:30-15:45',
              text: '<strong>Szemináriumok</strong>'
            },
            {
              time: '14:30-14:45',
              text: 'Vezetett Mozgás (fakultatív)'
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
              text: '<strong>Plenáris előadás (Szabó László)</strong>'
            },
            {
              time: '19:30-20:30',
              text: 'Kiállítások nyitva'
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
              text: '<strong>Reggeli áhítat, imaalkalom</strong>'
            },
            {
              time: '09:45-12:00',
              text: 'Szemináriumok'
            },
            {
              time: '12:00-13:00',
              text: 'Ebéd'
            },
			      {
              time: '13:00-13:30',
              text: 'Kiállítások nyitva'
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
              text: '<strong>Plenáris előadás (Szabó László)</strong>'
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
              text: '<strong>Reggeli plenáris előadás (Alex Browne)</strong>'
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
              time: '14:30-15:30',
              text: 'Szemináriumok'
            },
	      		{
              time: '15:45-16:45',
              text: 'Kiscsoportos beszélgetés'
            },
            {
              time: '17:00-18:00',
              text: 'Vacsora'
            },
            {
              time: '18:00-19:45',
              text: '<strong>Plenáris előadás (Szabó László)</strong>'
            },
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
              text: '<strong>Reggeli áhítat, imaalkalom</strong>'
            },
            {
              time: '09:45-11:30',
              text: '<strong>Záróplenáris (Szabó László)</strong>'
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
