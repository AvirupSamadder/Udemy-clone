
import popdata from "/data/popupdata.js"

let dataarr=popdata();

console.log(dataarr);

    const Devlop = (data) => {
        console.log(data);
        let box = document.createElement('div');
        let name = document.createElement('h2');
        name.innerText = data.course_name;
        let discrip = document.createElement('p');
        discrip.innerText = data.courseHeading;
        let updated = document.createElement('h4');
        let box2 = document.createElement('div');
         let btn= document.createElement('button');
        btn.innerText="Add to Cart";
        let wishlist=document.createElement('div')
        wishlist.id="wishlist";
        wishlist.innerHTML=` <i class="fa-regular fa-heart"></i>`
        updated.innerText = data.updatedDate;
        box2.append(btn,wishlist)
        box.append(name,discrip,updated,box2)
    return box.innerHTML;
}




function appendslider(data,parent){
    parent.innerHTMl="";
    data.map((el,i)=>{
        let box = document.createElement("div");
        let hoverbox = document.createElement("div");
        hoverbox.id="hoverbox";
        hoverbox.innerHTML=`${Devlop(dataarr[i])}`
        let subbox = document.createElement("div");
        box.setAttribute("id","slidercontent")
        let courseimage= document.createElement("img");
        courseimage.src= el.image;
        let title=  document.createElement("h4");
        title.innerText=el.title;
        let instructor= document.createElement("p");
        instructor.innerText=el.instructor;
        let rating= document.createElement("h5");
        rating.innerText=el.rating;
        let ratingdiv= document.createElement('div');
        let ratingqty= document.createElement("p");
        ratingqty.innerText=el.totalsale;
        let rating_img= document.createElement("img");
        rating_img.setAttribute("id","ratingpic")
        if(el.rating<4.5){
            rating_img.src= `https://th.bing.com/th/id/OIP.O3wbiD5XgCTesLXWdwoh5QHaBi?pid=ImgDet&w=480&h=100&rs=1`
        }else if(el.rating==4.5){
            rating_img.src= `https://th.bing.com/th/id/R.7f71a02152c2e86b399ca55ac4208a11?rik=43%2biuqEjTNXppg&riu=http%3a%2f%2fi1.wp.com%2fsupplementpolice.com%2fwp-content%2fuploads%2f2017%2f04%2f46stars_small.png&ehk=eD26%2b28nDqOEyjHuzvl50ZrP5vk0FU0Vl9nDF7syIl4%3d&risl=&pid=ImgRaw&r=0`
        }else if(el.rating>4.5){
            rating_img.src= `https://garagegympro.com/wp-content/uploads/2019/03/4-7-stars-rating.jpg`
        }
        ratingdiv.append(rating,rating_img,ratingqty);
        let pricebox= document.createElement("div");
        let price= document.createElement("h4");
        price.innerText="Rs "+el.price;
        let stprice= document.createElement("s");
        stprice.innerText="Rs"+el.stprice;
        pricebox.append(price,stprice)
        subbox.append(title,instructor,ratingdiv,pricebox)
        box.append(hoverbox,courseimage,subbox);
        parent.append(box);
    })
 }

 export default appendslider;