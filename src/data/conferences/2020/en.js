'use strict';

module.exports = {
  page: {
    regIsOn: Boolean(process.env.REG_IS_ON),
    year: 2020,
    home: 'https://fjk.hu/en',
    title: 'Fiatalok Jézusért Konferencia',
    assetsPath: '../../../assets',
    nav: {
      hero: {
        url: '#hero',
        text: 'Theme'
      },
      speakers: {
        url: '#speakers',
        text: 'Speakers'
      },
      seminars: {
        url: '#seminars',
        text: 'Seminars'
      },
      schedule:	{
        url: '#schedule',
        text: 'Schedule'
      },
      venue: {
        url: '#venue',
        text: 'Venue'
      },
      registration: {
        url: '#registration',
        text: 'Registration'
      },
      changeLang: {
        url: '../../../conferences/2020',
        text: 'HU'
      }
    }
  },
  content: {
    title: 'Jesus in the past and TODAY - the most efficient missionary method',
    dates: '29 Jan. – 2 Feb., 2020',
    location: 'Budapest, Hungary',
    motto: '"The Spirit of the Lord GOD is on Me, because the LORD has anointed Me to preach good news to the poor. He has sent Me to bind up the brokenhearted, to proclaim liberty to the captives and release from darkness to the prisoners"<br>Isa 61:1',
    speakers: {
      title: 'Speakers',
      speakers: [
        {
          img: '/img/szabolaszlo.jpg',
          name: 'László Szabó',
          description: 'Pastor',
          bio: 'I\'d had a precise plan for my life, but something came up. He spoke to me. Who, I had thought to be mute. I was mainly into technology, but God took three letters out, turning me toward greater secrets: theology. The questions of life and its miracles made me curious. I never wanted to be a pastor, yet today it is so close to me, and I am even teaching it. I used to avoid to speak about God, but nowadays I hardly do anything else. I didn\'t want to learn any foreign languages, and today I sometimes switch from one to another in a minute. It goes according to the international environment. This is the everyday reality, which I work in. Yet the changes and surprises are not over in my life. There are some, what I really enjoy, for example to make a Masai child smile in Tanzania. And there are some I don\'t like that much, for example how our Church looks like in our society. At present I work as a teacher at Friedensau Adventist University and I am also the head of the only european adventist missionary institute (ADIMIS).'
        },
        {
          img: '/img/neville.jpg',
          name: 'Neville Neveling ',
          description: 'Cell phone evangelist',
          bio: 'Neville has been living in Namibia for the last 31 years. He is married to Reinet and has two sons Ewan and Simon.  The youngest – Simon is married to Jenny, a British citizen and they have 4 daughters.<br>Neville was involved in IT for 12 years dealing with the development of relational data bases.<br>In 1983 he continued his Theology studies with Andrews University through Helderberg College in Somerset West, South Africa. During this time he was published several times in the “Ostraka” – a Theology Faculty publication produced by Dr. Isak van Zyl. He also pastored the Strand Church during this time and planted the church in Stellenbosch, South Africa together with Dr. Isak van Zyl.<br>In 1987 he accepted an offer to work for the Religious Department of the South West African Broadcasting Corporation in Windhoek, Namibia. This later became the Namibian Broadcasting Company.<br>He actively worked to promote the message of the Blessed Hope to this vast country. He has also been involved in the church and especially with Evangelism as that is one of his favourite activities.<br>Since 2017 he has been involved with Total Member Involvement (TMI)and developed a communications program to reach people on their cellphones. Because of this development, he now works for AWR360/TMI at General Conference as the Global Evangelism Trainer.'
        },
        {
          img: '/img/alexb.jpg',
          name: 'Alex Browne',
          description: '',
          bio: 'Alex Browne is a Civil Servant, who currently lives, works and worships in London. She spends most of her time finding excuses to be by the sea and trying not to buy more books.'
        },
        {
          img: '/img/csengeikaroly.jpg',
          name: 'Károly Csengei',
          description: 'Food Production Engineer, Lifestyle Counselor',
          bio: 'Food Production Engineer, devoted to the promotion of a healthy lifestyle. In his presentations, he uses plain and practical methods to introduce a self-conscious way of living. For 20 years he has been presenting and giving practical instruction on what we can do for our health.<br>He presents the theory, as well as the practice, of educating the healthy, eliminating risk factors and living a healthy life in order to easily and naturally prevent pathological conditions that might become serious long term. On his vegan cooking courses he shows how to use different substitutes while still maintaining recipes for rich, tasty meals.<br>In the case of already established problems we show alternatives that effectively help in the restoration of the body. We also support people with health problems in keeping their diet in the long run, so that this new way of eating can successfully integrate into their lifestyle. We give customised diet and lifestyle advices to stop the deterioration of the body and, if possible, to regain health.'
        }
      ]
    },
       seminars: {
      title: 'Seminars',
      seminars: [
        {
          title: 'Leadership training ',
          speaker: 'Tímea Matlák, Levente Bodnár, László Szabó',
          description: `<p>Do you feel every now and then like the world is falling apart? There is a lack of effective Christian leaders who have a good influence on others in non-Christian circles. This seminar seeks to answer the question of how to become an effective leader and multiplier who builds the community in their own environment and establishes Christian groups. Eating, talking and walking? - even the most common activities can be effective missionary tools. How? You will get an answer at this seminar!</p>`
        },
        {
          title: 'Cellphone Mission',
          speaker: 'Neville Neveling',
          description: `<p>Have you ever counted before how many people do you see with smartphones in their hands? Have you ever imagined how wonderful it would be to use these smartphones in spreading the Gospel? If you are interested in a really efficient method of using this devices, then come to the seminar of Neville Neveling. Great ideas are granted, wich will not only change your life, but many others' as well.</p>`
        },
		
        {
          title: 'Only One: The Lonely Adventist?',
          speaker: 'Alex Browne',
          description: `<p>There are around 5,223 Adventists in Hungary. That’s 1 for every for every 1868 people. This means you’re probably the only Seventh-day Adventist in your school, university or chosen career. That can feel lonely. You might also be the only young person in your church. That can be lonely too. Through the lens of the story of Elijah, we’ll ask the question whether being the 'only one’ is a normal part of the Christian experience and, if so, what we can do about it.</p>`
        },
		{
          title: 'Salt and Light: Does Evangelism have to be weird? ',
          speaker: 'Alex Browne',
          description: `<p>Adventists are a peculiar people, there’s no getting away from it. And by peculiar, I mean a Saturday-resting-healthy-eating-prophecy loving people, who read a lot of a 19th century female author called Ellen. But just because we’re peculiar doesn’t mean our evangelism has to be too. This seminar will focus on how talking to our friends about Jesus can be as normal  as having a conversation about the news and how we can be 'salt and light' (Matthew 5:13-16) right where we are.</p>`
        },
		{
          title: 'Church: What’s the Point? ',
          speaker: 'Alex Browne',
          description: `<p>Nowadays, church can feel irrelevant. Stand up, sit down, read, sing, listen (and possibly fall asleep). Is it even worth going when you can watch something better online from the comfort of your bed anyway? This seminar will look at Paul’s cosmic vision for the church in Ephesians and some practical tips for when the reality doesn’t look quite like the ideal.</p>`
        },
      ]
    },
    schedule: {
      title: 'Schedule',
      booklet: {
        link: '/files/schedule.pdf',
        text: 'Download the booklet in pdf format.'
      },
      schedule: {
        wednesday: {
          name: 'Wednesday',
          items: [
            {
              time: '15:00-18:00',
              text: 'Registration'
            },
            {
              time: '17:00-18:00',
              text: 'Supper'
            },
            {
              time: '18:00-19:40',
              text: '<strong>Opening Plenary (László Szabó)</strong>'
            },
            {
              time: '19:40-20:30',
              text: 'Exhibits open'
            },
	    {
              time: '19:40-22:00',
              text: 'Community time (games, talks)'
            },
          ]
        },
        thursday: {
          name: 'Thursday',
          items: [
            {
              time: ' ',
              text: 'Personal devotions'
            },
            {
              time: '08:30-09:30',
              text: '<strong>Morning Devotion, Prayer-time</strong>'
            },
            {
              time: '09:45-11:00',
              text: '<strong>Testimony (Neville Neveling)</strong>'
            },
            {
              time: '11:15-12:00',
              text: '<strong>Seminars</strong>'
            },
            {
              time: '12:00-13:00',
              text: 'Lunch'
            },
            {
              time: '13:00-13:30',
              text: 'FJK choir rehearsal / Exhibits open'
            },
            {
              time: '13:30-14:25',
              text: '<strong>Seminars</strong>'
            },
            {
              time: '14:30-14:45',
              text: 'Optional excercise'
            },
            {
              time: '15:00-15:45',
              text: '<strong>Seminars</strong>'
            },
            {
              time: '16:00-17:00',
              text: 'Small groups'
            },
            {
              time: '17:00-18:00',
              text: 'Supper'
            },
            {
              time: '18:00-19:30',
              text: '<strong>Plenary (László Szabó)</strong>'
            },
            {
              time: '19:40-20:30',
              text: 'Exhibits open'
            },
	    {
              time: '19:40-22:00',
              text: 'Community time (games, talks)'
            },
          ]
        },
        friday: {
          name: 'Friday',
          items: [
            {
              time: ' ',
              text: 'Personal devotions'
            },
            {
              time: '08:30-09:30',
              text: '<strong>Morning devotional</strong>'
            },
            {
              time: '09:45-10:50',
              text: '<strong>Seminars</strong>'
            },
			      {
			        time: '11:00-11:45',
              text: '<strong>Seminars</strong>'
            },
            {
              time: '12:00-13:00',
              text: 'Lunch'
            },
            {
              time: '13:00-13:30',
              text: 'FJK choir rehearsal / Exhibits open'
            },
            {
              time: '13:30-14:30',
              text: '<strong>Testimony (Alex Browne)</strong>'
            },
            {
              time: '14:30-16:30',
              text: '<strong>Outreach</strong>'
            },
            {
              time: '17:00-18:00',
              text: 'Supper'
            },
            {
              time: '18:00-19:30',
              text: '<strong>Plenary (László Szabó)</strong>'
            },
            {
              time: '19:30-20:30',
              text: 'Exhibits open'
            }
          ]
        },
        sabbath: {
          name: 'Sabbath',
          items: [
            {
              time: ' ',
              text: 'Personal devotions'
            },
            {
              time: '09:30-10:40',
              text: '<strong>Morning plenary (Alex Browne)</strong>'
            },
            {
              time: '11:00-12:30',
              text: '<strong>Divine service (László Szabó)</strong>'
            },
            {
              time: '13:00-14:00',
              text: 'Lunch'
            },
            {
              time: '14:00-14:30',
              text: 'Exhibits open'
            },
            {
              time: '14:30-15:45',
              text: '<strong>Seminars</strong>'
            },
            {
              time: '16:00-17:00',
              text: 'Small groups'
            },
            {
              time: '17:00-18:00',
              text: 'Supper'
            },
            {
              time: '18:00-19:30',
              text: '<strong>Plenary (László Szabó)</strong>'
            },
	    {
              time: '20:00-22:00',
              text: 'Community time (games, talks)'
            },
          ]
        },
        sunday: {
          name: 'Sunday',
          items: [
            {
              time: ' ',
              text: 'Personal devotions'
            },
            {
              time: '08:30-09:30',
              text: '<strong>Morning devotional</strong>'
            },
            {
              time: '09:45-11:30',
              text: '<strong>Closing plenary (László Szabó)</strong>'
            }
          ]
        }
      }
    },
    venue: {
      title: 'Venue',
      name: 'Budapest Central SDA Church',
      address: '1062 Budapest, Székely Bertalan u. 13',
      description: {
        showOnMap: {
          url: 'https://www.google.hu/maps/place/Adventista+Egyh%C3%A1z/@47.5124065,19.0686943,17z/data=!3m1!4b1!4m5!3m4!1s0x4741dc76a3e9f379:0xe2e25891ed49b993!8m2!3d47.5124065!4d19.0686943',
          text: 'Show it on a map'
        },
        text: 'On weekdays and on Sunday, the Conference will take place in the Central Church of Budapest.'
      },
      pics: [
        '/img/gyulkep.jpg',
        '/img/gyulkep-2.jpg',
        '/img/gyulkep-3.jpg'
      ]
    },
    sabbathVenue: {
      title: 'Venue',
      name: 'On Sabbath: Dürer Rendezvényház',
      address: '1146 Budapest, Ajtósi Dürer sor 19-21',
      description: {
        showOnMap: {
          url: 'https://www.google.com/maps?ll=47.509244,19.089315&z=16&t=m&hl=en-US&gl=HU&mapclient=embed&cid=3891721808783336383',
          text: 'Show it on a map'
        },
        text: 'The conference will take place at the <a href="http://durerhaz.hu/" target="_blank">Dürer Rendezvényház</a>, a modern cultural complex in Pest next to the Városliget, with excellent public transport accessibility.'
      },
      pics: [
        '/img/durer_1.jpg',
        '/img/durer_2.jpg',
        '/img/durer_3.jpg'
      ]
    },
    registration: {
      url: '../../registration',
      text: 'Register today!'
    }
  }
}