const steps = [
  {title: "1. Farm", txt: `<span class="label success">CHECK-IN</span> Illum omnis aliquid nihil aut. Voluptatibus a alias autdi hic. 
<p><a href="https://explorer.te-food.com/get_html/transaction/23183490">blockchain transation receipt</a>`},
  {title: "2. Market", txt: `Sunt et vel veritatis atque non eligendi rerum excepturi. Est quis molestias libero repellat deleniti blanditiis autem. Est quia sed modi veritatis nam. Temporibus cum voluptatem qui sed et quo.
  <p><a href="https://explorer.te-food.com/get_html/transaction/23183474">blockchain transation receipt</a>`},
  {title: "3. Netherlands", txt: `Bwer molestias libero repellat deleniti blanditiis autem. Est quia sed modi veritatis nam. Temporibu.
  <p><a href="https://explorer.te-food.com/get_html/transaction/23183464">blockchain transation receipt</a>`},
  {title: "4. Copenhagen", txt: `
  <span class="label success">CHECK-OUT</span>
    Di rerum excepturi. Est quis molestias libero repellat deleniti blanditiiritatis nam. Temporibus cum voluptatem qui sed et quo.
  <p><a href="https://explorer.te-food.com/get_html/transaction/23183464">blockchain transation receipt</a>`},
]

const html = `
<div class="padding-2 bg-secondary">
      <h3 class="text-center text-uppercase">The trace to origin</h3>
  </div>

  <div class="grid-x width-100">             
      ${steps.map(({title, txt}) => {
        return `                
        <div class="grid-x width-100">
                    <div class="cell shrink">
          <div class="dotline">
              <div class="dotline__line"></div>
              <div class="dotline__circle"></div>
          </div>
      </div>
      <div class="cell auto padding-1">
          <h4>${title}</h4>
          <p>${txt}
      </div>
      </div>
`
}).join('')}     
  </div>
`

document.querySelector('#page-timeline').innerHTML = html

