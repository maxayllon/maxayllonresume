const plusDescription = () => {

  const plus1 = document.querySelector('.plus-1')
  const itemDescription1 = document.querySelector('.item_description_1')

  const plus2 = document.querySelector('.plus-2')
  const itemDescription2 = document.querySelector('.item_description_2')

  const plus3 = document.querySelector('.plus-3')
  const itemDescription3 = document.querySelector('.item_description_3')

  const plus4 = document.querySelector('.plus-4')
  const itemDescription4 = document.querySelector('.item_description_4')

  const plus5 = document.querySelector('.plus-5')
  const itemDescription5 = document.querySelector('.item_description_5')

  const plus6 = document.querySelector('.plus-6')
  const itemDescription6 = document.querySelector('.item_description_6')

  const plus7 = document.querySelector('.plus-7')
  const itemDescription7 = document.querySelector('.item_description_7')

  const plus8 = document.querySelector('.plus-8')
  const itemDescription8 = document.querySelector('.item_description_8')

  const plus9 = document.querySelector('.plus-9')
  const itemDescription9 = document.querySelector('.item_description_9')

  console.log(plus1)
  console.log(itemDescription1)

  plus1.addEventListener('click', () =>{
    itemDescription1.classList.toggle('no-display');
    console.log("hello");
  })

  plus2.addEventListener('click', () =>{
    itemDescription2.classList.toggle('no-display');
    console.log("hello");
  })

  plus3.addEventListener('click', () =>{
    itemDescription3.classList.toggle('no-display');
    console.log("hello");
  })

  plus4.addEventListener('click', () =>{
    itemDescription4.classList.toggle('no-display');
    console.log("hello");
  })

  plus5.addEventListener('click', () =>{
    itemDescription5.classList.toggle('no-display');
    console.log("hello");
  })

  plus6.addEventListener('click', () =>{
    itemDescription6.classList.toggle('no-display');
    console.log("hello");
  })

  plus7.addEventListener('click', () =>{
    itemDescription7.classList.toggle('no-display');
    console.log("hello");
  })

  plus8.addEventListener('click', () =>{
    itemDescription8.classList.toggle('no-display');
    console.log("hello");
  })

  plus9.addEventListener('click', () =>{
    itemDescription9.classList.toggle('no-display');
    console.log("hello");
  })
}

export { plusDescription };
