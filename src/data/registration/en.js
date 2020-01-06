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
        url: '../conferences/2020/',
        text: 'Jesus in the past and TODAY - the most effecient missionary method'
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
    fullPrice: 'Fee to be transferred <b><span id="fullCalculator"></span> Ft</b>',
    fullPriceHelp: 'The accommodation fee is not included!',
    close: 'Close',
    success: {
      title: 'Your application was successful!',
      subtitle: 'We\'ll send you an email with the details!'
    },
    info: {
      title: 'Information',
      description: 'To finalize your registration, you have to transfer the <span class="emph">whole amount</span> of the calculated registration fee. We require your registration fee amount to be transferred to the following account: <span class="emph">12001008-01177336-00100001</span> (<span class="emph">ASI Magyarország</span>). At the memo, please add the name of the registered participant(s), and please also add „<span class="emph">FJK támogatás</span>”. If you have any other question or request, please feel free to contact us via e-mail at <a href="mailto:info@fjk.hu">info@fjk.hu</a>!<br>Please note that if you can use only a non-Hungarian bank for transfer, then you are not required to pay deposit - due to high amount of transfer costs. You can settle your registration fee at the conference registration venue in cash. In this case, please expect an e-mail from the organizers right before the conference when we ask you for a second confirmation of your application.<br>Cost of participation:<br>The Early bird registration fee is 3.000 Ft. For Early Bird registration please transfer the above amount by the 30th of December, 2018 until 23:55.<br>The normal registration fee is 3.500 HUF, and is open until the 14th of January, 2019, 23.55. For valid registration, please transfer the money until the afore mentioned date and time.<br>The last minute registration fee is 4,500 HUF. Please register and transfer the amount until the 21st of January, 2019, 23:55.<br>Conference participation is free only on Sabbath and/or weekdays from 17:00, but requires registration.'
    },
    tabs: {
      conference: {
        title: 'Attendance',
        meal: {
          title: 'Meal',
          subtitle: '<b>Thursday lunch:</b> Mediterranean chickpea vegetable stew and "Bounty" coconut rice pudding with chocolate sauce<br><b>Thursday dinner:</b> Vegetable patties with apple & beetroot veganaise salad<br><b>Friday lunch:</b> Vegan Spaghetti Bolognese with vegan cheese & Tapioca pudding with blueberries<br><b>Friday dinner:</b> Tortilla roll filled with chili beans with fried potatoes<br><b>Saturday lunch:</b> 2 sandwich and fruits<br><b>Saturday dinner:</b> Nasi Goreng Indonesian baked rice<br>',
          thursday: 'Thursday',
          friday: 'Friday',
          sabbath: 'Sabbath',
          lunch: 'Lunch',
          dinner: 'Dinner'
        },
        attendance: {
          full: 'Participating in the whole conference',
          sabbath: 'Visiting only on Sabbath and/or on workdays after 17:00'
        }
      },
      // housing: {
      //   title: 'Housing',
      //   subtitle: 'We would also like to help you find accommodation easily for the time of the conference. We found the following possibilites that you can look up and arrange accomodation:',
      //   options: [
      //     {
      //       title: 'Opera Hostel:<br><small>1066 Budapest, Ó u. 13.</small>',
      //       subtitle: '<strong>3.840 HUF/person/1 night</strong>, multiple beds room (8 person), male or female'
      //     },
      //     {
      //       title: 'Avenue Hostel<br><small>1067 Budapest, Oktogon tér 4.</small>',
      //       subtitle: '<strong>3.000-4.000 HUF/person/1 night</strong>, multiple beds room (4-, 6-, 8 person), male or female'
      //     },
      //     {
      //       title: 'Broadway City Panzió<br><small>1066 Budapest, Nagymező u. 4.</small>',
      //       subtitle: '<strong>3.000-4.000 HUF/person/1 night</strong>, multiple beds room'
      //     },
      //     {
      //       title: 'Baraka Hostel<br><small>1073 Budapest, Erzsébet krt 1-3.</small>',
      //       subtitle: '<strong>3.000-4.000 HUF/person/1 night</strong>, multiple beds room'
      //     }
      //   ]
      // },
      program: {
        title: 'Program',
        subtitle: 'Help us',
        label: 'Volunteer work',
        translate: 'Translation (English - Hungarian)',
        smallGroups: 'Guiding small-group discussions',
        diaconia: 'Diaconia',
        other: 'Other services'
      },
      outreach: {
        title: 'Outreach',
        subtitle: 'Join the outreach programs during the conference',
        label: 'Please mark the checkboxes for the programs you would like to participate!',
        thursday: {
          label: 'Thursday afternoon',
          childrensHome: '<b>Visiting a children\'s home</b>'
          
        },
        friday: {
          label: 'Friday afternoon',
          letters: '<b>Leaving letters in the city</b>',
          pebbles: '<b>Leaving pebbles in the city</b>',
          nursingHome: '<b>Singing in a nursing home</b>',
          noOutreach: '<b>I cannot participate / I will choose at the conference</b>'
        }
      },
      support: {
        title: 'Support',
        subtitle: 'Support the Conference',
        label: 'Funding packages',
        description: 'You will have the opportunity to donate for the conference by purchasing Funding Packages at the Conference. Every package includes specially designed, FJK – marked products, pocket-book (more options) and Glow tracts.',
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
