import html from './core.js'

const cars = ['Honda', 'Merchedes', 'Porches', 'BMW']
const isSuccess = true

const htmls = html`
    <h1>${isSuccess && `Show success`}</h1>
    <ul>
        ${cars.map(car => `<li>${car}</li>`).join('')}
    </ul>
`

console.log(htmls)