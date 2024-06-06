let name ='Alex'.trim()
let money ='10000'
let account =7777

let answer = prompt("Как вас зовут?").toLowerCase()

if(answer ===name){
    let secondAnswer = prompt('Номер счета?')

    if(secondAnswer ===account) {
        let thirdAnswer =prompt('Сколько обналичить?')
        if(money <=10000) {
            alert('Все отлично');
            
        } else {
          alert('Недостаточно средств')
        }
    } else {
        alert('Пользователь не найден, досвидули')
    }
}
 else {
    alert('Пользователь не найден, досвидули')
}
