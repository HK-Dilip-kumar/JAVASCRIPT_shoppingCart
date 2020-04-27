//hare krishna....
const bodi=document.querySelector('#courses-list');
const shoppingCartContent=document.querySelector('#cart-content tbody');
const clearCart=document.querySelector('#clear-cart');
eventListener();

function eventListener(e)
{
    bodi.addEventListener('click',buyCourse);
    shoppingCartContent.addEventListener('click',RemoveCourse);
    clearCart.addEventListener('click',RemoveCart);
}

function buyCourse(e)
{
    e.preventDefault();
    if(e.target.classList.contains('add-to-cart'))
    {
        const course=e.target.parentElement.parentElement;
        getCourseInfo(course);
    }
}
function getCourseInfo(course)
{
    const courseInfo={
        image :course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price :course.querySelector('.price span').textContent,
        id: course.querySelector('a').getAttribute('data-id')
    }
    addIntoCart(courseInfo);
}
function addIntoCart(course)
{
    const row=document.createElement('tr');
    row.innerHTML=`
        <td>"${course.image}" width=100</td>
        <td>${course.title}</td>
        <td>${course.price}</td>
        <td><a href="#" class="remove" data-id="${course.id}">X</td>
    `;
    shoppingCartContent.appendChild(row);

    //saving into storage
    saveIntoStorage(course);
}
function RemoveCourse(e)
{
    console.log(e.target.classList.contains('remove'));
    e.target.parentElement.parentElement.remove();
}
function RemoveCart(e)
{
    console.log("removing cartt")
    shoppingCartContent.innerHTML="";
}

function saveIntoStorage(course)
{

}