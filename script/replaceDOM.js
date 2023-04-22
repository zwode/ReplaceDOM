const needText = [
    {
        from: 'Landing template for startups',
        to: 'Startup Landing Page Template'
    },
    {
        from: 'Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.',
        to: 'Create Stunning Landing Pages Once and For All - Our Template is Fully Responsive Across All Devices!'
    },
    {
        from: 'The majority our customers do not understand their workflows.',
        to: 'Unlock the Power of Efficient Workflows - Let Us Help You Simplify Your Processes and Maximize Productivity!'
    },
    {
        from: 'Start free trial',
        to: 'Free Trial - Start Now!'
    }
]

const replaceHeader = () => {
  let htmlBody = document.querySelectorAll('*');
  const test = htmlBody.forEach(element => {
    needText.forEach(el => {
      if (el.from == element.innerText) {
        element.innerHTML = element.innerHTML.replace(el.from, el.to)
      }
    })
  })
};

replaceHeader ();
