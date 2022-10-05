let data = [
   {
      img: './image1.png',
      title: 'Медный чайник с <br> фарфоровой ручкой',
      price: '1 953 грн',
      info: 'sale'
   },
   {
      img: './image2.png',
      title: 'Медный чайник с <br> фарфоровой ручкой',
      price: '1 953 грн',
      info: 'sale'
   },
   {
      img: './image3.png',
      title: 'Медный чайник с <br> фарфоровой ручкой',
      price: '1 953 грн',
      info: 'sale'
   }
]



let data2 = [
   {
      img: './img/ava.svg',
      name: 'Иван Иванов',
      date: '20.10.21',
      info: 'Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. '
   },
   {
      img: './img/ava.svg',
      name: 'Иван Иванов',
      date: '20.10.21',
      info: 'Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. '
   },
   {
      img: './img/ava.svg',
      name: 'Иван Иванов',
      date: '20.10.21',
      info: 'Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. '
   }
]


let data3 = [
   {
      img: './img/potion 1.svg',
      name: 'Аутентичность',
      info: 'Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен.',
      next: 'Читать больше'
   },
   {
      img: './img/potion 1.svg',
      name: 'Изысканность',
      info: 'Наши изделия из меди являются очень практичными. В то же время они наполнят особой магией ваш дом или рабочее....',
      next: 'Читать больше'
   },
   {
      img: './img/potion 1.svg',
      name: 'Честная оплата',
      info: 'Мы стремимся предоставить лучший товар по лучшей цене с сервисом высокого уровня. Но все начинается c...',
      next: 'Читать больше'
   },
   {
      img: './img/potion 1.svg',
      name: 'Большой ассортимент',
      info: 'У нас есть все от миниатюрных настольных паровых дистилляторов эфирных масел до крупногабаритного оборудования...',
      next: 'Читать больше'
   },
   {
      img: './img/potion 1.svg',
      name: 'Доставка по всему миру',
      info: 'Вы можете получить нашу продукцию в кратчайшие сроки в любую точку земного шара.',
      next: 'Читать больше'
   },
   {
      img: './img/potion 1.svg',
      name: 'Гарантия качества',
      info: 'Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции.',
      next: 'Читать больше'
   },
   {
      img: './img/potion 1.svg',
      name: 'Удобство в использовании',
      info: 'Наши изделия из меди имеют уникальный дизайн, который разрабатывался нами с целью получения максимальной...',
      next: 'Читать больше'
   },
   {
      img: './img/potion 1.svg',
      name: 'Забота об окружающей среде',
      info: 'От 2 до 5% от стоимости каждого приобретенного товара в нашем магазине мы направляем на защиту....',
      next: 'Читать больше'
   }
]


let cont = document.querySelector('.container')
let boxes = document.querySelector(' .boxes')
let boxes2 = document.querySelector('.boxes2')
let boxes3 = document.querySelector('.boxes3')



let header_text = document.createElement('div')
header_text.classList.add('header_text')
header_text.innerHTML = 'Мы рекомендуем'


let cco = document.createElement('div')
let colr = document.createElement('div')
let colr2 = document.createElement('div')
let colr3 = document.createElement('div')
let ds =  document.createElement('div')
cco.classList.add('cco')
colr.classList.add('colr')
colr2.classList.add('colr2')
colr3.classList.add('colr3')
ds.classList.add('ds')

for (let item of data) {
   /// a 
   let box = document.createElement('div')
   let blocks = document.createElement('div')
   let box_img = document.createElement('img')
   let infpric = document.createElement('div')
   let inf = document.createElement('h4')
   let pric = document.createElement('h3')
   //// b
   
   
   box.classList.add('box')
   box_img.classList.add('box_img')
   blocks.classList.add('blocks')
   infpric.classList.add('infpric')
   pric.classList.add('pric')
   inf.classList.add('inf')
   box_img.src = item.img;
   inf.innerHTML = item.title

   pric.innerHTML = item.price
   
   //// c
   cco.append(colr, colr2, colr3)
   infpric.append(inf, pric)
   box.append(box_img, infpric,)

   boxes.append(box)
   cont.append(header_text, boxes, cco,  )
   
   
   
   
}





cont.innerHTML += `

<button>Перейти в каталог </button>
<div class="footer">

<div class="first">
   <div class="cooper"></div>
   <div class="prava"></div>
   <div class="ee">
      <a href="#">Политика конфиденциальности</a>
   </div>
</div>

<div class="sdf">

   <div class="second">
      <h1>Навигация </h1>
      <p>Каталог</p>
      <p>Новости</p>
      <p>Доставка</p>
      <p>О нас</p>
      <p>Контакты</p>


   </div>


   <div class="third">
      <h1>Каталог </h1>
      <p>Для эфирных масел</p>
      <p>Для гидролатов</p>
      <p>Медная посуда</p>
      <p>Аксессуары из меди</p>
      <p>Индивидуальный заказ</p>
      <p>Скидки и предложения</p>

   </div>
   <div class="four">
      <h1>Контакты </h1>
      <h2>Бажана 8-Б, Киев, <br>
         02132 Украина </h2>
      <p>+38 (096) 990 67 56</p>
      <p>a.alambik@gmail.com</p>

      <div class="iccons">
         <div class="igm"><img src="./_x30_4.Twitter.png" height="30px"  balt=""></div>
         <div class="igm"><img src="./Icon_11_.png" height="30px"  alt=""></div>
         <div class="igm"><img src="./_x30_4.Twitter.png"
            height="30px"    alt=""></div>
      </div>

   </div>


</div>


</div>

`






