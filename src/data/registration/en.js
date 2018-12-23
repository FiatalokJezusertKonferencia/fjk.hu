'use strict';

const assetsPath = '../../assets';

module.exports = {
  page: {
    regIsOn: Boolean(process.env.REG_IS_ON),
    liveIsOn: Boolean(process.env.LIVE_IS_ON),
    regIsClosed: 'The registration is closed',
    home: 'https://fjk.hu/en',
    title: 'Fiatalok Jézusért Konferencia',
    assetsPath: assetsPath,
    nav: {
      conference: {
        url: '../conferences/2018/',
        text: 'By faith'
      },
      changeLang: {
        url: '../../registration/',
        text: 'HU'
      }
    }
  },
  content: {
    errors: {
      email: 'Please use valid email address',
      birth: 'Please use the valid date format (1990/12/31)',
      empty: 'Please fill out this field',
      server: 'Something went wrong, please try again later!',
      user: 'This email address has already been used for a registration! If you want to modify it, please contact us by email at <a href="mailto:reg@fjk.hu">reg@fjk.hu</a>!',
      progress: 'Your registration is in progress...',
      smallDisplay: 'Please proceed your registration on higher resolution screen...'
    },
    next: 'Next',
    prev: 'Previous',
    submit: 'Submit',
    cta: 'Register today!',
    price: 'Registration fee',
    attendancePrice: 'Participation fee <b><span id="regCalculator" class="price-calculator"></span> Ft</b>',
    swagPrice: 'Funding packages <b><span id="swagCalculator" class="price-calculator">0</span> Ft</b>',
    fullPrice: 'Fee to be transferred* <b><span id="fullCalculator"></span> Ft</b>',
    fullPriceHelp: 'The accommodation fee is not included!',
    success: {
      title: 'Your application was successful!',
      subtitle: 'We\'ll send you an email with the details!'
    },
    info: {
      title: 'Information',
      description: 'To finalize your registration, you have to transfer the <span class="emph">whole amount</span> of the calculated registration fee. We require your registration fee amount to be transferred to the following account: <span class="emph">12001008-01177336-00100001</span> (<span class="emph">ASI Magyarország</span>). At the memo, please add the name of the registered participant(s), and please also add „<span class="emph">FJK támogatás</span>”. If you have any other question or request, please feel free to contact us via e-mail at <a href="mailto:info@fjk.hu">info@fjk.hu</a>!<br>Please note that if you can use only a non-Hungarian bank for transfer, then you are not required to pay deposit - due to high amount of transfer costs. You can settle your registration fee at the conference registration venue in cash. In this case, please expect an e-mail from the organizers right before the conference when we ask you for a second confirmation of your application.<br>Cost of participation:<br>The Early bird registration fee is 3.000 Ft. For Early Bird registration please transfer the above amount by the 30th of December, 2018 until 23:55 o\'clock.<br>The normal registration fee is 3.500 HUF, and is open until the 14th of January, 2019, 23.55 o\'clock. For valid registration, please transfer the money until the afore mentioned date and time.<br>The last minute registration fee is 4,500 HUF. Please register and transfer the amount until the 21st of January, 2019, 23:55 o\'clock.'
    },
    tabs: {
      conference: {
        title: 'Attendance',
        meal: {
          title: 'Meal',
          thursday: 'Thursday',
          friday: 'Friday',
          sabbath: 'Sabbath',
          lunch: 'Lunch',
          dinner: 'Dinner',
          info: 'Breakfast is included in the accommodation prices'
        },
        attendance: {
          full: 'Participating in the whole conference',
          sabbath: 'Visiting only on Sabbath and/or on workdays after 17:00'
        }
      },
      housing: {
        title: 'Housing',
        broadway: {
          subtitle: 'This accommodation is recommended for group reservations!',
          text: 'The housing will be in apartments for 4 people, which include <strong>2 non-seperable double beds</strong>. A kitchen and a bathroom belong to every apartment. Separate application is also possible, but in this case the conference organisers will house the applicants on one of the double beds, along with a participant, who applied similarly. Please download the accommodation booking form for more information. <a href="' + assetsPath + '/forms/broadway-en.docx">Download</a> the application form.'
        },
        benczur: {
          subtitle: 'This accommodation is recommended for individual or double booking!',
          text: 'The housing will be in hotel rooms with 1 or 2 beds, which are separable. Separate application is also possible, but in this case the conference organisers will house the applicants on one of the beds, along with a participant, who applied similarly. Please download the accommodation booking form for more information. Check out the <a href="http://www.hotelbenczur.hu/en" target="_blank">apartments</a> then <a href="' + assetsPath + '/forms/benczur-en.docx">the application form</a>.'
        }
      },
      program: {
        title: 'Program',
        subtitle: 'Help us',
        label: 'Volunteer work',
        translate: 'Translation (English - Hungarian)',
        smallGroups: 'Guiding small-group discussions',
        diaconia: 'Diaconia',
        other: 'Other services'
      },
      support: {
        title: 'Support',
        subtitle: 'Support the Conference',
        label: 'Funding packages',
        description: 'Here you have the opportunity to donate by Funding Packages. Every package includes specially designed, FJK – marked products, pocket-book (more options) and Glow tracts. Choose one and support us!<br>Color of the items of your bundle (pick a color that you like):',
        small: 'Small: pocket-book (more options) + stickers + Glow tracts',
        normal_1: 'Normal I: mug with spoon + drawstring bag + fridge magnet',
        normal_2: 'Normal II: mug with spoon + drawstring bag + stickers',
        extra_1: 'Expanded I: water bottle + drawstring bag + fridge magnet',
        extra_2: 'Expanded II: mug with spoon + shopping bag + fridge magnet',
        extra_3: 'Expanded III: pocket-book (more options) + mug with spoon + drawstring bag + power bank + fridge magnet',
        '0': 'I pray for the Conference!',
        colors: {
          red: 'red (fire, purificiation, power)',
          green: 'green (growth, restart, renewal)',
          blue: 'blue (purity)'
        },
        hoodies: {
          title: 'You can check out the hoodies here: <a id="popover-menHoody" rel="popover" data-content="" title="Men\'s hoodies">men</a> és <a id="popover-womenHoody" rel="popover" data-content="" title="Women\'s hoodies">women</a>. Size: <a id="popover-men" rel="popover" data-content="" title="Men">men</a>, <a id="popover-women" rel="popover" data-content="" title="Women">women</a>, <a id="popover-menHoodySize" rel="popover" data-content="" title="Men\'s hoodies">men\'s hoodies</a> és <a id="popover-womenHoodySize" rel="popover" data-content="" title="Women\'s hoodies">women\'s hoodies</a>.',
          type: 'Type',
          size: 'Size',
          quantity: 'Quantity',
          shirts: {
            men: 'Men\'s T-Shirts (1250 Ft)',
            women: 'Women\'s T-Shirts (1250 Ft)',
            menHoody: 'Men\'s hoody (4000 Ft)',
            womenHoody: 'Women\'s hoody (4500 Ft)'
          }
        }
      },
      personal: {
        title: 'Personal details',
        subtitle: 'We use this data only for the registration',
        lname: 'Last name*',
        fname: 'First name*',
        d: 'Email*',
        birth: 'Date of birth (1990/12/31)*',
        city: 'City*',
        country: 'Country / Region*',
        newsletter: 'Sign up for FJK newsletter'
      }
    }
  }
};